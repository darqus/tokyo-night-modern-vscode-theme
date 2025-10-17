import { palette } from '../../palette/index'
import type { TokenColor } from '../../token-utils'

export const javaTokens: TokenColor[] = [
  {
    name: 'Java array',
    scope: [
      'storage.type.object.array.java',
      'storage.type.primitive.array.java',
    ],
    settings: {
      foreground: palette.type,
    },
  },
]
