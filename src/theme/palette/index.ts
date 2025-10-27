import type { Palette } from '../types'

export const palette: Palette = {
  // Фоновые цвета - упорядочены от темного к светлому
  bg: {
    darkest: '#0f0f1a',
    darker: '#10101b',
    dark: '#131320',
    main: '#171727',
    editor: '#19192b',
    light: '#1e1e33',
    lighter: '#212138',
    lightest: '#272742',
  },

  // Текстовые цвета - упорядочены от тусклого к яркому
  fg: {
    dim: '#5c6481',
    muted: '#666e8d',
    medium: '#7e85aa',
    bright: '#9aa8d4',
    brighter: '#b3bbe4',
    brightest: '#bdc7f7',
  },

  // Основные акцентные цвета
  blue: {
    primary: '#3d59a1',
    light: '#6183bb',
    medium: '#7aa2f7',
  },

  cyan: {
    dark: '#0db9d7',
    medium: '#0da0ba',
    light: '#7dcfff',
    bright: '#89ddff',
  },

  teal: {
    main: '#73daca',
    dark: '#449dab',
  },

  green: {
    main: '#9ece6a',
    dark: '#41a6b5',
  },

  purple: {
    light: '#bb9af7',
    dark: '#9d7cd8',
    bright: '#b267e6',
  },

  orange: '#ff9e64',

  yellow: {
    main: '#e0af68',
    light: '#ffdb69',
    muted: '#c49a5a',
  },

  red: {
    main: '#f7768e',
    dark: '#db4b4b',
    muted: '#914c54',
  },

  pink: {
    main: '#ba3c97',
    light: '#de5971',
    bright: '#fc7b7b',
  },

  // Специальные цвета для UI элементов
  special: {
    regex: '#b4f9f8',
    invalid: '#ff5370',
    selection: '#bbc2e4',
    indentActive: '#42465d',
    disabled: '#666e90',
    badge: '#0078d4',
    scrollbar: '#868bc4',
    ghostText: '#687198',
    inactive: '#363b54',
  },

  // UI специфичные цвета - сгруппированы по назначению
  ui: {
    // Базовые цвета
    white: '#ffffff',
    black: '#000000',
    brightWhite: '#b9c0e0',

    // Интерактивные элементы
    linkActive: '#b9c0e0',
    codeLens: '#6d7597',
    badgeForeground: '#ffffff',

    // Отладка
    debugException: '#963c47',
    debugError: '#bb616b',
    debugBreakpointDisabled: '#414761',
    debugBreakpointUnverified: '#c24242',
    stackFrameHighlight: '#e2bd3a',

    // SCM (Source Control Management)
    scmGraphHover: '#ffffff',
    scmGraphRef: '#506fca',

    // Уведомления и меню
    menubarSelection: '#1b1e2e',
    notificationError: '#bb616b',
    notificationWarning: '#bba461',

    // Инпуты и валидация
    inputInfo: '#c9d0f0',
    inputWarningBg: '#c2985b',
    inputErrorBg: '#85353e',
    inputErrorBorder: '#963c47',

    // Diff
    diffDiagonal: '#292e42',
    diffUnchanged: '#282a3b',

    // Скроллбары
    scrollbarShadow: '#000000',

    // Семантические цвета
    parameter: '#d9d4cd',
    defaultLibrary: '#2ac3de',
    commentDoc: '#596184',

    // Markdown
    plainPunctuation: '#9abdf5',
    rawInlinePunctuation: '#4e5579',
    heading2: '#61bdf2',
    heading4: '#6d91de',
    heading6: '#868eb3',
    table: '#c0cefc',

    // Форматирование
    preformat: '#a9adbd',
  },

  // Цвета для скобок
  brackets: {
    blue: '#698cd6',
    cyan: '#68b3de',
    purple: '#9a7ecc',
    teal: '#25aac2',
    green: '#80a856',
  },

  // Git цвета
  git: {
    modified: '#394b70',
    added: '#164846',
    deleted: '#703438',
    deletedDark: '#823c41',
    modifiedMinimap: '#425882',
    addedMinimap: '#1c5957',
    deletedMinimap: '#944449',
  },

  // Интерактивные состояния
  interactive: {
    hover: '#13131a',
    selected: '#20222c',
    highlight: '#7da0dc',
    invalid: '#c97018',
    error: '#bb616b',
    errorOutline: '#a6333f',
    tabInactiveModified: '#1f202e',
    tabUnfocusedActive: '#1f202e',
    tabLastPinned: '#222333',
  },

  // Элементы редактора
  elements: {
    indentGuides: '#2b2b3b',
    indentGuidesBackground: '#232433',
    foldBackground: '#111117',
    cssPunctuation: '#9abdf5',
    info: '#1abc9c',
  },

  // Высококонтрастная тема
  highContrast: {
    fg: {
      dim: '#b1bcdf',
      muted: '#c3cef0',
      medium: '#cdd9fd',
      bright: '#dcefff',
      brighter: '#ffffff',
      brightest: '#ffffff',
    },
    bg: {
      darkest: '#000000',
      darker: '#0a0a0f',
      dark: '#0f0f1a',
      main: '#141420',
      editor: '#141424',
      light: '#202030',
      lighter: '#252535',
      lightest: '#2a2a40',
    },
    blue: {
      primary: '#4a6bc0',
      light: '#7a9cd0',
      medium: '#8ab4f7',
    },
    red: {
      main: '#ff6b8a',
      dark: '#ff4b6b',
      muted: '#d03b5b',
    },
    green: {
      main: '#6bd96a',
      dark: '#4bc94b',
    },
  },

  // Цвета для доступности
  accessibility: {
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
    enhanced: {
      text: {
        primary: '#e2e5f0',
        secondary: '#c5cae5',
        tertiary: '#a8aedd',
        disabled: '#6b7280',
      },
      background: {
        elevated: '#1f2937',
        surface: '#111827',
        overlay: '#00000080',
      },
      interactive: {
        hover: '#374151',
        active: '#4b5563',
        selected: '#1e40af',
        focused: '#1d4ed8',
      },
    },
  },
}
