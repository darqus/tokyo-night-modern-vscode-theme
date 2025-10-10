import { TokenColor } from '../token-utils'
import { palette } from '../palette'

export const cppTokens: TokenColor[] = [
  {
    name: 'C++: Keyword',
    scope: 'keyword.cpp',
    settings: { foreground: palette.purple },
  },
  {
    name: 'C++: Class',
    scope: 'entity.name.type.class.cpp',
    settings: { foreground: palette.yellow },
  },
  {
    name: 'C++: Method',
    scope: 'entity.name.function.cpp',
    settings: { foreground: palette.keywordAsync },
  },
  {
    name: 'C++: Preprocessor',
    scope: 'meta.preprocessor.cpp',
    settings: { foreground: palette.pragma },
  },
]