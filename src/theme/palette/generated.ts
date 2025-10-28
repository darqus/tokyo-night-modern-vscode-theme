import type { Palette } from '../types'
import { mix } from '../utils/color'
import { basePalette } from './base'

const bg = {
  darkest: '#121220',
  darker: '#11111f',
  dark: '#141423',
  main: basePalette.background,
  editor: '#1a1a2e',
  light: '#1f1f33',
  lighter: '#24243a',
  lightest: '#2a2a44',
}

const fg = {
  dim: '#7d85a8',
  muted: '#5f688d',
  medium: basePalette.foreground,
  bright: '#9aa8d4',
  brighter: '#a0abe0',
  brightest: '#a8b5f3',
}

export const palette: Palette = {
  bg,
  fg,

  blue: {
    primary: '#3d59a1',
    light: '#6183bb',
    medium: basePalette.blue,
  },

  cyan: {
    dark: '#0db9d7',
    medium: '#0da0ba',
    light: basePalette.cyan,
    bright: '#89ddff',
  },

  teal: {
    main: basePalette.teal,
    dark: '#449dab',
  },

  green: {
    main: basePalette.green,
    dark: '#41a6b5',
  },

  purple: {
    light: basePalette.purple,
    dark: '#9d7cd8',
    bright: '#b267e6',
  },

  orange: basePalette.orange,

  yellow: {
    main: basePalette.yellow,
    light: '#ffdb69',
    muted: '#c49a5a',
  },

  red: {
    main: basePalette.red,
    dark: '#db4b4b',
    muted: '#914c54',
  },

  pink: {
    main: '#ba3c97',
    light: basePalette.pink,
    bright: '#fc7b7b',
  },

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

  ui: {
    white: basePalette.white,
    black: basePalette.black,
    brightWhite: '#b9c0e0',
    linkActive: '#b9c0e0',
    codeLens: '#6d7597',
    badgeForeground: basePalette.white,
    debugException: '#963c47',
    debugError: '#bb616b',
    debugBreakpointDisabled: '#414761',
    debugBreakpointUnverified: '#c24242',
    stackFrameHighlight: '#e2bd3a',
    scmGraphHover: basePalette.white,
    scmGraphRef: mix(basePalette.blue, basePalette.purple, 0.3),
    menubarSelection: '#1b1e2e',
    notificationError: '#bb616b',
    notificationWarning: '#bba461',
    inputInfo: '#a9b5ee',
    inputWarningBg: '#c2985b',
    inputErrorBg: '#85353e',
    inputErrorBorder: '#963c47',
    diffDiagonal: '#292e42',
    diffUnchanged: '#282a3b',
    scrollbarShadow: basePalette.black,
    parameter: '#d9d4cd',
    defaultLibrary: '#2ac3de',
    commentDoc: '#596184',
    plainPunctuation: '#9abdf5',
    rawInlinePunctuation: '#4e5579',
    heading2: '#61bdf2',
    heading4: '#6d91de',
    heading6: '#7580b1',
    table: '#a2b7fa',
    preformat: '#7f8cbe',
  },

  brackets: {
    blue: '#698cd6',
    cyan: mix(basePalette.cyan, basePalette.blue, 0.3),
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
    hover: '#1f1f33',
    selected: '#20222c',
    highlight: '#7da0dc',
    invalid: '#c97018',
    error: '#bb616b',
    errorOutline: '#a6333f',
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
}
