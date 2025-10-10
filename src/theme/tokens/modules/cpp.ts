import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

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
  {
    name: 'C++: Block',
    scope: [
      'punctuation.section.block.begin.bracket.curly.cpp',
      'punctuation.section.block.end.bracket.curly.cpp',
      'punctuation.terminator.statement.c',
      'punctuation.section.block.begin.bracket.curly.c',
      'punctuation.section.block.end.bracket.curly.c',
      'punctuation.section.parens.begin.bracket.round.c',
      'punctuation.section.parens.end.bracket.round.c',
      'punctuation.section.parameters.begin.bracket.round.c',
      'punctuation.section.parameters.end.bracket.round.c',
    ],
    settings: { foreground: palette.variable },
  },
  {
    name: 'C++: Operator',
    scope: [
      'keyword.operator.assignment.c',
      'keyword.operator.comparison.c',
      'keyword.operator.c',
      'keyword.operator.increment.c',
      'keyword.operator.decrement.c',
      'keyword.operator.bitwise.shift.c',
      'keyword.operator.assignment.cpp',
      'keyword.operator.comparison.cpp',
      'keyword.operator.cpp',
      'keyword.operator.increment.cpp',
      'keyword.operator.decrement.cpp',
      'keyword.operator.bitwise.shift.cpp',
    ],
    settings: { foreground: palette.purple },
  },
  {
    name: 'C++: Punctuation',
    scope: ['punctuation.separator.c', 'punctuation.separator.cpp'],
    settings: { foreground: palette.purple },
  },
  {
    name: 'C++: Posix Type',
    scope: [
      'support.type.posix-reserved.c',
      'support.type.posix-reserved.cpp',
    ],
    settings: { foreground: palette.blue },
  },
  {
    name: 'C++: Sizeof',
    scope: ['keyword.operator.sizeof.c', 'keyword.operator.sizeof.cpp'],
    settings: { foreground: palette.purple },
  },
]
