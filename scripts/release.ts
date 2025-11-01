#!/usr/bin/env ts-node

import { execSync } from 'node:child_process'
import {
  existsSync,
  readdirSync,
  readFileSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs'
import { join } from 'node:path'
import { computeVersion } from './versioning'

interface ReleaseOptions {
  type?: 'patch' | 'minor' | 'major'
  prerelease?: boolean
  dryRun?: boolean
  skipTests?: boolean
  skipBuild?: boolean
}

class ReleaseManager {
  private packagePath = join(process.cwd(), 'package.json')
  private changelogPath = join(process.cwd(), 'CHANGELOG.md')
  private readmePath = join(process.cwd(), 'README.md')

  private exec(command: string, options: { silent?: boolean } = {}): string {
    console.log(`🔧 ${command}`)
    try {
      const result = execSync(command, {
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
      })
      return result ? result.toString().trim() : ''
    } catch (error) {
      console.error(`❌ Command failed: ${command}`)
      // Выводим stderr если есть
      if (error instanceof Error && 'stderr' in error) {
        const stderr = (error as { stderr?: Buffer }).stderr
        if (stderr) {
          console.error(`   Error output: ${stderr.toString()}`)
        }
      }
      throw error
    }
  }

  private execSafe(command: string): {
    success: boolean
    output: string
    error?: string
  } {
    try {
      const output = execSync(command, {
        encoding: 'utf8',
        stdio: 'pipe',
      })
      return {
        success: true,
        output: output ? output.toString().trim() : '',
      }
    } catch (error) {
      let errorMessage = 'Unknown error'
      if (error instanceof Error) {
        errorMessage = error.message
        if ('stderr' in error) {
          const stderr = (error as { stderr?: Buffer }).stderr
          if (stderr) {
            errorMessage = stderr.toString().trim() || errorMessage
          }
        }
      }
      return {
        success: false,
        output: '',
        error: errorMessage,
      }
    }
  }

  private getCurrentVersion(): string {
    const pkg = JSON.parse(readFileSync(this.packagePath, 'utf8'))
    return pkg.version
  }

  private getLastTag(): string | null {
    try {
      const lastTag = this.exec('git describe --tags --abbrev=0', {
        silent: true,
      })
      return lastTag || null
    } catch {
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
      const n = parseInt(count || '0', 10)
      return Number.isFinite(n) ? n : 0
    } catch {
      return 0
    }
  }

  // computeVersion moved to ./versioning

  private detectReleaseType(): 'patch' | 'minor' | 'major' {
    try {
      // Получаем коммиты с последнего тега
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

      console.log(`📋 Commits since ${lastTag}:`)
      console.log(commits)

      // Анализируем коммиты для определения типа релиза
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
    } catch (_error) {
      console.log('⚠️  Could not analyze commits, defaulting to patch release')
      return 'patch'
    }
  }

  private checkWorkingDirectory(): void {
    try {
      const status = this.exec('git status --porcelain', { silent: true })
      if (status) {
        console.error('❌ Working directory is not clean:')
        console.error(status)
        throw new Error('Please commit or stash your changes before releasing')
      }
    } catch (_error) {
      throw new Error('Failed to check git status')
    }
  }

  private checkBranch(): void {
    try {
      const branch = this.exec('git branch --show-current', { silent: true })
      if (branch !== 'main' && branch !== 'master') {
        console.warn(`⚠️  You are on branch '${branch}', not main/master`)
        const proceed = process.argv.includes('--force')
        if (!proceed) {
          throw new Error('Use --force to release from non-main branch')
        }
      }
    } catch (_error) {
      throw new Error('Failed to check current branch')
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
    // Удаляем старые .vsix файлы перед созданием нового
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
      const vsixFileName = `tokyo-night-modern-${version}.vsix`
      const repoUrl =
        'https://github.com/darqus/tokyo-night-modern-vscode-theme'
      const downloadLink = `[${vsixFileName}](${repoUrl}/releases/download/v${version}/${vsixFileName})`
      const githubReleasesLink = `[GitHub Releases](${repoUrl}/releases)`

      let updatedReadme = readme

      // Удаляем секцию Downloads, если она есть
      const downloadsSectionRegex = /## 📦 Downloads[\s\S]*?(?=## |$)/
      if (downloadsSectionRegex.test(readme)) {
        updatedReadme = updatedReadme.replace(downloadsSectionRegex, '')
      }

      // Обновляем ссылку в первом пункте раздела "From .vsix File"
      // Ищем паттерн: "1. Download the `.vsix` file: [ссылка] or [GitHub Releases]"
      const vsixSectionRegex =
        /(### From \.vsix File[^\n]*\n\n1\.\s*Download the `\.vsix` file:\s*)(\[.*?\]\([^)]+\))(\s+or\s+\[GitHub Releases\]\([^)]+\))/m

      if (vsixSectionRegex.test(updatedReadme)) {
        // Заменяем ссылку в существующем формате
        updatedReadme = updatedReadme.replace(
          vsixSectionRegex,
          `$1${downloadLink} or ${githubReleasesLink}`
        )
      } else {
        // Альтернативный паттерн для случая без "or [GitHub Releases]"
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
      // Используем standard-version для генерации changelog без поднятия версии
      this.exec('npx standard-version --skip.tag --skip.commit --skip.bump')
      console.log('✅ Changelog updated')
    } catch (_error) {
      console.warn('⚠️  Could not generate changelog automatically')
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
      execSync('gh --version', { stdio: 'pipe' })
      return true
    } catch {
      return false
    }
  }

  private checkGitHubAuth(): boolean {
    try {
      const result = execSync('gh auth status', {
        stdio: 'pipe',
        encoding: 'utf8',
      })
      return result.includes('Logged in')
    } catch {
      return false
    }
  }

  private createGitHubRelease(version: string): void {
    console.log('🎉 Creating GitHub release...')

    try {
      // Проверяем наличие GitHub CLI
      if (!this.checkGitHubCLI()) {
        console.warn('⚠️  GitHub CLI (gh) is not installed')
        console.log('   Install it: https://cli.github.com/')
        console.log(
          `📝 Manual release creation: https://github.com/darqus/tokyo-night-modern-vscode-theme/releases/new?tag=v${version}`
        )
        return
      }

      // Проверяем авторизацию
      if (!this.checkGitHubAuth()) {
        console.warn('⚠️  GitHub CLI is not authenticated')
        console.log('   Run: gh auth login')
        console.log(
          `📝 Manual release creation: https://github.com/darqus/tokyo-night-modern-vscode-theme/releases/new?tag=v${version}`
        )
        return
      }

      // Извлекаем changelog для этой версии
      let releaseNotes = `Release v${version}`

      try {
        const changelog = readFileSync(this.changelogPath, 'utf8')
        const versionSection = changelog.match(
          new RegExp(`## \\[${version}\\][\\s\\S]*?(?=## \\[|$)`)
        )
        if (versionSection) {
          releaseNotes = versionSection[0].replace(`## [${version}]`, '').trim()
        }
      } catch (_error) {
        console.warn('⚠️  Could not extract release notes from changelog')
      }

      // Путь к .vsix файлу
      const vsixFileName = `tokyo-night-modern-${version}.vsix`
      const vsixPath = join(process.cwd(), vsixFileName)

      // Проверяем, что файл существует
      if (!existsSync(vsixPath)) {
        console.error(`❌ .vsix file not found: ${vsixPath}`)
        throw new Error(`VSIX file not found: ${vsixFileName}`)
      }

      // Создаем временный файл для release notes
      const notesFile = join(process.cwd(), `.release-notes-${version}.tmp`)
      writeFileSync(notesFile, releaseNotes, 'utf8')

      try {
        // Создаем релиз через GitHub CLI (без файла)
        const createCommand = `gh release create v${version} --title "Release v${version}" --notes-file "${notesFile}" --latest`

        const createResult = this.execSafe(createCommand)

        if (createResult.success) {
          console.log(`✅ GitHub release created`)
          // Загружаем файл в созданный релиз
          const uploadCommand = `gh release upload v${version} "${vsixPath}" --clobber`
          const uploadResult = this.execSafe(uploadCommand)

          if (uploadResult.success) {
            console.log(`✅ Successfully uploaded ${vsixFileName} to release`)
          } else {
            console.error(
              `❌ Failed to upload ${vsixFileName}: ${uploadResult.error}`
            )
            console.log(
              `📝 Manual upload: https://github.com/darqus/tokyo-night-modern-vscode-theme/releases/edit/v${version}`
            )
          }
        } else {
          // Проверяем, может релиз уже существует
          if (
            createResult.error?.includes('already exists') ||
            createResult.error?.includes('release exists')
          ) {
            console.warn(
              `⚠️  Release v${version} already exists, attempting to upload asset...`
            )
            // Пытаемся загрузить файл в существующий релиз
            const uploadCommand = `gh release upload v${version} "${vsixPath}" --clobber`
            const uploadResult = this.execSafe(uploadCommand)
            if (uploadResult.success) {
              console.log(
                `✅ Successfully uploaded ${vsixFileName} to existing release`
              )
            } else {
              console.error(
                `❌ Failed to upload to existing release: ${uploadResult.error}`
              )
              console.log(
                `📝 Manual release: https://github.com/darqus/tokyo-night-modern-vscode-theme/releases/edit/v${version}`
              )
            }
          } else {
            console.error(
              `❌ Failed to create GitHub release: ${createResult.error}`
            )
            console.log(
              `📝 Manual release creation: https://github.com/darqus/tokyo-night-modern-vscode-theme/releases/new?tag=v${version}`
            )
            console.log(
              `📦 Don't forget to attach ${vsixFileName} to the release`
            )
          }
        }
      } finally {
        // Удаляем временный файл
        try {
          if (existsSync(notesFile)) {
            unlinkSync(notesFile)
          }
        } catch {
          // Игнорируем ошибки удаления временного файла
        }
      }
    } catch (error) {
      console.warn('⚠️  Could not create GitHub release')
      if (error instanceof Error) {
        console.warn(`   Error: ${error.message}`)
      }
    }
  }

  public async release(options: ReleaseOptions = {}): Promise<void> {
    const startTime = Date.now()
    console.log('🚀 Starting release process...')

    try {
      // Предварительные проверки
      if (!options.dryRun) {
        this.checkWorkingDirectory()
        this.checkBranch()
      }

      // Определяем тип релиза
      const releaseType = options.type || this.detectReleaseType()
      console.log(`📋 Release type: ${releaseType}`)

      if (options.dryRun) {
        console.log('🔍 DRY RUN MODE - no changes will be made')
        const currentVersion = this.getCurrentVersion()
        const commitCount = this.getCommitCountSinceLastRelease()
        const previewVersion = computeVersion(
          currentVersion,
          releaseType,
          commitCount,
          !!options.prerelease
        )
        console.log(`Current version: ${currentVersion}`)
        console.log(`Commits since last release: ${commitCount}`)
        console.log(`Would bump to: ${previewVersion}`)
        return
      }

      // Сборка
      if (!options.skipBuild) {
        this.buildProject()
      }

      // Поднятие версии (package.json)
      const newVersion = this.bumpVersion(
        releaseType,
        options.prerelease || false
      )

      // Генерация .vsix пакета с новой версией
      this.generatePackage()

      // Обновление README со ссылкой на .vsix файл
      this.updateReadmeWithVsixLink(newVersion)

      // Генерация changelog
      this.generateChangelog()

      // Коммит и тег
      this.commitAndTag(newVersion)

      // Пуш в удаленный репозиторий
      this.pushToRemote()

      // Публикация в маркетплейс
      // this.publishToMarketplace()

      // Создание GitHub релиза
      this.createGitHubRelease(newVersion)

      const duration = ((Date.now() - startTime) / 1000).toFixed(1)
      console.log(
        `🎉 Release v${newVersion} completed successfully in ${duration}s!`
      )
    } catch (error) {
      console.error(
        '❌ Release failed:',
        error instanceof Error ? error.message : String(error)
      )
      process.exit(1)
    }
  }
}

// Export for tests
export { ReleaseManager }

// CLI интерфейс
const main = async () => {
  const args = process.argv.slice(2)

  const options: ReleaseOptions = {
    type: args.includes('--major')
      ? 'major'
      : args.includes('--minor')
        ? 'minor'
        : args.includes('--patch')
          ? 'patch'
          : undefined,
    prerelease: args.includes('--prerelease'),
    dryRun: args.includes('--dry-run'),
    skipTests: args.includes('--skip-tests'),
    skipBuild: args.includes('--skip-build'),
  }

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
🚀 Tokyo Night Modern Release Manager

Usage: npm run release [options]

Options:
  --patch         Force patch release (x.x.X)
  --minor         Force minor release (x.X.x)
  --major         Force major release (X.x.x)
  --prerelease    Create prerelease version
  --dry-run       Show what would be done without making changes
  --skip-tests    Skip running tests
  --skip-build    Skip building project
  --force         Allow release from non-main branch
  --help, -h      Show this help

Examples:
  npm run release                    # Auto-detect release type
  npm run release -- --minor        # Force minor release
  npm run release -- --dry-run      # Preview changes
  npm run release -- --prerelease   # Create prerelease
`)
    return
  }

  const releaseManager = new ReleaseManager()
  await releaseManager.release(options)
}

if (require.main === module) {
  main().catch(console.error)
}
