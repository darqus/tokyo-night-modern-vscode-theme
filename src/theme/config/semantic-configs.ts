import type { UniversalPalette } from '../palette/universal-base.js'
import { boldToken, italicToken, token } from '../utils/semantic-helpers.js'
import type { SemanticTokenConfig } from './color-config-dsl.js'

/**
 * Variable tokens - переменные
 *
 * Улучшения:
 * - Параметры функций используют более контрастный teal вместо желтого
 * - Добавлены новые семантические токены для лучшей различимости
 */
export const variablesConfig: SemanticTokenConfig = {
  rules: {
    'variable.readonly': (p: UniversalPalette) =>
      italicToken(p.chromatic.sky.light),
    'variable.declaration': (p: UniversalPalette) =>
      token(p.chromatic.purple.main),

    // Параметры функций - улучшенная контрастность и читаемость
    parameter: (p: UniversalPalette) => token(p.chromatic.teal.main), // Teal вместо желтого - лучше контраст
    'parameter.readonly': (p: UniversalPalette) =>
      italicToken(p.chromatic.teal.light),
    'parameter.declaration': (p: UniversalPalette) =>
      token(p.chromatic.cyan.main), // Cyan для деклараций параметров

    // Свойства объектов
    property: (p: UniversalPalette) => token(p.chromatic.cyan.main),
    'property.readonly': (p: UniversalPalette) =>
      italicToken(p.chromatic.cyan.light),
    'property.declaration': (p: UniversalPalette) =>
      token(p.chromatic.sky.main), // Sky для деклараций свойств

    // Библиотечные переменные
    'variable.defaultLibrary': (p: UniversalPalette) =>
      token(p.chromatic.blue.light),
    'variable.declaration.readonly': (p: UniversalPalette) =>
      italicToken(p.chromatic.purple.main),

    // Дополнительные улучшенные токены
    'variable.constant': (p: UniversalPalette) =>
      boldToken(p.chromatic.orange.main),
    'variable.global': (p: UniversalPalette) => token(p.chromatic.violet.main),
    'parameter.type': (p: UniversalPalette) =>
      italicToken(p.chromatic.indigo.main),
  },
}

/**
 * Function tokens - функции и методы
 *
 * Улучшения:
 * - Конструкторы используют более выразительный цвет
 * - Добавлены новые токены для асинхронных функций
 */
export const functionsConfig: SemanticTokenConfig = {
  rules: {
    function: (p: UniversalPalette) => token(p.chromatic.blue.main),
    'function.declaration': (p: UniversalPalette) =>
      boldToken(p.chromatic.blue.main),
    'function.defaultLibrary': (p: UniversalPalette) =>
      token(p.chromatic.cyan.main),
    'function.async': (p: UniversalPalette) =>
      italicToken(p.chromatic.pink.main), // Розовый для async функций
    'function.generator': (p: UniversalPalette) =>
      italicToken(p.chromatic.violet.main), // Фиолетовый для генераторов

    method: (p: UniversalPalette) => token(p.chromatic.blue.main),
    'method.declaration': (p: UniversalPalette) =>
      boldToken(p.chromatic.blue.main),
    'method.static': (p: UniversalPalette) =>
      italicToken(p.chromatic.indigo.main), // Индиго для статических методов
    'method.abstract': (p: UniversalPalette) =>
      italicToken(p.chromatic.purple.main), // Пурпурный для абстрактных методов

    constructor: (p: UniversalPalette) => boldToken(p.chromatic.amber.main), // Amber вместо желтого
    'function.builtin': (p: UniversalPalette) => token(p.chromatic.sky.main), // Sky для встроенных функций
  },
}

/**
 * Type tokens - типы и классы
 *
 * Улучшения:
 * - Типы используют более яркие и контрастные цвета
 * - Добавлена поддержка современных TypeScript возможностей
 */
