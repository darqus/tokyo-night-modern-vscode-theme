import type { ThemeSettings, ThemeData, ThemeConfig } from '../types/theme'
import type { Palette } from '../types/palette'
import { palette } from '../palette'
import { core } from '../palette.core'
import { ThemeVariantManager, variants } from '../variants/index'
import { buildColors } from '../build'
import { tokenColors } from '../tokenColors'
import { semanticTokenColors } from '../semanticTokenColors'

/**
 * Менеджер конфигурации темы
 * Обеспечивает гибкую настройку и генерацию тем
 */

export class ThemeConfigManager {
  private config: ThemeSettings
  private variantManager: ThemeVariantManager

  constructor(defaultConfig?: Partial<ThemeSettings>) {
    this.config = {
      variant: 'tokyo-night-dark',
      contrast: 'normal',
      syntax: {
        enableSemanticHighlighting: true,
        bracketPairColorization: true,
        customLanguageSupport: ['rust', 'go', 'python', 'typescript'],
      },
      ui: {
        activityBarPosition: 'left',
        tabBarStyle: 'modern',
        statusBarStyle: 'full',
      },
      ...defaultConfig,
    }

    this.variantManager = new ThemeVariantManager(variants)
  }

  /**
   * Обновить конфигурацию
   */
  updateConfig(updates: Partial<ThemeSettings>): void {
    this.config = { ...this.config, ...updates }
  }

  /**
   * Получить текущую конфигурацию
   */
  getConfig(): ThemeSettings {
    return { ...this.config }
  }

  /**
   * Генерация темы на основе конфигурации
   */
  generateTheme(): ThemeData {
    const variant = this.variantManager.getVariant(this.config.variant)
    if (!variant) {
      throw new Error(`Неизвестный вариант темы: ${this.config.variant}`)
    }

    // Применяем конфигурацию к базовой палитре
    const adjustedPalette = this.variantManager.applyConfigToPalette(palette, {
      contrast: this.config.contrast,
      saturation: 'normal',
      brightness: variant.baseConfig.brightness,
    })

    // Генерируем цвета темы
    const colors = this.generateThemeColors(adjustedPalette)

    // Применяем кастомные цвета
    const finalColors = this.applyCustomColors(colors)

    // Генерируем семантические токены
    const finalSemanticTokenColors = this.generateSemanticTokenColors()

    return {
      name: variant.displayName,
      type: variant.baseConfig.brightness === 'lighter' ? 'light' : 'dark',
      colors: finalColors,
      tokenColors: tokenColors,
      semanticTokenColors: finalSemanticTokenColors,
    }
  }

  /**
   * Сохранить конфигурацию в файл
   */
  saveConfig(filePath: string): void {
    // В реальной реализации здесь был бы код для сохранения в файл
    console.log(`Сохранение конфигурации в ${filePath}:`, this.config)
  }

  /**
   * Загрузить конфигурацию из файла
   */
  loadConfig(filePath: string): void {
    // В реальной реализации здесь был бы код для загрузки из файла
    console.log(`Загрузка конфигурации из ${filePath}`)
  }

  /**
   * Сброс к настройкам по умолчанию
   */
  resetToDefaults(): void {
    this.config = {
      variant: 'tokyo-night-dark',
      contrast: 'normal',
      syntax: {
        enableSemanticHighlighting: true,
        bracketPairColorization: true,
        customLanguageSupport: [],
      },
      ui: {
        activityBarPosition: 'left',
        tabBarStyle: 'modern',
        statusBarStyle: 'full',
      },
    }
  }

  /**
   * Получить доступные варианты
   */
  getAvailableVariants() {
    return this.variantManager.getAllVariants()
  }

