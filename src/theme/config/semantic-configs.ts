import type { CompatiblePalette } from '../palette/index.js'
import { darken, lighten, mix } from '../utils/color.js'
import { boldToken, italicToken, token } from '../utils/semantic-helpers.js'
import type { SemanticTokenConfig } from './color-config-dsl.js'

/**
 * Variable tokens - переменные
 */
export const variablesConfig: SemanticTokenConfig = {
  rules: {
    variable: (p: CompatiblePalette) => token(p.cyan.light),
    'variable.readonly': (p: CompatiblePalette) =>
      italicToken(mix(p.cyan.light, p.purple.light, 0.2)),
    parameter: (p: CompatiblePalette) =>
      token(mix(p.purple.main, p.cyan.main, 0.3)),
    'parameter.readonly': (p: CompatiblePalette) =>
      italicToken(darken(p.purple.main, 0.1)),
    property: (p: CompatiblePalette) => token(p.teal.dark),
    'property.readonly': (p: CompatiblePalette) =>
      italicToken(mix(p.teal.dark, p.cyan.dark, 0.3)),
    'variable.defaultLibrary': (p: CompatiblePalette) =>
      token(mix(p.cyan.main, p.teal.main, 0.4)),
  },
}

/**
 * Function tokens - функции и методы
 */
export const functionsConfig: SemanticTokenConfig = {
  rules: {
    function: (p: CompatiblePalette) => token(p.blue.main),
    'function.declaration': (p: CompatiblePalette) =>
      boldToken(lighten(p.blue.main, 0.1)),
    'function.defaultLibrary': (p: CompatiblePalette) => token(p.cyan.light),
    method: (p: CompatiblePalette) =>
      token(mix(p.blue.main, p.cyan.light, 0.3)),
    'method.declaration': (p: CompatiblePalette) =>
      boldToken(lighten(p.blue.main, 0.08)),
    constructor: (p: CompatiblePalette) =>
      boldToken(mix(p.cyan.light, p.purple.light, 0.15)),
  },
}

/**
 * Type tokens - типы и классы
 */
export const typesConfig: SemanticTokenConfig = {
  rules: {
    type: (p: CompatiblePalette) => token(p.peach.main),
    class: (p: CompatiblePalette) => boldToken(p.peach.main),
  },
}

/**
 * Modifier tokens - модификаторы (static, readonly и т.д.)
 */
export const modifiersConfig: SemanticTokenConfig = {
  rules: {
    static: (p: CompatiblePalette) => italicToken(p.blue.main),
    readonly: (p: CompatiblePalette) => italicToken(p.cyan.main),
  },
}

/**
 * Literal tokens - литералы (строки, числа, булевы)
 */
export const literalsConfig: SemanticTokenConfig = {
  rules: {
    string: (p: CompatiblePalette) => token(p.green.light),
    number: (p: CompatiblePalette) => token(p.orange.light),
    boolean: (p: CompatiblePalette) => token(p.red.light),
  },
}

/**
 * Framework tokens - специфичные для современных фреймворков
 */
export const frameworksConfig: SemanticTokenConfig = {
  rules: {
    // React/Vue/Angular компоненты
    'class.component': (p: CompatiblePalette) => boldToken(p.peach.light),
    'interface.component': (p: CompatiblePalette) => boldToken(p.peach.light),

    // Декораторы
    decorator: (p: CompatiblePalette) => italicToken(p.yellow.main),

    // Макросы
    macro: (p: CompatiblePalette) => boldToken(p.indigo.main),

    // Namespace
    namespace: (p: CompatiblePalette) => token(p.teal.light),
  },
}