export const typesConfig: SemanticTokenConfig = {
  rules: {
    // Основные типы - улучшенная контрастность
    type: (p: UniversalPalette) => boldToken(p.chromatic.teal.main), // Teal вместо amber.dark
    interface: (p: UniversalPalette) => boldToken(p.chromatic.cyan.main), // Cyan вместо amber.dark
    class: (p: UniversalPalette) => boldToken(p.chromatic.pink.main),

    // Улучшенная поддержка TypeScript
    'type.generic': (p: UniversalPalette) =>
      italicToken(p.chromatic.violet.light), // Фиолетовый для дженериков
    'type.parameter': (p: UniversalPalette) =>
      italicToken(p.chromatic.indigo.main), // Индиго для параметров типов
    'type.builtin': (p: UniversalPalette) => token(p.chromatic.blue.light), // Светло-синий для встроенных типов
    'type.enum': (p: UniversalPalette) => boldToken(p.chromatic.orange.main), // Оранжевый для enum

    // Декларации типов
    'class.declaration': (p: UniversalPalette) =>
      boldToken(p.chromatic.pink.main),
    'interface.declaration': (p: UniversalPalette) =>
      boldToken(p.chromatic.cyan.main),
    'type.declaration': (p: UniversalPalette) =>
      boldToken(p.chromatic.teal.main),
    'type.alias': (p: UniversalPalette) => token(p.chromatic.sky.main), // Sky для алиасов типов

    // Utility types - улучшенная различимость
    'type.utility': (p: UniversalPalette) => boldToken(p.chromatic.violet.main), // Жирный для utility types
    'type.condition': (p: UniversalPalette) =>
      italicToken(p.chromatic.purple.main), // Условные типы
    'type.mapped': (p: UniversalPalette) => token(p.chromatic.indigo.light), // Mapped types

    // TypeScript generics keywords
    'keyword.generic': (p: UniversalPalette) =>
      boldToken(p.chromatic.purple.main), // Жирный для extends, keyof
    'keyword.extends': (p: UniversalPalette) => token(p.chromatic.purple.dark), // Темный для extends
    'keyword.keyof': (p: UniversalPalette) => token(p.chromatic.purple.light), // Светлый для keyof
    'keyword.infer': (p: UniversalPalette) =>
      italicToken(p.chromatic.violet.main), // Курсив для infer

    // Дополнительные типовые токены
    'type.primitive': (p: UniversalPalette) => token(p.chromatic.emerald.main), // Изумрудный для примитивов
    'type.union': (p: UniversalPalette) => token(p.chromatic.cyan.light), // Светло-бирюзовый для union
    'type.intersection': (p: UniversalPalette) => token(p.chromatic.blue.light), // Светло-синий для intersection
  },
}

/**
 * Modifier tokens - модификаторы (static, readonly и т.д.)
 *
 * Улучшения:
 * - Более четкое разделение между модификаторами
 * - Добавлены новые модификаторы доступа
 */
export const modifiersConfig: SemanticTokenConfig = {
  rules: {
    static: (p: UniversalPalette) => boldToken(p.chromatic.indigo.main), // Жирный индиго
    readonly: (p: UniversalPalette) => italicToken(p.chromatic.cyan.main),
    abstract: (p: UniversalPalette) => italicToken(p.chromatic.violet.main), // Фиолетовый для abstract
    final: (p: UniversalPalette) => boldToken(p.chromatic.orange.main), // Оранжевый для final
    override: (p: UniversalPalette) => italicToken(p.chromatic.pink.main), // Розовый для override

    // Модификаторы доступа
    'access.public': (p: UniversalPalette) => token(p.chromatic.green.main),
    'access.private': (p: UniversalPalette) => token(p.chromatic.red.main),
    'access.protected': (p: UniversalPalette) => token(p.chromatic.amber.main),
    'access.internal': (p: UniversalPalette) => token(p.chromatic.gray.main),
  },
}

/**
 * Critical keywords tokens - критические ключевые слова (this, super и т.д.)
 *
 * Улучшения:
 * - Более выразительные цвета для критических ключевых слов
 */
export const criticalKeywordsConfig: SemanticTokenConfig = {
  rules: {
    'keyword.this': (p: UniversalPalette) => boldToken(p.chromatic.red.main),
    'keyword.super': (p: UniversalPalette) => boldToken(p.chromatic.red.light), // Светлее для super
    'keyword.self': (p: UniversalPalette) => boldToken(p.chromatic.red.dark), // Темнее для self
    'variable.language.self': (p: UniversalPalette) =>
      boldToken(p.chromatic.red.dark),
    'keyword.new': (p: UniversalPalette) => boldToken(p.chromatic.orange.main), // Оранжевый для new
    'keyword.delete': (p: UniversalPalette) =>
      boldToken(p.chromatic.red.bright), // Яркий для delete
    'keyword.void': (p: UniversalPalette) => token(p.chromatic.gray.main), // Серый для void
    'keyword.typeof': (p: UniversalPalette) => token(p.chromatic.purple.light), // Фиолетовый для typeof
    'keyword.instanceof': (p: UniversalPalette) =>
      token(p.chromatic.indigo.light), // Индиго для instanceof
  },
}

