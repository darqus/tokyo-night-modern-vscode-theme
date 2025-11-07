import type { ColorVariant, UniversalPalette } from './universal-base.js'
import { universalBasePalette } from './universal-base.js'

/**
 * Универсальная сгенерированная палитра с улучшенной структурой
 */
export const universalPalette: UniversalPalette = {
  ...universalBasePalette,
  // Можно добавить дополнительную логику генерации при необходимости
}

/**
 * Совместимая палитра для обеспечения обратной совместимости
 */
export interface CompatiblePalette {
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
  ui: typeof universalBasePalette.ui
  shadow: ColorVariant
}

/**
 * Палитра, обеспечивающая совместимость с существующим кодом
 */
export const compatiblePalette: CompatiblePalette = {
  bg: universalBasePalette.background.base,
  fg: universalBasePalette.foreground.primary,
  blue: universalBasePalette.chromatic.blue,
  cyan: universalBasePalette.chromatic.cyan,
  teal: universalBasePalette.chromatic.teal,
  green: universalBasePalette.chromatic.green,
  purple: universalBasePalette.chromatic.purple,
  orange: universalBasePalette.chromatic.orange,
  yellow: universalBasePalette.chromatic.yellow,
  red: universalBasePalette.chromatic.red,
  pink: universalBasePalette.chromatic.pink,
  neutral: universalBasePalette.chromatic.neutral,
  indigo: universalBasePalette.chromatic.indigo,
  lime: universalBasePalette.chromatic.lime,
  magenta: universalBasePalette.chromatic.magenta,
  // Peach не входит в универсальную палитру, используем близкий оранжевый
  peach: universalBasePalette.chromatic.orange,
  rose: universalBasePalette.chromatic.rose,
  amber: universalBasePalette.chromatic.amber,
  emerald: universalBasePalette.chromatic.emerald,
  ui: universalBasePalette.ui,
  shadow: universalBasePalette.shadow,
}
