import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

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
  {
    name: 'Java: Type',
    scope: ['storage.type.annotation.java', 'storage.type.object.array.java'],
    settings: { foreground: palette.yellow },
  },
  {
    name: 'Java: Source',
    scope: 'source.java',
    settings: { foreground: palette.red },
  },
  {
    name: 'Java: Punctuation',
    scope: [
      'punctuation.section.block.begin.java',
      'punctuation.section.block.end.java',
      'punctuation.definition.method-parameters.begin.java',
      'punctuation.definition.method-parameters.end.java',
      'meta.method.identifier.java',
      'punctuation.section.method.begin.java',
      'punctuation.section.method.end.java',
      'punctuation.terminator.java',
      'punctuation.section.class.begin.java',
      'punctuation.section.class.end.java',
      'punctuation.section.inner-class.begin.java',
      'punctuation.section.inner-class.end.java',
      'meta.method-call.java',
      'punctuation.section.class.begin.bracket.curly.java',
      'punctuation.section.class.end.bracket.curly.java',
      'punctuation.section.method.begin.bracket.curly.java',
      'punctuation.section.method.end.bracket.curly.java',
      'punctuation.separator.period.java',
      'punctuation.bracket.angle.java',
      'punctuation.definition.annotation.java',
      'meta.method.body.java',
    ],
    settings: { foreground: palette.variable },
  },
  {
    name: 'Java: Method',
    scope: 'meta.method.java',
    settings: { foreground: palette.keywordAsync },
  },
  {
    name: 'Java: Import',
    scope: [
      'storage.modifier.import.java',
      'storage.type.java',
      'storage.type.generic.java',
    ],
    settings: { foreground: palette.yellow },
  },
  {
    name: 'Java: Instanceof',
    scope: 'keyword.operator.instanceof.java',
    settings: { foreground: palette.purple },
  },
  {
    name: 'Java: Variable Name',
    scope: 'meta.definition.variable.name.java',
    settings: { foreground: palette.red },
  },
]
