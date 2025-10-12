import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

export const cppTokens: TokenColor[] = [
  {
    name: 'C++ variable',
    scope: 'source.cpp meta.block variable.other',
    settings: {
      foreground: palette.variableAlt4,
    },
  },
]
