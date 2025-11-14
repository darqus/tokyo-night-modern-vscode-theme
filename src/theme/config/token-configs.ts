import type { UniversalPalette } from '../palette/index.js'
import { mix } from '../utils/color.js'
import type { TokenColorConfig } from './color-config-dsl.js'

/**
 * Comments - комментарии в коде
 */
export const commentsTokens: TokenColorConfig[] = [
  {
    name: 'Comment',
    scope: [
      'comment',
      'punctuation.definition.comment',
      'comment.block.documentation',
      'comment.block.documentation punctuation',
      'string.quoted.docstring.multi',
      'string.quoted.docstring.multi.python punctuation.definition.string.begin',
      'string.quoted.docstring.multi.python punctuation.definition.string.end',
      'string.quoted.docstring.multi.python constant.character.escape',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.slate.dark,
      fontStyle: '',
    },
  },
  {
    name: 'Comment TODO/FIXME',
    scope: [
      'comment.todo',
      'comment.fixme',
      'comment.hack',
      'comment.note',
      'comment.todo keyword', // TODO, FIXME, NOTE, HACK
      'comment.fixme keyword',
      'comment.hack keyword',
      'comment.note keyword',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.amber.main, // Золотой для выделения
      fontStyle: 'bold',
    },
  },
  {
    name: 'Comment Doc',
    scope: [
      'keyword.operator.assignment.jsdoc',
      'comment.block.documentation variable',
      'comment.block.documentation storage',
      'comment.block.documentation keyword',
      'comment.block.documentation support',
      'comment.block.documentation markup',
      'comment.block.documentation markup.inline.raw.string.markdown',
      'meta.other.type.phpdoc.php keyword.other.type.php',
      'meta.other.type.phpdoc.php support.other.namespace.php',
      'meta.other.type.phpdoc.php punctuation.separator.inheritance.php',
      'meta.other.type.phpdoc.php support.class',
      'keyword.other.phpdoc.php',
      'log.date',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.slate.dark,
    },
  },
  {
    name: 'Comment Doc Emphasized',
    scope: [
      'meta.other.type.phpdoc.php support.class',
      'comment.block.documentation storage.type',
      'comment.block.documentation punctuation.definition.block.tag',
      'comment.block.documentation entity.name.type.instance',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.slate.dark,
    },
  },
]

/**
 * Basic tokens - базовые токены (числа, строки, ключевые слова)
 */
