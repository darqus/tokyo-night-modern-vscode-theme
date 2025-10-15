// Токены синтаксиса для Vue
import { TokenColor } from '../../token-utils'
import { palette } from '../../palette/index'

export const vueTokens: TokenColor[] = [
  {
    name: 'Vue component tag',
    scope: [
      'meta.tag.other.html',
      'meta.tag.template.html',
      'meta.tag.script.html',
      'meta.tag.style.html',
    ],
    settings: {
      foreground: palette.htmlTag,
    },
  },
  {
    name: 'Vue template interpolation',
    scope: [
      'meta.embedded.expression.vue punctuation.definition.generic.begin.html',
      'meta.embedded.expression.vue punctuation.definition.generic.end.html',
      'punctuation.definition.template-expression.begin',
      'punctuation.definition.template-expression.end',
    ],
    settings: {
      foreground: palette.keyword,
    },
  },
  {
    name: 'Vue template interpolation text',
    scope: 'meta.embedded.expression.vue',
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'Vue directive',
    scope: [
      'entity.other.attribute-name.html.vue',
      'meta.directive.vue entity.other.attribute-name.html',
      'meta.directive.vue punctuation.separator.key-value.html',
    ],
    settings: {
      foreground: palette.keyword,
    },
  },
  {
    name: 'Vue directive value',
    scope: [
      'meta.directive.vue string.quoted',
      'meta.directive.vue meta.embedded.expression',
    ],
    settings: {
      foreground: palette.string,
    },
  },
  {
    name: 'Vue directive argument',
    scope: [
      'meta.directive.vue variable.parameter',
      'meta.directive.vue variable.other.readwrite.js',
    ],
    settings: {
      foreground: palette.parameter,
    },
  },
  {
    name: 'Vue component name',
    scope: [
      'support.class.component.html',
      'entity.name.tag.custom',
      'meta.tag.custom.start.html',
      'meta.tag.custom.end.html',
    ],
    settings: {
      foreground: palette.htmlComponent,
    },
  },
  {
    name: 'Vue template attribute',
    scope: [
      'text.html.vue meta.tag.block.any.html entity.other.attribute-name.html',
      'text.html.vue meta.tag.start.html entity.other.attribute-name.html',
      'text.html.vue meta.tag.end.html entity.other.attribute-name.html',
    ],
    settings: {
      foreground: palette.attribute,
    },
  },
  {
    name: 'Vue template attribute value',
    scope: [
      'text.html.vue meta.tag.any.html string.quoted',
      'text.html.vue meta.tag.start.html string.quoted',
      'text.html.vue meta.tag.end.html string.quoted',
    ],
    settings: {
      foreground: palette.attributeValue,
    },
  },
  {
    name: 'Vue style tag attribute',
    scope: [
      'meta.tag.start.style.html entity.other.attribute-name.html',
      'meta.tag.end.style.html entity.other.attribute-name.html',
      'meta.tag.start.script.html entity.other.attribute-name.html',
      'meta.tag.end.script.html entity.other.attribute-name.html',
    ],
    settings: {
      foreground: palette.attribute,
    },
  },
  {
    name: 'Vue template tag',
    scope: [
      'meta.tag.template.html entity.name.tag.html',
      'meta.tag.start.template.html entity.name.tag.html',
      'meta.tag.end.template.html entity.name.tag.html',
    ],
    settings: {
      foreground: palette.htmlTag,
    },
  },
  {
    name: 'Vue script tag',
    scope: [
      'meta.tag.script.html entity.name.tag.html',
      'meta.tag.start.script.html entity.name.tag.html',
      'meta.tag.end.script.html entity.name.tag.html',
    ],
    settings: {
      foreground: palette.htmlTag,
    },
  },
  {
    name: 'Vue style tag',
    scope: [
      'meta.tag.style.html entity.name.tag.html',
      'meta.tag.start.style.html entity.name.tag.html',
      'meta.tag.end.style.html entity.name.tag.html',
    ],
    settings: {
      foreground: palette.htmlTag,
    },
  },
  {
    name: 'Vue template expression',
    scope: 'expression.embedded.vue',
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'Vue v-for variable',
    scope: [
      'meta.directive.vue variable.other.readwrite.js',
      'meta.directive.vue variable.parameter.vue',
    ],
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'Vue template comment',
    scope: [
      'text.html.vue comment.block.html',
      'comment.line.double-slash.vue',
    ],
    settings: {
      foreground: palette.comment,
    },
  },
  {
    name: 'Vue script setup',
    scope: [
      'meta.tag.script.html meta.embedded.block.vue',
      'meta.script.vue',
    ],
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'Vue style block',
    scope: [
      'meta.tag.style.html meta.embedded.block.vue',
      'meta.style.vue',
    ],
    settings: {
      foreground: palette.cssValue,
    },
  },
  {
    name: 'Vue template element',
    scope: [
      'meta.template.vue',
      'text.html.vue',
    ],
    settings: {
      foreground: palette.htmlTag,
    },
  },
  {
    name: 'Vue v-if, v-for, v-show, v-else, v-bind, v-on, v-model, etc.',
    scope: [
      'entity.other.attribute-name.html.vue',
      'meta.directive.vue entity.other.attribute-name.html',
    ],
    settings: {
      foreground: palette.keyword,
    },
  },
  {
    name: 'Vue slot',
    scope: [
      'entity.name.tag.special.html',
      'support.variable.property.vue',
    ],
    settings: {
      foreground: palette.property,
    },
  },
  {
    name: 'Vue slot name',
    scope: [
      'meta.directive.vue entity.other.attribute-name.html',
      'meta.directive.vue string',
    ],
    settings: {
      foreground: palette.attribute,
    },
  },
  {
    name: 'Vue ref',
    scope: [
      'variable.other.readwrite.js',
      'meta.directive.vue variable.other.readwrite.js',
    ],
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'Vue lifecycle hooks',
    scope: [
      'support.function.builtin.vue',
      'variable.other.readwrite.js',
    ],
    settings: {
      foreground: palette.function,
    },
  },
  {
    name: 'Vue reactive variables',
    scope: [
      'meta.embedded.expression.vue variable.other.readwrite.js',
      'meta.embedded.expression.vue variable.other.object.js',
    ],
    settings: {
      foreground: palette.variable,
    },
  },
]
