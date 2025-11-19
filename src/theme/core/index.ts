/**
 * Core module exports
 */

export type { GeneratorDependencies } from './generator.js'
export { createThemeGenerator, ThemeGenerator } from './generator.js'
export type { PaletteValidationResult } from './palette-manager.js'
export {
  createPaletteManager,
  PaletteManager,
  paletteManager,
} from './palette-manager.js'