/**
 * Literal tokens - литералы (строки, числа, булевы)
 *
 * Улучшения:
 * - Более контрастные цвета для разных типов литералов
 */
export const literalsConfig: SemanticTokenConfig = {
  rules: {
    string: (p: UniversalPalette) => token(p.chromatic.green.main),
    'string.template': (p: UniversalPalette) => token(p.chromatic.lime.main), // Лайм для template strings
    'string.regex': (p: UniversalPalette) => token(p.chromatic.orange.light), // Светло-оранжевый для regex
    number: (p: UniversalPalette) => token(p.chromatic.orange.main),
    'number.binary': (p: UniversalPalette) => token(p.chromatic.amber.light), // Светло-янтарный для бинарных
    'number.hex': (p: UniversalPalette) => token(p.chromatic.purple.light), // Фиолетовый для hex
    'number.octal': (p: UniversalPalette) => token(p.chromatic.cyan.light), // Бирюзовый для octal
    boolean: (p: UniversalPalette) => boldToken(p.chromatic.pink.main), // Жирный розовый для булевых
    null: (p: UniversalPalette) => token(p.chromatic.gray.main), // Серый для null
    undefined: (p: UniversalPalette) => token(p.chromatic.slate.main), // Сланцевый для undefined
    'string.escape': (p: UniversalPalette) =>
      boldToken(p.chromatic.yellow.main), // Желтый для escape
    'string.character': (p: UniversalPalette) =>
      token(p.chromatic.emerald.main), // Изумрудный для символов
  },
}

/**
 * Framework tokens - специфичные для современных фреймворков
 *
 * Улучшения:
 * - Более организованная структура цветов
 * - Улучшенная контрастность для фреймворк-специфичных токенов
 */
