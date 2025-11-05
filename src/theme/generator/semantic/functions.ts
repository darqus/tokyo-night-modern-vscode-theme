import { palette } from '../../palette/index.js'
import type { SemanticTokenStyle } from '../../types/index.js'
import { lighten, mix } from '../../utils/color.js'
import { createSemanticToken } from '../../utils/semantic-tokens.js'

export function generateFunctionTokens(): Record<string, SemanticTokenStyle> {
  const { blue, cyan, purple, teal, yellow } = palette

  return {
    // Functions
    function: createSemanticToken({
      foreground: blue.main,
    }),

    'function.declaration': createSemanticToken({
      foreground: lighten(blue.main, 0.1),
      fontStyle: 'bold',
    }),

    'function.defaultLibrary': createSemanticToken({
      foreground: cyan.light,
    }),

    // Methods
    method: createSemanticToken({
      foreground: mix(blue.main, cyan.light, 0.3),
    }),

    'method.declaration': createSemanticToken({
      foreground: lighten(blue.main, 0.08),
      fontStyle: 'bold',
    }),

    'method.static': createSemanticToken({
      foreground: mix(blue.light, purple.light, 0.2),
      fontStyle: 'bold',
    }),

    'method.readonly': createSemanticToken({
      foreground: mix(blue.main, teal.main, 0.25),
      fontStyle: 'italic',
    }),

    // Constructors
    constructor: createSemanticToken({
      foreground: mix(cyan.light, yellow.main, 0.15),
      fontStyle: 'bold',
    }),

    // Async functions
    'function.async': createSemanticToken({
      foreground: mix(cyan.main, purple.light, 0.2),
      fontStyle: 'italic',
    }),

    'method.async': createSemanticToken({
      foreground: mix(cyan.main, teal.main, 0.3),
      fontStyle: 'italic',
    }),
  }
}
