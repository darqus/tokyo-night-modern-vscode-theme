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
      throw error
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

      // Проверяем, есть ли уже секция Downloads
      const downloadsSectionRegex = /## 📦 Downloads[\s\S]*?(?=## |$)/
      const hasDownloadsSection = downloadsSectionRegex.test(readme)

      let updatedReadme = readme

      if (hasDownloadsSection) {
        // Обновляем существующую секцию Downloads
        updatedReadme = readme.replace(
          downloadsSectionRegex,
          `## 📦 Downloads\n\nDownload the latest release: ${downloadLink}\n\n`
        )
      } else {
        // Добавляем новую секцию Downloads после Installation
        const installationSectionRegex = /(## 🚀 Installation[\s\S]*?\n\n)/m
        if (installationSectionRegex.test(readme)) {
          updatedReadme = readme.replace(
            installationSectionRegex,
            `$1## 📦 Downloads\n\nDownload the latest release: ${downloadLink}\n\n`
          )
        } else {
          // Если нет секции Installation, добавляем в конец Features
          const featuresSectionRegex = /(## 🎨 Features[\s\S]*?\n\n)/m
          if (featuresSectionRegex.test(readme)) {
            updatedReadme = readme.replace(
              featuresSectionRegex,
              `$1## 📦 Downloads\n\nDownload the latest release: ${downloadLink}\n\n`
            )
          } else {
            // В крайнем случае добавляем в начало файла после заголовка
            updatedReadme = readme.replace(
              /(## 🌎 Live Preview[\s\S]*?\n\n)/m,
              `$1## 📦 Downloads\n\nDownload the latest release: ${downloadLink}\n\n`
            )
          }
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

  private createGitHubRelease(version: string): void {
    console.log('🎉 Creating GitHub release...')

    try {
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

      // Создаем релиз через GitHub CLI если доступен
      try {
        this.exec(
          `gh release create v${version} --title "Release v${version}" --notes "${releaseNotes}" --latest`
        )
        console.log('✅ GitHub release created and set as latest')
      } catch (_error) {
        console.warn(
          '⚠️  Could not create GitHub release (gh CLI not available)'
        )
        console.log(
          `📝 Manual release creation: https://github.com/darqus/tokyo-night-modern-vscode-theme/releases/new?tag=v${version}`
        )
      }
    } catch (_error) {
      console.warn('⚠️  Could not create GitHub release')
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
