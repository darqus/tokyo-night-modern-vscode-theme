import { TokenColor } from '../../token-utils'
import { palette } from '../../palette/index'

export const haskellTokens: TokenColor[] = [
  {
    name: 'Haskell keyword',
    scope: [
      'keyword.other.haskell',
      'keyword.declaration.haskell',
      'keyword.control.haskell',
      'keyword.operator.haskell',
      'keyword.other.arrow.haskell',
      'keyword.other.big-arrow.haskell',
      'keyword.other.forall.haskell',
      'keyword.other.qualified.haskell',
      'keyword.other.hiding.haskell',
      'keyword.other.as.haskell',
      'keyword.other.default.haskell',
      'keyword.other.family.haskell',
      'keyword.other.role.haskell',
      'keyword.other.standalone.haskell',
      'keyword.other.newtype.haskell',
      'keyword.other.type.haskell',
      'keyword.other.where.haskell',
      'keyword.other.let.haskell',
      'keyword.other.in.haskell',
      'keyword.other.do.haskell',
      'keyword.other.rec.haskell',
      'keyword.other.package.haskell',
      'keyword.other.signature.haskell',
      'keyword.other.safe.haskell',
      'keyword.other.unsafe.haskell',
    ],
    settings: {
      foreground: palette.keyword,
    },
  },
  {
    name: 'Haskell operator',
    scope: [
      'keyword.operator.haskell',
      'keyword.other.arrow.haskell',
      'keyword.other.big-arrow.haskell',
    ],
    settings: {
      foreground: palette.keywordOperator,
    },
  },
  {
    name: 'Haskell type',
    scope: [
      'entity.name.type.haskell',
      'support.type.primitive.haskell',
      'entity.name.type.class.haskell',
      'entity.name.type.newtype.haskell',
      'entity.name.type.data.haskell',
    ],
    settings: {
      foreground: palette.type,
    },
  },
  {
    name: 'Haskell function',
    scope: ['entity.name.function.haskell', 'support.function.prelude.haskell'],
    settings: {
      foreground: palette.function,
    },
  },
  {
    name: 'Haskell constructor',
    scope: [
      'meta.declaration.class.haskell',
      'meta.declaration.instance.haskell',
      'meta.declaration.type-data.haskell',
    ],
    settings: {
      foreground: palette.class,
    },
  },
  {
    name: 'Haskell variable',
    scope: ['variable.other.haskell', 'meta.declaration.function.haskell'],
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'Haskell string',
    scope: ['string.quoted.double.haskell', 'string.quoted.single.haskell'],
    settings: {
      foreground: palette.string,
    },
  },
  {
    name: 'Haskell number',
    scope: ['constant.numeric.haskell'],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'Haskell comment',
    scope: ['comment.line.double-dash.haskell', 'comment.block.haskell'],
    settings: {
      foreground: palette.comment,
    },
  },
]
