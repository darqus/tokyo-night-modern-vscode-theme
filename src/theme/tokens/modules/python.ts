import { TokenColor } from '../../token-utils'
import { palette } from '../../palette/index'

export const pythonTokens: TokenColor[] = [
  {
    name: 'Python keyword',
    scope: [
      'keyword.control.import.python',
      'keyword.control.flow.python',
      'keyword.operator.logical.python',
      'storage.type.function.python',
      'storage.modifier.global.python',
      'keyword.control.flow.break.python',
      'keyword.control.flow.continue.python',
      'keyword.control.flow.conditional.python',
      'keyword.control.flow.loop.python',
      'keyword.control.flow.return.python',
      'keyword.control.flow.raise.python',
      'keyword.control.flow.try.python',
      'keyword.control.flow.with.python',
      'keyword.control.flow.yield.python',
      'keyword.control.default.python',
      'storage.type.class.python',
      'storage.type.function.async.python',
      'keyword.operator.word.python',
    ],
    settings: {
      foreground: palette.keyword,
    },
  },
  {
    name: 'Python string',
    scope: [
      'string.quoted.single.python',
      'string.quoted.double.python',
      'string.quoted.multi.python',
      'string.interpolated.python',
    ],
    settings: {
      foreground: palette.string,
    },
  },
  {
    name: 'Python number',
    scope: [
      'constant.numeric.dec.python',
      'constant.numeric.hex.python',
      'constant.numeric.oct.python',
      'constant.numeric.bin.python',
      'constant.numeric.float.python',
    ],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'Python function',
    scope: ['entity.name.function.python', 'meta.function-call.generic.python'],
    settings: {
      foreground: palette.function,
    },
  },
  {
    name: 'Python class',
    scope: ['entity.name.type.class.python', 'meta.class.python'],
    settings: {
      foreground: palette.class,
    },
  },
  {
    name: 'Python comment',
    scope: [
      'comment.line.number-sign.python',
      'punctuation.definition.comment.python',
    ],
    settings: {
      foreground: palette.comment,
    },
  },
  {
    name: 'Python type',
    scope: ['storage.type.hint.python', 'meta.function.parameters.python'],
    settings: {
      foreground: palette.type,
    },
  },
  {
    name: 'Python variable',
    scope: ['variable.other.python', 'meta.function-call.arguments.python'],
    settings: {
      foreground: palette.variable,
    },
  },
]
