import { palette } from '../../palette/index.js'
import type { TokenColor } from '../../types/index.js'

export function generateCodeTokens(): TokenColor[] {
  const { fg, indigo, lime, purple, teal } = palette

  return [
    {
      name: 'Tag',
      scope: 'entity.name.tag',
      settings: { foreground: purple.main },
    },
    {
      name: 'Tag Punctuation',
      scope: ['punctuation.definition.tag'],
      settings: { foreground: fg.main },
    },
    {
      name: 'Variables',
      scope: ['variable', 'support.variable'],
      settings: { foreground: lime.main },
    },
    {
      name: 'Function Arguments',
      scope: ['variable.parameter'],
      settings: { foreground: indigo.main },
    },
    {
      name: 'Object Key',
      scope: ['meta.object-literal.key', 'entity.name.type.hcl'],
      settings: { foreground: purple.main },
    },
    {
      name: 'Object Property',
      scope: ['variable.other.property', 'support.variable.property'],
      settings: { foreground: purple.main },
    },
    {
      name: 'Methods',
      scope: ['entity.name.method', 'variable.function.constructor'],
      settings: { foreground: purple.main },
    },
    {
      name: 'Function Definition',
      scope: ['entity.name.function', 'variable.function'],
      settings: { foreground: purple.main },
    },
    {
      name: 'Constant, Tag Attribute',
      scope: ['constant.character', 'constant.escape'],
      settings: { foreground: lime.main },
    },
    {
      name: 'Inherited Class',
      scope: 'entity.other.inherited-class',
      settings: { foreground: purple.main },
    },
    {
      name: 'Class, Support, DOM, etc',
      scope: ['support.class', 'support.type', 'support.function'],
      settings: { foreground: teal.main, fontStyle: 'bold' },
    },
    {
      name: 'Class Name',
      scope: 'entity.name',
      settings: { foreground: teal.main },
    },
  ]
}
