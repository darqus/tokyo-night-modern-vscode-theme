import type { UniversalPalette } from '../palette/index.js'
import { boldToken, italicToken, token } from '../utils/semantic-helpers.js'
import type { SemanticTokenConfig } from './color-config-dsl.js'

/**
 * Variable tokens - переменные
 */
export const variablesConfig: SemanticTokenConfig = {
  rules: {
    variable: (p: UniversalPalette) => token(p.chromatic.blue.main), // c0caf5 -> blue.main
    'variable.readonly': (p: UniversalPalette) =>
      italicToken(p.chromatic.blue.main), // c0caf5 -> blue.main
    'variable.declaration': (p: UniversalPalette) =>
      token(p.chromatic.purple.main), // bb9af7 -> purple.main
    parameter: (p: UniversalPalette) => token(p.chromatic.amber.main), // d9d4cd -> close to amber.main
    'parameter.readonly': (p: UniversalPalette) =>
      italicToken(p.chromatic.amber.main), // d9d4cd -> close to amber.main
    'parameter.declaration': (p: UniversalPalette) =>
      token(p.chromatic.orange.main), // e0af68 -> orange.main
    property: (p: UniversalPalette) => token(p.chromatic.cyan.main), // 7dcfff -> cyan.main
    'property.readonly': (p: UniversalPalette) =>
      italicToken(p.chromatic.cyan.main), // 7dcfff -> cyan.main
    'property.declaration': (p: UniversalPalette) =>
      token(p.chromatic.teal.main), // 73daca -> teal.main
    'variable.defaultLibrary': (p: UniversalPalette) =>
      token(p.chromatic.cyan.light), // 2ac3de -> close to cyan.light
    'variable.declaration.readonly': (p: UniversalPalette) =>
      italicToken(p.chromatic.purple.main), // bb9af7 -> purple.main
  },
}

/**
 * Function tokens - функции и методы
 */
export const functionsConfig: SemanticTokenConfig = {
  rules: {
    function: (p: UniversalPalette) => token(p.chromatic.blue.main), // 7aa2f7 -> blue.main
    'function.declaration': (p: UniversalPalette) =>
      boldToken(p.chromatic.blue.main), // 7aa2f7 -> blue.main
    'function.defaultLibrary': (p: UniversalPalette) =>
      token(p.chromatic.cyan.main), // 2ac3de -> close to cyan.main
    method: (p: UniversalPalette) => token(p.chromatic.blue.main), // 7aa2f7 -> blue.main
    'method.declaration': (p: UniversalPalette) =>
      boldToken(p.chromatic.blue.main), // 7aa2f7 -> blue.main
    constructor: (p: UniversalPalette) => boldToken(p.chromatic.yellow.main), // e0af68 -> orange.main (closest)
  },
}

/**
 * Type tokens - типы и классы
 */
export const typesConfig: SemanticTokenConfig = {
  rules: {
    type: (p: UniversalPalette) => boldToken(p.chromatic.teal.main), // teal.light is closest to 0db9d7
    interface: (p: UniversalPalette) => boldToken(p.chromatic.teal.main), // teal.light is closest to 0db9d7
    class: (p: UniversalPalette) => boldToken(p.chromatic.blue.main), // c0caf5 -> blue.main (closest)
  },
}

/**
 * Modifier tokens - модификаторы (static, readonly и т.д.)
 */
export const modifiersConfig: SemanticTokenConfig = {
  rules: {
    static: (p: UniversalPalette) => italicToken(p.chromatic.blue.main), // 7aa2f7 -> blue.main
    readonly: (p: UniversalPalette) => italicToken(p.chromatic.cyan.main), // 7dcfff -> cyan.main
  },
}

/**
 * Literal tokens - литералы (строки, числа, булевы)
 */
export const literalsConfig: SemanticTokenConfig = {
  rules: {
    string: (p: UniversalPalette) => token(p.chromatic.green.main), // 9ece6a -> green.main
    number: (p: UniversalPalette) => token(p.chromatic.orange.main), // ff9e64 -> orange.main
    boolean: (p: UniversalPalette) => token(p.chromatic.red.main), // f7768e -> red.main
    'string.escape': (p: UniversalPalette) => token(p.chromatic.yellow.main), // bb9af7 -> purple.main (closest)
    'string.template': (p: UniversalPalette) => token(p.chromatic.green.main), // 9ece6a -> green.main
  },
}

/**
 * Framework tokens - специфичные для современных фреймворков
 */
export const frameworksConfig: SemanticTokenConfig = {
  rules: {
    // React/Vue/Angular компоненты
    'class.component': (p: UniversalPalette) =>
      boldToken(p.chromatic.teal.main), // 0db9d7 -> teal.main
    'interface.component': (p: UniversalPalette) =>
      boldToken(p.chromatic.teal.main), // 0db9d7 -> teal.main

    // Декораторы
    decorator: (p: UniversalPalette) => italicToken(p.chromatic.blue.main), // 7aa2f7 -> blue.main

    // Макросы
    macro: (p: UniversalPalette) => boldToken(p.chromatic.purple.main), // bb9af7 -> purple.main

    // Namespace
    namespace: (p: UniversalPalette) => token(p.chromatic.blue.main), // 0db9d7 -> blue.main (closest)

    // Enum
    enum: (p: UniversalPalette) => boldToken(p.chromatic.orange.main), // ff9e64 -> orange.main
    enumMember: (p: UniversalPalette) => token(p.chromatic.orange.light), // ff9e64 -> orange.light (closest)
  },
}
