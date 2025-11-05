import { palette } from '../../palette/index.js'
import type { SemanticTokenStyle } from '../../types/index.js'
import { darken, lighten, mix } from '../../utils/color.js'
import { createSemanticToken } from '../../utils/semantic-tokens.js'

export function generateVariableTokens(): Record<string, SemanticTokenStyle> {
  const { cyan, purple, pink, magenta, teal, blue } = palette

  return {
    // Base variables
    variable: createSemanticToken({
      foreground: cyan.light,
    }),

    'variable.readonly': createSemanticToken({
      foreground: mix(cyan.light, purple.light, 0.2),
      fontStyle: 'italic',
    }),

    'variable.readonly.default': createSemanticToken({
      foreground: lighten(cyan.light, 0.08),
      fontStyle: 'italic',
    }),

    // Function parameters
    parameter: createSemanticToken({
      foreground: mix(pink.main, magenta.main, 0.3),
    }),

    'parameter.readonly': createSemanticToken({
      foreground: darken(pink.main, 0.1),
      fontStyle: 'italic',
    }),

    'parameter.type': createSemanticToken({
      foreground: mix(cyan.light, blue.main, 0.4),
    }),

    // Properties
    property: createSemanticToken({
      foreground: teal.main,
    }),

    'property.readonly': createSemanticToken({
      foreground: mix(teal.main, cyan.main, 0.3),
      fontStyle: 'italic',
    }),

    'property.static': createSemanticToken({
      foreground: mix(blue.light, cyan.light, 0.4),
      fontStyle: 'bold',
    }),

    'property.declaration': createSemanticToken({
      foreground: lighten(teal.main, 0.1),
      fontStyle: 'bold',
    }),

    // Standard library
    'property.defaultLibrary': createSemanticToken({
      foreground: mix(cyan.main, teal.main, 0.4),
    }),

    'variable.defaultLibrary': createSemanticToken({
      foreground: mix(cyan.main, teal.main, 0.4),
    }),

    '*.defaultLibrary': createSemanticToken({
      foreground: mix(cyan.main, teal.main, 0.4),
    }),
  }
}
