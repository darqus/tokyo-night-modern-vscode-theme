import type { Palette } from '../types'
import { darken, lighten, mix } from '../utils/color'
import { basePalette } from './base'

const bg = {
  darkest: darken(basePalette.background, 0.08),
  darker: darken(basePalette.background, 0.05),
  dark: darken(basePalette.background, 0.03),
  main: basePalette.background,
  editor: lighten(basePalette.background, 0.015),
  light: lighten(basePalette.background, 0.035),
  lighter: lighten(basePalette.background, 0.055),
  lightest: lighten(basePalette.background, 0.075),
}

const fg = {
  dim: lighten(basePalette.foreground, 0.1),
  muted: darken(basePalette.foreground, 0.12),
  medium: basePalette.foreground,
  bright: lighten(basePalette.foreground, 0.18),
  brighter: lighten(basePalette.foreground, 0.22),
  brightest: lighten(basePalette.foreground, 0.28),
}

export const palette: Palette = {
  bg,
  fg,

  blue: {
    primary: darken(basePalette.blue, 0.35),
    light: darken(basePalette.blue, 0.15),
    medium: basePalette.blue,
  },

  cyan: {
    dark: darken(basePalette.cyan, 0.12),
    medium: darken(basePalette.cyan, 0.18),
    light: basePalette.cyan,
    bright: lighten(basePalette.cyan, 0.12),
  },

  teal: {
    main: basePalette.teal,
    dark: darken(basePalette.teal, 0.25),
  },

  green: {
    main: basePalette.green,
    dark: mix(basePalette.green, basePalette.cyan, 0.4),
  },

  purple: {
    light: basePalette.purple,
    dark: darken(basePalette.purple, 0.15),
    bright: lighten(basePalette.purple, 0.08),
  },

  orange: basePalette.orange,

  yellow: {
    main: basePalette.yellow,
    light: lighten(basePalette.yellow, 0.12),
    muted: darken(basePalette.yellow, 0.15),
  },

  red: {
    main: basePalette.red,
    dark: darken(basePalette.red, 0.12),
    muted: mix(basePalette.red, basePalette.background, 0.5),
  },

  pink: {
    main: darken(basePalette.pink, 0.18),
    light: basePalette.pink,
    bright: mix(basePalette.red, basePalette.pink, 0.3),
  },

  special: {
    regex: lighten(basePalette.cyan, 0.25),
    invalid: mix(basePalette.red, basePalette.orange, 0.3),
    selection: lighten(basePalette.blue, 0.3),
    indentActive: lighten(basePalette.background, 0.15),
    disabled: mix(basePalette.foreground, basePalette.background, 0.4),
    badge: basePalette.badge,
    scrollbar: lighten(basePalette.foreground, 0.12),
    ghostText: mix(basePalette.foreground, basePalette.background, 0.5),
    inactive: lighten(basePalette.background, 0.1),
  },

  ui: {
    white: basePalette.white,
    black: basePalette.black,
    brightWhite: lighten(basePalette.foreground, 0.35),
    linkActive: lighten(basePalette.foreground, 0.35),
    codeLens: darken(basePalette.foreground, 0.05),
    badgeForeground: basePalette.white,
    debugException: mix(basePalette.red, basePalette.background, 0.4),
    debugError: darken(basePalette.red, 0.15),
    debugBreakpointDisabled: lighten(basePalette.background, 0.2),
    debugBreakpointUnverified: darken(basePalette.red, 0.2),
    stackFrameHighlight: darken(basePalette.yellow, 0.05),
    scmGraphHover: basePalette.white,
    scmGraphRef: mix(basePalette.blue, basePalette.purple, 0.3),
    menubarSelection: darken(basePalette.background, 0.02),
    notificationError: darken(basePalette.red, 0.15),
    notificationWarning: mix(basePalette.yellow, basePalette.orange, 0.3),
    inputInfo: lighten(basePalette.blue, 0.22),
    inputWarningBg: darken(basePalette.yellow, 0.12),
    inputErrorBg: mix(basePalette.red, basePalette.background, 0.6),
    inputErrorBorder: mix(basePalette.red, basePalette.background, 0.4),
    diffDiagonal: lighten(basePalette.background, 0.08),
    diffUnchanged: lighten(basePalette.background, 0.06),
    scrollbarShadow: basePalette.black,
    parameter: mix(basePalette.white, basePalette.yellow, 0.15),
    defaultLibrary: mix(basePalette.cyan, basePalette.teal, 0.4),
    commentDoc: mix(basePalette.foreground, basePalette.background, 0.3),
    plainPunctuation: lighten(basePalette.blue, 0.2),
    rawInlinePunctuation: mix(
      basePalette.foreground,
      basePalette.background,
      0.4
    ),
    heading2: lighten(basePalette.cyan, 0.05),
    heading4: darken(basePalette.blue, 0.08),
    heading6: mix(basePalette.blue, basePalette.foreground, 0.4),
    table: lighten(basePalette.blue, 0.25),
    preformat: lighten(basePalette.foreground, 0.12),
  },

  brackets: {
    blue: lighten(basePalette.blue, 0.15),
    cyan: lighten(basePalette.cyan, 0.18),
    purple: lighten(basePalette.purple, 0.12),
    teal: lighten(basePalette.teal, 0.1),
    green: lighten(basePalette.green, 0.08),
    yellow: lighten(basePalette.yellow, 0.05),
  },

  git: {
    modified: mix(basePalette.blue, basePalette.background, 0.65),
    added: mix(basePalette.teal, basePalette.background, 0.8),
    deleted: mix(basePalette.red, basePalette.background, 0.7),
    deletedDark: mix(basePalette.red, basePalette.background, 0.65),
    modifiedMinimap: mix(basePalette.blue, basePalette.background, 0.6),
    addedMinimap: mix(basePalette.teal, basePalette.background, 0.75),
    deletedMinimap: mix(basePalette.red, basePalette.background, 0.6),
  },

  interactive: {
    hover: mix(basePalette.background, basePalette.blue, 0.08),
    selected: mix(basePalette.background, basePalette.blue, 0.12),
    highlight: lighten(basePalette.blue, 0.05),
    invalid: mix(basePalette.orange, basePalette.yellow, 0.3),
    error: darken(basePalette.red, 0.15),
    errorOutline: darken(basePalette.red, 0.3),
    tabInactiveModified: lighten(basePalette.background, 0.04),
    tabUnfocusedActive: lighten(basePalette.background, 0.04),
    tabLastPinned: lighten(basePalette.background, 0.05),
  },

  elements: {
    indentGuides: lighten(basePalette.background, 0.08),
    indentGuidesBackground: lighten(basePalette.background, 0.05),
    foldBackground: darken(basePalette.background, 0.04),
    cssPunctuation: lighten(basePalette.blue, 0.2),
    info: mix(basePalette.teal, basePalette.green, 0.3),
  },
}
