import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

export const javaTokens: TokenColor[] = [
  {
    name: 'Java array',
    scope: [
      'storage.type.object.array.java',
      'storage.type.primitive.array.java',
    ],
    settings: {
      foreground: palette.objectKey,
    },
  },
]
