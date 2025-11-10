import type { UniversalPalette } from '../palette/index.js'
import { boldToken, italicToken, token } from '../utils/semantic-helpers.js'
import type { SemanticTokenConfig } from './color-config-dsl.js'

/**
 * Variable tokens - переменные
 */
export const variablesConfig: SemanticTokenConfig = {
  rules: {
    variable: (p: UniversalPalette) => token(p.chromatic.blue.main),
    'variable.readonly': (p: UniversalPalette) =>
      italicToken(p.chromatic.blue.main),
    'variable.declaration': (p: UniversalPalette) =>
      token(p.chromatic.purple.main),
    parameter: (p: UniversalPalette) => token(p.chromatic.amber.main),
    'parameter.readonly': (p: UniversalPalette) =>
      italicToken(p.chromatic.amber.main),
    'parameter.declaration': (p: UniversalPalette) =>
      token(p.chromatic.orange.main),
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
    type: (p: UniversalPalette) => boldToken(p.chromatic.teal.main),
    interface: (p: UniversalPalette) => boldToken(p.chromatic.teal.main),
    class: (p: UniversalPalette) => boldToken(p.chromatic.blue.main),
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
 * Literal tokens - литералы (строки, числа, булевы)
 */
export const literalsConfig: SemanticTokenConfig = {
  rules: {
    string: (p: UniversalPalette) => token(p.chromatic.green.main),
    number: (p: UniversalPalette) => token(p.chromatic.orange.main),
    boolean: (p: UniversalPalette) => token(p.chromatic.red.main),
    'string.escape': (p: UniversalPalette) => token(p.chromatic.yellow.main),
    'string.template': (p: UniversalPalette) => token(p.chromatic.green.main),
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
      boldToken(p.chromatic.teal.main),

    // Декораторы
    decorator: (p: UniversalPalette) => italicToken(p.chromatic.blue.main),

    // Макросы
    macro: (p: UniversalPalette) => boldToken(p.chromatic.purple.main),

    // Namespace
    namespace: (p: UniversalPalette) => token(p.chromatic.blue.main),

    // Enum
    enum: (p: UniversalPalette) => boldToken(p.chromatic.orange.main),
    enumMember: (p: UniversalPalette) => token(p.chromatic.orange.light),
  },
}
