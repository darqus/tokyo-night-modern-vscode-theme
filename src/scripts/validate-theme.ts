#!/usr/bin/env node

import * as fs from 'fs'
import * as path from 'path'
import { PropertyValidator } from '../validation/propertyValidator'
import { ThemeValidator } from '../validation/themeValidator'

/**
 * CLI утилита для валидации тем VS Code
 */

// Цвета для консольного вывода
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
}

function colorize(text: string, color: keyof typeof colors): string {
  return `${colors[color]}${text}${colors.reset}`
}

function printHelp(): void {
  console.log(`
${colorize('Валидатор тем VS Code Tokyo Night', 'bold')}

${colorize('ИСПОЛЬЗОВАНИЕ:', 'cyan')}
  npm run validate [файл-темы.json]
  node dist/scripts/validate-theme.js [файл-темы.json]

${colorize('ОПЦИИ:', 'cyan')}
  -h, --help              Показать эту справку
  -v, --verbose           Подробный вывод
  -f, --fix               Автоматически исправить недопустимые свойства
  -o, --output <файл>     Сохранить исправленную тему в файл
  -a, --all               Валидировать все темы в папке themes/
  -s, --summary           Показать только сводку без деталей

${colorize('ПРИМЕРЫ:', 'cyan')}
  npm run validate themes/tokyo-night-dark-color-theme.json
  npm run validate --all
  npm run validate --fix --output fixed-theme.json theme.json

${colorize('КОДЫ ВЫХОДА:', 'cyan')}
  0  - Валидация прошла успешно
  1  - Найдены ошибки
  2  - Неверные аргументы или ошибка файла
`)
}

interface ValidateOptions {
  verbose: boolean
  fix: boolean
  output?: string
  all: boolean
  summary: boolean
}

async function validateThemeFile(
  filePath: string,
  options: ValidateOptions
): Promise<boolean> {
  if (!fs.existsSync(filePath)) {
    console.error(colorize(`❌ Файл не найден: ${filePath}`, 'red'))
    return false
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const theme = JSON.parse(content)

    console.log(colorize(`\n🔍 Валидация: ${path.basename(filePath)}`, 'bold'))

    // Валидация свойств
    const propertyValidator = new PropertyValidator()
    const propertyResult = propertyValidator.validateThemeProperties(theme)

    // Валидация качества
    const qualityValidator = new ThemeValidator()
    const qualityResult = qualityValidator.validateTheme(theme)

    const allPassed = propertyResult.passed && qualityResult.passed
    const totalIssues =
      propertyResult.issues.length + qualityResult.issues.length

    // Сводка
    if (options.summary) {
      const status = allPassed
        ? colorize('✅ ПРОЙДЕНО', 'green')
        : colorize('❌ НЕ ПРОЙДЕНО', 'red')
      const issues =
        totalIssues > 0 ? colorize(`(${totalIssues} проблем)`, 'yellow') : ''
      console.log(`  ${status} ${issues}`)
      return allPassed
    }

    // Отчеты по свойствам
    if (propertyResult.issues.length > 0) {
      console.log(colorize('\n📋 СВОЙСТВА ТЕМЫ:', 'cyan'))
      console.log(propertyValidator.generateReport(propertyResult))
    } else {
      console.log(colorize('✅ Все свойства темы корректны', 'green'))
    }

    // Отчеты по качеству
    if (qualityResult.issues.length > 0) {
      console.log(colorize('\n🎨 КАЧЕСТВО ТЕМЫ:', 'cyan'))
      qualityResult.issues.forEach((issue) => {
        const severity =
          issue.severity === 'error'
            ? colorize('🔴 ОШИБКА', 'red')
            : issue.severity === 'warning'
            ? colorize('🟡 ПРЕДУПРЕЖДЕНИЕ', 'yellow')
            : colorize('🔵 ИНФОРМАЦИЯ', 'blue')
        console.log(`  ${severity}: ${issue.message}`)
        if (issue.suggestion && options.verbose) {
          console.log(`    💡 ${issue.suggestion}`)
        }
      })
    } else {
      console.log(
        colorize('✅ Качество темы соответствует стандартам', 'green')
      )
    }

    // Автоисправление
    if (options.fix && !propertyResult.passed) {
      const { fixedTheme, fixes } =
        propertyValidator.fixInvalidProperties(theme)

      if (fixes.length > 0) {
        console.log(
          colorize(
            `\n🔧 Автоматически исправлено ${fixes.length} проблем:`,
            'cyan'
          )
        )
        fixes.forEach((fix) => {
          console.log(`  • ${fix.property}: ${fix.action}`)
        })

        const outputPath =
          options.output || filePath.replace('.json', '.fixed.json')
        fs.writeFileSync(
          outputPath,
          JSON.stringify(fixedTheme, null, 2) + '\n',
          'utf8'
        )
        console.log(
          colorize(`💾 Исправленная тема сохранена: ${outputPath}`, 'green')
        )
      }
    }

    return allPassed
  } catch (error) {
    console.error(
      colorize(
        `❌ Ошибка при обработке файла: ${
          error instanceof Error ? error.message : 'Неизвестная ошибка'
        }`,
        'red'
      )
    )
    return false
  }
}

