#!/usr/bin/env ts-node

/**
 * Скрипт автоматизации релизов Tokyo Night Lod
 * Обеспечивает правильное семантическое версионирование
 */

import { execSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

interface ReleaseOptions {
  type?: 'patch' | 'minor' | 'major' | 'prerelease'
  prerelease?: string
  dryRun?: boolean
  firstRelease?: boolean
}

class ReleaseManager {
  private packagePath: string
  private changelogPath: string

  constructor() {
    this.packagePath = join(process.cwd(), 'package.json')
    this.changelogPath = join(process.cwd(), 'CHANGELOG.md')
  }

  /**
   * Выполнить релиз
   */
  async release(options: ReleaseOptions = {}): Promise<void> {
    try {
      console.log('🚀 Начинаем процесс релиза...')

      // Проверяем состояние git
      this.checkGitStatus()

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

      // Создаем релиз
      console.log('📦 Создаем релиз...')
      this.createRelease(options)

      // Создаем пакет
      if (!options.dryRun) {
        console.log('📦 Создаем VSIX пакет...')
        this.createPackage()
      }

      console.log('✅ Релиз успешно создан!')
      this.printNextSteps()
    } catch (error) {
      console.error('❌ Ошибка при создании релиза:', error)
      process.exit(1)
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
    } else if (options.type) {
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
  private printNextSteps(): void {
    const pkg = JSON.parse(readFileSync(this.packagePath, 'utf8'))
    console.log('\n📋 Следующие шаги:')
    console.log(`1. Проверьте изменения в CHANGELOG.md`)
    console.log(`2. Отправьте изменения: git push --follow-tags origin main`)
    console.log(`3. Опубликуйте пакет: npm run publish`)
    console.log(`4. Проверьте релиз на GitHub`)
    console.log(`\n📊 Новая версия: ${pkg.version}`)
  }

  /**
   * Получить информацию о следующей версии
   */
  async getNextVersion(type?: string): Promise<string> {
    try {
      const args = ['--dry-run', '--silent']
      if (type) {
        args.push('--release-as', type)
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
}

// CLI интерфейс
async function main() {
  const args = process.argv.slice(2)
  const releaseManager = new ReleaseManager()

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
🚀 Tokyo Night Lod Release Manager

Использование:
  npm run release                     # Автоматическое определение версии
  npm run release:patch              # Patch релиз (0.0.X)
  npm run release:minor              # Minor релиз (0.X.0)
  npm run release:major              # Major релиз (X.0.0)
  npm run release:alpha              # Prerelease alpha
  npm run release:beta               # Prerelease beta
  npm run release:rc                 # Prerelease RC
  npm run release:first              # Первый релиз
  npm run release:dry                # Сухой прогон

Опции:
  --dry-run                          # Показать что будет сделано
  --help, -h                         # Показать эту справку

Примеры:
  npm run release                    # → 1.2.3 → 1.2.4 (автоматически)
  npm run release:minor              # → 1.2.3 → 1.3.0
  npm run release:major              # → 1.2.3 → 2.0.0
  npm run release:alpha              # → 1.2.3 → 1.2.4-alpha.0
`)
    return
  }

  const options: ReleaseOptions = {
    dryRun: args.includes('--dry-run'),
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

export { ReleaseManager }
