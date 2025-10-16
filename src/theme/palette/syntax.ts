/**
 * Syntax Colors - Programming language syntax highlighting colors
 * Цвета для подсветки синтаксиса языков программирования
 */

import { foundationColors as primitiveColors } from './foundation'
import { semanticColors } from './semantic'

export interface SyntaxColors {
  // Basic syntax elements
  keyword: string
  keywordControl: string
  keywordOperator: string
  string: string
  stringEscape: string
  number: string
  comment: string
  commentDoc: string
  commentDocTag: string

  // Language constructs
  function: string
  method: string
  class: string
  interface: string
  type: string
  variable: string
  parameter: string
  property: string

  // Markup languages
  tag: string
  attribute: string
  attributeValue: string
  entity: string

  // Special tokens
  constant: string
  regexp: string
  decorator: string
  annotation: string

  // Error states
  invalid: string
  deprecated: string

  // Language-specific
  javascript: {
    module: string
    this: string
    prototype: string
  }

  typescript: {
    typeParameter: string
    interface: string
    enum: string
    namespace: string
  }

  css: {
    property: string
    value: string
    selector: string
    pseudo: string
    atRule: string
  }

  html: {
    tag: string
    attribute: string
    attributeValue: string
    entity: string
    component: string
  }

  markdown: {
    heading: string
    bold: string
    italic: string
    code: string
    link: string
    quote: string
    list: string
  }

  json: {
    key: string
    string: string
    number: string
    boolean: string
    null: string
  }
}

/**
 * Syntax highlighting color palette
 * Цвета для подсветки синтаксиса, основанные на анализе использования
 */

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

export const syntaxColors: SyntaxColors = {
  // Basic syntax elements - основные элементы синтаксиса
  keyword: semanticColors.secondary, // #bb9af7 - ключевые слова (фиолетовый)
  keywordControl: primitiveColors.cyan700, // #0da0ba - управляющие конструкции (темно-голубой)
  keywordOperator: opColor, // операторы (из оригинальной палитры)
  string: strColor, // строки (из оригинальной палитры)
  stringEscape: primitiveColors.cyan500, // #7dcfff - экранированные символы
  number: numColor, // числа (из оригинальной палитры)
  comment: commentColor, // комментарии (из оригинальной палитры)
  commentDoc: docCommentColor, // документация (из оригинальной палитры)
  commentDocTag: docTagColor, // теги документации (из оригинальной палитры)

  // Language constructs - языковые конструкции
  function: semanticColors.primary, // #7aa2f7 - функции (синий)
  method: semanticColors.primary, // #7aa2f7 - методы (синий)
  class: primitiveColors.cyan700, // #0da0ba - классы (темно-голубой)
  interface: primitiveColors.cyan700, // #0da0ba - интерфейсы (темно-голубой)
  type: semanticColors.secondary, // #bb9af7 - типы (фиолетовый)
  variable: varColor, // #c0caf5 - переменные (светло-серый)
  parameter: paramColor, // параметры (из оригинальной палитры)
  property: primitiveColors.cyan500, // #7dcfff - свойства (голубой)

  // Markup languages - разметочные языки
  tag: tagColor, // теги (из оригинальной палитры)
  attribute: semanticColors.secondary, // #bb9af7 - атрибуты (фиолетовый)
  attributeValue: tagColor, // значения атрибутов (из оригинальной палитры)
  entity: primitiveColors.cyan700, // #0da0ba - HTML entities (темно-голубой)

  // Special tokens - специальные токены
  constant: constColor, // константы (из оригинальной палитры)
  regexp: regexColor, // регулярные выражения (из оригинальной палитры)
  decorator: semanticColors.primary, // #7aa2f7 - декораторы (синий)
  annotation: semanticColors.secondary, // #bb9af7 - аннотации (фиолетовый)

  // Error states - состояния ошибок
  invalid: semanticColors.error, // #ff5370 - неверный код
  deprecated: semanticColors.secondary, // #bb9af7 - устаревший код

  // Language-specific - специфичные для языков
  javascript: {
    module: varColor, // #c0caf5 - модули
    this: tagColor, // this (из оригинальной палитры)
    prototype: semanticColors.primary, // #7aa2f7 - прототипы
  },

  typescript: {
    typeParameter: semanticColors.secondary, // #bb9af7 - параметры типов
    interface: primitiveColors.cyan700, // #0da0ba - интерфейсы
    enum: semanticColors.secondary, // #bb9af7 - перечисления
    namespace: semanticColors.primary, // #7aa2f7 - пространства имен
  },

  css: {
    property: semanticColors.primary, // #7aa2f7 - CSS свойства
    value: strColor, // CSS значения (из оригинальной палитры)
    selector: varColor, // CSS селекторы (из оригинальной палитры)
    pseudo: primitiveColors.cyan700, // #0da0ba - псевдо-селекторы
    atRule: atRuleColor, // at-rules (из оригинальной палитры)
  },

  html: {
    tag: htmlTagColor, // HTML теги (из оригинальной палитры)
    attribute: htmlAttrColor, // HTML атрибуты (из оригинальной палитры)
    attributeValue: tagColor, // HTML значения атрибутов (из оригинальной палитры)
    entity: primitiveColors.cyan700, // #0da0ba - HTML entities
    component: componentColor, // компоненты (из оригинальной палитры)
  },

  markdown: {
    heading: primitiveColors.cyan500, // #7dcfff - заголовки
    bold: varColor, // #c0caf5 - жирный текст
    italic: varColor, // #c0caf5 - курсив
    code: primitiveColors.cyan500, // #7dcfff - код
    link: semanticColors.info, // ссылки (голубой)
    quote: semanticColors.textDisabled, // цитаты (темно-серый)
    list: primitiveColors.cyan700, // списки (из оригинальной палитры)
  },

  json: {
    key: semanticColors.primary, // #7aa2f7 - ключи JSON
    string: strColor, // строки JSON (из оригинальной палитры)
    number: numColor, // числа JSON (из оригинальной палитры)
    boolean: semanticColors.warning, // #e0af68 - булевы значения
    null: semanticColors.textSecondary, // #82859e - null значения
  },
}

