import type { UniversalPalette } from '../palette/index.js'
import { darken, mix } from '../utils/color.js'
import { boldToken, italicToken, token } from '../utils/semantic-helpers.js'
import type { SemanticTokenConfig } from './color-config-dsl.js'

/**
 * Variable tokens - переменные
 */
export const variablesConfig: SemanticTokenConfig = {
  rules: {
    variable: (p: UniversalPalette) => token(p.foreground.primary.light),
    'variable.readonly': (p: UniversalPalette) =>
      italicToken(mix(p.chromatic.blue.main, p.chromatic.purple.main, 0.3)),
    parameter: (p: UniversalPalette) => token(p.foreground.primary.light),
    'parameter.readonly': (p: UniversalPalette) =>
      italicToken(
        darken(mix(p.chromatic.blue.main, p.chromatic.purple.main, 0.3), 0.1)
      ),
    property: (p: UniversalPalette) => token(p.chromatic.cyan.main),
    'property.readonly': (p: UniversalPalette) =>
      italicToken(mix(p.chromatic.blue.main, p.chromatic.purple.main, 0.3)),
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
    type: (p: UniversalPalette) =>
      boldToken(mix(p.chromatic.purple.main, p.chromatic.orange.main, 0.3)),
    class: (p: UniversalPalette) =>
      boldToken(mix(p.chromatic.orange.main, p.chromatic.yellow.main, 0.2)),
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
