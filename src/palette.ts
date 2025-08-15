export type Hex = `#${string}`

/**
 * The main color palette for the Tokyo Night Dark theme.
 *
 * Organized by functional groups for easy understanding and maintenance.
 * All colors use hex format with type safety.
 */
export interface Palette {
  /** Background colors - from darkest to lightest */
  bg: {
    /** Main background of the editor and side panels */
    base: Hex
    /** Elevated elements (panels, dialogs) */
    elevated: Hex
    /** Sunken areas (statusbar, some panels) */
    sunken: Hex
    /** Overlays and modal windows */
    overlay: Hex
    /** Input fields and forms */
    input: Hex
    /** Hover state for interactive elements */
    hover: Hex
    /** Active/pressed elements */
    active: Hex
    /** Drop zones for drag&drop */
    drop: Hex
    /** Current line highlight */
    lineHighlight: Hex
    /** Matching bracket highlight */
    bracketMatch: Hex
    /** Tab background */
    tabs: Hex
    /** Different types of selection */
    selection: {
      /** Active selection */
      active: Hex
      /** Inactive selection */
      inactive: Hex
      /** Selection in focus */
      focus: Hex
      /** Selection in a menu */
      menu: Hex
    }
  }
  /** Lines and borders */
  line: {
    /** Main element borders */
    border: Hex
    /** Borders in menus */
    menu: Hex
  }
  /** Text colors - from primary to auxiliary */
  fg: {
    /** Primary text */
    primary: Hex
    /** Muted text (secondary information) */
    muted: Hex
    /** Subtle text (hints, labels) */
    subtle: Hex
    /** Inactive/disabled text */
    inactive: Hex
    /** Soft text (intermediate brightness) */
    soft: Hex
    /** Soft titles */
    softTitle: Hex
    /** Text on selection */
    selectionText: Hex
    /** Text on top of a selection */
    onSelection: Hex
    /** Active titles */
    activeTitle: Hex
  }
  /** Brand colors */
  brand: {
    /** Primary brand color (buttons, links) */
    primary: Hex
    /** Button specific colors */
    button: {
      /** Primary button background */
      primary: Hex
      /** Primary button hover background */
      hover: Hex
    }
  }
  /** Accent colors for syntax highlighting */
  accent: {
    /** Blue - keywords, types */
    blue: Hex
    /** Cyan - strings, imports */
    cyan: Hex
    /** Teal - properties, attributes */
    teal: Hex
    /** Magenta - variables, constants */
    magenta: Hex
    /** Yellow - numbers, parameters */
    yellow: Hex
    /** Orange - functions, methods */
    orange: Hex
    /** Red - errors, warnings */
    red: Hex
    /** Purple - operators, special characters */
    purple: Hex
  }
  /** ANSI colors for the terminal */
  ansi: {
    black: Hex
    brightBlack: Hex
    red: Hex
    brightRed: Hex
    green: Hex
    brightGreen: Hex
    yellow: Hex
    brightYellow: Hex
    blue: Hex
    brightBlue: Hex
    magenta: Hex
    brightMagenta: Hex
    cyan: Hex
    brightCyan: Hex
    white: Hex
    brightWhite: Hex
  }
}

export const palette: Palette = {
  bg: {
    // Фоны в стиле Tokyo Night для лучшего погружения
    base: '#1a1b26', // Основной фон редактора
    elevated: '#24283b', // Всплывающие окна, панели
    sunken: '#16161e', // Статус-бар, сайдбар
    overlay: '#24283b', // Оверлеи
    input: '#2a2f41', // Поля ввода
    hover: '#292e42', // Hover-эффекты
    active: '#3d59a1', // Активные элементы
    drop: '#2b3a65', // Зоны drag-n-drop
    lineHighlight: '#1e202e', // Подсветка текущей строки
    bracketMatch: '#3b4261', // Подсветка скобок
    tabs: '#16161e', // Фон вкладок
    selection: {
      active: '#364a82', // Активное выделение
      inactive: '#2b3a65', // Неактивное выделение
      focus: '#3d59a1', // Выделение в фокусе
      menu: '#364a82', // Выделение в меню
    },
  },
  line: {
    border: '#3b4261', // Основные границы
    menu: '#3b4261', // Границы в меню
  },
  fg: {
    // Цвета текста в стиле Tokyo Night
    primary: '#c0caf5', // Основной текст
    muted: '#a9b1d6', // Второстепенный текст
    subtle: '#565f89', // Подсказки, комментарии
    inactive: '#565f89', // Неактивный текст
    soft: '#a9b1d6', // Мягкий текст
    softTitle: '#c0caf5', // Заголовки
    selectionText: '#ffffff', // Текст на выделении (белый для контраста)
    onSelection: '#ffffff', // Текст поверх выделения
    activeTitle: '#c0caf5', // Активные заголовки
  },
  brand: {
    primary: '#7aa2f7', // Основной акцентный цвет (Tokyo Night blue)
    button: {
      primary: '#3d59a1', // Более темный синий для кнопок
      hover: '#4a6bb8', // Hover-эффект для кнопок
    },
  },
  accent: {
    // Акцентные цвета из оригинальной палитры Tokyo Night
    blue: '#7aa2f7', // Ключевые слова, типы
    cyan: '#7dcfff', // Строки, импорты
    teal: '#73daca', // Свойства, атрибуты
    magenta: '#bb9af7', // Переменные, константы
    yellow: '#e0af68', // Числа, параметры
    orange: '#ff9e64', // Функции, методы
    red: '#f7768e', // Ошибки, предупреждения
    purple: '#9d7cd8', // Операторы, спецсимволы
  },
  ansi: {
    // ANSI цвета для терминала в стиле Tokyo Night
    black: '#414868',
    brightBlack: '#565f89',
    red: '#f7768e',
    brightRed: '#f7768e',
    green: '#9ece6a',
    brightGreen: '#9ece6a',
    yellow: '#e0af68',
    brightYellow: '#e0af68',
    blue: '#7aa2f7',
    brightBlue: '#7aa2f7',
    magenta: '#bb9af7',
    brightMagenta: '#bb9af7',
    cyan: '#7dcfff',
    brightCyan: '#7dcfff',
    white: '#c0caf5',
    brightWhite: '#c0caf5',
  },
}
