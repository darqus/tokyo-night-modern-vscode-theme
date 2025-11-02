import { palette } from '../../palette'
import type { SemanticTokenStyle } from '../../types'
import { lighten, mix } from '../../utils/color'
import { createSemanticToken } from '../../utils/semantic-tokens'

export function generateModernFrameworkTokens(): Record<
  string,
  SemanticTokenStyle
> {
  return {
    // React hooks and components
    'react.hook': createSemanticToken({
      foreground: mix(palette.purple.bright, palette.pink.light, 0.3),
      fontStyle: 'bold',
    }),

    'react.component': createSemanticToken({
      foreground: lighten(palette.cyan.light, 0.1),
      fontStyle: 'bold',
    }),

    'react.props': createSemanticToken({
      foreground: mix(palette.teal.main, palette.cyan.light, 0.3),
    }),

    'react.state': createSemanticToken({
      foreground: mix(palette.purple.light, palette.blue.medium, 0.4),
      fontStyle: 'italic',
    }),

    // Vue Composition API
    'vue.composable': createSemanticToken({
      foreground: lighten(palette.green.main, 0.1),
      fontStyle: 'bold',
    }),

    'vue.directive': createSemanticToken({
      foreground: mix(palette.orange, palette.yellow.main, 0.3),
      fontStyle: 'italic',
    }),

    'vue.ref': createSemanticToken({
      foreground: mix(palette.green.main, palette.teal.main, 0.4),
    }),

    // TypeScript types
    'typescript.generic': createSemanticToken({
      foreground: mix(palette.cyan.bright, palette.blue.medium, 0.3),
    }),

    'typescript.utility': createSemanticToken({
      foreground: mix(palette.purple.light, palette.cyan.light, 0.25),
      fontStyle: 'italic',
    }),

    'typescript.mapped': createSemanticToken({
      foreground: mix(palette.purple.bright, palette.pink.light, 0.2),
    }),

    // GraphQL schemas
    'graphql.type': createSemanticToken({
      foreground: mix(palette.cyan.dark, palette.teal.main, 0.35),
      fontStyle: 'bold',
    }),

    'graphql.field': createSemanticToken({
      foreground: lighten(palette.teal.main, 0.08),
    }),

    'graphql.directive': createSemanticToken({
      foreground: mix(palette.purple.light, palette.pink.light, 0.3),
      fontStyle: 'italic',
    }),

    // Testing
    'test.describe': createSemanticToken({
      foreground: mix(palette.green.main, palette.cyan.light, 0.3),
      fontStyle: 'bold',
    }),

    'test.assertion': createSemanticToken({
      foreground: mix(palette.yellow.main, palette.orange, 0.25),
    }),

    'test.mock': createSemanticToken({
      foreground: mix(palette.pink.light, palette.purple.light, 0.35),
      fontStyle: 'italic',
    }),

    'test.fixture': createSemanticToken({
      foreground: mix(palette.cyan.light, palette.teal.main, 0.4),
    }),

    // Rust semantics
    'macro.rust': createSemanticToken({
      foreground: lighten(palette.cyan.bright, 0.08),
      fontStyle: 'bold',
    }),

    'lifetime.rust': createSemanticToken({
      foreground: mix(palette.orange, palette.red.main, 0.2),
      fontStyle: 'italic',
    }),

    'trait.rust': createSemanticToken({
      foreground: mix(palette.purple.light, palette.blue.medium, 0.3),
    }),

    'derive.rust': createSemanticToken({
      foreground: mix(palette.yellow.main, palette.green.main, 0.3),
      fontStyle: 'italic',
    }),

    // Go semantics
    'interface.go': createSemanticToken({
      foreground: mix(palette.cyan.dark, palette.blue.primary, 0.35),
    }),

    'goroutine.go': createSemanticToken({
      foreground: mix(palette.blue.medium, palette.cyan.light, 0.3),
      fontStyle: 'italic',
    }),

    'channel.go': createSemanticToken({
      foreground: mix(palette.teal.main, palette.cyan.dark, 0.4),
    }),

    // Modern Python
    'decorator.python': createSemanticToken({
      foreground: mix(palette.yellow.main, palette.orange, 0.35),
      fontStyle: 'italic',
    }),

    'typeParameter.python': createSemanticToken({
      foreground: mix(palette.purple.light, palette.cyan.light, 0.3),
    }),

    'async.python': createSemanticToken({
      foreground: mix(palette.cyan.dark, palette.purple.light, 0.3),
      fontStyle: 'italic',
    }),

    // Solid.js
    'signal.solid': createSemanticToken({
      foreground: mix(palette.blue.light, palette.cyan.light, 0.4),
      fontStyle: 'bold',
    }),

    'store.solid': createSemanticToken({
      foreground: lighten(palette.cyan.light, 0.1),
    }),

    'effect.solid': createSemanticToken({
      foreground: mix(palette.purple.light, palette.blue.medium, 0.35),
      fontStyle: 'italic',
    }),

    // Svelte
    'store.svelte': createSemanticToken({
      foreground: mix(palette.orange, palette.yellow.main, 0.3),
      fontStyle: 'bold',
    }),

    'action.svelte': createSemanticToken({
      foreground: mix(palette.red.main, palette.pink.light, 0.3),
    }),

    'transition.svelte': createSemanticToken({
      foreground: mix(palette.purple.light, palette.pink.light, 0.4),
      fontStyle: 'italic',
    }),

    // Astro
    'component.astro': createSemanticToken({
      foreground: mix(palette.red.main, palette.orange, 0.3),
      fontStyle: 'bold',
    }),

    'island.astro': createSemanticToken({
      foreground: mix(palette.cyan.light, palette.blue.medium, 0.35),
    }),

    // Prisma/Drizzle ORM
    'model.orm': createSemanticToken({
      foreground: lighten(palette.teal.main, 0.1),
      fontStyle: 'bold',
    }),

    'relation.orm': createSemanticToken({
      foreground: mix(palette.cyan.dark, palette.teal.main, 0.4),
    }),

    'migration.orm': createSemanticToken({
      foreground: mix(palette.yellow.main, palette.green.main, 0.35),
    }),

    // tRPC/Hono
    'procedure.trpc': createSemanticToken({
      foreground: mix(palette.blue.light, palette.cyan.light, 0.35),
    }),

    'middleware.framework': createSemanticToken({
      foreground: mix(palette.yellow.main, palette.orange, 0.3),
    }),

    'router.framework': createSemanticToken({
      foreground: mix(palette.purple.light, palette.blue.medium, 0.3),
    }),

    // Zod/Yup validation
    'schema.validation': createSemanticToken({
      foreground: mix(palette.cyan.dark, palette.blue.primary, 0.4),
      fontStyle: 'bold',
    }),

    // TanStack Query
    'query.tanstack': createSemanticToken({
      foreground: mix(palette.blue.light, palette.purple.light, 0.3),
    }),

    'mutation.tanstack': createSemanticToken({
      foreground: mix(palette.red.main, palette.orange, 0.35),
    }),

    // Tailwind/UnoCSS
    'utility.css': createSemanticToken({
      foreground: mix(palette.teal.main, palette.cyan.light, 0.35),
    }),

    // Bun/Deno
    'runtime.modern': createSemanticToken({
      foreground: mix(palette.cyan.dark, palette.teal.main, 0.3),
      fontStyle: 'bold',
    }),
  }
}
