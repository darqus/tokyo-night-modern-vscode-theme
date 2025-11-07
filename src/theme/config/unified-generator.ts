import type { UniversalPalette } from '../palette/index.js'
import { universalPalette } from '../palette/index.js'
import type { SemanticTokenStyle, TokenColor } from '../types/index.js'
import type {
  ColorValue,
  SemanticTokenConfig,
  ThemeConfig,
  TokenColorConfig,
  UIColorConfig,
} from './color-config-dsl.js'

/**
 * Разрешает значение цвета (строка или функция)
 */
function resolveColorValue(value: ColorValue, p: UniversalPalette): string {
  return typeof value === 'function' ? value(p) : value
}

/**
 * Генерирует UI цвета из конфигурации с использованием совместимой палитры (для обратной совместимости)
 */
export function generateUIColors(
  config: UIColorConfig
): Record<string, string> {
  const result: Record<string, string> = {}

  // Прямые правила
  if (config.rules) {
    for (const [key, value] of Object.entries(config.rules)) {
      result[key] = resolveColorValue(value, universalPalette)
    }
  }

  // Группы с префиксами
  if (config.groups) {
    for (const [prefix, rules] of Object.entries(config.groups)) {
      for (const [key, value] of Object.entries(rules)) {
        const fullKey = `${prefix}.${key}`
        result[fullKey] = resolveColorValue(value, universalPalette)
      }
    }
  }

  // Множественные ключи с одним значением
  if (config.multiple) {
    for (const [keys, value] of config.multiple) {
      const resolvedValue = resolveColorValue(value, universalPalette)
      for (const key of keys) {
        result[key] = resolvedValue
      }
    }
  }

  return result
}

/**
 * Генерирует токены подсветки синтаксиса из конфигурации с использованием совместимой палитры (для обратной совместимости)
 */
export function generateTokenColors(configs: TokenColorConfig[]): TokenColor[] {
  return configs.map((config) => {
    const settings: Record<string, string> = {}

    if (config.settings.foreground) {
      settings.foreground = resolveColorValue(
        config.settings.foreground,
        universalPalette
      )
    }

    if (config.settings.background) {
      settings.background = resolveColorValue(
        config.settings.background,
        universalPalette
      )
    }

    if (config.settings.fontStyle) {
      settings.fontStyle = config.settings.fontStyle
    }

    return {
      name: config.name,
      scope: config.scope,
      settings,
    }
  })
}

/**
 * Генерирует семантические токены из конфигурации с использованием совместимой палитры (для обратной совместимости)
 */
export function generateSemanticTokens(
  config: SemanticTokenConfig
): Record<string, SemanticTokenStyle> {
  const result: Record<string, SemanticTokenStyle> = {}

  for (const [key, value] of Object.entries(config.rules)) {
    if (typeof value === 'function') {
      result[key] = value(universalPalette)
    } else {
      result[key] = value
    }
  }

  return result
}

/**
 * Объединяет несколько UI конфигураций
 */
export function mergeUIConfigs(
  configs: Record<string, UIColorConfig | undefined>
): Record<string, string> {
  const result: Record<string, string> = {}

  for (const config of Object.values(configs)) {
    if (config) {
      Object.assign(result, generateUIColors(config))
    }
  }

  return result
}

/**
 * Объединяет несколько конфигураций токенов
 */
export function mergeTokenConfigs(
  configs: Record<string, TokenColorConfig[] | undefined>
): TokenColor[] {
  const result: TokenColor[] = []

  for (const config of Object.values(configs)) {
    if (config) {
      result.push(...generateTokenColors(config))
    }
  }

  return result
}

/**
 * Объединяет несколько конфигураций семантических токенов
 */
export function mergeSemanticConfigs(
  configs: Record<string, SemanticTokenConfig | undefined>
): Record<string, SemanticTokenStyle> {
  const result: Record<string, SemanticTokenStyle> = {}

  for (const config of Object.values(configs)) {
    if (config) {
      Object.assign(result, generateSemanticTokens(config))
    }
  }

  return result
}

/**
 * Генерирует полную тему из конфигурации с использованием совместимой палитры
 */
export function generateFromConfig(config: ThemeConfig) {
  return {
    colors: mergeUIConfigs(config.ui),
    tokenColors: mergeTokenConfigs(config.tokens),
    semanticTokenColors: mergeSemanticConfigs(config.semantic),
  }
}
