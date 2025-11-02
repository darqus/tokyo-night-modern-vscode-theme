import {
  existsSync,
  readdirSync,
  readFileSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs'
import { join } from 'node:path'
import { safeExec, SafeExecError } from '../src/theme/utils/safe-exec'
import { computeVersion } from './versioning'

class ReleaseManager {
  private readonly readmePath = join(process.cwd(), 'README.md')

  private exec(
    command: string,
    options: { silent?: boolean; cwd?: string } = {}
  ): string {
    try {
      return safeExec(command, options)
    } catch (error) {
      if (error instanceof SafeExecError) {
        console.error(`Command failed: ${error.command}`)
        console.error(error.message)
      } else {
        console.error(`Unexpected error: ${error}`)
      }
      throw error
    }
  }

  private getCurrentVersion(): string {
    try {
      const packageJson = JSON.parse(readFileSync('package.json', 'utf8'))
      return packageJson.version || '0.0.0'
    } catch (error) {
      console.warn('Could not read package.json version, using 0.0.0')
      return '0.0.0'
    }
  }

  private getLastTag(): string | null {
    try {
      const lastTag = this.exec('git describe --tags --abbrev=0', {
        silent: true,
      })
      return lastTag || null
    } catch (error) {
      console.warn(
        'Could not get last tag:',
        error instanceof Error ? error.message : error
      )
      return null
    }
  }

  private getCommitCountSinceLastRelease(): number {
    const lastTag = this.getLastTag()
    try {
      const countCmd = lastTag
        ? `git rev-list ${lastTag}..HEAD --count`
        : 'git rev-list HEAD --count'
      const count = this.exec(countCmd, { silent: true })
      const n = Number.parseInt(count || '0', 10)
      return Number.isFinite(n) ? n : 0
    } catch (error) {
      console.warn(
        'Could not get commit count:',
        error instanceof Error ? error.message : error
      )
      return 0
    }
  }

  private detectReleaseType(): 'patch' | 'minor' | 'major' {
    try {
      const lastTag = this.exec('git describe --tags --abbrev=0', {
        silent: true,
      })
      const commits = this.exec(`git log ${lastTag}..HEAD --oneline`, {
        silent: true,
      })

      if (!commits) {
        console.log('📝 No new commits since last release')
        return 'patch'
      }

      console.log(`📋 Commits since ${this.sanitizeOutput(lastTag)}:`)
      console.log(this.sanitizeOutput(commits))

      const commitLines = commits.split('\n').filter((line) => line.trim())

      const hasBreaking = commitLines.some(
        (line) =>
          line.includes('BREAKING CHANGE') ||
          line.includes('!:') ||
          line.match(/^[a-f0-9]+\s+\w+!:/)
      )

      const hasFeature = commitLines.some(
        (line) =>
          line.includes('feat:') ||
          line.includes('feature:') ||
          line.includes('add:') ||
          line.includes('new:')
      )

      if (hasBreaking) {
        console.log('🚨 Breaking changes detected → MAJOR release')
        return 'major'
      } else if (hasFeature) {
        console.log('✨ New features detected → MINOR release')
        return 'minor'
      } else {
        console.log('🔧 Bug fixes/improvements detected → PATCH release')
        return 'patch'
      }
    } catch (error) {
      console.log('⚠️  Could not analyze commits, defaulting to patch release')
      console.warn('Error:', error instanceof Error ? error.message : error)
      return 'patch'
    }
  }

  private checkWorkingDirectory(): void {
    try {
      const status = this.exec('git status --porcelain', { silent: true })
      if (status) {
        console.error('❌ Working directory is not clean:')
        console.error(this.sanitizeOutput(status))
        throw new Error('Please commit or stash your changes before releasing')
      }
    } catch (error) {
      throw new Error(
        `Failed to check git status: ${error instanceof Error ? error.message : error}`
      )
    }
  }

  private checkBranch(): void {
    try {
      const branch = this.exec('git branch --show-current', { silent: true })
      if (branch !== 'main' && branch !== 'master') {
        console.warn(
          `⚠️  You are on branch '${this.sanitizeOutput(branch)}', not main/master`
        )
        const proceed = process.argv.includes('--force')
        if (!proceed) {
          throw new Error('Use --force to release from non-main branch')
        }
      }
    } catch (error) {
      throw new Error(
        `Failed to check current branch: ${error instanceof Error ? error.message : error}`
      )
    }
  }

  private buildProject(): void {
    console.log('🏗️  Building project...')
    this.exec('npm run build')
    console.log('✅ Build completed')
  }

  private removeOldVsixFiles(): void {
    console.log('🗑️  Removing old .vsix files...')
    try {
      const files = readdirSync(process.cwd())
      const vsixFiles = files.filter((file) => file.endsWith('.vsix'))
      for (const file of vsixFiles) {
        const filePath = join(process.cwd(), file)
        unlinkSync(filePath)
        console.log(`  ✓ Removed ${file}`)
      }
      if (vsixFiles.length > 0) {
        console.log(`✅ Removed ${vsixFiles.length} old .vsix file(s)`)
      } else {
        console.log('ℹ️  No old .vsix files found')
      }
    } catch (error) {
      console.warn('⚠️  Could not remove old .vsix files:', error)
    }
  }

  private generatePackage(): void {
    console.log('📦 Generating .vsix package...')
    this.removeOldVsixFiles()
    this.exec('npm run build:vsix')
    console.log('✅ Package generated')
  }

  private updateReadmeWithVsixLink(version: string): void {
    console.log('📝 Updating README with .vsix download link...')
    try {
      if (!existsSync(this.readmePath)) {
        console.warn('⚠️  README.md not found, skipping update')
        return
      }

      const readme = readFileSync(this.readmePath, 'utf8')
      const vsixFileName = `tokyo-modern-${version}.vsix`
      const repoUrl = 'https://github.com/darqus/tokyo-modern-vscode-theme'
      const downloadLink = `[${vsixFileName}](${repoUrl}/releases/download/v${version}/${vsixFileName})`
      const githubReleasesLink = `[GitHub Releases](${repoUrl}/releases)`

      let updatedReadme = readme

      const downloadsSectionRegex = /## 📦 Downloads[\s\S]*?(?=## |$)/
      if (downloadsSectionRegex.test(readme)) {
        updatedReadme = updatedReadme.replace(downloadsSectionRegex, '')
      }

      const vsixSectionRegex =
        /(### From \.vsix File[^\n]*\n\n1\.\s*Download the `\.vsix` file:\s*)(\[.*?\]\([^)]+\))(\s+or\s+\[GitHub Releases\]\([^)]+\))/m

      if (vsixSectionRegex.test(updatedReadme)) {
        updatedReadme = updatedReadme.replace(
          vsixSectionRegex,
          `$1${downloadLink} or ${githubReleasesLink}`
        )
      } else {
        const alternativeRegex =
          /(### From \.vsix File[^\n]*\n\n1\.\s*Download the `\.vsix` file:\s*)(\[.*?\]\([^)]+\))/m
        if (alternativeRegex.test(updatedReadme)) {
          updatedReadme = updatedReadme.replace(
            alternativeRegex,
            `$1${downloadLink} or ${githubReleasesLink}`
          )
        }
      }

      writeFileSync(this.readmePath, updatedReadme, 'utf8')
      console.log('✅ README updated with download link')
    } catch (error) {
      console.warn('⚠️  Could not update README:', error)
    }
  }

  private bumpVersion(
    type: 'patch' | 'minor' | 'major',
    prerelease: boolean
  ): string {
    console.log(`📈 Bumping ${type} version (with commit count)...`)

    const currentVersion = this.getCurrentVersion()
    const commitCount = this.getCommitCountSinceLastRelease()
    console.log(`Current version: ${currentVersion}`)
    console.log(`Commits since last release: ${commitCount}`)

    const newVersion = computeVersion(
      currentVersion,
      type,
      commitCount,
      prerelease
    )

    this.exec(`npm version ${newVersion} --no-git-tag-version`)

    console.log(`✅ Version bumped to ${newVersion}`)
    return newVersion
  }

  private generateChangelog(): void {
    console.log('📝 Generating changelog...')
    try {
      this.exec('npx standard-version --skip.tag --skip.commit --skip.bump')
      console.log('✅ Changelog updated')
    } catch (error) {
      console.warn('⚠️  Could not generate changelog automatically')
      console.warn('Error:', error instanceof Error ? error.message : error)
    }
  }

  private commitAndTag(version: string): void {
    console.log('📦 Committing changes and creating tag...')

    try {
      this.exec('git add .')
      this.exec(`git commit -m "chore(release): v${version}"`)
      this.exec(`git tag v${version} -m "Release v${version}"`)
      console.log(`✅ Created commit and tag v${version}`)
    } catch (error) {
      console.error('❌ Failed to create commit or tag')
      throw error
    }
  }

  private pushToRemote(): void {
    console.log('🚀 Pushing to remote repository...')

    this.exec('git push origin HEAD')
    this.exec('git push origin --tags')

    console.log('✅ Pushed to remote repository')
  }

  private checkGitHubCLI(): boolean {
    try {
      this.exec('gh --version', { silent: true })
      return true
    } catch {
      return false
    }
  }

  private checkGitHubAuth(): boolean {
    try {
      const result = this.exec('gh auth status', { silent: true })
      return result.includes('Logged in')
    } catch {
      return false
    }
  }

  private createGitHubRelease(version: string): void {
    console.log('🎉 Creating GitHub release...')

    try {
      if (!this.checkGitHubCLI()) {
        console.warn('⚠️  GitHub CLI (gh) is not installed')
        console.log('   Install it: https://cli.github.com/')
        console.log(
          `📝 Manual release creation: https://github.com/darqus/tokyo-modern-vscode-theme/releases/new?tag=v${version}`
        )
        return
      }

      if (!this.checkGitHubAuth()) {
        console.warn('⚠️  GitHub CLI is not authenticated')
        console.log('   Run: gh auth login')
        console.log(
          `📝 Manual release creation: https://github.com/darqus/tokyo-modern-vscode-theme/releases/new?tag=v${version}`
        )
        return
      }

      const vsixFiles = readdirSync(process.cwd()).filter((f) =>
        f.endsWith('.vsix')
      )
      const releaseCmd =
        vsixFiles.length > 0
          ? `gh release create v${version} ${vsixFiles.join(' ')} --title "v${version}" --generate-notes`
          : `gh release create v${version} --title "v${version}" --generate-notes`

      this.exec(releaseCmd)
      console.log(`✅ GitHub release v${version} created successfully`)
    } catch (error) {
      console.error('❌ Failed to create GitHub release')
      console.error(error instanceof Error ? error.message : error)
      console.log(
        `📝 Manual release creation: https://github.com/darqus/tokyo-modern-vscode-theme/releases/new?tag=v${version}`
      )
    }
  }

  private sanitizeOutput(text: string): string {
    return text.replace(/[\x00-\x1f\x7f-\x9f]/g, '').trim()
  }

  async release(
    options: { prerelease?: boolean; type?: 'patch' | 'minor' | 'major' } = {}
  ): Promise<void> {
    try {
      console.log('🚀 Starting release process...')

      this.checkWorkingDirectory()
      this.checkBranch()
      this.buildProject()

      const releaseType = options.type || this.detectReleaseType()
      const version = this.bumpVersion(releaseType, options.prerelease || false)

      this.generateChangelog()
      this.updateReadmeWithVsixLink(version)
      this.generatePackage()
      this.commitAndTag(version)
      this.pushToRemote()
      this.createGitHubRelease(version)

      console.log('🎉 Release completed successfully!')
      console.log(`📦 Version: ${version}`)
    } catch (error) {
      console.error('❌ Release failed:')
      console.error(error instanceof Error ? error.message : error)
      process.exit(1)
    }
  }
}

const manager = new ReleaseManager()
manager
  .release({
    prerelease: process.argv.includes('--prerelease'),
    type: process.argv.includes('--major')
      ? 'major'
      : process.argv.includes('--minor')
        ? 'minor'
        : process.argv.includes('--patch')
          ? 'patch'
          : undefined,
  })
  .catch((error) => {
    console.error('Release process failed:', error)
    process.exit(1)
  })
