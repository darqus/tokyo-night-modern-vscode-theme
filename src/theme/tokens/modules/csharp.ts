import { TokenColor } from '../../token-utils'
import { palette } from '../../palette/index'

export const csharpTokens: TokenColor[] = [
  {
    name: 'C# keyword',
    scope: [
      'keyword.control.cs',
      'storage.type.cs',
      'storage.modifier.cs',
      'keyword.type.cs',
      'keyword.operator.word.cs',
      'keyword.other.this.cs',
      'keyword.other.base.cs',
      'keyword.other.namespace.cs',
      'keyword.other.using.cs',
      'keyword.other.class.cs',
      'keyword.other.interface.cs',
      'keyword.other.struct.cs',
      'keyword.other.enum.cs',
      'keyword.other.delegate.cs',
      'keyword.other.event.cs',
      'keyword.other.property.cs',
      'keyword.other.get.cs',
      'keyword.other.set.cs',
      'keyword.other.add.cs',
      'keyword.other.remove.cs',
      'keyword.other.async.cs',
      'keyword.other.await.cs',
      'keyword.other.partial.cs',
      'keyword.other.virtual.cs',
      'keyword.other.override.cs',
      'keyword.other.abstract.cs',
      'keyword.other.sealed.cs',
      'keyword.other.static.cs',
      'keyword.other.internal.cs',
      'keyword.other.public.cs',
      'keyword.other.private.cs',
      'keyword.other.protected.cs',
      'keyword.other.extern.cs',
      'keyword.other.ref.cs',
      'keyword.other.out.cs',
      'keyword.other.in.cs',
      'keyword.other.optional.cs',
      'keyword.other.params.cs',
      'keyword.other.new.cs',
      'keyword.other.return.cs',
      'keyword.other.yield.cs',
      'keyword.other.checked.cs',
      'keyword.other.unchecked.cs',
      'keyword.other.lock.cs',
      'keyword.other.unsafe.cs',
      'keyword.other.fixed.cs',
      'keyword.other.try.cs',
      'keyword.other.catch.cs',
      'keyword.other.finally.cs',
      'keyword.other.throw.cs',
      'keyword.other.using.cs',
      'keyword.other.do.cs',
      'keyword.other.while.cs',
      'keyword.other.for.cs',
      'keyword.other.foreach.cs',
      'keyword.other.in.cs',
      'keyword.other.if.cs',
      'keyword.other.else.cs',
      'keyword.other.switch.cs',
      'keyword.other.case.cs',
      'keyword.other.default.cs',
      'keyword.other.goto.cs',
      'keyword.other.break.cs',
      'keyword.other.continue.cs',
      'keyword.other.goto.cs',
    ],
    settings: {
      foreground: palette.keyword,
    },
 },
  {
    name: 'C# built-in types',
    scope: [
      'storage.type.primitive.cs',
      'support.type.primitive.cs',
    ],
    settings: {
      foreground: palette.type,
    },
  },
  {
    name: 'C# class',
    scope: [
      'entity.name.type.class.cs',
      'entity.name.type.interface.cs',
      'entity.name.type.struct.cs',
      'entity.name.type.enum.cs',
      'entity.name.type.delegate.cs',
    ],
    settings: {
      foreground: palette.class,
    },
  },
  {
    name: 'C# method',
    scope: [
      'entity.name.function.cs',
      'meta.method.identifier.cs',
    ],
    settings: {
      foreground: palette.function,
    },
 },
  {
    name: 'C# method call',
    scope: [
      'meta.method-call.cs',
      'entity.name.function.member.cs',
    ],
    settings: {
      foreground: palette.function,
    },
  },
  {
    name: 'C# namespace',
    scope: [
      'entity.name.type.namespace.cs',
    ],
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'C# property',
    scope: [
      'entity.name.variable.property.cs',
    ],
    settings: {
      foreground: palette.property,
    },
  },
  {
    name: 'C# field',
    scope: [
      'entity.name.variable.field.cs',
    ],
    settings: {
      foreground: palette.property,
    },
  },
  {
    name: 'C# parameter',
    scope: [
      'variable.parameter.cs',
    ],
    settings: {
      foreground: palette.parameter,
    },
  },
  {
    name: 'C# variable',
    scope: [
      'variable.other.readwrite.cs',
      'variable.other.constant.cs',
    ],
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'C# string',
    scope: [
      'string.quoted.double.cs',
      'string.quoted.single.cs',
      'string.interpolated.cs',
      'string.verbatim.cs',
    ],
    settings: {
      foreground: palette.string,
    },
  },
  {
    name: 'C# number',
    scope: [
      'constant.numeric.cs',
    ],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'C# boolean',
    scope: [
      'constant.language.boolean.cs',
    ],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'C# null value',
    scope: [
      'constant.language.null.cs',
    ],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'C# comment',
    scope: [
      'comment.line.double-slash.cs',
      'comment.block.cs',
    ],
    settings: {
      foreground: palette.comment,
    },
  },
  {
    name: 'C# preprocessor',
    scope: [
      'keyword.preprocessor.cs',
      'meta.preprocessor.cs',
    ],
    settings: {
      foreground: palette.keyword,
    },
  },
  {
    name: 'C# attribute',
    scope: [
      'meta.attribute.cs',
      'entity.name.type.attribute.cs',
    ],
    settings: {
      foreground: palette.decorator,
    },
  },
]