async function validateAllThemes(options: ValidateOptions): Promise<boolean> {
  const themesDir = path.join(process.cwd(), 'themes')

  if (!fs.existsSync(themesDir)) {
    console.error(colorize('❌ Папка themes/ не найдена', 'red'))
    return false
  }

  const themeFiles = fs
    .readdirSync(themesDir)
    .filter((file) => file.endsWith('.json'))

  if (themeFiles.length === 0) {
    console.error(colorize('❌ В папке themes/ не найдено JSON файлов', 'red'))
    return false
  }

  console.log(
    colorize(`🔍 Найдено ${themeFiles.length} тем для валидации:`, 'bold')
  )

  let allPassed = true
  let totalIssues = 0

  for (const file of themeFiles) {
    const filePath = path.join(themesDir, file)
    const result = await validateThemeFile(filePath, options)
    if (!result) allPassed = false
  }

  // Общая сводка
  console.log(colorize('\n📊 ОБЩАЯ СВОДКА:', 'bold'))
  if (allPassed) {
    console.log(colorize('🎉 Все темы прошли валидацию успешно!', 'green'))
  } else {
    console.log(colorize('⚠️  Некоторые темы содержат проблемы', 'yellow'))
  }

  return allPassed
}

async function main(): Promise<void> {
  const args = process.argv.slice(2)

  const options: ValidateOptions = {
    verbose: false,
    fix: false,
    all: false,
    summary: false,
  }

  let filePath: string | undefined

  // Парсинг аргументов
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]

    switch (arg) {
      case '-h':
      case '--help':
        printHelp()
        process.exit(0)

      case '-v':
      case '--verbose':
        options.verbose = true
        break

      case '-f':
      case '--fix':
        options.fix = true
        break

      case '-o':
      case '--output':
        options.output = args[++i]
        break

      case '-a':
      case '--all':
        options.all = true
        break

      case '-s':
      case '--summary':
        options.summary = true
        break

      default:
        if (!arg.startsWith('-')) {
          filePath = arg
        } else {
          console.error(colorize(`❌ Неизвестная опция: ${arg}`, 'red'))
          console.error('Используйте --help для справки')
          process.exit(2)
        }
    }
  }

  // Валидация
  let success = false

  if (options.all) {
    success = await validateAllThemes(options)
  } else if (filePath) {
    success = await validateThemeFile(filePath, options)
  } else {
    console.error(colorize('❌ Не указан файл темы для валидации', 'red'))
    console.error('Используйте --help для справки')
    process.exit(2)
  }

  process.exit(success ? 0 : 1)
}

// Запуск только если файл выполняется напрямую
if (require.main === module) {
  main().catch((error) => {
    console.error(
      colorize(
        `❌ Критическая ошибка: ${
          error instanceof Error ? error.message : 'Неизвестная ошибка'
        }`,
        'red'
      )
    )
    process.exit(2)
  })
}

export { validateThemeFile, validateAllThemes }
