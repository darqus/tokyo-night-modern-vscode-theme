import type { TokenColor } from '../../types'
import { palette } from '../../palette'

export function generateBasicTokens(): TokenColor[] {
  const { orange, green, purple, cyan, red, yellow, blue, special, fg } =
    palette

  return [
    {
      name: 'Number, Boolean, Undefined, Null',
      scope: [
        'variable.other.constant',
        'punctuation.definition.constant',
        'constant.language',
        'constant.numeric',
        'support.constant',
        'constant.other.caps',
      ],
      settings: { foreground: orange },
    },
    {
      name: 'String, Symbols',
      scope: [
        'string',
        'constant.other.symbol',
        'constant.other.key',
        'meta.attribute-selector',
        'string constant.character',
      ],
      settings: { foreground: green.main },
    },
    {
      name: 'Colors',
      scope: [
        'constant.other.color',
        'constant.other.color.rgb-value.hex punctuation.definition.constant',
      ],
      settings: { foreground: fg.bright },
    },
    {
      name: 'Invalid',
      scope: ['invalid', 'invalid.illegal'],
      settings: { foreground: special.invalid },
    },
    {
      name: 'Invalid deprecated',
      scope: 'invalid.deprecated',
      settings: { foreground: purple.light },
    },
    {
      name: 'Storage Type',
      scope: 'storage.type',
      settings: { foreground: purple.light },
    },
    {
      name: 'Storage - modifier, var, const, let',
      scope: ['meta.var.expr storage.type', 'storage.modifier'],
      settings: { foreground: purple.dark },
    },
    {
      name: 'Interpolation, PHP tags, Smarty tags',
      scope: [
        'punctuation.definition.template-expression',
        'punctuation.section.embedded',
        'meta.embedded.line.tag.smarty',
        'support.constant.handlebars',
        'punctuation.section.tag.twig',
      ],
      settings: { foreground: cyan.light },
    },
    {
      name: 'Blade, Twig, Smarty Handlebars keywords',
      scope: [
        'keyword.control.smarty',
        'keyword.control.twig',
        'support.constant.handlebars keyword.control',
        'keyword.operator.comparison.twig',
        'keyword.blade',
        'entity.name.function.blade',
        'meta.tag.blade keyword.other.type.php',
      ],
      settings: { foreground: cyan.dark },
    },
    {
      name: 'Spread',
      scope: ['keyword.operator.spread', 'keyword.operator.rest'],
      settings: { foreground: red.main, fontStyle: 'bold' },
    },
    {
      name: 'Operator, Misc',
      scope: [
        'keyword.operator',
        'keyword.control.as',
        'keyword.other',
        'keyword.operator.bitwise.shift',
        'punctuation',
        'expression.embbeded.vue punctuation.definition.tag',
        'text.html.twig meta.tag.inline.any.html',
        'meta.tag.template.value.twig meta.function.arguments.twig',
        'meta.directive.vue punctuation.separator.key-value.html',
        'punctuation.definition.constant.markdown',
        'punctuation.definition.string',
        'punctuation.support.type.property-name',
        'text.html.vue-html meta.tag',
        'meta.attribute.directive',
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
        'meta.embedded.inline.phpx punctuation.definition.tag.begin.html',
        'meta.embedded.inline.phpx punctuation.definition.tag.end.html',
      ],
      settings: { foreground: cyan.bright },
    },
    {
      name: 'Import, Export, From, Default',
      scope: [
        'keyword.control.module.js',
        'keyword.control.import',
        'keyword.control.export',
        'keyword.control.from',
        'keyword.control.default',
        'meta.import keyword.other',
      ],
      settings: { foreground: cyan.light },
    },
    {
      name: 'Keyword',
      scope: ['keyword', 'keyword.control', 'keyword.other.important'],
      settings: { foreground: purple.light },
    },
    {
      name: 'Keyword SQL',
      scope: 'keyword.other.DML',
      settings: { foreground: cyan.light },
    },
    {
      name: 'Keyword Operator Logical, Arrow, Ternary, Comparison',
      scope: [
        'keyword.operator.logical',
        'storage.type.function',
        'keyword.operator.bitwise',
        'keyword.operator.ternary',
        'keyword.operator.comparison',
        'keyword.operator.relational',
        'keyword.operator.or.regexp',
      ],
      settings: { foreground: purple.light },
    },
  ]
}
