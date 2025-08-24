#!/usr/bin/env ts-node

/**
 * Smart Automatic Versioning System
 * Analyzes conventional commits and determines the correct version type
 */

import { execSync } from 'child_process'
import { readFileSync } from 'fs'
import { join } from 'path'

interface CommitInfo {
  hash: string
  type: string
  scope?: string
  description: string
  body?: string
  footer?: string
  breaking: boolean
}

interface VersionAnalysis {
  recommended: 'patch' | 'minor' | 'major'
  commits: CommitInfo[]
  stats: {
    total: number
    features: number
    fixes: number
    breaking: number
    performance: number
    others: number
  }
  summary: string[]
  hasBreaking: boolean
}

interface SmartVersionOptions {
  dryRun?: boolean
  force?: boolean
  verbose?: boolean
  since?: string
  patch?: boolean
  minor?: boolean
  major?: boolean
}

class SmartVersionManager {
  private packagePath: string

  constructor() {
    this.packagePath = join(process.cwd(), 'package.json')
  }

  /**
   * Анализировать коммиты и определить тип версии
   */
  async analyzeCommits(
    options: SmartVersionOptions = {}
  ): Promise<VersionAnalysis> {
    console.log('🔍 Analyzing commits to determine version...\n')

    const commits = this.getCommitsSinceLastRelease(options.since)
    const analysis = this.analyzeCommitTypes(commits)

    if (options.verbose) {
      this.printDetailedAnalysis(analysis)
    } else {
      this.printAnalysisSummary(analysis)
    }

    return analysis
  }

  /**
   * Выполнить умный релиз
   */
  async smartRelease(options: SmartVersionOptions = {}): Promise<void> {
    try {
      console.log('🤖 Starting smart release system...\n')

      if (!options.force) {
        this.checkGitStatus()
      }

      // Determine release type
      let releaseType: 'patch' | 'minor' | 'major'

      if (options.patch) {
        releaseType = 'patch'
      } else if (options.minor) {
        releaseType = 'minor'
      } else if (options.major) {
        releaseType = 'major'
      } else {
        // Smart analysis mode
        const analysis = await this.analyzeCommits(options)

        if (analysis.commits.length === 0) {
          console.log('ℹ️  No commits for release since last version')
          return
        }

        releaseType = analysis.recommended
      }

      const currentVersion = this.getCurrentVersion()
      const nextVersion = this.calculateNextVersion(currentVersion, releaseType)

      console.log(`\n📊 Release Information:`)
      console.log(`   🏷️  Current version: ${currentVersion}`)
      console.log(`   🏷️  New version: ${nextVersion}`)
      console.log(`   📈 Release type: ${releaseType.toUpperCase()}`)

      if (options.dryRun) {
        console.log('\n🧪 Preview mode - changes not applied')
        return
      }

      // Выполняем релиз
      await this.executeRelease(releaseType, options)

      console.log('\n✅ Smart release successfully completed!')
      this.printNextSteps(nextVersion)
    } catch (error) {
      console.error('❌ Ошибка умного релиза:', error)
      process.exit(1)
    }
  }

  /**
   * Получить коммиты с последней версии
   */
  private getCommitsSinceLastRelease(since?: string): CommitInfo[] {
    try {
      // Определяем диапазон коммитов
      let range = since || this.getLastReleaseTag()
      if (!range) {
        range = '--all' // Если тегов нет, берем все коммиты
      } else {
        range = `${range}..HEAD`
      }

      const command = `git log ${range} --pretty=format:"%H|%s|%b" --no-merges`
      const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' })

      if (!output.trim()) {
        return []
      }

      return output
        .trim()
        .split('\n')
        .filter((line) => line.trim())
        .map((line) => this.parseCommit(line))
        .filter((commit) => commit !== null) as CommitInfo[]
    } catch (error) {
      console.warn(`⚠️  Не удалось получить коммиты: ${error}`)
      return []
    }
  }

  /**
   * Получить тег последнего релиза
   */
  private getLastReleaseTag(): string | null {
    try {
      const output = execSync('git describe --tags --abbrev=0', {
        encoding: 'utf8',
        stdio: 'pipe',
      })
      return output.trim()
    } catch (error) {
      return null // Нет тегов
    }
  }

  /**
   * Парсить conventional commit
   */
  private parseCommit(line: string): CommitInfo | null {
    const parts = line.split('|')
    if (parts.length < 2) {
      return null
    }

    const [hash, subject, body = ''] = parts

    if (!subject) {
      return null
    }

    // Парсим conventional commit формат
    const conventionalRegex = /^(\w+)(\(.+\))?(!)?:\s*(.+)$/
    const match = subject.match(conventionalRegex)

    if (!match) {
      // Если не соответствует conventional commits, пропускаем
      return null
    }

    const [, type, scopeMatch, breakingMark, description] = match
    const scope = scopeMatch ? scopeMatch.slice(1, -1) : undefined

    // Проверяем на breaking changes
    const breaking = !!(
      breakingMark ||
      body.includes('BREAKING CHANGE:') ||
      body.includes('BREAKING-CHANGE:')
    )

    return {
      hash: hash.substring(0, 7),
      type,
      scope,
      description,
      body: body.trim() || undefined,
      breaking,
    }
  }

