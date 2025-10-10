import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

export const goTokens: TokenColor[] = [
  {
    name: 'Go: Operator',
    scope: 'keyword.operator.assignment.go',
    settings: { foreground: palette.yellow },
  },
  {
    name: 'Go: Arithmetic Operator',
    scope: ['keyword.operator.arithmetic.go', 'keyword.operator.address.go'],
    settings: { foreground: palette.purple },
  },
  {
    name: 'Go: Package Name',
    scope: 'entity.name.package.go',
    settings: { foreground: palette.yellow },
  },
]