import { palette } from '../../palette/index.js'
import type { TokenColor } from '../../types/index.js'
import { lighten, mix } from '../../utils/color.js'

export function generateBasicTokens(): TokenColor[] {
  const { orange, green, red, teal, fg, lime, magenta, indigo, purple, peach } =
    palette

  return [
    {
      name: 'Number, Boolean, Undefined, Null',
      scope: [
        'constant.numeric',
        'constant.language',
        'variable.other.constant',
      ],
      settings: { foreground: orange.main },
    },
    {
      name: 'String, Symbols',
      scope: ['string', 'constant.other.symbol', 'constant.other.key'],
      settings: { foreground: green.main },
    },
    {
      name: 'Colors',
      scope: ['constant.other.color'],
      settings: { foreground: fg.light },
    },
    {
      name: 'Invalid',
      scope: ['invalid'],
      settings: { foreground: mix(red.main, orange.main, 0.7) },
    },
    {
      name: 'Storage Type',
      scope: 'storage.type',
      settings: { foreground: peach.main },
    },
    {
      name: 'Storage - modifier, var, const, let',
      scope: ['storage.modifier'],
      settings: { foreground: purple.main },
    },
    {
      name: 'Interpolation, PHP tags',
      scope: [
        'punctuation.definition.template-expression',
        'punctuation.section.embedded',
      ],
      settings: { foreground: indigo.light },
    },
    {
      name: 'Operators',
      scope: ['keyword.operator'],
      settings: { foreground: red.main, fontStyle: 'bold' },
    },
    {
      name: 'Punctuation',
      scope: ['punctuation'],
      settings: { foreground: mix(fg.light, indigo.light, 0.4) },
    },
    {
      name: 'Template & Misc',
      scope: ['keyword.other', 'punctuation.definition.keyword'],
      settings: { foreground: mix(lime.light, magenta.light, 0.3) },
    },
    {
      name: 'Import, Export, From, Default',
      scope: [
        'keyword.control.import',
        'keyword.control.export',
        'keyword.control.default',
      ],
      settings: {
        foreground: teal.main,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Keyword',
      scope: ['keyword', 'keyword.control'],
      settings: { foreground: purple.light },
    },
    {
      name: 'Keyword Operator Logical',
      scope: [
        'keyword.operator.logical',
        'keyword.operator.bitwise',
        'keyword.operator.comparison',
        'keyword.operator.relational',
      ],
      settings: { foreground: lighten(red.main, 0.12), fontStyle: 'bold' },
    },
  ]
}
