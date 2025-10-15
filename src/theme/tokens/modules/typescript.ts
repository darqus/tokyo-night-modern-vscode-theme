import { TokenColor } from '../../token-utils'
import { palette } from '../../palette/index'

export const typescriptTokens: TokenColor[] = [
  {
    name: 'TS JSDoc tag',
    scope: 'punctuation.definition.block.tag.jsdoc',
    settings: {
      foreground: palette.keyword,
      fontStyle: 'bold',
    },
  },
 {
    name: 'TS JSDoc type',
    scope: 'comment storage.type',
    settings: {
      foreground: palette.type,
    },
  },
  {
    name: 'TS JSDoc variable',
    scope: ['comment variable', 'comment variable.other'],
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'TS field declaration',
    scope: 'meta.field.declaration.ts variable.object.property',
    settings: {
      foreground: palette.property,
      fontStyle: 'bold',
    },
  },
  {
    name: 'TS type parameter',
    scope: [
      'meta.type.parameters',
      'variable.type.parameter',
      'meta.type.annotation',
    ],
    settings: {
      foreground: palette.tsTypeParameter,
    },
  },
  {
    name: 'TS interface',
    scope: [
      'entity.name.type.interface',
      'support.type.primitive',
    ],
    settings: {
      foreground: palette.tsInterface,
      fontStyle: 'bold',
    },
  },
  {
    name: 'TS enum',
    scope: 'variable.other.enummember',
    settings: {
      foreground: palette.tsEnum,
      fontStyle: 'bold',
    },
  },
  {
    name: 'TS namespace',
    scope: 'entity.name.type.module',
    settings: {
      foreground: palette.tsNamespace,
      fontStyle: 'bold',
    },
  },
  {
    name: 'TS type annotation',
    scope: [
      'meta.type.annotation',
      'support.type.primitive',
      'meta.return.type',
    ],
    settings: {
      foreground: palette.type,
    },
  },
  {
    name: 'TS constructor',
    scope: 'meta.type.constructor',
    settings: {
      foreground: palette.function,
      fontStyle: 'bold',
    },
  },
  {
    name: 'TS generic type',
    scope: [
      'meta.type.parameters',
      'meta.type.annotation',
      'support.type.primitive',
    ],
    settings: {
      foreground: palette.type,
    },
  },
]
