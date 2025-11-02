import { palette } from '../../palette'
import type { TokenColor } from '../../types'

export function generateModernTokens(): TokenColor[] {
  const { cyan, purple, teal, blue, orange, green, pink, red, yellow } = palette

  return [
    // React/Vue Components
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
        foreground: cyan.light,
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
        foreground: purple.light,
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
        foreground: cyan.dark,
      },
    },

    // Tailwind CSS Classes
    {
      name: 'Tailwind Classes',
      scope: [
        'string.quoted.other.tailwind',
        'entity.other.attribute-name.class.tailwind',
        'meta.attribute-with-value.class.html string.quoted.single.tailwind',
      ],
      settings: {
        foreground: teal.main,
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
        foreground: blue.medium,
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
        foreground: orange,
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
        foreground: purple.bright,
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
        foreground: cyan.bright,
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
        foreground: teal.main,
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
        foreground: green.main,
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
        foreground: pink.light,
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
        foreground: red.main,
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
        foreground: yellow.main,
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
        foreground: cyan.dark,
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
        foreground: blue.light,
      },
    },

    // Rust
    {
      name: 'Rust Macros',
      scope: [
        'entity.name.function.macro.rust',
        'support.function.macro.rust',
        'meta.macro.rust',
      ],
      settings: {
        foreground: cyan.bright,
        fontStyle: 'bold',
      },
    },
    {
      name: 'Rust Lifetime',
      scope: [
        'storage.modifier.lifetime.rust',
        'entity.name.type.lifetime.rust',
      ],
      settings: {
        foreground: orange,
        fontStyle: 'italic',
      },
    },

    // Go
    {
      name: 'Go Functions',
      scope: ['entity.name.function.go', 'support.function.go'],
      settings: {
        foreground: blue.medium,
      },
    },

    // Python Modern (Type Hints)
    {
      name: 'Python Type Hints',
      scope: [
        'meta.function.parameters.python support.type.python',
        'meta.function.return-type.python',
      ],
      settings: {
        foreground: purple.light,
      },
    },
    {
      name: 'Python Decorators',
      scope: [
        'entity.name.function.decorator.python',
        'meta.function.decorator.python',
      ],
      settings: {
        foreground: yellow.main,
        fontStyle: 'italic',
      },
    },

    // Bun/Deno
    {
      name: 'Bun/Deno APIs',
      scope: [
        'support.variable.bun',
        'support.variable.deno',
        'support.class.bun',
        'support.class.deno',
      ],
      settings: {
        foreground: cyan.dark,
      },
    },

    // Solid.js
    {
      name: 'Solid.js Signals',
      scope: ['support.function.solid', 'entity.name.function.signal'],
      settings: {
        foreground: blue.light,
        fontStyle: 'bold',
      },
    },

    // Qwik Framework
    {
      name: 'Qwik Components',
      scope: ['entity.name.tag.qwik', 'support.class.component.qwik'],
      settings: {
        foreground: purple.bright,
        fontStyle: 'bold',
      },
    },

    // HTMX Attributes
    {
      name: 'HTMX Attributes',
      scope: ['entity.other.attribute-name.html.htmx', 'meta.attribute.htmx'],
      settings: {
        foreground: cyan.light,
      },
    },

    // Drizzle ORM
    {
      name: 'Drizzle ORM',
      scope: ['support.function.drizzle', 'entity.name.type.drizzle'],
      settings: {
        foreground: green.main,
      },
    },

    // Hono Framework
    {
      name: 'Hono Routes',
      scope: ['support.function.hono', 'entity.name.function.route.hono'],
      settings: {
        foreground: orange,
      },
    },

    // Biome/Oxc
    {
      name: 'Biome Config',
      scope: ['support.type.property-name.biome', 'entity.name.tag.biome'],
      settings: {
        foreground: yellow.main,
      },
    },

    // WebAssembly
    {
      name: 'WebAssembly',
      scope: ['storage.type.wasm', 'keyword.control.wasm'],
      settings: {
        foreground: purple.dark,
      },
    },

    // Zig
    {
      name: 'Zig Language',
      scope: ['storage.type.zig', 'keyword.control.zig'],
      settings: {
        foreground: orange,
      },
    },
  ]
}
