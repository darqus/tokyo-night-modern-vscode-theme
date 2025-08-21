#!/usr/bin/env ts-node

/**
 * Умная система автоматизации релизов Tokyo Night Lod
 * Автоматически определяет тип версии на основе conventional commits
 */

import { execSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

interface ReleaseOptions {
  type?: 'patch' | 'minor' | 'major' | 'prerelease' | 'auto'
  prerelease?: string
  dryRun?: boolean
  firstRelease?: boolean
  force?: boolean
}

interface CommitAnalysis {
  hasFeat: boolean
  hasFix: boolean
  hasBreaking: boolean
  hasPerf: boolean
  commits: string[]
  recommendedType: 'patch' | 'minor' | 'major'
  changelog: string[]
}

class SmartReleaseManager {
  private packagePath: string
  private changelogPath: string

  constructor() {
    this.packagePath = join(process.cwd(), 'package.json')
    this.changelogPath = join(process.cwd(), 'CHANGELOG.md')
  }

  /**
   * Выполнить умный релиз с автоматическим определением версии
   */
  async release(options: ReleaseOptions = {}): Promise<void> {
    try {
      console.log('🤖 Запускаем умную систему релизов...')

      // Проверяем состояние git
      if (!options.force) {
        this.checkGitStatus()
      }

      // Анализируем коммиты для определения типа релиза
      const analysis = await this.analyzeCommits()

      if (options.type === 'auto' || !options.type) {
        options.type = analysis.recommendedType
        console.log(`🔍 Анализ коммитов завершен:`)
        console.log(`   📝 Коммитов для анализа: ${analysis.commits.length}`)
        console.log(`   ✨ Features: ${analysis.hasFeat ? '✅' : '❌'}`)
        console.log(`   🐛 Fixes: ${analysis.hasFix ? '✅' : '❌'}`)
        console.log(`   💥 Breaking: ${analysis.hasBreaking ? '⚠️ ' : '❌'}`)
        console.log(`   ⚡ Performance: ${analysis.hasPerf ? '✅' : '❌'}`)
        console.log(
          `📈 Рекомендованный тип релиза: ${options.type.toUpperCase()}`
        )

        if (analysis.changelog.length > 0) {
          console.log('📋 Краткое содержание изменений:')
          analysis.changelog
            .slice(0, 3)
            .forEach((change) => console.log(`   • ${change}`))
          if (analysis.changelog.length > 3) {
            console.log(
              `   ... и еще ${analysis.changelog.length - 3} изменений`
            )
          }
        }
      }

      // Если нет изменений для релиза
      if (
        analysis.commits.length === 0 &&
        !options.force &&
        !options.firstRelease
      ) {
        console.log('ℹ️  Нет коммитов для релиза')
        return
      }

      // Запускаем тесты
      if (!options.dryRun) {
        console.log('🧪 Запускаем тесты...')
        this.runTests()
      }

      // Собираем проект
      if (!options.dryRun) {
        console.log('🏗️  Собираем проект...')
        this.buildProject()
      }

      // Показываем предварительную информацию о версии
      const currentVersion = this.getCurrentVersion()
      const nextVersion = await this.getNextVersion(
        options.type,
        options.prerelease
      )
      console.log(`📊 Версия: ${currentVersion} → ${nextVersion}`)

      // Создаем релиз
      console.log(`📦 Создаем ${options.type.toUpperCase()} релиз...`)
      this.createRelease(options)

      // Создаем пакет
      if (!options.dryRun) {
        console.log('📦 Создаем VSIX пакет...')
        this.createPackage()
      }

      console.log('✅ Релиз успешно создан!')
      this.printNextSteps(analysis, nextVersion)
    } catch (error) {
      console.error('❌ Ошибка при создании релиза:', error)
      process.exit(1)
    }
  }

  /**
   * Анализировать коммиты с последнего тега для определения типа релиза
   */
  private async analyzeCommits(): Promise<CommitAnalysis> {
    try {
      // Получаем последний тег
      let lastTag: string
      try {
        lastTag = execSync('git describe --tags --abbrev=0', {
          encoding: 'utf8',
        }).trim()
      } catch {
        // Если тегов нет, анализируем все коммиты
        try {
          lastTag = execSync('git rev-list --max-parents=0 HEAD', {
            encoding: 'utf8',
          }).trim()
        } catch {
          lastTag = 'HEAD~10' // Fallback
        }
      }

      // Получаем коммиты с последнего тега
      const commits = execSync(`git log ${lastTag}..HEAD --oneline`, {
        encoding: 'utf8',
      })
        .trim()
        .split('\n')
        .filter((line) => line.length > 0)

      const analysis: CommitAnalysis = {
        hasFeat: false,
        hasFix: false,
        hasBreaking: false,
        hasPerf: false,
        commits,
        recommendedType: 'patch',
        changelog: [],
      }

      // Анализируем каждый коммит
      for (const commit of commits) {
        const message = commit.substring(8) // Убираем хеш коммита

        // Проверяем breaking changes
        if (message.includes('BREAKING CHANGE') || message.match(/^[^:]+!/)) {
          analysis.hasBreaking = true
        }

        // Проверяем типы коммитов
        if (message.match(/^feat(\(.+\))?:/)) {
          analysis.hasFeat = true
          analysis.changelog.push(
            `✨ ${message.replace(/^feat(\(.+\))?:\s*/, '')}`
          )
        }

        if (message.match(/^fix(\(.+\))?:/)) {
          analysis.hasFix = true
          analysis.changelog.push(
            `🐛 ${message.replace(/^fix(\(.+\))?:\s*/, '')}`
          )
        }

        if (message.match(/^perf(\(.+\))?:/)) {
          analysis.hasPerf = true
          analysis.changelog.push(
            `⚡ ${message.replace(/^perf(\(.+\))?:\s*/, '')}`
          )
        }

        if (message.match(/^docs(\(.+\))?:/)) {
          analysis.changelog.push(
            `📚 ${message.replace(/^docs(\(.+\))?:\s*/, '')}`
          )
        }

        if (message.match(/^refactor(\(.+\))?:/)) {
          analysis.changelog.push(
            `♻️ ${message.replace(/^refactor(\(.+\))?:\s*/, '')}`
          )
        }
      }

      // Определяем рекомендованный тип релиза
      if (analysis.hasBreaking) {
        analysis.recommendedType = 'major'
      } else if (analysis.hasFeat) {
        analysis.recommendedType = 'minor'
      } else if (analysis.hasFix || analysis.hasPerf) {
        analysis.recommendedType = 'patch'
      }

      return analysis
    } catch (error) {
      console.warn('⚠️  Ошибка анализа коммитов, используем patch:', error)
      return {
        hasFeat: false,
        hasFix: false,
        hasBreaking: false,
        hasPerf: false,
        commits: [],
        recommendedType: 'patch',
        changelog: [],
      }
    }
  }

  /**
   * Получить текущую версию из package.json
   */
  private getCurrentVersion(): string {
    const pkg = JSON.parse(readFileSync(this.packagePath, 'utf8'))
    return pkg.version
  }

  /**
   * Получить следующую версию
   */
  private async getNextVersion(
    type?: string,
    prerelease?: string
  ): Promise<string> {
    try {
      const args = ['--dry-run', '--silent']
      if (type && type !== 'auto') {
        if (type === 'prerelease') {
          args.push('--prerelease', prerelease || 'alpha')
        } else {
          args.push('--release-as', type)
        }
      }

      const output = execSync(`npx standard-version ${args.join(' ')}`, {
        encoding: 'utf8',
        stdio: 'pipe',
      })

      const versionMatch = output.match(
        /bumping version in package\.json from .+ to (.+)/
      )
      return versionMatch ? versionMatch[1] : 'unknown'
    } catch (error) {
      return 'unknown'
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
   * Запустить тесты
   */
  private runTests(): void {
    try {
      execSync('npm run test', { stdio: 'inherit' })
    } catch (error) {
      throw new Error('Тесты не прошли')
    }
  }

  /**
   * Собрать проект
   */
  private buildProject(): void {
    try {
      execSync('npm run build:all', { stdio: 'inherit' })
    } catch (error) {
      throw new Error('Ошибка сборки проекта')
    }
  }

  /**
   * Создать релиз
   */
  private createRelease(options: ReleaseOptions): void {
    const args: string[] = []

    if (options.dryRun) {
      args.push('--dry-run')
    }

    if (options.firstRelease) {
      args.push('--first-release')
    } else if (options.type && options.type !== 'auto') {
      if (options.type === 'prerelease') {
        args.push('--prerelease', options.prerelease || 'alpha')
      } else {
        args.push('--release-as', options.type)
      }
    }

    try {
      const command = `npx standard-version ${args.join(' ')}`
      console.log(`Выполняем: ${command}`)
      execSync(command, { stdio: 'inherit' })
    } catch (error) {
      throw new Error(`Ошибка создания релиза: ${error}`)
    }
  }

  /**
   * Создать VSIX пакет
   */
  private createPackage(): void {
    try {
      execSync('npm run package', { stdio: 'inherit' })
    } catch (error) {
      throw new Error('Ошибка создания пакета')
    }
  }

  /**
   * Показать следующие шаги
   */
  private printNextSteps(analysis: CommitAnalysis, version: string): void {
    console.log('\n📋 Следующие шаги:')
    console.log(`1. Проверьте изменения в CHANGELOG.md`)
    console.log(`2. Отправьте изменения: git push --follow-tags origin main`)
    console.log(`3. Опубликуйте пакет: npm run publish`)
    console.log(`4. Проверьте релиз на GitHub`)
    console.log(`\n📊 Информация о релизе:`)
    console.log(`   🏷️  Версия: ${version}`)
    console.log(`   📝 Изменений: ${analysis.commits.length}`)
    if (analysis.hasBreaking) {
      console.log(`   💥 ВНИМАНИЕ: Есть breaking changes!`)
    }
  }
}

// CLI интерфейс
async function main() {
  const args = process.argv.slice(2)
  const releaseManager = new SmartReleaseManager()

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
🤖 Tokyo Night Lod Smart Release Manager

Использование:
  npm run release                     # Автоматическое определение версии
  npm run release:patch              # Принудительный patch релиз
  npm run release:minor              # Принудительный minor релиз
  npm run release:major              # Принудительный major релиз
  npm run release:alpha              # Prerelease alpha
  npm run release:beta               # Prerelease beta
  npm run release:rc                 # Prerelease RC
  npm run release:first              # Первый релиз
  npm run release:dry                # Сухой прогон

Опции:
  --dry-run                          # Показать что будет сделано
  --force                            # Принудительный релиз (игнорирует проверки git)
  --help, -h                         # Показать эту справку

Умное определение версии:
  🐛 fix:     → PATCH версия (0.0.X)
  ✨ feat:    → MINOR версия (0.X.0)
  💥 BREAKING → MAJOR версия (X.0.0)
  ⚡ perf:    → PATCH версия (0.0.X)

Примеры:
  npm run release                    # Анализирует коммиты и выбирает тип автоматически
  npm run release:minor              # Принудительно создает minor релиз
  npm run release -- --force         # Создает релиз игнорируя проверки git
`)
    return
  }

  const options: ReleaseOptions = {
    dryRun: args.includes('--dry-run'),
    force: args.includes('--force'),
    type: 'auto', // По умолчанию автоматическое определение
  }

  // Определяем тип релиза из имени скрипта
  const scriptName = process.env.npm_lifecycle_event
  if (scriptName?.startsWith('release:')) {
    const releaseType = scriptName.split(':')[1]

    switch (releaseType) {
      case 'patch':
      case 'minor':
      case 'major':
        options.type = releaseType
        break
      case 'alpha':
      case 'beta':
      case 'rc':
        options.type = 'prerelease'
        options.prerelease = releaseType
        break
      case 'first':
        options.firstRelease = true
        break
      case 'dry':
        options.dryRun = true
        break
    }
  }

  await releaseManager.release(options)
}

if (require.main === module) {
  main().catch(console.error)
}

export { SmartReleaseManager }
