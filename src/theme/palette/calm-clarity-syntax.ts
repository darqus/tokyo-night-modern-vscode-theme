/**
 * Calm Clarity Theme - Extended Syntax Highlighting
 * Расширенная подсветка синтаксиса для темы "Спокойная Четкость"
 *
 * Реализация требований:
 * - Максимальная различимость семантически разных токенов
 * - Сохранение общей сдержанности палитры
 * - Правило соседства: разные, но рядом стоящие токены должны быть контрастными
 * - Пастельные, десатурированные версии основных цветов
 * - Проверка соответствия минимальным требованиям контрастности WCAG AA
 */

import { calmClarityPalette, meetsWCAGContrast } from './calm-clarity'

// Определяем семантические группы токенов
export interface SyntaxTokenGroups {
  // Основные элементы
  keywords: string // Ключевые слова (const, let, var, if, else, etc.)
  storage: string // Ключевые слова объявления (class, function, etc.)
  operators: string // Операторы (=, +, -, *, etc.)
  punctuation: string // Знаки препинания (., ;, :, etc.)

  // Идентификаторы
  variables: string // Переменные
  constants: string // Константы
  parameters: string // Параметры функций
  properties: string // Свойства объектов

  // Типы и структуры
  types: string // Типы данных
  classes: string // Классы
  interfaces: string // Интерфейсы
  enums: string // Перечисления

  // Функции и методы
  functions: string // Объявления функций
  methods: string // Методы

  // Литералы
  strings: string // Строки
  numbers: string // Числа
  booleans: string // Булевые значения
  nullUndefined: string // null и undefined

  // Комментарии
  comments: string // Комментарии

  // Специальные элементы
  tags: string // Теги (HTML/XML)
  attributes: string // Атрибуты
  decorators: string // Декораторы
  annotations: string // Аннотации
}

/**
 * Создание семантической палитры для подсветки синтаксиса
 * Основной принцип: обеспечить хорошую различимость соседних элементов
 */
export const syntaxTokenPalette: SyntaxTokenGroups = {
  // Ключевые слова - холодные синие оттенки
  keywords: calmClarityPalette.syntax.control, // Используем существующий холодный оттенок

  // Ключевые слова объявления - более насыщенный холодный оттенок для контраста
  storage: '#7a9bd6', // Ярче для лучшей видимости

  // Операторы - нейтральные оттенки для минимального отвлечения
  operators: calmClarityPalette.syntax.operator,

  // Знаки препинания - близки к цвету текста для минимального отвлечения
  punctuation: '#9aa4c5', // Ярче для лучшей видимости

  // Переменные - нейтральные теплые оттенки
  variables: '#b0c0e0', // Ярче для лучшей видимости

  // Константы - теплые оттенки для отличия от переменных
  constants: calmClarityPalette.syntax.constant, // Используем теплый оттенок

  // Параметры - оттенок между переменными и константами
  parameters: '#a4b4d9', // Ярче для лучшей видимости

  // Свойства - холодные оттенки для отличия от переменных
  properties: calmClarityPalette.syntax.property, // Используем существующий холодный оттенок

  // Типы данных - холодные оттенки для отличия от значений
  types: '#6a8fd8', // Ярче для лучшей видимости

  // Классы - оттенок близкий к типам, но с отличием
  classes: '#6a8fd8', // Используем тот же холодный оттенок, что и типы

  // Интерфейсы - оттенок близкий к классам, но с отличием
  interfaces: '#7c9ed4', // Ярче для лучшей видимости

  // Перечисления - оттенок близкий к типам, но с отличием
  enums: '#8d91e0', // Ярче для лучшей видимости

  // Функции - холодные оттенки для отличия от значений
  functions: '#7ab8e6', // Ярче для лучшей видимости

  // Методы - оттенок близкий к функциям, но с отличием
  methods: '#7cb9d9', // Ярче для лучшей видимости

  // Строки - теплые оттенки для отличия от кода
  strings: calmClarityPalette.syntax.string, // Используем теплый зеленоватый оттенок

  // Числа - теплые оттенки, отличные от строк
  numbers: '#e8b892', // Ярче для лучшей видимости

  // Булевые значения - отдельная категория для отличия
  booleans: '#d5a8d6', // Ярче для лучшей видимости

  // null и undefined - отдельная категория
  nullUndefined: '#d5a8b6', // Ярче для лучшей видимости

  // Комментарии - приглушенные оттенки для минимального отвлечения
  comments: calmClarityPalette.syntax.comment, // Используем существующий приглушенный оттенок

  // Теги - холодные оттенки для отличия от кода
  tags: calmClarityPalette.syntax.tag, // Используем холодный оттенок

  // Атрибуты - оттенок, отличный от тегов
  attributes: '#9ab8d1', // Ярче для лучшей видимости

  // Декораторы - специальная категория
  decorators: '#9ad5de', // Ярче для лучшей видимости

  // Аннотации - специальная категория
  annotations: '#b8b2e6', // Ярче для лучшей видимости
}

/**
 * Проверка контрастности между соседними элементами
 * Убедимся, что часто встречающиеся пары имеют достаточный контраст
 */
