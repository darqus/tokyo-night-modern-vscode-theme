import { palette } from '../../palette/index.js'
import type { SemanticTokenStyle } from '../../types/index.js'
import { darken, mix } from '../../utils/color.js'
import { createSemanticToken } from '../../utils/semantic-tokens.js'

export function generateVariableTokens(): Record<string, SemanticTokenStyle> {
  const { cyan, purple, teal } = palette

  return {
    // Base variables
    variable: createSemanticToken({
      foreground: cyan.light,
    }),

    'variable.readonly': createSemanticToken({
      foreground: mix(cyan.light, purple.light, 0.2),
      fontStyle: 'italic',
    }),

    // Function parameters
    parameter: createSemanticToken({
      foreground: mix(purple.main, cyan.main, 0.3),
    }),

    'parameter.readonly': createSemanticToken({
      foreground: darken(purple.main, 0.1),
      fontStyle: 'italic',
    }),

    // Properties
    property: createSemanticToken({
      foreground: teal.dark,
    }),

    'property.readonly': createSemanticToken({
      foreground: mix(teal.dark, cyan.dark, 0.3),
      fontStyle: 'italic',
    }),

    // Standard library
    'variable.defaultLibrary': createSemanticToken({
      foreground: mix(cyan.main, teal.main, 0.4),
    }),
  }
}
