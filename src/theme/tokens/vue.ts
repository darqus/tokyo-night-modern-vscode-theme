// Токены синтаксиса для Vue
import { TokenColor } from '../token-utils';

export const vueTokens: TokenColor[] = [
  {
    name: 'Vue: Interpolation',
    scope: [
      'punctuation.definition.interpolation.begin.vue',
      'punctuation.definition.interpolation.end.vue',
    ],
    settings: {
      foreground: '#7dcfff',
    },
  },
  {
    name: 'Vue: Directive',
    scope: ['entity.name.tag.directive.vue'],
    settings: {
      foreground: '#b18af8',
      fontStyle: 'italic',
    },
  },
  {
    name: 'Vue: Directive Attribute',
    scope: ['entity.other.attribute-name.directive.vue'],
    settings: {
      foreground: '#f0ac74',
      fontStyle: 'italic',
    },
  },
  {
    name: 'Vue: Composition API Functions',
    scope: [
      'support.function.import.vue', // ref, reactive, computed, etc.
    ],
    settings: {
      foreground: '#7aa2f7',
    },
  },
  {
    name: 'Pinia: Store Properties',
    scope: [
      'variable.other.property.pinia', // properties in Pinia stores
    ],
    settings: {
      foreground: '#accbf8',
    },
  },
  {
    name: 'Pinia: Getters/Actions',
    scope: [
        'entity.name.function.pinia', // getters and actions in Pinia
    ],
    settings: {
        foreground: '#7aa2f7',
        fontStyle: 'bold'
    }
  }
];