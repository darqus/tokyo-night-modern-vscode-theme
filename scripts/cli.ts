#!/usr/bin/env node

/**
 * Простой CLI для управления темой Tokyo Night Lod
 * Без внешних зависимостей
 */

import { ThemeConfigManager, ConfigFactory } from '../src/config/themeConfig'
import { PluginManager, PluginConfigFactory } from '../src/plugins/index'
import { ThemeValidator } from '../src/validation/themeValidator'
import { buildThemeWithConfig } from '../src/build'
import * as fs from 'node:fs'
import * as path from 'node:path'

const args = process.argv.slice(2)
const command = args[0]

function showHelp() {
  console.log(`
🎨 Tokyo Night Lod CLI v0.4.0

Команды:
  build [config]           Собрать тему (developer|accessibility|minimal)
  validate <file>          Валидировать тему
  plugins list            Показать доступные плагины
  plugins enable <names>   Включить плагины
  config create <type>     Создать конфигурацию
  info                    Информация о теме
  help                    Показать эту справку

Примеры:
  node scripts/cli.ts build accessibility
  node scripts/cli.ts validate ./themes/theme.json
  node scripts/cli.ts plugins list
  node scripts/cli.ts config create developer
`)
}

function buildCommand() {
  const configType = args[1] || 'developer'
  console.log(`🏗️  Сборка темы с конфигурацией: ${configType}`)

  try {
    const theme = buildThemeWithConfig(configType)
    const outputPath = path.join(
      './themes',
      `tokyo-night-${configType}-color-theme.json`
    )

    fs.writeFileSync(outputPath, JSON.stringify(theme, null, 2) + '\n', 'utf8')
    console.log(`✅ Тема собрана: ${outputPath}`)
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

function pluginsCommand() {
  const subCommand = args[1]
  const pluginManager = new PluginManager()

  if (subCommand === 'list') {
    console.log('📦 Доступные плагины:')
    pluginManager.getAvailablePlugins().forEach((plugin) => {
      const status = pluginManager.isPluginEnabled(plugin.name) ? '✅' : '⭕'
      console.log(
        `${status} ${plugin.name} v${plugin.version} - ${plugin.description}`
      )
    })
  } else if (subCommand === 'enable') {
    const plugins = args.slice(2)
    plugins.forEach((plugin) => {
      if (pluginManager.enablePlugin(plugin)) {
        console.log(`✅ Плагин "${plugin}" включен`)
      } else {
        console.error(`❌ Плагин "${plugin}" не найден`)
      }
    })
  } else {
    console.error('❌ Неизвестная команда плагинов. Используйте: list, enable')
  }
}

function configCommand() {
  const subCommand = args[1]
  const type = args[2]

  if (subCommand === 'create' && type) {
    let config
    switch (type) {
      case 'developer':
        config = ConfigFactory.createDeveloperConfig()
        break
      case 'accessibility':
        config = ConfigFactory.createAccessibilityConfig()
        break
      case 'minimal':
        config = ConfigFactory.createMinimalConfig()
        break
      default:
        console.error(`❌ Неизвестный тип конфигурации: ${type}`)
        process.exit(1)
    }

    const outputPath = `./theme-config-${type}.json`
    fs.writeFileSync(outputPath, JSON.stringify(config, null, 2) + '\n', 'utf8')
    console.log(`✅ Конфигурация "${type}" создана: ${outputPath}`)
  } else {
    console.error('❌ Использование: config create <type>')
  }
}

function infoCommand() {
  console.log('🎨 Tokyo Night Lod - Улучшенная архитектура')
  console.log('📦 Версия: 0.4.0')
  console.log('🏗️  Архитектура: Модульная с поддержкой плагинов')
  console.log('🎯 Особенности:')
  console.log('  - Множественные варианты темы')
  console.log('  - Система плагинов для языков')
  console.log('  - Автоматическая валидация')
  console.log('  - Динамическая генерация цветов')
  console.log('  - Гибкая конфигурация')
  console.log('  - WCAG 2.1 совместимость')
}

// Обработка команд
switch (command) {
  case 'build':
    buildCommand()
    break
  case 'validate':
    validateCommand()
    break
  case 'plugins':
    pluginsCommand()
    break
  case 'config':
    configCommand()
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
