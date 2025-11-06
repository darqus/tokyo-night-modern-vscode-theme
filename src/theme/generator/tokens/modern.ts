import { palette } from '../../palette/index.js'
import type { TokenColor } from '../../types'

export function generateModernTokens(): TokenColor[] {
  const { teal, blue, green, magenta, peach, rose } = palette

  return [
    // React/Vue Components
    {
      name: 'React/Vue Components',
      scope: ['entity.name.component', 'support.class.component'],
      settings: {
        foreground: peach.light,
        fontStyle: 'bold',
      },
    },

    // TypeScript Types
    {
      name: 'TypeScript Types',
      scope: ['entity.name.type', 'type.alias', 'type.parameter'],
      settings: {
        foreground: magenta.light,
      },
    },

    // GraphQL/Prisma
    {
      name: 'GraphQL Schema',
      scope: ['type.name.graphql', 'field.name.graphql'],
      settings: {
        foreground: magenta.main,
      },
    },

    // Tailwind CSS Classes
    {
      name: 'Tailwind Classes',
      scope: ['entity.other.attribute-name.class.tailwind'],
      settings: {
        foreground: teal.main,
      },
    },

    // React Hooks
    {
      name: 'React Hooks',
      scope: ['support.function.react-hooks', 'entity.name.function.hook'],
      settings: {
        foreground: rose.main,
        fontStyle: 'bold',
      },
    },

    // Testing Frameworks
    {
      name: 'Testing Frameworks',
      scope: ['support.function.test', 'entity.name.function.test'],
      settings: {
        foreground: green.main,
        fontStyle: 'bold',
      },
    },

    // Modern Frameworks General
    {
      name: 'Modern Frameworks',
      scope: [
        'support.function.solid',
        'support.function.drizzle',
        'support.function.hono',
        'support.function.validation',
        'support.function.query',
        'entity.name.function.resolver',
        'support.function.macro.rust',
        'entity.name.function.go',
        'support.function.styled',
      ],
      settings: {
        foreground: blue.main,
      },
    },
  ]
}
