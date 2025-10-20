/**
 * Базовая палитра "Спокойная Четкость"
 * Определяет минимальный набор базовых цветов, из которых генерируются все остальные
 */

export interface BasePalette {
  /** Основной цвет фона (#10141a) */
  background: string

  /** Синтаксический пурпур (#bb9af7) - для ключевых слов и типов */
  syntaxPurple: string

  /** Синтаксический зеленый (#9ece6a) - для строк и успехов */
  syntaxGreen: string

  /** Нейтральный серо-голубой (#3a4a60) - для вспомогательных элементов */
  neutral: string

  /** Синтаксический желтый (#e0af68) - для предупреждений */
  syntaxYellow: string

  /** Синтаксический красный (#df215a) - для ошибок */
  syntaxRed: string

  /** Синтаксический голубой (#7dcfff) - для функций */
  syntaxCyan: string
}

/**
 * Тип для генерации цветов на основе базовой палитры
 */
export type PaletteGenerator<T> = (base: BasePalette) => T

/**
 * Стандартная базовая палитра для темы "Спокойная Четкость"
 */
export const standardBasePalette: BasePalette = {
  background: '#10141a',
  syntaxPurple: '#bb9af7',
  syntaxGreen: '#9ece6a',
  neutral: '#3a4a60',
  syntaxYellow: '#e0af68',
  syntaxRed: '#df215a',
  syntaxCyan: '#7dcfff',
}
