import { palette } from '../../palette'

export function generateModernTokens() {
  return [
    // React/Vue компоненты
    {
      name: 'React/Vue Components',
      scope: [
        'entity.name.component',
        'support.class.component',
        'meta.component.tsx entity.name.class',
        'entity.name.tag.jsx',
        'meta.jsx.children.jsx entity.name.tag',
      ],
      settings: {
        foreground: palette.cyan.light,
        fontStyle: 'bold',
      },
    },

    // TypeScript/JSDoc
    {
      name: 'TypeScript Types',
      scope: [
        'keyword.type.ts',
        'storage.type.interface',
        'entity.name.type',
        'type.alias',
        'type.parameter',
        'type.argument',
      ],
      settings: {
        foreground: palette.purple.light,
      },
    },

    // GraphQL/Prisma
    {
      name: 'GraphQL Schema',
      scope: [
        'type.name.graphql',
        'field.name.graphql',
        'enum.name.graphql',
        'interface.name.graphql',
        'union.name.graphql',
      ],
      settings: {
        foreground: palette.cyan.dark,
      },
    },

    // Tailwind CSS классы
    {
      name: 'Tailwind Classes',
      scope: [
        'string.quoted.other.tailwind',
        'entity.other.attribute-name.class.tailwind',
        'meta.attribute-with-value.class.html string.quoted.single.tailwind',
      ],
      settings: {
        foreground: palette.teal.main,
      },
    },

    // Next.js/React Router
    {
      name: 'Routing Components',
      scope: [
        'entity.name.tag.custom',
        'meta.import.react entity.name.tag',
        'support.component.react',
      ],
      settings: {
        foreground: palette.blue.medium,
        fontStyle: 'italic',
      },
    },

    // Zustand/Redux State Management
    {
      name: 'State Management',
      scope: [
        'variable.other.object.state',
        'entity.name.function.state',
        'support.function.state',
      ],
      settings: {
        foreground: palette.orange,
      },
    },

    // React Hooks
    {
      name: 'React Hooks',
      scope: [
        'support.function.react-hooks',
        'entity.name.function.hook',
        'variable.other.hook',
      ],
      settings: {
        foreground: palette.purple.bright,
        fontStyle: 'bold',
      },
    },

    // TypeScript Generics
    {
      name: 'TypeScript Generics',
      scope: [
        'meta.generic.ts',
        'type.parameter.generic',
        'storage.type.generic',
      ],
      settings: {
        foreground: palette.cyan.bright,
      },
    },

    // Prisma Schema
    {
      name: 'Prisma Schema',
      scope: [
        'keyword.model.prisma',
        'entity.name.type.prisma',
        'support.type.prisma',
        'variable.other.property.prisma',
      ],
      settings: {
        foreground: palette.teal.main,
        fontStyle: 'italic',
      },
    },

    // Vitest/Jest Testing
    {
      name: 'Testing Frameworks',
      scope: [
        'support.function.test',
        'keyword.control.test',
        'entity.name.function.test',
        'variable.other.test',
      ],
      settings: {
        foreground: palette.green.main,
        fontStyle: 'bold',
      },
    },

    // CSS-in-JS (styled-components, emotion)
    {
      name: 'CSS-in-JS',
      scope: [
        'entity.name.tag.styled',
        'support.function.styled',
        'keyword.control.template.styled',
        'string.template.styled',
      ],
      settings: {
        foreground: palette.pink.light,
      },
    },

    // Astro/Svelte Components
    {
      name: 'Astro/Svelte Components',
      scope: [
        'entity.name.tag.astro',
        'entity.name.tag.svelte',
        'meta.component.astro',
        'meta.component.svelte',
      ],
      settings: {
        foreground: palette.red.main,
        fontStyle: 'bold',
      },
    },

    // tRPC/GraphQL Resolvers
    {
      name: 'API Resolvers',
      scope: [
        'entity.name.function.resolver',
        'support.function.resolver',
        'variable.function.resolver',
      ],
      settings: {
        foreground: palette.yellow.main,
      },
    },

    // Zod/Superstruct Validation
    {
      name: 'Validation Schemas',
      scope: [
        'support.function.validation',
        'entity.name.type.validation',
        'keyword.control.validation',
      ],
      settings: {
        foreground: palette.cyan.dark,
        fontStyle: 'italic',
      },
    },

    // TanStack Query (React Query)
    {
      name: 'Data Fetching',
      scope: [
        'support.function.query',
        'entity.name.function.query',
        'variable.other.query',
      ],
      settings: {
        foreground: palette.blue.light,
      },
    },
  ]
}
