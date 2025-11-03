import type { ColorVariant } from './base'
import { basePalette } from './base'

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
  ui: {
    white: string
    black: string
    badge: string
  }
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
  ui: {
    white: '#ffffff',
    black: '#000000',
    badge: '#007acc',
  },
}
