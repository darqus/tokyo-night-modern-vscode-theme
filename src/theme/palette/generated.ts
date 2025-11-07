import type { ColorVariant } from './base.js'
import { compatiblePalette } from './universal-generated.js'

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
  ui: typeof compatiblePalette.ui
  shadow: ColorVariant
}

export const palette: SimplifiedPalette = {
  bg: compatiblePalette.bg,
  fg: compatiblePalette.fg,
  blue: compatiblePalette.blue,
  cyan: compatiblePalette.cyan,
  teal: compatiblePalette.teal,
  green: compatiblePalette.green,
  purple: compatiblePalette.purple,
  orange: compatiblePalette.orange,
  yellow: compatiblePalette.yellow,
  red: compatiblePalette.red,
  pink: compatiblePalette.pink,
  neutral: compatiblePalette.neutral,
  indigo: compatiblePalette.indigo,
  lime: compatiblePalette.lime,
  magenta: compatiblePalette.magenta,
  peach: compatiblePalette.peach,
  rose: compatiblePalette.rose,
  amber: compatiblePalette.amber,
  emerald: compatiblePalette.emerald,
  ui: compatiblePalette.ui,
  shadow: compatiblePalette.shadow,
}
