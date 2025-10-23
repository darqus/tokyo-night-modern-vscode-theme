import { palette } from '../../palette'
import type { TokenColor } from '../../types'

export function generateMarkupTokens(): TokenColor[] {
  const { red, blue, cyan, teal, fg, yellow } = palette

  return [
    {
      name: 'Inserted',
      scope: 'markup.inserted',
      settings: { foreground: teal.dark },
    },
    {
      name: 'Deleted',
      scope: 'markup.deleted',
      settings: { foreground: red.muted },
    },
    {
      name: 'Changed',
      scope: 'markup.changed',
      settings: { foreground: blue.light },
    },
    {
      name: 'Regular Expressions',
      scope: 'string.regexp',
      settings: { foreground: palette.special.regex },
    },
    {
      name: 'Regular Expressions - Punctuation',
      scope: 'punctuation.definition.group',
      settings: { foreground: red.main },
    },
    {
      name: 'Regular Expressions - Character Class',
      scope: ['constant.other.character-class.regexp'],
      settings: { foreground: palette.purple.light },
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
      settings: { foreground: cyan.bright },
    },
    {
      name: 'Regular Expressions - Backslash',
      scope: 'constant.character.escape.backslash',
      settings: { foreground: fg.brightest },
    },
    {
      name: 'Escape Characters',
      scope: 'constant.character.escape',
      settings: { foreground: cyan.bright },
    },
    {
      name: 'Decorators',
      scope: [
        'tag.decorator.js entity.name.tag.js',
        'tag.decorator.js punctuation.definition.tag.js',
      ],
      settings: { foreground: blue.medium },
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
      settings: { foreground: palette.purple.light },
    },
    {
      name: 'HTML Character Entity',
      scope: 'text.html constant.character.entity',
      settings: { foreground: cyan.dark },
    },
    {
      name: 'Vue (Vetur / deprecated) Template attributes',
      scope: [
        'entity.other.attribute-name.id.html',
        'meta.directive.vue entity.other.attribute-name.html',
      ],
      settings: { foreground: palette.purple.light },
    },
  ]
}
