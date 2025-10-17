import { palette } from '../../palette/index'
import type { TokenColor } from '../../token-utils'

export const goTokens: TokenColor[] = [
  {
    name: 'Go keyword',
    scope: [
      'keyword.control.import.go',
      'keyword.control.flow.go',
      'keyword.operator.logical.go',
      'storage.type.go',
      'storage.modifier.go',
      'keyword.package.go',
      'keyword.import.go',
      'keyword.func.go',
      'keyword.type.go',
      'keyword.var.go',
      'keyword.const.go',
      'keyword.map.go',
      'keyword.interface.go',
      'keyword.struct.go',
      'keyword.channel.go',
      'keyword.select.go',
      'keyword.case.go',
      'keyword.default.go',
      'keyword.defer.go',
      'keyword.go.go',
      'keyword.goto.go',
      'keyword.fallthrough.go',
      'keyword.range.go',
      'keyword.return.go',
      'keyword.break.go',
      'keyword.continue.go',
    ],
    settings: {
      foreground: palette.keyword,
    },
  },
  {
    name: 'Go built-in function',
    scope: ['support.function.builtin.go'],
    settings: {
      foreground: palette.function,
    },
  },
  {
    name: 'Go type',
    scope: ['support.type.primitive.go', 'entity.name.type.go'],
    settings: {
      foreground: palette.type,
    },
  },
  {
    name: 'Go string',
    scope: ['string.quoted.double.go', 'string.quoted.raw.go'],
    settings: {
      foreground: palette.string,
    },
  },
  {
    name: 'Go number',
    scope: ['constant.numeric.go'],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'Go comment',
    scope: ['comment.line.double-slash.go', 'comment.block.go'],
    settings: {
      foreground: palette.comment,
    },
  },
  {
    name: 'Go operator',
    scope: ['keyword.operator.go'],
    settings: {
      foreground: palette.keywordOperator,
    },
  },
]
