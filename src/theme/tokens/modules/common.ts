// Общие токены синтаксиса (не зависящие от конкретного языка)
import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

export const commonTokens: TokenColor[] = [
  {
    name: 'Comment',
    scope: ['comment', 'punctuation.definition.comment'],
    settings: {
      foreground: palette.foregroundInactive,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Comment Documentation',
    scope: ['comment.block.documentation', 'comment.line.documentation'],
    settings: {
      foreground: palette.commentDoc,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Comment TODO/FIXME',
    scope: ['comment keyword.codetag'],
    settings: {
      foreground: palette.yellow,
      fontStyle: 'bold',
    },
  },
  {
    name: 'String',
    scope: ['string', 'punctuation.definition.string'],
    settings: {
      foreground: palette.green,
    },
  },
  {
    name: 'Number',
    scope: ['constant.numeric'],
    settings: {
      foreground: palette.orange,
    },
  },
  {
    name: 'Boolean',
    scope: ['constant.language.boolean'],
    settings: {
      foreground: palette.red,
    },
  },
  {
    name: 'Keyword',
    scope: ['keyword'],
    settings: {
      foreground: palette.purple,
    },
  },
  {
    name: 'Operator',
    scope: ['keyword.operator'],
    settings: {
      foreground: palette.cyan,
    },
  },
  {
    name: 'Storage',
    scope: ['storage'],
    settings: {
      foreground: palette.purple,
    },
  },
  {
    name: 'Storage Type',
    scope: ['storage.type'],
    settings: {
      foreground: palette.keywordAccess,
    },
  },
  {
    name: 'Entity Name',
    scope: ['entity.name'],
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'Entity Name Type',
    scope: ['entity.name.type'],
    settings: {
      foreground: palette.orange,
    },
  },
  {
    name: 'Variable',
    scope: ['variable', 'support.variable'],
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'Variable Parameter',
    scope: ['variable.parameter'],
    settings: {
      foreground: palette.funcParam,
    },
  },
  {
    name: 'Support',
    scope: ['support'],
    settings: {
      foreground: palette.keywordAsync,
    },
  },
  {
    name: 'Support Function',
    scope: ['support.function'],
    settings: {
      foreground: palette.keywordAsync,
    },
  },
  {
    name: 'Invalid',
    scope: ['invalid'],
    settings: {
      foreground: palette.red,
    },
  },
  {
    name: 'Invalid Deprecated',
    scope: ['invalid.deprecated'],
    settings: {
      foreground: palette.deprecated,
      fontStyle: 'strikethrough',
    },
  },
  {
    name: 'Punctuation',
    scope: ['punctuation', 'meta.brace'],
    settings: {
      foreground: palette.delimiter,
    },
  },
  {
    name: 'Punctuation Separator',
    scope: ['punctuation.separator'],
    settings: {
      foreground: palette.delimiter,
    },
  },
  {
    name: 'Punctuation Accessor',
    scope: ['punctuation.accessor'],
    settings: {
      foreground: palette.accessor,
    },
  },
]
