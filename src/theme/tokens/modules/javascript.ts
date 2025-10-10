// Токены синтаксиса для JavaScript
import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

export const javascriptTokens: TokenColor[] = [
  {
    name: 'JavaScript: Keyword Control Flow',
    scope: [
      'keyword.control.flow',
      'keyword.control.conditional',
      'keyword.control.loop',
      'keyword.control.switch',
    ],
    settings: {
      foreground: palette.purple,
    },
  },
  {
    name: 'JavaScript: Keyword Declaration',
    scope: [
      'keyword.control.declare',
      'storage.type',
      'storage.modifier.declare',
      'keyword.other.definitelytyped',
    ],
    settings: {
      foreground: palette.purpleAlt,
    },
  },
  {
    name: 'JavaScript: Keyword Import/Export',
    scope: [
      'keyword.control.import',
      'keyword.control.export',
      'keyword.control.from',
      'keyword.control.as',
    ],
    settings: {
      foreground: palette.blue,
    },
  },
  {
    name: 'JavaScript: Keyword Type System',
    scope: [
      'keyword.control.type',
      'keyword.interface',
      'keyword.class',
      'keyword.extends',
      'keyword.implements',
    ],
    settings: {
      foreground: palette.yellow,
    },
  },
  {
    name: 'JavaScript: Keyword Access Modifiers',
    scope: [
      'storage.modifier.access',
      'storage.modifier.static',
      'storage.modifier.abstract',
      'storage.modifier.readonly',
    ],
    settings: {
      foreground: palette.keywordAccess,
    },
  },
  {
    name: 'JavaScript: Keyword Async/Await',
    scope: [
      'storage.modifier.async',
      'keyword.control.flow.await',
      'keyword.other.await',
    ],
    settings: {
      foreground: palette.keywordAsync,
    },
  },
  {
    name: 'JavaScript: String Template',
    scope: ['string.template', 'string.quasi'],
    settings: {
      foreground: palette.teal,
    },
  },
  {
    name: 'JavaScript: Template Expression',
    scope: [
      'meta.embedded.expression',
      'punctuation.definition.template-expression',
    ],
    settings: {
      foreground: palette.teal,
    },
  },
  {
    name: 'JavaScript: Function Parameter',
    scope: ['variable.parameter', 'meta.parameters variable'],
    settings: {
      foreground: palette.funcParam,
    },
  },
  {
    name: 'JavaScript: Method Call',
    scope: ['variable.function', 'entity.name.function.member'],
    settings: {
      foreground: palette.keywordAsync,
      fontStyle: 'bold',
    },
  },
  {
    name: 'JavaScript: Function Declaration',
    scope: ['entity.name.function', 'meta.function-call entity.name.function'],
    settings: {
      foreground: palette.keywordAsync,
    },
  },
  {
    name: 'JavaScript: Class Name',
    scope: ['entity.name.class', 'entity.name.type.class'],
    settings: {
      foreground: palette.yellow,
    },
  },
  {
    name: 'JavaScript: Interface Name',
    scope: ['entity.name.type.interface'],
    settings: {
      foreground: palette.interface,
    },
  },
  {
    name: 'JavaScript: Enum Name',
    scope: ['entity.name.type.enum'],
    settings: {
      foreground: palette.enum,
    },
  },
  {
    name: 'JavaScript: Namespace',
    scope: ['entity.name.namespace', 'entity.name.type.module'],
    settings: {
      foreground: palette.namespace,
    },
  },
  {
    name: 'JavaScript: Primitive Type',
    scope: ['support.type.primitive', 'keyword.type'],
    settings: {
      foreground: palette.cyan,
    },
  },
  {
    name: 'JavaScript: Generic Type Parameter',
    scope: ['entity.name.type.parameter'],
    settings: {
      foreground: palette.typeParam,
    },
  },
  {
    name: 'JavaScript: Union Type Operator',
    scope: ['keyword.operator.type.union'],
    settings: {
      foreground: palette.purpleAlt,
    },
  },
  {
    name: 'JavaScript: Built-in Type',
    scope: ['support.type.builtin'],
    settings: {
      foreground: palette.builtinType,
    },
  },
  {
    name: 'JavaScript: Custom Type',
    scope: ['entity.name.type'],
    settings: {
      foreground: palette.yellow,
    },
  },
  {
    name: 'JavaScript: Arithmetic Operator',
    scope: ['keyword.operator.arithmetic'],
    settings: {
      foreground: palette.purpleAlt,
    },
  },
  {
    name: 'JavaScript: Comparison Operator',
    scope: ['keyword.operator.comparison', 'keyword.operator.relational'],
    settings: {
      foreground: palette.comparisonOp,
    },
  },
  {
    name: 'JavaScript: Logical Operator',
    scope: ['keyword.operator.logical'],
    settings: {
      foreground: palette.purple,
    },
  },
  {
    name: 'JavaScript: Assignment Operator',
    scope: ['keyword.operator.assignment'],
    settings: {
      foreground: palette.assignOp,
    },
  },
  {
    name: 'JavaScript: Ternary Operator',
    scope: ['keyword.operator.ternary'],
    settings: {
      foreground: palette.blue,
    },
  },
  {
    name: 'JavaScript: Spread Operator',
    scope: ['keyword.operator.spread', 'keyword.operator.rest'],
    settings: {
      foreground: palette.spreadOp,
    },
  },
  {
    name: 'JavaScript: Decorator',
    scope: ['entity.name.function.decorator', 'punctuation.decorator'],
    settings: {
      foreground: palette.orange,
    },
  },
  {
    name: 'JavaScript: Annotation',
    scope: ['storage.type.annotation'],
    settings: {
      foreground: palette.annotation,
    },
  },
  {
    name: 'JavaScript: Attribute',
    scope: ['entity.other.attribute-name.attribute'],
    settings: {
      foreground: palette.attribute,
    },
  },
  {
    name: 'JavaScript: Pragma/Directive',
    scope: ['meta.preprocessor', 'keyword.other.directive'],
    settings: {
      foreground: palette.pragma,
    },
  },
]
