import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

export const yamlTokens: TokenColor[] = [
  {
    name: 'YAML: Entity Name',
    scope: 'entity.name.tag.yaml',
    settings: { foreground: palette.blue },
  },
  {
    name: 'YAML: String',
    scope: 'string.unquoted.plain.out.yaml',
    settings: { foreground: palette.green },
  },
  {
    name: 'YAML: Constant',
    scope: 'constant.language.yaml',
    settings: { foreground: palette.red },
  },
]
