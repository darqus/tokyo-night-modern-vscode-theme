import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

export const htmlTokens: TokenColor[] = [
  {
    name: 'HTML attribute',
    scope: [
      'entity.other.attribute-name',
      'text.html.basic entity.other.attribute-name.html',
      'text.html.basic entity.other.attribute-name',
    ],
    settings: {
      foreground: palette.htmlAttribute,
    },
  },
  {
    name: 'HTML entity',
    scope: 'text.html constant.character.entity',
    settings: {
      foreground: palette.htmlEntity,
    },
  },
  {
    name: 'HTML id',
    scope: [
      'entity.other.attribute-name.id.html',
      'meta.directive.vue entity.other.attribute-name.html',
    ],
    settings: {
      foreground: palette.htmlId,
    },
  },
  {
    name: 'HTML component',
    scope: [
      'entity.name.tag.other.html',
      'entity.name.tag support.class.component',
      'support.class.component.html',
    ],
    settings: {
      foreground: palette.htmlComponent,
    },
  },
  {
    name: 'HTML tag',
    scope: 'entity.name.tag',
    settings: {
      foreground: palette.htmlTag,
    },
  },
]
