import type { UniversalPalette } from '../palette/index.js'
import { darken, lighten, mix } from '../utils/color.js'
import { boldToken, italicToken, token } from '../utils/semantic-helpers.js'
import type { SemanticTokenConfig } from './color-config-dsl.js'

/**
 * Variable tokens - переменные
 */
export const variablesConfig: SemanticTokenConfig = {
  rules: {
    variable: (p: UniversalPalette) =>
      token(mix(p.chromatic.blue.main, p.chromatic.cyan.main, 0.4)),
    'variable.readonly': (p: UniversalPalette) =>
      italicToken(mix(p.chromatic.blue.main, p.chromatic.purple.main, 0.3)),
    parameter: (p: UniversalPalette) =>
      token(mix(p.chromatic.blue.main, p.chromatic.cyan.main, 0.2)),
    'parameter.readonly': (p: UniversalPalette) =>
      italicToken(
        darken(mix(p.chromatic.blue.main, p.chromatic.purple.main, 0.3), 0.1)
      ),
    property: (p: UniversalPalette) =>
      token(mix(p.chromatic.blue.main, p.chromatic.cyan.main, 0.1)),
    'property.readonly': (p: UniversalPalette) =>
      italicToken(mix(p.chromatic.blue.main, p.chromatic.cyan.main, 0.15)),
    'variable.defaultLibrary': (p: UniversalPalette) =>
      token(mix(p.chromatic.blue.light, p.chromatic.cyan.light, 0.3)),
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
    type: (p: UniversalPalette) =>
      token(mix(p.chromatic.blue.main, p.chromatic.cyan.main, 0.3)),
    class: (p: UniversalPalette) =>
      boldToken(mix(p.chromatic.blue.main, p.chromatic.cyan.main, 0.3)),
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
    string: (p: UniversalPalette) =>
      token(mix(p.chromatic.cyan.light, p.chromatic.blue.light, 0.4)),
    number: (p: UniversalPalette) =>
      token(mix(p.chromatic.blue.main, p.chromatic.cyan.main, 0.2)),
    boolean: (p: UniversalPalette) =>
      token(mix(p.chromatic.blue.main, p.chromatic.purple.main, 0.3)),
  },
}

/**
 * Framework tokens - специфичные для современных фреймворков
 */
export const frameworksConfig: SemanticTokenConfig = {
  rules: {
    // React/Vue/Angular компоненты
    'class.component': (p: UniversalPalette) =>
      boldToken(mix(p.chromatic.blue.main, p.chromatic.cyan.main, 0.5)),
    'interface.component': (p: UniversalPalette) =>
      boldToken(mix(p.chromatic.blue.main, p.chromatic.cyan.main, 0.5)),

    // Декораторы
    decorator: (p: UniversalPalette) =>
      italicToken(mix(p.chromatic.blue.main, p.chromatic.purple.main, 0.4)),

    // Макросы
    macro: (p: UniversalPalette) => boldToken(p.chromatic.indigo.main),

    // Namespace
    namespace: (p: UniversalPalette) =>
      token(mix(p.chromatic.blue.main, p.chromatic.cyan.main, 0.6)),
  },
}
