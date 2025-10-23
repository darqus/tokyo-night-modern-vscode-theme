#!/usr/bin/env ts-node

import { execSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

interface TestResult {
  name: string
  passed: boolean
  duration: number
  error?: string
}

interface ThemeTestReport {
  timestamp: string
  totalTests: number
  passedTests: number
  failedTests: number
  totalDuration: number
  results: TestResult[]
}

const COLORS = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
}

function colorLog(color: keyof typeof COLORS, message: string) {
  console.log(`${COLORS[color]}${message}${COLORS.reset}`)
}

function runTest(testName: string, command: string): TestResult {
  const startTime = Date.now()

  try {
    colorLog('blue', `🧪 Running ${testName}...`)
    execSync(command, { stdio: 'pipe', encoding: 'utf8' })
    const duration = Date.now() - startTime

    colorLog('green', `✅ ${testName} passed (${duration}ms)`)
    return { name: testName, passed: true, duration }
  } catch (error) {
    const duration = Date.now() - startTime
    const errorMessage = error instanceof Error ? error.message : String(error)

    colorLog('red', `❌ ${testName} failed (${duration}ms)`)
    return { name: testName, passed: false, duration, error: errorMessage }
  }
}

function validateThemeStructure(): TestResult {
  const startTime = Date.now()

  try {
    colorLog('blue', '🔍 Validating theme structure...')

    // Проверяем существование сгенерированного файла темы
    const themePath = join(
      process.cwd(),
      'themes',
      'tokyo-night-color-theme.json'
    )
    if (!existsSync(themePath)) {
      throw new Error('Theme file not found. Run "npm run build:theme" first.')
    }

    const themeContent = readFileSync(themePath, 'utf8')
    const theme = JSON.parse(themeContent)

    // Базовые проверки структуры
    const requiredProperties = ['name', 'type', 'colors', 'tokenColors']
    for (const prop of requiredProperties) {
      if (!theme[prop]) {
        throw new Error(`Missing required property: ${prop}`)
      }
    }

    // Проверка типа темы
    if (theme.type !== 'dark') {
      throw new Error('Theme type should be "dark"')
    }

    // Проверка наличия основных цветов
    const requiredColors = [
      'editor.background',
      'editor.foreground',
      'activityBar.background',
      'sideBar.background',
      'statusBar.background',
    ]

    for (const color of requiredColors) {
      if (!theme.colors[color]) {
        throw new Error(`Missing required color: ${color}`)
      }
    }

    const duration = Date.now() - startTime
    colorLog('green', `✅ Theme structure validation passed (${duration}ms)`)
    return { name: 'Theme Structure Validation', passed: true, duration }
  } catch (error) {
    const duration = Date.now() - startTime
    const errorMessage = error instanceof Error ? error.message : String(error)

    colorLog('red', `❌ Theme structure validation failed (${duration}ms)`)
    colorLog('red', `   Error: ${errorMessage}`)
    return {
      name: 'Theme Structure Validation',
      passed: false,
      duration,
      error: errorMessage,
    }
  }
}

function generateReport(results: TestResult[]): ThemeTestReport {
  const totalTests = results.length
  const passedTests = results.filter((r) => r.passed).length
  const failedTests = totalTests - passedTests
  const totalDuration = results.reduce((sum, r) => sum + r.duration, 0)

  return {
    timestamp: new Date().toISOString(),
    totalTests,
    passedTests,
    failedTests,
    totalDuration,
    results,
  }
}

function printReport(report: ThemeTestReport) {
  console.log('\n' + '='.repeat(60))
  colorLog('bright', '📊 THEME TEST REPORT')
  console.log('='.repeat(60))

  console.log(`📅 Timestamp: ${report.timestamp}`)
  console.log(`🧪 Total Tests: ${report.totalTests}`)
  console.log(`✅ Passed: ${report.passedTests}`)
  console.log(`❌ Failed: ${report.failedTests}`)
  console.log(`⏱️  Total Duration: ${report.totalDuration}ms`)

  if (report.failedTests > 0) {
    console.log('\n❌ FAILED TESTS:')
    report.results
      .filter((r) => !r.passed)
      .forEach((r) => {
        colorLog('red', `   • ${r.name}`)
        if (r.error) {
          console.log(`     ${r.error.split('\n')[0]}`)
        }
      })
  }

  console.log('\n📋 DETAILED RESULTS:')
  report.results.forEach((r) => {
    const status = r.passed ? '✅' : '❌'
    const duration = `${r.duration}ms`
    console.log(`   ${status} ${r.name.padEnd(30)} ${duration.padStart(8)}`)
  })

  console.log('='.repeat(60))

  if (report.failedTests === 0) {
    colorLog('green', '\n🎉 All tests passed! Theme is ready for release.')
  } else {
    colorLog(
      'red',
      `\n💥 ${report.failedTests} test(s) failed. Please fix the issues before release.`
    )
    process.exit(1)
  }
}

function main() {
  colorLog('cyan', '🚀 Starting Tokyo Night Modern Theme Tests...')
  console.log()

  // Сначала строим тему
  colorLog('yellow', '🔨 Building theme...')
  try {
    execSync('npm run build:theme', { stdio: 'pipe' })
    colorLog('green', '✅ Theme built successfully')
  } catch {
    colorLog('red', '❌ Failed to build theme')
    process.exit(1)
  }

  console.log()

  // Запускаем тесты
  const results: TestResult[] = [
    validateThemeStructure(),
    runTest('Accessibility Tests', 'npm run test:accessibility'),
    runTest('Performance Tests', 'npm run test:performance'),
    runTest('Theme Validation Tests', 'npm run test:theme'),
    runTest('All Unit Tests', 'npm run test'),
  ]

  const report = generateReport(results)
  printReport(report)
}

// Запускаем только если файл вызван напрямую
if (require.main === module) {
  main()
}

export { generateReport, printReport, runTest, validateThemeStructure }
