import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

export const typescriptTokens: TokenColor[] = [
  {
    name: 'TS JSDoc tag',
    scope: 'punctuation.definition.block.tag.jsdoc',
    settings: {
      foreground: palette.jsdocTag,
    },
  },
  {
    name: 'TS JSDoc type',
    scope: 'comment storage.type',
    settings: {
      foreground: palette.jsdocType,
    },
  },
  {
    name: 'TS JSDoc variable',
    scope: ['comment variable', 'comment variable.other'],
    settings: {
      foreground: palette.jsdocVariable,
    },
  },
  {
    name: 'TS field declaration',
    scope: 'meta.field.declaration.ts variable.object.property',
    settings: {
      foreground: palette.variableAlt2,
    },
  },
]
