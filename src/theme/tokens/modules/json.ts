import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

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
  {
    name: 'JSON: Meta Structure Dictionary String',
    scope: 'source.json meta.structure.dictionary.json > string.quoted.json',
    settings: { foreground: palette.red },
  },
  {
    name: 'JSON: Meta Structure Dictionary String Punctuation',
    scope:
      'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string',
    settings: { foreground: palette.red },
  },
  {
    name: 'JSON: Meta Structure Value String',
    scope: [
      'source.json meta.structure.dictionary.json > value.json > string.quoted.json',
      'source.json meta.structure.array.json > value.json > string.quoted.json',
      'source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation',
      'source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
    ],
    settings: { foreground: palette.green },
  },
  {
    name: 'JSON: Meta Structure Constant',
    scope: [
      'source.json meta.structure.dictionary.json > constant.language.json',
      'source.json meta.structure.array.json > constant.language.json',
    ],
    settings: { foreground: palette.blue },
  },
]
