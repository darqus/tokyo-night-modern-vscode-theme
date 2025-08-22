import type { ThemePlugin, ThemeData } from '../types/theme'
import { palette } from '../palette'
import { core } from '../palette.core'

/**
 * Система плагинов для расширения функциональности темы
 */

/**
 * Плагин расширенной поддержки Rust
 */
export const rustSupportPlugin: ThemePlugin = {
  name: 'rust-support',
  version: '1.0.0',
  description: 'Расширенная поддержка Rust с lifetime, macro, trait',

  apply: (theme: ThemeData) => {
    return {
      ...theme,
      semanticTokenColors: {
        ...theme.semanticTokenColors,
        // Rust-специфические токены
        lifetime: { foreground: palette.accent.orange },
        macro: { foreground: palette.accent.red },
        trait: { foreground: palette.accent.cyan },
        derive: { foreground: palette.token.decorator },
        unsafe: { foreground: palette.accent.red, fontStyle: 'bold' },
        module: { foreground: palette.accent.blue },
        struct: { foreground: palette.accent.magenta },
        enum: { foreground: palette.accent.yellow },
        union: { foreground: palette.accent.purple },
        impl: { foreground: palette.accent.cyan },
        async: { foreground: palette.accent.purple, fontStyle: 'italic' },
        await: { foreground: palette.accent.purple, fontStyle: 'italic' },
      },
    }
  },

  isCompatible: (version: string) => {
    // Совместим с версиями >= 0.4.0
    const [major, minor] = version.split('.').map(Number)
    return major > 0 || (major === 0 && minor >= 4)
  },
}

/**
 * Плагин поддержки Go
 */
export const goSupportPlugin: ThemePlugin = {
  name: 'go-support',
  version: '1.0.0',
  description: 'Улучшенная поддержка Go с goroutines, channels, интерфейсами',

  apply: (theme: ThemeData) => {
    return {
      ...theme,
      semanticTokenColors: {
        ...theme.semanticTokenColors,
        // Go-специфические токены
        'function.builtin:go': { foreground: palette.accent.blue },
        'type.builtin:go': { foreground: palette.accent.cyan },
        'keyword.control.go': { foreground: palette.accent.magenta },
        'storage.type.interface.go': { foreground: palette.accent.cyan },
        'keyword.channel.go': { foreground: palette.accent.orange },
        'keyword.function.go': { foreground: palette.accent.blue },
        'keyword.goroutine.go': {
          foreground: palette.accent.purple,
          fontStyle: 'italic',
        },
        'keyword.defer.go': { foreground: palette.accent.red },
        'keyword.panic.go': {
          foreground: palette.accent.red,
          fontStyle: 'bold',
        },
        'keyword.recover.go': { foreground: palette.accent.yellow },
      },
    }
  },

  isCompatible: (version: string) => true,
}

/**
 * Плагин улучшенной поддержки Python
 */
export const pythonSupportPlugin: ThemePlugin = {
  name: 'python-support',
  version: '1.0.0',
  description:
    'Расширенная поддержка Python с декораторами, async/await, type hints',

  apply: (theme: ThemeData) => {
    return {
      ...theme,
      semanticTokenColors: {
        ...theme.semanticTokenColors,
        // Python-специфические токены
        'function.builtin:python': { foreground: palette.accent.blue },
        'class.builtin:python': { foreground: palette.accent.magenta },
        'decorator:python': { foreground: palette.token.decorator },
        'keyword.async:python': {
          foreground: palette.accent.purple,
          fontStyle: 'italic',
        },
        'keyword.await:python': {
          foreground: palette.accent.purple,
          fontStyle: 'italic',
        },
        'type.annotation:python': { foreground: palette.accent.cyan },
        'keyword.self:python': {
          foreground: palette.accent.red,
          fontStyle: 'italic',
        },
        'keyword.cls:python': {
          foreground: palette.accent.red,
          fontStyle: 'italic',
        },
        'function.magic:python': { foreground: palette.accent.purple },
        'variable.magic:python': { foreground: palette.accent.purple },
      },
    }
  },

  isCompatible: (version: string) => true,
}

/**
 * Плагин поддержки TypeScript
 */
export const typescriptSupportPlugin: ThemePlugin = {
  name: 'typescript-support',
  version: '1.0.0',
  description:
    'Улучшенная поддержка TypeScript с типами, интерфейсами, generics',

  apply: (theme: ThemeData) => {
    return {
      ...theme,
      semanticTokenColors: {
        ...theme.semanticTokenColors,
        // TypeScript-специфические токены
        'interface:typescript': { foreground: palette.accent.cyan },
        'type:typescript': { foreground: palette.accent.magenta },
        'typeParameter:typescript': { foreground: palette.accent.orange },
        'enum:typescript': { foreground: palette.accent.yellow },
        'enumMember:typescript': { foreground: palette.accent.yellow },
        'namespace:typescript': { foreground: palette.accent.blue },
        'decorator:typescript': { foreground: palette.token.decorator },
        'keyword.readonly:typescript': {
          foreground: palette.accent.cyan,
          fontStyle: 'italic',
        },
        'keyword.abstract:typescript': {
          foreground: palette.accent.purple,
          fontStyle: 'italic',
        },
        'keyword.override:typescript': { foreground: palette.accent.orange },
      },
    }
  },

  isCompatible: (version: string) => true,
}

