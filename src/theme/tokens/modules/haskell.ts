import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

export const haskellTokens: TokenColor[] = [
  {
    name: 'Haskell: Variable Generic Type',
    scope: 'variable.other.generic-type.haskell',
    settings: { foreground: palette.purple },
  },
  {
    name: 'Haskell: Storage Type',
    scope: 'storage.type.haskell',
    settings: { foreground: palette.orange },
  },
]