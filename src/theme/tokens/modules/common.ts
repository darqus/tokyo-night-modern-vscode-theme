// Общие токены синтаксиса (не зависящие от конкретного языка)
import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

export const commonTokens: TokenColor[] = [
  {
    name: 'Flow control',
    scope: 'keyword.control.flow.block-scalar.literal',
    settings: {
      fontStyle: '',
    },
  },
  {
    name: 'Comment',
    scope: [
      'comment',
      'comment.block.documentation',
      'punctuation.definition.comment',
      'comment.block.documentation punctuation',
    ],
    settings: {
      foreground: palette.comment,
    },
  },
  {
    name: 'Doc comment',
    scope: [
      'comment.block.documentation variable',
      'comment.block.documentation storage',
      'comment.block.documentation keyword',
      'comment.block.documentation support',
      'comment.block.documentation markup',
      'comment.block.documentation markup.inline.raw.string.markdown',
      'meta.other.type.phpdoc.php keyword.other.type.php',
      'meta.other.type.phpdoc.php support.other.namespace.php',
      'meta.other.type.phpdoc.php punctuation.separator.inheritance.php',
      'meta.other.type.phpdoc.php support.class',
      'keyword.other.phpdoc.php',
      'log.date',
    ],
    settings: {
      foreground: palette.commentDoc,
    },
  },
  {
    name: 'Doc comment tag',
    scope: [
      'meta.other.type.phpdoc.php support.class',
      'comment.block.documentation storage.type',
      'comment.block.documentation punctuation.definition.block.tag',
      'comment.block.documentation entity.name.type.instance',
    ],
    settings: {
      foreground: palette.commentDocTag,
    },
  },
  {
    name: 'Constant',
    scope: [
      'variable.other.constant',
      'punctuation.definition.constant',
      'constant.language',
      'constant.numeric',
      'support.constant',
    ],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'String',
    scope: [
      'string',
      'constant.other.symbol',
      'constant.other.key',
      'meta.attribute-selector',
    ],
    settings: {
      foreground: palette.string,
      fontStyle: '',
    },
  },
  {
    name: 'Constant color',
    scope: [
      'constant.other.color',
      'constant.other.color.rgb-value.hex punctuation.definition.constant',
    ],
    settings: {
      foreground: palette.constantColor,
    },
  },
  {
    name: 'Invalid',
    scope: ['invalid', 'invalid.illegal'],
    settings: {
      foreground: palette.invalid,
    },
  },
  {
    name: 'Deprecated',
    scope: 'invalid.deprecated',
    settings: {
      foreground: palette.deprecated,
    },
  },
  {
    name: 'Storage type',
    scope: 'storage.type',
    settings: {
      foreground: palette.storageType,
    },
  },
  {
    name: 'Storage modifier',
    scope: ['meta.var.expr storage.type', 'storage.modifier'],
    settings: {
      foreground: palette.storageModifier,
    },
  },
  {
    name: 'Template expression',
    scope: [
      'punctuation.definition.template-expression',
      'punctuation.section.embedded',
      'meta.embedded.line.tag.smarty',
      'support.constant.handlebars',
      'punctuation.section.tag.twig',
    ],
    settings: {
      foreground: palette.templateExpression,
    },
  },
  {
    name: 'Keyword control',
    scope: [
      'keyword.control.smarty',
      'keyword.control.twig',
      'support.constant.handlebars keyword.control',
      'keyword.operator.comparison.twig',
      'keyword.blade',
      'entity.name.function.blade',
    ],
    settings: {
      foreground: palette.keywordControl,
    },
  },
  {
    name: 'Keyword operator',
    scope: [
      'keyword.operator',
      'keyword.other',
      'keyword.operator.bitwise.shift',
      'punctuation',
      'text.html.twig meta.tag.inline.any.html',
      'meta.tag.template.value.twig meta.function.arguments.twig',
      'meta.directive.vue punctuation.separator.key-value.html',
      'punctuation.definition.constant.markdown',
      'punctuation.definition.string',
      'punctuation.support.type.property-name',
      'text.html.vue-html meta.tag',
      'punctuation.definition.keyword',
      'punctuation.terminator.rule',
      'punctuation.definition.entity',
      'punctuation.separator.inheritance.php',
      'keyword.other.template',
      'keyword.other.substitution',
      'entity.name.operator',
      'meta.property-list punctuation.separator.key-value',
      'meta.at-rule.mixin punctuation.separator.key-value',
      'meta.at-rule.function variable.parameter.url',
    ],
    settings: {
      foreground: palette.keywordOperatorAlpha60,
    },
  },
  {
    name: 'Spread, rest',
    scope: ['keyword.operator.spread', 'keyword.operator.rest'],
    settings: {
      foreground: palette.keywordOperatorSpread,
    },
  },
  {
    name: 'New',
    scope: [
      'keyword.operator.new',
      'keyword.operator.ternary',
      'keyword.operator.optional',
      'keyword.operator.expression',
      'keyword.operator.expression.typeof',
      'keyword.operator.expression.delete',
      'keyword.operator.expression.instanceof',
      'keyword.operator.expression.keyof',
    ],
    settings: {
      foreground: palette.keywordOperatorNew,
    },
  },
  {
    name: 'Export/default',
    scope: ['keyword.control.export', 'keyword.control.default'],
    settings: {
      foreground: palette.keywordControlExport,
    },
  },
  {
    name: 'Import/from',
    scope: [
      'keyword.control.import',
      'keyword.control.from',
      'meta.import keyword.other',
    ],
    settings: {
      foreground: palette.keywordControlImport,
    },
  },
  {
    name: 'Keyword',
    scope: ['keyword', 'keyword.control', 'keyword.other.important'],
    settings: {
      foreground: palette.keyword,
    },
  },
  {
    name: 'DML',
    scope: 'keyword.other.DML',
    settings: {
      foreground: palette.keywordDML,
    },
  },
  {
    name: 'Logical',
    scope: [
      'keyword.operator.logical',
      'storage.type.function',
      'keyword.operator.bitwise',
      'keyword.operator.ternary',
      'keyword.operator.comparison',
      'keyword.operator.relational',
      'keyword.operator.or.regexp',
    ],
    settings: {
      foreground: palette.keywordLogical,
    },
  },
  {
    name: 'Tag',
    scope: 'entity.name.tag',
    settings: {
      foreground: palette.tag,
    },
  },
  {
    name: 'Tag component',
    scope: ['entity.name.tag support.class.component', 'meta.tag'],
    settings: {
      foreground: palette.tag,
    },
  },
  {
    name: 'Tag punctuation',
    scope: 'punctuation.definition.tag',
    settings: {
      foreground: palette.tagPunctuationAlpha60,
    },
  },
  {
    name: 'PHP constant',
    scope: [
      'constant.other.php',
      'variable.other.global.safer',
      'variable.other.global.safer punctuation.definition.variable',
      'variable.other.global',
      'variable.other.global punctuation.definition.variable',
      'constant.other',
    ],
    settings: {
      foreground: palette.constantPhp,
    },
  },
]
