import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

export const pythonTokens: TokenColor[] = [
  {
    name: 'Python: Keyword',
    scope: 'keyword.python',
    settings: { foreground: palette.purple },
  },
  {
    name: 'Python: Function',
    scope: 'entity.name.function.python',
    settings: { foreground: palette.keywordAsync },
  },
  {
    name: 'Python: Class',
    scope: 'entity.name.type.class.python',
    settings: { foreground: palette.yellow },
  },
  {
    name: 'Python: Decorator',
    scope: 'entity.name.function.decorator.python',
    settings: { foreground: palette.annotation },
  },
  {
    name: 'Python: String',
    scope: 'string.quoted.single.python',
    settings: { foreground: palette.green },
  },
]
