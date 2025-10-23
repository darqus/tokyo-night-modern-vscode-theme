import { palette } from '../../palette'
import type { SemanticTokenStyle } from '../../types'
import { createSemanticToken } from '../../utils/semantic-tokens'

export function generateModernFrameworkTokens(): Record<
  string,
  SemanticTokenStyle
> {
  return {
    // React хуки и компоненты
    'react.hook': createSemanticToken({
      foreground: palette.purple.bright,
      fontStyle: 'bold',
    }),

    'react.component': createSemanticToken({
      foreground: palette.cyan.light,
      fontStyle: 'bold',
    }),

    'react.props': createSemanticToken({
      foreground: palette.teal.main,
    }),

    // Vue композиция API
    'vue.composable': createSemanticToken({
      foreground: palette.green.main,
      fontStyle: 'bold',
    }),

    'vue.directive': createSemanticToken({
      foreground: palette.orange,
      fontStyle: 'italic',
    }),

    // TypeScript типы
    'typescript.generic': createSemanticToken({
      foreground: palette.cyan.bright,
    }),

    'typescript.utility': createSemanticToken({
      foreground: palette.purple.light,
      fontStyle: 'italic',
    }),

    // GraphQL схемы
    'graphql.type': createSemanticToken({
      foreground: palette.cyan.dark,
      fontStyle: 'bold',
    }),

    'graphql.field': createSemanticToken({
      foreground: palette.teal.main,
    }),

    // Тестирование
    'test.describe': createSemanticToken({
      foreground: palette.green.main,
      fontStyle: 'bold',
    }),

    'test.assertion': createSemanticToken({
      foreground: palette.yellow.main,
    }),

    'test.mock': createSemanticToken({
      foreground: palette.pink.light,
      fontStyle: 'italic',
    }),
  }
}
