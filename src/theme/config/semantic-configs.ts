import type { UniversalPalette } from '../palette/index.js'
import { boldToken, italicToken, token } from '../utils/semantic-helpers.js'
import type { SemanticTokenConfig } from './color-config-dsl.js'

/**
 * Variable tokens - переменные
 */
export const variablesConfig: SemanticTokenConfig = {
  rules: {
    variable: (p: UniversalPalette) => token(p.foreground.primary.light),
    'variable.readonly': (p: UniversalPalette) =>
      italicToken(p.chromatic.sky.main),
    parameter: (p: UniversalPalette) => token(p.chromatic.sky.main),
    'parameter.readonly': (p: UniversalPalette) =>
      italicToken(p.chromatic.sky.main),
    property: (p: UniversalPalette) => token(p.chromatic.cyan.main),
    'property.readonly': (p: UniversalPalette) =>
      italicToken(p.chromatic.cyan.main),
    'variable.defaultLibrary': (p: UniversalPalette) =>
      token(p.chromatic.cyan.main),
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
    type: (p: UniversalPalette) => boldToken(p.chromatic.violet.light),
    class: (p: UniversalPalette) => boldToken(p.chromatic.yellow.main),
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
    boolean: (p: UniversalPalette) => token(p.chromatic.orange.main),
  },
}

/**
 * Framework tokens - специфичные для современных фреймворков
 */
export const frameworksConfig: SemanticTokenConfig = {
  rules: {
    // React/Vue/Angular компоненты
    'class.component': (p: UniversalPalette) =>
      boldToken(p.chromatic.yellow.main),
    'interface.component': (p: UniversalPalette) =>
      boldToken(p.chromatic.yellow.main),

    // Декораторы
    decorator: (p: UniversalPalette) => italicToken(p.chromatic.cyan.main),

    // Макросы
    macro: (p: UniversalPalette) => boldToken(p.chromatic.purple.main),

    // Namespace
    namespace: (p: UniversalPalette) => token(p.chromatic.blue.main),
  },
}
