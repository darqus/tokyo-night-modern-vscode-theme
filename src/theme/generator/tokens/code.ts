import { palette } from '../../palette'
import type { TokenColor } from '../../types'

export function generateCodeTokens(): TokenColor[] {
  const { red, pink, blue, cyan, purple, yellow, green, fg, teal } = palette

  return [
    {
      name: 'Tag',
      scope: 'entity.name.tag',
      settings: { foreground: red.main },
    },
    {
      name: 'Tag - Custom / Unrecognized',
      scope: [
        'entity.name.tag support.class.component',
        'meta.tag.custom entity.name.tag',
        'meta.tag.other.unrecognized.html.derivative entity.name.tag',
        'meta.tag',
      ],
      settings: { foreground: pink.light },
    },
    {
      name: 'Tag Punctuation',
      scope: [
        'punctuation.definition.tag',
        'text.html.php meta.embedded.block.html meta.tag.metadata.script.end.html punctuation.definition.tag.begin.html text.html.basic',
      ],
      settings: { foreground: pink.main },
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
      settings: { foreground: yellow.main },
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
      settings: { foreground: fg.brightest },
    },
    {
      name: 'Variable Array Key',
      scope: 'meta.array.literal variable',
      settings: { foreground: cyan.light },
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
      settings: { foreground: teal.main },
    },
    {
      name: 'Object Property',
      scope: [
        'variable.other.property',
        'support.variable.property',
        'support.variable.property.dom',
        'meta.function-call variable.other.object.property',
      ],
      settings: { foreground: cyan.light },
    },
    {
      name: 'Object Property',
      scope: 'variable.other.object.property',
      settings: { foreground: fg.brightest },
    },
    {
      name: 'Object Literal Member lvl 3 (Vue Prop Validation)',
      scope:
        'meta.objectliteral meta.object.member meta.objectliteral meta.object.member meta.objectliteral meta.object.member meta.object-literal.key',
      settings: { foreground: green.dark },
    },
    {
      name: 'C-related Block Level Variables',
      scope: 'source.cpp meta.block variable.other',
      settings: { foreground: red.main },
    },
    {
      name: 'Other Variable',
      scope: 'support.other.variable',
      settings: { foreground: red.main },
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
      settings: { foreground: blue.medium },
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
      settings: { foreground: blue.medium },
    },
    {
      name: 'Function Argument',
      scope: [
        'variable.parameter.function.language.special',
        'variable.parameter',
        'meta.function.parameters punctuation.definition.variable',
        'meta.function.parameter variable',
      ],
      settings: { foreground: yellow.main },
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
      settings: { foreground: purple.light },
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
      settings: { foreground: purple.light },
    },
    {
      name: 'Inherited Class',
      scope: 'entity.other.inherited-class',
      settings: { foreground: purple.light },
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
      settings: { foreground: cyan.dark },
    },
    {
      name: 'Class Name',
      scope: 'entity.name',
      settings: { foreground: fg.brightest },
    },
    {
      name: 'Support Function',
      scope: 'support.function',
      settings: { foreground: cyan.dark },
    },
  ]
}
