import { palette } from '../../palette/index'
import type { TokenColor } from '../../token-utils'

export const cppTokens: TokenColor[] = [
  {
    name: 'C++ variable',
    scope: 'source.cpp meta.block variable.other',
    settings: {
      foreground: palette.variable,
    },
  },
]
