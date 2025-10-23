import { palette } from '../palette'
import type { SemanticTokenStyle } from '../types'

export function generateSemanticTokenColors(): Record<
  string,
  SemanticTokenStyle
> {
  const { yellow, fg, teal, purple } = palette

  return {
    'parameter.declaration': {
      foreground: yellow.main,
    },
    parameter: {
      foreground: palette.ui.parameter,
    },
    'property.declaration': {
      foreground: teal.main,
    },
    'property.defaultLibrary': {
      foreground: palette.ui.defaultLibrary,
    },
    '*.defaultLibrary': {
      foreground: palette.ui.defaultLibrary,
    },
    'variable.defaultLibrary': {
      foreground: palette.ui.defaultLibrary,
    },
    'variable.declaration': {
      foreground: purple.light,
    },
    variable: {
      foreground: fg.brightest,
    },
  }
}
