import { palette } from '../../palette/index'
import type { TokenColor } from '../../token-utils'

export const yamlTokens: TokenColor[] = [
  {
    name: 'YAML flow control',
    scope: 'keyword.control.flow.block-scalar.literal',
    settings: {
      foreground: palette.keyword,
      fontStyle: '',
    },
  },
  {
    name: 'YAML key',
    scope: [
      'entity.name.tag.yaml',
      'string.unquoted.plain.out.yaml',
      'string.unquoted.yaml',
    ],
    settings: {
      foreground: palette.tag,
    },
  },
  {
    name: 'YAML string',
    scope: [
      'string.quoted.single.yaml',
      'string.quoted.double.yaml',
      'string.plain.out.yaml',
    ],
    settings: {
      foreground: palette.string,
    },
  },
  {
    name: 'YAML constant',
    scope: ['constant.language.boolean.yaml', 'constant.numeric.yaml'],
    settings: {
      foreground: palette.constant,
    },
  },
  {
    name: 'YAML comment',
    scope: 'comment.line.number-sign.yaml',
    settings: {
      foreground: palette.comment,
    },
  },
]
