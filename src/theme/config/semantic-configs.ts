import type { UniversalPalette } from '../palette/index.js'
import { darken, lighten, mix } from '../utils/color.js'
import { boldToken, italicToken, token } from '../utils/semantic-helpers.js'
import type { SemanticTokenConfig } from './color-config-dsl.js'

/**
 * Variable tokens - переменные
 */
export const variablesConfig: SemanticTokenConfig = {
  rules: {
    variable: (p: UniversalPalette) => token(p.chromatic.cyan.light),
    'variable.readonly': (p: UniversalPalette) =>
      italicToken(mix(p.chromatic.cyan.light, p.chromatic.purple.light, 0.2)),
    parameter: (p: UniversalPalette) =>
      token(mix(p.chromatic.purple.main, p.chromatic.cyan.main, 0.3)),
    'parameter.readonly': (p: UniversalPalette) =>
      italicToken(darken(p.chromatic.purple.main, 0.1)),
    property: (p: UniversalPalette) => token(p.chromatic.teal.dark),
    'property.readonly': (p: UniversalPalette) =>
      italicToken(mix(p.chromatic.teal.dark, p.chromatic.cyan.dark, 0.3)),
    'variable.defaultLibrary': (p: UniversalPalette) =>
      token(mix(p.chromatic.cyan.main, p.chromatic.teal.main, 0.4)),
  },
}

/**
 * Function tokens - функции и методы
 */
export const functionsConfig: SemanticTokenConfig = {
  rules: {
    function: (p: UniversalPalette) => token(p.chromatic.blue.main),
    'function.declaration': (p: UniversalPalette) =>
      boldToken(lighten(p.chromatic.blue.main, 0.1)),
    'function.defaultLibrary': (p: UniversalPalette) =>
      token(p.chromatic.cyan.light),
    method: (p: UniversalPalette) =>
      token(mix(p.chromatic.blue.main, p.chromatic.cyan.light, 0.3)),
    'method.declaration': (p: UniversalPalette) =>
      boldToken(lighten(p.chromatic.blue.main, 0.08)),
    constructor: (p: UniversalPalette) =>
      boldToken(mix(p.chromatic.cyan.light, p.chromatic.purple.light, 0.15)),
  },
}

/**
 * Type tokens - типы и классы
 */
export const typesConfig: SemanticTokenConfig = {
  rules: {
    type: (p: UniversalPalette) => token(p.chromatic.orange.main),
    class: (p: UniversalPalette) => boldToken(p.chromatic.orange.main),
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
    string: (p: UniversalPalette) => token(p.chromatic.green.light),
    number: (p: UniversalPalette) => token(p.chromatic.orange.light),
    boolean: (p: UniversalPalette) => token(p.chromatic.red.light),
  },
}

/**
 * Framework tokens - специфичные для современных фреймворков
 */
export const frameworksConfig: SemanticTokenConfig = {
  rules: {
    // React/Vue/Angular компоненты
    'class.component': (p: UniversalPalette) =>
      boldToken(p.chromatic.orange.light),
    'interface.component': (p: UniversalPalette) =>
      boldToken(p.chromatic.orange.light),

    // Декораторы
    decorator: (p: UniversalPalette) => italicToken(p.chromatic.yellow.main),

    // Макросы
    macro: (p: UniversalPalette) => boldToken(p.chromatic.indigo.main),

    // Namespace
    namespace: (p: UniversalPalette) => token(p.chromatic.teal.light),
  },
}
