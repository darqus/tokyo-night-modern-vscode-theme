import { TokenColor } from '../token-utils'
import { palette } from '../palette'

export const javaTokens: TokenColor[] = [
  {
    name: 'Java: Keyword',
    scope: 'keyword.java',
    settings: { foreground: palette.purple },
  },
  {
    name: 'Java: Class',
    scope: 'entity.name.type.class.java',
    settings: { foreground: palette.yellow },
  },
  {
    name: 'Java: Method',
    scope: 'entity.name.function.java',
    settings: { foreground: palette.keywordAsync },
  },
  {
    name: 'Java: Annotation',
    scope: 'storage.type.annotation.java',
    settings: { foreground: palette.annotation },
  },
]