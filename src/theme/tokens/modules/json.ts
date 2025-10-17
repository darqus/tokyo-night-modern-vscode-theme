import { palette } from '../../palette/index'
import type { TokenColor } from '../../token-utils'

export const jsonTokens: TokenColor[] = [
  {
    name: 'JSON key',
    scope: [
      'source.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: palette.jsonKey,
    },
  },
  {
    name: 'JSON key level 1',
    scope: [
      'source.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: palette.jsonKey,
    },
  },
  {
    name: 'JSON key level 2',
    scope: [
      'source.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: palette.jsonKey,
    },
  },
  {
    name: 'JSON key level 3',
    scope: [
      'source.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: palette.jsonKey,
    },
  },
  {
    name: 'JSON key level 4',
    scope: [
      'source.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: palette.jsonKey,
    },
  },
  {
    name: 'JSON key level 5',
    scope: [
      'source.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: palette.jsonKey,
    },
  },
  {
    name: 'JSON key level 6',
    scope: [
      'source.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: palette.jsonKey,
    },
  },
  {
    name: 'JSON key level 7',
    scope: [
      'source.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: palette.jsonKey,
    },
  },
  {
    name: 'JSON key level 8',
    scope: [
      'source.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: palette.jsonKey,
    },
  },
]