export const frameworksConfig: SemanticTokenConfig = {
  rules: {
    // React/Vue/Angular компоненты
    'class.component': (p: UniversalPalette) =>
      boldToken(p.chromatic.teal.main),
    'interface.component': (p: UniversalPalette) =>
      boldToken(p.chromatic.teal.dark),
    'function.component': (p: UniversalPalette) =>
      token(p.chromatic.emerald.main), // Изумрудный для функциональных компонентов

    // Декораторы
    decorator: (p: UniversalPalette) => boldToken(p.chromatic.violet.main), // Жирный фиолетовый

    // Макросы
    macro: (p: UniversalPalette) => boldToken(p.chromatic.orange.main), // Оранжевый для макросов

    // Namespace
    namespace: (p: UniversalPalette) => token(p.chromatic.blue.main),

    // Enum
    enum: (p: UniversalPalette) => boldToken(p.chromatic.orange.main),
    enumMember: (p: UniversalPalette) => token(p.chromatic.orange.light),

    // JSX/TSX улучшения
    'jsx.tag': (p: UniversalPalette) => token(p.chromatic.red.main),
    'jsx.attribute': (p: UniversalPalette) => token(p.chromatic.purple.main),
    'jsx.text': (p: UniversalPalette) => token(p.foreground.secondary.main),
    'jsx.children': (p: UniversalPalette) => token(p.foreground.primary.main), // Основной цвет для children
    'react.hook': (p: UniversalPalette) => boldToken(p.chromatic.cyan.main), // Жирный для React hooks

    // TypeScript-specific улучшения
    'typescript.generic': (p: UniversalPalette) =>
      italicToken(p.chromatic.violet.light),
    'typescript.utility': (p: UniversalPalette) =>
      boldToken(p.chromatic.violet.main), // Жирный для utility types
    'typescript.typeof': (p: UniversalPalette) =>
      token(p.chromatic.purple.light), // Фиолетовый для typeof
    'typescript.keyof': (p: UniversalPalette) =>
      token(p.chromatic.indigo.light), // Индиго для keyof
    'typescript.infer': (p: UniversalPalette) =>
      italicToken(p.chromatic.pink.light), // Розовый для infer
    'typescript.extends': (p: UniversalPalette) =>
      token(p.chromatic.blue.light), // Синий для extends

    // Rust-specific
    'rust.lifetime': (p: UniversalPalette) =>
      italicToken(p.chromatic.purple.main),
    'rust.macro': (p: UniversalPalette) => boldToken(p.chromatic.orange.main),
    'rust.derive': (p: UniversalPalette) => italicToken(p.chromatic.amber.main),
    'rust.pattern.match': (p: UniversalPalette) =>
      token(p.chromatic.purple.main),
    'rust.pattern.iflet': (p: UniversalPalette) =>
      token(p.chromatic.purple.main),

    // Nuxt.js specific tokens - улучшенная организация
    'nuxt.composable': (p: UniversalPalette) =>
      boldToken(p.chromatic.green.main),
    'nuxt.directive': (p: UniversalPalette) => token(p.chromatic.violet.main),
    'nuxt.component': (p: UniversalPalette) => boldToken(p.chromatic.teal.main),
    'nuxt.plugin': (p: UniversalPalette) =>
      italicToken(p.chromatic.orange.main),
    'nuxt.middleware': (p: UniversalPalette) => token(p.chromatic.pink.main),
    'nuxt.server': (p: UniversalPalette) => boldToken(p.chromatic.red.main),
    'nuxt.client': (p: UniversalPalette) => boldToken(p.chromatic.blue.main),
    'nuxt.config': (p: UniversalPalette) => token(p.chromatic.amber.dark),
    'nuxt.route': (p: UniversalPalette) => token(p.chromatic.cyan.main),
    'nuxt.meta': (p: UniversalPalette) => italicToken(p.chromatic.purple.light),
    'nuxt.store': (p: UniversalPalette) => boldToken(p.chromatic.emerald.main),
    'nuxt.state': (p: UniversalPalette) => token(p.chromatic.yellow.main),
    'nuxt.action': (p: UniversalPalette) => boldToken(p.chromatic.fuchsia.main),
    'nuxt.getter': (p: UniversalPalette) => italicToken(p.chromatic.sky.main),
    'nuxt.mutation': (p: UniversalPalette) => token(p.chromatic.rose.main),
    'nuxt.hook': (p: UniversalPalette) => boldToken(p.chromatic.indigo.main),
    'nuxt.util': (p: UniversalPalette) => token(p.chromatic.slate.main),
    'nuxt.helper': (p: UniversalPalette) => italicToken(p.chromatic.stone.main),
    'nuxt.layout': (p: UniversalPalette) => boldToken(p.chromatic.zinc.main),
    'nuxt.page': (p: UniversalPalette) => token(p.chromatic.neutral.main),
    'nuxt.error': (p: UniversalPalette) => boldToken(p.chromatic.red.bright),
    'nuxt.loading': (p: UniversalPalette) =>
      italicToken(p.chromatic.yellow.light),
    'nuxt.cache': (p: UniversalPalette) => token(p.chromatic.gray.main),
    'nuxt.i18n': (p: UniversalPalette) => boldToken(p.chromatic.teal.light),
    'nuxt.head': (p: UniversalPalette) => token(p.chromatic.pink.light),
    'nuxt.body': (p: UniversalPalette) => italicToken(p.chromatic.violet.light),
    'nuxt.script': (p: UniversalPalette) => boldToken(p.chromatic.blue.light),
    'nuxt.style': (p: UniversalPalette) => token(p.chromatic.green.light),
    'nuxt.image': (p: UniversalPalette) => boldToken(p.chromatic.orange.light),
    'nuxt.link': (p: UniversalPalette) => italicToken(p.chromatic.cyan.light),
    'nuxt.form': (p: UniversalPalette) => token(p.chromatic.red.light),
    'nuxt.input': (p: UniversalPalette) => boldToken(p.chromatic.amber.light),
    'nuxt.button': (p: UniversalPalette) => token(p.chromatic.purple.light),
    'nuxt.modal': (p: UniversalPalette) =>
      italicToken(p.chromatic.indigo.light),
    'nuxt.toast': (p: UniversalPalette) => boldToken(p.chromatic.yellow.bright),
    'nuxt.notification': (p: UniversalPalette) =>
      token(p.chromatic.green.bright),
    'nuxt.card': (p: UniversalPalette) => italicToken(p.chromatic.blue.bright),
    'nuxt.table': (p: UniversalPalette) => boldToken(p.chromatic.slate.light),
    'nuxt.list': (p: UniversalPalette) => token(p.chromatic.stone.light),
    'nuxt.nav': (p: UniversalPalette) => boldToken(p.chromatic.zinc.light),
    'nuxt.footer': (p: UniversalPalette) =>
      italicToken(p.chromatic.neutral.light),
    'nuxt.header': (p: UniversalPalette) => token(p.chromatic.gray.light),
    'nuxt.sidebar': (p: UniversalPalette) => boldToken(p.chromatic.red.dark),
    'nuxt.content': (p: UniversalPalette) =>
      italicToken(p.chromatic.orange.dark),
    'nuxt.api': (p: UniversalPalette) => token(p.chromatic.pink.dark),
    'nuxt.fetch': (p: UniversalPalette) => boldToken(p.chromatic.violet.dark),
    'nuxt.asyncData': (p: UniversalPalette) =>
      italicToken(p.chromatic.teal.dark),
    'nuxt.useFetch': (p: UniversalPalette) => token(p.chromatic.cyan.dark),
    'nuxt.lazy': (p: UniversalPalette) => boldToken(p.chromatic.emerald.dark),
    'nuxt.defineNuxtPlugin': (p: UniversalPalette) =>
      token(p.chromatic.yellow.dark),
    'nuxt.defineNuxtMiddleware': (p: UniversalPalette) =>
      italicToken(p.chromatic.fuchsia.dark),
    'nuxt.defineNuxtRouteMiddleware': (p: UniversalPalette) =>
      boldToken(p.chromatic.sky.dark),
    'nuxt.defineNuxtComponent': (p: UniversalPalette) =>
      token(p.chromatic.rose.dark),
    'nuxt.defineNuxtConfig': (p: UniversalPalette) =>
      italicToken(p.chromatic.slate.dark),
    'nuxt.nuxtConfig': (p: UniversalPalette) =>
      boldToken(p.chromatic.stone.dark),
    'nuxt.runtimeConfig': (p: UniversalPalette) => token(p.chromatic.zinc.dark),
    'nuxt.appConfig': (p: UniversalPalette) =>
      italicToken(p.chromatic.neutral.dark),
    'nuxt.vueApp': (p: UniversalPalette) => boldToken(p.chromatic.gray.dark),
    'nuxt.h3Event': (p: UniversalPalette) => token(p.chromatic.red.main),
    'nuxt.h3Error': (p: UniversalPalette) =>
      italicToken(p.chromatic.orange.main),
    'nuxt.h3Response': (p: UniversalPalette) =>
      boldToken(p.chromatic.pink.main),
    'nuxt.h3Request': (p: UniversalPalette) => token(p.chromatic.violet.main),
    'nuxt.h3Handler': (p: UniversalPalette) =>
      italicToken(p.chromatic.teal.main),
    'nuxt.h3Middleware': (p: UniversalPalette) =>
      boldToken(p.chromatic.cyan.main),

    // Enhanced Nuxt 4 semantic tokens with better organization
    'nuxt4.composable': (p: UniversalPalette) =>
      boldToken(p.chromatic.green.main),
    'nuxt4.server': (p: UniversalPalette) => boldToken(p.chromatic.red.main),
    'nuxt4.client': (p: UniversalPalette) => boldToken(p.chromatic.blue.main),
    'nuxt4.config': (p: UniversalPalette) => token(p.chromatic.amber.dark),
    'nuxt4.route': (p: UniversalPalette) => token(p.chromatic.cyan.main),
    'nuxt4.meta': (p: UniversalPalette) =>
      italicToken(p.chromatic.purple.light),
    'nuxt4.store': (p: UniversalPalette) => boldToken(p.chromatic.emerald.main),
    'nuxt4.state': (p: UniversalPalette) => token(p.chromatic.yellow.main),
    'nuxt4.action': (p: UniversalPalette) =>
      boldToken(p.chromatic.fuchsia.main),
    'nuxt4.getter': (p: UniversalPalette) => italicToken(p.chromatic.sky.main),
    'nuxt4.mutation': (p: UniversalPalette) => token(p.chromatic.rose.main),
    'nuxt4.hook': (p: UniversalPalette) => boldToken(p.chromatic.indigo.main),
    'nuxt4.util': (p: UniversalPalette) => token(p.chromatic.slate.main),
    'nuxt4.helper': (p: UniversalPalette) =>
      italicToken(p.chromatic.stone.main),
    'nuxt4.layout': (p: UniversalPalette) => boldToken(p.chromatic.zinc.main),
    'nuxt4.page': (p: UniversalPalette) => token(p.chromatic.neutral.main),
    'nuxt4.error': (p: UniversalPalette) => boldToken(p.chromatic.red.bright),
    'nuxt4.loading': (p: UniversalPalette) =>
      italicToken(p.chromatic.yellow.light),
    'nuxt4.cache': (p: UniversalPalette) => token(p.chromatic.gray.main),
    'nuxt4.i18n': (p: UniversalPalette) => boldToken(p.chromatic.teal.light),
    'nuxt4.head': (p: UniversalPalette) => token(p.chromatic.pink.light),
    'nuxt4.body': (p: UniversalPalette) =>
      italicToken(p.chromatic.violet.light),
    'nuxt4.script': (p: UniversalPalette) => boldToken(p.chromatic.blue.light),
    'nuxt4.style': (p: UniversalPalette) => token(p.chromatic.green.light),
    'nuxt4.image': (p: UniversalPalette) => boldToken(p.chromatic.orange.light),
    'nuxt4.link': (p: UniversalPalette) => italicToken(p.chromatic.cyan.light),
    'nuxt4.form': (p: UniversalPalette) => token(p.chromatic.red.light),
    'nuxt4.input': (p: UniversalPalette) => boldToken(p.chromatic.amber.light),
    'nuxt4.button': (p: UniversalPalette) => token(p.chromatic.purple.light),
    'nuxt4.modal': (p: UniversalPalette) =>
      italicToken(p.chromatic.indigo.light),
    'nuxt4.toast': (p: UniversalPalette) =>
      boldToken(p.chromatic.yellow.bright),
    'nuxt4.notification': (p: UniversalPalette) =>
      token(p.chromatic.green.bright),
    'nuxt4.card': (p: UniversalPalette) => italicToken(p.chromatic.blue.bright),
    'nuxt4.table': (p: UniversalPalette) => boldToken(p.chromatic.slate.light),
    'nuxt4.list': (p: UniversalPalette) => token(p.chromatic.stone.light),
    'nuxt4.nav': (p: UniversalPalette) => boldToken(p.chromatic.zinc.light),
    'nuxt4.footer': (p: UniversalPalette) =>
      italicToken(p.chromatic.neutral.light),
    'nuxt4.header': (p: UniversalPalette) => token(p.chromatic.gray.light),
    'nuxt4.sidebar': (p: UniversalPalette) => boldToken(p.chromatic.red.dark),
    'nuxt4.content': (p: UniversalPalette) =>
      italicToken(p.chromatic.orange.dark),
    'nuxt4.api': (p: UniversalPalette) => token(p.chromatic.pink.dark),
    'nuxt4.fetch': (p: UniversalPalette) => boldToken(p.chromatic.violet.dark),
    'nuxt4.asyncData': (p: UniversalPalette) =>
      italicToken(p.chromatic.teal.dark),
    'nuxt4.useFetch': (p: UniversalPalette) => token(p.chromatic.cyan.dark),
    'nuxt4.lazy': (p: UniversalPalette) => boldToken(p.chromatic.emerald.dark),
    'nuxt4.defineNuxtPlugin': (p: UniversalPalette) =>
      token(p.chromatic.yellow.dark),
    'nuxt4.defineNuxtMiddleware': (p: UniversalPalette) =>
      italicToken(p.chromatic.fuchsia.dark),
    'nuxt4.defineNuxtRouteMiddleware': (p: UniversalPalette) =>
      boldToken(p.chromatic.sky.dark),
    'nuxt4.defineNuxtComponent': (p: UniversalPalette) =>
      token(p.chromatic.rose.dark),
    'nuxt4.defineNuxtConfig': (p: UniversalPalette) =>
      italicToken(p.chromatic.slate.dark),
    'nuxt4.nuxtConfig': (p: UniversalPalette) =>
      boldToken(p.chromatic.stone.dark),
    'nuxt4.runtimeConfig': (p: UniversalPalette) =>
      token(p.chromatic.zinc.dark),
    'nuxt4.appConfig': (p: UniversalPalette) =>
      italicToken(p.chromatic.neutral.dark),
    'nuxt4.vueApp': (p: UniversalPalette) => boldToken(p.chromatic.gray.dark),
    'nuxt4.h3Event': (p: UniversalPalette) => token(p.chromatic.red.main),
    'nuxt4.h3Error': (p: UniversalPalette) =>
      italicToken(p.chromatic.orange.main),
    'nuxt4.h3Response': (p: UniversalPalette) =>
      boldToken(p.chromatic.pink.main),
    'nuxt4.h3Request': (p: UniversalPalette) => token(p.chromatic.violet.main),
    'nuxt4.h3Handler': (p: UniversalPalette) =>
      italicToken(p.chromatic.teal.main),
    'nuxt4.h3Middleware': (p: UniversalPalette) =>
      boldToken(p.chromatic.cyan.main),
  },
}
