import { palette } from '../../palette/index.js'
import type { TokenColor } from '../../types/index.js'

export function generateCssTokens(): TokenColor[] {
  const { blue, fg, teal, lime, magenta } = palette

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
      settings: { foreground: blue.main },
    },
    {
      name: 'CSS Font',
      scope: ['support.constant.font-name', 'meta.definition.variable'],
      settings: { foreground: fg.light },
    },
    {
      name: 'CSS Class',
      scope: [
        'entity.other.attribute-name.class',
        'meta.at-rule.mixin.scss entity.name.function.scss',
      ],
      settings: { foreground: lime.main },
    },
    {
      name: 'CSS ID',
      scope: 'entity.other.attribute-name.id',
      settings: { foreground: blue.light },
    },
    {
      name: 'CSS Tag',
      scope: 'entity.name.tag.css',
      settings: { foreground: teal.main },
    },
    {
      name: 'CSS Tag Reference, Pseudo & Class Punctuation',
      scope: [
        'entity.other.attribute-name.pseudo-class punctuation.definition.entity',
        'entity.other.attribute-name.pseudo-element punctuation.definition.entity',
        'entity.other.attribute-name.class punctuation.definition.entity',
        'entity.name.tag.reference',
      ],
      settings: { foreground: fg.main },
    },
    {
      name: 'CSS Punctuation',
      scope: 'meta.property-list',
      settings: { foreground: blue.main },
    },
    {
      name: 'CSS at-rule fix',
      scope: [
        'meta.property-list meta.at-rule.if',
        'meta.at-rule.return variable.parameter.url',
        'meta.property-list meta.at-rule.else',
      ],
      settings: { foreground: lime.main },
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
      settings: { foreground: blue.main },
    },
    {
      name: 'SCSS @',
      scope: [
        'meta.at-rule.mixin keyword.control.at-rule.mixin',
        'meta.at-rule.include entity.name.function.scss',
        'meta.at-rule.include keyword.control.at-rule.include',
      ],
      settings: { foreground: magenta.main },
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
      settings: { foreground: magenta.main },
    },
    {
      name: 'SCSS Include Mixin Argument',
      scope: 'meta.property-list meta.at-rule.include',
      settings: { foreground: fg.main },
    },
    {
      name: 'CSS value',
      scope: 'support.constant.property-value',
      settings: { foreground: lime.main },
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
      settings: { foreground: magenta.main },
    },
  ]
}
