import { palette } from './palette'

// tokenColors полностью синхронизирован с themes/tokyo-night-modern-color-theme.json
export const tokenColors = [
  {
    name: 'Comment - Line',
    scope: ['comment.line', 'punctuation.definition.comment'],
    settings: { foreground: palette.foregroundInactive, fontStyle: 'italic' },
  },
  {
    name: 'Comment - Block',
    scope: ['comment.block'],
    settings: { foreground: palette.foregroundInactive, fontStyle: 'italic' },
  },
  {
    name: 'Comment - Documentation',
    scope: ['comment.block.documentation', 'comment.line.documentation'],
    settings: { foreground: palette.commentDoc, fontStyle: 'italic' },
  },
  {
    name: 'Comment - TODO/FIXME',
    scope: ['comment keyword.codetag'],
    settings: { foreground: palette.accentYellow, fontStyle: 'bold' },
  },
  {
    name: 'Comment - JSDoc Tags',
    scope: ['storage.type.class.jsdoc', 'entity.name.type.instance.jsdoc'],
    settings: { foreground: palette.jsdocTag },
  },
  {
    name: 'Keyword - Control Flow',
    scope: [
      'keyword.control.flow',
      'keyword.control.conditional',
      'keyword.control.loop',
      'keyword.control.switch',
    ],
    settings: { foreground: palette.accentPurple },
  },
  {
    name: 'Keyword - Declaration',
    scope: [
      'keyword.control.declare',
      'storage.type',
      'storage.modifier.declare',
      'keyword.other.definitelytyped',
    ],
    settings: { foreground: palette.accentPurpleAlt },
  },
  {
    name: 'Keyword - Import/Export',
    scope: [
      'keyword.control.import',
      'keyword.control.export',
      'keyword.control.from',
      'keyword.control.as',
    ],
    settings: { foreground: palette.accentBlue },
  },
  {
    name: 'Keyword - Type System',
    scope: [
      'keyword.control.type',
      'keyword.interface',
      'keyword.class',
      'keyword.extends',
      'keyword.implements',
    ],
    settings: { foreground: palette.accentYellow },
  },
  {
    name: 'Keyword - Access Modifiers',
    scope: [
      'storage.modifier.access',
      'storage.modifier.static',
      'storage.modifier.abstract',
      'storage.modifier.readonly',
    ],
    settings: { foreground: palette.keywordAccess },
  },
  {
    name: 'Keyword - Async/Await',
    scope: [
      'storage.modifier.async',
      'keyword.control.flow.await',
      'keyword.other.await',
    ],
    settings: { foreground: palette.keywordAsync },
  },
  {
    name: 'String Literal',
    scope: ['string.quoted', 'string.interpolated'],
    settings: { foreground: palette.accentGreen },
  },
  {
    name: 'Template String',
    scope: ['string.template', 'string.quasi'],
    settings: { foreground: palette.accentTeal },
  },
  {
    name: 'Template Expression',
    scope: [
      'meta.embedded.expression',
      'punctuation.definition.template-expression',
    ],
    settings: { foreground: palette.accentTeal },
  },
  {
    name: 'Number Literal',
    scope: ['constant.numeric'],
    settings: { foreground: palette.accentOrange },
  },
  {
    name: 'Boolean Literal',
    scope: ['constant.language.boolean'],
    settings: { foreground: palette.accentRed },
  },
  {
    name: 'Null/Undefined Literal',
    scope: ['constant.language.null', 'constant.language.undefined'],
    settings: { foreground: palette.accentPink },
  },
  {
    name: 'Regular Expression',
    scope: ['string.regexp'],
    settings: { foreground: palette.regexp },
  },
  {
    name: 'Variable',
    scope: ['variable.other', 'variable.language'],
    settings: { foreground: palette.variable },
  },
  {
    name: 'Function Parameter',
    scope: ['variable.parameter', 'meta.parameters variable'],
    settings: { foreground: palette.funcParam },
  },
  {
    name: 'Object Property',
    scope: ['variable.other.property', 'meta.object-literal.key'],
    settings: { foreground: palette.accentBlue },
  },
  {
    name: 'Method Call',
    scope: ['variable.function', 'entity.name.function.member'],
    settings: { foreground: palette.mdHeading, fontStyle: 'bold' },
  },
  {
    name: 'Function Declaration',
    scope: ['entity.name.function', 'meta.function-call entity.name.function'],
    settings: { foreground: palette.keywordAsync },
  },
  {
    name: 'Class Name',
    scope: ['entity.name.class', 'entity.name.type.class'],
    settings: { foreground: palette.accentYellow },
  },
  {
    name: 'Interface Name',
    scope: ['entity.name.type.interface'],
    settings: { foreground: palette.interface },
  },
  {
    name: 'Enum Name',
    scope: ['entity.name.type.enum'],
    settings: { foreground: palette.enum },
  },
  {
    name: 'Namespace',
    scope: ['entity.name.namespace', 'entity.name.type.module'],
    settings: { foreground: palette.namespace },
  },
  {
    name: 'Primitive Type',
    scope: ['support.type.primitive', 'keyword.type'],
    settings: { foreground: palette.accentCyan },
  },
  {
    name: 'Generic Type Parameter',
    scope: ['entity.name.type.parameter'],
    settings: { foreground: palette.typeParam },
  },
  {
    name: 'Union Type Operator',
    scope: ['keyword.operator.type.union'],
    settings: { foreground: palette.accentPurpleAlt },
  },
  {
    name: 'Built-in Type',
    scope: ['support.type.builtin'],
    settings: { foreground: palette.builtinType },
  },
  {
    name: 'Custom Type',
    scope: ['entity.name.type'],
    settings: { foreground: palette.accentYellow },
  },
  {
    name: 'Arithmetic Operator',
    scope: ['keyword.operator.arithmetic'],
    settings: { foreground: palette.accentPurpleAlt },
  },
  {
    name: 'Comparison Operator',
    scope: ['keyword.operator.comparison', 'keyword.operator.relational'],
    settings: { foreground: palette.comparisonOp },
  },
  {
    name: 'Logical Operator',
    scope: ['keyword.operator.logical'],
    settings: { foreground: palette.accentPurple },
  },
  {
    name: 'Assignment Operator',
    scope: ['keyword.operator.assignment'],
    settings: { foreground: palette.assignOp },
  },
  {
    name: 'Ternary Operator',
    scope: ['keyword.operator.ternary'],
    settings: { foreground: palette.accentBlue },
  },
  {
    name: 'Spread Operator',
    scope: ['keyword.operator.spread', 'keyword.operator.rest'],
    settings: { foreground: palette.spreadOp },
  },
  {
    name: 'Decorator',
    scope: ['entity.name.function.decorator', 'punctuation.decorator'],
    settings: { foreground: palette.accentOrange },
  },
  {
    name: 'Annotation',
    scope: ['storage.type.annotation'],
    settings: { foreground: palette.annotation },
  },
  {
    name: 'Attribute',
    scope: ['entity.other.attribute-name.attribute'],
    settings: { foreground: palette.attribute },
  },
  {
    name: 'Pragma/Directive',
    scope: ['meta.preprocessor', 'keyword.other.directive'],
    settings: { foreground: palette.pragma },
  },
  {
    name: 'HTML Tag',
    scope: ['entity.name.tag'],
    settings: { foreground: palette.accentRed },
  },
  {
    name: 'HTML Attribute',
    scope: ['entity.other.attribute-name'],
    settings: { foreground: palette.accentPurple },
  },
  {
    name: 'Markdown Heading',
    scope: ['markup.heading', 'entity.name.section.markdown'],
    settings: { foreground: palette.mdHeading, fontStyle: 'bold' },
  },
  {
    name: 'Markdown Emphasis',
    scope: ['markup.italic', 'markup.bold'],
    settings: { foreground: palette.accentYellow },
  },
  {
    name: 'Markdown Link',
    scope: ['markup.underline.link', 'string.other.link'],
    settings: { foreground: palette.accentBlue },
  },
  {
    name: 'Markdown Code',
    scope: ['markup.inline.raw', 'markup.fenced_code'],
    settings: { foreground: palette.mdCode },
  },
  {
    name: 'Bracket',
    scope: ['punctuation.section.group', 'punctuation.section.brackets'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Delimiter',
    scope: ['punctuation.separator', 'punctuation.terminator'],
    settings: { foreground: palette.delimiter },
  },
  {
    name: 'Accessor',
    scope: ['punctuation.accessor', 'punctuation.separator.method'],
    settings: { foreground: palette.accessor },
  },
  {
    name: 'Invalid Code',
    scope: ['invalid', 'invalid.illegal'],
    settings: { foreground: palette.accentRed },
  },
  {
    name: 'Deprecated Code',
    scope: ['invalid.deprecated'],
    settings: { foreground: palette.deprecated, fontStyle: 'strikethrough' },
  },
  {
    name: 'Legacy Keyword',
    scope: ['keyword'],
    settings: { foreground: palette.accentPurple },
  },
  {
    name: 'Legacy String',
    scope: ['string'],
    settings: { foreground: palette.accentGreen },
  },
  {
    name: 'Legacy Operator',
    scope: ['keyword.operator'],
    settings: { foreground: palette.accentPurpleAlt },
  },
]
