/**
 * Палитра цветов для языковых токенов
 * Сгруппированная по категориям с использованием утилит генерации цветов
 */

import { darken, lighten, withAlpha } from './generators'

// Базовые цвета для токенов
export const baseTokenColors = {
  comments: {
    primary: '#51597d', // Основной цвет комментариев
    doc: '#5a638c', // Документационные комментарии
    emphasized: '#646e9c', // Выделенные элементы в комментариях
  },
  strings: {
    primary: '#9ece6a', // Обычные строки
    template: '#9aa5ce', // Шаблонные строки
    escape: '#89ddff', // Символы экранирования
    regex: '#b4f9f8', // Регулярные выражения
  },
  keywords: {
    primary: '#bb9af7', // Основные ключевые слова
    control: '#bb9af7', // Контрольные ключевые слова (if, else, etc.)
    operator: '#bb9af7', // Операторы (logical, comparison)
    declaration: '#9d7cd8', // Ключевые слова объявления (var, const, let)
    importExport: '#7dcfff', // Ключевые слова импорта/экспорта
  },
  types: {
    primary: '#0db9d7', // Основные типы
    class: '#0db9d7', // Классы
    interface: '#0db9d7', // Интерфейсы
    primitive: '#2ac3de', // Примитивные типы
  },
  functions: {
    primary: '#7aa2f7', // Обычные функции
    method: '#7aa2f7', // Методы
    decorator: '#7aa2f7', // Декораторы
    builtin: '#0db9d7', // Встроенные функции
  },
  variables: {
    primary: '#c0caf5', // Обычные переменные
    property: '#73daca', // Свойства
    parameter: '#e0af68', // Параметры функций
    builtin: '#2ac3de', // Встроенные переменные
    constant: '#bb9af7', // Константы
  },
  operators: {
    primary: '#89ddff', // Обычные операторы
    logical: '#bb9af7', // Логические операторы
    bitwise: '#bb9af7', // Побитовые операторы
    comparison: '#bb9af7', // Операторы сравнения
    assignment: '#7dcfff', // Операторы присваивания
  },
  punctuation: {
    primary: '#9abdf5', // Основная пунктуация
    delimiter: '#9abdf5', // Разделители
    bracket: '#9abdf5', // Скобки
    tag: '#ba3c97', // Теги
  },
  special: {
    number: '#ff9e64', // Числа
    boolean: '#ff9e64', // Булевы значения
    null: '#ff9e64', // Null/undefined
    tag: '#ff768e', // HTML теги
    attribute: '#bb9af7', // Атрибуты
    constant: '#e0af68', // Специальные константы
    invalid: '#ff5370', // Невалидные токены
    deprecated: '#bb9af7', // Устаревшие токены
  },
}

/**
 * Генерирует полную палитру токенов на основе базовых цветов
 * с использованием утилит изменения яркости и прозрачности
 */
