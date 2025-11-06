import { alpha, darken, lighten, mix } from './color.js'

/**
 * Константы для прозрачности
 */
export const OPACITY = {
  VERY_SUBTLE: 0.1,
  SUBTLE: 0.15,
  LIGHT: 0.2,
  MEDIUM: 0.3,
  STRONG: 0.5,
  VERY_STRONG: 0.7,
} as const

/**
 * Константы для изменения яркости
 */
export const ADJUST = {
  TINY: 0.02,
  SLIGHT: 0.05,
  SMALL: 0.08,
  LIGHT: 0.1,
  MEDIUM: 0.15,
  STRONG: 0.2,
  VERY_STRONG: 0.25,
} as const

/**
 * Константы для смешивания цветов
 */
export const MIX_RATIO = {
  MOSTLY_FIRST: 0.2, // 80% первого цвета
  BALANCED: 0.5, // 50/50
  MOSTLY_SECOND: 0.8, // 80% второго цвета
} as const

/**
 * Семантические функции для часто используемых операций
 */

// Подсветка
export const subtleHighlight = (color: string) => alpha(color, OPACITY.LIGHT)
export const mediumHighlight = (color: string) => alpha(color, OPACITY.MEDIUM)
export const strongHighlight = (color: string) => alpha(color, OPACITY.STRONG)

// Границы
export const borderColor = (bg: string, accent: string) =>
  mix(bg, accent, MIX_RATIO.MOSTLY_FIRST)

// Состояния элементов
export const hoverState = (base: string) => lighten(base, ADJUST.LIGHT)
export const activeState = (base: string) => lighten(base, ADJUST.MEDIUM)
export const disabledState = (base: string) => alpha(base, OPACITY.STRONG)

// Фоновые цвета
export const subtleBackground = (base: string) =>
  alpha(base, OPACITY.VERY_SUBTLE)
export const lightBackground = (base: string) => lighten(base, ADJUST.TINY)

// Смешивание цветов
export const mixLight = (color1: string, color2: string) =>
  mix(color1, color2, 0.3) // 70% первого цвета, 30% второго

// Изменение яркости
export const slightlyDarker = (base: string) => darken(base, ADJUST.TINY)

// Тени
export const softShadow = (color: string) => alpha(color, OPACITY.MEDIUM)
export const hardShadow = (color: string) => alpha(color, OPACITY.STRONG)
