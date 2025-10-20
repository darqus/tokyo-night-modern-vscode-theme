import type { BasePalette, PaletteGenerator } from './base'
import { lighten, darken } from './generators'

/**
 * Интерфейс для цветов подсветки синтаксиса
 */
export interface SyntaxColors {
  // Основные цвета
  text: string
  comment: string

  // Цвета для улучшенной контрастности
  purple: string
  green: string
  yellow: string
  magenta: string
  cyan: string

  // Ключевые слова и операторы
  keyword: string
  operator: string
  control: string

  // Типы и классы
  type: string
  class: string
  interface: string
  enum: string

  // Переменные и константы
  variable: string
  parameter: string
  constant: string

  // Функции и методы
  function: string
  method: string

  // Строки и числа
  string: string
  number: string
  boolean: string

  // Свойства и объекты
  property: string
  object: string

  // Теги и атрибуты (для разметки)
  tag: string
  attribute: string

  // Ошибки и предупреждения
  error: string
  warning: string
  info: string
  success: string
}

/**
 * Генератор цветов подсветки синтаксиса на основе базовой палитры
 */
export const generateSyntaxColors: PaletteGenerator<SyntaxColors> = (
  base: BasePalette
): SyntaxColors => {
  return {
    // Основные цвета
    text: lighten(base.neutral, 0.3), // #7a8ca0 - светлый нейтральный
    comment: darken(base.neutral, 0.2), // #4a5a70 - темный нейтральный

    // Цвета для улучшенной контрастности
    purple: base.syntaxPurple, // #bb9af7 - оригинальный пурпур
    green: base.syntaxGreen, // #9ece6a - оригинальный зеленый
    yellow: base.syntaxYellow || '#e0af68', // #e0af68 - желтый
    magenta: lighten(darken(base.syntaxPurple, 0.1), 0.3), // #f76f1 - фиолетовый с коррекцией
    cyan: base.syntaxCyan || '#7dcfff', // #7dcfff - голубой

    // Ключевые слова и операторы
    keyword: base.syntaxPurple, // #bb9af7 - холодные оттенки
    operator: lighten(darken(base.syntaxPurple, 0.3), 0.5), // #f14565 - пурпур с коррекцией
    control: base.syntaxPurple, // #bb9af7 - холодные оттенки

    // Типы и классы
    type: base.syntaxYellow || '#e0af68', // #e0af68 - желтый
    class: base.syntaxYellow || '#e0af68', // #e0af68 - желтый
    interface: base.syntaxYellow || '#e0af68', // #e0af68 - желтый
    enum: lighten(base.neutral, 0.05), // #7d9fb0 - нейтральный с коррекцией

    // Переменные и константы
    variable: lighten(darken(base.syntaxPurple, 0.2), 0.4), // #d369bc - фиолетовый с коррекцией
    parameter: lighten(base.syntaxCyan || '#7dcfff', 0.1), // #9accda - голубой с коррекцией
    constant: lighten(base.syntaxYellow || '#e0af68', 0.2), // #e6ae89 - желтый с коррекцией

    // Функции и методы
    function: base.syntaxCyan || '#7dcfff', // #7dcfff - голубой
    method: base.syntaxCyan || '#7dcfff', // #7dcfff - голубой

    // Строки и числа
    string: base.syntaxGreen, // #9ece6a - зеленый
    number: lighten(darken(base.syntaxYellow || '#e0af68', 0.2), 0.4), // #fa7c5d - желтый с коррекцией
    boolean: darken(base.syntaxYellow || '#e0af68', 0.3), // #e04965 - желтый с коррекцией

    // Свойства и объекты
    property: lighten(darken(base.syntaxPurple, 0.15), 0.3), // #ba8cc0 - фиолетовый с коррекцией
    object: lighten(base.neutral, 0.1), // #7aabc8 - нейтральный с коррекцией

    // Теги и атрибуты (для разметки)
    tag: base.syntaxCyan || '#7dcfff', // #7dcfff - голубой
    attribute: base.syntaxYellow || '#e0af68', // #e0af68 - желтый

    // Ошибки и предупреждения
    error: darken(base.syntaxGreen, 0.5), // #df215a - зеленый с инверсией
    warning: lighten(darken(base.syntaxPurple, 0.2), 0.3), // #b35abe - фиолетовый с коррекцией
    info: lighten(base.neutral, 0.25), // #7a9ad8 - нейтральный с коррекцией
    success: lighten(base.neutral, 0.2), // #638dc4 - нейтральный с коррекцией
  }
}
