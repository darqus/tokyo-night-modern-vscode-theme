import type { ColorVariant } from './universal-base.js'

/**
 * Старый тип палитры для обратной совместимости
 */
export interface UnifiedPalette {
  background: ColorVariant
  foreground: ColorVariant
  blue: ColorVariant
  cyan: ColorVariant
  teal: ColorVariant
  green: ColorVariant
  purple: ColorVariant
  orange: ColorVariant
  yellow: ColorVariant
  red: ColorVariant
  pink: ColorVariant
  neutral: ColorVariant
  indigo: ColorVariant
  lime: ColorVariant
  magenta: ColorVariant
  rose: ColorVariant
  amber: ColorVariant
  emerald: ColorVariant
  peach: ColorVariant
  ui: {
    white: string
    black: string
    badge: string
  }
  shadow: ColorVariant
}
