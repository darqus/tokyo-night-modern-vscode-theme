// Токены синтаксиса для Vue
import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

export const vueTokens: TokenColor[] = [
  {
    name: 'Vue: Interpolation',
    scope: [
      'punctuation.definition.interpolation.begin.vue',
      'punctuation.definition.interpolation.end.vue',
    ],
    settings: {
      foreground: palette.blue,
    },
  },
  {
    name: 'Vue: Directive',
    scope: ['entity.name.tag.directive.vue'],
    settings: {
      foreground: palette.purple,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Vue: Directive Attribute',
    scope: ['entity.other.attribute-name.directive.vue'],
    settings: {
      foreground: palette.orange,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Vue: Composition API Functions',
    scope: [
      'support.function.import.vue', // ref, reactive, computed, etc.
    ],
    settings: {
      foreground: palette.keywordAsync,
    },
  },
  {
    name: 'Pinia: Store Properties',
    scope: [
      'variable.other.property.pinia', // properties in Pinia stores
    ],
    settings: {
      foreground: palette.funcParam,
    },
  },
  {
    name: 'Pinia: Getters/Actions',
    scope: [
      'entity.name.function.pinia', // getters and actions in Pinia
    ],
    settings: {
      foreground: palette.keywordAsync,
      fontStyle: 'bold',
    },
  },
]