  /**
   * Анализировать типы коммитов
   */
  private analyzeCommitTypes(commits: CommitInfo[]): VersionAnalysis {
    const stats = {
      total: commits.length,
      features: 0,
      fixes: 0,
      breaking: 0,
      performance: 0,
      others: 0,
    }

    const summary: string[] = []
    let hasFeatures = false
    let hasBreaking = false

    for (const commit of commits) {
      // Подсчет статистики
      switch (commit.type) {
        case 'feat':
          stats.features++
          hasFeatures = true
          summary.push(`   • ✨ ${commit.description}`)
          break
        case 'fix':
          stats.fixes++
          summary.push(`   • 🐛 ${commit.description}`)
          break
        case 'perf':
          stats.performance++
          summary.push(`   • ⚡ ${commit.description}`)
          break
        case 'docs':
          stats.others++
          summary.push(`   • 📚 ${commit.description}`)
          break
        case 'style':
          stats.others++
          summary.push(`   • 💄 ${commit.description}`)
          break
        case 'refactor':
          stats.others++
          summary.push(`   • ♻️  ${commit.description}`)
          break
        case 'test':
          stats.others++
          summary.push(`   • 🧪 ${commit.description}`)
          break
        case 'build':
          stats.others++
          summary.push(`   • 🏗️  ${commit.description}`)
          break
        case 'ci':
          stats.others++
          summary.push(`   • 👷 ${commit.description}`)
          break
        case 'chore':
          stats.others++
          summary.push(`   • 🔧 ${commit.description}`)
          break
        default:
          stats.others++
          summary.push(`   • 📝 ${commit.description}`)
      }

      if (commit.breaking) {
        stats.breaking++
        hasBreaking = true
      }
    }

    // Определяем рекомендуемый тип релиза
    let recommended: 'patch' | 'minor' | 'major' = 'patch'

    if (hasBreaking) {
      recommended = 'major'
    } else if (hasFeatures) {
      recommended = 'minor'
    } else if (stats.fixes > 0 || stats.performance > 0) {
      recommended = 'patch'
    }

    return {
      recommended,
      commits,
      stats,
      summary,
      hasBreaking,
    }
  }

  /**
   * Напечатать краткий анализ
   */
  private printAnalysisSummary(analysis: VersionAnalysis): void {
    console.log('🔍 Commit analysis completed:')
    console.log(`   📝 Commits analyzed: ${analysis.stats.total}`)
    console.log(`   ✨ Features: ${analysis.stats.features > 0 ? '✅' : '❌'}`)
    console.log(`   🐛 Fixes: ${analysis.stats.fixes > 0 ? '✅' : '❌'}`)
    console.log(`   💥 Breaking: ${analysis.stats.breaking > 0 ? '✅' : '❌'}`)
    console.log(
      `   ⚡ Performance: ${analysis.stats.performance > 0 ? '✅' : '❌'}`
    )

    console.log(
      `\n📈 Recommended release type: ${analysis.recommended.toUpperCase()}`
    )

    if (analysis.summary.length > 0) {
      console.log('\n📋 Summary of changes:')
      analysis.summary.slice(0, 10).forEach((item) => console.log(item))
      if (analysis.summary.length > 10) {
        console.log(`   ... and ${analysis.summary.length - 10} more changes`)
      }
    }

    const currentVersion = this.getCurrentVersion()
    const nextVersion = this.calculateNextVersion(
      currentVersion,
      analysis.recommended
    )
    console.log(`\n📊 Version: ${currentVersion} → ${nextVersion}`)
  }

  /**
   * Напечатать детальный анализ
   */
  private printDetailedAnalysis(analysis: VersionAnalysis): void {
    console.log('📊 Detailed commit statistics:')
    console.log(`   Total commits: ${analysis.stats.total}`)
    console.log(`   Features: ${analysis.stats.features}`)
    console.log(`   Bug fixes: ${analysis.stats.fixes}`)
    console.log(`   Breaking changes: ${analysis.stats.breaking}`)
    console.log(`   Others: ${analysis.stats.others}`)

    console.log('\n📝 All commits:')
    analysis.commits.forEach((commit) => {
      const breaking = commit.breaking ? ' 💥' : ''
      const scope = commit.scope ? `(${commit.scope})` : ''
      console.log(
        `   ${commit.hash} ${commit.type}${scope}: ${commit.description}${breaking}`
      )
    })

    this.printAnalysisSummary(analysis)
  }

  /**
   * Получить текущую версию
   */
  private getCurrentVersion(): string {
    const pkg = JSON.parse(readFileSync(this.packagePath, 'utf8'))
    return pkg.version
  }

