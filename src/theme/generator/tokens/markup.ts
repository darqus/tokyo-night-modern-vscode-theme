import { palette } from '../../palette/index.js'
import type { TokenColor } from '../../types/index.js'

export function generateMarkupTokens(): TokenColor[] {
  const { red, blue, teal, fg, yellow, lime, magenta } = palette

  return [
    {
      name: 'Inserted',
      scope: 'markup.inserted',
      settings: { foreground: teal.light },
    },
    {
      name: 'Deleted',
      scope: 'markup.deleted',
      settings: { foreground: red.main },
    },
    {
      name: 'Changed',
      scope: 'markup.changed',
      settings: { foreground: blue.light },
    },
    {
      name: 'Regular Expressions',
      scope: 'string.regexp',
      settings: { foreground: lime.light },
    },
    {
      name: 'Regular Expressions - Punctuation',
      scope: 'punctuation.definition.group',
      settings: { foreground: red.main },
    },
    {
      name: 'Regular Expressions - Character Class',
      scope: ['constant.other.character-class.regexp'],
      settings: { foreground: magenta.light },
    },
    {
      name: 'Regular Expressions - Character Class Set',
      scope: [
        'constant.other.character-class.set.regexp',
        'punctuation.definition.character-class.regexp',
      ],
      settings: { foreground: yellow.main },
    },
    {
      name: 'Regular Expressions - Quantifier',
      scope: 'keyword.operator.quantifier.regexp',
      settings: { foreground: lime.light },
    },
    {
      name: 'Regular Expressions - Backslash',
      scope: 'constant.character.escape.backslash',
      settings: { foreground: fg.light },
    },
    {
      name: 'Escape Characters',
      scope: 'constant.character.escape',
      settings: { foreground: lime.light },
    },
    {
      name: 'Decorators',
      scope: [
        'tag.decorator.js entity.name.tag.js',
        'tag.decorator.js punctuation.definition.tag.js',
      ],
      settings: { foreground: blue.main },
    },
    {
      name: 'CSS Units',
      scope: 'keyword.other.unit',
      settings: { foreground: red.main },
    },
    {
      name: 'HTML Attributes',
      scope: [
        'entity.other.attribute-name',
        'text.html.basic entity.other.attribute-name.html',
        'text.html.basic entity.other.attribute-name',
      ],
      settings: { foreground: magenta.light },
    },
    {
      name: 'HTML Character Entity',
      scope: 'text.html constant.character.entity',
      settings: { foreground: lime.light },
    },
    {
      name: 'Vue (Vetur / deprecated) Template attributes',
      scope: [
        'entity.other.attribute-name.id.html',
        'meta.directive.vue entity.other.attribute-name.html',
      ],
      settings: { foreground: magenta.light },
    },
  ]
}
