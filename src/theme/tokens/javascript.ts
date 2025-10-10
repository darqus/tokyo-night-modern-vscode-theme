// Токены синтаксиса для JavaScript
import { TokenColor } from '../token-utils';

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
      foreground: '#b18af8'
    }
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
      foreground: '#9d7cd8'
    }
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
      foreground: '#7dcfff'
    }
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
      foreground: '#f7de70'
    }
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
      foreground: '#a582e5'
    }
 },
  {
    name: 'JavaScript: Keyword Async/Await',
    scope: [
      'storage.modifier.async',
      'keyword.control.flow.await',
      'keyword.other.await',
    ],
    settings: {
      foreground: '#7aa2f7'
    }
  },
  {
    name: 'JavaScript: String Template',
    scope: ['string.template', 'string.quasi'],
    settings: {
      foreground: '#96cab6'
    }
 },
  {
    name: 'JavaScript: Template Expression',
    scope: [
      'meta.embedded.expression',
      'punctuation.definition.template-expression',
    ],
    settings: {
      foreground: '#96cab6'
    }
  },
  {
    name: 'JavaScript: Function Parameter',
    scope: ['variable.parameter', 'meta.parameters variable'],
    settings: {
      foreground: '#accbf8'
    }
 },
  {
    name: 'JavaScript: Method Call',
    scope: ['variable.function', 'entity.name.function.member'],
    settings: {
      foreground: '#7aa2f7',
      fontStyle: 'bold'
    }
 },
  {
    name: 'JavaScript: Function Declaration',
    scope: ['entity.name.function', 'meta.function-call entity.name.function'],
    settings: {
      foreground: '#7aa2f7'
    }
  },
  {
    name: 'JavaScript: Class Name',
    scope: ['entity.name.class', 'entity.name.type.class'],
    settings: {
      foreground: '#f7de70'
    }
  },
  {
    name: 'JavaScript: Interface Name',
    scope: ['entity.name.type.interface'],
    settings: {
      foreground: '#c6d8a9'
    }
 },
  {
    name: 'JavaScript: Enum Name',
    scope: ['entity.name.type.enum'],
    settings: {
      foreground: '#f4c572'
    }
  },
 {
    name: 'JavaScript: Namespace',
    scope: ['entity.name.namespace', 'entity.name.type.module'],
    settings: {
      foreground: '#87b6f3'
    }
  },
  {
    name: 'JavaScript: Primitive Type',
    scope: ['support.type.primitive', 'keyword.type'],
    settings: {
      foreground: '#73daca'
    }
  },
 {
    name: 'JavaScript: Generic Type Parameter',
    scope: ['entity.name.type.parameter'],
    settings: {
      foreground: '#e1d6a5'
    }
  },
  {
    name: 'JavaScript: Union Type Operator',
    scope: ['keyword.operator.type.union'],
    settings: {
      foreground: '#9d7cd8'
    }
 },
  {
    name: 'JavaScript: Built-in Type',
    scope: ['support.type.builtin'],
    settings: {
      foreground: '#77bee1'
    }
  },
  {
    name: 'JavaScript: Custom Type',
    scope: ['entity.name.type'],
    settings: {
      foreground: '#f7de70'
    }
 },
  {
    name: 'JavaScript: Arithmetic Operator',
    scope: ['keyword.operator.arithmetic'],
    settings: {
      foreground: '#9d7cd8'
    }
  },
 {
    name: 'JavaScript: Comparison Operator',
    scope: ['keyword.operator.comparison', 'keyword.operator.relational'],
    settings: {
      foreground: '#a783e8'
    }
  },
 {
    name: 'JavaScript: Logical Operator',
    scope: ['keyword.operator.logical'],
    settings: {
      foreground: '#b18af8'
    }
  },
  {
    name: 'JavaScript: Assignment Operator',
    scope: ['keyword.operator.assignment'],
    settings: {
      foreground: '#a893e1'
    }
  },
  {
    name: 'JavaScript: Ternary Operator',
    scope: ['keyword.operator.ternary'],
    settings: {
      foreground: '#7dcfff'
    }
 },
  {
    name: 'JavaScript: Spread Operator',
    scope: ['keyword.operator.spread', 'keyword.operator.rest'],
    settings: {
      foreground: '#7cbdfc'
    }
  },
  {
    name: 'JavaScript: Decorator',
    scope: ['entity.name.function.decorator', 'punctuation.decorator'],
    settings: {
      foreground: '#f0ac74'
    }
  },
  {
    name: 'JavaScript: Annotation',
    scope: ['storage.type.annotation'],
    settings: {
      foreground: '#f4c572'
    }
  },
  {
    name: 'JavaScript: Attribute',
    scope: ['entity.other.attribute-name.attribute'],
    settings: {
      foreground: '#f5cf71'
    }
  },
  {
    name: 'JavaScript: Pragma/Directive',
    scope: ['meta.preprocessor', 'keyword.other.directive'],
    settings: {
      foreground: '#729bcb'
    }
  }
];