import { TokenColor } from '../token-utils'
import { palette } from '../palette'

export const jsonTokens: TokenColor[] = [
  {
    name: 'JSON: Property Name',
    scope: 'support.type.property-name.json',
    settings: { foreground: palette.blue },
  },
  {
    name: 'JSON: String',
    scope: 'string.quoted.double.json',
    settings: { foreground: palette.green },
  },
  {
    name: 'JSON: Number',
    scope: 'constant.numeric.json',
    settings: { foreground: palette.orange },
  },
  {
    name: 'JSON: Boolean',
    scope: 'constant.language.json',
    settings: { foreground: palette.red },
  },
  {
    name: 'JSON: Null',
    scope: 'constant.language.null.json',
    settings: { foreground: palette.pink },
  },
]