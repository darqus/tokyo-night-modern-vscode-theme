export const accessibilityPalette = {
  contrast: {
    high: '#d4d8f0', // WCAG AAA compliant
    medium: '#b8c0e0', // WCAG AA compliant
    low: '#9ca6d0', // Minimum contrast
  },

  semantic: {
    success: '#4ade80', // Яркий green для success states
    warning: '#fbbf24', // Яркий yellow для warnings
    error: '#f87171', // Яркий red для errors
    info: '#60a5fa', // Яркий blue для info
  },

  // Улучшенные варианты для лучшей читаемости
  enhanced: {
    text: {
      primary: '#e2e5f0', // Улучшенный основной текст
      secondary: '#c5cae5', // Улучшенный вторичный текст
      tertiary: '#a8aedd', // Улучшенный третичный текст
      disabled: '#6b7280', // Отключенные элементы
    },

    background: {
      elevated: '#1f2937', // Повышенные элементы
      surface: '#111827', // Поверхности
      overlay: '#00000080', // Оверлеи с прозрачностью
    },

    interactive: {
      hover: '#374151', // Hover состояния
      active: '#4b5563', // Active состояния
      selected: '#1e40af', // Выбранные элементы
      focused: '#1d4ed8', // Фокус
    },
  },
}
