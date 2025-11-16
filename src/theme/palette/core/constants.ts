/**
 * Семантические константы для палитры
 */

/**
 * Состояния UI элементов
 */
export const UI_STATES = {
  hover: { opacity: 0.1, lighten: 0.05 },
  active: { opacity: 0.25, lighten: 0.1 },
  focus: { opacity: 0.3, lighten: 0.08 },
  disabled: { opacity: 0.5 },
  highlighted: { opacity: 0.15, lighten: 0.12 },
  selected: { opacity: 0.2, lighten: 0.15 },
} as const

/**
 * Семантические цвета компонентов
 */
export const COMPONENTS = {
  primary: 'indigo',
  secondary: 'purple',
  success: 'emerald',
  warning: 'amber',
  error: 'red',
  info: 'blue',
} as const

/**
 * Уровни прозрачности
 */
export const OPACITY = {
  VERY_SUBTLE: 0.05,
  SUBTLE: 0.1,
  LIGHT: 0.15,
  MEDIUM: 0.2,
  STRONG: 0.3,
  VERY_STRONG: 0.5,
  SOLID: 1,
} as const

/**
 * Уровни изменения яркости
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
 * Коэффициенты смешивания цветов
 */
export const MIX_RATIO = {
  MOSTLY_FIRST: 0.2, // 80% первого цвета
  BALANCED: 0.5, // 50/50
  MOSTLY_SECOND: 0.8, // 80% второго цвета
  SLIGHT_SECOND: 0.3, // 70% первого, 30% второго
  SLIGHT_FIRST: 0.7, // 30% первого, 70% второго
} as const

/**
 * Коэффициенты смешивания для генерации цветовых вариантов
 */
export const VARIANT_MIX_RATIOS = {
  LIGHT: {
    50: 0.4, // mix with white
    100: 0.3,
    200: 0.2,
    300: 0.15,
    400: 0.1,
    600: 0.05, // mix with black
    700: 0.1,
    800: 0.15,
    900: 0.2,
  },
  DARK: {
    50: 0.6, // mix with white
    100: 0.5,
    200: 0.4,
    300: 0.3,
    400: 0.2,
    600: 0.1, // mix with black
    700: 0.2,
    800: 0.3,
    900: 0.4,
  },
  NEUTRAL: {
    50: 0.5, // mix with white (or baseColors.ui.white)
    100: 0.4,
    200: 0.3,
    300: 0.2,
    400: 0.1,
    600: 0.05, // mix with black
    700: 0.1,
    800: 0.15,
    900: 0.2,
  },
} as const

/**
 * Предустановленные градиенты для генерации оттенков
 */
export const SHADE_PRESETS = {
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
 * Размеры теней
 */
export const SHADOW_SIZES = {
  XS: '0 1px 2px 0',
  SM: '0 1px 3px 0',
  MD: '0 4px 6px -1px',
  LG: '0 10px 15px -3px',
  XL: '0 20px 25px -5px',
  '2XL': '0 25px 50px -12px',
} as const

/**
 * Типы цветов контента
 */
export const CONTENT_TYPES = {
  HEADING: 'heading',
  BODY: 'body',
  CAPTION: 'caption',
  CODE: 'code',
  LINK: 'link',
  EMPHASIS: 'emphasis',
} as const

/**
 * Приоритеты контрастности
 */
export const CONTRAST_LEVELS = {
  AA_NORMAL: 4.5, // WCAG AA для обычного текста
  AA_LARGE: 3.0, // WCAG AA для крупного текста
  AAA_NORMAL: 7.0, // WCAG AAA для обычного текста
  AAA_LARGE: 4.5, // WCAG AAA для крупного текста
} as const

/**
 * Типы анимации для интерактивных элементов
 */
export const ANIMATION_TYPES = {
  NONE: 'none',
  FADE: 'fade',
  SLIDE: 'slide',
  SCALE: 'scale',
  GLOW: 'glow',
} as const

/**
 * Скорости анимации
 */
export const ANIMATION_DURATIONS = {
  FAST: '150ms',
  NORMAL: '250ms',
  SLOW: '350ms',
  VERY_SLOW: '500ms',
} as const

/**
 * Функции easing для анимаций
 */
export const ANIMATION_EASING = {
  EASE_IN: 'cubic-bezier(0.4, 0, 1, 1)',
  EASE_OUT: 'cubic-bezier(0, 0, 0.2, 1)',
  EASE_IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const

/**
 * Breakpoints для адаптивного дизайна
 */
export const BREAKPOINTS = {
  XS: '320px',
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const

/**
 * Пространственные константы
 */
export const SPACING = {
  XS: '0.25rem',
  SM: '0.5rem',
  MD: '1rem',
  LG: '1.5rem',
  XL: '2rem',
  '2XL': '3rem',
  '3XL': '4rem',
} as const

/**
 * Радиусы скругления
 */
export const BORDER_RADIUS = {
  NONE: '0',
  SM: '0.125rem',
  MD: '0.25rem',
  LG: '0.5rem',
  XL: '0.75rem',
  FULL: '9999px',
} as const
