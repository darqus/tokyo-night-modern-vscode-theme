import type { UniversalPalette } from '../palette/index.js'
import { boldToken, italicToken, token } from '../utils/semantic-helpers.js'
import type { SemanticTokenConfig } from './color-config-dsl.js'

/**
 * Variable tokens - переменные
 */
export const variablesConfig: SemanticTokenConfig = {
  rules: {
    'variable.readonly': (p: UniversalPalette) =>
      italicToken(p.chromatic.sky.light),
    'variable.declaration': (p: UniversalPalette) =>
      token(p.chromatic.purple.main),
    parameter: (p: UniversalPalette) => token(p.chromatic.yellow.main), // Желтый для параметров
    'parameter.readonly': (p: UniversalPalette) =>
      italicToken(p.chromatic.yellow.main),
    'parameter.declaration': (p: UniversalPalette) =>
      token(p.chromatic.amber.main),
    property: (p: UniversalPalette) => token(p.chromatic.cyan.main),
    'property.readonly': (p: UniversalPalette) =>
      italicToken(p.chromatic.cyan.main),
    'property.declaration': (p: UniversalPalette) =>
      token(p.chromatic.teal.main),
    'variable.defaultLibrary': (p: UniversalPalette) =>
      token(p.chromatic.cyan.light),
    'variable.declaration.readonly': (p: UniversalPalette) =>
      italicToken(p.chromatic.purple.main),
  },
}

/**
 * Function tokens - функции и методы
 */
export const functionsConfig: SemanticTokenConfig = {
  rules: {
    function: (p: UniversalPalette) => token(p.chromatic.blue.main),
    'function.declaration': (p: UniversalPalette) =>
      boldToken(p.chromatic.blue.main),
    'function.defaultLibrary': (p: UniversalPalette) =>
      token(p.chromatic.cyan.main),
    method: (p: UniversalPalette) => token(p.chromatic.blue.main),
    'method.declaration': (p: UniversalPalette) =>
      boldToken(p.chromatic.blue.main),
    constructor: (p: UniversalPalette) => boldToken(p.chromatic.yellow.main),
  },
}

/**
 * Type tokens - типы и классы
 */
export const typesConfig: SemanticTokenConfig = {
  rules: {
    type: (p: UniversalPalette) => boldToken(p.chromatic.yellow.dark),
    interface: (p: UniversalPalette) => boldToken(p.chromatic.yellow.dark),
    class: (p: UniversalPalette) => boldToken(p.chromatic.pink.main),
    // Улучшенная поддержка TypeScript
    'type.generic': (p: UniversalPalette) =>
      italicToken(p.chromatic.yellow.main), // Generics
    'type.parameter': (p: UniversalPalette) =>
      italicToken(p.chromatic.amber.main), // Type parameters
    'class.declaration': (p: UniversalPalette) =>
      boldToken(p.chromatic.pink.main),
    'interface.declaration': (p: UniversalPalette) =>
      boldToken(p.chromatic.yellow.dark),
    'type.declaration': (p: UniversalPalette) =>
      boldToken(p.chromatic.yellow.dark),
    // Utility types
    'type.utility': (p: UniversalPalette) => token(p.chromatic.violet.main),
    // TypeScript generics keywords
    'keyword.generic': (p: UniversalPalette) => token(p.chromatic.purple.main), // extends, keyof и др.
  },
}

/**
 * Modifier tokens - модификаторы (static, readonly и т.д.)
 */
export const modifiersConfig: SemanticTokenConfig = {
  rules: {
    static: (p: UniversalPalette) => italicToken(p.chromatic.blue.main),
    readonly: (p: UniversalPalette) => italicToken(p.chromatic.cyan.main),
  },
}

/**
 * Critical keywords tokens - критические ключевые слова (this, super и т.д.)
 */
export const criticalKeywordsConfig: SemanticTokenConfig = {
  rules: {
    'keyword.this': (p: UniversalPalette) => boldToken(p.chromatic.red.main),
    'keyword.self': (p: UniversalPalette) => boldToken(p.chromatic.red.main),
    'variable.language.self': (p: UniversalPalette) =>
      boldToken(p.chromatic.red.main),
  },
}

/**
 * Literal tokens - литералы (строки, числа, булевы)
 */
export const literalsConfig: SemanticTokenConfig = {
  rules: {
    string: (p: UniversalPalette) => token(p.chromatic.green.main),
    number: (p: UniversalPalette) => token(p.chromatic.orange.main),
    boolean: (p: UniversalPalette) => token(p.chromatic.pink.main), // Розовый для булевых значений
    'string.escape': (p: UniversalPalette) =>
      boldToken(p.chromatic.yellow.main), // Жирный для escape
  },
}

/**
 * Framework tokens - специфичные для современных фреймворков
 */
export const frameworksConfig: SemanticTokenConfig = {
  rules: {
    // React/Vue/Angular компоненты
    'class.component': (p: UniversalPalette) =>
      boldToken(p.chromatic.teal.main),
    'interface.component': (p: UniversalPalette) =>
      boldToken(p.chromatic.teal.dark),

    // Декораторы
    decorator: (p: UniversalPalette) => italicToken(p.chromatic.blue.main),

    // Макросы
    macro: (p: UniversalPalette) => boldToken(p.chromatic.purple.main),

    // Namespace
    namespace: (p: UniversalPalette) => token(p.chromatic.blue.main),

    // Enum
    enum: (p: UniversalPalette) => boldToken(p.chromatic.orange.main),
    enumMember: (p: UniversalPalette) => token(p.chromatic.orange.light),

    // JSX/TSX улучшения
    'jsx.tag': (p: UniversalPalette) => token(p.chromatic.red.main),
    'jsx.attribute': (p: UniversalPalette) => token(p.chromatic.purple.main),
    'jsx.text': (p: UniversalPalette) => token(p.foreground.secondary.main),
    'react.hook': (p: UniversalPalette) => token(p.chromatic.cyan.main),

    // TypeScript-specific
    'typescript.generic': (p: UniversalPalette) =>
      italicToken(p.chromatic.yellow.main),
    'typescript.utility': (p: UniversalPalette) =>
      token(p.chromatic.violet.main),

    // JSX/TSX props и children
    'jsx.prop': (p: UniversalPalette) => token(p.chromatic.purple.main),

    // Rust-specific
    'rust.lifetime': (p: UniversalPalette) =>
      italicToken(p.chromatic.purple.main),
    'rust.macro': (p: UniversalPalette) => boldToken(p.chromatic.orange.main),
    'rust.derive': (p: UniversalPalette) => italicToken(p.chromatic.amber.main),
    'rust.pattern.match': (p: UniversalPalette) =>
      token(p.chromatic.purple.main),
    'rust.pattern.iflet': (p: UniversalPalette) =>
      token(p.chromatic.purple.main),
  },
}
