/**
 * Улучшенная палитра Tokyo Modern с семантическими абстракциями
 */

// Экспорт конфигурации
export {
  background,
  baseColors,
  chromaMain,
  foreground,
  shadow,
  ui,
} from './config/base-colors.js'
export {
  adaptiveConfig,
  CHROMATIC_CLASSIFICATION,
  generationConfig,
  getAdaptiveConfig,
  getColorType,
  getShadeConfig,
  mergeConfigs,
  SHADE_CONFIGS,
  semanticConfig,
  shadowConfig,
  uiConfig,
  validateConfig,
} from './config/generation-config.js'
// Экспорт констант
export {
  ADJUST,
  ANIMATION_DURATIONS,
  ANIMATION_EASING,
  ANIMATION_TYPES,
  BORDER_RADIUS,
  BREAKPOINTS,
  COMPONENTS,
  CONTENT_TYPES,
  CONTRAST_LEVELS,
  MIX_RATIO,
  OPACITY,
  SHADE_PRESETS,
  SHADOW_SIZES,
  SPACING,
  UI_STATES,
} from './core/constants.js'
// Экспорт фабрик
export {
  createAdaptiveColors,
  createAlertColors,
  createBorderColors,
  createButtonColors,
  createCardColors,
  createGradientColors,
  createInputColors,
  createInteractiveColors,
  createLinkColors,
  createModalColors,
  createProgressColors,
  createSelectionColors,
  createSemanticColors,
  createTableColors,
  createTagColors,
  createTooltipColors,
} from './core/factories.js'
// Экспорт утилит для вариантов
export {
  clearVariantsCache,
  createGradientFromVariants,
  createUseCaseVariants,
  generateColorVariants,
  generateCustomVariants,
  generateDarkVariants,
  generateLightVariants,
  generateNeutralVariants,
  generateVariantsByType,
  getAccentVariant,
  getCachedVariants,
  getContrastVariant,
  getSubtleVariant,
  getVariantsCacheSize,
  validateVariants,
} from './core/variants.js'
// Экспорт типов
export type {
  BackgroundColors,
  BaseColors,
  ChromaticColors,
  ColorPath,
  ColorVariant,
  ForegroundColors,
  GenerationConfig,
  InteractiveColors,
  InteractiveOptions,
  Palette,
  SemanticColors,
  ShadeOptions,
  UIColors,
} from './types.js'
export { universalPalette } from './universal-generated.js'

import { alpha, lighten, mix } from '../utils/color.js'
// Импорты для генерации палитры
import { baseColors } from './config/base-colors.js'
import { getColorType, getShadeConfig } from './config/generation-config.js'
import { MIX_RATIO, OPACITY, UI_STATES } from './core/constants.js'
import { createCardColors, createInputColors } from './core/factories.js'
import { getCachedVariants } from './core/variants.js'
import type {
  BackgroundColors,
  ChromaticColors,
  ForegroundColors,
  InteractiveColors,
  Palette,
  SemanticColors,
  UIColors,
} from './types.js'

/**
 * Генерирует хроматические цвета
 */
const generateChromaticColors = (): ChromaticColors => {
  const chromatic = {} as ChromaticColors

  for (const [colorName, baseColor] of Object.entries(baseColors.chromaMain)) {
    const colorType = getColorType(colorName)
    chromatic[colorName as keyof ChromaticColors] = getCachedVariants(
      baseColor,
      colorType
    )
  }

  return chromatic
}

/**
 * Генерирует цвета фона
 */
const generateBackgroundColors = (): BackgroundColors => {
  const bgConfig = getShadeConfig('neutral')

  return {
    base: getCachedVariants(baseColors.background.base, 'neutral', bgConfig),
    elevated: getCachedVariants(
      baseColors.background.elevated,
      'neutral',
      bgConfig
    ),
    inset: getCachedVariants(baseColors.background.inset, 'neutral', bgConfig),
    overlay: getCachedVariants(
      baseColors.background.overlay,
      'neutral',
      bgConfig
    ),
  }
}

/**
 * Генерирует цвета текста
 */
