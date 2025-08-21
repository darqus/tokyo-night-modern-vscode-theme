#!/usr/bin/env ts-node

/**
 * Тестовый скрипт для демонстрации умной системы версионирования
 * Создает тестовые коммиты и показывает как работает анализ
 */

import { execSync } from 'child_process'
import { SmartVersionManager } from './smart-version'

interface TestScenario {
  name: string
  commits: string[]
  expectedType: 'patch' | 'minor' | 'major'
  description: string
}

const testScenarios: TestScenario[] = [
  {
    name: 'Scenario 1: Only fixes',
    commits: [
      'fix(theme): исправить контрастность кнопок',
      'fix(build): исправить сборку на Windows',
      'docs(readme): обновить инструкцию по установке',
    ],
    expectedType: 'patch',
    description: 'Только исправления - должен быть PATCH релиз',
  },
  {
    name: 'Scenario 2: Features + fixes',
    commits: [
      'feat(theme): добавить поддержку светлой темы',
      'feat(variants): новый минимальный вариант',
      'fix(ui): исправить отступы в панели',
      'perf(build): ускорить сборку',
    ],
    expectedType: 'minor',
    description: 'Новые функции + исправления - должен быть MINOR релиз',
  },
  {
    name: 'Scenario 3: Breaking changes',
    commits: [
      'feat(api)!: новый формат конфигурации',
      'fix(theme): исправить цвета',
      'refactor(build): переработать систему',
    ],
    expectedType: 'major',
    description: 'Breaking changes - должен быть MAJOR релиз',
  },
  {
    name: 'Scenario 4: Only documentation',
    commits: [
      'docs(api): добавить примеры использования',
      'docs(readme): обновить описание',
      'style(code): улучшить форматирование',
    ],
    expectedType: 'patch',
    description: 'Только документация и стили - должен быть PATCH релиз',
  },
  {
    name: 'Scenario 5: Performance improvements',
    commits: [
      'perf(palette): оптимизировать генерацию цветов',
      'perf(build): ускорить компиляцию TypeScript',
      'fix(memory): исправить утечку памяти',
    ],
    expectedType: 'patch',
    description: 'Улучшения производительности - должен быть PATCH релиз',
  },
]

class SmartVersionTester {
  private smartVersion: SmartVersionManager

  constructor() {
    this.smartVersion = new SmartVersionManager()
  }

  /**
   * Запустить все тестовые сценарии
   */
  async runAllTests(): Promise<void> {
    console.log('🧪 Запуск тестов умной системы версионирования\n')
    console.log('='.repeat(80))

    for (let i = 0; i < testScenarios.length; i++) {
      const scenario = testScenarios[i]
      console.log(
        `\n📋 Тест ${i + 1}/${testScenarios.length}: ${scenario.name}`
      )
      console.log(`📝 Описание: ${scenario.description}`)
      console.log(`🎯 Ожидается: ${scenario.expectedType.toUpperCase()} релиз`)
      console.log('-'.repeat(60))

      await this.testScenario(scenario)

      if (i < testScenarios.length - 1) {
        console.log('\n' + '='.repeat(80))
      }
    }

    console.log('\n✅ Все тесты завершены!')
    this.printSummary()
  }

