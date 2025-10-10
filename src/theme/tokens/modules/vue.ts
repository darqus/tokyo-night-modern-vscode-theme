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
    name: 'Pinia: State',
    scope: [
      'variable.other.property.state.pinia', // e.g. state in defineStore
    ],
    settings: {
      foreground: palette.yellow,
    },
  },
  {
    name: 'Pinia: Getters',
    scope: [
      'entity.name.function.getter.pinia', // e.g. getters in defineStore
      'variable.other.property.getter.pinia',
    ],
    settings: {
      foreground: palette.funcParam,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Pinia: Actions',
    scope: [
      'entity.name.function.action.pinia', // e.g. actions in defineStore
    ],
    settings: {
      foreground: palette.keywordAsync,
      fontStyle: 'bold',
    },
  },
]
