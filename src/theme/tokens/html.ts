import { TokenColor } from '../token-utils'
import { palette } from '../palette'

export const htmlTokens: TokenColor[] = [
  {
    name: 'HTML: Tag',
    scope: 'entity.name.tag',
    settings: { foreground: palette.red },
  },
  {
    name: 'HTML: Attribute',
    scope: 'entity.other.attribute-name',
    settings: { foreground: palette.purple },
  },
  {
    name: 'HTML: Punctuation Tag',
    scope: [
      'punctuation.definition.tag',
      'punctuation.definition.tag.begin',
      'punctuation.definition.tag.end',
    ],
    settings: { foreground: palette.redAlpha80 },
  },
  {
    name: 'HTML: Doctype',
    scope: ['entity.name.tag.doctype', 'meta.tag.sgml.doctype.html'],
    settings: { foreground: palette.purple, fontStyle: 'italic' },
  },
]