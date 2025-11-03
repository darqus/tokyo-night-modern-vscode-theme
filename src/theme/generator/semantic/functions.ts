import { palette } from '../../palette'
import type { SemanticTokenStyle } from '../../types'
import { lighten, mix } from '../../utils/color'
import { createSemanticToken } from '../../utils/semantic-tokens'

export function generateFunctionTokens(): Record<string, SemanticTokenStyle> {
  const { blue, cyan, purple, teal, yellow } = palette

  return {
    // Functions
    function: createSemanticToken({
      foreground: blue.medium,
    }),

    'function.declaration': createSemanticToken({
      foreground: lighten(blue.medium, 0.1),
      fontStyle: 'bold',
    }),

    'function.defaultLibrary': createSemanticToken({
      foreground: cyan.light,
    }),

    // Methods
    method: createSemanticToken({
      foreground: mix(blue.medium, cyan.light, 0.3),
    }),

    'method.declaration': createSemanticToken({
      foreground: lighten(blue.medium, 0.08),
      fontStyle: 'bold',
    }),

    'method.static': createSemanticToken({
      foreground: mix(blue.light, purple.light, 0.2),
      fontStyle: 'bold',
    }),

    'method.readonly': createSemanticToken({
      foreground: mix(blue.medium, teal.main, 0.25),
      fontStyle: 'italic',
    }),

    // Constructors
    constructor: createSemanticToken({
      foreground: mix(cyan.light, yellow.main, 0.15),
      fontStyle: 'bold',
    }),

    // Async functions
    'function.async': createSemanticToken({
      foreground: mix(cyan.dark, purple.light, 0.2),
      fontStyle: 'italic',
    }),

    'method.async': createSemanticToken({
      foreground: mix(cyan.dark, teal.main, 0.3),
      fontStyle: 'italic',
    }),
  }
}
