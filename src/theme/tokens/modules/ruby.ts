import { TokenColor } from '../../token-utils'
import { palette } from '../../palette/index'

export const rubyTokens: TokenColor[] = [
  {
    name: 'Ruby keyword',
    scope: [
      'keyword.control.ruby',
      'keyword.other.special-method.ruby',
      'keyword.other.reserved.ruby',
      'keyword.operator.logical.ruby',
      'keyword.control.def.ruby',
      'keyword.control.class.ruby',
      'keyword.control.module.ruby',
      'keyword.control.import.ruby',
      'keyword.control.conditional.ruby',
      'keyword.control.loop.ruby',
      'keyword.control.return.ruby',
      'keyword.control.exception.ruby',
      'keyword.control.special-method.ruby',
      'keyword.other.special-method.ruby',
      'keyword.other.reserved.ruby',
      'keyword.control.start-block.ruby',
      'keyword.control.end-block.ruby',
      'keyword.control.ruby',
    ],
    settings: {
      foreground: palette.keyword,
    },
  },
  {
    name: 'Ruby class',
    scope: [
      'entity.name.type.class.ruby',
      'support.class.ruby',
      'meta.class.ruby',
    ],
    settings: {
      foreground: palette.class,
    },
  },
  {
    name: 'Ruby method',
    scope: [
      'entity.name.function.ruby',
      'meta.function.method.ruby',
      'variable.function.ruby',
    ],
    settings: {
      foreground: palette.function,
    },
  },
  {
    name: 'Ruby method call',
    scope: ['meta.method-call.ruby', 'support.function.builtin.ruby'],
    settings: {
      foreground: palette.function,
    },
  },
  {
    name: 'Ruby symbol',
    scope: [
      'constant.other.symbol.ruby',
      'constant.other.symbol.hashkey.ruby',
      'punctuation.definition.constant.ruby',
    ],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'Ruby variable',
    scope: [
      'variable.other.readwrite.instance.ruby',
      'variable.other.readwrite.class.ruby',
      'variable.other.readwrite.global.ruby',
      'variable.other.constant.ruby',
      'variable.other.ruby',
    ],
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'Ruby parameter',
    scope: ['variable.parameter.ruby'],
    settings: {
      foreground: palette.parameter,
    },
  },
  {
    name: 'Ruby instance variable',
    scope: [
      'variable.other.readwrite.instance.ruby',
      'punctuation.definition.variable.ruby',
    ],
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'Ruby class variable',
    scope: ['variable.other.readwrite.class.ruby'],
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'Ruby global variable',
    scope: ['variable.other.readwrite.global.ruby'],
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'Ruby constant',
    scope: ['constant.other.ruby', 'variable.other.constant.ruby'],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'Ruby string',
    scope: [
      'string.quoted.single.ruby',
      'string.quoted.double.ruby',
      'string.quoted.other.literal.upper.ruby',
      'string.regexp.ruby',
      'string.interpolated.ruby',
      'string.other.ruby',
    ],
    settings: {
      foreground: palette.string,
    },
  },
  {
    name: 'Ruby number',
    scope: ['constant.numeric.ruby'],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'Ruby boolean',
    scope: ['constant.language.boolean.ruby'],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'Ruby nil',
    scope: ['constant.language.nil.ruby'],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'Ruby comment',
    scope: [
      'comment.line.number-sign.ruby',
      'comment.block.documentation.ruby',
    ],
    settings: {
      foreground: palette.comment,
    },
  },
  {
    name: 'Ruby block parameter',
    scope: ['variable.parameter.block.ruby'],
    settings: {
      foreground: palette.parameter,
    },
  },
  {
    name: 'Ruby heredoc',
    scope: ['string.unquoted.heredoc.ruby'],
    settings: {
      foreground: palette.string,
    },
  },
  {
    name: 'Ruby escape',
    scope: ['constant.character.escape.ruby'],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'Ruby keyword operator',
    scope: [
      'keyword.operator.arithmetic.ruby',
      'keyword.operator.assignment.ruby',
      'keyword.operator.comparison.ruby',
      'keyword.operator.logical.ruby',
      'keyword.operator.other.ruby',
    ],
    settings: {
      foreground: palette.keywordOperator,
    },
  },
]
