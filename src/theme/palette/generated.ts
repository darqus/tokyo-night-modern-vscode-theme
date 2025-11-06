import type { ColorVariant } from './base.js'
import { basePalette } from './base.js'

export interface SimplifiedPalette {
  bg: ColorVariant
  fg: ColorVariant
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
  peach: ColorVariant
  rose: ColorVariant
  amber: ColorVariant
  emerald: ColorVariant
  ui: typeof basePalette.ui
  shadow: ColorVariant
}

export const palette: SimplifiedPalette = {
  bg: basePalette.background,
  fg: basePalette.foreground,
  blue: basePalette.blue,
  cyan: basePalette.cyan,
  teal: basePalette.teal,
  green: basePalette.green,
  purple: basePalette.purple,
  orange: basePalette.orange,
  yellow: basePalette.yellow,
  red: basePalette.red,
  pink: basePalette.pink,
  neutral: basePalette.neutral,
  indigo: basePalette.indigo,
  lime: basePalette.lime,
  magenta: basePalette.magenta,
  peach: basePalette.peach,
  rose: basePalette.rose,
  amber: basePalette.amber,
  emerald: basePalette.emerald,
  ui: basePalette.ui,
  shadow: basePalette.shadow,
}
