import { TokenColor } from '../../token-utils'
import { palette } from '../../palette/index'

export const cssTokens: TokenColor[] = [
  {
    name: 'CSS property name',
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
    settings: {
      foreground: palette.cssProperty,
    },
  },
  {
    name: 'CSS constant',
    scope: ['support.constant.font-name', 'meta.definition.variable'],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'CSS class',
    scope: [
      'entity.other.attribute-name.class',
      'meta.at-rule.mixin.scss entity.name.function.scss',
    ],
    settings: {
      foreground: palette.attribute,
    },
  },
  {
    name: 'CSS id',
    scope: 'entity.other.attribute-name.id',
    settings: {
      foreground: palette.attribute,
    },
  },
  {
    name: 'CSS tag',
    scope: 'entity.name.tag.css',
    settings: {
      foreground: palette.tag,
    },
  },
  {
    name: 'CSS pseudo',
    scope: [
      'entity.other.attribute-name.pseudo-class punctuation.definition.entity',
      'entity.other.attribute-name.pseudo-element punctuation.definition.entity',
      'entity.other.attribute-name.class punctuation.definition.entity',
      'entity.name.tag.reference',
    ],
    settings: {
      foreground: palette.cssPseudo,
    },
  },
  {
    name: 'CSS property list',
    scope: 'meta.property-list',
    settings: {
      foreground: palette.cssProperty,
    },
  },
  {
    name: 'CSS at-rule',
    scope: [
      'meta.property-list meta.at-rule.if',
      'meta.at-rule.return variable.parameter.url',
      'meta.property-list meta.at-rule.else',
    ],
    settings: {
      foreground: palette.cssAtRule,
    },
  },
  {
    name: 'CSS parent selector',
    scope: [
      'entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity.css',
    ],
    settings: {
      foreground: palette.cssProperty,
    },
  },
  {
    name: 'CSS property list',
    scope: 'meta.property-list meta.property-list',
    settings: {
      foreground: palette.cssProperty,
    },
  },
  {
    name: 'CSS mixin',
    scope: [
      'meta.at-rule.mixin keyword.control.at-rule.mixin',
      'meta.at-rule.include entity.name.function.scss',
      'meta.at-rule.include keyword.control.at-rule.include',
    ],
    settings: {
      foreground: palette.cssProperty,
    },
  },
  {
    name: 'CSS mixin keyword',
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
    settings: {
      foreground: palette.keyword,
    },
  },
  {
    name: 'CSS property list',
    scope: 'meta.property-list meta.at-rule.include',
    settings: {
      foreground: palette.cssProperty,
    },
  },
  {
    name: 'CSS support',
    scope: 'support.constant.property-value',
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'Sass keyword',
    scope: 'source.sass keyword.control',
    settings: {
      foreground: palette.keyword,
    },
  },
  {
    name: 'CSS pseudo',
    scope: [
      'entity.other.attribute-name.pseudo-class',
      'entity.other.attribute-name.pseudo-element',
      'entity.other.attribute-name.placeholder',
      'meta.property-list meta.property-value',
    ],
    settings: {
      foreground: palette.cssPseudo,
    },
  },
  {
    name: 'Unit',
    scope: 'keyword.other.unit',
    settings: {
      foreground: palette.keyword,
    },
  },
]
