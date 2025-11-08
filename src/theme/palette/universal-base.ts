// Определение ColorVariant в этом файле, так как base.ts был удален
export interface ColorVariant {
  dark: string
  main: string
  light: string
  bright: string
}

/**
 * Интерфейс для семантических цветов
 */
export interface SemanticColors {
  success: ColorVariant
  warning: ColorVariant
  error: ColorVariant
  info: ColorVariant
  accent: ColorVariant
}

/**
 * Интерфейс для цветов фона
 */
export interface BackgroundColors {
  base: ColorVariant
  elevated: ColorVariant
  inset: ColorVariant
  overlay: ColorVariant
}

/**
 * Интерфейс для цветов текста
 */
export interface ForegroundColors {
  primary: ColorVariant
  secondary: ColorVariant
  muted: ColorVariant
  disabled: ColorVariant
}

/**
 * Интерфейс для UI-цветов
 */
export interface UIColors {
  white: string
  black: string
  badge: string
  border: ColorVariant
  scrollbar: ColorVariant
  selection: ColorVariant
}

/**
 * Универсальная палитра с расширенной структурой
 */
export interface UniversalPalette {
  background: BackgroundColors
  foreground: ForegroundColors
  semantic: SemanticColors
  chromatic: {
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
    amber: ColorVariant
    emerald: ColorVariant
  }
  ui: UIColors
  shadow: ColorVariant
}

import { lighten, mix } from '../utils/color.js'
import { ADJUST, MIX_RATIO } from '../utils/color-helpers.js'
import { fromMain } from '../utils/palette-helpers.js'
import { baseColors } from './base-colors.js'

// Centralized deltas for variant generation
const VARIANT_DELTA = {
  background: { d: ADJUST.MEDIUM, l: ADJUST.LIGHT, b: ADJUST.STRONG },
  foregroundStrong: { d: ADJUST.SLIGHT, l: ADJUST.SLIGHT, b: ADJUST.STRONG },
  foregroundSoft: { d: ADJUST.SLIGHT, l: ADJUST.TINY, b: ADJUST.LIGHT },
  chromatic: { d: ADJUST.STRONG, l: ADJUST.LIGHT, b: ADJUST.STRONG },
  border: { d: ADJUST.TINY, l: ADJUST.SLIGHT, b: ADJUST.LIGHT },
  scrollbar: { d: ADJUST.TINY, l: ADJUST.SLIGHT, b: ADJUST.LIGHT },
} as const

// Build chromatic variants from main tones
const chromatic: UniversalPalette['chromatic'] = Object.fromEntries(
  Object.entries(baseColors.chromaMain).map(([k, main]) => [
    k,
    fromMain(main, VARIANT_DELTA.chromatic),
  ])
) as UniversalPalette['chromatic']

export const universalBasePalette: UniversalPalette = {
  background: {
    base: fromMain(baseColors.background.base.main, VARIANT_DELTA.background),
    elevated: fromMain('#1e1a37', VARIANT_DELTA.background),
    inset: fromMain('#151225', VARIANT_DELTA.background),
    overlay: fromMain('#120f20', VARIANT_DELTA.background),
  },
  foreground: {
    primary: fromMain(
      baseColors.foreground.primary.main,
      VARIANT_DELTA.foregroundStrong
    ),
    secondary: fromMain('#94a9d0', VARIANT_DELTA.foregroundStrong),
    muted: fromMain('#7f94b8', VARIANT_DELTA.foregroundStrong),
    disabled: fromMain('#697c9a', VARIANT_DELTA.foregroundSoft),
  },
  semantic: {
    // semantic references chromatic to guarantee consistency
    success: chromatic.emerald,
    warning: chromatic.amber,
    error: chromatic.red,
    info: chromatic.blue,
    accent: chromatic.purple,
  },
  chromatic,
  ui: {
    white: baseColors.ui.white,
    black: baseColors.ui.black,
    badge: baseColors.ui.badge,
    border: fromMain(
      mix(
        baseColors.background.base.main,
        baseColors.foreground.primary.main,
        MIX_RATIO.MOSTLY_FIRST
      ),
      VARIANT_DELTA.border
    ),
    scrollbar: fromMain(
      lighten(baseColors.background.base.main, ADJUST.SLIGHT),
      VARIANT_DELTA.scrollbar
    ),
    selection: {
      dark: mix(chromatic.blue.dark, baseColors.background.base.main, 0.25),
      main: mix(chromatic.blue.main, baseColors.background.base.main, 0.25),
      light: mix(chromatic.blue.light, baseColors.background.base.main, 0.25),
      bright: mix(chromatic.blue.bright, baseColors.background.base.main, 0.25),
    },
  },
  shadow: {
    main: '#00000033',
    dark: '#0000004d',
    light: '#0000001a',
    bright: '#00000066',
  },
}
