import { palette } from '../../palette'
import type { SemanticTokenStyle } from '../../types'
import { lighten, mix } from '../../utils/color'
import { createSemanticToken } from '../../utils/semantic-tokens'

export function generateModernFrameworkTokens(): Record<
  string,
  SemanticTokenStyle
> {
  const { blue, cyan, teal, green, purple, orange, yellow, red, pink } = palette
  return {
    // React hooks and components
    'react.hook': createSemanticToken({
      foreground: mix(purple.bright, pink.light, 0.3),
      fontStyle: 'bold',
    }),

    'react.component': createSemanticToken({
      foreground: lighten(cyan.light, 0.1),
      fontStyle: 'bold',
    }),

    'react.props': createSemanticToken({
      foreground: mix(teal.main, cyan.light, 0.3),
    }),

    'react.state': createSemanticToken({
      foreground: mix(purple.light, blue.medium, 0.4),
      fontStyle: 'italic',
    }),

    // Vue Composition API
    'vue.composable': createSemanticToken({
      foreground: lighten(green.main, 0.1),
      fontStyle: 'bold',
    }),

    'vue.directive': createSemanticToken({
      foreground: mix(orange.main, yellow.main, 0.3),
      fontStyle: 'italic',
    }),

    'vue.ref': createSemanticToken({
      foreground: mix(green.main, teal.main, 0.4),
    }),

    // TypeScript types
    'typescript.generic': createSemanticToken({
      foreground: mix(cyan.bright, blue.medium, 0.3),
    }),

    'typescript.utility': createSemanticToken({
      foreground: mix(purple.light, cyan.light, 0.25),
      fontStyle: 'italic',
    }),

    'typescript.mapped': createSemanticToken({
      foreground: mix(purple.bright, pink.light, 0.2),
    }),

    // GraphQL schemas
    'graphql.type': createSemanticToken({
      foreground: mix(cyan.dark, teal.main, 0.35),
      fontStyle: 'bold',
    }),

    'graphql.field': createSemanticToken({
      foreground: lighten(teal.main, 0.08),
    }),

    'graphql.directive': createSemanticToken({
      foreground: mix(purple.light, pink.light, 0.3),
      fontStyle: 'italic',
    }),

    // Testing
    'test.describe': createSemanticToken({
      foreground: mix(green.main, cyan.light, 0.3),
      fontStyle: 'bold',
    }),

    'test.assertion': createSemanticToken({
      foreground: mix(yellow.main, orange.main, 0.25),
    }),

    'test.mock': createSemanticToken({
      foreground: mix(pink.light, purple.light, 0.35),
      fontStyle: 'italic',
    }),

    'test.fixture': createSemanticToken({
      foreground: mix(cyan.light, teal.main, 0.4),
    }),

    // Rust semantics
    'macro.rust': createSemanticToken({
      foreground: lighten(cyan.bright, 0.08),
      fontStyle: 'bold',
    }),

    'lifetime.rust': createSemanticToken({
      foreground: mix(orange.main, red.main, 0.2),
      fontStyle: 'italic',
    }),

    'trait.rust': createSemanticToken({
      foreground: mix(purple.light, blue.medium, 0.3),
    }),

    'derive.rust': createSemanticToken({
      foreground: mix(yellow.main, green.main, 0.3),
      fontStyle: 'italic',
    }),

    // Go semantics
    'interface.go': createSemanticToken({
      foreground: mix(cyan.dark, blue.primary, 0.35),
    }),

    'goroutine.go': createSemanticToken({
      foreground: mix(blue.medium, cyan.light, 0.3),
      fontStyle: 'italic',
    }),

    'channel.go': createSemanticToken({
      foreground: mix(teal.main, cyan.dark, 0.4),
    }),

    // Modern Python
    'decorator.python': createSemanticToken({
      foreground: mix(yellow.main, orange.main, 0.35),
      fontStyle: 'italic',
    }),

    'typeParameter.python': createSemanticToken({
      foreground: mix(purple.light, cyan.light, 0.3),
    }),

    'async.python': createSemanticToken({
      foreground: mix(cyan.dark, purple.light, 0.3),
      fontStyle: 'italic',
    }),

    // Solid.js
    'signal.solid': createSemanticToken({
      foreground: mix(blue.light, cyan.light, 0.4),
      fontStyle: 'bold',
    }),

    'store.solid': createSemanticToken({
      foreground: lighten(cyan.light, 0.1),
    }),

    'effect.solid': createSemanticToken({
      foreground: mix(purple.light, blue.medium, 0.35),
      fontStyle: 'italic',
    }),

    // Svelte
    'store.svelte': createSemanticToken({
      foreground: mix(orange.main, yellow.main, 0.3),
      fontStyle: 'bold',
    }),

    'action.svelte': createSemanticToken({
      foreground: mix(red.main, pink.light, 0.3),
    }),

    'transition.svelte': createSemanticToken({
      foreground: mix(purple.light, pink.light, 0.4),
      fontStyle: 'italic',
    }),

    // Astro
    'component.astro': createSemanticToken({
      foreground: mix(red.main, orange.main, 0.3),
      fontStyle: 'bold',
    }),

    'island.astro': createSemanticToken({
      foreground: mix(cyan.light, blue.medium, 0.35),
    }),

    // Prisma/Drizzle ORM
    'model.orm': createSemanticToken({
      foreground: lighten(teal.main, 0.1),
      fontStyle: 'bold',
    }),

    'relation.orm': createSemanticToken({
      foreground: mix(cyan.dark, teal.main, 0.4),
    }),

    'migration.orm': createSemanticToken({
      foreground: mix(yellow.main, green.main, 0.35),
    }),

    // tRPC/Hono
    'procedure.trpc': createSemanticToken({
      foreground: mix(blue.light, cyan.light, 0.35),
    }),

    'middleware.framework': createSemanticToken({
      foreground: mix(yellow.main, orange.main, 0.3),
    }),

    'router.framework': createSemanticToken({
      foreground: mix(purple.light, blue.medium, 0.3),
    }),

    // Zod/Yup validation
    'schema.validation': createSemanticToken({
      foreground: mix(cyan.dark, blue.primary, 0.4),
      fontStyle: 'bold',
    }),

    // TanStack Query
    'query.tanstack': createSemanticToken({
      foreground: mix(blue.light, purple.light, 0.3),
    }),

    'mutation.tanstack': createSemanticToken({
      foreground: mix(red.main, orange.main, 0.35),
    }),

    // Tailwind/UnoCSS
    'utility.css': createSemanticToken({
      foreground: mix(teal.main, cyan.light, 0.35),
    }),

    // Bun/Deno
    'runtime.modern': createSemanticToken({
      foreground: mix(cyan.dark, teal.main, 0.3),
      fontStyle: 'bold',
    }),
  }
}
