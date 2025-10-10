// tokenColors полностью синхронизирован с themes/tokyo-night-modern-color-theme.json
import { palette } from './palette'

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
  {
    name: 'Variable Parameters',
    scope: ['variable.parameter'],
    settings: { foreground: palette.funcParam },
  },
  {
    name: 'Support Variables',
    scope: ['support.variable', 'support.constant'],
    settings: { foreground: palette.variable },
  },
  {
    name: 'Support Functions',
    scope: ['support.function'],
    settings: { foreground: palette.keywordAsync },
  },
  {
    name: 'Support Types',
    scope: ['support.type'],
    settings: { foreground: palette.accentCyan },
  },
  {
    name: 'Support Classes',
    scope: ['support.class'],
    settings: { foreground: palette.accentYellow },
  },
  {
    name: 'Support Constants',
    scope: ['support.constant.property-value'],
    settings: { foreground: palette.accentBlue },
  },
  {
    name: 'Punctuation',
    scope: ['punctuation', 'meta.brace'],
    settings: { foreground: palette.delimiter },
  },
  {
    name: 'Punctuation Definition Parameters',
    scope: ['punctuation.definition.parameters'],
    settings: { foreground: palette.funcParam },
  },
  {
    name: 'Punctuation Section Embedded',
    scope: ['punctuation.section.embedded'],
    settings: { foreground: palette.accentRed },
  },
  {
    name: 'Punctuation Terminator Statement',
    scope: ['punctuation.terminator.statement'],
    settings: { foreground: palette.delimiter },
  },
  {
    name: 'Constant Language',
    scope: ['constant.language'],
    settings: { foreground: palette.accentPink },
  },
  {
    name: 'Constant Numeric',
    scope: ['constant.numeric'],
    settings: { foreground: palette.accentOrange },
  },
  {
    name: 'Constant Character Escape',
    scope: ['constant.character.escape'],
    settings: { foreground: palette.accentPurple },
  },
  {
    name: 'Constant Other Color',
    scope: ['constant.other.color'],
    settings: { foreground: palette.accentGreen },
  },
  {
    name: 'Constant Other Symbol',
    scope: ['constant.other.symbol'],
    settings: { foreground: palette.accentTeal },
  },
  {
    name: 'Entity Name Function',
    scope: ['entity.name.function'],
    settings: { foreground: palette.keywordAsync },
  },
  {
    name: 'Entity Name Type',
    scope: ['entity.name.type'],
    settings: { foreground: palette.accentYellow },
  },
  {
    name: 'Entity Name Class',
    scope: ['entity.name.class'],
    settings: { foreground: palette.accentYellow },
  },
  {
    name: 'Entity Name Interface',
    scope: ['entity.name.interface'],
    settings: { foreground: palette.accentYellow },
  },
  {
    name: 'Entity Name Tag',
    scope: ['entity.name.tag'],
    settings: { foreground: palette.accentRed },
  },
  {
    name: 'Entity Name Attribute',
    scope: ['entity.name.attribute'],
    settings: { foreground: palette.accentPurple },
  },
  {
    name: 'Entity Name Section',
    scope: ['entity.name.section'],
    settings: { foreground: palette.mdHeading },
  },
  {
    name: 'Entity Other Inherited Class',
    scope: ['entity.other.inherited-class'],
    settings: { foreground: palette.accentYellow },
  },
  {
    name: 'Entity Other Attribute Name',
    scope: ['entity.other.attribute-name'],
    settings: { foreground: palette.accentPurple },
  },
  {
    name: 'Storage Type',
    scope: ['storage.type'],
    settings: { foreground: palette.accentPurpleAlt },
  },
  {
    name: 'Storage Modifier',
    scope: ['storage.modifier'],
    settings: { foreground: palette.keywordAccess },
  },
  {
    name: 'Storage Class',
    scope: ['storage.class'],
    settings: { foreground: palette.accentPurple },
  },
  {
    name: 'Storage Type Annotation',
    scope: ['storage.type.annotation'],
    settings: { foreground: palette.accentOrange },
  },
  {
    name: 'Storage Type Primitive',
    scope: ['storage.type.primitive'],
    settings: { foreground: palette.accentCyan },
  },
  {
    name: 'String Regexp',
    scope: ['string.regexp'],
    settings: { foreground: palette.regexp },
  },
  {
    name: 'String Regexp Source Ruby Embedded',
    scope: ['string.regexp source.ruby.embedded'],
    settings: { foreground: palette.accentGreen },
  },
  {
    name: 'String Other Link',
    scope: ['string.other.link'],
    settings: { foreground: palette.accentBlue },
  },
  {
    name: 'Keyword Control',
    scope: ['keyword.control'],
    settings: { foreground: palette.accentPurple },
  },
  {
    name: 'Keyword Operator',
    scope: ['keyword.operator'],
    settings: { foreground: palette.accentPurpleAlt },
  },
  {
    name: 'Keyword Operator New',
    scope: ['keyword.operator.new'],
    settings: { foreground: palette.accentPurple },
  },
  {
    name: 'Keyword Other Special Method',
    scope: ['keyword.other.special-method'],
    settings: { foreground: palette.keywordAsync },
  },
  {
    name: 'Keyword Other Unit',
    scope: ['keyword.other.unit'],
    settings: { foreground: palette.accentRed },
  },
  {
    name: 'Punctuation Definition Keyword',
    scope: ['punctuation.definition.keyword'],
    settings: { foreground: palette.accentRed },
  },
  {
    name: 'Meta Class',
    scope: ['meta.class'],
    settings: { foreground: palette.accentYellow },
  },
  {
    name: 'Meta Class Body',
    scope: ['meta.class.body'],
    settings: { foreground: palette.foreground },
  },
  {
    name: 'Meta Method Call',
    scope: ['meta.method-call'],
    settings: { foreground: palette.keywordAsync },
  },
  {
    name: 'Meta Method',
    scope: ['meta.method'],
    settings: { foreground: palette.keywordAsync },
  },
  {
    name: 'Meta Definition Variable',
    scope: ['meta.definition.variable'],
    settings: { foreground: palette.variable },
  },
  {
    name: 'Meta Link',
    scope: ['meta.link'],
    settings: { foreground: palette.accentBlue },
  },
  {
    name: 'Meta Require',
    scope: ['meta.require'],
    settings: { foreground: palette.keywordAsync },
  },
  {
    name: 'Meta Selector',
    scope: ['meta.selector'],
    settings: { foreground: palette.accentPurple },
  },
  {
    name: 'Meta Separator',
    scope: ['meta.separator'],
    settings: { foreground: palette.delimiter },
  },
  {
    name: 'Meta Function Call',
    scope: ['meta.function-call'],
    settings: { foreground: palette.keywordAsync },
  },
  {
    name: 'Meta Function Call Arguments',
    scope: ['meta.function-call.arguments'],
    settings: { foreground: palette.funcParam },
  },
  {
    name: 'Meta Function Call Python',
    scope: ['meta.function-call.python'],
    settings: { foreground: palette.keywordAsync },
  },
  {
    name: 'Variable Function',
    scope: ['variable.function'],
    settings: { foreground: palette.keywordAsync },
  },
  {
    name: 'Variable Argument',
    scope: ['variable.argument'],
    settings: { foreground: palette.funcParam },
  },
  {
    name: 'Variable Other',
    scope: ['variable.other'],
    settings: { foreground: palette.variable },
  },
  {
    name: 'Variable Other Constant',
    scope: ['variable.other.constant'],
    settings: { foreground: palette.accentCyan },
  },
  {
    name: 'Variable Other Member',
    scope: ['variable.other.member'],
    settings: { foreground: palette.variable },
  },
  {
    name: 'Variable Other Property',
    scope: ['variable.other.property'],
    settings: { foreground: palette.accentBlue },
  },
  {
    name: 'Variable Parameter Function',
    scope: ['variable.parameter.function'],
    settings: { foreground: palette.funcParam },
  },
  {
    name: 'Variable Language',
    scope: ['variable.language'],
    settings: { foreground: palette.accentCyan },
  },
  {
    name: 'Invalid Deprecated',
    scope: ['invalid.deprecated'],
    settings: { foreground: palette.deprecated, fontStyle: 'strikethrough' },
  },
  {
    name: 'Invalid Illegal',
    scope: ['invalid.illegal'],
    settings: { foreground: palette.accentRed },
  },
  {
    name: 'Markup Bold',
    scope: ['markup.bold'],
    settings: { fontStyle: 'bold' },
  },
  {
    name: 'Markup Changed',
    scope: ['markup.changed'],
    settings: { foreground: palette.accentYellow },
  },
  {
    name: 'Markup Deleted',
    scope: ['markup.deleted'],
    settings: { foreground: palette.accentRed },
  },
  {
    name: 'Markup Italic',
    scope: ['markup.italic'],
    settings: { fontStyle: 'italic' },
  },
  {
    name: 'Markup Heading',
    scope: ['markup.heading'],
    settings: { foreground: palette.mdHeading, fontStyle: 'bold' },
  },
  {
    name: 'Markup Link',
    scope: ['markup.underline.link', 'string.other.link'],
    settings: { foreground: palette.accentBlue },
  },
  {
    name: 'Markup Inserted',
    scope: ['markup.inserted'],
    settings: { foreground: palette.accentGreen },
  },
  {
    name: 'Markup Quote',
    scope: ['markup.quote'],
    settings: { foreground: palette.commentDoc },
  },
  {
    name: 'Markup Raw',
    scope: ['markup.raw'],
    settings: { foreground: palette.accentTeal },
  },
  {
    name: 'Constant Other Reference',
    scope: ['constant.other.reference'],
    settings: { foreground: palette.accentBlue },
  },
  {
    name: 'Punctuation Definition String',
    scope: ['punctuation.definition.string'],
    settings: { foreground: palette.accentGreen },
  },
  {
    name: 'Punctuation Definition Variable',
    scope: ['punctuation.definition.variable'],
    settings: { foreground: palette.variable },
  },
  {
    name: 'Punctuation Section Embedded',
    scope: ['punctuation.section.embedded'],
    settings: { foreground: palette.accentRed },
  },
  {
    name: 'Punctuation Section Method',
    scope: ['punctuation.section.method'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Class',
    scope: ['punctuation.section.class'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Inner Class',
    scope: ['punctuation.section.inner-class'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Separator',
    scope: ['punctuation.separator'],
    settings: { foreground: palette.delimiter },
  },
  {
    name: 'Punctuation Terminator',
    scope: ['punctuation.terminator'],
    settings: { foreground: palette.delimiter },
  },
  {
    name: 'Punctuation Array',
    scope: ['punctuation.definition.array'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Array Begin',
    scope: ['punctuation.section.array.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Array End',
    scope: ['punctuation.section.array.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Object',
    scope: ['punctuation.definition.object'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Object Begin',
    scope: ['punctuation.section.object.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Object End',
    scope: ['punctuation.section.object.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Parameters',
    scope: ['punctuation.definition.parameters'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Parameters Begin',
    scope: ['punctuation.section.parameters.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Parameters End',
    scope: ['punctuation.section.parameters.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Block',
    scope: ['punctuation.definition.block'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Brackets',
    scope: ['punctuation.definition.brackets'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Braces',
    scope: ['punctuation.definition.braces'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Parentheses',
    scope: ['punctuation.definition.group'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Group',
    scope: ['punctuation.definition.group'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section',
    scope: ['punctuation.section'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Scope',
    scope: ['punctuation.section.scope'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Separator Method',
    scope: ['punctuation.separator.method'],
    settings: { foreground: palette.accessor },
  },
  {
    name: 'Punctuation Accessor',
    scope: ['punctuation.accessor'],
    settings: { foreground: palette.accessor },
  },
  {
    name: 'Punctuation Dot',
    scope: ['punctuation.separator.dot-access'],
    settings: { foreground: palette.accessor },
  },
  {
    name: 'Punctuation Comma',
    scope: ['punctuation.separator.comma'],
    settings: { foreground: palette.delimiter },
  },
  {
    name: 'Punctuation Semicolon',
    scope: ['punctuation.terminator.statement'],
    settings: { foreground: palette.delimiter },
  },
  {
    name: 'Punctuation Colon',
    scope: ['punctuation.separator.key-value'],
    settings: { foreground: palette.delimiter },
  },
  {
    name: 'Punctuation Equal',
    scope: ['punctuation.separator.argument-label'],
    settings: { foreground: palette.assignOp },
  },
  {
    name: 'Punctuation Arrow',
    scope: ['punctuation.separator.arrow'],
    settings: { foreground: palette.accentPurpleAlt },
  },
  {
    name: 'Punctuation Tilde',
    scope: ['punctuation.separator.tilde'],
    settings: { foreground: palette.accentPurpleAlt },
  },
  {
    name: 'Punctuation Pipe',
    scope: ['punctuation.separator.pipe'],
    settings: { foreground: palette.accentPurpleAlt },
  },
  {
    name: 'Punctuation Ampersand',
    scope: ['punctuation.separator.ampersand'],
    settings: { foreground: palette.accentPurpleAlt },
  },
  {
    name: 'Punctuation Wildcard',
    scope: ['punctuation.definition.wildcard'],
    settings: { foreground: palette.accentPurple },
  },
  {
    name: 'Punctuation Definition Comment',
    scope: ['punctuation.definition.comment'],
    settings: { foreground: palette.foregroundInactive, fontStyle: 'italic' },
  },
  {
    name: 'Punctuation Definition Heading',
    scope: ['punctuation.definition.heading'],
    settings: { foreground: palette.mdHeading },
  },
  {
    name: 'Punctuation Definition Identity',
    scope: ['punctuation.definition.identity'],
    settings: { foreground: palette.accentBlue },
  },
  {
    name: 'Punctuation Definition Array',
    scope: ['punctuation.definition.array'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Definition String Begin/End',
    scope: [
      'punctuation.definition.string.begin',
      'punctuation.definition.string.end',
    ],
    settings: { foreground: palette.accentGreen },
  },
  {
    name: 'Punctuation Definition Variable',
    scope: ['punctuation.definition.variable'],
    settings: { foreground: palette.variable },
  },
  {
    name: 'Punctuation Section Property List',
    scope: ['punctuation.section.property-list'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Function',
    scope: ['punctuation.section.function'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Scope Begin',
    scope: ['punctuation.section.scope.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Scope End',
    scope: ['punctuation.section.scope.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Embedding',
    scope: ['punctuation.section.embedded'],
    settings: { foreground: palette.accentRed },
  },
  {
    name: 'Punctuation Section Method Begin',
    scope: ['punctuation.section.method.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Method End',
    scope: ['punctuation.section.method.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Class Begin',
    scope: ['punctuation.section.class.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Class End',
    scope: ['punctuation.section.class.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Inner Class Begin',
    scope: ['punctuation.section.inner-class.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Inner Class End',
    scope: ['punctuation.section.inner-class.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Block Begin',
    scope: ['punctuation.section.block.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Block End',
    scope: ['punctuation.section.block.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Arguments Begin',
    scope: ['punctuation.section.arguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Arguments End',
    scope: ['punctuation.section.arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Group Begin',
    scope: ['punctuation.section.group.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Group End',
    scope: ['punctuation.section.group.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Array Begin',
    scope: ['punctuation.section.array.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Array End',
    scope: ['punctuation.section.array.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Object Begin',
    scope: ['punctuation.section.object.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Object End',
    scope: ['punctuation.section.object.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Parameters Begin',
    scope: ['punctuation.section.parameters.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Parameters End',
    scope: ['punctuation.section.parameters.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Substitution Begin',
    scope: ['punctuation.section.substitution.begin'],
    settings: { foreground: palette.accentRed },
  },
  {
    name: 'Punctuation Section Substitution End',
    scope: ['punctuation.section.substitution.end'],
    settings: { foreground: palette.accentRed },
  },
  {
    name: 'Punctuation Section Tag Begin',
    scope: ['punctuation.definition.tag.begin'],
    settings: { foreground: palette.accentRed },
  },
  {
    name: 'Punctuation Section Tag End',
    scope: ['punctuation.definition.tag.end'],
    settings: { foreground: palette.accentRed },
  },
  {
    name: 'Punctuation Section Tag',
    scope: ['punctuation.definition.tag'],
    settings: { foreground: palette.accentRed },
  },
  {
    name: 'Punctuation Section Doctype',
    scope: ['punctuation.definition.doctype'],
    settings: { foreground: palette.accentPurple },
  },
  {
    name: 'Punctuation Section Processing Instruction',
    scope: ['punctuation.definition.processing-instruction'],
    settings: { foreground: palette.accentPurple },
  },
  {
    name: 'Punctuation Section Namespace',
    scope: ['punctuation.definition.namespace'],
    settings: { foreground: palette.accentPurple },
  },
  {
    name: 'Punctuation Section Attribute With Value',
    scope: ['punctuation.definition.attribute-with-value'],
    settings: { foreground: palette.accentPurple },
  },
  {
    name: 'Punctuation Section Attribute Name',
    scope: ['punctuation.definition.attribute-name'],
    settings: { foreground: palette.accentPurple },
  },
  {
    name: 'Punctuation Section Attribute Value',
    scope: ['punctuation.definition.attribute-value'],
    settings: { foreground: palette.accentGreen },
  },
  {
    name: 'Punctuation Section Selector',
    scope: ['punctuation.definition.selector'],
    settings: { foreground: palette.accentPurple },
  },
  {
    name: 'Punctuation Section Property Name',
    scope: ['punctuation.definition.property-name'],
    settings: { foreground: palette.accentBlue },
  },
  {
    name: 'Punctuation Section Property Value',
    scope: ['punctuation.definition.property-value'],
    settings: { foreground: palette.accentBlue },
  },
  {
    name: 'Punctuation Section Function Begin',
    scope: ['punctuation.section.function.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Function End',
    scope: ['punctuation.section.function.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Control Structure Begin',
    scope: ['punctuation.section.control-structure.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Control Structure End',
    scope: ['punctuation.section.control-structure.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Conditional Begin',
    scope: ['punctuation.section.conditional.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Conditional End',
    scope: ['punctuation.section.conditional.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Loop Begin',
    scope: ['punctuation.section.loop.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Loop End',
    scope: ['punctuation.section.loop.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Exception Begin',
    scope: ['punctuation.section.exception.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Exception End',
    scope: ['punctuation.section.exception.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Class Body',
    scope: ['punctuation.section.class.body'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Method Body',
    scope: ['punctuation.section.method.body'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Enum Body',
    scope: ['punctuation.section.enum.body'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Interface Body',
    scope: ['punctuation.section.interface.body'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Annotation Begin',
    scope: ['punctuation.section.annotation.begin'],
    settings: { foreground: palette.accentOrange },
  },
  {
    name: 'Punctuation Section Annotation End',
    scope: ['punctuation.section.annotation.end'],
    settings: { foreground: palette.accentOrange },
  },
  {
    name: 'Punctuation Section Generic Begin',
    scope: ['punctuation.definition.generic.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic End',
    scope: ['punctuation.definition.generic.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Type Parameters Begin',
    scope: ['punctuation.definition.typeparameters.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Type Parameters End',
    scope: ['punctuation.definition.typeparameters.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Type Arguments Begin',
    scope: ['punctuation.definition.typearguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Type Arguments End',
    scope: ['punctuation.definition.typearguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Lambda Begin',
    scope: ['punctuation.section.lambda.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Lambda End',
    scope: ['punctuation.section.lambda.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Lambda Parameters Begin',
    scope: ['punctuation.section.lambda.parameters.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Lambda Parameters End',
    scope: ['punctuation.section.lambda.parameters.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Lambda Body Begin',
    scope: ['punctuation.section.lambda.body.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Lambda Body End',
    scope: ['punctuation.section.lambda.body.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Switch Begin',
    scope: ['punctuation.section.switch.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Switch End',
    scope: ['punctuation.section.switch.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Switch Case Begin',
    scope: ['punctuation.section.switch.case.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Switch Case End',
    scope: ['punctuation.section.switch.case.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Switch Default Begin',
    scope: ['punctuation.section.switch.default.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Switch Default End',
    scope: ['punctuation.section.switch.default.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Try Begin',
    scope: ['punctuation.section.try.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Try End',
    scope: ['punctuation.section.try.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Catch Begin',
    scope: ['punctuation.section.catch.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Catch End',
    scope: ['punctuation.section.catch.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Finally Begin',
    scope: ['punctuation.section.finally.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Finally End',
    scope: ['punctuation.section.finally.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Synchronized Begin',
    scope: ['punctuation.section.synchronized.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Synchronized End',
    scope: ['punctuation.section.synchronized.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Anonymous Begin',
    scope: ['punctuation.section.anonymous.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Anonymous End',
    scope: ['punctuation.section.anonymous.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Object Block Begin',
    scope: ['punctuation.section.object.block.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Object Block End',
    scope: ['punctuation.section.object.block.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Array Block Begin',
    scope: ['punctuation.section.array.block.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Array Block End',
    scope: ['punctuation.section.array.block.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Dictionary Begin',
    scope: ['punctuation.section.dictionary.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Dictionary End',
    scope: ['punctuation.section.dictionary.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Set Begin',
    scope: ['punctuation.section.set.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Set End',
    scope: ['punctuation.section.set.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Tuple Begin',
    scope: ['punctuation.section.tuple.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Tuple End',
    scope: ['punctuation.section.tuple.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Record Begin',
    scope: ['punctuation.section.record.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Record End',
    scope: ['punctuation.section.record.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Union Begin',
    scope: ['punctuation.section.union.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Union End',
    scope: ['punctuation.section.union.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Intersection Begin',
    scope: ['punctuation.section.intersection.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Intersection End',
    scope: ['punctuation.section.intersection.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Conditional Expression Begin',
    scope: ['punctuation.section.conditional-expression.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Conditional Expression End',
    scope: ['punctuation.section.conditional-expression.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Ternary Begin',
    scope: ['punctuation.section.ternary.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Ternary End',
    scope: ['punctuation.section.ternary.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Binary Expression Begin',
    scope: ['punctuation.section.binary-expression.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Binary Expression End',
    scope: ['punctuation.section.binary-expression.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Unary Expression Begin',
    scope: ['punctuation.section.unary-expression.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Unary Expression End',
    scope: ['punctuation.section.unary-expression.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Assignment Begin',
    scope: ['punctuation.section.assignment.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Assignment End',
    scope: ['punctuation.section.assignment.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Declaration Begin',
    scope: ['punctuation.section.declaration.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Declaration End',
    scope: ['punctuation.section.declaration.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Definition Begin',
    scope: ['punctuation.section.definition.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Definition End',
    scope: ['punctuation.section.definition.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Implementation Begin',
    scope: ['punctuation.section.implementation.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Implementation End',
    scope: ['punctuation.section.implementation.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Initialization Begin',
    scope: ['punctuation.section.initialization.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Initialization End',
    scope: ['punctuation.section.initialization.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Constructor Begin',
    scope: ['punctuation.section.constructor.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Constructor End',
    scope: ['punctuation.section.constructor.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Destructor Begin',
    scope: ['punctuation.section.destructor.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Destructor End',
    scope: ['punctuation.section.destructor.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Operator Begin',
    scope: ['punctuation.section.operator.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Operator End',
    scope: ['punctuation.section.operator.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Expression Begin',
    scope: ['punctuation.section.expression.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Expression End',
    scope: ['punctuation.section.expression.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Statement Begin',
    scope: ['punctuation.section.statement.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Statement End',
    scope: ['punctuation.section.statement.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Block Statement Begin',
    scope: ['punctuation.section.block-statement.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Block Statement End',
    scope: ['punctuation.section.block-statement.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Expression Statement Begin',
    scope: ['punctuation.section.expression-statement.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Expression Statement End',
    scope: ['punctuation.section.expression-statement.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Declaration Statement Begin',
    scope: ['punctuation.section.declaration-statement.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Declaration Statement End',
    scope: ['punctuation.section.declaration-statement.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Import Statement Begin',
    scope: ['punctuation.section.import-statement.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Import Statement End',
    scope: ['punctuation.section.import-statement.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Export Statement Begin',
    scope: ['punctuation.section.export-statement.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Export Statement End',
    scope: ['punctuation.section.export-statement.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Package Statement Begin',
    scope: ['punctuation.section.package-statement.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Package Statement End',
    scope: ['punctuation.section.package-statement.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Namespace Statement Begin',
    scope: ['punctuation.section.namespace-statement.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Namespace Statement End',
    scope: ['punctuation.section.namespace-statement.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Using Statement Begin',
    scope: ['punctuation.section.using-statement.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Using Statement End',
    scope: ['punctuation.section.using-statement.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Include Statement Begin',
    scope: ['punctuation.section.include-statement.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Include Statement End',
    scope: ['punctuation.section.include-statement.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Require Statement Begin',
    scope: ['punctuation.section.require-statement.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Require Statement End',
    scope: ['punctuation.section.require-statement.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Conditional Compilation Begin',
    scope: ['punctuation.section.conditional-compilation.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Conditional Compilation End',
    scope: ['punctuation.section.conditional-compilation.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Preprocessor Directive Begin',
    scope: ['punctuation.section.preprocessor.directive.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Preprocessor Directive End',
    scope: ['punctuation.section.preprocessor.directive.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Macro Definition Begin',
    scope: ['punctuation.section.macro.definition.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Macro Definition End',
    scope: ['punctuation.section.macro.definition.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Macro Expansion Begin',
    scope: ['punctuation.section.macro.expansion.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Macro Expansion End',
    scope: ['punctuation.section.macro.expansion.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Template Begin',
    scope: ['punctuation.section.template.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Template End',
    scope: ['punctuation.section.template.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Template Parameters Begin',
    scope: ['punctuation.section.template.parameters.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Template Parameters End',
    scope: ['punctuation.section.template.parameters.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Template Arguments Begin',
    scope: ['punctuation.section.template.arguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Template Arguments End',
    scope: ['punctuation.section.template.arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Template Instantiation Begin',
    scope: ['punctuation.section.template.instantiation.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Template Instantiation End',
    scope: ['punctuation.section.template.instantiation.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Type Begin',
    scope: ['punctuation.section.generic-type.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Type End',
    scope: ['punctuation.section.generic-type.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Method Begin',
    scope: ['punctuation.section.generic-method.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Method End',
    scope: ['punctuation.section.generic-method.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Function Begin',
    scope: ['punctuation.section.generic-function.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Function End',
    scope: ['punctuation.section.generic-function.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Constructor Begin',
    scope: ['punctuation.section.generic-constructor.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Constructor End',
    scope: ['punctuation.section.generic-constructor.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Destructor Begin',
    scope: ['punctuation.section.generic-destructor.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Destructor End',
    scope: ['punctuation.section.generic-destructor.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Operator Begin',
    scope: ['punctuation.section.generic-operator.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Operator End',
    scope: ['punctuation.section.generic-operator.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Expression Begin',
    scope: ['punctuation.section.generic-expression.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Expression End',
    scope: ['punctuation.section.generic-expression.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Statement Begin',
    scope: ['punctuation.section.generic-statement.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Statement End',
    scope: ['punctuation.section.generic-statement.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Declaration Begin',
    scope: ['punctuation.section.generic-declaration.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Declaration End',
    scope: ['punctuation.section.generic-declaration.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Definition Begin',
    scope: ['punctuation.section.generic-definition.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Definition End',
    scope: ['punctuation.section.generic-definition.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Implementation Begin',
    scope: ['punctuation.section.generic-implementation.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Implementation End',
    scope: ['punctuation.section.generic-implementation.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Initialization Begin',
    scope: ['punctuation.section.generic-initialization.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Initialization End',
    scope: ['punctuation.section.generic-initialization.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Constructor Call Begin',
    scope: ['punctuation.section.generic-constructor-call.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Constructor Call End',
    scope: ['punctuation.section.generic-constructor-call.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Method Call Begin',
    scope: ['punctuation.section.generic-method-call.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Method Call End',
    scope: ['punctuation.section.generic-method-call.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Function Call Begin',
    scope: ['punctuation.section.generic-function-call.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Function Call End',
    scope: ['punctuation.section.generic-function-call.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Operator Call Begin',
    scope: ['punctuation.section.generic-operator-call.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Operator Call End',
    scope: ['punctuation.section.generic-operator-call.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Expression Call Begin',
    scope: ['punctuation.section.generic-expression-call.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Expression Call End',
    scope: ['punctuation.section.generic-expression-call.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Statement Call Begin',
    scope: ['punctuation.section.generic-statement-call.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Statement Call End',
    scope: ['punctuation.section.generic-statement-call.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Declaration Call Begin',
    scope: ['punctuation.section.generic-declaration-call.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Declaration Call End',
    scope: ['punctuation.section.generic-declaration-call.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Definition Call Begin',
    scope: ['punctuation.section.generic-definition-call.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Definition Call End',
    scope: ['punctuation.section.generic-definition-call.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Implementation Call Begin',
    scope: ['punctuation.section.generic-implementation-call.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Implementation Call End',
    scope: ['punctuation.section.generic-implementation-call.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Initialization Call Begin',
    scope: ['punctuation.section.generic-initialization-call.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Initialization Call End',
    scope: ['punctuation.section.generic-initialization-call.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Constructor Call Arguments Begin',
    scope: ['punctuation.section.generic-constructor-call.arguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Constructor Call Arguments End',
    scope: ['punctuation.section.generic-constructor-call.arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Method Call Arguments Begin',
    scope: ['punctuation.section.generic-method-call.arguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Method Call Arguments End',
    scope: ['punctuation.section.generic-method-call.arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Function Call Arguments Begin',
    scope: ['punctuation.section.generic-function-call.arguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Function Call Arguments End',
    scope: ['punctuation.section.generic-function-call.arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Operator Call Arguments Begin',
    scope: ['punctuation.section.generic-operator-call.arguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Operator Call Arguments End',
    scope: ['punctuation.section.generic-operator-call.arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Expression Call Arguments Begin',
    scope: ['punctuation.section.generic-expression-call.arguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Expression Call Arguments End',
    scope: ['punctuation.section.generic-expression-call.arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Statement Call Arguments Begin',
    scope: ['punctuation.section.generic-statement-call.arguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Statement Call Arguments End',
    scope: ['punctuation.section.generic-statement-call.arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Declaration Call Arguments Begin',
    scope: ['punctuation.section.generic-declaration-call.arguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Declaration Call Arguments End',
    scope: ['punctuation.section.generic-declaration-call.arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Definition Call Arguments Begin',
    scope: ['punctuation.section.generic-definition-call.arguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Definition Call Arguments End',
    scope: ['punctuation.section.generic-definition-call.arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Implementation Call Arguments Begin',
    scope: ['punctuation.section.generic-implementation-call.arguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Implementation Call Arguments End',
    scope: ['punctuation.section.generic-implementation-call.arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Initialization Call Arguments Begin',
    scope: ['punctuation.section.generic-initialization-call.arguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Initialization Call Arguments End',
    scope: ['punctuation.section.generic-initialization-call.arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Constructor Call Parameters Begin',
    scope: ['punctuation.section.generic-constructor-call.parameters.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Constructor Call Parameters End',
    scope: ['punctuation.section.generic-constructor-call.parameters.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Method Call Parameters Begin',
    scope: ['punctuation.section.generic-method-call.parameters.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Method Call Parameters End',
    scope: ['punctuation.section.generic-method-call.parameters.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Function Call Parameters Begin',
    scope: ['punctuation.section.generic-function-call.parameters.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Function Call Parameters End',
    scope: ['punctuation.section.generic-function-call.parameters.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Operator Call Parameters Begin',
    scope: ['punctuation.section.generic-operator-call.parameters.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Operator Call Parameters End',
    scope: ['punctuation.section.generic-operator-call.parameters.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Expression Call Parameters Begin',
    scope: ['punctuation.section.generic-expression-call.parameters.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Expression Call Parameters End',
    scope: ['punctuation.section.generic-expression-call.parameters.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Statement Call Parameters Begin',
    scope: ['punctuation.section.generic-statement-call.parameters.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Statement Call Parameters End',
    scope: ['punctuation.section.generic-statement-call.parameters.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Declaration Call Parameters Begin',
    scope: ['punctuation.section.generic-declaration-call.parameters.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Declaration Call Parameters End',
    scope: ['punctuation.section.generic-declaration-call.parameters.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Definition Call Parameters Begin',
    scope: ['punctuation.section.generic-definition-call.parameters.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Definition Call Parameters End',
    scope: ['punctuation.section.generic-definition-call.parameters.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Implementation Call Parameters Begin',
    scope: ['punctuation.section.generic-implementation-call.parameters.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Implementation Call Parameters End',
    scope: ['punctuation.section.generic-implementation-call.parameters.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Initialization Call Parameters Begin',
    scope: ['punctuation.section.generic-initialization-call.parameters.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Initialization Call Parameters End',
    scope: ['punctuation.section.generic-initialization-call.parameters.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Constructor Call Type Arguments Begin',
    scope: [
      'punctuation.section.generic-constructor-call.type-arguments.begin',
    ],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Constructor Call Type Arguments End',
    scope: ['punctuation.section.generic-constructor-call.type-arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Method Call Type Arguments Begin',
    scope: ['punctuation.section.generic-method-call.type-arguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Method Call Type Arguments End',
    scope: ['punctuation.section.generic-method-call.type-arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Function Call Type Arguments Begin',
    scope: ['punctuation.section.generic-function-call.type-arguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Function Call Type Arguments End',
    scope: ['punctuation.section.generic-function-call.type-arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Operator Call Type Arguments Begin',
    scope: ['punctuation.section.generic-operator-call.type-arguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Operator Call Type Arguments End',
    scope: ['punctuation.section.generic-operator-call.type-arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Expression Call Type Arguments Begin',
    scope: ['punctuation.section.generic-expression-call.type-arguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Expression Call Type Arguments End',
    scope: ['punctuation.section.generic-expression-call.type-arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Statement Call Type Arguments Begin',
    scope: ['punctuation.section.generic-statement-call.type-arguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Statement Call Type Arguments End',
    scope: ['punctuation.section.generic-statement-call.type-arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Declaration Call Type Arguments Begin',
    scope: [
      'punctuation.section.generic-declaration-call.type-arguments.begin',
    ],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Declaration Call Type Arguments End',
    scope: ['punctuation.section.generic-declaration-call.type-arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Definition Call Type Arguments Begin',
    scope: ['punctuation.section.generic-definition-call.type-arguments.begin'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Definition Call Type Arguments End',
    scope: ['punctuation.section.generic-definition-call.type-arguments.end'],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Implementation Call Type Arguments Begin',
    scope: [
      'punctuation.section.generic-implementation-call.type-arguments.begin',
    ],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Implementation Call Type Arguments End',
    scope: [
      'punctuation.section.generic-implementation-call.type-arguments.end',
    ],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Initialization Call Type Arguments Begin',
    scope: [
      'punctuation.section.generic-initialization-call.type-arguments.begin',
    ],
    settings: { foreground: palette.bracket },
  },
  {
    name: 'Punctuation Section Generic Initialization Call Type Arguments End',
    scope: [
      'punctuation.section.generic-initialization-call.type-arguments.end',
    ],
    settings: { foreground: palette.bracket },
  },
]
