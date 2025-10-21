/**
 * Базовая палитра цветов для темы Tokyo Night
 * Сгруппированная по логическим категориям
 */

import { adjustBrightness, withAlpha, lighten, darken } from './generators'

// Базовые цвета для каждой группы
export const baseColors = {
  background: {
    primary: '#1a1b26', // Основной фон редактора
    secondary: '#16161e', // Фон боковой панели и других элементов
    tertiary: '#14141b', // Дополнительные фоны (input, dropdown)
    elevated: '#1c1d29', // Возвышенные поверхности (активные элементы списка)
    border: '#1014', // Цвет границ
    borderSecondary: '#2b2b3b', // Вторичные границы
    overlay: '#0f0f14', // Оверлеи и модальные окна
  },
 foreground: {
    primary: '#a9b1d6', // Основной текст
    secondary: '#787c99', // Вторичный текст
    disabled: '#545c7e', // Отключенный текст
    hint: '#515670', // Подсказки и описания
    emphasis: '#c0caf5', // Выделенный текст
  },
  accent: {
    primary: '#3d59a1', // Основной акцентный цвет
    secondary: '#7aa2f7', // Вторичный акцент
    success: '#41a6b5', // Успех
    info: '#0da0ba', // Информация
    warning: '#e0af68', // Предупреждение
    error: '#db4b4b', // Ошибка
 },
  neutral: {
    gray: '#565f89', // Нейтральный серый
    blueGray: '#515c7e', // Сине-серый
    slate: '#3b3e52', // Сланцевый
    dark: '#0d0f17', // Темный нейтральный
    light: '#acb0d0', // Светлый нейтральный
  },
  syntax: {
    comment: '#51597d', // Комментарии
    string: '#9ece6a', // Строки
    number: '#ff9e64', // Числа
    keyword: '#bb9af7', // Ключевые слова
    function: '#7aa2f7', // Функции
    variable: '#c0caf5', // Переменные
    property: '#73daca', // Свойства
    tag: '#f7768e', // Теги
    operator: '#89ddff', // Операторы
    punctuation: '#9abdf5', // Пунктуация
    type: '#0db9d7', // Типы
    class: '#0db9d7', // Классы
    decorator: '#7aa2f7', // Декораторы
  },
  errorWarning: {
    error: '#db4b4b', // Ошибка
    errorSecondary: '#bb616b', // Вторичный цвет ошибки
    warning: '#e0af68', // Предупреждение
    warningSecondary: '#c49a5a', // Вторичный цвет предупреждения
    critical: '#f768e', // Критическая ошибка
    success: '#41a6b5', // Успех
    successSecondary: '#73daca', // Вторичный цвет успеха
  },
  terminal: {
    black: '#363b54',
    red: '#f7768e',
    green: '#73daca',
    yellow: '#e0af68',
    blue: '#7aa2f7',
    magenta: '#bb9af7',
    cyan: '#7dcfff',
    white: '#787c99',
    brightBlack: '#363b54',
    brightRed: '#f7768e',
    brightGreen: '#73daca',
    brightYellow: '#e0af68',
    brightBlue: '#7aa2f7',
    brightMagenta: '#bb9af7',
    brightCyan: '#7dcfff',
    brightWhite: '#acb0d0',
  },
  charts: {
    red: '#f7768e',
    blue: '#7aa2f7',
    yellow: '#e0af68',
    orange: '#ff9e64',
    green: '#41a6b5',
    purple: '#9d7cd8',
    foreground: '#9AA5CE',
    background: '#16161e',
  },
}

/**
 * Генерирует полную палитру цветов на основе базовых цветов
 * с использованием утилит изменения яркости и прозрачности
 */
export const generateFullPalette = () => {
  // Создаем производные цвета для каждой группы
  const backgroundVariants = {
    primary: {
      base: baseColors.background.primary,
      lighter: lighten(baseColors.background.primary, 0.05),
      darker: darken(baseColors.background.primary, 0.05),
      transparent: withAlpha(baseColors.background.primary, 0.8),
    },
    secondary: {
      base: baseColors.background.secondary,
      lighter: lighten(baseColors.background.secondary, 0.05),
      darker: darken(baseColors.background.secondary, 0.05),
      transparent: withAlpha(baseColors.background.secondary, 0.8),
    },
    tertiary: {
      base: baseColors.background.tertiary,
      lighter: lighten(baseColors.background.tertiary, 0.05),
      darker: darken(baseColors.background.tertiary, 0.05),
      transparent: withAlpha(baseColors.background.tertiary, 0.8),
    },
  }

  const foregroundVariants = {
    primary: {
      base: baseColors.foreground.primary,
      lighter: lighten(baseColors.foreground.primary, 0.1),
      darker: darken(baseColors.foreground.primary, 0.1),
      transparent: withAlpha(baseColors.foreground.primary, 0.8),
    },
    secondary: {
      base: baseColors.foreground.secondary,
      lighter: lighten(baseColors.foreground.secondary, 0.1),
      darker: darken(baseColors.foreground.secondary, 0.1),
      transparent: withAlpha(baseColors.foreground.secondary, 0.8),
    },
  }

  const accentVariants = {
    primary: {
      base: baseColors.accent.primary,
      lighter: lighten(baseColors.accent.primary, 0.1),
      darker: darken(baseColors.accent.primary, 0.1),
      transparent: withAlpha(baseColors.accent.primary, 0.5),
      selection: withAlpha(baseColors.accent.primary, 0.3),
    },
    secondary: {
      base: baseColors.accent.secondary,
      lighter: lighten(baseColors.accent.secondary, 0.1),
      darker: darken(baseColors.accent.secondary, 0.1),
      transparent: withAlpha(baseColors.accent.secondary, 0.5),
    },
  }

  const syntaxVariants = {
    comment: {
      base: baseColors.syntax.comment,
      lighter: lighten(baseColors.syntax.comment, 0.1),
      darker: darken(baseColors.syntax.comment, 0.1),
      transparent: withAlpha(baseColors.syntax.comment, 0.7),
    },
    string: {
      base: baseColors.syntax.string,
      lighter: lighten(baseColors.syntax.string, 0.1),
      darker: darken(baseColors.syntax.string, 0.1),
      transparent: withAlpha(baseColors.syntax.string, 0.7),
    },
    keyword: {
      base: baseColors.syntax.keyword,
      lighter: lighten(baseColors.syntax.keyword, 0.1),
      darker: darken(baseColors.syntax.keyword, 0.1),
      transparent: withAlpha(baseColors.syntax.keyword, 0.7),
    },
  }

  const errorWarningVariants = {
    error: {
      base: baseColors.errorWarning.error,
      lighter: lighten(baseColors.errorWarning.error, 0.1),
      darker: darken(baseColors.errorWarning.error, 0.1),
      transparent: withAlpha(baseColors.errorWarning.error, 0.3),
      border: withAlpha(baseColors.errorWarning.error, 0.6),
    },
    warning: {
      base: baseColors.errorWarning.warning,
      lighter: lighten(baseColors.errorWarning.warning, 0.1),
      darker: darken(baseColors.errorWarning.warning, 0.1),
      transparent: withAlpha(baseColors.errorWarning.warning, 0.3),
      border: withAlpha(baseColors.errorWarning.warning, 0.6),
    },
  }

  return {
    base: baseColors,
    background: backgroundVariants,
    foreground: foregroundVariants,
    accent: accentVariants,
    syntax: syntaxVariants,
    errorWarning: errorWarningVariants,
  }
}

export type Palette = ReturnType<typeof generateFullPalette>