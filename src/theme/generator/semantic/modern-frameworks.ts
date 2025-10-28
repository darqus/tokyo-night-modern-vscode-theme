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

    // Rust семантика
    'macro.rust': createSemanticToken({
      foreground: palette.cyan.bright,
      fontStyle: 'bold',
    }),

    'lifetime.rust': createSemanticToken({
      foreground: palette.orange,
      fontStyle: 'italic',
    }),

    'trait.rust': createSemanticToken({
      foreground: palette.purple.light,
    }),

    // Go семантика
    'interface.go': createSemanticToken({
      foreground: palette.cyan.dark,
    }),

    'goroutine.go': createSemanticToken({
      foreground: palette.blue.medium,
      fontStyle: 'italic',
    }),

    // Python современный
    'decorator.python': createSemanticToken({
      foreground: palette.yellow.main,
      fontStyle: 'italic',
    }),

    'typeParameter.python': createSemanticToken({
      foreground: palette.purple.light,
    }),

    // Solid.js
    'signal.solid': createSemanticToken({
      foreground: palette.blue.light,
      fontStyle: 'bold',
    }),

    'store.solid': createSemanticToken({
      foreground: palette.cyan.light,
    }),

    // Svelte
    'store.svelte': createSemanticToken({
      foreground: palette.orange,
      fontStyle: 'bold',
    }),

    'action.svelte': createSemanticToken({
      foreground: palette.red.main,
    }),

    // Astro
    'component.astro': createSemanticToken({
      foreground: palette.red.main,
      fontStyle: 'bold',
    }),

    // Prisma/Drizzle ORM
    'model.orm': createSemanticToken({
      foreground: palette.teal.main,
      fontStyle: 'bold',
    }),

    'relation.orm': createSemanticToken({
      foreground: palette.cyan.dark,
    }),

    // tRPC/Hono
    'procedure.trpc': createSemanticToken({
      foreground: palette.blue.light,
    }),

    'middleware.framework': createSemanticToken({
      foreground: palette.yellow.main,
    }),
  }
}
