import type { UnifiedPalette } from '../palette/index.js'
import { compatiblePalette, universalPalette } from '../palette/index.js'
import type { SemanticTokenStyle, TokenColor } from '../types/index.js'
import type {
  ColorValue,
  SemanticTokenConfig,
  ThemeConfig,
  TokenColorConfig,
  UIColorConfig,
} from './color-config-dsl.js'

/**
 * Адаптер палитры: преобразует CompatiblePalette в UnifiedPalette
 * Используется для обеспечения обратной совместимости
 */
const compatiblePaletteAdapter: UnifiedPalette = {
  background: compatiblePalette.bg,
  foreground: compatiblePalette.fg,
  blue: compatiblePalette.blue,
  cyan: compatiblePalette.cyan,
  teal: compatiblePalette.teal,
  green: compatiblePalette.green,
  purple: compatiblePalette.purple,
  orange: compatiblePalette.orange,
  yellow: compatiblePalette.yellow,
  red: compatiblePalette.red,
  pink: compatiblePalette.pink,
  neutral: compatiblePalette.neutral,
  indigo: compatiblePalette.indigo,
  lime: compatiblePalette.lime,
  magenta: compatiblePalette.magenta,
  peach: compatiblePalette.peach,
  rose: compatiblePalette.rose,
  amber: compatiblePalette.amber,
  emerald: compatiblePalette.emerald,
  ui: compatiblePalette.ui,
  shadow: compatiblePalette.shadow,
}

/**
 * Адаптер универсальной палитры: преобразует UniversalPalette в UnifiedPalette
 * Используется для новых конфигураций
 */
const universalPaletteAdapter: UnifiedPalette = {
  background: universalPalette.background.base,
  foreground: universalPalette.foreground.primary,
  blue: universalPalette.chromatic.blue,
  cyan: universalPalette.chromatic.cyan,
  teal: universalPalette.chromatic.teal,
  green: universalPalette.chromatic.green,
  purple: universalPalette.chromatic.purple,
  orange: universalPalette.chromatic.orange,
  yellow: universalPalette.chromatic.yellow,
  red: universalPalette.chromatic.red,
  pink: universalPalette.chromatic.pink,
  neutral: universalPalette.chromatic.neutral,
  indigo: universalPalette.chromatic.indigo,
  lime: universalPalette.chromatic.lime,
  magenta: universalPalette.chromatic.magenta,
  peach: universalPalette.chromatic.orange, // Используем orange как ближайший аналог для peach
  rose: universalPalette.chromatic.rose,
  amber: universalPalette.chromatic.amber,
  emerald: universalPalette.chromatic.emerald,
  ui: universalPalette.ui,
  shadow: universalPalette.shadow,
}

/**
 * Разрешает значение цвета (строка или функция)
 */
function resolveColorValue(value: ColorValue, p: UnifiedPalette): string {
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
      result[key] = resolveColorValue(value, compatiblePaletteAdapter)
    }
  }

  // Группы с префиксами
  if (config.groups) {
    for (const [prefix, rules] of Object.entries(config.groups)) {
      for (const [key, value] of Object.entries(rules)) {
        const fullKey = `${prefix}.${key}`
        result[fullKey] = resolveColorValue(value, compatiblePaletteAdapter)
      }
    }
  }

  // Множественные ключи с одним значением
  if (config.multiple) {
    for (const [keys, value] of config.multiple) {
      const resolvedValue = resolveColorValue(value, compatiblePaletteAdapter)
      for (const key of keys) {
        result[key] = resolvedValue
      }
    }
  }

  return result
}

/**
 * Генерирует UI цвета из конфигурации с использованием универсальной палитры
 */
export function generateUIColorsWithUniversal(
  config: UIColorConfig
): Record<string, string> {
  const result: Record<string, string> = {}

  // Прямые правила
  if (config.rules) {
    for (const [key, value] of Object.entries(config.rules)) {
      result[key] = resolveColorValue(value, universalPaletteAdapter)
    }
  }

  // Группы с префиксами
  if (config.groups) {
    for (const [prefix, rules] of Object.entries(config.groups)) {
      for (const [key, value] of Object.entries(rules)) {
        const fullKey = `${prefix}.${key}`
        result[fullKey] = resolveColorValue(value, universalPaletteAdapter)
      }
    }
  }

  // Множественные ключи с одним значением
  if (config.multiple) {
    for (const [keys, value] of config.multiple) {
      const resolvedValue = resolveColorValue(value, universalPaletteAdapter)
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
        compatiblePaletteAdapter
      )
    }

    if (config.settings.background) {
      settings.background = resolveColorValue(
        config.settings.background,
        compatiblePaletteAdapter
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
 * Генерирует токены подсветки синтаксиса из конфигурации с использованием универсальной палитры
 */
export function generateTokenColorsWithUniversal(
  configs: TokenColorConfig[]
): TokenColor[] {
  return configs.map((config) => {
    const settings: Record<string, string> = {}

    if (config.settings.foreground) {
      settings.foreground = resolveColorValue(
        config.settings.foreground,
        universalPaletteAdapter
      )
    }

    if (config.settings.background) {
      settings.background = resolveColorValue(
        config.settings.background,
        universalPaletteAdapter
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
      result[key] = value(compatiblePaletteAdapter)
    } else {
      result[key] = value
    }
  }

  return result
}

/**
 * Генерирует семантические токены из конфигурации с использованием универсальной палитры
 */
export function generateSemanticTokensWithUniversal(
  config: SemanticTokenConfig
): Record<string, SemanticTokenStyle> {
  const result: Record<string, SemanticTokenStyle> = {}

  for (const [key, value] of Object.entries(config.rules)) {
    if (typeof value === 'function') {
      result[key] = value(universalPaletteAdapter)
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

/**
 * Генерирует полную тему из конфигурации с использованием универсальной палитры
 */
export function generateFromUniversalConfig(config: ThemeConfig) {
  return {
    colors: mergeUIConfigsUniversal(config.ui),
    tokenColors: mergeTokenConfigsUniversal(config.tokens),
    semanticTokenColors: mergeSemanticConfigsUniversal(config.semantic),
  }
}

/**
 * Объединяет несколько UI конфигураций с использованием универсальной палитры
 */
export const mergeUIConfigsUniversal = (
  configs: Record<string, UIColorConfig | undefined>
): Record<string, string> => {
  const result: Record<string, string> = {}

  for (const config of Object.values(configs)) {
    if (config) {
      Object.assign(result, generateUIColorsWithUniversal(config))
    }
  }

  return result
}

/**
 * Объединяет несколько конфигураций токенов с использованием универсальной палитры
 */
export const mergeTokenConfigsUniversal = (
  configs: Record<string, TokenColorConfig[] | undefined>
): TokenColor[] => {
  const result: TokenColor[] = []

  for (const config of Object.values(configs)) {
    if (config) {
      result.push(...generateTokenColorsWithUniversal(config))
    }
  }

  return result
}

/**
 * Объединяет несколько конфигураций семантических токенов с использованием универсальной палитры
 */
export const mergeSemanticConfigsUniversal = (
  configs: Record<string, SemanticTokenConfig | undefined>
): Record<string, SemanticTokenStyle> => {
  const result: Record<string, SemanticTokenStyle> = {}

  for (const config of Object.values(configs)) {
    if (config) {
      Object.assign(result, generateSemanticTokensWithUniversal(config))
    }
  }

  return result
}
