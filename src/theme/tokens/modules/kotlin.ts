import { TokenColor } from '../../token-utils'
import { palette } from '../../palette/index'

export const kotlinTokens: TokenColor[] = [
  {
    name: 'Kotlin keyword',
    scope: [
      'keyword.control.kotlin',
      'storage.type.kotlin',
      'storage.modifier.kotlin',
      'keyword.operator.kotlin',
      'keyword.other.import.kotlin',
      'keyword.other.package.kotlin',
      'keyword.other.class.kotlin',
      'keyword.other.interface.kotlin',
      'keyword.other.object.kotlin',
      'keyword.other.enum.kotlin',
      'keyword.other.annotation.kotlin',
      'keyword.other.fun.kotlin',
      'keyword.other.val.kotlin',
      'keyword.other.var.kotlin',
      'keyword.other.vararg.kotlin',
      'keyword.other.in.kotlin',
      'keyword.other.out.kotlin',
      'keyword.other.where.kotlin',
      'keyword.other.constructor.kotlin',
      'keyword.other.init.kotlin',
      'keyword.other.this.kotlin',
      'keyword.other.super.kotlin',
      'keyword.other.import.kotlin',
      'keyword.other.as.kotlin',
      'keyword.other.is.kotlin',
      'keyword.other.else.kotlin',
      'keyword.other.if.kotlin',
      'keyword.other.when.kotlin',
      'keyword.other.for.kotlin',
      'keyword.other.while.kotlin',
      'keyword.other.do.kotlin',
      'keyword.other.return.kotlin',
      'keyword.other.continue.kotlin',
      'keyword.other.break.kotlin',
      'keyword.other.try.kotlin',
      'keyword.other.catch.kotlin',
      'keyword.other.finally.kotlin',
      'keyword.other.throw.kotlin',
      'keyword.other.await.kotlin',
      'keyword.other.suspend.kotlin',
      'keyword.other.inline.kotlin',
      'keyword.other.reified.kotlin',
      'keyword.other.tailrec.kotlin',
      'keyword.other.operator.kotlin',
      'keyword.other.infix.kotlin',
      'keyword.other.data.kotlin',
      'keyword.other.sealed.kotlin',
      'keyword.other.internal.kotlin',
      'keyword.other.private.kotlin',
      'keyword.other.protected.kotlin',
      'keyword.other.public.kotlin',
      'keyword.other.actual.kotlin',
      'keyword.other.expect.kotlin',
      'keyword.other.const.kotlin',
      'keyword.other.external.kotlin',
      'keyword.other.override.kotlin',
      'keyword.other.open.kotlin',
      'keyword.other.abstract.kotlin',
      'keyword.other.final.kotlin',
      'keyword.other.lateinit.kotlin',
      'keyword.other.noinline.kotlin',
      'keyword.other.crossinline.kotlin',
      'keyword.other.reified.kotlin',
    ],
    settings: {
      foreground: palette.keyword,
    },
  },
  {
    name: 'Kotlin built-in types',
    scope: [
      'storage.type.primitive.kotlin',
      'support.type.primitive.kotlin',
    ],
    settings: {
      foreground: palette.type,
    },
  },
  {
    name: 'Kotlin class',
    scope: [
      'entity.name.type.class.kotlin',
      'entity.name.type.interface.kotlin',
      'entity.name.type.enum.kotlin',
      'entity.name.type.annotation.kotlin',
    ],
    settings: {
      foreground: palette.class,
    },
  },
  {
    name: 'Kotlin function',
    scope: [
      'entity.name.function.kotlin',
      'meta.function.kotlin',
      'support.function.kotlin',
    ],
    settings: {
      foreground: palette.function,
    },
  },
  {
    name: 'Kotlin method call',
    scope: [
      'meta.function-call.kotlin',
      'entity.name.function.member.kotlin',
    ],
    settings: {
      foreground: palette.function,
    },
  },
  {
    name: 'Kotlin property',
    scope: [
      'variable.other.property.kotlin',
      'entity.name.variable.property.kotlin',
    ],
    settings: {
      foreground: palette.property,
    },
  },
  {
    name: 'Kotlin variable',
    scope: [
      'variable.other.readwrite.kotlin',
      'variable.other.constant.kotlin',
      'variable.other.declaration.kotlin',
    ],
    settings: {
      foreground: palette.variable,
    },
 },
  {
    name: 'Kotlin parameter',
    scope: [
      'variable.parameter.kotlin',
    ],
    settings: {
      foreground: palette.parameter,
    },
  },
  {
    name: 'Kotlin string',
    scope: [
      'string.quoted.single.kotlin',
      'string.quoted.double.kotlin',
      'string.template.kotlin',
    ],
    settings: {
      foreground: palette.string,
    },
  },
  {
    name: 'Kotlin number',
    scope: [
      'constant.numeric.kotlin',
    ],
    settings: {
      foreground: palette.constant,
    },
  },
 {
    name: 'Kotlin boolean',
    scope: [
      'constant.language.boolean.kotlin',
    ],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'Kotlin null value',
    scope: [
      'constant.language.null.kotlin',
    ],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'Kotlin comment',
    scope: [
      'comment.line.double-slash.kotlin',
      'comment.block.kotlin',
    ],
    settings: {
      foreground: palette.comment,
    },
  },
  {
    name: 'Kotlin annotation',
    scope: [
      'meta.annotation.kotlin',
      'storage.type.annotation.kotlin',
      'entity.name.type.annotation.kotlin',
    ],
    settings: {
      foreground: palette.decorator,
    },
  },
 {
    name: 'Kotlin lambda parameter',
    scope: [
      'variable.parameter.function.lambda.kotlin',
    ],
    settings: {
      foreground: palette.parameter,
    },
  },
  {
    name: 'Kotlin operator',
    scope: [
      'keyword.operator.arithmetic.kotlin',
      'keyword.operator.assignment.kotlin',
      'keyword.operator.comparison.kotlin',
      'keyword.operator.logical.kotlin',
      'keyword.operator.increment-decrement.kotlin',
    ],
    settings: {
      foreground: palette.keywordOperator,
    },
  },
]