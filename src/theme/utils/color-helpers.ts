import { alpha, darken, lighten, mix } from './color.js'

/**
 * Константы для прозрачности
 */
export const OPACITY = {
  VERY_SUBTLE: 0.1,
  SUBTLE: 0.15,
  LIGHT: 0.2,
  MEDIUM: 0.25,
  STRONG: 0.3,
  VERY_STRONG: 0.5,
  MAXIMUM: 0.67,
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

// Функции для генерации вариантов цвета
export const generateShades = (baseColor: string) => ({
  lightest: lighten(baseColor, ADJUST.VERY_STRONG),
  lighter: lighten(baseColor, ADJUST.STRONG),
  light: lighten(baseColor, ADJUST.MEDIUM),
  base: baseColor,
  dark: darken(baseColor, ADJUST.MEDIUM),
  darker: darken(baseColor, ADJUST.STRONG),
  darkest: darken(baseColor, ADJUST.VERY_STRONG),
})

// Функции для контрастности
export const ensureContrast = (
  foregroundColor: string,
  _backgroundColor: string,
  _minRatio: number = 4.5
) => {
  // В реальной реализации здесь будет проверка контрастности и корректировка цвета при необходимости
  // Пока что возвращаем цвет как есть
  return foregroundColor
}

export const getContrastRatio = (_color1: string, _color2: string): number => {
  // В реальной реализации здесь будет вычисление контрастности по формуле WCAG
  // Пока что возвращаем заглушку
  return 4.5
}

// Функции для адаптации цветов под разные режимы
export const adaptForColorblind = (
  color: string,
  _type: 'protanopia' | 'deuteranopia' | 'tritanopia' = 'deuteranopia'
): string => {
  // В реальной реализации здесь будет адаптация цвета для разных типов дальтонизма
  // Пока что возвращаем цвет как есть
  return color
}

export const highContrastVariant = (baseColor: string): string => {
  // В реальной реализации здесь будет генерация высококонтрастного варианта цвета
  // Пока что возвращаем более насыщенный вариант
  return lighten(darken(baseColor, ADJUST.MEDIUM), ADJUST.VERY_STRONG)
}
