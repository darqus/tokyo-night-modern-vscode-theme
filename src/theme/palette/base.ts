/**
 * Базовая палитра "Спокойная Четкость"
 * Определяет минимальный набор базовых цветов, из которых генерируются все остальные
 */

export interface BasePalette {
  /** Основной цвет фона (#10141a) */
  background: string
  /** Основной акцентный цвет (#7ab4e6) */
  accent: string
  /** Синтаксический пурпур (#bb9af7) - для ключевых слов и типов */
  syntaxPurple: string
  /** Синтаксический зеленый (#9ece6a) - для строк и успехов */
  syntaxGreen: string
  /** Нейтральный серо-голубой (#3a4a60) - для вспомогательных элементов */
  neutral: string
  /** Синтаксический желтый (#e0af68) - опционально для предупреждений */
  syntaxYellow?: string
  /** Синтаксический голубой (#7dcfff) - опционально для функций */
  syntaxCyan?: string
}

/**
 * Интерфейс для генерации цветов на основе базовой палитры
 */
export interface PaletteGenerator<T> {
  (base: BasePalette): T
}

/**
 * Стандартная базовая палитра для темы "Спокойная Четкость"
 */
export const standardBasePalette: BasePalette = {
  background: '#10141a',
  accent: '#7ab4e6',
  syntaxPurple: '#bb9af7',
  syntaxGreen: '#9ece6a',
  neutral: '#3a4a60',
  syntaxYellow: '#e0af68',
  syntaxCyan: '#7dcfff',
}
