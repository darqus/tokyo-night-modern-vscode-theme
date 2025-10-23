import type { Palette } from '../types'

export const palette: Palette = {
  bg: {
    darkest: '#0d0f17',
    darker: '#101014',
    dark: '#14141b',
    main: '#16161e',
    editor: '#1a1b26',
    light: '#1c1d29',
    lighter: '#1e202e',
    lightest: '#202330',
  },

  fg: {
    dim: '#6a718d',
    muted: '#7f87a8',
    medium: '#8a90af',
    bright: '#a9b4d9',
    brighter: '#c2c9eb',
    brightest: '#d0d9ff',
  },

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

  special: {
    regex: '#b4f9f8',
    invalid: '#ff5370',
    selection: '#636e90',
    indentGuide: '#363b54',
    indentActive: '#42465d',
    border: '#29355a',
    disabled: '#666e90',
    badge: '#7e83b2',
    scrollbar: '#868bc4',
    ghostText: '#7680ad',
    inactive: '#4d5064',
  },

  ui: {
    white: '#ffffff',
    badgeForeground: '#b9c0e0',
    linkActive: '#b9c0e0',
    codeLens: '#6d7597',
    brightWhite: '#b9c0e0',
    // Новые цвета из UI модулей
    preformat: '#a9adbd',
    debugException: '#963c47',
    debugError: '#bb616b',
    debugBreakpointDisabled: '#414761',
    debugBreakpointUnverified: '#c24242',
    stackFrameHighlight: '#e2bd3a',
    scmGraphHover: '#1b1e2e',
    scmGraphRef: '#506fca',
    menubarSelection: '#1b1e2e',
    notificationError: '#bb616b',
    notificationWarning: '#bba461',
    inputInfo: '#c9d0f0',
    inputWarningBg: '#c2985b',
    inputErrorBg: '#85353e',
    inputErrorBorder: '#963c47',
    diffDiagonal: '#292e42',
    diffUnchanged: '#282a3b',
    scrollbarShadow: '#000000',
    black: '#000000',
    // Семантические цвета
    parameter: '#d9d4cd',
    defaultLibrary: '#2ac3de',
    commentDoc: '#6c759d',
    // Markdown цвета
    plainPunctuation: '#9abdf5',
    rawInlinePunctuation: '#4e5579',
    heading2: '#61bdf2',
    heading4: '#6d91de',
    heading6: '#868eb3',
    table: '#c0cefc',
  },

  brackets: {
    blue: '#698cd6',
    cyan: '#68b3de',
    purple: '#9a7ecc',
    teal: '#25aac2',
    green: '#80a856',
  },

  git: {
    modified: '#394b70',
    added: '#164846',
    deleted: '#703438',
    deletedDark: '#823c41',
    modifiedMinimap: '#425882',
    addedMinimap: '#1c5957',
    deletedMinimap: '#944449',
  },

  interactive: {
    hover: '#13131a',
    selected: '#20222c',
    highlight: '#7da0dc',
    invalid: '#c97018',
    error: '#bb616b',
    errorOutline: '#a6333f',
    // Дополнительные состояния
    tabInactiveModified: '#1f202e',
    tabUnfocusedActive: '#1f202e',
    tabLastPinned: '#222333',
  },

  elements: {
    indentGuides: '#2b2b3b',
    indentGuidesBackground: '#232433',
    foldBackground: '#111117',
    cssPunctuation: '#9abdf5',
    info: '#1abc9c',
  },

  // Высококонтрастные цвета
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
      editor: '#1a1a2a',
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
  },
}
