import { TokenColor } from '../../token-utils'
import { palette } from '../../palette/index'

export const typescriptTokens: TokenColor[] = [
  {
    name: 'TS JSDoc tag',
    scope: 'punctuation.definition.block.tag.jsdoc',
    settings: {
      foreground: palette.keyword,
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
    },
  },
]
