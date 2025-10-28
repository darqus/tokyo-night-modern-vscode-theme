import { basePalette } from './base'
import { mix } from '../utils/color'
import { deriveColor } from '../utils/color-generator'
import type { Palette } from '../types'

const bg = {
  darkest: deriveColor(basePalette.background, '#0f0f1a'),
  darker: deriveColor(basePalette.background, '#10101b'),
  dark: deriveColor(basePalette.background, '#131320'),
  main: basePalette.background,
  editor: deriveColor(basePalette.background, '#19192b'),
  light: deriveColor(basePalette.background, '#1e1e33'),
  lighter: deriveColor(basePalette.background, '#212138'),
  lightest: deriveColor(basePalette.background, '#272742'),
}

const fg = {
  dim: deriveColor(basePalette.foreground, '#576081'),
  muted: deriveColor(basePalette.foreground, '#5f688d'),
  medium: basePalette.foreground,
  bright: deriveColor(basePalette.foreground, '#9aa8d4'),
  brighter: deriveColor(basePalette.foreground, '#a0abe0'),
  brightest: deriveColor(basePalette.foreground, '#a8b5f3'),
}

export const palette: Palette = {
  bg,
  fg,
  
  blue: {
    primary: deriveColor(basePalette.blue, '#3d59a1'),
    light: deriveColor(basePalette.blue, '#6183bb'),
    medium: basePalette.blue,
  },
  
  cyan: {
    dark: deriveColor(basePalette.cyan, '#0db9d7'),
    medium: deriveColor(basePalette.cyan, '#0da0ba'),
    light: basePalette.cyan,
    bright: deriveColor(basePalette.cyan, '#89ddff'),
  },
  
  teal: {
    main: basePalette.teal,
    dark: deriveColor(basePalette.teal, '#449dab'),
  },
  
  green: {
    main: basePalette.green,
    dark: deriveColor(basePalette.green, '#41a6b5'),
  },
  
  purple: {
    light: basePalette.purple,
    dark: deriveColor(basePalette.purple, '#9d7cd8'),
    bright: deriveColor(basePalette.purple, '#b267e6'),
  },
  
  orange: basePalette.orange,
  
  yellow: {
    main: basePalette.yellow,
    light: deriveColor(basePalette.yellow, '#ffdb69'),
    muted: deriveColor(basePalette.yellow, '#c49a5a'),
  },
  
  red: {
    main: basePalette.red,
    dark: deriveColor(basePalette.red, '#db4b4b'),
    muted: deriveColor(basePalette.red, '#914c54'),
  },
  
  pink: {
    main: deriveColor(basePalette.pink, '#ba3c97'),
    light: basePalette.pink,
    bright: deriveColor(basePalette.pink, '#fc7b7b'),
  },
  
  special: {
    regex: deriveColor(basePalette.cyan, '#b4f9f8'),
    invalid: deriveColor(basePalette.red, '#ff5370'),
    selection: deriveColor(fg.bright, '#bbc2e4'),
    indentActive: deriveColor(bg.light, '#42465d'),
    disabled: deriveColor(fg.dim, '#5d668f'),
    badge: '#0078d4',
    scrollbar: deriveColor(fg.medium, '#868bc4'),
    ghostText: deriveColor(fg.dim, '#606a97'),
    inactive: deriveColor(bg.lightest, '#333957'),
  },
  
  ui: {
    white: basePalette.white,
    black: basePalette.black,
    brightWhite: deriveColor(fg.bright, '#b9c0e0'),
    linkActive: deriveColor(fg.bright, '#b9c0e0'),
    codeLens: deriveColor(fg.dim, '#6d7597'),
    badgeForeground: basePalette.white,
    debugException: deriveColor(basePalette.red, '#963c47'),
    debugError: deriveColor(basePalette.red, '#bb616b'),
    debugBreakpointDisabled: deriveColor(bg.lightest, '#414761'),
    debugBreakpointUnverified: deriveColor(basePalette.red, '#c24242'),
    stackFrameHighlight: deriveColor(basePalette.yellow, '#e2bd3a'),
    scmGraphHover: basePalette.white,
    scmGraphRef: mix(basePalette.blue, basePalette.purple, 0.3),
    menubarSelection: deriveColor(bg.main, '#1b1e2e'),
    notificationError: deriveColor(basePalette.red, '#bb616b'),
    notificationWarning: deriveColor(basePalette.yellow, '#bba461'),
    inputInfo: deriveColor(basePalette.blue, '#a9b5ee'),
    inputWarningBg: deriveColor(basePalette.yellow, '#c2985b'),
    inputErrorBg: deriveColor(basePalette.red, '#85353e'),
    inputErrorBorder: deriveColor(basePalette.red, '#963c47'),
    diffDiagonal: deriveColor(bg.dark, '#292e42'),
    diffUnchanged: deriveColor(bg.dark, '#282a3b'),
    scrollbarShadow: basePalette.black,
    parameter: deriveColor(fg.brightest, '#d9d4cd'),
    defaultLibrary: deriveColor(basePalette.cyan, '#2ac3de'),
    commentDoc: deriveColor(fg.dim, '#596184'),
    plainPunctuation: deriveColor(basePalette.blue, '#9abdf5'),
    rawInlinePunctuation: deriveColor(bg.lightest, '#4e5579'),
    heading2: deriveColor(basePalette.cyan, '#61bdf2'),
    heading4: deriveColor(basePalette.blue, '#6d91de'),
    heading6: deriveColor(fg.medium, '#7580b1'),
    table: deriveColor(basePalette.blue, '#a2b7fa'),
    preformat: deriveColor(fg.medium, '#7f8cbe'),
  },
  
  brackets: {
    blue: deriveColor(basePalette.blue, '#698cd6'),
    cyan: mix(basePalette.cyan, basePalette.blue, 0.3),
    purple: deriveColor(basePalette.purple, '#9a7ecc'),
    teal: deriveColor(basePalette.cyan, '#25aac2'),
    green: deriveColor(basePalette.green, '#80a856'),
  },
  
  git: {
    modified: deriveColor(basePalette.blue, '#394b70'),
    added: deriveColor(basePalette.teal, '#164846'),
    deleted: deriveColor(basePalette.red, '#703438'),
    deletedDark: deriveColor(basePalette.red, '#823c41'),
    modifiedMinimap: deriveColor(basePalette.blue, '#425882'),
    addedMinimap: deriveColor(basePalette.teal, '#1c5957'),
    deletedMinimap: deriveColor(basePalette.red, '#944449'),
  },
  
  interactive: {
    hover: deriveColor(bg.main, '#13131a'),
    selected: deriveColor(bg.dark, '#20222c'),
    highlight: deriveColor(basePalette.blue, '#7da0dc'),
    invalid: deriveColor(basePalette.orange, '#c97018'),
    error: deriveColor(basePalette.red, '#bb616b'),
    errorOutline: deriveColor(basePalette.red, '#a6333f'),
    tabInactiveModified: deriveColor(bg.dark, '#1f202e'),
    tabUnfocusedActive: deriveColor(bg.dark, '#1f202e'),
    tabLastPinned: deriveColor(bg.dark, '#222333'),
  },
  
  elements: {
    indentGuides: deriveColor(bg.dark, '#2b2b3b'),
    indentGuidesBackground: deriveColor(bg.dark, '#232433'),
    foldBackground: deriveColor(bg.main, '#111117'),
    cssPunctuation: deriveColor(basePalette.blue, '#9abdf5'),
    info: '#1abc9c',
  },
}
