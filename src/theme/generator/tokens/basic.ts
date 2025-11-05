import { palette } from '../../palette/index.js'
import type { TokenColor } from '../../types/index.js'
import { lighten, mix } from '../../utils/color.js'

export function generateBasicTokens(): TokenColor[] {
  const { orange, green, purple, cyan, red, yellow, pink, teal, fg } = palette

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
      settings: { foreground: orange.main },
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
      settings: { foreground: fg.light },
    },
    {
      name: 'Invalid',
      scope: ['invalid', 'invalid.illegal'],
      settings: { foreground: mix(red.main, orange.main, 0.7) },
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
      settings: { foreground: purple.light },
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
      settings: { foreground: cyan.main },
    },
    {
      name: 'Spread',
      scope: ['keyword.operator.spread', 'keyword.operator.rest'],
      settings: { foreground: red.light, fontStyle: 'bold' },
    },
    {
      name: 'Operators',
      scope: [
        'keyword.operator',
        'keyword.operator.arithmetic',
        'keyword.operator.assignment',
        'keyword.operator.bitwise.shift',
        'entity.name.operator',
      ],
      settings: { foreground: red.light, fontStyle: 'bold' },
    },
    {
      name: 'Punctuation',
      scope: [
        'punctuation',
        'punctuation.definition.string',
        'punctuation.definition.constant.markdown',
        'punctuation.terminator.rule',
        'punctuation.definition.entity',
        'meta.property-list punctuation.separator.key-value',
        'meta.at-rule.mixin punctuation.separator.key-value',
      ],
      settings: { foreground: mix(fg.light, cyan.light, 0.4) },
    },
    {
      name: 'Template & Misc',
      scope: [
        'keyword.control.as',
        'keyword.other',
        'expression.embedded.vue punctuation.definition.tag',
        'text.html.twig meta.tag.inline.any.html',
        'meta.tag.template.value.twig meta.function.arguments.twig',
        'meta.directive.vue punctuation.separator.key-value.html',
        'punctuation.support.type.property-name',
        'text.html.vue-html meta.tag',
        'meta.attribute.directive',
        'punctuation.definition.keyword',
        'punctuation.separator.inheritance.php',
        'keyword.other.template',
        'keyword.other.substitution',
        'meta.at-rule.function variable.parameter.url',
        'meta.embedded.inline.phpx punctuation.definition.tag.begin.html',
        'meta.embedded.inline.phpx punctuation.definition.tag.end.html',
      ],
      settings: { foreground: mix(cyan.light, purple.light, 0.3) },
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
      settings: {
        foreground: mix(pink.light, purple.light, 0.4),
        fontStyle: 'italic',
      },
    },
    {
      name: 'Destructuring Variables',
      scope: [
        'meta.object-binding-pattern-variable.js variable.other.readwrite',
        'meta.object-binding-pattern-variable.ts variable.other.readwrite',
        'meta.array-binding-pattern-variable variable.other.readwrite',
        'variable.other.object.property',
      ],
      settings: { foreground: mix(teal.main, yellow.main, 0.3) },
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
      settings: { foreground: lighten(red.main, 0.12), fontStyle: 'bold' },
    },
  ]
}