const generateForegroundColors = (): ForegroundColors => {
  const fgConfig = getShadeConfig('neutral')

  return {
    primary: getCachedVariants(
      baseColors.foreground.primary,
      'neutral',
      fgConfig
    ),
    secondary: getCachedVariants(
      baseColors.foreground.secondary,
      'neutral',
      fgConfig
    ),
    muted: getCachedVariants(baseColors.foreground.muted, 'neutral', fgConfig),
    disabled: getCachedVariants(
      baseColors.foreground.disabled,
      'neutral',
      fgConfig
    ),
  }
}

/**
 * Генерирует семантические цвета
 */
const generateSemanticColors = (chromatic: ChromaticColors): SemanticColors => {
  return {
    success: chromatic.emerald,
    warning: chromatic.amber,
    error: chromatic.red,
    info: chromatic.blue,
    accent: chromatic.purple,
  }
}

/**
 * Генерирует UI цвета
 */
const generateUIColors = (
  background: BackgroundColors,
  chromatic: ChromaticColors
): UIColors => {
  const baseBg = background.base[500]
  const accentColor = chromatic.indigo[500]

  return {
    white: baseColors.ui.white,
    black: baseColors.ui.black,
    border: {
      50: alpha(
        mix(baseBg, accentColor, MIX_RATIO.MOSTLY_FIRST),
        OPACITY.VERY_SUBTLE
      ),
      100: alpha(
        mix(baseBg, accentColor, MIX_RATIO.MOSTLY_FIRST),
        OPACITY.SUBTLE
      ),
      200: alpha(
        mix(baseBg, accentColor, MIX_RATIO.MOSTLY_FIRST),
        OPACITY.LIGHT
      ),
      300: alpha(
        mix(baseBg, accentColor, MIX_RATIO.MOSTLY_FIRST),
        OPACITY.MEDIUM
      ),
      400: alpha(
        mix(baseBg, accentColor, MIX_RATIO.MOSTLY_FIRST),
        OPACITY.STRONG
      ),
      500: mix(baseBg, accentColor, MIX_RATIO.MOSTLY_FIRST),
      600: lighten(mix(baseBg, accentColor, MIX_RATIO.MOSTLY_FIRST), 0.05),
      700: lighten(mix(baseBg, accentColor, MIX_RATIO.MOSTLY_FIRST), 0.1),
      800: lighten(mix(baseBg, accentColor, MIX_RATIO.MOSTLY_FIRST), 0.15),
      900: lighten(mix(baseBg, accentColor, MIX_RATIO.MOSTLY_FIRST), 0.2),
    },
    scrollbar: {
      50: alpha(lighten(baseBg, 0.02), OPACITY.VERY_SUBTLE),
      100: alpha(lighten(baseBg, 0.02), OPACITY.SUBTLE),
      200: alpha(lighten(baseBg, 0.02), OPACITY.LIGHT),
      300: alpha(lighten(baseBg, 0.02), OPACITY.MEDIUM),
      400: alpha(lighten(baseBg, 0.02), OPACITY.STRONG),
      500: alpha(lighten(baseBg, 0.02), OPACITY.VERY_STRONG),
      600: alpha(lighten(baseBg, 0.07), OPACITY.VERY_STRONG),
      700: alpha(lighten(baseBg, 0.12), OPACITY.VERY_STRONG),
      800: alpha(lighten(baseBg, 0.17), OPACITY.VERY_STRONG),
      900: alpha(lighten(baseBg, 0.22), OPACITY.VERY_STRONG),
    },
    selection: {
      50: alpha(chromatic.indigo[500], OPACITY.SUBTLE),
      100: alpha(chromatic.indigo[500], OPACITY.LIGHT),
      200: alpha(chromatic.indigo[500], OPACITY.MEDIUM),
      300: alpha(chromatic.indigo[500], OPACITY.STRONG),
      400: alpha(chromatic.indigo[500], OPACITY.VERY_STRONG),
      500: alpha(chromatic.indigo[500], OPACITY.SOLID),
      600: chromatic.indigo[600],
      700: chromatic.indigo[700],
      800: chromatic.indigo[800],
      900: chromatic.indigo[900],
    },
  }
}

