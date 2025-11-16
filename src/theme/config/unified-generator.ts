import type { UniversalPalette } from '../palette/universal-base.js'
import type { SemanticTokenStyle, TokenColor } from '../types/index.js'
import type {
  ColorValue,
  SemanticTokenConfig,
  ThemeConfig,
  TokenColorConfig,
  UIColorConfig,
} from './color-config-dsl.js'

/**
 * Generated theme data
 */
interface GeneratedTheme {
  colors: Record<string, string>
  tokenColors: TokenColor[]
  semanticTokenColors: Record<string, SemanticTokenStyle>
}

/**
 * Разрешает значение цвета (строка или функция)
 */
function resolveColorValue(
  value: ColorValue,
  palette: UniversalPalette
): string {
  return typeof value === 'function' ? value(palette) : value
}

/**
 * Генерирует UI цвета из конфигурации с использованием новой палитры
 */
export function generateUIColors(
  config: UIColorConfig,
  palette: UniversalPalette
): Record<string, string> {
  const result: Record<string, string> = {}

  // Прямые правила
  if (config.rules) {
    for (const [key, value] of Object.entries(config.rules)) {
      result[key] = resolveColorValue(value, palette)
    }
  }

  // Группы с префиксами
  if (config.groups) {
    for (const [prefix, rules] of Object.entries(config.groups)) {
      for (const [key, value] of Object.entries(rules)) {
        const fullKey = `${prefix}.${key}`
        result[fullKey] = resolveColorValue(value, palette)
      }
    }
  }

  // Множественные ключи с одним значением
  if (config.multiple) {
    for (const [keys, value] of config.multiple) {
      const resolvedValue = resolveColorValue(value, palette)
      for (const key of keys) {
        result[key] = resolvedValue
      }
    }
  }

  return result
}

/**
 * Генерирует токены подсветки синтаксиса из конфигурации с использованием новой палитры
 */
export function generateTokenColors(
  configs: TokenColorConfig[],
  palette: UniversalPalette
): TokenColor[] {
  return configs.map((config) => {
    const settings: Record<string, string> = {}

    if (config.settings.foreground) {
      settings.foreground = resolveColorValue(
        config.settings.foreground,
        palette
      )
    }

    if (config.settings.background) {
      settings.background = resolveColorValue(
        config.settings.background,
        palette
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
 * Генерирует семантические токены из конфигурации с использованием новой палитры
 */
export function generateSemanticTokens(
  config: SemanticTokenConfig,
  palette: UniversalPalette
): Record<string, SemanticTokenStyle> {
  const result: Record<string, SemanticTokenStyle> = {}

  for (const [key, value] of Object.entries(config.rules)) {
    if (typeof value === 'function') {
      result[key] = value(palette)
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
  configs: Record<string, UIColorConfig | undefined>,
  palette: UniversalPalette
): Record<string, string> {
  const result: Record<string, string> = {}

  for (const config of Object.values(configs)) {
    if (config) {
      Object.assign(result, generateUIColors(config, palette))
    }
  }

  return result
}

/**
 * Объединяет несколько конфигураций токенов
 */
export function mergeTokenConfigs(
  configs: Record<string, TokenColorConfig[] | undefined>,
  palette: UniversalPalette
): TokenColor[] {
  const result: TokenColor[] = []

  for (const config of Object.values(configs)) {
    if (config) {
      result.push(...generateTokenColors(config, palette))
    }
  }

  return result
}

/**
 * Объединяет несколько конфигураций семантических токенов
 */
export function mergeSemanticConfigs(
  configs: Record<string, SemanticTokenConfig | undefined>,
  palette: UniversalPalette
): Record<string, SemanticTokenStyle> {
  const result: Record<string, SemanticTokenStyle> = {}

  for (const config of Object.values(configs)) {
    if (config) {
      Object.assign(result, generateSemanticTokens(config, palette))
    }
  }

  return result
}

/**
 * Генерирует полную тему из конфигурации с использованием новой палитры
 */
export async function generateFromConfig(
  config: ThemeConfig,
  palette?: UniversalPalette
): Promise<GeneratedTheme> {
  const p =
    palette ||
    (await (async () => {
      // Import here to avoid circular dependency
      const { universalPalette } = await import('../palette/index.js')
      return universalPalette
    })())

  return {
    colors: mergeUIConfigs(config.ui, p),
    tokenColors: mergeTokenConfigs(config.tokens, p),
    semanticTokenColors: mergeSemanticConfigs(config.semantic, p),
  }
}

/**
 * Генерирует полную тему с использованием новой палитры
 */
export function generateTheme(palette?: UniversalPalette): GeneratedTheme {
  const p =
    palette ||
    (() => {
      // Import here to avoid circular dependency
      const {
        universalPalette: defaultPalette,
      } = require('../palette/index.js')
      return defaultPalette
    })()

  return {
    colors: mergeUIConfigs({}, p),
    tokenColors: mergeTokenConfigs({}, p),
    semanticTokenColors: mergeSemanticConfigs({}, p),
  }
}
