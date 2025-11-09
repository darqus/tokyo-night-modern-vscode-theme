import type { UniversalPalette } from '../palette/index.js'
import { mix } from '../utils/color.js'
import { boldToken, italicToken, token } from '../utils/semantic-helpers.js'
import type { SemanticTokenConfig } from './color-config-dsl.js'

/**
 * Variable tokens - переменные
 */
export const variablesConfig: SemanticTokenConfig = {
  rules: {
    variable: (p: UniversalPalette) =>
      token(mix(p.chromatic.neutral.light, p.chromatic.cyan.light, 0.5)),
    'variable.readonly': (p: UniversalPalette) =>
      italicToken(mix(p.chromatic.neutral.light, p.chromatic.cyan.light, 0.5)),
    parameter: (p: UniversalPalette) =>
      token(mix(p.chromatic.neutral.light, p.chromatic.cyan.light, 0.5)),
    'parameter.readonly': (p: UniversalPalette) =>
      italicToken(mix(p.chromatic.neutral.light, p.chromatic.cyan.light, 0.5)),
    property: (p: UniversalPalette) =>
      token(mix(p.chromatic.neutral.light, p.chromatic.cyan.light, 0.5)),
    'property.readonly': (p: UniversalPalette) =>
      italicToken(mix(p.chromatic.neutral.main, p.chromatic.cyan.main, 0.5)),
    'variable.defaultLibrary': (p: UniversalPalette) =>
      token(mix(p.chromatic.neutral.light, p.chromatic.cyan.light, 0.5)),
  },
}

/**
 * Function tokens - функции и методы
 */
export const functionsConfig: SemanticTokenConfig = {
  rules: {
    function: (p: UniversalPalette) => token(p.chromatic.blue.main),
    'function.declaration': (p: UniversalPalette) =>
      boldToken(p.chromatic.blue.light),
    'function.defaultLibrary': (p: UniversalPalette) =>
      token(p.chromatic.cyan.main),
    method: (p: UniversalPalette) => token(p.chromatic.blue.main),
    'method.declaration': (p: UniversalPalette) =>
      boldToken(p.chromatic.blue.light),
    constructor: (p: UniversalPalette) => boldToken(p.chromatic.yellow.main),
  },
}

/**
 * Type tokens - типы и классы
 */
export const typesConfig: SemanticTokenConfig = {
  rules: {
    type: (p: UniversalPalette) =>
      boldToken(mix(p.chromatic.neutral.light, p.chromatic.teal.light, 0.5)),
    interface: (p: UniversalPalette) =>
      boldToken(mix(p.chromatic.neutral.light, p.chromatic.teal.light, 0.5)),
    class: (p: UniversalPalette) =>
      boldToken(mix(p.chromatic.neutral.light, p.chromatic.yellow.light, 0.5)),
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
    'string.template': (p: UniversalPalette) => token(p.chromatic.emerald.main),
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
    decorator: (p: UniversalPalette) => italicToken(p.chromatic.pink.main),

    // Макросы
    macro: (p: UniversalPalette) => boldToken(p.chromatic.purple.main),

    // Namespace
    namespace: (p: UniversalPalette) => token(p.chromatic.indigo.main),

    // Enum
    enum: (p: UniversalPalette) => boldToken(p.chromatic.orange.main),
    enumMember: (p: UniversalPalette) => token(p.chromatic.orange.light),
  },
}
