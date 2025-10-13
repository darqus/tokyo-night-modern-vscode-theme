import { TokenColor } from '../../token-utils'
import { palette } from '../../palette/index'

export const cppTokens: TokenColor[] = [
  {
    name: 'C++ variable',
    scope: 'source.cpp meta.block variable.other',
    settings: {
      foreground: palette.variable,
    },
  },
]
