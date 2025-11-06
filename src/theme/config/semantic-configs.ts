import type { UnifiedPalette } from '../palette/index.js'
import { darken, lighten, mix } from '../utils/color.js'
import { boldToken, italicToken, token } from '../utils/semantic-helpers.js'
import type { SemanticTokenConfig } from './color-config-dsl.js'

/**
 * Variable tokens - переменные
 */
export const variablesConfig: SemanticTokenConfig = {
  rules: {
    variable: (p: UnifiedPalette) => token(p.cyan.light),
    'variable.readonly': (p: UnifiedPalette) =>
      italicToken(mix(p.cyan.light, p.purple.light, 0.2)),
    parameter: (p: UnifiedPalette) =>
      token(mix(p.purple.main, p.cyan.main, 0.3)),
    'parameter.readonly': (p: UnifiedPalette) =>
      italicToken(darken(p.purple.main, 0.1)),
    property: (p: UnifiedPalette) => token(p.teal.dark),
    'property.readonly': (p: UnifiedPalette) =>
      italicToken(mix(p.teal.dark, p.cyan.dark, 0.3)),
    'variable.defaultLibrary': (p: UnifiedPalette) =>
      token(mix(p.cyan.main, p.teal.main, 0.4)),
  },
}

/**
 * Function tokens - функции и методы
 */
export const functionsConfig: SemanticTokenConfig = {
  rules: {
    function: (p: UnifiedPalette) => token(p.blue.main),
    'function.declaration': (p: UnifiedPalette) =>
      boldToken(lighten(p.blue.main, 0.1)),
    'function.defaultLibrary': (p: UnifiedPalette) => token(p.cyan.light),
    method: (p: UnifiedPalette) => token(mix(p.blue.main, p.cyan.light, 0.3)),
    'method.declaration': (p: UnifiedPalette) =>
      boldToken(lighten(p.blue.main, 0.08)),
    constructor: (p: UnifiedPalette) =>
      boldToken(mix(p.cyan.light, p.purple.light, 0.15)),
  },
}

/**
 * Type tokens - типы и классы
 */
export const typesConfig: SemanticTokenConfig = {
  rules: {
    type: (p: UnifiedPalette) => token(p.peach.main),
    class: (p: UnifiedPalette) => boldToken(p.peach.main),
  },
}

/**
 * Modifier tokens - модификаторы (static, readonly и т.д.)
 */
export const modifiersConfig: SemanticTokenConfig = {
  rules: {
    static: (p: UnifiedPalette) => italicToken(p.blue.main),
    readonly: (p: UnifiedPalette) => italicToken(p.cyan.main),
  },
}

/**
 * Literal tokens - литералы (строки, числа, булевы)
 */
export const literalsConfig: SemanticTokenConfig = {
  rules: {
    string: (p: UnifiedPalette) => token(p.green.light),
    number: (p: UnifiedPalette) => token(p.orange.light),
    boolean: (p: UnifiedPalette) => token(p.red.light),
  },
}

/**
 * Framework tokens - специфичные для современных фреймворков
 */
export const frameworksConfig: SemanticTokenConfig = {
  rules: {
    // React/Vue/Angular компоненты
    'class.component': (p: UnifiedPalette) => boldToken(p.peach.light),
    'interface.component': (p: UnifiedPalette) => boldToken(p.peach.light),

    // Декораторы
    decorator: (p: UnifiedPalette) => italicToken(p.yellow.main),

    // Макросы
    macro: (p: UnifiedPalette) => boldToken(p.indigo.main),

    // Namespace
    namespace: (p: UnifiedPalette) => token(p.teal.light),
  },
}
