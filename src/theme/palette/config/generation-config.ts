import { ADJUST } from '../core/constants.js'
import type { GenerationConfig } from '../types.js'

/**
 * Декларативная конфигурация генерации палитры
 */
export const generationConfig: GenerationConfig = {
  backgrounds: {
    base: { lightness: 0.02, saturate: 0.1 },
    elevated: { lightness: 0.04, saturate: 0.15 },
    inset: { lightness: -0.02, saturate: 0.05 },
    overlay: { lightness: -0.04, saturate: 0.08 },
  },
  foregrounds: {
    primary: { lightness: 0.1, saturate: 0.2 },
    secondary: { lightness: 0.05, saturate: 0.15 },
    muted: { lightness: 0, saturate: 0.1 },
    disabled: { lightness: -0.1, saturate: -0.2 },
  },
  chromatic: {
    default: { lightness: 0, saturate: 0 },
  },
  ui: {
    border: { lightness: 0.05, saturate: 0.1 },
    scrollbar: { lightness: 0.02, saturate: 0.05 },
    selection: { lightness: 0.1, saturate: 0.15 },
  },
} as const

/**
 * Предустановленные конфигурации для разных типов цветов
 */
export const SHADE_CONFIGS = {
  // Для светлых цветов (желтый, оранжевый, зеленый)
  LIGHT: {
    50: { lighten: 0.4, saturate: 0.1 },
    100: { lighten: 0.3, saturate: 0.05 },
    200: { lighten: 0.2, saturate: 0 },
    300: { lighten: 0.15, saturate: -0.05 },
    400: { lighten: 0.1, saturate: -0.1 },
    500: { lighten: 0, saturate: 0 }, // base
    600: { darken: 0.05, saturate: 0.05 },
    700: { darken: 0.1, saturate: 0.1 },
    800: { darken: 0.15, saturate: 0.15 },
    900: { darken: 0.2, saturate: 0.2 },
  },
  // Для темных цветов (синий, фиолетовый, красный)
  DARK: {
    50: { lighten: 0.6, saturate: 0.2 },
    100: { lighten: 0.5, saturate: 0.15 },
    200: { lighten: 0.4, saturate: 0.1 },
    300: { lighten: 0.3, saturate: 0.05 },
    400: { lighten: 0.2, saturate: 0 },
    500: { lighten: 0, saturate: 0 }, // base
    600: { darken: 0.1, saturate: 0.1 },
    700: { darken: 0.2, saturate: 0.15 },
    800: { darken: 0.3, saturate: 0.2 },
    900: { darken: 0.4, saturate: 0.25 },
  },
  // Для нейтральных цветов
  NEUTRAL: {
    50: { lighten: 0.5, desaturate: 0.3 },
    100: { lighten: 0.4, desaturate: 0.25 },
    200: { lighten: 0.3, desaturate: 0.2 },
    300: { lighten: 0.2, desaturate: 0.15 },
    400: { lighten: 0.1, desaturate: 0.1 },
    500: { lighten: 0, desaturate: 0 }, // base
    600: { darken: 0.05, desaturate: 0.05 },
    700: { darken: 0.1, desaturate: 0.1 },
    800: { darken: 0.15, desaturate: 0.15 },
    900: { darken: 0.2, desaturate: 0.2 },
  },
} as const

/**
 * Классификация хроматических цветов по типу
 */
export const CHROMATIC_CLASSIFICATION = {
  LIGHT: ['yellow', 'amber', 'orange', 'lime', 'emerald', 'green'],
  DARK: [
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'red',
    'rose',
  ],
  NEUTRAL: ['neutral', 'slate', 'stone', 'zinc', 'gray', 'sky', 'cyan', 'teal'],
} as const

/**
 * Получить конфигурацию оттенков для цвета
 */
export const getShadeConfig = (colorName: string) => {
  if (
    CHROMATIC_CLASSIFICATION.LIGHT.includes(
      colorName as 'yellow' | 'amber' | 'orange' | 'lime' | 'emerald' | 'green'
    )
  ) {
    return SHADE_CONFIGS.LIGHT
  }
  if (
    CHROMATIC_CLASSIFICATION.DARK.includes(
      colorName as
        | 'blue'
        | 'indigo'
        | 'violet'
        | 'purple'
        | 'fuchsia'
        | 'pink'
        | 'red'
        | 'rose'
    )
  ) {
    return SHADE_CONFIGS.DARK
  }
  return SHADE_CONFIGS.NEUTRAL
}

/**
 * Получить тип цвета
 */