  /**
   * Проверить валидность конфигурации
   */
  validateConfig(): { valid: boolean; errors: string[] } {
    const errors: string[] = []

    // Проверяем существование варианта
    if (!this.variantManager.getVariant(this.config.variant)) {
      errors.push(`Неизвестный вариант темы: ${this.config.variant}`)
    }

    // Проверяем настройки контрастности
    if (!['low', 'normal', 'high'].includes(this.config.contrast)) {
      errors.push(`Неверное значение контрастности: ${this.config.contrast}`)
    }

    // Проверяем UI настройки
    if (!['left', 'right'].includes(this.config.ui.activityBarPosition)) {
      errors.push(
        `Неверная позиция панели активности: ${this.config.ui.activityBarPosition}`
      )
    }

    return {
      valid: errors.length === 0,
      errors,
    }
  }

  private generateThemeColors(
    adjustedPalette: Palette
  ): Record<string, string> {
    // Используем существующую функцию генерации цветов
    // но с возможностью применения настроек UI
    const baseColors = buildColors()

    // Применяем UI настройки
    if (this.config.ui.activityBarPosition === 'right') {
      // Можно добавить специфические настройки для правой панели
    }

    if (this.config.ui.tabBarStyle === 'minimal') {
      // Упрощенный стиль вкладок
      baseColors['tab.border'] = core.ui.shadow
      baseColors['tab.activeBorder'] = core.ui.shadow
    }

    return baseColors
  }

  private applyCustomColors(
    baseColors: Record<string, string>
  ): Record<string, string> {
    if (!this.config.customColors) {
      return baseColors
    }

    return {
      ...baseColors,
      ...this.config.customColors,
    }
  }

  private generateSemanticTokenColors(): Record<string, any> {
    let tokens: Record<string, any> = { ...semanticTokenColors }

    // Применяем настройки языковой поддержки
    if (this.config.syntax.customLanguageSupport.includes('rust')) {
      tokens = {
        ...tokens,
        lifetime: { foreground: palette.accent.orange },
        macro: { foreground: palette.accent.red },
        trait: { foreground: palette.accent.cyan },
      }
    }

    if (this.config.syntax.customLanguageSupport.includes('go')) {
      tokens = {
        ...tokens,
        'function.builtin:go': { foreground: palette.accent.blue },
        'type.builtin:go': { foreground: palette.accent.cyan },
      }
    }

    if (this.config.syntax.customLanguageSupport.includes('python')) {
      tokens = {
        ...tokens,
        'function.builtin:python': { foreground: palette.accent.blue },
        'class.builtin:python': { foreground: palette.accent.magenta },
      }
    }

    return tokens
  }
}

/**
 * Фабрика для создания предустановленных конфигураций
 */
export class ConfigFactory {
  /**
   * Создать конфигурацию для разработчика
   */
  static createDeveloperConfig(): ThemeSettings {
    return {
      variant: 'tokyo-night-dark',
      contrast: 'normal',
      syntax: {
        enableSemanticHighlighting: true,
        bracketPairColorization: true,
        customLanguageSupport: ['typescript', 'rust', 'go', 'python'],
      },
      ui: {
        activityBarPosition: 'left',
        tabBarStyle: 'modern',
        statusBarStyle: 'full',
      },
    }
  }

  /**
   * Создать конфигурацию для повышенной доступности
   */
  static createAccessibilityConfig(): ThemeSettings {
    return {
      variant: 'tokyo-night-dark-high-contrast',
      contrast: 'high',
      syntax: {
        enableSemanticHighlighting: true,
        bracketPairColorization: true,
        customLanguageSupport: [],
      },
      ui: {
        activityBarPosition: 'left',
        tabBarStyle: 'classic',
        statusBarStyle: 'full',
      },
    }
  }

  /**
   * Создать минималистичную конфигурацию
   */
  static createMinimalConfig(): ThemeSettings {
    return {
      variant: 'tokyo-night-dark-muted',
      contrast: 'low',
      syntax: {
        enableSemanticHighlighting: false,
        bracketPairColorization: false,
        customLanguageSupport: [],
      },
      ui: {
        activityBarPosition: 'left',
        tabBarStyle: 'classic',
        statusBarStyle: 'minimal',
      },
    }
  }
}
