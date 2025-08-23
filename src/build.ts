/// <reference types="node" />
import * as fs from 'node:fs'
import * as path from 'node:path'
import { getBaseColors } from './theme/base'
import { getButtonColors } from './theme/buttons'
import { getInputColors } from './theme/inputs'
import { getActivityBarColors } from './theme/activityBar'
import { getSideBarColors } from './theme/sideBar'
import { getListColors } from './theme/lists'
import { getEditorColors } from './theme/editor'
import { getTabColors } from './theme/tabs'
import { getStatusBarColors } from './theme/statusBar'
import { getTerminalColors } from './theme/terminal'
import { getGitColors } from './theme/git'
import { getNotificationColors } from './theme/notifications'
import { getMenuColors } from './theme/menus'
import { getPeekViewColors } from './theme/peekView'
import { getDiffEditorColors } from './theme/diffEditor'
import { getMergeColors } from './theme/merge'
import { getChartColors } from './theme/charts'
import { getDebugColors } from './theme/debug'
import { getQuickInputColors } from './theme/quickInput'
import { getMiscColors } from './theme/misc'

// Новые модули улучшенной архитектуры
import { ThemeValidator } from './validation/themeValidator'
import { PropertyValidator } from './validation/propertyValidator'
import type { ThemeObject } from './variants/themeBuilder'

/**
 * Улучшенный генератор темы с поддержкой новой архитектуры
 */

const root = path.resolve(__dirname, '..')
const themePath = path.join(root, 'themes', 'tokyo-night-dark-color-theme.json')

export const buildColors = (): Record<string, string> => ({
  ...getBaseColors(),
  ...getButtonColors(),
  ...getInputColors(),
  ...getActivityBarColors(),
  ...getSideBarColors(),
  ...getListColors(),
  ...getEditorColors(),
  ...getTabColors(),
  ...getStatusBarColors(),
  ...getTerminalColors(),
  ...getGitColors(),
  ...getNotificationColors(),
  ...getMenuColors(),
  ...getPeekViewColors(),
  ...getDiffEditorColors(),
  ...getMergeColors(),
  ...getChartColors(),
  ...getDebugColors(),
  ...getQuickInputColors(),
  ...getMiscColors(),
})

/**
 * Улучшенная функция сборки с поддержкой конфигурации и плагинов
 */
// Упрощение архитектуры: удалён слой Config/Plugin.
// Генерация тем выполняется напрямую через ThemeBuilder, а проверки — через валидаторы ниже.

/**
 * Валидация и сохранение темы
 */
const validateAndSaveTheme = (
  theme: ThemeObject,
  themePath: string,
  themeName: string
): void => {
  // Валидируем свойства темы
  const propertyValidator = new PropertyValidator()
  const propertyValidation = propertyValidator.validateThemeProperties(theme)

  if (!propertyValidation.passed) {
    console.warn(`⚠️  Найдены проблемы с свойствами в ${themeName}:`)
    propertyValidation.issues.forEach((issue) => {
      const severity =
        issue.severity === 'error'
          ? '🔴'
          : issue.severity === 'warning'
          ? '🟡'
          : '🔵'
      console.warn(`${severity} ${issue.property}: ${issue.message}`)
      if (issue.suggestion) {
        console.warn(`  💡 ${issue.suggestion}`)
      }
    })

    // Автоматически исправляем недопустимые свойства
    const { fixedTheme, fixes } = propertyValidator.fixInvalidProperties(theme)
    if (fixes.length > 0) {
      console.log(`🔧 Автоматически исправлено ${fixes.length} проблем:`)
      fixes.forEach((fix) => {
        console.log(`  • ${fix.property}: ${fix.action}`)
      })
      theme = fixedTheme
    }
  } else {
    console.log(`✅ Валидация свойств ${themeName} прошла успешно`)
  }

  // Валидируем качество темы (с отключением избыточных информационных сообщений)
  const qualityValidator = new ThemeValidator({ skipInfo: true })
  const qualityValidation = qualityValidator.validateTheme(theme)

  if (!qualityValidation.passed) {
    console.warn(`⚠️  Найдены проблемы с качеством в ${themeName}:`)
    qualityValidation.issues.forEach((issue) => {
      const severity =
        issue.severity === 'error'
          ? '🔴'
          : issue.severity === 'warning'
          ? '🟡'
          : '🔵'
      console.warn(`${severity} ${issue.message}`)
      if (issue.suggestion) {
        console.warn(`  💡 ${issue.suggestion}`)
      }
    })
  }

  // Сохраняем тему
  const out = JSON.stringify(theme, null, 2) + '\n'
  fs.writeFileSync(themePath, out, 'utf8')
}
/**
 * Генерация динамических цветов
 */
const main = () => {
  console.log('🏗️  Сборка темы Tokyo Night Lod...')

  // Создаем директорию themes если она не существует
  const themesDir = path.dirname(themePath)
  if (!fs.existsSync(themesDir)) {
    fs.mkdirSync(themesDir, { recursive: true })
  }

  // Импортируем ThemeBuilder
  const { ThemeBuilder } = require('./variants/themeBuilder')

  console.log('\n🔍 Валидация и сборка тем...')

  // Генерируем основную тему
  const theme = ThemeBuilder.buildStandard()
  validateAndSaveTheme(theme, themePath, 'Tokyo Night Dark')
  console.log(`📁 Файл: ${themePath}`)

  console.log('\n🎉 Сборка завершена! Тема прошла валидацию.')
}

if (require.main === module) {
  main()
}
