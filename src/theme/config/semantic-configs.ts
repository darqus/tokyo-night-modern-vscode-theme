import type { Palette } from '../palette/index.js'
import { boldToken, italicToken, token } from '../utils/semantic-helpers.js'
import { darken, lighten, mix } from '../utils/color.js'
import type { SemanticTokenConfig } from './color-config-dsl.js'

/**
 * Variable tokens - переменные
 */
export const variablesConfig: SemanticTokenConfig = {
  rules: {
    variable: token((p: Palette) => p.cyan.light),
    'variable.readonly': (p: Palette) =>
      italicToken(mix(p.cyan.light, p.purple.light, 0.2)),
    parameter: token((p: Palette) => mix(p.purple.main, p.cyan.main, 0.3)),
    'parameter.readonly': (p: Palette) =>
      italicToken(darken(p.purple.main, 0.1)),
    property: token((p: Palette) => p.teal.dark),
    'property.readonly': (p: Palette) =>
      italicToken(mix(p.teal.dark, p.cyan.dark, 0.3)),
    'variable.defaultLibrary': token((p: Palette) =>
      mix(p.cyan.main, p.teal.main, 0.4)
    ),
  },
}

/**
 * Function tokens - функции и методы
 */
export const functionsConfig: SemanticTokenConfig = {
  rules: {
    function: token((p: Palette) => p.blue.main),
    'function.declaration': (p: Palette) =>
      boldToken(lighten(p.blue.main, 0.1)),
    'function.defaultLibrary': token((p: Palette) => p.cyan.light),
    method: token((p: Palette) => mix(p.blue.main, p.cyan.light, 0.3)),
    'method.declaration': (p: Palette) =>
      boldToken(lighten(p.blue.main, 0.08)),
    constructor: (p: Palette) =>
      boldToken(mix(p.cyan.light, p.purple.light, 0.15)),
  },
}

/**
 * Type tokens - типы и классы
 */
export const typesConfig: SemanticTokenConfig = {
  rules: {
    type: token((p: Palette) => p.peach.main),
    class: (p: Palette) => boldToken(p.peach.main),
  },
}

/**
 * Modifier tokens - модификаторы (static, readonly и т.д.)
 */
export const modifiersConfig: SemanticTokenConfig = {
  rules: {
    static: (p: Palette) => italicToken(p.blue.main),
    readonly: (p: Palette) => italicToken(p.cyan.main),
  },
}

/**
 * Literal tokens - литералы (строки, числа, булевы)
 */
export const literalsConfig: SemanticTokenConfig = {
  rules: {
    string: token((p: Palette) => p.green.light),
    number: token((p: Palette) => p.orange.light),
    boolean: token((p: Palette) => p.red.light),
  },
}

/**
 * Framework tokens - специфичные для современных фреймворков
 */
export const frameworksConfig: SemanticTokenConfig = {
  rules: {
    // React/Vue/Angular компоненты
    'class.component': (p: Palette) => boldToken(p.peach.light),
    'interface.component': (p: Palette) => boldToken(p.peach.light),

    // Декораторы
    decorator: (p: Palette) => italicToken(p.yellow.main),

    // Макросы
    macro: (p: Palette) => boldToken(p.indigo.main),

    // Namespace
    namespace: token((p: Palette) => p.teal.light),
  },
}