export const generateTokenPalette = () => {
  // Создаем варианты для комментариев
  const commentVariants = {
    primary: {
      base: baseTokenColors.comments.primary,
      lighter: lighten(baseTokenColors.comments.primary, 0.1),
      darker: darken(baseTokenColors.comments.primary, 0.1),
      transparent: withAlpha(baseTokenColors.comments.primary, 0.7),
    },
    doc: {
      base: baseTokenColors.comments.doc,
      lighter: lighten(baseTokenColors.comments.doc, 0.1),
      darker: darken(baseTokenColors.comments.doc, 0.1),
      transparent: withAlpha(baseTokenColors.comments.doc, 0.7),
    },
    emphasized: {
      base: baseTokenColors.comments.emphasized,
      lighter: lighten(baseTokenColors.comments.emphasized, 0.1),
      darker: darken(baseTokenColors.comments.emphasized, 0.1),
      transparent: withAlpha(baseTokenColors.comments.emphasized, 0.7),
    },
  }

  // Создаем варианты для строк
  const stringVariants = {
    primary: {
      base: baseTokenColors.strings.primary,
      lighter: lighten(baseTokenColors.strings.primary, 0.1),
      darker: darken(baseTokenColors.strings.primary, 0.1),
      transparent: withAlpha(baseTokenColors.strings.primary, 0.7),
    },
    template: {
      base: baseTokenColors.strings.template,
      lighter: lighten(baseTokenColors.strings.template, 0.1),
      darker: darken(baseTokenColors.strings.template, 0.1),
      transparent: withAlpha(baseTokenColors.strings.template, 0.7),
    },
    escape: {
      base: baseTokenColors.strings.escape,
      lighter: lighten(baseTokenColors.strings.escape, 0.1),
      darker: darken(baseTokenColors.strings.escape, 0.1),
      transparent: withAlpha(baseTokenColors.strings.escape, 0.7),
    },
    regex: {
      base: baseTokenColors.strings.regex,
      lighter: lighten(baseTokenColors.strings.regex, 0.1),
      darker: darken(baseTokenColors.strings.regex, 0.1),
      transparent: withAlpha(baseTokenColors.strings.regex, 0.7),
    },
  }

  // Создаем варианты для ключевых слов
  const keywordVariants = {
    primary: {
      base: baseTokenColors.keywords.primary,
      lighter: lighten(baseTokenColors.keywords.primary, 0.1),
      darker: darken(baseTokenColors.keywords.primary, 0.1),
      transparent: withAlpha(baseTokenColors.keywords.primary, 0.7),
    },
    control: {
      base: baseTokenColors.keywords.control,
      lighter: lighten(baseTokenColors.keywords.control, 0.1),
      darker: darken(baseTokenColors.keywords.control, 0.1),
      transparent: withAlpha(baseTokenColors.keywords.control, 0.7),
    },
    operator: {
      base: baseTokenColors.keywords.operator,
      lighter: lighten(baseTokenColors.keywords.operator, 0.1),
      darker: darken(baseTokenColors.keywords.operator, 0.1),
      transparent: withAlpha(baseTokenColors.keywords.operator, 0.7),
    },
    declaration: {
      base: baseTokenColors.keywords.declaration,
      lighter: lighten(baseTokenColors.keywords.declaration, 0.1),
      darker: darken(baseTokenColors.keywords.declaration, 0.1),
      transparent: withAlpha(baseTokenColors.keywords.declaration, 0.7),
    },
    importExport: {
      base: baseTokenColors.keywords.importExport,
      lighter: lighten(baseTokenColors.keywords.importExport, 0.1),
      darker: darken(baseTokenColors.keywords.importExport, 0.1),
      transparent: withAlpha(baseTokenColors.keywords.importExport, 0.7),
    },
  }

  // Создаем варианты для типов
  const typeVariants = {
    primary: {
      base: baseTokenColors.types.primary,
      lighter: lighten(baseTokenColors.types.primary, 0.1),
      darker: darken(baseTokenColors.types.primary, 0.1),
      transparent: withAlpha(baseTokenColors.types.primary, 0.7),
    },
    class: {
      base: baseTokenColors.types.class,
      lighter: lighten(baseTokenColors.types.class, 0.1),
      darker: darken(baseTokenColors.types.class, 0.1),
      transparent: withAlpha(baseTokenColors.types.class, 0.7),
    },
    interface: {
      base: baseTokenColors.types.interface,
      lighter: lighten(baseTokenColors.types.interface, 0.1),
      darker: darken(baseTokenColors.types.interface, 0.1),
      transparent: withAlpha(baseTokenColors.types.interface, 0.7),
    },
    primitive: {
      base: baseTokenColors.types.primitive,
      lighter: lighten(baseTokenColors.types.primitive, 0.1),
      darker: darken(baseTokenColors.types.primitive, 0.1),
      transparent: withAlpha(baseTokenColors.types.primitive, 0.7),
    },
  }

  // Создаем варианты для функций
  const functionVariants = {
    primary: {
      base: baseTokenColors.functions.primary,
      lighter: lighten(baseTokenColors.functions.primary, 0.1),
      darker: darken(baseTokenColors.functions.primary, 0.1),
      transparent: withAlpha(baseTokenColors.functions.primary, 0.7),
    },
    method: {
      base: baseTokenColors.functions.method,
      lighter: lighten(baseTokenColors.functions.method, 0.1),
      darker: darken(baseTokenColors.functions.method, 0.1),
      transparent: withAlpha(baseTokenColors.functions.method, 0.7),
    },
    decorator: {
      base: baseTokenColors.functions.decorator,
      lighter: lighten(baseTokenColors.functions.decorator, 0.1),
      darker: darken(baseTokenColors.functions.decorator, 0.1),
      transparent: withAlpha(baseTokenColors.functions.decorator, 0.7),
    },
    builtin: {
      base: baseTokenColors.functions.builtin,
      lighter: lighten(baseTokenColors.functions.builtin, 0.1),
      darker: darken(baseTokenColors.functions.builtin, 0.1),
      transparent: withAlpha(baseTokenColors.functions.builtin, 0.7),
    },
  }

  // Создаем варианты для переменных
  const variableVariants = {
    primary: {
      base: baseTokenColors.variables.primary,
      lighter: lighten(baseTokenColors.variables.primary, 0.1),
      darker: darken(baseTokenColors.variables.primary, 0.1),
      transparent: withAlpha(baseTokenColors.variables.primary, 0.7),
    },
    property: {
      base: baseTokenColors.variables.property,
      lighter: lighten(baseTokenColors.variables.property, 0.1),
      darker: darken(baseTokenColors.variables.property, 0.1),
      transparent: withAlpha(baseTokenColors.variables.property, 0.7),
    },
    parameter: {
      base: baseTokenColors.variables.parameter,
      lighter: lighten(baseTokenColors.variables.parameter, 0.1),
      darker: darken(baseTokenColors.variables.parameter, 0.1),
      transparent: withAlpha(baseTokenColors.variables.parameter, 0.7),
    },
    builtin: {
      base: baseTokenColors.variables.builtin,
      lighter: lighten(baseTokenColors.variables.builtin, 0.1),
      darker: darken(baseTokenColors.variables.builtin, 0.1),
      transparent: withAlpha(baseTokenColors.variables.builtin, 0.7),
    },
    constant: {
      base: baseTokenColors.variables.constant,
      lighter: lighten(baseTokenColors.variables.constant, 0.1),
      darker: darken(baseTokenColors.variables.constant, 0.1),
      transparent: withAlpha(baseTokenColors.variables.constant, 0.7),
    },
  }

  // Создаем варианты для операторов
  const operatorVariants = {
    primary: {
      base: baseTokenColors.operators.primary,
      lighter: lighten(baseTokenColors.operators.primary, 0.1),
      darker: darken(baseTokenColors.operators.primary, 0.1),
      transparent: withAlpha(baseTokenColors.operators.primary, 0.7),
    },
    logical: {
      base: baseTokenColors.operators.logical,
      lighter: lighten(baseTokenColors.operators.logical, 0.1),
      darker: darken(baseTokenColors.operators.logical, 0.1),
      transparent: withAlpha(baseTokenColors.operators.logical, 0.7),
    },
    bitwise: {
      base: baseTokenColors.operators.bitwise,
      lighter: lighten(baseTokenColors.operators.bitwise, 0.1),
      darker: darken(baseTokenColors.operators.bitwise, 0.1),
      transparent: withAlpha(baseTokenColors.operators.bitwise, 0.7),
    },
    comparison: {
      base: baseTokenColors.operators.comparison,
      lighter: lighten(baseTokenColors.operators.comparison, 0.1),
      darker: darken(baseTokenColors.operators.comparison, 0.1),
      transparent: withAlpha(baseTokenColors.operators.comparison, 0.7),
    },
    assignment: {
      base: baseTokenColors.operators.assignment,
      lighter: lighten(baseTokenColors.operators.assignment, 0.1),
      darker: darken(baseTokenColors.operators.assignment, 0.1),
      transparent: withAlpha(baseTokenColors.operators.assignment, 0.7),
    },
  }

  // Создаем варианты для пунктуации
  const punctuationVariants = {
    primary: {
      base: baseTokenColors.punctuation.primary,
      lighter: lighten(baseTokenColors.punctuation.primary, 0.1),
      darker: darken(baseTokenColors.punctuation.primary, 0.1),
      transparent: withAlpha(baseTokenColors.punctuation.primary, 0.7),
    },
    delimiter: {
      base: baseTokenColors.punctuation.delimiter,
      lighter: lighten(baseTokenColors.punctuation.delimiter, 0.1),
      darker: darken(baseTokenColors.punctuation.delimiter, 0.1),
      transparent: withAlpha(baseTokenColors.punctuation.delimiter, 0.7),
    },
    bracket: {
      base: baseTokenColors.punctuation.bracket,
      lighter: lighten(baseTokenColors.punctuation.bracket, 0.1),
      darker: darken(baseTokenColors.punctuation.bracket, 0.1),
      transparent: withAlpha(baseTokenColors.punctuation.bracket, 0.7),
    },
    tag: {
      base: baseTokenColors.punctuation.tag,
      lighter: lighten(baseTokenColors.punctuation.tag, 0.1),
      darker: darken(baseTokenColors.punctuation.tag, 0.1),
      transparent: withAlpha(baseTokenColors.punctuation.tag, 0.7),
    },
  }

  // Создаем варианты для специальных токенов
  const specialVariants = {
    number: {
      base: baseTokenColors.special.number,
      lighter: lighten(baseTokenColors.special.number, 0.1),
      darker: darken(baseTokenColors.special.number, 0.1),
      transparent: withAlpha(baseTokenColors.special.number, 0.7),
    },
    boolean: {
      base: baseTokenColors.special.boolean,
      lighter: lighten(baseTokenColors.special.boolean, 0.1),
      darker: darken(baseTokenColors.special.boolean, 0.1),
      transparent: withAlpha(baseTokenColors.special.boolean, 0.7),
    },
    null: {
      base: baseTokenColors.special.null,
      lighter: lighten(baseTokenColors.special.null, 0.1),
      darker: darken(baseTokenColors.special.null, 0.1),
      transparent: withAlpha(baseTokenColors.special.null, 0.7),
    },
    tag: {
      base: baseTokenColors.special.tag,
      lighter: lighten(baseTokenColors.special.tag, 0.1),
      darker: darken(baseTokenColors.special.tag, 0.1),
      transparent: withAlpha(baseTokenColors.special.tag, 0.7),
    },
    attribute: {
      base: baseTokenColors.special.attribute,
      lighter: lighten(baseTokenColors.special.attribute, 0.1),
      darker: darken(baseTokenColors.special.attribute, 0.1),
      transparent: withAlpha(baseTokenColors.special.attribute, 0.7),
    },
    constant: {
      base: baseTokenColors.special.constant,
      lighter: lighten(baseTokenColors.special.constant, 0.1),
      darker: darken(baseTokenColors.special.constant, 0.1),
      transparent: withAlpha(baseTokenColors.special.constant, 0.7),
    },
    invalid: {
      base: baseTokenColors.special.invalid,
      lighter: lighten(baseTokenColors.special.invalid, 0.1),
      darker: darken(baseTokenColors.special.invalid, 0.1),
      transparent: withAlpha(baseTokenColors.special.invalid, 0.7),
    },
    deprecated: {
      base: baseTokenColors.special.deprecated,
      lighter: lighten(baseTokenColors.special.deprecated, 0.1),
      darker: darken(baseTokenColors.special.deprecated, 0.1),
      transparent: withAlpha(baseTokenColors.special.deprecated, 0.7),
    },
  }

  return {
    base: baseTokenColors,
    comments: commentVariants,
    strings: stringVariants,
    keywords: keywordVariants,
    types: typeVariants,
    functions: functionVariants,
    variables: variableVariants,
    operators: operatorVariants,
    punctuation: punctuationVariants,
    special: specialVariants,
  }
}

export type TokenPalette = ReturnType<typeof generateTokenPalette>
