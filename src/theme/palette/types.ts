/**
 * Унифицированные типы для цветовой палитры темы
 */

/**
 * Стандартизированный вариант цвета с 9-уровневой шкалой
 */
export interface ColorVariant {
  '50': string // Самый светлый (почти белый)
  '100': string
  '200': string
  '300': string
  '400': string
  '500': string // Основной цвет (main)
  '600': string
  '700': string
  '800': string
  '900': string // Самый темный (почти черный)
}

/**
 * Хроматические цвета
 */
export interface ChromaticColors {
  pink: ColorVariant
  violet: ColorVariant
  fuchsia: ColorVariant
  purple: ColorVariant
  indigo: ColorVariant
  blue: ColorVariant
  sky: ColorVariant
  cyan: ColorVariant
  teal: ColorVariant
  emerald: ColorVariant
  green: ColorVariant
  lime: ColorVariant
  yellow: ColorVariant
  amber: ColorVariant
  orange: ColorVariant
  red: ColorVariant
  rose: ColorVariant
  neutral: ColorVariant
  slate: ColorVariant
  stone: ColorVariant
  zinc: ColorVariant
  gray: ColorVariant
}

/**
 * Цвета фона
 */
export interface BackgroundColors {
  base: ColorVariant
  elevated: ColorVariant
  inset: ColorVariant
  overlay: ColorVariant
}

/**
 * Цвета текста
 */
export interface ForegroundColors {
  primary: ColorVariant
  secondary: ColorVariant
  muted: ColorVariant
  disabled: ColorVariant
}

/**
 * Семантические цвета
 */
export interface SemanticColors {
  success: ColorVariant
  warning: ColorVariant
  error: ColorVariant
  info: ColorVariant
  accent: ColorVariant
}

/**
 * UI цвета
 */
export interface UIColors {
  white: string
  black: string
  border: ColorVariant
  scrollbar: ColorVariant
  selection: ColorVariant
}

/**
 * Интерактивные цвета
 */
export interface InteractiveColors {
  button: {
    background: string
    hover: string
    active: string
    focus: string
    disabled: string
    foreground: string
  }
  input: {
    background: string
    foreground: string
    placeholder: string
    border: string
    hover: {
      background: string
      border: string
    }
    focus: {
      background: string
      border: string
    }
    error: {
      background: string
      border: string
    }
    disabled: {
      background: string
      foreground: string
      border: string
    }
  }
  link: {
    default: string
    hover: string
    active: string
    focus: string
    visited: string
    disabled: string
  }
  card: {
    background: string
    hover: string
    border: string
    shadow: string
    hoverShadow: string
  }
}

/**
 * Полная палитра
 */
export interface Palette {
  background: BackgroundColors
  foreground: ForegroundColors
  semantic: SemanticColors
  chromatic: ChromaticColors
  ui: UIColors
  interactive: InteractiveColors
  shadow: {
    main: string
    dark: string
    light: string
    bright: string
  }
}

/**
 * Типы для цветовых путей
 */
export type ColorPath =
  | `background.${keyof BackgroundColors}.${keyof ColorVariant}`
  | `foreground.${keyof ForegroundColors}.${keyof ColorVariant}`
  | `semantic.${keyof SemanticColors}.${keyof ColorVariant}`
  | `chromatic.${keyof ChromaticColors}.${keyof ColorVariant}`
  | `ui.${keyof UIColors}`
  | `ui.${keyof UIColors}.${keyof ColorVariant}`
  | `interactive.${keyof InteractiveColors}`
  | `interactive.${keyof InteractiveColors}.${string}`

/**
 * Опции для интерактивных цветов
 */
export interface InteractiveOptions {
  hoverOpacity?: number
  activeOpacity?: number
  focusOpacity?: number
  disabledOpacity?: number
  hoverLighten?: number
  activeLighten?: number
}

/**
 * Опции генерации оттенков
 */
export interface ShadeOptions {
  lightness: number
  saturate?: number
  hue?: number
}

/**
 * Конфигурация генерации палитры
 */
export interface GenerationConfig {
  backgrounds: {
    base: ShadeOptions
    elevated: ShadeOptions
    inset: ShadeOptions
    overlay: ShadeOptions
  }
  foregrounds: {
    primary: ShadeOptions
    secondary: ShadeOptions
    muted: ShadeOptions
    disabled: ShadeOptions
  }
  chromatic: {
    default: ShadeOptions
  }
  ui: {
    border: ShadeOptions
    scrollbar: ShadeOptions
    selection: ShadeOptions
  }
}

/**
 * Базовые цвета
 */
export interface BaseColors {
  chromaMain: Record<keyof ChromaticColors, string>
  background: {
    base: string
    elevated: string
    inset: string
    overlay: string
  }
  foreground: {
    primary: string
    secondary: string
    muted: string
    disabled: string
  }
  shadow: {
    main: string
    dark: string
    light: string
    bright: string
  }
  ui: {
    white: string
    black: string
  }
}
