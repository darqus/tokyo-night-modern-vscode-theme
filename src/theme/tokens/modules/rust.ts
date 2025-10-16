import { TokenColor } from '../../token-utils'
import { palette } from '../../palette/index'

export const rustTokens: TokenColor[] = [
  {
    name: 'Rust keyword',
    scope: [
      'keyword.control.rust',
      'storage.type.rust',
      'storage.modifier.rust',
      'keyword.other.rust',
      'keyword.unsafe.rust',
      'keyword.async.rust',
      'keyword.await.rust',
      'keyword.const.rust',
      'keyword.static.rust',
      'keyword.mut.rust',
      'keyword.ref.rust',
      'keyword.crate.rust',
      'keyword.mod.rust',
      'keyword.use.rust',
      'keyword.struct.rust',
      'keyword.enum.rust',
      'keyword.union.rust',
      'keyword.impl.rust',
      'keyword.trait.rust',
      'keyword.fn.rust',
      'keyword.extern.rust',
      'keyword.pub.rust',
      'keyword.type.rust',
      'keyword.where.rust',
      'keyword.for.rust',
      'keyword.while.rust',
      'keyword.loop.rust',
      'keyword.if.rust',
      'keyword.match.rust',
      'keyword.else.rust',
      'keyword.return.rust',
    ],
    settings: {
      foreground: palette.keyword,
    },
  },
  {
    name: 'Rust lifetime',
    scope: [
      'storage.modifier.lifetime.rust',
      'punctuation.definition.lifetime.rust',
    ],
    settings: {
      foreground: palette.type,
    },
  },
  {
    name: 'Rust macro',
    scope: [
      'entity.name.function.macro.rust',
      'support.function.macro.rust',
      'variable.other.metavariable.name.rust',
      'punctuation.definition.metavariable.name.rust',
    ],
    settings: {
      foreground: palette.function,
    },
  },
  {
    name: 'Rust string',
    scope: [
      'string.quoted.double.rust',
      'string.quoted.single.char.rust',
      'string.quoted.raw.rust',
    ],
    settings: {
      foreground: palette.string,
    },
  },
  {
    name: 'Rust number',
    scope: [
      'constant.numeric.decimal.rust',
      'constant.numeric.hex.rust',
      'constant.numeric.octal.rust',
      'constant.numeric.binary.rust',
      'constant.numeric.float.rust',
    ],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'Rust type',
    scope: ['entity.name.type.rust', 'storage.type.core.rust'],
    settings: {
      foreground: palette.type,
    },
  },
  {
    name: 'Rust variable',
    scope: ['variable.other.rust'],
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'Rust comment',
    scope: [
      'comment.line.double-slash.rust',
      'comment.block.rust',
      'comment.block.documentation.rust',
    ],
    settings: {
      foreground: palette.comment,
    },
  },
]
