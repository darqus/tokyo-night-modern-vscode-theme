import type { Palette } from '../types'
import { darken, lighten, mix } from '../utils/color'
import { basePalette } from './base'
import { COLOR_MIXES } from './constants'

const bg = {
  darkest: basePalette.background.dark,
  darker: darken(basePalette.background.main, COLOR_MIXES.BG_DARKER),
  dark: basePalette.background.dark,
  main: basePalette.background.main,
  editor: basePalette.background.light,
  light: basePalette.background.light,
  lighter: lighten(basePalette.background.light, COLOR_MIXES.BG_LIGHTER),
  lightest: basePalette.background.bright || basePalette.background.light,
}

const fg = {
  dim: basePalette.foreground.dark,
  muted: basePalette.foreground.dark,
  medium: basePalette.foreground.main,
  bright: basePalette.foreground.light,
  brighter: basePalette.foreground.light,
  brightest: basePalette.foreground.bright || basePalette.foreground.light,
}

export const palette: Palette = {
  bg,
  fg,

  blue: {
    primary: basePalette.blue.dark,
    light: basePalette.blue.light,
    medium: basePalette.blue.main,
  },

  cyan: {
    dark: basePalette.cyan.dark,
    medium: basePalette.cyan.main,
    light: basePalette.cyan.light,
    bright: basePalette.cyan.bright || basePalette.cyan.light,
  },

  teal: {
    main: basePalette.teal.main,
    dark: basePalette.teal.dark,
  },

  green: {
    main: basePalette.green.main,
    dark: basePalette.green.dark,
  },

  purple: {
    light: basePalette.purple.light,
    dark: basePalette.purple.dark,
    bright: basePalette.purple.bright || basePalette.purple.light,
  },

  orange: {
    dark: basePalette.orange.dark,
    main: basePalette.orange.main,
    light: basePalette.orange.light,
    bright: basePalette.orange.bright || basePalette.orange.light,
  },

  yellow: {
    main: basePalette.yellow.main,
    light: basePalette.yellow.light,
    muted: basePalette.yellow.dark,
  },

  red: {
    main: basePalette.red.main,
    dark: basePalette.red.dark,
    muted: mix(basePalette.red.main, basePalette.background.main, COLOR_MIXES.RED_MUTED_BG_MIX),
  },

  pink: {
    main: basePalette.pink.main,
    light: basePalette.pink.light,
    bright: basePalette.pink.bright || basePalette.pink.light,
  },

  special: {
    regex: basePalette.cyan.light,
    invalid: mix(basePalette.red.main, basePalette.orange.main, COLOR_MIXES.RED_ORANGE_MIX),
    selection: lighten(basePalette.blue.main, COLOR_MIXES.SPECIAL_SELECTION_LIGHTEN),
    indentActive: lighten(basePalette.background.main, COLOR_MIXES.SPECIAL_INDENT_ACTIVE_LIGHTEN),
    disabled: mix(basePalette.foreground.main, basePalette.background.main, COLOR_MIXES.SPECIAL_DISABLED_MIX),
    badge: '#007acc',
    scrollbar: lighten(basePalette.foreground.main, COLOR_MIXES.SPECIAL_SCROLLBAR_LIGHTEN),
    ghostText: mix(basePalette.foreground.main, basePalette.background.main, COLOR_MIXES.SPECIAL_GHOST_TEXT_MIX),
    inactive: lighten(basePalette.background.main, COLOR_MIXES.SPECIAL_INACTIVE_LIGHTEN),
  },

  ui: {
    white: '#ffffff',
    black: '#000000',
    brightWhite: basePalette.foreground.bright || basePalette.foreground.light,
    linkActive: basePalette.foreground.light,
    codeLens: basePalette.foreground.dark,
    badgeForeground: '#ffffff',
    debugException: mix(basePalette.red.main, basePalette.background.main, COLOR_MIXES.UI_DEBUG_EXCEPTION_MIX),
    debugError: darken(basePalette.red.main, COLOR_MIXES.RED_ERROR_DARKEN),
    debugBreakpointDisabled: lighten(basePalette.background.main, COLOR_MIXES.UI_DEBUG_BREAKPOINT_DISABLED_LIGHTEN),
    debugBreakpointUnverified: darken(basePalette.red.main, COLOR_MIXES.RED_BREAKPOINT_DARKEN),
    stackFrameHighlight: darken(basePalette.yellow.main, COLOR_MIXES.YELLOW_STACK_FRAME_DARKEN),
    scmGraphHover: '#ffffff',
    scmGraphRef: mix(basePalette.blue.main, basePalette.purple.main, COLOR_MIXES.PURPLE_BLUE_MIX),
    menubarSelection: darken(basePalette.background.main, COLOR_MIXES.UI_MENUBAR_SELECTION_DARKEN),
    notificationError: darken(basePalette.red.main, COLOR_MIXES.RED_ERROR_DARKEN),
    notificationWarning: mix(basePalette.yellow.main, basePalette.orange.main, COLOR_MIXES.YELLOW_ORANGE_MIX),
    inputInfo: lighten(basePalette.blue.main, COLOR_MIXES.BLUE_INPUT_INFO_LIGHTEN),
    inputWarningBg: darken(basePalette.yellow.main, COLOR_MIXES.YELLOW_INPUT_WARNING_DARKEN),
    inputErrorBg: mix(basePalette.red.main, basePalette.background.main, COLOR_MIXES.RED_INPUT_ERROR_BG_MIX),
    inputErrorBorder: mix(basePalette.red.main, basePalette.background.main, COLOR_MIXES.RED_INPUT_ERROR_BORDER_MIX),
    diffDiagonal: lighten(basePalette.background.main, COLOR_MIXES.UI_DIFF_DIAGONAL_LIGHTEN),
    diffUnchanged: lighten(basePalette.background.main, COLOR_MIXES.UI_DIFF_UNCHANGED_LIGHTEN),
    scrollbarShadow: '#000000',
    parameter: mix('#ffffff', basePalette.yellow.main, COLOR_MIXES.YELLOW_WHITE_MIX),
    defaultLibrary: mix(basePalette.cyan.main, basePalette.teal.main, COLOR_MIXES.DEFAULT_LIBRARY_MIX),
    commentDoc: mix(basePalette.foreground.main, basePalette.background.main, COLOR_MIXES.UI_COMMENT_DOC_MIX),
    plainPunctuation: lighten(basePalette.blue.main, COLOR_MIXES.BLUE_PUNCTUATION_LIGHTEN),
    rawInlinePunctuation: mix(basePalette.foreground.main, basePalette.background.main, COLOR_MIXES.UI_RAW_INLINE_PUNCTUATION_MIX),
    heading2: lighten(basePalette.cyan.main, COLOR_MIXES.CYAN_HEADING_LIGHTEN),
    heading4: darken(basePalette.blue.main, COLOR_MIXES.BLUE_HEADING_DARKEN),
    heading6: mix(basePalette.blue.main, basePalette.foreground.main, COLOR_MIXES.UI_HEADING6_MIX),
    table: lighten(basePalette.blue.main, COLOR_MIXES.BLUE_TABLE_LIGHTEN),
    preformat: lighten(basePalette.foreground.main, COLOR_MIXES.SPECIAL_SCROLLBAR_LIGHTEN),
  },

  brackets: {
    blue: basePalette.blue.light,
    cyan: basePalette.cyan.light,
    purple: basePalette.purple.light,
    teal: basePalette.teal.light,
    green: basePalette.green.light,
    yellow: basePalette.yellow.light,
  },

  git: {
    modified: mix(basePalette.blue.main, basePalette.background.main, COLOR_MIXES.BG_BLUE_GIT_MODIFIED_MIX),
    added: mix(basePalette.teal.main, basePalette.background.main, COLOR_MIXES.BG_TEAL_GIT_ADDED_MIX),
    deleted: mix(basePalette.red.main, basePalette.background.main, COLOR_MIXES.BG_RED_GIT_DELETED_MIX),
    deletedDark: mix(basePalette.red.main, basePalette.background.main, COLOR_MIXES.BG_RED_GIT_DELETED_DARK_MIX),
    modifiedMinimap: mix(basePalette.blue.main, basePalette.background.main, COLOR_MIXES.BG_BLUE_GIT_MODIFIED_MINIMAP_MIX),
    addedMinimap: mix(basePalette.teal.main, basePalette.background.main, COLOR_MIXES.BG_TEAL_GIT_ADDED_MINIMAP_MIX),
    deletedMinimap: mix(basePalette.red.main, basePalette.background.main, COLOR_MIXES.BG_RED_GIT_DELETED_MINIMAP_MIX),
  },

  interactive: {
    hover: mix(basePalette.background.main, basePalette.blue.main, COLOR_MIXES.BG_BLUE_HOVER_MIX),
    selected: mix(basePalette.background.main, basePalette.blue.main, COLOR_MIXES.BG_BLUE_SELECTED_MIX),
    highlight: lighten(basePalette.blue.main, COLOR_MIXES.INTERACTIVE_HIGHLIGHT_LIGHTEN),
    invalid: mix(basePalette.orange.main, basePalette.yellow.main, COLOR_MIXES.YELLOW_ORANGE_MIX),
    error: darken(basePalette.red.main, COLOR_MIXES.RED_ERROR_DARKEN),
    errorOutline: darken(basePalette.red.main, COLOR_MIXES.RED_ERROR_OUTLINE_DARKEN),
    tabInactiveModified: lighten(basePalette.background.main, COLOR_MIXES.INTERACTIVE_TAB_INACTIVE_MODIFIED_LIGHTEN),
    tabUnfocusedActive: lighten(basePalette.background.main, COLOR_MIXES.INTERACTIVE_TAB_UNFOCUSED_ACTIVE_LIGHTEN),
    tabLastPinned: lighten(basePalette.background.main, COLOR_MIXES.INTERACTIVE_TAB_LAST_PINNED_LIGHTEN),
  },

  elements: {
    indentGuides: lighten(basePalette.background.main, COLOR_MIXES.ELEMENTS_INDENT_GUIDES_LIGHTEN),
    indentGuidesBackground: lighten(basePalette.background.main, COLOR_MIXES.ELEMENTS_INDENT_GUIDES_BG_LIGHTEN),
    foldBackground: darken(basePalette.background.main, COLOR_MIXES.ELEMENTS_FOLD_BG_DARKEN),
    cssPunctuation: lighten(basePalette.blue.main, COLOR_MIXES.ELEMENTS_CSS_PUNCTUATION_LIGHTEN),
    info: mix(basePalette.teal.main, basePalette.green.main, COLOR_MIXES.ELEMENTS_INFO_MIX),
  },
}
