/**
 * Базовые цвета темы - оптимизированные для лучшей читаемости и контрастности
 */

/**
 * Основные хроматические цвета
 */
export const chromaMain = {
  pink: '#e07af5',
  violet: '#c678dd',
  fuchsia: '#d68ffc',
  purple: '#ab82f7',
  indigo: '#786ce0',
  blue: '#4aaaf8',
  sky: '#4fcdff',
  cyan: '#49c7d8',
  teal: '#57dac9',
  emerald: '#45dd91',
  green: '#98c379',
  lime: '#80d151',
  yellow: '#d6c3ac',
  amber: '#ffc66d',
  orange: '#ff9486',
  red: '#ff6b6b',
  rose: '#ff6ba4',
  neutral: '#a8aece',
  slate: '#7c87a4',
  stone: '#9aa5ce',
  zinc: '#a9b1d6',
  gray: '#c0caf5',
} as const

/**
 * Цвета фона
 */
export const background = {
  base: '#18162b',
  elevated: '#161229',
  inset: '#101227',
  overlay: '#100e24',
} as const

/**
 * Цвета текста
 */
export const foreground = {
  primary: '#c0caf5',
  secondary: '#a9b1d6',
  muted: '#9aa5ce',
  disabled: '#565f89',
} as const

/**
 * Цвета теней
 */
export const shadow = {
  main: '#00000033',
  dark: '#0000004d',
  light: '#0000001a',
  bright: '#00000066',
} as const

/**
 * UI цвета
 */
export const ui = {
  white: '#ffffff',
  black: '#000000',
  badge: chromaMain.indigo,
  gray: {
    700: '#777777',
    800: '#888888',
    900: '#999999',
    a: '#aaaaaa',
    c: '#cccccc',
  },
} as const

/**
 * Полный набор базовых цветов
 */
export const baseColors = {
  chromaMain,
  background,
  foreground,
  shadow,
  ui,
} as const

/**
 * Алиасы для обратной совместимости
 */
export const legacyColors = {
  // Старые имена → новые имена
  backgroundPrimary: background.base,
  backgroundSecondary: background.elevated,
  backgroundTertiary: background.inset,
  textPrimary: foreground.primary,
  textSecondary: foreground.secondary,
  textMuted: foreground.muted,
  textDisabled: foreground.disabled,
  accentPrimary: chromaMain.indigo,
  accentSecondary: chromaMain.purple,
  accentError: chromaMain.red,
  accentWarning: chromaMain.amber,
  accentSuccess: chromaMain.emerald,
  accentInfo: chromaMain.blue,
} as const

/**
 * Получить базовый цвет по имени
 */
export const getBaseColor = (name: keyof typeof chromaMain): string => {
  return chromaMain[name]
}

/**
 * Получить цвет фона по типу
 */
export const getBackgroundColor = (type: keyof typeof background): string => {
  return background[type]
}

/**
 * Получить цвет текста по типу
 */
export const getForegroundColor = (type: keyof typeof foreground): string => {
  return foreground[type]
}

/**
 * Проверить, является ли цвет хроматическим
 */
export const isChromaticColor = (
  color: string
): color is keyof typeof chromaMain => {
  return color in chromaMain
}

/**
 * Получить все хроматические цвета
 */
export const getAllChromaticColors = (): typeof chromaMain => {
  return { ...chromaMain }
}

/**
 * Получить все цвета фона
 */
export const getAllBackgroundColors = (): typeof background => {
  return { ...background }
}

/**
 * Получить все цвета текста
 */
export const getAllForegroundColors = (): typeof foreground => {
  return { ...foreground }
}

/**
 * Получить все UI цвета
 */
export const getAllUIColors = (): typeof ui => {
  return { ...ui }
}

/**
 * Получить все цвета теней
 */
export const getAllShadowColors = (): typeof shadow => {
  return { ...shadow }
}

/**
 * Типы для базовых цветов
 */
export type ChromaticColorName = keyof typeof chromaMain
export type BackgroundType = keyof typeof background
export type ForegroundType = keyof typeof foreground
export type UIColorName = keyof typeof ui
export type ShadowType = keyof typeof shadow
