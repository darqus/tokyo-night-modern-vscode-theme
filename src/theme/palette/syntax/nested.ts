/**
 * Nested syntax colors - Синтаксические цвета с вложенными структурами
 * Этот файл предоставляет структуру синтаксических цветов с вложенными свойствами,
 * которая используется генератором темы.
 */

import { syntaxColors } from '../syntax'
import { semanticColors } from '../semantic'
import { foundationColors as primitiveColors } from '../foundation'

// Локальные константы для жестко закодированных цветов, чтобы избежать дублирования
const opColor = '#bfd5de'
const strColor = '#85d0b7'
const numColor = '#a492ff'
const commentColor = '#696f87'
const docCommentColor = '#5a638c'
const docTagColor = '#646e9c'
const paramColor = '#73daca'
const tagColor = '#fd86e1'
const constColor = '#e55381'
const regexColor = '#b4f9f8'
const varColor = '#c0caf5'
const atRuleColor = '#ff9e64'
const htmlTagColor = '#769df7'
const htmlAttrColor = '#9a9af7'
const componentColor = '#fdc886'

// Определение базовых синтаксических цветов с вложенными структурами
export const base = {
  keyword: {
    base: syntaxColors.keyword, // #bb9af7 - ключевые слова (фиолетовый)
  },
  keywordControl: {
    base: syntaxColors.keywordControl, // #0da0ba - управляющие конструкции (темно-голубой)
  },
  keywordOperator: {
    base: syntaxColors.keywordOperator, // операторы (из оригинальной палитры)
  },
  operator: {
    base: syntaxColors.keywordOperator, // операторы (для совместимости с генератором)
  },
  delimiter: {
    base: opColor, // разделители (для совместимости с генератором)
  },
  string: {
    base: strColor, // строки (из оригинальной палитры)
  },
  stringEscape: {
    base: syntaxColors.stringEscape, // #7dcfff - экранированные символы
  },
  number: {
    base: numColor, // числа (из оригинальной палитры)
  },
  comment: {
    base: commentColor, // комментарии (из оригинальной палитры)
  },
  docComment: {
    base: docCommentColor, // документация (из оригинальной палитры)
  },
  docTag: {
    base: docTagColor, // теги документации (из оригинальной палитры)
  },
  function: {
    base: syntaxColors.function, // #7aa2f7 - функции (синий)
  },
  method: {
    base: syntaxColors.method, // #7aa2f7 - методы (синий)
  },
  class: {
    base: syntaxColors.class, // #0da0ba - классы (темно-голубой)
  },
  interface: {
    base: syntaxColors.interface, // #0da0ba - интерфейсы (темно-голубой)
  },
  type: {
    base: syntaxColors.type, // #bb9af7 - типы (фиолетовый)
  },
  variable: {
    base: varColor, // #c0caf5 - переменные (светло-серый)
  },
  parameter: {
    base: paramColor, // параметры (из оригинальной палитры)
  },
  property: {
    base: syntaxColors.property, // #7dcfff - свойства (голубой)
  },
  tag: {
    base: tagColor, // теги (из оригинальной палитры)
  },
  attribute: {
    base: syntaxColors.attribute, // #bb9af7 - атрибуты (фиолетовый)
  },
  attributeValue: {
    base: tagColor, // значения атрибутов (из оригинальной палитры)
  },
  entity: {
    base: syntaxColors.entity, // #0da0ba - HTML entities (темно-голубой)
  },
  constant: {
    base: constColor, // константы (из оригинальной палитры)
  },
  regexp: {
    base: regexColor, // регулярные выражения (из оригинальной палитры)
  },
  decorator: {
    base: syntaxColors.decorator, // #7aa2f7 - декораторы (синий)
  },
  annotation: {
    base: syntaxColors.annotation, // #bb9af7 - аннотации (фиолетовый)
  },
  invalid: {
    base: syntaxColors.invalid, // #ff5370 - неверный код
  },
  deprecated: {
    base: syntaxColors.deprecated, // #bb9af7 - устаревший код
 },
} as const

// Языковые специфичные цвета
export const javascript = {
  module: {
    base: varColor, // #c0caf5 - модули
  },
  this: {
    base: tagColor, // this (из оригинальной палитры)
  },
  prototype: {
    base: semanticColors.primary, // #7aa2f7 - прототипы
  },
} as const

export const typescript = {
  typeParameter: {
    base: semanticColors.secondary, // #bb9af7 - параметры типов
  },
  interface: {
    base: primitiveColors.cyan700, // #0da0ba - интерфейсы
  },
  enum: {
    base: semanticColors.secondary, // #bb9af7 - перечисления
  },
  namespace: {
    base: semanticColors.primary, // #7aa2f7 - пространства имен
  },
} as const

export const css = {
  property: {
    base: semanticColors.primary, // #7aa2f7 - CSS свойства
  },
  value: {
    base: strColor, // CSS значения (из оригинальной палитры)
  },
  selector: {
    base: varColor, // CSS селекторы (из оригинальной палитры)
  },
  pseudo: {
    base: primitiveColors.cyan700, // #0da0ba - псевдо-селекторы
  },
  atRule: {
    base: atRuleColor, // at-rules (из оригинальной палитры)
  },
} as const

export const html = {
  tag: {
    base: htmlTagColor, // HTML теги (из оригинальной палитры)
  },
  attribute: {
    base: htmlAttrColor, // HTML атрибуты (из оригинальной палитры)
  },
  attributeValue: {
    base: tagColor, // HTML значения атрибутов (из оригинальной палитры)
  },
  entity: {
    base: primitiveColors.cyan700, // #0da0ba - HTML entities
  },
  component: {
    base: componentColor, // компоненты (из оригинальной палитры)
  },
} as const

export const markdown = {
  heading: {
    base: primitiveColors.cyan500, // #7dcfff - заголовки
  },
  bold: {
    base: varColor, // #c0caf5 - жирный текст
  },
  italic: {
    base: varColor, // #c0caf5 - курсив
  },
  code: {
    base: primitiveColors.cyan500, // #7dcfff - код
  },
  link: {
    base: semanticColors.info, // ссылки (голубой)
  },
  quote: {
    base: semanticColors.textDisabled, // цитаты (темно-серый)
  },
  list: {
    base: primitiveColors.cyan700, // списки (из оригинальной палитры)
  },
} as const

export const json = {
  key: {
    base: semanticColors.primary, // #7aa2f7 - ключи JSON
  },
  string: {
    base: strColor, // строки JSON (из оригинальной палитры)
  },
  number: {
    base: numColor, // числа JSON (из оригинальной палитры)
  },
  boolean: {
    base: semanticColors.warning, // #e0af68 - булевы значения
  },
  null: {
    base: semanticColors.textSecondary, // #82859e - null значения
  },
} as const

// Объединенный экспорт всех синтаксических цветов
export const nestedSyntaxColors = {
  base,
  javascript,
  typescript,
  css,
  html,
  markdown,
  json,
} as const