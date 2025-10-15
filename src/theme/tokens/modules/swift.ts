import { TokenColor } from '../../token-utils'
import { palette } from '../../palette/index'

export const swiftTokens: TokenColor[] = [
  {
    name: 'Swift keyword',
    scope: [
      'keyword.control.swift',
      'storage.type.swift',
      'storage.modifier.swift',
      'keyword.operator.word.swift',
      'keyword.other.import.swift',
      'keyword.other.class.swift',
      'keyword.other.struct.swift',
      'keyword.other.enum.swift',
      'keyword.other.protocol.swift',
      'keyword.other.extension.swift',
      'keyword.other.func.swift',
      'keyword.other.var.swift',
      'keyword.other.let.swift',
      'keyword.other.init.swift',
      'keyword.other.deinit.swift',
      'keyword.other.import.swift',
      'keyword.other.typealias.swift',
      'keyword.other.associatedtype.swift',
      'keyword.other.for.swift',
      'keyword.other.while.swift',
      'keyword.other.repeat.swift',
      'keyword.other.if.swift',
      'keyword.other.guard.swift',
      'keyword.other.else.swift',
      'keyword.other.switch.swift',
      'keyword.other.case.swift',
      'keyword.other.default.swift',
      'keyword.other.break.swift',
      'keyword.other.continue.swift',
      'keyword.other.fallthrough.swift',
      'keyword.other.return.swift',
      'keyword.other.yield.swift',
      'keyword.other.await.swift',
      'keyword.other.try.swift',
      'keyword.other.catch.swift',
      'keyword.other.throw.swift',
      'keyword.other.inout.swift',
      'keyword.other.in.swift',
      'keyword.other.where.swift',
      'keyword.other.dynamic.swift',
      'keyword.other.final.swift',
      'keyword.other.required.swift',
      'keyword.other.optional.swift',
      'keyword.other.some.swift',
      'keyword.other.any.swift',
      'keyword.other.is.swift',
      'keyword.other.as.swift',
      'keyword.other.open.swift',
      'keyword.other.public.swift',
      'keyword.other.internal.swift',
      'keyword.other.fileprivate.swift',
      'keyword.other.private.swift',
      'keyword.other.static.swift',
      'keyword.other.final.swift',
      'keyword.other.dynamic.swift',
      'keyword.other.lazy.swift',
      'keyword.other.optional.swift',
      'keyword.other.weak.swift',
      'keyword.other.unowned.swift',
      'keyword.other.rethrows.swift',
      'keyword.other.indirect.swift',
      'keyword.other.nonmutating.swift',
      'keyword.other.mutating.swift',
      'keyword.other.convenience.swift',
      'keyword.other.override.swift',
      'keyword.other.postfix.swift',
      'keyword.other.prefix.swift',
      'keyword.other.infix.swift',
      'keyword.other.left.swift',
      'keyword.other.right.swift',
      'keyword.other.none.swift',
      'keyword.other.precedencegroup.swift',
      'keyword.other.assignment.swift',
      'keyword.other.associativity.swift',
    ],
    settings: {
      foreground: palette.keyword,
    },
  },
  {
    name: 'Swift built-in types',
    scope: [
      'storage.type.primitive.swift',
      'support.type.primitive.swift',
    ],
    settings: {
      foreground: palette.type,
    },
  },
  {
    name: 'Swift class',
    scope: [
      'entity.name.type.class.swift',
      'entity.name.type.struct.swift',
      'entity.name.type.enum.swift',
      'entity.name.type.protocol.swift',
    ],
    settings: {
      foreground: palette.class,
    },
  },
  {
    name: 'Swift function',
    scope: [
      'entity.name.function.swift',
      'meta.function.swift',
      'support.function.swift',
    ],
    settings: {
      foreground: palette.function,
    },
  },
  {
    name: 'Swift method call',
    scope: [
      'meta.function-call.swift',
      'entity.name.function.member.swift',
    ],
    settings: {
      foreground: palette.function,
    },
  },
  {
    name: 'Swift property',
    scope: [
      'variable.other.property.swift',
      'entity.name.variable.property.swift',
    ],
    settings: {
      foreground: palette.property,
    },
  },
  {
    name: 'Swift variable',
    scope: [
      'variable.other.readwrite.swift',
      'variable.other.constant.swift',
      'variable.other.declaration.swift',
    ],
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'Swift parameter',
    scope: [
      'variable.parameter.swift',
    ],
    settings: {
      foreground: palette.parameter,
    },
  },
  {
    name: 'Swift string',
    scope: [
      'string.quoted.single.swift',
      'string.quoted.double.swift',
      'string.interpolated.swift',
    ],
    settings: {
      foreground: palette.string,
    },
  },
  {
    name: 'Swift number',
    scope: [
      'constant.numeric.swift',
    ],
    settings: {
      foreground: palette.constant,
    },
  },
 {
    name: 'Swift boolean',
    scope: [
      'constant.language.boolean.swift',
    ],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'Swift nil',
    scope: [
      'constant.language.nil.swift',
      'constant.language.swift',
    ],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'Swift comment',
    scope: [
      'comment.line.double-slash.swift',
      'comment.block.swift',
    ],
    settings: {
      foreground: palette.comment,
    },
  },
  {
    name: 'Swift operator',
    scope: [
      'keyword.operator.arithmetic.swift',
      'keyword.operator.assignment.swift',
      'keyword.operator.comparison.swift',
      'keyword.operator.logical.swift',
      'keyword.operator.increment-decrement.swift',
      'keyword.operator.unary.swift',
      'keyword.operator.binary.swift',
      'keyword.operator.ternary.swift',
    ],
    settings: {
      foreground: palette.keywordOperator,
    },
  },
  {
    name: 'Swift closure parameter',
    scope: [
      'variable.parameter.closure.swift',
    ],
    settings: {
      foreground: palette.parameter,
    },
  },
  {
    name: 'Swift extension',
    scope: [
      'meta.extension.swift',
    ],
    settings: {
      foreground: palette.class,
    },
  },
]