/// <reference types="node" />
import { tokenColors } from './tokenColors'
import { semanticTokenColors } from './semanticTokenColors'
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
import { ThemeConfigManager, ConfigFactory } from './config/themeConfig'
import { PluginManager, PluginConfigFactory } from './plugins/index'
import { ThemeValidator } from './validation/themeValidator'

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
export const buildThemeWithConfig = (configName?: string) => {
  // Создаем конфигурацию
  let config = ConfigFactory.createDeveloperConfig()

  if (configName === 'accessibility') {
    config = ConfigFactory.createAccessibilityConfig()
  } else if (configName === 'minimal') {
    config = ConfigFactory.createMinimalConfig()
  }

  // Создаем менеджер конфигурации
  const configManager = new ThemeConfigManager(config)

  // Создаем менеджер плагинов
  const pluginManager = new PluginManager()

  // Автоматически включаем плагины для поддерживаемых языков
  pluginManager.autoEnableForLanguages(config.syntax.customLanguageSupport)

  // Генерируем тему
  let theme = configManager.generateTheme()

  // Применяем плагины
  theme = pluginManager.applyPlugins(theme, '0.4.0')

  // Валидируем тему
  const validator = new ThemeValidator()
  const validationResult = validator.validateTheme(theme)

  if (!validationResult.passed) {
    console.warn('Обнаружены проблемы с темой:')
    validationResult.issues.forEach((issue) => {
      console.warn(`[${issue.severity}] ${issue.message}`)
      if (issue.suggestion) {
        console.warn(`  Совет: ${issue.suggestion}`)
      }
    })
  }

  return theme
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

  // Генерируем основную тему
  const theme = ThemeBuilder.buildStandard()
  const out = JSON.stringify(theme, null, 2) + '\n'
  fs.writeFileSync(themePath, out, 'utf8')
  console.log('✅ Основная тема собрана!')
  console.log(`📁 Файл: ${themePath}`)

  // Генерируем дополнительные варианты
  console.log('\n🎨 Генерация вариантов темы...')

  // Высококонтрастная тема
  const highContrastTheme = ThemeBuilder.buildHighContrast()
  const highContrastPath = path.join(
    root,
    'themes',
    'tokyo-night-dark-high-contrast-color-theme.json'
  )
  fs.writeFileSync(
    highContrastPath,
    JSON.stringify(highContrastTheme, null, 2) + '\n',
    'utf8'
  )
  console.log(`✅ Высококонтрастная тема: ${highContrastPath}`)

  // Минималистичная тема
  const minimalTheme = ThemeBuilder.buildMinimal()
  const minimalPath = path.join(
    root,
    'themes',
    'tokyo-night-dark-minimal-color-theme.json'
  )
  fs.writeFileSync(
    minimalPath,
    JSON.stringify(minimalTheme, null, 2) + '\n',
    'utf8'
  )
  console.log(`✅ Минималистичная тема: ${minimalPath}`)

  // Тема accessibility
  const accessibilityTheme = ThemeBuilder.buildAccessibility()
  const accessibilityPath = path.join(
    root,
    'themes',
    'tokyo-night-accessibility-color-theme.json'
  )
  fs.writeFileSync(
    accessibilityPath,
    JSON.stringify(accessibilityTheme, null, 2) + '\n',
    'utf8'
  )
  console.log(`✅ Accessibility тема: ${accessibilityPath}`)

  // Светлая тема
  const lightTheme = ThemeBuilder.buildLight()
  const lightPath = path.join(
    root,
    'themes',
    'tokyo-night-light-color-theme.json'
  )
  fs.writeFileSync(
    lightPath,
    JSON.stringify(lightTheme, null, 2) + '\n',
    'utf8'
  )
  console.log(`✅ Светлая тема: ${lightPath}`)

  // Обновляем также minimal theme (чистый вариант)
  const cleanTheme = ThemeBuilder.buildMinimal()
  cleanTheme.name = 'Tokyo Night Lod Clean'
  cleanTheme.displayName = 'Tokyo Night Lod Clean'
  const cleanPath = path.join(
    root,
    'themes',
    'tokyo-night-minimal-color-theme.json'
  )
  fs.writeFileSync(
    cleanPath,
    JSON.stringify(cleanTheme, null, 2) + '\n',
    'utf8'
  )
  console.log(`✅ Чистая тема: ${cleanPath}`)
}

if (require.main === module) {
  main()
}
