// Токены синтаксиса для JavaScript
import { TokenColor } from '../../token-utils'
import { palette } from '../../palette/index'

export const javascriptTokens: TokenColor[] = [
  {
    name: 'JS variable',
    scope: [
      'variable',
      'support.variable',
      'string constant.other.placeholder',
      'variable.parameter.handlebars',
    ],
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'JS object variable',
    scope: 'variable.other.object',
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'JS array variable',
    scope: 'meta.array.literal variable',
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'JS object key',
    scope: [
      'meta.object-literal.key',
      'string.alias.graphql',
      'string.unquoted.graphql',
      'string.unquoted.alias.graphql',
      'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
      'meta.field.declaration.ts variable.object.property',
    ],
    settings: {
      foreground: palette.property,
      fontStyle: 'bold',
    },
  },
  {
    name: 'JS property',
    scope: [
      'variable.other.property',
      'support.variable.property',
      'support.variable.property.dom',
      'meta.function-call variable.other.object.property',
    ],
    settings: {
      foreground: palette.property,
    },
  },
  {
    name: 'JS object property',
    scope: 'variable.other.object.property',
    settings: {
      foreground: palette.property,
    },
  },
  {
    name: 'JS nested object key',
    scope:
      'meta.objectliteral meta.object.member meta.objectliteral meta.object.member meta.objectliteral meta.object.member meta.object-literal.key',
    settings: {
      foreground: palette.property,
    },
  },
  {
    name: 'JS support variable',
    scope: 'support.other.variable',
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'JS function declaration',
    scope: [
      'meta.class-method.js entity.name.function.js',
      'entity.name.method.js',
      'variable.function.constructor',
      'keyword.other.special-method',
      'storage.type.cs',
    ],
    settings: {
      foreground: palette.function,
      fontStyle: 'bold',
    },
  },
  {
    name: 'JS function call',
    scope: [
      'entity.name.function',
      'meta.function-call',
      'meta.function-call entity.name.function',
      'variable.function',
      'meta.definition.method entity.name.function',
      'meta.object-literal entity.name.function',
    ],
    settings: {
      foreground: palette.function,
    },
  },
  {
    name: 'JS function parameter',
    scope: [
      'variable.parameter.function.language.special',
      'variable.parameter',
      'meta.function.parameters punctuation.definition.variable',
      'meta.function.parameter variable',
    ],
    settings: {
      foreground: palette.parameter,
    },
  },
  {
    name: 'JS module',
    scope: [
      'entity.name.module.js',
      'variable.import.parameter.js',
      'variable.other.class.js',
    ],
    settings: {
      foreground: palette.jsModule,
    },
  },
  {
    name: 'JS language variable',
    scope: 'variable.language',
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'JS variable punctuation',
    scope: 'variable.other punctuation.definition.variable',
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'JS this',
    scope: [
      'source.js constant.other.object.key.js string.unquoted.label.js',
      'variable.language.this punctuation.definition.variable',
      'keyword.other.this',
    ],
    settings: {
      foreground: palette.jsThis,
      fontStyle: 'bold',
    },
  },
  {
    name: 'JS decorator',
    scope: [
      'tag.decorator.js entity.name.tag.js',
      'tag.decorator.js punctuation.definition.tag.js',
    ],
    settings: {
      foreground: palette.decorator,
      fontStyle: 'bold',
    },
  },
  {
    name: 'JSX children',
    scope: 'meta.jsx.children',
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'JS variable name',
    scope: 'entity.name.variable',
    settings: {
      foreground: palette.variable,
    },
  },
  {
    name: 'JS parameter',
    scope: ['variable.parameter', 'parameters variable.function'],
    settings: {
      foreground: palette.parameter,
    },
  },
]