export const getColorType = (
  colorName: string
): 'light' | 'dark' | 'neutral' => {
  if (
    CHROMATIC_CLASSIFICATION.LIGHT.includes(
      colorName as 'yellow' | 'amber' | 'orange' | 'lime' | 'emerald' | 'green'
    )
  ) {
    return 'light'
  }
  if (
    CHROMATIC_CLASSIFICATION.DARK.includes(
      colorName as
        | 'blue'
        | 'indigo'
        | 'violet'
        | 'purple'
        | 'fuchsia'
        | 'pink'
        | 'red'
        | 'rose'
    )
  ) {
    return 'dark'
  }
  return 'neutral'
}

/**
 * Конфигурация для генерации семантических цветов
 */
export const semanticConfig = {
  success: { base: 'emerald', lighten: 0.1, saturate: 0.1 },
  warning: { base: 'amber', lighten: 0.1, saturate: 0.1 },
  error: { base: 'red', lighten: 0.1, saturate: 0.1 },
  info: { base: 'blue', lighten: 0.1, saturate: 0.1 },
  accent: { base: 'purple', lighten: 0.1, saturate: 0.1 },
} as const

/**
 * Конфигурация для генерации UI цветов
 */
export const uiConfig = {
  border: {
    mixRatio: 0.2, // 20% акцентного цвета
    lighten: ADJUST.TINY,
    opacity: 0.3,
  },
  scrollbar: {
    lighten: ADJUST.TINY,
    opacity: 0.4,
  },
  selection: {
    mixRatio: 0.25, // 25% акцентного цвета
    opacity: 0.3,
  },
  button: {
    hover: { lighten: ADJUST.LIGHT, opacity: 0.1 },
    active: { lighten: ADJUST.MEDIUM, opacity: 0.2 },
    focus: { opacity: 0.3 },
    disabled: { opacity: 0.5 },
  },
  input: {
    border: { mixRatio: 0.15, lighten: ADJUST.TINY },
    focus: { mixRatio: 0.25, lighten: ADJUST.SLIGHT },
    error: { mixRatio: 0.2, opacity: 0.3 },
    placeholder: { opacity: 0.5 },
  },
  link: {
    hover: { lighten: ADJUST.LIGHT },
    active: { darken: ADJUST.SLIGHT },
    visited: { mixRatio: 0.5 },
  },
} as const

/**
 * Конфигурация для генерации теней
 */
export const shadowConfig = {
  xs: { blur: 4, spread: 0, opacity: 0.1 },
  sm: { blur: 8, spread: 0, opacity: 0.15 },
  md: { blur: 16, spread: 0, opacity: 0.2 },
  lg: { blur: 24, spread: 0, opacity: 0.25 },
  xl: { blur: 32, spread: 0, opacity: 0.3 },
} as const

/**
 * Конфигурация для адаптивных режимов
 */
export const adaptiveConfig = {
  light: {
    background: { lighten: 0.8, desaturate: 0.2 },
    foreground: { darken: 0.8, saturate: 0.1 },
    border: { opacity: 0.3 },
    shadow: { opacity: 0.1 },
  },
  dark: {
    background: { darken: 0.2, saturate: 0.1 },
    foreground: { lighten: 0.2, saturate: 0.1 },
    border: { opacity: 0.2 },
    shadow: { opacity: 0.3 },
  },
} as const

/**
 * Получить конфигурацию для режима
 */
export const getAdaptiveConfig = (mode: 'light' | 'dark') => {
  return adaptiveConfig[mode]
}

/**
 * Валидация конфигурации
 */
export const validateConfig = (config: Partial<GenerationConfig>): boolean => {
  // Базовая проверка структуры
  if (!(config.backgrounds && config.foregrounds && config.chromatic)) {
    return false
  }

  // Проверка значений
  const checkValues = (obj: Record<string, unknown>) => {
    for (const value of Object.values(obj)) {
      if (typeof value !== 'object' || value === null) {
        return false
      }
      const shadeValue = value as { lightness?: unknown }
      if (typeof shadeValue.lightness !== 'number') {
        return false
      }
    }
    return true
  }

  return (
    checkValues(config.backgrounds) &&
    checkValues(config.foregrounds) &&
    checkValues(config.ui || {})
  )
}

/**
 * Слияние конфигураций
 */
export const mergeConfigs = (
  base: GenerationConfig,
  override: Partial<GenerationConfig>
): GenerationConfig => {
  return {
    backgrounds: { ...base.backgrounds, ...override.backgrounds },
    foregrounds: { ...base.foregrounds, ...override.foregrounds },
    chromatic: { ...base.chromatic, ...override.chromatic },
    ui: { ...base.ui, ...override.ui },
  }
}

/**
 * Типы для конфигураций
 */
export type ShadeConfigType = keyof typeof SHADE_CONFIGS
export type ChromaticType = 'light' | 'dark' | 'neutral'
export type AdaptiveMode = 'light' | 'dark'
