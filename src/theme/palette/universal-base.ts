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
    magenta: ColorVariant
    rose: ColorVariant
    amber: ColorVariant
    emerald: ColorVariant
    sky: ColorVariant
    violet: ColorVariant
  }
  ui: UIColors
  shadow: ColorVariant
}

import { darken, lighten, mix } from '../utils/color.js'
/**
 * Расширенная базовая палитра с улучшенной структурой
 */
import { ADJUST, MIX_RATIO } from '../utils/color-helpers.ts'

// Centralized deltas for variant generation
const VARIANT_DELTA = {
  background: { d: ADJUST.MEDIUM, l: ADJUST.LIGHT, b: ADJUST.STRONG },
  foregroundStrong: { d: ADJUST.SLIGHT, l: ADJUST.SLIGHT, b: ADJUST.STRONG },
  foregroundSoft: { d: ADJUST.SLIGHT, l: ADJUST.TINY, b: ADJUST.LIGHT },
  chromatic: { d: ADJUST.MEDIUM, l: ADJUST.LIGHT, b: ADJUST.STRONG },
  border: { d: ADJUST.TINY, l: ADJUST.SLIGHT, b: ADJUST.LIGHT },
  scrollbar: { d: ADJUST.TINY, l: ADJUST.SLIGHT, b: ADJUST.LIGHT },
} as const

// Helper to build ColorVariant from a main color using deltas
const fromMain = (
  main: string,
  opts?: { d?: number; l?: number; b?: number }
) => {
  const d = opts?.d ?? ADJUST.MEDIUM
  const l = opts?.l ?? ADJUST.LIGHT
  const b = opts?.b ?? ADJUST.STRONG
  return {
    dark: darken(main, d),
    main,
    light: lighten(main, l),
    bright: lighten(main, b),
  }
}

// Base chromatic main tones
const chromaMain = {
  blue: '#66a9ff',
  sky: '#66a9ff', // alias of blue
  cyan: '#4dd8f0',
  teal: '#4de0d8',
  green: '#79d68c',
  lime: '#99cc40',
  emerald: '#10b981',
  orange: '#ce7a2b',
  amber: '#e6a32a',
  yellow: '#e6d466',
  red: '#f31f77',
  rose: '#d48ae0', // alias of pink
  pink: '#d48ae0',
  magenta: '#d48ae0', // alias of pink
  purple: '#9976db',
  violet: '#9976db', // alias of purple
  indigo: '#7a7aff',
  neutral: '#939bc4',
} as const

// Build chromatic variants from main tones
const chromatic: UniversalPalette['chromatic'] = Object.fromEntries(
  Object.entries(chromaMain).map(([k, main]) => [
    k,
    fromMain(main, VARIANT_DELTA.chromatic),
  ])
) as UniversalPalette['chromatic']

export const universalBasePalette: UniversalPalette = {
  background: {
    base: fromMain('#18162c', VARIANT_DELTA.background),
    elevated: fromMain('#1e1a37', VARIANT_DELTA.background),
    inset: fromMain('#151225', VARIANT_DELTA.background),
    overlay: fromMain('#120f20', VARIANT_DELTA.background),
  },
  foreground: {
    primary: fromMain('#a8bee4', VARIANT_DELTA.foregroundStrong),
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
    white: '#ffffff',
    black: '#000000',
    badge: '#007acc',
    border: fromMain(
      mix('#18162c', '#a8bee4', MIX_RATIO.MOSTLY_FIRST),
      VARIANT_DELTA.border
    ),
    scrollbar: fromMain(
      lighten('#18162c', ADJUST.SLIGHT),
      VARIANT_DELTA.scrollbar
    ),
    selection: {
      dark: mix(chromatic.blue.dark, '#18162c', 0.25),
      main: mix(chromatic.blue.main, '#18162c', 0.25),
      light: mix(chromatic.blue.light, '#18162c', 0.25),
      bright: mix(chromatic.blue.bright, '#18162c', 0.25),
    },
  },
  shadow: {
    main: '#00000033',
    dark: '#0000004d',
    light: '#0000001a',
    bright: '#00000066',
  },
}
