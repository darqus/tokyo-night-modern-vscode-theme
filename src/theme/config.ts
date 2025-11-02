/**
 * Централизованная конфигурация темы
 *
 * Все параметры генерации темы собраны здесь для удобного управления
 * и потенциального расширения функционала (например, генерация нескольких вариантов)
 */

/**
 * Конфигурация темы Tokyo Modern
 */
export const THEME_CONFIG = {
  /**
   * Название темы
   */
  name: 'Tokyo Modern',

  /**
   * Тип темы (dark/light)
   */
  type: 'dark' as const,

  /**
   * Включить семантическую подсветку синтаксиса
   */
  semanticHighlighting: true,
} as const

/**
 * Тип конфигурации темы
 */
export type ThemeConfig = typeof THEME_CONFIG
