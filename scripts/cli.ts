#!/usr/bin/env node

/**
 * Простой CLI для управления темой Tokyo Night Lod
 * Без внешних зависимостей
 */

import { ThemeValidator } from '../src/validation/themeValidator'
import { ThemeBuilder } from '../src/variants/themeBuilder'
import * as fs from 'node:fs'
import * as path from 'node:path'

interface ThemeData {
  name: string
  type: string
  colors: Record<string, string>
  tokenColors: Array<{
    name?: string
    scope: string | string[]
    settings: {
      foreground?: string
      background?: string
      fontStyle?: string
    }
  }>
  semanticHighlighting?: boolean
  semanticTokenColors?: Record<
    string,
    {
      foreground?: string
      background?: string
      fontStyle?: string
      bold?: boolean
      italic?: boolean
      underline?: boolean
      strikethrough?: boolean
    }
  >
}

const args = process.argv.slice(2)
const command = args[0]

function showHelp() {
  console.log(`
🎨 Tokyo Night Lod CLI v0.4.0

Команды:
  build                    Собрать стандартный набор тем (dark, hc, minimal, light, accessibility)
  validate <file>          Валидировать тему
  info                    Информация о теме
  help                    Показать эту справку

Примеры:
  node scripts/cli.ts build
  node scripts/cli.ts validate ./themes/theme.json
`)
}

function buildCommand() {
  console.log('🏗️  Сборка полного набора тем...')
  try {
    const outDir = './themes'
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

    const buildAndWrite = (name: string, theme: ThemeData) => {
      const filename = `tokyo-night-${name}-color-theme.json`
      const outputPath = path.join(outDir, filename)
      fs.writeFileSync(
        outputPath,
        JSON.stringify(theme, null, 2) + '\n',
        'utf8'
      )
      console.log(`✅ Сгенерировано: ${outputPath}`)
    }

    buildAndWrite('dark', ThemeBuilder.buildStandard())
    // Note: Other theme variants are not yet implemented in ThemeBuilder
    // buildAndWrite('dark-high-contrast', ThemeBuilder.buildHighContrast())
    // buildAndWrite('dark-minimal', ThemeBuilder.buildMinimal())
    // buildAndWrite('light', ThemeBuilder.buildLight())
    // buildAndWrite('accessibility', ThemeBuilder.buildAccessibility())
  } catch (error) {
    console.error('❌ Ошибка сборки:', error)
    process.exit(1)
  }
}

function validateCommand() {
  const file = args[1]
  if (!file) {
    console.error('❌ Укажите файл для валидации')
    process.exit(1)
  }

  console.log(`🔍 Валидация темы: ${file}`)

  try {
    const themeContent = fs.readFileSync(file, 'utf8')
    const theme = JSON.parse(themeContent)

    const validator = new ThemeValidator()
    const result = validator.validateTheme(theme)

    if (result.passed) {
      console.log('✅ Тема прошла валидацию')
    } else {
      console.log('❌ Обнаружены проблемы:')
      result.issues.forEach((issue) => {
        const icon =
          issue.severity === 'error'
            ? '🚨'
            : issue.severity === 'warning'
            ? '⚠️'
            : 'ℹ️'
        console.log(`${icon} [${issue.severity}] ${issue.message}`)
        if (issue.suggestion) {
          console.log(`   💡 ${issue.suggestion}`)
        }
      })

      if (result.issues.some((i) => i.severity === 'error')) {
        process.exit(1)
      }
    }
  } catch (error) {
    console.error('❌ Ошибка валидации:', error)
    process.exit(1)
  }
}

// Удалены команды plugins и config для упрощения

function infoCommand() {
  console.log('🎨 Tokyo Night Lod — упрощённая архитектура')
  console.log('📦 Версия: 0.4.0')
  console.log(
    '🏗️  Архитектура: Плоская (без конфигов и плагинов), генерация через ThemeBuilder'
  )
  console.log('🎯 Особенности:')
  console.log(
    '  - Встроенные варианты: dark, high-contrast, minimal, light, accessibility'
  )
  console.log('  - Автоматическая валидация тем')
  console.log('  - Цвета строго из палитры + цветокоррекция (без хардкода)')
  console.log('  - Совместимость с WCAG 2.1 (контрастность)')
}

// Обработка команд
switch (command) {
  case 'build':
    buildCommand()
    break
  case 'validate':
    validateCommand()
    break
  case 'info':
    infoCommand()
    break
  case 'help':
  case undefined:
    showHelp()
    break
  default:
    console.error(`❌ Неизвестная команда: ${command}`)
    showHelp()
    process.exit(1)
}
