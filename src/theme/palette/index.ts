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
    dim: '#576081',
    muted: '#5f688d',
    medium: '#767ea8',
    bright: '#9aa8d4',
    brighter: '#a0abe0',
    brightest: '#a8b5f3',
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
    disabled: '#5d668f',
    badge: '#0078d4',
    scrollbar: '#868bc4',
    ghostText: '#606a97',
    inactive: '#333957',
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
    inputInfo: '#a9b5ee',
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
    heading6: '#7580b1',
    table: '#a2b7fa',

    // Форматирование
    preformat: '#7f8cbe',
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
}