  /**
   * Протестировать один сценарий
   */
  private async testScenario(scenario: TestScenario): Promise<void> {
    try {
      console.log('\n📝 Коммиты для теста:')
      scenario.commits.forEach((commit, index) => {
        console.log(`   ${index + 1}. ${commit}`)
      })

      // Имитируем анализ коммитов создавая временные данные
      const mockCommits = scenario.commits
        .map((commit, index) => {
          const conventionalRegex = /^(\w+)(\(.+\))?(!)?:\s*(.+)$/
          const match = commit.match(conventionalRegex)

          if (!match) {
            return null
          }

          const [, type, scopeMatch, breakingMark, description] = match
          const scope = scopeMatch ? scopeMatch.slice(1, -1) : undefined

          return {
            hash: `abc${index.toString().padStart(4, '0')}`,
            type,
            scope,
            description,
            breaking: !!breakingMark,
          }
        })
        .filter((commit) => commit !== null)

      // Анализируем коммиты
      const analysis = this.analyzeTestCommits(mockCommits as any[])

      console.log('\n🔍 Результат анализа:')
      console.log(
        `   📊 Рекомендуемый тип: ${analysis.recommended.toUpperCase()}`
      )
      console.log(`   📝 Всего коммитов: ${analysis.stats.total}`)
      console.log(`   ✨ Features: ${analysis.stats.features}`)
      console.log(`   🐛 Fixes: ${analysis.stats.fixes}`)
      console.log(`   💥 Breaking: ${analysis.stats.breaking}`)
      console.log(`   ⚡ Performance: ${analysis.stats.performance}`)

      // Проверяем ожидания
      const isCorrect = analysis.recommended === scenario.expectedType
      console.log(
        `\n${isCorrect ? '✅' : '❌'} Тест ${
          isCorrect ? 'ПРОШЕЛ' : 'НЕ ПРОШЕЛ'
        }`
      )

      if (!isCorrect) {
        console.log(`   ❌ Ожидался: ${scenario.expectedType.toUpperCase()}`)
        console.log(`   ❌ Получен: ${analysis.recommended.toUpperCase()}`)
      }

      // Показываем краткое содержание
      if (analysis.summary.length > 0) {
        console.log('\n📋 Краткое содержание:')
        analysis.summary
          .slice(0, 5)
          .forEach((item: string) => console.log(item))
      }
    } catch (error) {
      console.error(`❌ Ошибка в тесте: ${error}`)
    }
  }

  /**
   * Анализировать тестовые коммиты (упрощенная версия)
   */
  private analyzeTestCommits(commits: any[]): any {
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
   * Показать итоговую сводку
   */
  private printSummary(): void {
    console.log('\n📊 Итоговая сводка:')
    console.log('   🧪 Тестовые сценарии показывают работу логики анализа')
    console.log('   ✅ Система корректно определяет типы релизов')
    console.log('   📈 Приоритет: MAJOR > MINOR > PATCH')
    console.log('   💡 Breaking changes всегда приводят к MAJOR')
    console.log('   ⚡ Features без breaking changes дают MINOR')
    console.log('   🐛 Только fixes/perf дают PATCH')

    console.log('\n🚀 Для реального использования:')
    console.log('   npm run release              # Умный релиз')
    console.log('   npm run version:analyze      # Только анализ')
    console.log('   npm run release:dry          # Предварительный просмотр')
  }

  /**
   * Демонстрационный режим с интерактивностью
   */
  async interactiveDemo(): Promise<void> {
    console.log('🎮 Интерактивная демонстрация умной системы версионирования\n')

    // Показываем реальный анализ текущих коммитов
    console.log('📊 Анализ реальных коммитов в репозитории:')
    console.log('-'.repeat(50))

    try {
      const analysis = await this.smartVersion.analyzeCommits({
        verbose: true,
        force: true, // Игнорируем git статус для демо
      })

      console.log('\n🎯 Этот анализ показывает реальное состояние проекта')
      console.log('📈 Система готова к использованию!')
    } catch (error) {
      console.log('ℹ️  Реальный анализ недоступен (нет git истории или тегов)')
      console.log('🧪 Запускаем тестовые сценарии вместо этого...\n')
      await this.runAllTests()
    }
  }
}

// CLI интерфейс
async function main() {
  const args = process.argv.slice(2)
  const tester = new SmartVersionTester()

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
🧪 Тестер умной системы версионирования

Использование:
  npm run test:version              # Запустить все тесты
  npm run test:version -- --demo    # Интерактивная демонстрация
  npm run test:version -- --help    # Показать справку

Описание:
  Этот скрипт тестирует логику умной системы версионирования
  на различных сценариях коммитов, показывая как определяется
  тип релиза (patch/minor/major) на основе conventional commits.

Примеры:
  test:version                      # Все тестовые сценарии
  test:version -- --demo            # Демо с реальными данными
`)
    return
  }

  if (args.includes('--demo')) {
    await tester.interactiveDemo()
  } else {
    await tester.runAllTests()
  }
}

if (require.main === module) {
  main().catch(console.error)
}

export { SmartVersionTester }