/**
 * Плагин высокого контраста
 */
export const highContrastPlugin: ThemePlugin = {
  name: 'high-contrast',
  version: '1.0.0',
  description: 'Повышение контрастности для лучшей доступности',

  apply: (theme: ThemeData) => {
    // Увеличиваем контрастность основных элементов
    const enhancedColors = { ...theme.colors }

    // Делаем текст ярче
    enhancedColors.foreground = core.text.selection
    enhancedColors['editor.foreground'] = core.text.selection
    enhancedColors['sideBar.foreground'] = core.text.selection

    // Усиливаем границы
    enhancedColors.focusBorder = core.text.selection
    enhancedColors['button.focusBorder'] = core.text.selection
    enhancedColors['input.focusBorder'] = core.text.selection

    return {
      ...theme,
      colors: enhancedColors,
    }
  },

  isCompatible: (version: string) => true,
}

/**
 * Менеджер плагинов
 */
export class PluginManager {
  private plugins: Map<string, ThemePlugin> = new Map()
  private enabledPlugins: Set<string> = new Set()

  constructor() {
    // Регистрируем встроенные плагины
    this.registerPlugin(rustSupportPlugin)
    this.registerPlugin(goSupportPlugin)
    this.registerPlugin(pythonSupportPlugin)
    this.registerPlugin(typescriptSupportPlugin)
    this.registerPlugin(highContrastPlugin)
  }

  /**
   * Регистрация нового плагина
   */
  registerPlugin(plugin: ThemePlugin): void {
    this.plugins.set(plugin.name, plugin)
  }

  /**
   * Включение плагина
   */
  enablePlugin(name: string): boolean {
    if (this.plugins.has(name)) {
      this.enabledPlugins.add(name)
      return true
    }
    return false
  }

  /**
   * Отключение плагина
   */
  disablePlugin(name: string): void {
    this.enabledPlugins.delete(name)
  }

  /**
   * Проверка включен ли плагин
   */
  isPluginEnabled(name: string): boolean {
    return this.enabledPlugins.has(name)
  }

  /**
   * Получение всех доступных плагинов
   */
  getAvailablePlugins(): ThemePlugin[] {
    return Array.from(this.plugins.values())
  }

  /**
   * Получение включенных плагинов
   */
  getEnabledPlugins(): ThemePlugin[] {
    return Array.from(this.enabledPlugins)
      .map((name) => this.plugins.get(name))
      .filter((plugin): plugin is ThemePlugin => plugin !== undefined)
  }

  /**
   * Применение всех включенных плагинов к теме
   */
  applyPlugins(theme: ThemeData, themeVersion: string = '0.4.0'): ThemeData {
    let enhancedTheme = { ...theme }

    for (const pluginName of this.enabledPlugins) {
      const plugin = this.plugins.get(pluginName)
      if (plugin && plugin.isCompatible(themeVersion)) {
        try {
          enhancedTheme = plugin.apply(enhancedTheme)
        } catch (error) {
          console.warn(`Ошибка применения плагина ${pluginName}:`, error)
        }
      }
    }

    return enhancedTheme
  }

  /**
   * Автоматическое включение плагинов на основе языков
   */
  autoEnableForLanguages(languages: string[]): void {
    const languagePluginMap: Record<string, string> = {
      rust: 'rust-support',
      go: 'go-support',
      python: 'python-support',
      typescript: 'typescript-support',
      javascript: 'typescript-support', // TypeScript плагин работает и для JS
    }

    languages.forEach((lang) => {
      const pluginName = languagePluginMap[lang.toLowerCase()]
      if (pluginName && this.plugins.has(pluginName)) {
        this.enablePlugin(pluginName)
      }
    })
  }

  /**
   * Создание конфигурации плагинов
   */
  getPluginConfig(): { enabled: string[] } {
    return {
      enabled: Array.from(this.enabledPlugins),
    }
  }

  /**
   * Применение конфигурации плагинов
   */
  applyPluginConfig(config: { enabled: string[] }): void {
    this.enabledPlugins.clear()
    config.enabled.forEach((name) => {
      if (this.plugins.has(name)) {
        this.enabledPlugins.add(name)
      }
    })
  }
}

/**
 * Фабрика для создания предустановленных конфигураций плагинов
 */
export class PluginConfigFactory {
  /**
   * Конфигурация для веб-разработки
   */
  static createWebDevelopmentConfig(): string[] {
    return ['typescript-support']
  }

  /**
   * Конфигурация для системного программирования
   */
  static createSystemProgrammingConfig(): string[] {
    return ['rust-support', 'go-support']
  }

  /**
   * Конфигурация для data science
   */
  static createDataScienceConfig(): string[] {
    return ['python-support']
  }

  /**
   * Конфигурация для доступности
   */
  static createAccessibilityConfig(): string[] {
    return ['high-contrast']
  }

  /**
   * Полная конфигурация со всеми языками
   */
  static createFullLanguageConfig(): string[] {
    return [
      'rust-support',
      'go-support',
      'python-support',
      'typescript-support',
    ]
  }
}