/**
 * Utility function to get syntax color by path
 * @param path - dot notation path like 'keyword' or 'javascript.module'
 */
export function getSyntaxColor(path: string): string {
  const keys = path.split('.')
  let current: any = syntaxColors

  for (const key of keys) {
    current = current?.[key]
    if (current === undefined) {
      throw new Error(`Syntax color not found: ${path}`)
    }
  }

  return current
}

/**
 * Flattened syntax colors for easy access
 * Плоский объект всех синтаксических цветов для простого доступа
 */
export const flatSyntaxColors = {
  // Basic
  keyword: syntaxColors.keyword,
  keywordControl: syntaxColors.keywordControl,
  keywordOperator: syntaxColors.keywordOperator,
  string: syntaxColors.string,
  stringEscape: syntaxColors.stringEscape,
  number: syntaxColors.number,
  comment: syntaxColors.comment,
  commentDoc: syntaxColors.commentDoc,
  commentDocTag: syntaxColors.commentDocTag,
  function: syntaxColors.function,
  method: syntaxColors.method,
  class: syntaxColors.class,
  interface: syntaxColors.interface,
  type: syntaxColors.type,
  variable: syntaxColors.variable,
  parameter: syntaxColors.parameter,
  property: syntaxColors.property,
  tag: syntaxColors.tag,
  attribute: syntaxColors.attribute,
  attributeValue: syntaxColors.attributeValue,
  entity: syntaxColors.entity,
  constant: syntaxColors.constant,
  regexp: syntaxColors.regexp,
  decorator: syntaxColors.decorator,
  annotation: syntaxColors.annotation,
  invalid: syntaxColors.invalid,
  deprecated: syntaxColors.deprecated,

  // JavaScript
  jsModule: syntaxColors.javascript.module,
  jsThis: syntaxColors.javascript.this,
  jsPrototype: syntaxColors.javascript.prototype,

  // TypeScript
  tsTypeParameter: syntaxColors.typescript.typeParameter,
  tsInterface: syntaxColors.typescript.interface,
  tsEnum: syntaxColors.typescript.enum,
  tsNamespace: syntaxColors.typescript.namespace,

  // CSS
  cssProperty: syntaxColors.css.property,
  cssValue: syntaxColors.css.value,
  cssSelector: syntaxColors.css.selector,
  cssPseudo: syntaxColors.css.pseudo,
  cssAtRule: syntaxColors.css.atRule,

  // HTML
  htmlTag: syntaxColors.html.tag,
  htmlAttribute: syntaxColors.html.attribute,
  htmlAttributeValue: syntaxColors.html.attributeValue,
  htmlEntity: syntaxColors.html.entity,
  htmlComponent: syntaxColors.html.component,

  // Markdown
  mdHeading: syntaxColors.markdown.heading,
  mdBold: syntaxColors.markdown.bold,
  mdItalic: syntaxColors.markdown.italic,
  mdCode: syntaxColors.markdown.code,
  mdLink: syntaxColors.markdown.link,
  mdQuote: syntaxColors.markdown.quote,
  mdList: syntaxColors.markdown.list,

  // JSON
  jsonKey: syntaxColors.json.key,
  jsonString: syntaxColors.json.string,
  jsonNumber: syntaxColors.json.number,
  jsonBoolean: syntaxColors.json.boolean,
  jsonNull: syntaxColors.json.null,
} as const