export const basicTokens: TokenColorConfig[] = [
  {
    name: 'Number, Boolean, Undefined, Null',
    scope: [
      'constant.numeric',
      'constant.language',
      'variable.other.constant',
      'punctuation.definition.constant',
      'support.constant',
      'constant.other.caps',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.orange.main,
    },
  },
  {
    name: 'String, Symbols',
    scope: [
      'string.quoted', // Только обычные строки в кавычках
      'string.quoted.single',
      'string.quoted.double',
      'constant.other.symbol',
      'constant.other.key',
      'meta.attribute-selector',
      'string constant.character',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.green.main,
    },
  },
  {
    name: 'Template Strings',
    scope: [
      'string.template',
      'punctuation.definition.template-expression',
      'string.quoted.template',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.lime.main, // Яркий зеленый для template strings
    },
  },
  {
    name: 'Regular Expressions',
    scope: ['string.regexp'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.orange.light, // Более яркий оранжевый для регулярных выражений
    },
  },
  {
    name: 'Regular Expressions - Punctuation',
    scope: ['punctuation.definition.group.regexp'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
    },
  },
  {
    name: 'Regular Expressions - Character Class',
    scope: ['constant.other.character-class.regexp'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Regular Expressions - Character Class Set',
    scope: [
      'constant.other.character-class.set.regexp',
      'punctuation.definition.character-class.regexp',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.yellow.main,
    },
  },
  {
    name: 'Regular Expressions - Quantifier',
    scope: ['keyword.operator.quantifier.regexp'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'Regular Expressions - Backslash',
    scope: ['constant.character.escape.backslash'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.neutral.light,
    },
  },
  {
    name: 'Escape Sequences',
    scope: [
      'constant.character.escape',
      'constant.character.escape.backslash',
      'punctuation.definition.escape',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.yellow.main, // Желтый для escape последовательностей
      fontStyle: 'bold',
    },
  },
  {
    name: 'Colors',
    scope: [
      'constant.other.color',
      'constant.other.color.rgb-value.hex punctuation.definition.constant',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.light, // Яркий cyan для цветовых литералов
    },
  },
  {
    name: 'URL',
    scope: ['*url*', '*link*', '*uri*'],
    settings: {
      fontStyle: 'underline',
    },
  },
  {
    name: 'Invalid',
    scope: ['invalid', 'invalid.illegal'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
    },
  },
  {
    name: 'Invalid deprecated',
    scope: 'invalid.deprecated',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Storage Type',
    scope: 'storage.type',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Storage - modifier, var, const, let',
    scope: ['meta.var.expr storage.type', 'storage.modifier'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Interpolation, PHP tags, Smarty tags',
    scope: [
      'punctuation.definition.template-expression',
      'punctuation.section.embedded',
      'meta.embedded.line.tag.smarty',
      'support.constant.handlebars',
      'punctuation.section.tag.twig',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'Blade, Twig, Smarty Handlebars keywords',
    scope: [
      'keyword.control.smarty',
      'keyword.control.twig',
      'support.constant.handlebars keyword.control',
      'keyword.operator.comparison.twig',
      'keyword.blade',
      'entity.name.function.blade',
      'meta.tag.blade keyword.other.type.php',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'Blade Directives',
    scope: [
      'keyword.control.blade',
      'punctuation.definition.keyword.blade',
      'begin.blade',
      'end.blade',
      'keyword.other.blade',
      'support.function.blade',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Twig Tags',
    scope: [
      'entity.name.tag.twig',
      'keyword.control.twig',
      'support.function.twig',
      'variable.parameter.twig',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.green.main,
    },
  },
  {
    name: 'Smarty Tags',
    scope: [
      'entity.name.tag.smarty',
      'keyword.control.smarty',
      'support.function.smarty',
      'variable.parameter.smarty',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.orange.main,
    },
  },
  {
    name: 'Handlebars Expressions',
    scope: [
      'support.constant.handlebars',
      'variable.parameter.handlebars',
      'meta.function-call.handlebars',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
  },
  {
    name: 'Spread',
    scope: ['keyword.operator.spread', 'keyword.operator.rest'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Operator, Misc',
    scope: [
      'keyword.operator',
      'keyword.control.as',
      'keyword.other',
      'keyword.operator.bitwise.shift',
      'punctuation',
      'expression.embbeded.vue punctuation.definition.tag',
      'text.html.twig meta.tag.inline.any.html',
      'meta.tag.template.value.twig meta.function.arguments.twig',
      'meta.directive.vue punctuation.separator.key-value.html',
      'punctuation.definition.constant.markdown',
      'punctuation.definition.string',
      'punctuation.support.type.property-name',
      'text.html.vue-html meta.tag',
      'meta.attribute.directive',
      'punctuation.definition.keyword',
      'punctuation.terminator.rule',
      'punctuation.definition.entity',
      'punctuation.separator.inheritance.php',
      'keyword.other.template',
      'keyword.other.substitution',
      'entity.name.operator',
      'meta.property-list punctuation.separator.key-value',
      'meta.at-rule.mixin punctuation.separator.key-value',
      'meta.at-rule.function variable.parameter.url',
      'meta.embedded.inline.phpx punctuation.definition.tag.begin.html',
      'meta.embedded.inline.phpx punctuation.definition.tag.end.html',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'Import, Export, From, Default',
    scope: [
      'keyword.control.module.js',
      'keyword.control.import',
      'keyword.control.export',
      'keyword.control.from',
      'keyword.control.default',
      'meta.import keyword.other',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'Critical Keywords (this, super, self, new, delete, void, as, instanceof)',
    scope: [
      'variable.language.this',
      'variable.language.super',
      'variable.language.self',
      'keyword.other.this',
      'keyword.control.new',
      'keyword.control.delete',
      'keyword.control.void',
      'keyword.operator.new',
      'keyword.operator.delete',
      'keyword.operator.void',
      'keyword.other.self',
      'variable.language.self',
      'variable.language.special.self',
      'variable.language.this punctuation.definition.variable',
      'keyword.control.return',
      'keyword.control.throw',
      'keyword.control.as',
      'keyword.operator.as',
      'keyword.control.instanceof',
      'keyword.operator.instanceof',
      'keyword.control.typeof',
      'keyword.operator.typeof',
      'keyword.control.in',
      'keyword.operator.in',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'TypeScript Type Operators (typeof, keyof, instanceof, in, as, satisfies, extends)',
    scope: [
      'keyword.operator.typeof.ts',
      'keyword.operator.keyof.ts',
      'keyword.operator.instanceof.ts',
      'keyword.operator.in.ts',
      'keyword.operator.as.ts',
      'keyword.operator.satisfies.ts',
      'keyword.other.typeof.ts',
      'keyword.other.keyof.ts',
      'keyword.other.instanceof.ts',
      'keyword.other.in.ts',
      'keyword.other.as.ts',
      'keyword.other.satisfies.ts',
      'keyword.other.extends.ts',
      'storage.modifier.extends.ts',
      'keyword.control.extends.ts',
      'keyword.control.satisfies.ts',
      // Дополнительные scope для лучшего покрытия
      'keyword.typeof.ts',
      'keyword.keyof.ts',
      'keyword.instanceof.ts',
      'keyword.in.ts',
      'keyword.as.ts',
      'keyword.satisfies.ts',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.light,
      fontStyle: 'bold',
    },
  },
  {
    name: 'TypeScript Utility Keywords (readonly, infer, never, unknown, any)',
    scope: [
      'storage.modifier.readonly.ts',
      'storage.modifier.readonly.tsx',
      'keyword.other.readonly.ts',
      'keyword.other.readonly.tsx',
      'keyword.other.infer.ts',
      'keyword.other.never.ts',
      'keyword.other.unknown.ts',
      'keyword.other.any.ts',
      'storage.type.never.ts',
      'storage.type.unknown.ts',
      'storage.type.any.ts',
      'support.type.never.ts',
      'support.type.unknown.ts',
      'support.type.any.ts',
      // Дополнительные варианты
      'variable.other.readonly.ts',
      'variable.other.readonly.tsx',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.orange.main,
      fontStyle: 'italic',
    },
  },
  {
    name: 'TypeScript Declaration Keywords (declare, enum, namespace, module, type)',
    scope: [
      'keyword.control.declare.ts',
      'keyword.other.declare.ts',
      'keyword.control.enum.ts',
      'keyword.other.enum.ts',
      'keyword.control.namespace.ts',
      'keyword.other.namespace.ts',
      'keyword.control.module.ts',
      'keyword.other.module.ts',
      'keyword.control.type.ts',
      'keyword.other.type.ts',
      'storage.type.enum.ts',
      'storage.type.namespace.ts',
      'storage.type.module.ts',
      'storage.type.type.ts',
      // Дополнительные варианты
      'entity.name.type.enum.ts',
      'entity.name.type.namespace.ts',
      'entity.name.type.module.ts',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'TypeScript Access Modifiers (public, private, protected, abstract)',
    scope: [
      'storage.modifier.public.ts',
      'storage.modifier.private.ts',
      'storage.modifier.protected.ts',
      'storage.modifier.abstract.ts',
      'keyword.control.public.ts',
      'keyword.control.private.ts',
      'keyword.control.protected.ts',
      'keyword.control.abstract.ts',
      'storage.modifier.access.ts',
      'keyword.control.access.ts',
      'variable.language.access.ts',
      // Дополнительные варианты
      'storage.modifier.public.tsx',
      'storage.modifier.private.tsx',
      'storage.modifier.protected.tsx',
      'storage.modifier.abstract.tsx',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.indigo.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'TypeScript Control Flow (asserts, is, implements)',
    scope: [
      'keyword.control.asserts.ts',
      'keyword.other.asserts.ts',
      'keyword.control.is.ts',
      'keyword.other.is.ts',
      'keyword.control.implements.ts',
      'keyword.other.implements.ts',
      'storage.modifier.implements.ts',
      // Дополнительные варианты
      'keyword.asserts.ts',
      'keyword.is.ts',
      'keyword.implements.ts',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Keyword',
    scope: ['keyword', 'keyword.control', 'keyword.other.important'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Keyword SQL',
    scope: 'keyword.other.DML',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'Keyword Operator Logical, Arrow, Ternary, Comparison',
    scope: [
      'keyword.operator.logical',
      'storage.type.function',
      'keyword.operator.bitwise',
      'keyword.operator.ternary',
      'keyword.operator.comparison',
      'keyword.operator.relational',
      'keyword.operator.or.regexp',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Async/Await Keywords',
    scope: [
      'keyword.control.async',
      'keyword.other.async',
      'storage.type.async',
      'keyword.control.await',
      'keyword.other.await',
      'storage.type.await',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.pink.main,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Yield and Generator Keywords',
    scope: [
      'keyword.control.yield',
      'keyword.other.yield',
      'storage.type.yield',
      'keyword.control.generator',
      'keyword.other.generator',
      'storage.type.generator',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.pink.main,
      fontStyle: 'italic',
    },
  },
  {
    name: 'PHP Keywords',
    scope: [
      'keyword.control.php',
      'keyword.other.php',
      'storage.type.php',
      'storage.modifier.php',
      'keyword.operator.type.php',
      'keyword.operator.class.php',
      'keyword.operator.namespace.php',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'PHP Variables',
    scope: [
      'variable.other.php',
      'variable.other.property.php',
      'variable.other.global.php',
      'variable.language.php',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  {
    name: 'PHP Functions',
    scope: [
      'entity.name.function.php',
      'support.function.php',
      'meta.function-call.php entity.name.function.php',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  {
    name: 'PHP Classes',
    scope: [
      'entity.name.type.class.php',
      'support.class.php',
      'entity.name.class.php',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'SQL Keywords',
    scope: [
      'keyword.other.DML.sql',
      'keyword.other.DDL.sql',
      'keyword.other.DCL.sql',
      'keyword.other.TCL.sql',
      'storage.type.sql',
      'keyword.control.sql',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'SQL Functions',
    scope: ['support.function.sql', 'entity.name.function.sql'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'SQL Variables',
    scope: ['variable.other.sql', 'variable.parameter.sql'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.orange.main,
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
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
    },
  },
  {
    name: 'Tag - Custom / Unrecognized',
    scope: [
      'entity.name.tag support.class.component',
      'meta.tag.custom entity.name.tag',
      'meta.tag.other.unrecognized.html.derivative entity.name.tag',
      'meta.tag',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.light,
    },
  },
  {
    name: 'Tag Punctuation',
    scope: [
      'punctuation.definition.tag',
      'text.html.php meta.embedded.block.html meta.tag.metadata.script.end.html punctuation.definition.tag.begin.html text.html.basic',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.pink.main,
    },
  },
  {
    name: 'Globals, PHP Constants, etc',
    scope: [
      'constant.other.php',
      'variable.other.global.safer',
      'variable.other.global.safer punctuation.definition.variable',
      'variable.other.global',
      'variable.other.global punctuation.definition.variable',
      'constant.other',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.yellow.main,
    },
  },
  {
    name: 'Variables',
    scope: [
      'variable',
      'support.variable',
      'string constant.other.placeholder',
      'variable.parameter.handlebars',
      'variable.other.object',
      'meta.fstring',
      'meta.function-call meta.function-call.arguments',
      'meta.embedded.inline.phpx constant.other.php',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main, // Улучшенный контраст для переменных
    },
  },
  {
    name: 'Variable Array Key',
    scope: 'meta.array.literal variable',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'Object Key',
    scope: [
      'meta.object-literal.key',
      'entity.name.type.hcl',
      'string.alias.graphql',
      'string.unquoted.graphql',
      'string.unquoted.alias.graphql',
      'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
      'meta.field.declaration.ts variable.object.property',
      'meta.block entity.name.label',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
  },
  {
    name: 'Object Property',
    scope: [
      'variable.other.property',
      'support.variable.property',
      'support.variable.property.dom',
      'meta.function-call variable.other.object.property',
    ],
    settings: {
      foreground: (p: UniversalPalette) =>
        mix(p.chromatic.neutral.light, p.chromatic.cyan.light, 0.5),
    },
  },
  {
    name: 'Object Property (alternative)',
    scope: 'variable.other.object.property',
    settings: {
      foreground: (p: UniversalPalette) =>
        mix(p.chromatic.neutral.light, p.chromatic.cyan.light, 0.5),
    },
  },
  {
    name: 'Object Literal Member lvl 3 (Vue Prop Validation)',
    scope:
      'meta.objectliteral meta.object.member meta.objectliteral meta.object.member meta.objectliteral meta.object.member meta.object-literal.key',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.dark,
    },
  },
  {
    name: 'C-related Block Level Variables',
    scope: 'source.cpp meta.block variable.other',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
    },
  },
  {
    name: 'Other Variable',
    scope: 'support.other.variable',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
    },
  },
  {
    name: 'Methods',
    scope: [
      'meta.class-method.js entity.name.function.js',
      'entity.name.method.js',
      'variable.function.constructor',
      'keyword.other.special-method',
      'storage.type.cs',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  {
    name: 'Function Definition',
    scope: [
      'entity.name.function',
      'variable.other.enummember',
      'meta.function-call',
      'meta.function-call entity.name.function',
      'variable.function',
      'meta.definition.method entity.name.function',
      'meta.object-literal entity.name.function',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  {
    name: 'Function Argument',
    scope: [
      'variable.parameter.function.language.special',
      'variable.parameter',
      'meta.function.parameters punctuation.definition.variable',
      'meta.function.parameter variable',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main, // Изменен на teal для лучшего контраста
    },
  },
  {
    name: 'Constant, Tag Attribute',
    scope: [
      'keyword.other.type.php',
      'storage.type.php',
      'constant.character',
      'constant.escape',
      'keyword.other.unit',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Variable Definition',
    scope: [
      'meta.definition.variable variable.other.constant',
      'meta.definition.variable variable.other.readwrite',
      'variable.declaration.hcl variable.other.readwrite.hcl',
      'meta.mapping.key.hcl variable.other.readwrite.hcl',
      'variable.other.declaration',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
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
    scope: [
      'support.class',
      'support.type',
      'variable.other.readwrite.alias',
      'support.orther.namespace.use.php',
      'meta.use.php',
      'support.other.namespace.php',
      'support.type.sys-types',
      'support.variable.dom',
      'support.constant.math',
      'support.type.object.module',
      'support.constant.json',
      'entity.name.namespace',
      'meta.import.qualifier',
      'variable.other.constant.object',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'Class Name',
    scope: 'entity.name',
    settings: {
      foreground: (p: UniversalPalette) => p.foreground.primary.main, // Основной цвет для имен классов
    },
  },
  {
    name: 'Support Function',
    scope: 'support.function',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
]

/**
 * CSS tokens - специфичные для CSS
 */
export const cssTokens: TokenColorConfig[] = [
  {
    name: 'CSS Property Name',
    scope: [
      'source.css support.type.property-name',
      'source.sass support.type.property-name',
      'source.scss support.type.property-name',
      'source.less support.type.property-name',
      'source.stylus support.type.property-name',
      'source.postcss support.type.property-name',
      'support.type.property-name.css',
      'support.type.vendored.property-name',
      'support.type.map.key',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  {
    name: 'CSS Font',
    scope: ['support.constant.font-name', 'meta.definition.variable'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.green.main,
    },
  },
  {
    name: 'CSS Class',
    scope: [
      'entity.other.attribute-name.class',
      'meta.at-rule.mixin.scss entity.name.function.scss',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.green.main,
    },
  },
  {
    name: 'CSS ID',
    scope: 'entity.other.attribute-name.id',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.light,
    },
  },
  {
    name: 'CSS Tag',
    scope: 'entity.name.tag.css',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'CSS Tag Reference, Pseudo & Class Punctuation',
    scope: [
      'entity.other.attribute-name.pseudo-class punctuation.definition.entity',
      'entity.other.attribute-name.pseudo-element punctuation.definition.entity',
      'entity.other.attribute-name.class punctuation.definition.entity',
      'entity.name.tag.reference',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.yellow.main,
    },
  },
  {
    name: 'CSS Punctuation',
    scope: 'meta.property-list',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'CSS at-rule fix',
    scope: [
      'meta.property-list meta.at-rule.if',
      'meta.at-rule.return variable.parameter.url',
      'meta.property-list meta.at-rule.else',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.orange.main,
    },
  },
  {
    name: 'CSS Parent Selector Entity',
    scope: [
      'entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity.css',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
  },
  {
    name: 'CSS Punctuation comma fix',
    scope: 'meta.property-list meta.property-list',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'SCSS @',
    scope: [
      'meta.at-rule.mixin keyword.control.at-rule.mixin',
      'meta.at-rule.include entity.name.function.scss',
      'meta.at-rule.include keyword.control.at-rule.include',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'SCSS Mixins, Extends, Include Keyword',
    scope: [
      'keyword.control.at-rule.include punctuation.definition.keyword',
      'keyword.control.at-rule.mixin punctuation.definition.keyword',
      'meta.at-rule.include keyword.control.at-rule.include',
      'keyword.control.at-rule.extend punctuation.definition.keyword',
      'meta.at-rule.extend keyword.control.at-rule.extend',
      'entity.other.attribute-name.placeholder.css punctuation.definition.entity.css',
      'meta.at-rule.media keyword.control.at-rule.media',
      'meta.at-rule.mixin keyword.control.at-rule.mixin',
      'meta.at-rule.function keyword.control.at-rule.function',
      'keyword.control punctuation.definition.keyword',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.dark,
    },
  },
  {
    name: 'SCSS Include Mixin Argument',
    scope: 'meta.property-list meta.at-rule.include',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.neutral.light,
    },
  },
  {
    name: 'CSS value',
    scope: 'support.constant.property-value',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.orange.main,
    },
  },
  {
    name: 'CSS @rules',
    scope: [
      'keyword.control.at-rule',
      'keyword.control.at-rule.import',
      'keyword.control.at-rule.media',
      'keyword.control.at-rule.font-face',
      'keyword.control.at-rule.page',
      'keyword.control.at-rule.keyframes',
      'keyword.control.at-rule.supports',
      'keyword.control.at-rule.document',
      'keyword.control.at-rule.viewport',
      'keyword.control.at-rule.region',
      'keyword.control.at-rule.namespace',
      'keyword.control.at-rule.counter-style',
      'keyword.control.at-rule.font-feature-values',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'CSS @rules - Function',
    scope: [
      'meta.at-rule.function variable.parameter.url',
      'meta.at-rule.function support.function.misc',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
]

/**
 * Markup tokens - XML, HTML
 */
export const markupTokens: TokenColorConfig[] = [
  {
    name: 'HTML Attributes',
    scope: [
      'entity.other.attribute-name',
      'text.html.basic entity.other.attribute-name.html',
      'text.html.basic entity.other.attribute-name',
      'meta.tag.attributes entity.other.attribute-name',
      'entity.other.attribute-name.class.html',
      'entity.other.attribute-name.id.html',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.dark, // Темно-синебирюзовый цвет
    },
  },
  {
    name: 'Storage - modifier, var, const, let',
    scope: ['meta.var.expr storage.type', 'storage.modifier'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Access Modifiers (public, private, protected, internal)',
    scope: [
      'storage.modifier.access',
      'keyword.control.access',
      'storage.type.access',
      'keyword.other.access',
      'variable.language.access',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.indigo.main, // Индиго для модификаторов доступа
      fontStyle: 'bold',
    },
  },
  {
    name: 'TypeScript/Java Access Modifiers',
    scope: [
      'storage.modifier.ts',
      'storage.modifier.java',
      'keyword.control.access.ts',
      'keyword.control.access.java',
      'variable.language.access.ts',
      'variable.language.access.java',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.indigo.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Vue (Vetur / deprecated) Template attributes',
    scope: [
      'entity.other.attribute-name.id.html',
      'meta.directive.vue entity.other.attribute-name.html',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: "CSS ID's",
    scope: 'source.sass keyword.control',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  {
    name: 'CSS psuedo selectors',
    scope: [
      'entity.other.attribute-name.pseudo-class',
      'entity.other.attribute-name.pseudo-element',
      'entity.other.attribute-name.placeholder',
      'meta.property-list meta.property-value',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Inserted',
    scope: 'markup.inserted',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.dark,
    },
  },
  {
    name: 'Deleted',
    scope: 'markup.deleted',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.dark,
    },
  },
  {
    name: 'Changed',
    scope: 'markup.changed',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.dark,
    },
  },
  {
    name: 'Critical Operators (=, +, -, *, /, %, &&, ||, !, ===, !==, ==, !=, >, <, >=, <=)',
    scope: [
      'keyword.operator.assignment',
      'keyword.operator.arithmetic',
      'keyword.operator.logical',
      'keyword.operator.comparison',
      'keyword.operator.relational',
      'keyword.operator.bitwise',
      'keyword.operator.ternary',
      'punctuation.separator.key-value',
      'keyword.operator.increment',
      'keyword.operator.decrement',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.light, // Светло-красный для операторов
      fontStyle: 'bold',
    },
  },
  {
    name: 'Operator, Misc',
    scope: [
      'keyword.operator',
      'keyword.other',
      'keyword.operator.bitwise.shift',
      'punctuation',
      'expression.embbeded.vue punctuation.definition.tag',
      'text.html.twig meta.tag.inline.any.html',
      'meta.tag.template.value.twig meta.function.arguments.twig',
      'meta.directive.vue punctuation.separator.key-value.html',
      'punctuation.definition.constant.markdown',
      'punctuation.definition.string',
      'punctuation.support.type.property-name',
      'text.html.vue-html meta.tag',
      'meta.attribute.directive',
      'punctuation.definition.keyword',
      'punctuation.terminator.rule',
      'punctuation.definition.entity',
      'punctuation.separator.inheritance.php',
      'keyword.other.template',
      'keyword.other.substitution',
      'entity.name.operator',
      'meta.property-list punctuation.separator.key-value',
      'meta.at-rule.mixin punctuation.separator.key-value',
      'meta.at-rule.function variable.parameter.url',
      'meta.embedded.inline.phpx punctuation.definition.tag.begin.html',
      'meta.embedded.inline.phpx punctuation.definition.tag.end.html',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'Markup - Underline',
    scope: ['markup.underline', 'markup.underline punctuation'],
    settings: {
      fontStyle: 'underline',
    },
  },
  {
    name: 'Markup - Quote',
    scope: 'markup.quote',
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    name: 'Markup - Table',
    scope: 'markup.table',
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
    name: 'Markdown - Plain',
    scope: ['meta.embedded.block'],
    settings: {
      foreground: (p: UniversalPalette) => p.foreground.secondary.main, // Вторичный цвет для обычного текста
    },
  },
  {
    name: 'Markdown - Markup Raw Inline',
    scope: 'text.html.markdown markup.inline.raw.markdown',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Markdown - Markup Raw Inline Punctuation',
    scope:
      'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.slate.dark, // Более темный для пунктуации
    },
  },
  {
    name: 'Markdown Heading 1',
    scope: [
      'heading.1.markdown entity.name',
      'heading.1.markdown punctuation.definition.heading.markdown',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown Heading 2',
    scope: [
      'heading.2.markdown entity.name',
      'heading.2.markdown punctuation.definition.heading.markdown',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.dark,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown Heading 3',
    scope: [
      'heading.3.markdown entity.name',
      'heading.3.markdown punctuation.definition.heading.markdown',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown Heading 4',
    scope: [
      'heading.4.markdown entity.name',
      'heading.4.markdown punctuation.definition.heading.markdown',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.dark,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown Heading 5',
    scope: [
      'heading.5.markdown entity.name',
      'heading.5.markdown punctuation.definition.heading.markdown',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.neutral.main, // Нейтральный для H5
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown Heading 6',
    scope: [
      'heading.6.markdown entity.name',
      'heading.6.markdown punctuation.definition.heading.markdown',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.neutral.dark,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown Link',
    scope: [
      'string.other.link.title.markdown',
      'string.other.link.description.markdown',
      'string.other.link',
      'markup.underline.link',
      'constant.other.reference.link.markdown',
      'string.other.link.description.title.markdown',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
  },
  {
    name: 'Markdown Code',
    scope: [
      'markup.inline.raw.markdown',
      'markup.fenced_code.block.markdown',
      'markup.fenced_code.block.markdown',
      'markup.inline.raw.string.markdown',
      'variable.language.fenced.markdown',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'Markdown - Blockquote',
    scope: 'markup.quote punctuation.definition.blockquote.markdown',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.slate.dark, // Более темный для цитат
    },
  },
  {
    name: 'Markdown - Entity Section',
    scope: ['entity.name.section.markdown'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'Markdown - Separator',
    scope: 'meta.separator',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.stone.dark, // Каменный для разделителей
      fontStyle: 'bold',
    },
  },
]

/**
 * Makefile tokens - специфичные для Makefile
 */
export const makefileTokens: TokenColorConfig[] = [
  {
    name: 'Makefile - Function Name',
    scope: ['entity.name.function.target.makefile'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Makefile - Keyword Control',
    scope: ['keyword.control.@.makefile'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  {
    name: 'Makefile - Scope',
    scope: ['meta.scope.recipe.makefile'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.green.main,
    },
  },
  {
    name: 'Makefile - Function Call',
    scope: ['meta.scope.function-call.makefile'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  {
    name: 'Makefile - Variable',
    scope: ['variable.other.makefile'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
  },
]

/**
 * Docker tokens - специфичные для Docker
 */
export const dockerTokens: TokenColorConfig[] = [
  {
    name: 'Docker - Keyword',
    scope: ['keyword.other.special-method.dockerfile'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Docker - Source',
    scope: ['source.dockerfile'],
    settings: {
      foreground: (p: UniversalPalette) => p.foreground.secondary.main,
    },
  },
]

/**
 * YAML tokens - специфичные для YAML
 */
export const yamlTokens: TokenColorConfig[] = [
  {
    name: 'YAML - Unquoted String',
    scope: ['string.unquoted.plain.out.yaml'],
    settings: {
      foreground: (p: UniversalPalette) => p.foreground.secondary.main,
    },
  },
]

/**
 * Lua tokens - специфичные для Lua
 */
export const luaTokens: TokenColorConfig[] = [
  {
    name: 'Lua - Function',
    scope: ['support.function.lua'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  {
    name: 'Lua - Keyword',
    scope: ['keyword.local.lua', 'keyword.control.lua'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Lua - Other Variable',
    scope: ['variable.other.lua', 'keyword.operator.logical.shell'],
    settings: {
      foreground: (p: UniversalPalette) => p.foreground.secondary.main,
    },
  },
  {
    name: 'Lua - Other Attribute',
    scope: ['entity.other.attribute.lua'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
  },
  {
    name: 'Lua - Keyword Operator',
    scope: ['keyword.operator.lua'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
    },
  },
]

/**
 * Shell tokens - специфичные для Shell/Bash
 */
export const shellTokens: TokenColorConfig[] = [
  {
    name: 'Shell - Function Name',
    scope: ['entity.name.function.shell'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Shell - Function Builtin',
    scope: ['support.function.builtin.shell', 'keyword.control.shell'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  {
    name: 'Shell - Definition Variable',
    scope: ['variable.other.bracket.shell'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
  },
  {
    name: 'Shell - Source',
    scope: ['source.shell'],
    settings: {
      foreground: (p: UniversalPalette) => p.foreground.secondary.main,
    },
  },
  {
    name: 'Shell - Scope Group',
    scope: ['meta.scope.group.shell'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Shell - String',
    scope: ['string.interpolated.backtick.shell'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.green.main,
    },
  },
]

/**
 * Apache tokens - специфичные для Apache конфигураций
 */
export const apacheTokens: TokenColorConfig[] = [
  {
    name: 'Apache Tag',
    scope: ['entity.tag.apacheconf'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
    },
  },
]

/**
 * Preprocessor tokens - для препроцессоров
 */
export const preprocessorTokens: TokenColorConfig[] = [
  {
    name: 'Preprocessor',
    scope: ['meta.preprocessor'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
  },
]

/**
 * Environment tokens - для переменных окружения
 */
export const envTokens: TokenColorConfig[] = [
  {
    name: 'ENV value',
    scope: ['source.env'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
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
      foreground: (p: UniversalPalette) =>
        mix(p.chromatic.yellow.main, p.chromatic.orange.main, 0.2),
    },
  },
  {
    name: 'JSX Tag',
    scope: ['entity.name.tag.tsx', 'entity.name.tag.jsx'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  {
    name: 'TypeScript Type',
    scope: ['entity.name.type.ts', 'entity.name.type.tsx'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.amber.dark,
    },
  },
  {
    name: 'TypeScript Interface',
    scope: ['entity.name.type.interface'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.amber.dark,
    },
  },
  {
    name: 'GraphQL Field',
    scope: ['variable.graphql'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  {
    name: 'JSON Key - Level 0',
    scope: [
      'source.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  {
    name: 'JSON Key - Level 1',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'JSON Key - Level 2',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'JSON Key - Level 3',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'JSON Key - Level 4',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.yellow.main,
    },
  },
  {
    name: 'JSON Key - Level 5',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'JSON Key - Level 6',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
  },
  {
    name: 'JSON Key - Level 7',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
    },
  },
  {
    name: 'JSON Key - Level 8',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.green.main,
    },
  },
  {
    name: 'Plain Punctuation',
    scope: 'punctuation.definition.list_item.markdown',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'Block Punctuation',
    scope: [
      'meta.block',
      'meta.brace',
      'punctuation.definition.block',
      'punctuation.definition.use',
      'punctuation.definition.class',
      'punctuation.definition.begin.bracket',
      'punctuation.definition.end.bracket',
      'punctuation.definition.switch-expression.begin.bracket',
      'punctuation.definition.switch-expression.end.bracket',
      'punctuation.definition.section.switch-block.begin.bracket',
      'punctuation.definition.section.switch-block.end.bracket',
      'punctuation.definition.group.shell',
      'punctuation.definition.parameters',
      'punctuation.definition.arguments',
      'punctuation.definition.dictionary',
      'punctuation.definition.array',
      'punctuation.section',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'Regular Expressions',
    scope: 'string.regexp',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.light,
    },
  },
  {
    name: 'Regular Expressions - Punctuation',
    scope: 'punctuation.definition.group',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
    },
  },
  {
    name: 'Regular Expressions - Character Class',
    scope: ['constant.other.character-class.regexp'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Regular Expressions - Character Class Set',
    scope: [
      'constant.other.character-class.set.regexp',
      'punctuation.definition.character-class.regexp',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.yellow.main,
    },
  },
  {
    name: 'Regular Expressions - Quantifier',
    scope: 'keyword.operator.quantifier.regexp',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'Regular Expressions - Backslash',
    scope: 'constant.character.escape.backslash',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.neutral.light,
    },
  },
  {
    name: 'Escape Characters',
    scope: 'constant.character.escape',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'Decorators',
    scope: [
      'tag.decorator.js entity.name.tag.js',
      'tag.decorator.js punctuation.definition.tag.js',
      'meta.decorator punctuation.decorator.ts',
      'meta.decorator.ts entity.name.function.ts',
      'meta.decorator.ts punctuation.definition',
      'meta.decorator.ts punctuation.accessor',
      'meta.decorator.ts variable.other.readwrite',
      'meta.decorator.ts meta.function-call',
      'meta.decorator.ts meta.function-call entity.name.function',
      'meta.class.ts meta.decorator.ts punctuation.decorator.ts',
      'meta.class.ts meta.decorator.ts entity.name.function.ts',
      'meta.class.ts meta.decorator.ts variable.other.readwrite.ts',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
      fontStyle: 'italic',
    },
  },
  {
    name: 'TypeScript Generics',
    scope: [
      'meta.type.parameters.ts',
      'meta.type.parameters.tsx',
      'meta.generic-type-argument',
      'meta.type.annotation punctuation.definition.type-parameters',
      'punctuation.definition.typeparameters',
      'punctuation.definition.type-parameters',
      'punctuation.definition.type-parameters.begin',
      'punctuation.definition.type-parameters.end',
      'meta.type.parameters.ts entity.name.type',
      'meta.type.parameters.tsx entity.name.type',
      'meta.type.parameters.ts support.type',
      'meta.type.parameters.tsx support.type',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.yellow.main,
    },
  },
  {
    name: 'TypeScript Generic Keywords',
    scope: [
      'keyword.other.extends.ts',
      'keyword.other.keyof.ts',
      'keyword.other.infer.ts',
      'keyword.other.conditional.type.ts',
      'keyword.other.mapped.type.ts',
      'storage.modifier.in.ts',
      'storage.modifier.out.ts',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Keyword',
    scope: [
      'keyword.control.flow.tsx',
      'keyword.control.flow.ts',
      'storage.modifier.async.tsx',
      'storage.modifier.async.ts',
    ],
    settings: {
      fontStyle: 'italic',
      foreground: (p: UniversalPalette) => p.chromatic.pink.main,
    },
  },
  {
    name: 'Document Javascript',
    scope: ['storage.modifier.async', 'variable.other.object.js'],
    settings: {
      fontStyle: 'italic',
      foreground: (p: UniversalPalette) => p.chromatic.pink.main,
    },
  },
  {
    name: 'JSX/TSX Tags',
    scope: [
      'support.class.component.tsx',
      'entity.name.tag.tsx',
      'entity.name.tag.jsx',
      'meta.jsx entity.name.tag',
      'meta.jsx.tsx entity.name.tag',
      'meta.tag.component.tsx',
      'meta.tag.component.jsx',
      'meta.element.jsx entity.name.tag',
      'meta.element.tsx entity.name.tag',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.light,
    },
  },
  {
    name: 'JSX/TSX Attributes',
    scope: [
      'entity.other.attribute-name.jsx',
      'entity.other.attribute-name.tsx',
      'meta.jsx.attributes',
      'meta.tsx.attributes',
      'meta.tag.attributes.jsx',
      'meta.tag.attributes.tsx',
      'meta.element.jsx entity.other.attribute-name',
      'meta.element.tsx entity.other.attribute-name',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'JSX/TSX Children',
    scope: [
      'meta.jsx.children',
      'meta.tsx.children',
      'meta.element.jsx meta.embedded.expression',
      'meta.element.tsx meta.embedded.expression',
      'meta.element.jsx jsx.children',
      'meta.element.tsx tsx.children',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.foreground.secondary.main,
    },
  },
  {
    name: 'CSS Units',
    scope: 'keyword.other.unit',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
    },
  },
  {
    name: 'Token - Info',
    scope: 'token.info-token',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'Token - Warn',
    scope: 'token.warn-token',
    settings: {
      foreground: (p: UniversalPalette) => p.semantic.warning.main, // Семантический warning цвет
    },
  },
  {
    name: 'Token - Error',
    scope: 'token.error-token',
    settings: {
      foreground: (p: UniversalPalette) => p.semantic.error.main, // Семантический error цвет
    },
  },
  {
    name: 'Token - Debug',
    scope: 'token.debug-token',
    settings: {
      foreground: (p: UniversalPalette) => p.semantic.info.main, // Семантический info цвет для debug
    },
  },
  {
    name: 'Apache Tag',
    scope: 'entity.tag.apacheconf',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
    },
  },
  {
    name: 'Preprocessor',
    scope: ['meta.preprocessor'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
  },
  {
    name: 'ENV value',
    scope: 'source.env',
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  // Rust-specific tokens
  {
    name: 'Rust Lifetime',
    scope: [
      'storage.modifier.lifetime.rust',
      'entity.name.type.lifetime.rust',
      'punctuation.definition.lifetime.rust',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Rust Macro',
    scope: [
      'entity.name.function.macro.rust',
      'support.function.macro.rust',
      'variable.other.metavariable.name.rust',
      'punctuation.definition.macro.rust',
      'keyword.other.rust.macro',
      'meta.macro.rust',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.orange.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Rust Pattern Binding',
    scope: [
      'meta.pattern.rust',
      'variable.other.binding.rust',
      'meta.pattern-binding.rust',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'Rust Type Parameter',
    scope: ['meta.type_params.rust', 'entity.name.type.parameter.rust'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
  },
  {
    name: 'Rust Keyword',
    scope: [
      'storage.type.rust',
      'storage.modifier.rust',
      'keyword.other.rust',
      'keyword.control.rust',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
    },
  },
  {
    name: 'Rust Pattern Matching Keyword',
    scope: [
      'keyword.control.flow.rust',
      'keyword.match.rust',
      'keyword.other.match.rust',
      'keyword.control.conditional.if-let.rust',
      'keyword.control.conditional.while-let.rust',
      'keyword.control.conditional.for-let.rust',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Rust Derive',
    scope: [
      'meta.annotation.rust',
      'meta.attribute.rust',
      'entity.name.function.attribute.rust',
      'keyword.other.rust.attribute',
      'keyword.other.rust.derive',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.amber.main,
      fontStyle: 'italic',
    },
  },
  // Go-specific tokens
  {
    name: 'Go Channel',
    scope: [
      'keyword.channel.go',
      'channel.type.go',
      'keyword.operator.channel.go',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'Go Goroutine',
    scope: ['keyword.goroutine.go', 'support.function.goroutine.go'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.green.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Go Interface',
    scope: ['storage.type.interface.go', 'entity.name.type.interface.go'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.yellow.dark,
    },
  },
  {
    name: 'Go Method Receiver',
    scope: ['variable.parameter.receiver.go', 'meta.function.receiver.go'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.amber.main,
    },
  },
  {
    name: 'Go Package',
    scope: ['entity.name.type.package.go', 'support.package.go'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  // Python-specific tokens
  {
    name: 'Python Keywords',
    scope: [
      'keyword.control.python',
      'keyword.other.python',
      'storage.type.python',
      'storage.modifier.python',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Python Functions',
    scope: [
      'entity.name.function.python',
      'meta.function-call.python entity.name.function.python',
      'support.function.python',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  {
    name: 'Python Classes',
    scope: ['entity.name.type.class.python', 'support.type.python'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'Python Decorators',
    scope: [
      'meta.function.decorator.python',
      'entity.name.function.decorator.python',
      'punctuation.definition.decorator.python',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.orange.main,
      fontStyle: 'italic',
    },
  },
  // Ruby-specific tokens
  {
    name: 'Ruby Keywords',
    scope: [
      'keyword.control.ruby',
      'keyword.other.ruby',
      'storage.type.ruby',
      'storage.modifier.ruby',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Ruby Symbols',
    scope: [
      'constant.other.symbol.ruby',
      'punctuation.definition.constant.ruby',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
  },
  {
    name: 'Ruby Methods',
    scope: ['entity.name.function.ruby', 'support.function.ruby'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  // Java-specific tokens
  {
    name: 'Java Keywords',
    scope: [
      'keyword.control.java',
      'keyword.other.java',
      'storage.type.java',
      'storage.modifier.java',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Java Classes',
    scope: ['entity.name.type.class.java', 'support.class.java'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'Java Annotations',
    scope: [
      'meta.annotation.java',
      'punctuation.definition.annotation.java',
      'storage.type.annotation.java',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.green.main,
      fontStyle: 'italic',
    },
  },
  // C/C++ specific tokens
  {
    name: 'C/C++ Keywords',
    scope: [
      'keyword.control.c',
      'keyword.control.cpp',
      'storage.type.c',
      'storage.type.cpp',
      'storage.modifier.c',
      'storage.modifier.cpp',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'C/C++ Functions',
    scope: [
      'entity.name.function.c',
      'entity.name.function.cpp',
      'support.function.c',
      'support.function.cpp',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  {
    name: 'C/C++ Macros',
    scope: [
      'entity.name.function.preprocessor.c',
      'meta.preprocessor.macro.c',
      'meta.preprocessor.macro.cpp',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.orange.main,
      fontStyle: 'bold',
    },
  },
  // Go-specific tokens
  {
    name: 'Go Channel',
    scope: [
      'keyword.channel.go',
      'channel.type.go',
      'keyword.operator.channel.go',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'Go Goroutine',
    scope: ['keyword.goroutine.go', 'support.function.goroutine.go'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.green.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Go Interface',
    scope: ['storage.type.interface.go', 'entity.name.type.interface.go'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.yellow.dark,
    },
  },
  {
    name: 'Go Method Receiver',
    scope: ['variable.parameter.receiver.go', 'meta.function.receiver.go'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.amber.main,
    },
  },
  {
    name: 'Go Package',
    scope: ['entity.name.type.package.go', 'support.package.go'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  // Vue 3 Composition API tokens
  {
    name: 'Vue 3 Composable',
    scope: [
      'support.function.composable.vue',
      'entity.name.function.composable.vue',
      'variable.composable.vue',
      'function.composable.v3',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.green.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Vue 3 Composition API Function',
    scope: [
      'support.function.composition-api.vue',
      'entity.name.function.composition-api.vue',
      'function.composition.api',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
  },
  {
    name: 'Vue 3 Directive',
    scope: [
      'entity.other.attribute-name.directive.vue',
      'support.directive.vue',
      'keyword.directive.vue',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Vue 3 Setup Script',
    scope: [
      'meta.setup.vue',
      'punctuation.section.embedded.begin.vue',
      'punctuation.section.embedded.end.vue',
      'meta.script.setup',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
  },
  {
    name: 'Vue 3 Template Ref',
    scope: ['support.function.template.ref.vue', 'variable.template.ref.vue'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
    },
  },
  // Python-specific tokens
  {
    name: 'Python Keywords',
    scope: [
      'keyword.control.python',
      'keyword.other.python',
      'storage.type.python',
      'storage.modifier.python',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Python Functions',
    scope: [
      'entity.name.function.python',
      'meta.function-call.python entity.name.function.python',
      'support.function.python',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  {
    name: 'Python Classes',
    scope: ['entity.name.type.class.python', 'support.type.python'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'Python Decorators',
    scope: [
      'meta.function.decorator.python',
      'entity.name.function.decorator.python',
      'punctuation.definition.decorator.python',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.orange.main,
      fontStyle: 'italic',
    },
  },
  // Ruby-specific tokens
  {
    name: 'Ruby Keywords',
    scope: [
      'keyword.control.ruby',
      'keyword.other.ruby',
      'storage.type.ruby',
      'storage.modifier.ruby',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Ruby Symbols',
    scope: [
      'constant.other.symbol.ruby',
      'punctuation.definition.constant.ruby',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
  },
  {
    name: 'Ruby Methods',
    scope: ['entity.name.function.ruby', 'support.function.ruby'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  // Java-specific tokens
  {
    name: 'Java Keywords',
    scope: [
      'keyword.control.java',
      'keyword.other.java',
      'storage.type.java',
      'storage.modifier.java',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Java Classes',
    scope: ['entity.name.type.class.java', 'support.class.java'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
  },
  {
    name: 'Java Annotations',
    scope: [
      'meta.annotation.java',
      'punctuation.definition.annotation.java',
      'storage.type.annotation.java',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.green.main,
      fontStyle: 'italic',
    },
  },
  // C/C++ specific tokens
  {
    name: 'C/C++ Keywords',
    scope: [
      'keyword.control.c',
      'keyword.control.cpp',
      'storage.type.c',
      'storage.type.cpp',
      'storage.modifier.c',
      'storage.modifier.cpp',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'C/C++ Functions',
    scope: [
      'entity.name.function.c',
      'entity.name.function.cpp',
      'support.function.c',
      'support.function.cpp',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  {
    name: 'C/C++ Macros',
    scope: [
      'entity.name.function.preprocessor.c',
      'meta.preprocessor.macro.c',
      'meta.preprocessor.macro.cpp',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.orange.main,
      fontStyle: 'bold',
    },
  },
  // Shell/Bash specific tokens
  {
    name: 'Shell Keywords',
    scope: [
      'keyword.control.shell',
      'keyword.other.shell',
      'storage.modifier.shell',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
  {
    name: 'Shell Builtins',
    scope: ['support.function.builtin.shell', 'entity.name.function.shell'],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
  },
  {
    name: 'Shell Variables',
    scope: [
      'variable.other.shell',
      'variable.parameter.shell',
      'meta.variable.shell',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
  },
  // Additional Modern Framework Tokens
  {
    name: 'React Hooks',
    scope: [
      'support.function.react-hooks',
      'entity.name.function.hook',
      'variable.other.hook',
      'support.function.usestate',
      'support.function.useeffect',
      'support.function.usecontext',
      'support.function.usereducer',
      'support.function.usecallback',
      'support.function.usememo',
      'support.function.useref',
      'support.function.uselayouteffect',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Next.js Tokens',
    scope: [
      'support.function.next',
      'entity.name.function.next',
      'keyword.control.next',
      'support.function.getstaticprops',
      'support.function.getserversideprops',
      'support.function.getstaticpaths',
      'variable.other.next',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.ui.white, // White для Next.js
      fontStyle: 'bold',
    },
  },
  {
    name: 'Vue Composition API',
    scope: [
      'support.function.vue-composition',
      'entity.name.function.vue-composition',
      'support.function.ref',
      'support.function.reactive',
      'support.function.computed',
      'support.function.watch',
      'support.function.watcheffect',
      'support.function.onmounted',
      'support.function.oncreated',
      'support.function.provide',
      'support.function.inject',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.green.main,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Tailwind CSS Classes',
    scope: [
      'entity.other.attribute-name.class.tailwind',
      'string.quoted.other.tailwind',
      'meta.attribute-with-value.class.html string.quoted.double.html',
      'support.class.tailwind',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.light,
    },
  },
  {
    name: 'GraphQL Schema Types',
    scope: [
      'entity.name.type.graphql',
      'support.type.graphql',
      'keyword.type.graphql',
      'variable.graphql',
      'field.name.graphql',
      'argument.name.graphql',
      'directive.name.graphql',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.pink.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Prisma ORM',
    scope: [
      'support.function.prisma',
      'entity.name.function.prisma',
      'keyword.control.prisma',
      'support.type.prisma',
      'variable.other.prisma',
      'entity.name.model.prisma',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.dark,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Drizzle ORM',
    scope: [
      'support.function.drizzle',
      'entity.name.function.drizzle',
      'keyword.control.drizzle',
      'support.type.drizzle',
      'variable.other.drizzle',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.orange.dark,
      fontStyle: 'bold',
    },
  },
  {
    name: 'tRPC Tokens',
    scope: [
      'support.function.trpc',
      'entity.name.function.trpc',
      'keyword.control.trpc',
      'support.type.trpc',
      'variable.other.trpc',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.violet.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Zod Validation',
    scope: [
      'support.function.zod',
      'entity.name.function.zod',
      'keyword.control.zod',
      'support.type.zod',
      'variable.other.zod',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.red.light,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Testing Frameworks (Jest, Vitest, Playwright)',
    scope: [
      'support.function.test',
      'entity.name.function.test',
      'keyword.control.test',
      'support.function.jest',
      'support.function.vitest',
      'support.function.playwright',
      'support.function.describe',
      'support.function.it',
      'support.function.test',
      'support.function.expect',
      'support.function.beforeeach',
      'support.function.aftereach',
      'support.function.beforeall',
      'support.function.afterall',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.fuchsia.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'TypeScript Utility Types',
    scope: [
      'support.type.utility-types',
      'entity.name.type.utility',
      'keyword.other.utility',
      'support.type.partial',
      'support.type.required',
      'support.type.readonly',
      'support.type.pick',
      'support.type.omit',
      'support.type.record',
      'support.type.exclude',
      'support.type.extract',
      'support.type.nonnullable',
      'support.type.parameters',
      'support.type.returntype',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.amber.main,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Modern JavaScript Features',
    scope: [
      'keyword.control.async',
      'keyword.control.await',
      'keyword.control.yield',
      'keyword.control.generator',
      'keyword.operator.spread',
      'keyword.operator.rest',
      'keyword.operator.optional.chaining',
      'keyword.operator.nullish.coalescing',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.pink.main,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Database Query Languages',
    scope: [
      'support.function.sql',
      'entity.name.function.sql',
      'keyword.control.sql',
      'support.type.sql',
      'variable.other.sql',
      'keyword.other.select',
      'keyword.other.insert',
      'keyword.other.update',
      'keyword.other.delete',
      'keyword.other.create',
      'keyword.other.drop',
      'keyword.other.alter',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'API Framework Tokens (Express, Fastify, Hono)',
    scope: [
      'support.function.express',
      'support.function.fastify',
      'support.function.hono',
      'entity.name.function.api',
      'keyword.control.api',
      'support.type.api',
      'variable.other.api',
      'support.function.get',
      'support.function.post',
      'support.function.put',
      'support.function.delete',
      'support.function.patch',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.green.dark,
      fontStyle: 'bold',
    },
  },
  {
    name: 'State Management (Redux, Zustand, Pinia)',
    scope: [
      'support.function.redux',
      'support.function.zustand',
      'support.function.pinia',
      'entity.name.function.state',
      'keyword.control.state',
      'support.type.state',
      'variable.other.state',
      'support.function.createstore',
      'support.function.useslice',
      'support.function.usedispatch',
      'support.function.useselector',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.purple.dark,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Build Tools and Config',
    scope: [
      'support.function.vite',
      'support.function.webpack',
      'support.function.rollup',
      'support.function.esbuild',
      'support.function.parcel',
      'entity.name.function.build',
      'keyword.control.build',
      'support.type.build',
      'variable.other.build',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.orange.main,
    },
  },
  {
    name: 'CSS-in-JS Libraries',
    scope: [
      'support.function.styled-components',
      'support.function.emotion',
      'support.function.stitches',
      'entity.name.function.css-in-js',
      'keyword.control.css-in-js',
      'support.type.css-in-js',
      'variable.other.css-in-js',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.rose.main,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Form Libraries (React Hook Form, Formik)',
    scope: [
      'support.function.react-hook-form',
      'support.function.formik',
      'entity.name.function.form',
      'keyword.control.form',
      'support.type.form',
      'variable.other.form',
      'support.function.useform',
      'support.function.usefieldarray',
      'support.function.controller',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.dark,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Animation Libraries (Framer Motion, GSAP)',
    scope: [
      'support.function.framer-motion',
      'support.function.gsap',
      'entity.name.function.animation',
      'keyword.control.animation',
      'support.type.animation',
      'variable.other.animation',
      'support.function.motion',
      'support.function.animate',
      'support.function.transition',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.yellow.main,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Modern Data Fetching (TanStack Query, SWR)',
    scope: [
      'support.function.tanstack-query',
      'support.function.swr',
      'support.function.react-query',
      'entity.name.function.fetch',
      'keyword.control.fetch',
      'support.type.fetch',
      'variable.other.fetch',
      'support.function.usequery',
      'support.function.usemutation',
      'support.function.useswr',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.sky.main,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Modern CSS Frameworks (Bootstrap, Tailwind, Bulma)',
    scope: [
      'support.function.bootstrap',
      'support.function.bulma',
      'entity.name.function.css-framework',
      'keyword.control.css-framework',
      'support.type.css-framework',
      'variable.other.css-framework',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.indigo.main,
    },
  },
  {
    name: 'Modern Language Features (Deno, Bun)',
    scope: [
      'support.function.deno',
      'support.function.bun',
      'entity.name.function.runtime',
      'keyword.control.runtime',
      'support.type.runtime',
      'variable.other.runtime',
      'support.function.deno.deploy',
      'support.function.bun.serve',
    ],
    settings: {
      foreground: (p: UniversalPalette) => p.chromatic.slate.main,
      fontStyle: 'bold',
    },
  },
]
