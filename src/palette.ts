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
  /** UI-specific colors and helpers (non-syntax, common UI accents) */
  ui: {
    /** Subtle/description text */
    description: Hex
    /** Breadcrumb foreground */
    breadcrumb: Hex
    /** Shadows */
    shadow: {
      widget: Hex
      scrollbar: Hex
    }
    /** Badges */
    badge: {
      base: Hex
      fg: Hex
    }
    /** Sash */
    sash: {
      hover: Hex
    }
    /** Selection wash base (used with alpha) */
    selectionWash: Hex
    /** Scrollbar slider base (used with alpha) */
    scrollbarBase: Hex
    /** Inputs */
    input: {
      placeholder: Hex
      border: Hex
    }
    /** Lists */
    list: {
      hoverBg: Hex
      dropBg: Hex
    }
    /** Links in editor when active */
    editorLinkActive: Hex
    /** CodeLens text */
    codeLens: Hex
    /** Generic 'no matches' outline (e.g., filter widget) */
    noMatches: Hex
    /** Muted blue highlight for suggestions etc. */
    settingsHeader: Hex
    /** Window borders */
    window: {
      border: Hex
    }
    /** Tabs specifics */
    tab: {
      activeBorder: Hex
      activeModifiedBorder: Hex
      inactiveModifiedBorder: Hex
      unfocusedActiveBorder: Hex
      lastPinnedBorder: Hex
    }
    /** Status bar item states */
    statusItem: {
      hover: Hex
      prominentHover: Hex
    }
    /** Text specifics */
    text: {
      preformat: Hex
      separator: Hex
    }
    /** Debug UI specifics */
    debug: {
      exceptionBorder: Hex
      consoleError: Hex
      consoleWarning: Hex
      stateLabelBg: Hex
      tokenValue: Hex
      tokenString: Hex
      tokenError: Hex
      info: Hex
    }
    /** Editor overview ruler colors */
    editorOverview: {
      error: Hex
      info: Hex
      modified: Hex
      added: Hex
      deleted: Hex
    }
    /** Editor gutter colors */
    gutter: {
      modified: Hex
      added: Hex
      deleted: Hex
    }
    /** Minimap gutter colors */
    minimapGutter: {
      modified: Hex
      added: Hex
      deleted: Hex
    }
    /** Charts */
    charts: {
      foreground: Hex
    }
    /** GitLens helpers */
    gitlens: {
      foreground: Hex
    }
    /** Git decorations */
    git: {
      ignored: Hex
      deleted: Hex
      conflicting: Hex
      stageDeleted: Hex
      stageModified: Hex
    }
    /** Common semantic colors */
    semantic: {
      /** Pure white for high contrast */
      white: Hex
      /** Notification links */
      notificationLink: Hex
      /** Offline status */
      offline: Hex
    }
  }
}

export const palette: Palette = {
  bg: {
    // Фоны в стиле Tokyo Night для лучшего погружения
    base: '#16161e', // Основной фон редактора
    elevated: '#16161e', // Всплывающие окна, панели - теперь используют базовый фон
    sunken: '#17171dff', // Статус-бар, сайдбар
    overlay: '#16161e', // Оверлеи - теперь используют базовый фон
    input: '#181820', // Поля ввода
    hover: '#292e42', // Hover-эффекты
    active: '#3d59a1', // Активные элементы
    drop: '#2b3a65', // Зоны drag-n-drop
    lineHighlight: '#1e202e', // Подсветка текущей строки
    bracketMatch: '#3b4261', // Подсветка скобок
    tabs: '#16161e', // Фон вкладок - уже использует базовый фон
    selection: {
      active: '#364a82', // Активное выделение
      inactive: '#2b3a65', // Неактивное выделение
      focus: '#3d59a1', // Выделение в фокусе
      menu: '#364a82', // Выделение в меню
    },
  },
  line: {
    border: '#222639', // Основные границы
    menu: '#202433', // Границы в меню
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
    teal: '#85c9c1', // Свойства, атрибуты
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
    green: '#a2c27e',
    brightGreen: '#a2c27e',
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
  ui: {
    description: '#515670',
    breadcrumb: '#515670',
    shadow: {
      widget: '#ffffff00',
      scrollbar: '#00000033',
    },
    badge: {
      base: '#7e83b2',
      fg: '#c8d2f0',
    },
    sash: {
      hover: '#202840',
    },
    selectionWash: '#515c7e',
    scrollbarBase: '#868bc4',
    input: {
      placeholder: '#787c99',
      border: '#0f0f14',
    },
    list: {
      hoverBg: '#0f0f18',
      dropBg: '#1a1c28',
    },
    editorLinkActive: '#acb0d0',
    codeLens: '#484f70',
    noMatches: '#a6333f',
    settingsHeader: '#6183bb',
    window: {
      border: '#0d0f17',
    },
    tab: {
      activeBorder: '#5a7bc4',
      activeModifiedBorder: '#1a1b26',
      inactiveModifiedBorder: '#1f202e',
      unfocusedActiveBorder: '#1f202e',
      lastPinnedBorder: '#222333',
    },
    statusItem: {
      hover: '#252732',
      prominentHover: '#20222c',
    },
    text: {
      preformat: '#9699a8',
      separator: '#363b54',
    },
    debug: {
      exceptionBorder: '#963c47',
      consoleError: '#bb616b',
      consoleWarning: '#c49a5a',
      stateLabelBg: '#1e1e25',
      tokenValue: '#9aa5ce',
      tokenString: '#9ece6a',
      tokenError: '#bb616b',
      info: '#0da0ba',
    },
    editorOverview: {
      error: '#db4b4b',
      info: '#1abc9c',
      modified: '#394b70',
      added: '#164846',
      deleted: '#703438',
    },
    gutter: {
      modified: '#394b70',
      added: '#164846',
      deleted: '#823c41',
    },
    minimapGutter: {
      modified: '#425882',
      added: '#1C5957',
      deleted: '#944449',
    },
    charts: {
      foreground: '#9aa5ce',
    },
    gitlens: {
      foreground: '#444b6a',
    },
    git: {
      ignored: '#515670',
      deleted: '#914c54',
      conflicting: '#bb7a61',
      stageDeleted: '#914c54',
      stageModified: '#6183bb',
    },
    /** Common semantic colors */
    semantic: {
      /** Pure white for high contrast */
      white: '#ffffff',
      /** Notification links */
      notificationLink: '#6183bb',
      /** Offline status */
      offline: '#914c54',
    },
  },
}
