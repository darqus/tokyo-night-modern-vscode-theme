import { palette } from '../../palette/index'
import type { TokenColor } from '../../token-utils'

export const phpTokens: TokenColor[] = [
  {
    name: 'PHP keyword',
    scope: [
      'keyword.control.php',
      'storage.type.php',
      'storage.modifier.php',
      'keyword.operator.class.php',
      'keyword.other.namespace.php',
      'keyword.other.use.php',
      'keyword.other.new.php',
      'keyword.other.class.php',
      'keyword.other.interface.php',
      'keyword.other.trait.php',
      'keyword.other.extends.php',
      'keyword.other.implements.php',
      'keyword.other.function.php',
      'keyword.other.var.php',
      'keyword.other.const.php',
      'keyword.other.static.php',
      'keyword.other.final.php',
      'keyword.other.abstract.php',
      'keyword.other.public.php',
      'keyword.other.protected.php',
      'keyword.other.private.php',
      'keyword.other.include.php',
      'keyword.other.include_once.php',
      'keyword.other.require.php',
      'keyword.other.require_once.php',
      'keyword.other.return.php',
      'keyword.other.yield.php',
      'keyword.other.yield.from.php',
      'keyword.other.goto.php',
      'keyword.other.else.php',
      'keyword.other.elseif.php',
      'keyword.other.if.php',
      'keyword.other.endif.php',
      'keyword.other.for.php',
      'keyword.other.foreach.php',
      'keyword.other.endfor.php',
      'keyword.other endforeach.php',
      'keyword.other.while.php',
      'keyword.other endwhile.php',
      'keyword.other.do.php',
      'keyword.other.switch.php',
      'keyword.other.enddeclare.php',
      'keyword.other.declare.php',
      'keyword.other.case.php',
      'keyword.other.default.php',
      'keyword.other.break.php',
      'keyword.other.continue.php',
      'keyword.other.try.php',
      'keyword.other.catch.php',
      'keyword.other.finally.php',
      'keyword.other.throw.php',
      'keyword.other.echo.php',
      'keyword.other.print.php',
      'keyword.other.global.php',
      'keyword.other.use-as.php',
      'keyword.other.as.php',
      'keyword.other.clone.php',
      'keyword.other.unset.php',
      'keyword.other.list.php',
      'keyword.other.eval.php',
      'keyword.other.exit.php',
      'keyword.other.empty.php',
      'keyword.other.isset.php',
      'keyword.other.parent.php',
      'keyword.other.self.php',
      'keyword.other.static.php',
      'keyword.other.namespace.php',
    ],
    settings: {
      foreground: palette.keyword,
    },
  },
  {
    name: 'PHP built-in types',
    scope: ['storage.type.primitive.php', 'support.type.primitive.php'],
    settings: {
      foreground: palette.type,
    },
  },
  {
    name: 'PHP class',
    scope: [
      'entity.name.type.class.php',
      'entity.name.type.interface.php',
      'entity.name.type.trait.php',
      'meta.class.php',
      'meta.interface.php',
      'meta.trait.php',
    ],
    settings: {
      foreground: palette.class,
    },
  },
  {
    name: 'PHP function',
    scope: [
      'entity.name.function.php',
      'support.function.php',
      'meta.function-call.php',
      'variable.function.php',
    ],
    settings: {
      foreground: palette.function,
    },
  },
  {
    name: 'PHP method',
    scope: ['entity.name.function.member.php', 'variable.other.property.php'],
    settings: {
      foreground: palette.function,
    },
  },
  {
    name: 'PHP variable',
    scope: [
      'variable.other.php',
      'variable.language.php',
      'variable.other.global.php',
      'variable.other.global.safer.php',
      'variable.other.property.php',
    ],
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'PHP parameter',
    scope: ['variable.parameter.php'],
    settings: {
      foreground: palette.parameter,
    },
  },
  {
    name: 'PHP string',
    scope: [
      'string.quoted.single.php',
      'string.quoted.double.php',
      'string.quoted.triple.php',
      'string.unquoted.php',
      'string.interpolated.php',
      'string.regexp.php',
    ],
    settings: {
      foreground: palette.string,
    },
  },
  {
    name: 'PHP number',
    scope: ['constant.numeric.php'],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'PHP boolean',
    scope: ['constant.language.boolean.php'],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'PHP null value',
    scope: ['constant.language.null.php'],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'PHP comment',
    scope: [
      'comment.line.double-slash.php',
      'comment.line.number-sign.php',
      'comment.block.php',
    ],
    settings: {
      foreground: palette.comment,
    },
  },
  {
    name: 'PHP variable punctuation',
    scope: ['punctuation.definition.variable.php'],
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'PHP heredoc/nowdoc',
    scope: ['string.unquoted.heredoc.php', 'string.unquoted.nowdoc.php'],
    settings: {
      foreground: palette.string,
    },
  },
  {
    name: 'PHP constants',
    scope: ['constant.other.php'],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'PHP scope resolution',
    scope: [
      'keyword.operator.class.php',
      'punctuation.separator.inheritance.php',
    ],
    settings: {
      foreground: palette.keywordOperator,
    },
  },
]
