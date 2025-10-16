/**
 * UI Colors - Interface-specific colors
 * UI-специфичные цвета для конкретных элементов интерфейса
 */

import { foundationColors as primitiveColors } from './foundation'
import { semanticColors } from './semantic'

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
// UI-specific colors that are not in foundation but derived from it
const uiSecondaryBackground = primitiveColors.gray800 // '#2a2f40' - вторичный фон
const uiTertiaryBackground = primitiveColors.gray700 // '#515670' - третичный фон
const uiElevatedBackground = primitiveColors.gray700 // '#515670' - приподнятый фон
const uiTertiaryText = primitiveColors.gray600 // '#9aa5ce' - третичный текст
const uiPlaceholderText = primitiveColors.gray700 // '#494f67' - placeholder текст
const uiSubtleBorder = primitiveColors.gray700 // '#42465d' - тонкая граница
const uiErrorBorder = primitiveColors.red600 // '#db4b4b' - граница ошибки
const uiHoverState = primitiveColors.blue600 // '#45496c' - наведение
const uiActiveState = primitiveColors.blue700 // '#515c7e' - активное состояние
const uiSelectedState = primitiveColors.gray800 // '#1c202e' - выбранное состояние
const uiDisabledState = primitiveColors.gray800 // '#2a2f40' - отключенное состояние
const uiPressedState = primitiveColors.blue700 // '#394b70' - нажатое состояние

export const uiColors: UIColors = {
  // Background variations - вариации фонов
  backgrounds: {
    primary: semanticColors.background, // #10151d - основной фон
    secondary: uiSecondaryBackground, // вторичный фон (из оригинальной палитры)
    tertiary: uiTertiaryBackground, // третичный фон (из оригинальной палитры)
    elevated: uiElevatedBackground, // приподнятый фон (из оригинальной палитры)
    overlay: primitiveColors.black, // #000000 - оверлей
    transparent: primitiveColors.transparent, // #000000 - прозрачный
  },

  // Text variations - вариации текста
  text: {
    primary: semanticColors.text, // #a9b1d6 - основной текст
    secondary: semanticColors.textSecondary, // #82859e - вторичный текст
    tertiary: uiTertiaryText, // третичный текст (из оригинальной палитры)
    disabled: semanticColors.textDisabled, // #515670 - отключенный текст
    inverse: semanticColors.textWhite, // #ffffff - инверсный текст
    placeholder: uiPlaceholderText, // placeholder текст (из оригинальной палитры)
  },

  // Border variations - вариации границ
  borders: {
    default: semanticColors.border, // #4e6ab2 - основная граница
    subtle: uiSubtleBorder, // тонкая граница (из оригинальной палитры)
    focus: semanticColors.borderFocus, // #42a5f5 - граница фокуса
    error: uiErrorBorder, // граница ошибки (из оригинальной палитры)
    warning: primitiveColors.yellow500, // '#e0af68' - граница предупреждения
    success: primitiveColors.green500, // '#9ece6a' - граница успеха
  },

  // Interactive states - интерактивные состояния
  interactive: {
    hover: uiHoverState, // наведение (из оригинальной палитры)
    active: uiActiveState, // активное состояние (из оригинальной палитры)
    selected: uiSelectedState, // выбранное состояние (из оригинальной палитры)
    disabled: uiDisabledState, // отключенное состояние (из оригинальной палитры)
    pressed: uiPressedState, // нажатое состояние (из оригинальной палитры)
  },

  // Special UI elements - специальные UI элементы
  special: {
    shadow: primitiveColors.black, // #000000 - тень
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

  return current
}