/**
 * Генерирует интерактивные цвета
 */
const generateInteractiveColors = (
  chromatic: ChromaticColors
): InteractiveColors => {
  const primaryColor = chromatic.indigo[500]
  const textColor = '#ffffff'

  return {
    button: {
      background: primaryColor,
      foreground: textColor,
      hover: lighten(primaryColor, UI_STATES.hover.lighten),
      active: lighten(primaryColor, UI_STATES.active.lighten),
      focus: alpha(primaryColor, UI_STATES.focus.opacity),
      disabled: alpha(primaryColor, UI_STATES.disabled.opacity),
    },
    input: createInputColors(
      chromatic.neutral[900],
      chromatic.neutral[100],
      chromatic.indigo[500],
      chromatic.red[500]
    ),
    link: {
      default: primaryColor,
      hover: lighten(primaryColor, UI_STATES.hover.lighten),
      active: lighten(primaryColor, UI_STATES.active.lighten),
      focus: alpha(primaryColor, UI_STATES.focus.opacity),
      visited: mix(primaryColor, chromatic.purple[500], MIX_RATIO.BALANCED),
      disabled: alpha(primaryColor, UI_STATES.disabled.opacity),
    },
    card: createCardColors(chromatic.neutral[900], chromatic.neutral[700]),
  }
}

/**
 * Основная палитра темы
 */
export const palette: Palette = (() => {
  const chromatic = generateChromaticColors()
  const background = generateBackgroundColors()
  const foreground = generateForegroundColors()
  const semantic = generateSemanticColors(chromatic)
  const ui = generateUIColors(background, chromatic)
  const interactive = generateInteractiveColors(chromatic)

  return {
    background,
    foreground,
    semantic,
    chromatic,
    ui,
    interactive,
    shadow: baseColors.shadow,
  }
})()

/**
 * Безопасный доступ к цветам по пути
 */
export const getColor = (path: string): string => {
  const parts = path.split('.')
  let current: unknown = palette

  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = (current as Record<string, unknown>)[part]
    } else {
      throw new Error(`Invalid color path: ${path}`)
    }
  }

  if (typeof current !== 'string') {
    throw new Error(`Color path does not resolve to a string: ${path}`)
  }

  return current
}

/**
 * Получить цвет с автоматическим определением контрастности
 */
export const getContrastColor = (backgroundColor: string): string => {
  // Простая эвристика для определения контрастного цвета
  const rgb = Number.parseInt(backgroundColor.slice(1), 16)
  const r = (rgb >> 16) & 0xff
  const g = (rgb >> 8) & 0xff
  const b = rgb & 0xff

  // Рассчитываем яркость по формуле ITU-R BT.709
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  return luminance > 0.5 ? '#000000' : '#ffffff'
}

/**
 * Утилиты для работы с палитрой
 */
export const paletteUtils = {
  /**
   * Проверить, является ли цвет темным
   */
  isDark: (color: string): boolean => {
    const rgb = Number.parseInt(color.slice(1), 16)
    const r = (rgb >> 16) & 0xff
    const g = (rgb >> 8) & 0xff
    const b = rgb & 0xff

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
    return luminance <= 0.5
  },

  /**
   * Получить все цвета определенного типа
   */
  getColorsByType: (type: keyof Palette): Record<string, string> => {
    const section = palette[type]
    const result: Record<string, string> = {}

    if (section && typeof section === 'object') {
      for (const [key, value] of Object.entries(section)) {
        if (typeof value === 'string') {
          result[`${type}.${key}`] = value
        } else if (typeof value === 'object' && value !== null) {
          // Для объектов с вариантами (50-900)
          for (const [variantKey, variantValue] of Object.entries(value)) {
            if (typeof variantValue === 'string') {
              result[`${type}.${key}.${variantKey}`] = variantValue
            }
          }
        }
      }
    }

    return result
  },

  /**
   * Валидировать цветовой путь
   */
  validatePath: (path: string): boolean => {
    try {
      getColor(path)
      return true
    } catch {
      return false
    }
  },
}
