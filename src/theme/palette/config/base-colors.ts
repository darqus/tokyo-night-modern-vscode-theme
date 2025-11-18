import { alpha } from '../../utils'

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
  amber: '#fdb57e',
  orange: '#f2865b',
  red: '#fc5555',
  rose: '#ff5998',
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
 * UI цвета
 */
export const ui = {
  white: '#ffffff',
  black: '#000000',
  badge: chromaMain.rose,
} as const

/**
 * Цвета теней
 */
export const shadow = {
  main: alpha(ui.black, 0.2),
  dark: alpha(ui.black, 0.3),
  light: alpha(ui.black, 0.1),
  bright: alpha(ui.black, 0.4),
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
