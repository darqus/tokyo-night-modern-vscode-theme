import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

export const pythonTokens: TokenColor[] = [
  {
    name: 'Python: Keyword',
    scope: 'keyword.python',
    settings: { foreground: palette.purple, fontStyle: 'bold' },
  },
  {
    name: 'Python: Function',
    scope: 'entity.name.function.python',
    settings: { foreground: palette.keywordAsync },
  },
  {
    name: 'Python: Class',
    scope: 'entity.name.type.class.python',
    settings: { foreground: palette.yellow, fontStyle: 'bold' },
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
  {
    name: 'Python: Magic Variable',
    scope: 'support.variable.magic.python',
    settings: { foreground: palette.red },
  },
  {
    name: 'Python: Separator',
    scope: [
      'punctuation.separator.period.python',
      'punctuation.separator.element.python',
      'punctuation.parenthesis.begin.python',
      'punctuation.parenthesis.end.python',
    ],
    settings: { foreground: palette.variable },
  },
  {
    name: 'Python: Self Parameter',
    scope: 'variable.parameter.function.language.special.self.python',
    settings: { foreground: palette.yellow },
  },
  {
    name: 'Python: Parameter',
    scope: 'variable.parameter.function.language.python',
    settings: { foreground: palette.funcParam },
  },
  {
    name: 'Python: Type',
    scope: 'support.type.python',
    settings: { foreground: palette.blue },
  },
  {
    name: 'Python: Logical Operator',
    scope: 'keyword.operator.logical.python',
    settings: { foreground: palette.cyan },
  },
  {
    name: 'Python: Function Call',
    scope: 'meta.function-call.generic.python',
    settings: { foreground: palette.keywordAsync },
  },
 {
    name: 'Python: Placeholder',
    scope: 'constant.character.format.placeholder.other.python',
    settings: { foreground: palette.orange },
  },
  {
    name: 'Python: Function Decorator',
    scope: 'meta.function.decorator.python',
    settings: { foreground: palette.annotation },
  },
  {
    name: 'Python: Function Support',
    scope: [
      'support.token.decorator.python',
      'meta.function.decorator.identifier.python',
    ],
    settings: { foreground: palette.blue },
  },
]