export const contrastChecks = [
  // Проверка контраста между ключевыми словами и идентификаторами
  {
    element1: 'keywords',
    color1: syntaxTokenPalette.keywords,
    element2: 'variables',
    color2: syntaxTokenPalette.variables,
    required: 'AA',
  },
  {
    element1: 'keywords',
    color1: syntaxTokenPalette.keywords,
    element2: 'constants',
    color2: syntaxTokenPalette.constants,
    required: 'AA',
  },

  // Проверка контраста между переменными и константами
  {
    element1: 'variables',
    color1: syntaxTokenPalette.variables,
    element2: 'constants',
    color2: syntaxTokenPalette.constants,
    required: 'AA',
  },

  // Проверка контраста между параметрами и переменными
  {
    element1: 'parameters',
    color1: syntaxTokenPalette.parameters,
    element2: 'variables',
    color2: syntaxTokenPalette.variables,
    required: 'AA',
  },

  // Проверка контраста между типами и значениями
  {
    element1: 'types',
    color1: syntaxTokenPalette.types,
    element2: 'strings',
    color2: syntaxTokenPalette.strings,
    required: 'AA',
  },
  {
    element1: 'types',
    color1: syntaxTokenPalette.types,
    element2: 'numbers',
    color2: syntaxTokenPalette.numbers,
    required: 'AA',
  },

  // Проверка контраста между функциями и переменными
  {
    element1: 'functions',
    color1: syntaxTokenPalette.functions,
    element2: 'variables',
    color2: syntaxTokenPalette.variables,
    required: 'AA',
  },

  // Проверка контраста между свойствами и переменными
  {
    element1: 'properties',
    color1: syntaxTokenPalette.properties,
    element2: 'variables',
    color2: syntaxTokenPalette.variables,
    required: 'AA',
  },
]

/**
 * Правила подсветки синтаксиса для разных языков
 */
export const syntaxHighlightingRules = {
  // JavaScript/TypeScript
  javascript: {
    // Ключевые слова
    keyword: syntaxTokenPalette.keywords,
    'keyword.control': syntaxTokenPalette.keywords,
    'keyword.operator': syntaxTokenPalette.operators,

    // Объявления
    'storage.type': syntaxTokenPalette.storage,
    'storage.modifier': syntaxTokenPalette.storage,

    // Идентификаторы
    variable: syntaxTokenPalette.variables,
    'variable.other.constant': syntaxTokenPalette.constants,
    'variable.parameter': syntaxTokenPalette.parameters,
    'variable.other.property': syntaxTokenPalette.properties,

    // Типы
    'support.type': syntaxTokenPalette.types,
    'entity.name.type': syntaxTokenPalette.types,

    // Классы
    'entity.name.type.class': syntaxTokenPalette.classes,
    'support.class': syntaxTokenPalette.classes,

    // Функции
    'entity.name.function': syntaxTokenPalette.functions,
    'support.function': syntaxTokenPalette.functions,

    // Методы
    'entity.name.function.member': syntaxTokenPalette.methods,

    // Литералы
    string: syntaxTokenPalette.strings,
    'constant.numeric': syntaxTokenPalette.numbers,
    'constant.language.boolean': syntaxTokenPalette.booleans,
    'constant.language.null': syntaxTokenPalette.nullUndefined,
    'constant.language.undefined': syntaxTokenPalette.nullUndefined,

    // Комментарии
    comment: syntaxTokenPalette.comments,

    // Декораторы
    'meta.decorator': syntaxTokenPalette.decorators,
    'punctuation.decorator': syntaxTokenPalette.decorators,
  },

  // Python
  python: {
    // Ключевые слова
    'keyword.control': syntaxTokenPalette.keywords,
    'keyword.operator.logical': syntaxTokenPalette.keywords,

    // Объявления
    'storage.type': syntaxTokenPalette.storage,
    'storage.modifier': syntaxTokenPalette.storage,

    // Идентификаторы
    variable: syntaxTokenPalette.variables,
    'variable.other.constant': syntaxTokenPalette.constants,
    'variable.parameter': syntaxTokenPalette.parameters,

    // Классы
    'entity.name.type.class': syntaxTokenPalette.classes,
    'support.type.python': syntaxTokenPalette.types,

    // Функции
    'entity.name.function': syntaxTokenPalette.functions,
    'support.function': syntaxTokenPalette.functions,

    // Литералы
    string: syntaxTokenPalette.strings,
    'constant.numeric': syntaxTokenPalette.numbers,
    'constant.language': syntaxTokenPalette.booleans,

    // Комментарии
    comment: syntaxTokenPalette.comments,
  },

  // HTML
  html: {
    // Теги
    'entity.name.tag': syntaxTokenPalette.tags,

    // Атрибуты
    'entity.other.attribute-name': syntaxTokenPalette.attributes,

    // Значения атрибутов
    'string.quoted': syntaxTokenPalette.strings,
  },

  // CSS
  css: {
    // Селекторы
    'entity.name.tag.css': syntaxTokenPalette.tags,
    'entity.other.attribute-name.class': syntaxTokenPalette.attributes,

    // Свойства
    'support.type.property-name': syntaxTokenPalette.properties,

    // Значения
    'support.constant.property-value': syntaxTokenPalette.strings,
    'constant.numeric': syntaxTokenPalette.numbers,
  },

  // Общие правила
  common: {
    // Операторы
    'keyword.operator': syntaxTokenPalette.operators,
    punctuation: syntaxTokenPalette.punctuation,

    // Комментарии
    comment: syntaxTokenPalette.comments,

    // Аннотации
    'storage.type.annotation': syntaxTokenPalette.annotations,
  },
}

/**
 * Функция для проверки соответствия WCAG контрастности
 */
export function checkWCAGContrast(
  foreground: string,
  background: string,
  level: 'AA' | 'AAA' = 'AA'
): boolean {
  return meetsWCAGContrast(foreground, background, level)
}

/**
 * Функция для получения цвета токена по его типу
 */
export function getTokenColor(tokenType: keyof SyntaxTokenGroups): string {
  return syntaxTokenPalette[tokenType]
}
