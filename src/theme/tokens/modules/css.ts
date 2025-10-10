import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

export const cssTokens: TokenColor[] = [
  {
    name: 'CSS: Tag Name',
    scope: 'entity.name.tag.css',
    settings: { foreground: palette.yellow },
  },
  {
    name: 'CSS: Class Selector',
    scope: 'entity.other.attribute-name.class.css',
    settings: { foreground: palette.orange },
  },
  {
    name: 'CSS: ID Selector',
    scope: 'entity.other.attribute-name.id.css',
    settings: { foreground: palette.blueAlt, fontStyle: 'bold' },
  },
  {
    name: 'CSS: Property Name',
    scope: 'support.type.property-name.css',
    settings: { foreground: palette.foreground },
  },
  {
    name: 'CSS: Property Value',
    scope: 'support.constant.property-value.css',
    settings: { foreground: palette.blue },
  },
  {
    name: 'CSS: Unit',
    scope: 'keyword.other.unit.css',
    settings: { foreground: palette.red },
  },
  {
    name: 'CSS: Function',
    scope: 'support.function.misc.css',
    settings: { foreground: palette.purple },
  },
]