  /**
   * Вычислить следующую версию
   */
  private calculateNextVersion(
    current: string,
    type: 'patch' | 'minor' | 'major'
  ): string {
    const [major, minor, patch] = current.split('.').map(Number)

    switch (type) {
      case 'major':
        return `${major + 1}.0.0`
      case 'minor':
        return `${major}.${minor + 1}.0`
      case 'patch':
        return `${major}.${minor}.${patch + 1}`
      default:
        return current
    }
  }

  /**
   * Проверить статус git
   */
  private checkGitStatus(): void {
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' })
      if (status.trim()) {
        console.warn('⚠️  Есть незакоммиченные изменения:')
        console.log(status)
        throw new Error('Закоммитьте или отмените изменения перед релизом')
      }
    } catch (error) {
      throw new Error(`Ошибка проверки git статуса: ${error}`)
    }
  }

  /**
   * Выполнить релиз
   */
  private async executeRelease(
    type: string,
    options: SmartVersionOptions
  ): Promise<void> {
    console.log('\n🏗️  Executing release...')

    // Запускаем тесты
    console.log('🧪 Running tests...')
    try {
      execSync('npm run test', { stdio: 'inherit' })
    } catch (error) {
      throw new Error('Тесты не прошли')
    }

    // Собираем проект
    console.log('🏗️  Building project...')
    try {
      execSync('npm run build', { stdio: 'inherit' })
    } catch (error) {
      throw new Error('Ошибка сборки проекта')
    }

    // Создаем релиз с standard-version
    console.log(`📦 Creating ${type} release...`)
    try {
      const command = `npx standard-version --release-as ${type}`
      execSync(command, { stdio: 'inherit' })
    } catch (error) {
      throw new Error(`Ошибка создания релиза: ${error}`)
    }

    // Публикуем теги
    console.log('📤 Pushing tags...')
    try {
      execSync('git push --follow-tags origin main', { stdio: 'inherit' })
    } catch (error) {
      throw new Error('Ошибка публикации тегов')
    }

    // Создаем пакет
    console.log('📦 Creating VSIX package...')
    try {
      execSync('npm run package', { stdio: 'inherit' })
    } catch (error) {
      throw new Error('Ошибка создания пакета')
    }

    // Создаем релиз на GitHub
    console.log('🚀 Creating GitHub release...')
    try {
      const latestTag = execSync('git describe --tags --abbrev=0', {
        encoding: 'utf8',
      }).trim()
      execSync(`gh release create ${latestTag} --generate-notes`, {
        stdio: 'inherit',
      })
    } catch (error) {
      throw new Error('Ошибка создания релиза на GitHub')
    }
  }

  /**
   * Показать следующие шаги
   */
  private printNextSteps(version: string): void {
    console.log('\n📋 Next steps:')
    console.log('1. Publish package: npm run publish')
    console.log(
      `🎉 New version ${version} is released and available on GitHub!`
    )
  }
}

// CLI интерфейс
async function main() {
  const args = process.argv.slice(2)
  const smartVersion = new SmartVersionManager()

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
🤖 Tokyo Night Lod Smart Version Manager

Использование:
  npm run version:smart              # Умный релиз (анализ + выпуск)
  npm run version:analyze            # Только анализ коммитов
  npm run version:smart --dry-run    # Предварительный просмотр

Опции:
  --dry-run                          # Показать что будет сделано
  --force                            # Игнорировать git проверки
  --verbose                          # Детальный вывод анализа
  --since <tag>                      # Анализ с определенного тега
  --patch                            # Явно указать patch версию
  --minor                            # Явно указать minor версию
  --major                            # Явно указать major версию
  --help, -h                         # Показать эту справку

Примеры:
  npm run version:smart              # Автоматический релиз
  npm run version:analyze            # Только анализ
  npm run version:smart -- --verbose # Детальный анализ + релиз
  npm run version:smart -- --since v1.0.0  # Анализ с версии 1.0.0
  npm run version:smart -- --patch   # Явно указать patch версию
  npm run version:smart -- --minor   # Явно указать minor версию
  npm run version:smart -- --major   # Явно указать major версию

Логика определения версий:
  - MAJOR: если есть breaking changes (feat!: или BREAKING CHANGE:)
  - MINOR: если есть новые функции (feat:)
  - PATCH: если есть только исправления (fix:, perf:)
`)
    return
  }

  const options: SmartVersionOptions = {
    dryRun: args.includes('--dry-run'),
    force: args.includes('--force'),
    verbose: args.includes('--verbose'),
    since: args.includes('--since')
      ? args[args.indexOf('--since') + 1]
      : undefined,
    patch: args.includes('--patch'),
    minor: args.includes('--minor'),
    major: args.includes('--major'),
  }

  // Определяем режим работы
  const scriptName = process.env.npm_lifecycle_event

  if (scriptName === 'version:analyze' || args.includes('--analyze-only')) {
    await smartVersion.analyzeCommits(options)
  } else {
    await smartVersion.smartRelease(options)
  }
}

if (require.main === module) {
  main().catch(console.error)
}

export { SmartVersionManager }