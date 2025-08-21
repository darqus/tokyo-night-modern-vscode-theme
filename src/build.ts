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

  // Генерируем тему с нуля
  const theme = {
    name: 'Tokyo Night Lod',
    displayName: 'Tokyo Night Lod',
    author: 'lod',
    maintainers: ['lod'],
    type: 'dark',
    semanticClass: 'tokyo-night',
    semanticTokenColors: semanticTokenColors,
    colors: buildColors(),
    tokenColors: tokenColors,
  }

  // Сохраняем основную тему
  const out = JSON.stringify(theme, null, 2) + '\n'
  fs.writeFileSync(themePath, out, 'utf8')

  console.log('✅ Тема успешно собрана!')
  console.log(`📁 Файл: ${themePath}`)

  // Генерируем дополнительные варианты
  console.log('\n🎨 Генерация вариантов темы...')

  // Генерируем высококонтрастный вариант
  const accessibilityTheme = buildThemeWithConfig('accessibility')
  const accessibilityPath = path.join(
    root,
    'themes',
    'tokyo-night-dark-high-contrast-color-theme.json'
  )
  fs.writeFileSync(
    accessibilityPath,
    JSON.stringify(accessibilityTheme, null, 2) + '\n',
    'utf8'
  )
  console.log(`✅ Высококонтрастный вариант: ${accessibilityPath}`)

  // Генерируем минималистичный вариант
  const minimalTheme = buildThemeWithConfig('minimal')
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
  console.log(`✅ Минималистичный вариант: ${minimalPath}`)
}

if (require.main === module) {
  main()
}
