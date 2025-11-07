import type { CompatiblePalette } from '../palette/index.js'
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
      foreground: (p: CompatiblePalette) => p.neutral.main,
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
      foreground: (p: CompatiblePalette) => p.orange.main,
    },
  },
  {
    name: 'String, Symbols',
    scope: ['string', 'constant.other.symbol', 'constant.other.key'],
    settings: {
      foreground: (p: CompatiblePalette) => p.green.main,
    },
  },
  {
    name: 'Colors',
    scope: ['constant.other.color'],
    settings: {
      foreground: (p: CompatiblePalette) => p.fg.light,
    },
  },
  {
    name: 'Invalid',
    scope: ['invalid'],
    settings: {
      foreground: (p: CompatiblePalette) => mix(p.red.main, p.orange.main, 0.7),
    },
  },
  {
    name: 'Storage Type',
    scope: 'storage.type',
    settings: {
      foreground: (p: CompatiblePalette) => p.peach.main,
    },
  },
  {
    name: 'Storage - modifier, var, const, let',
    scope: ['storage.modifier'],
    settings: {
      foreground: (p: CompatiblePalette) => p.purple.main,
    },
  },
  {
    name: 'Interpolation, PHP tags',
    scope: [
      'punctuation.definition.template-expression',
      'punctuation.section.embedded',
    ],
    settings: {
      foreground: (p: CompatiblePalette) => p.indigo.light,
    },
  },
  {
    name: 'Operators',
    scope: ['keyword.operator'],
    settings: {
      foreground: (p: CompatiblePalette) => p.red.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Punctuation',
    scope: ['punctuation'],
    settings: {
      foreground: (p: CompatiblePalette) =>
        mix(p.fg.light, p.indigo.light, 0.4),
    },
  },
  {
    name: 'Template & Misc',
    scope: ['keyword.other', 'punctuation.definition.keyword'],
    settings: {
      foreground: (p: CompatiblePalette) =>
        mix(p.lime.light, p.magenta.light, 0.3),
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
      foreground: (p: CompatiblePalette) => p.teal.main,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Keyword',
    scope: ['keyword', 'keyword.control'],
    settings: {
      foreground: (p: CompatiblePalette) => p.purple.light,
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
      foreground: (p: CompatiblePalette) => lighten(p.red.main, 0.12),
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
      foreground: (p: CompatiblePalette) => p.purple.main,
    },
  },
  {
    name: 'Tag Punctuation',
    scope: ['punctuation.definition.tag'],
    settings: {
      foreground: (p: CompatiblePalette) => p.fg.main,
    },
  },
  {
    name: 'Variables',
    scope: ['variable', 'support.variable'],
    settings: {
      foreground: (p: CompatiblePalette) => p.lime.main,
    },
  },
  {
    name: 'Function Arguments',
    scope: ['variable.parameter'],
    settings: {
      foreground: (p: CompatiblePalette) => p.indigo.main,
    },
  },
  {
    name: 'Object Key',
    scope: ['meta.object-literal.key', 'entity.name.type.hcl'],
    settings: {
      foreground: (p: CompatiblePalette) => p.purple.main,
    },
  },
  {
    name: 'Object Property',
    scope: ['variable.other.property', 'support.variable.property'],
    settings: {
      foreground: (p: CompatiblePalette) => p.purple.main,
    },
  },
  {
    name: 'Methods',
    scope: ['entity.name.method', 'variable.function.constructor'],
    settings: {
      foreground: (p: CompatiblePalette) => p.purple.main,
    },
  },
  {
    name: 'Function Definition',
    scope: ['entity.name.function', 'variable.function'],
    settings: {
      foreground: (p: CompatiblePalette) => p.purple.main,
    },
  },
  {
    name: 'Constant, Tag Attribute',
    scope: ['constant.character', 'constant.escape'],
    settings: {
      foreground: (p: CompatiblePalette) => p.lime.main,
    },
  },
  {
    name: 'Inherited Class',
    scope: 'entity.other.inherited-class',
    settings: {
      foreground: (p: CompatiblePalette) => p.purple.main,
    },
  },
  {
    name: 'Class, Support, DOM, etc',
    scope: ['support.class', 'support.type', 'support.function'],
    settings: {
      foreground: (p: CompatiblePalette) => p.teal.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Class Name',
    scope: 'entity.name',
    settings: {
      foreground: (p: CompatiblePalette) => p.teal.main,
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
      foreground: (p: CompatiblePalette) => p.cyan.main,
    },
  },
  {
    name: 'CSS Tag',
    scope: ['entity.name.tag.css'],
    settings: {
      foreground: (p: CompatiblePalette) => p.purple.main,
    },
  },
  {
    name: 'CSS ID',
    scope: ['entity.other.attribute-name.id'],
    settings: {
      foreground: (p: CompatiblePalette) => p.blue.light,
    },
  },
  {
    name: 'CSS Class',
    scope: ['entity.other.attribute-name.class'],
    settings: {
      foreground: (p: CompatiblePalette) => p.blue.light,
    },
  },
  {
    name: 'CSS Unit',
    scope: ['keyword.other.unit'],
    settings: {
      foreground: (p: CompatiblePalette) => p.orange.main,
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
      foreground: (p: CompatiblePalette) => p.orange.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markup Italic',
    scope: ['markup.italic'],
    settings: {
      foreground: (p: CompatiblePalette) => p.purple.light,
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
      foreground: (p: CompatiblePalette) => p.purple.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markup Quote',
    scope: ['markup.quote'],
    settings: {
      foreground: (p: CompatiblePalette) => p.neutral.light,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Markup List',
    scope: ['markup.list'],
    settings: {
      foreground: (p: CompatiblePalette) => p.cyan.light,
    },
  },
  {
    name: 'Markup Link',
    scope: ['markup.underline.link', 'string.other.link'],
    settings: {
      foreground: (p: CompatiblePalette) => p.blue.light,
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
      foreground: (p: CompatiblePalette) => p.purple.light,
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
      foreground: (p: CompatiblePalette) => p.blue.light,
    },
  },
  {
    name: 'Markdown Code',
    scope: ['markup.inline.raw.markdown', 'markup.fenced_code.block.markdown'],
    settings: {
      foreground: (p: CompatiblePalette) => p.green.main,
    },
  },
  {
    name: 'Markdown Bold',
    scope: ['markup.bold.markdown'],
    settings: {
      foreground: (p: CompatiblePalette) => p.orange.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown Italic',
    scope: ['markup.italic.markdown'],
    settings: {
      foreground: (p: CompatiblePalette) => p.purple.light,
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
      foreground: (p: CompatiblePalette) => p.peach.main,
    },
  },
  {
    name: 'JSX Tag',
    scope: ['entity.name.tag.tsx', 'entity.name.tag.jsx'],
    settings: {
      foreground: (p: CompatiblePalette) => p.purple.main,
    },
  },
  {
    name: 'TypeScript Type',
    scope: ['entity.name.type.ts', 'entity.name.type.tsx'],
    settings: {
      foreground: (p: CompatiblePalette) => p.peach.main,
    },
  },
  {
    name: 'TypeScript Interface',
    scope: ['entity.name.type.interface'],
    settings: {
      foreground: (p: CompatiblePalette) => p.peach.main,
    },
  },
  {
    name: 'GraphQL Field',
    scope: ['variable.graphql'],
    settings: {
      foreground: (p: CompatiblePalette) => p.cyan.light,
    },
  },
  {
    name: 'JSON Key',
    scope: ['support.type.property-name.json'],
    settings: {
      foreground: (p: CompatiblePalette) => p.cyan.main,
    },
  },
  {
    name: 'YAML Key',
    scope: ['entity.name.tag.yaml'],
    settings: {
      foreground: (p: CompatiblePalette) => p.cyan.main,
    },
  },
]
