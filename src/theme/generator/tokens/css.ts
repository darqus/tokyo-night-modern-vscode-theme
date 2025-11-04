import { palette } from '../../palette'
import type { TokenColor } from '../../types'
import { lighten, mix } from '../../utils/color'

export function generateCssTokens(): TokenColor[] {
  const { blue, green, pink, cyan, yellow, purple, orange, red, fg, teal } =
    palette

  return [
    {
      name: 'CSS Class and Support',
      scope: [
        'source.css support.type.property-name',
        'source.sass support.type.property-name',
        'source.scss support.type.property-name',
        'source.less support.type.property-name',
        'source.stylus support.type.property-name',
        'source.postcss support.type.property-name',
        'support.type.property-name.css',
        'support.type.vendored.property-name',
        'support.type.map.key',
      ],
      settings: { foreground: lighten(blue.main, 0.1) },
    },
    {
      name: 'CSS Font',
      scope: ['support.constant.font-name', 'meta.definition.variable'],
      settings: { foreground: mix(green.main, yellow.main, 0.2) },
    },
    {
      name: 'CSS Class',
      scope: [
        'entity.other.attribute-name.class',
        'meta.at-rule.mixin.scss entity.name.function.scss',
      ],
      settings: { foreground: lighten(yellow.main, 0.1) },
    },
    {
      name: 'CSS ID',
      scope: 'entity.other.attribute-name.id',
      settings: { foreground: mix(pink.light, red.main, 0.3) },
    },
    {
      name: 'CSS Tag',
      scope: 'entity.name.tag.css',
      settings: { foreground: mix(cyan.dark, teal.main, 0.3) },
    },
    {
      name: 'CSS Tag Reference, Pseudo & Class Punctuation',
      scope: [
        'entity.other.attribute-name.pseudo-class punctuation.definition.entity',
        'entity.other.attribute-name.pseudo-element punctuation.definition.entity',
        'entity.other.attribute-name.class punctuation.definition.entity',
        'entity.name.tag.reference',
      ],
      settings: { foreground: mix(yellow.main, orange.main, 0.25) },
    },
    {
      name: 'CSS Punctuation',
      scope: 'meta.property-list',
      settings: { foreground: lighten(blue.main, 0.2) },
    },
    {
      name: 'CSS at-rule fix',
      scope: [
        'meta.property-list meta.at-rule.if',
        'meta.at-rule.return variable.parameter.url',
        'meta.property-list meta.at-rule.else',
      ],
      settings: { foreground: orange.main },
    },
    {
      name: 'CSS Parent Selector Entity',
      scope: [
        'entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity.css',
      ],
      settings: { foreground: teal.main },
    },
    {
      name: 'CSS Punctuation comma fix',
      scope: 'meta.property-list meta.property-list',
      settings: { foreground: lighten(blue.main, 0.2) },
    },
    {
      name: 'SCSS @',
      scope: [
        'meta.at-rule.mixin keyword.control.at-rule.mixin',
        'meta.at-rule.include entity.name.function.scss',
        'meta.at-rule.include keyword.control.at-rule.include',
      ],
      settings: { foreground: purple.light },
    },
    {
      name: 'SCSS Mixins, Extends, Include Keyword',
      scope: [
        'keyword.control.at-rule.include punctuation.definition.keyword',
        'keyword.control.at-rule.mixin punctuation.definition.keyword',
        'meta.at-rule.include keyword.control.at-rule.include',
        'keyword.control.at-rule.extend punctuation.definition.keyword',
        'meta.at-rule.extend keyword.control.at-rule.extend',
        'entity.other.attribute-name.placeholder.css punctuation.definition.entity.css',
        'meta.at-rule.media keyword.control.at-rule.media',
        'meta.at-rule.mixin keyword.control.at-rule.mixin',
        'meta.at-rule.function keyword.control.at-rule.function',
        'keyword.control punctuation.definition.keyword',
      ],
      settings: { foreground: purple.dark },
    },
    {
      name: 'SCSS Include Mixin Argument',
      scope: 'meta.property-list meta.at-rule.include',
      settings: { foreground: fg.light },
    },
    {
      name: 'CSS value',
      scope: 'support.constant.property-value',
      settings: { foreground: orange.main },
    },
    {
      name: 'CSS IDs',
      scope: 'source.sass keyword.control',
      settings: { foreground: blue.main },
    },
    {
      name: 'CSS pseudo selectors',
      scope: [
        'entity.other.attribute-name.pseudo-class',
        'entity.other.attribute-name.pseudo-element',
        'entity.other.attribute-name.placeholder',
        'meta.property-list meta.property-value',
      ],
      settings: { foreground: purple.light },
    },
  ]
}
