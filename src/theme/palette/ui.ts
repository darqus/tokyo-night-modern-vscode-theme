/**
 * UI Colors - Interface-specific colors
 * UI-специфичные цвета для конкретных элементов интерфейса
 */

import { semanticColors } from './semantic'
import { borderColors } from './semantic/borders'
import { interfaceColors } from './semantic/interface'
import { typographyColors } from './semantic/typography'

export interface UIColors {
  // Background variations
  backgrounds: {
    primary: string
    secondary: string
    tertiary: string
    elevated: string
    overlay: string
    transparent: string
  }

  // Text variations
  text: {
    primary: string
    secondary: string
    tertiary: string
    disabled: string
    inverse: string
    placeholder: string
  }

  // Border variations
  borders: {
    default: string
    subtle: string
    focus: string
    error: string
    warning: string
    success: string
  }

  // Interactive states
  interactive: {
    hover: string
    active: string
    selected: string
    disabled: string
    pressed: string
  }

  // Special UI elements
  special: {
    shadow: string
    glow: string
    highlight: string
    selection: string
    focusRing: string
  }
}

/**
 * UI-specific color palette
 * Специфичные цвета для UI элементов, основанные на анализе использования
 */
export const uiColors: UIColors = {
  // Background variations - вариации фонов
  backgrounds: {
    primary: semanticColors.background, // #10151d - основной фон
    secondary: semanticColors.backgroundSecondary, // вторичный фон
    tertiary: semanticColors.backgroundElevated, // третичный фон
    elevated: semanticColors.backgroundElevated, // приподнятый фон
    overlay: semanticColors.backgroundOverlay, // #00000 - оверлей
    transparent: interfaceColors.overlay.tooltip, // прозрачный
  },

  // Text variations - вариации текста
  text: {
    primary: semanticColors.text, // #a9b1d6 - основной текст
    secondary: semanticColors.textSecondary, // #82859e - вторичный текст
    tertiary: typographyColors.text.tertiary, // третичный текст
    disabled: semanticColors.textDisabled, // #515670 - отключенный текст
    inverse: semanticColors.textWhite, // #ffffff - инверсный текст
    placeholder: typographyColors.text.tertiary, // placeholder текст
  },

  // Border variations - вариации границ
  borders: {
    default: semanticColors.border, // #4e6ab2 - основная граница
    subtle: borderColors.divider.default, // тонкая граница
    focus: semanticColors.borderFocus, // #42a5f5 - граница фокуса
    error: borderColors.border.error, // граница ошибки
    warning: borderColors.border.warning, // граница предупреждения
    success: borderColors.border.success, // граница успеха
  },

  // Interactive states - интерактивные состояния
  interactive: {
    hover: semanticColors.hover, // наведение
    active: semanticColors.active, // активное состояние
    selected: interfaceColors.surface.active, // выбранное состояние
    disabled: interfaceColors.background.tertiary, // отключенное состояние
    pressed: semanticColors.active, // нажатое состояние
  },

  // Special UI elements - специальные UI элементы
  special: {
    shadow: semanticColors.shadow, // #0000 - тень
    glow: semanticColors.primary, // #7aa2f7 - свечение
    highlight: semanticColors.highlight, // #e0af68 - подсветка
    selection: semanticColors.selection, // #4e6ab2 - выделение
    focusRing: semanticColors.focus, // #42a5f5 - кольцо фокуса
  },
}

/**
 * Optimized alpha values - оптимизированные альфа-значения
 * Только те значения, которые реально используются
 */
export const optimizedAlphaValues = {
  '20': '20', // Subtle backgrounds - тонкие фоны
  '40': '40', // Hover states - состояния наведения
  '60': '60', // Active states - активные состояния
  '80': '80', // Semi-opaque - полупрозрачные
} as const

/**
 * Utility function to create alpha variants for UI colors
 */
export function createUIAlphaVariants() {
  const variants: Record<string, string> = {}

  // Create alpha variants for backgrounds
  Object.entries(uiColors.backgrounds).forEach(([key, color]) => {
    Object.entries(optimizedAlphaValues).forEach(([alpha, alphaValue]) => {
      variants[`${key}Alpha${alpha}`] = `${color}${alphaValue}`
    })
  })

  // Create alpha variants for interactive states
  Object.entries(uiColors.interactive).forEach(([key, color]) => {
    Object.entries(optimizedAlphaValues).forEach(([alpha, alphaValue]) => {
      variants[`${key}Alpha${alpha}`] = `${color}${alphaValue}`
    })
  })

  // Create alpha variants for special elements
  Object.entries(uiColors.special).forEach(([key, color]) => {
    Object.entries(optimizedAlphaValues).forEach(([alpha, alphaValue]) => {
      variants[`${key}Alpha${alpha}`] = `${color}${alphaValue}`
    })
  })

  return variants
}

/**
 * Combined UI colors with alpha variants
 */
export const uiColorsWithAlpha = {
  ...uiColors,
  ...createUIAlphaVariants(),
}

/**
 * Utility function to get UI color by path
 * @param path - dot notation path like 'backgrounds.primary' or 'interactive.hover'
 */
export function getUIColor(path: string): string {
  const keys = path.split('.')
  let current: any = uiColorsWithAlpha

  for (const key of keys) {
    current = current?.[key]
    if (current === undefined) {
      throw new Error(`UI color not found: ${path}`)
    }
  }

  if (typeof current !== 'string') {
    throw new Error(
      `UI color path ${path} does not resolve to a string value: ${typeof current}`
    )
  }

  return current
}
