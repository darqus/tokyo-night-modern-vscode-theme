// Общие токены синтаксиса (не зависящие от конкретного языка)
import { TokenColor } from '../token-utils'

export const commonTokens: TokenColor[] = [
  {
    name: 'Comment',
    scope: ['comment', 'punctuation.definition.comment'],
    settings: {
      foreground: '#6b78a8',
      fontStyle: 'italic',
    },
  },
  {
    name: 'Comment Documentation',
    scope: ['comment.block.documentation', 'comment.line.documentation'],
    settings: {
      foreground: '#7d909e',
      fontStyle: 'italic',
    },
  },
  {
    name: 'Comment TODO/FIXME',
    scope: ['comment keyword.codetag'],
    settings: {
      foreground: '#f7de70',
      fontStyle: 'bold',
    },
  },
  {
    name: 'String',
    scope: ['string', 'punctuation.definition.string'],
    settings: {
      foreground: '#a7c785',
    },
  },
  {
    name: 'Number',
    scope: ['constant.numeric'],
    settings: {
      foreground: '#f0ac74',
    },
  },
  {
    name: 'Boolean',
    scope: ['constant.language.boolean'],
    settings: {
      foreground: '#f38095',
    },
  },
  {
    name: 'Keyword',
    scope: ['keyword'],
    settings: {
      foreground: '#b18af8',
    },
  },
  {
    name: 'Operator',
    scope: ['keyword.operator'],
    settings: {
      foreground: '#9d7cd8',
    },
  },
  {
    name: 'Storage',
    scope: ['storage'],
    settings: {
      foreground: '#9d7cd8',
    },
  },
  {
    name: 'Storage Type',
    scope: ['storage.type'],
    settings: {
      foreground: '#f7de70',
    },
  },
  {
    name: 'Entity Name',
    scope: ['entity.name'],
    settings: {
      foreground: '#c0caf5',
    },
  },
  {
    name: 'Entity Name Type',
    scope: ['entity.name.type'],
    settings: {
      foreground: '#f7de70',
    },
  },
  {
    name: 'Variable',
    scope: ['variable', 'support.variable'],
    settings: {
      foreground: '#c0caf5',
    },
  },
  {
    name: 'Variable Parameter',
    scope: ['variable.parameter'],
    settings: {
      foreground: '#accbf8',
    },
  },
  {
    name: 'Support',
    scope: ['support'],
    settings: {
      foreground: '#7aa2f7',
    },
  },
  {
    name: 'Support Function',
    scope: ['support.function'],
    settings: {
      foreground: '#7aa2f7',
    },
  },
  {
    name: 'Invalid',
    scope: ['invalid'],
    settings: {
      foreground: '#f38095',
    },
  },
  {
    name: 'Invalid Deprecated',
    scope: ['invalid.deprecated'],
    settings: {
      foreground: '#8591bfb3',
      fontStyle: 'strikethrough',
    },
  },
  {
    name: 'Punctuation',
    scope: ['punctuation', 'meta.brace'],
    settings: {
      foreground: '#a6b1de',
    },
  },
  {
    name: 'Punctuation Separator',
    scope: ['punctuation.separator'],
    settings: {
      foreground: '#a6b1de',
    },
  },
  {
    name: 'Punctuation Accessor',
    scope: ['punctuation.accessor'],
    settings: {
      foreground: '#7dcfff',
    },
  },
]
