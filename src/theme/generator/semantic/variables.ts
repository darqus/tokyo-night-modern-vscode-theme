import { palette } from '../../palette'
import type { SemanticTokenStyle } from '../../types'
import { darken, lighten, mix } from '../../utils/color'
import { createSemanticToken } from '../../utils/semantic-tokens'

export function generateVariableTokens(): Record<string, SemanticTokenStyle> {
  const { cyan, purple, yellow, orange, teal, blue } = palette

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
      foreground: mix(yellow.main, orange.main, 0.3),
    }),

    'parameter.readonly': createSemanticToken({
      foreground: darken(yellow.main, 0.1),
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
      foreground: mix(teal.dark, cyan.dark, 0.3),
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
