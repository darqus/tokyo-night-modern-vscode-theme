import { palette } from '../../palette/index.js'
import type { SemanticTokenStyle } from '../../types/index.js'
import { lighten, mix } from '../../utils/color.js'
import { createSemanticToken } from '../../utils/semantic-tokens.js'

export function generateModernFrameworkTokens(): Record<
  string,
  SemanticTokenStyle
> {
  const { blue, cyan, teal, green, purple } = palette
  return {
    // React hooks and components
    'react.hook': createSemanticToken({
      foreground: mix(purple.light, cyan.light, 0.3),
      fontStyle: 'bold',
    }),

    'react.component': createSemanticToken({
      foreground: lighten(cyan.light, 0.1),
      fontStyle: 'bold',
    }),

    // TypeScript types
    'typescript.generic': createSemanticToken({
      foreground: mix(cyan.light, blue.main, 0.3),
    }),

    // GraphQL schemas
    'graphql.type': createSemanticToken({
      foreground: mix(cyan.main, teal.main, 0.35),
      fontStyle: 'bold',
    }),

    // Testing
    'test.describe': createSemanticToken({
      foreground: mix(green.main, cyan.light, 0.3),
      fontStyle: 'bold',
    }),

    // Modern frameworks general
    'framework.token': createSemanticToken({
      foreground: blue.main,
    }),
  }
}
