import type { UniversalPalette } from '../palette/index.js'
import { lighten, mix } from '../utils/color.js'
import type { TokenColorConfig } from './color-config-dsl.js'

/**
 * Comments - комментарии в коде
 */
export const commentsTokens: TokenColorConfig[] = [
  {
    name: 'Comment',
    scope: ['comment', 'punctuation.definition.comment'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.neutral.main,
      fontStyle: 'italic',
    },
  },
]

/**
 * Basic tokens - базовые токены (числа, строки, ключевые слова)
 */
export const basicTokens: TokenColorConfig[] = [
  {
    name: 'Number, Boolean, Undefined, Null',
    scope: ['constant.numeric', 'constant.language', 'variable.other.constant'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'String, Symbols',
    scope: ['string', 'constant.other.symbol', 'constant.other.key'],
    settings: {
      foreground: (p: UniversalPalette) =>
        mix(p.chromatic.cyan.main, p.chromatic.blue.main, 0.3),
    },
  },
  {
    name: 'Colors',
    scope: ['constant.other.color'],
    settings: {
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
    },
  },
  {
    name: 'Invalid',
    scope: ['invalid'],
    settings: {
      foreground: (p: UniversalPalette) =>
        mix(p.chromatic.red.main, p.chromatic.cyan.main, 0.7),
    },
  },
  {
    name: 'Storage Type',
    scope: 'storage.type',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'Storage - modifier, var, const, let',
    scope: ['storage.modifier'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Interpolation, PHP tags',
    scope: [
      'punctuation.definition.template-expression',
      'punctuation.section.embedded',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.indigo.light,
    },
  },
  {
    name: 'Operators',
    scope: ['keyword.operator'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Punctuation',
    scope: ['punctuation'],
    settings: {
      foreground: (p: UniversalPalette) =>
        mix(p.foreground.primary.light, p.chromatic.indigo.light, 0.4),
    },
  },
  {
    name: 'Template & Misc',
    scope: ['keyword.other', 'punctuation.definition.keyword'],
    settings: {
      foreground: (p: UniversalPalette) =>
        mix(p.chromatic.blue.light, p.chromatic.cyan.light, 0.2),
    },
  },
  {
    name: 'Import, Export, From, Default',
    scope: [
      'keyword.control.import',
      'keyword.control.export',
      'keyword.control.default',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Keyword',
    scope: ['keyword', 'keyword.control'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.light,
    },
  },
  {
    name: 'Keyword Operator Logical',
    scope: [
      'keyword.operator.logical',
      'keyword.operator.bitwise',
      'keyword.operator.comparison',
      'keyword.operator.relational',
    ],
    settings: {
      foreground: (p: UniversalPalette) => lighten(p.chromatic.red.main, 0.12),
      fontStyle: 'bold',
    },
  },
]

/**
 * Code tokens - код (переменные, функции, классы)
 */
export const codeTokens: TokenColorConfig[] = [
  {
    name: 'Tag',
    scope: 'entity.name.tag',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Tag Punctuation',
    scope: ['punctuation.definition.tag'],
    settings: {
      foreground: (p: UniversalPalette) => p.foreground.primary.main,
    },
  },
  {
    name: 'Variables',
    scope: ['variable', 'support.variable'],
    settings: {
      foreground: (p: UniversalPalette) =>
        mix(p.chromatic.blue.main, p.chromatic.cyan.main, 0.3),
    },
  },
  {
    name: 'Function Arguments',
    scope: ['variable.parameter'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.indigo.main,
    },
  },
  {
    name: 'Object Key',
    scope: ['meta.object-literal.key', 'entity.name.type.hcl'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Object Property',
    scope: ['variable.other.property', 'support.variable.property'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Methods',
    scope: ['entity.name.method', 'variable.function.constructor'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Function Definition',
    scope: ['entity.name.function', 'variable.function'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Constant, Tag Attribute',
    scope: ['constant.character', 'constant.escape'],
    settings: {
      foreground: (p: UniversalPalette) =>
        mix(p.chromatic.blue.main, p.chromatic.cyan.main, 0.2),
    },
  },
  {
    name: 'Inherited Class',
    scope: 'entity.other.inherited-class',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Class, Support, DOM, etc',
    scope: ['support.class', 'support.type', 'support.function'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Class Name',
    scope: 'entity.name',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
  },
]

/**
 * CSS tokens - специфичные для CSS
 */
export const cssTokens: TokenColorConfig[] = [
  {
    name: 'CSS Property Name',
    scope: ['support.type.property-name'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'CSS Tag',
    scope: ['entity.name.tag.css'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'CSS ID',
    scope: ['entity.other.attribute-name.id'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'CSS Class',
    scope: ['entity.other.attribute-name.class'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'CSS Unit',
    scope: ['keyword.other.unit'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
]

/**
 * Markup tokens - XML, HTML
 */
export const markupTokens: TokenColorConfig[] = [
  {
    name: 'Markup Bold',
    scope: ['markup.bold'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markup Italic',
    scope: ['markup.italic'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.light,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Markup Underline',
    scope: ['markup.underline'],
    settings: {
      fontStyle: 'underline',
    },
  },
  {
    name: 'Markup Heading',
    scope: ['markup.heading', 'entity.name.section', 'markup.heading.setext'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markup Quote',
    scope: ['markup.quote'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.neutral.light,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Markup List',
    scope: ['markup.list'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.light,
    },
  },
  {
    name: 'Markup Link',
    scope: ['markup.underline.link', 'string.other.link'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
]

/**
 * Markdown tokens - специфичные для Markdown
 */
export const markdownTokens: TokenColorConfig[] = [
  {
    name: 'Markdown Heading',
    scope: [
      'markup.heading.markdown',
      'markup.heading.setext.markdown',
      'entity.name.section.markdown',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.light,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown Link',
    scope: [
      'string.other.link.title.markdown',
      'string.other.link.description.markdown',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'Markdown Code',
    scope: ['markup.inline.raw.markdown', 'markup.fenced_code.block.markdown'],
    settings: {
      foreground: (p: UniversalPalette) =>
        mix(p.chromatic.cyan.main, p.chromatic.blue.main, 0.4),
    },
  },
  {
    name: 'Markdown Bold',
    scope: ['markup.bold.markdown'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown Italic',
    scope: ['markup.italic.markdown'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.light,
      fontStyle: 'italic',
    },
  },
]

/**
 * Modern tokens - для современных фреймворков и языков
 */
export const modernTokens: TokenColorConfig[] = [
  {
    name: 'JSX Component',
    scope: ['support.class.component'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'JSX Tag',
    scope: ['entity.name.tag.tsx', 'entity.name.tag.jsx'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'TypeScript Type',
    scope: ['entity.name.type.ts', 'entity.name.type.tsx'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'TypeScript Interface',
    scope: ['entity.name.type.interface'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'GraphQL Field',
    scope: ['variable.graphql'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.light,
    },
  },
  {
    name: 'JSON Key',
    scope: ['support.type.property-name.json'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'YAML Key',
    scope: ['entity.name.tag.yaml'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
]
