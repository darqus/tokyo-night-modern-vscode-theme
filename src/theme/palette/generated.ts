import type { Palette } from '../types'
import { darken, lighten, mix } from '../utils/color'
import { basePalette } from './base'
import { COLOR_MIXES } from './constants'

const bg = {
  darkest: darken(basePalette.background, COLOR_MIXES.BG_DARKEST),
  darker: darken(basePalette.background, COLOR_MIXES.BG_DARKER),
  dark: darken(basePalette.background, COLOR_MIXES.BG_DARK),
  main: basePalette.background,
  editor: lighten(basePalette.background, COLOR_MIXES.BG_EDITOR_LIGHTEN),
  light: lighten(basePalette.background, COLOR_MIXES.BG_LIGHT),
  lighter: lighten(basePalette.background, COLOR_MIXES.BG_LIGHTER),
  lightest: lighten(basePalette.background, COLOR_MIXES.BG_LIGHTEST),
}

const fg = {
  dim: lighten(basePalette.foreground, COLOR_MIXES.FG_DIM_LIGHTEN),
  muted: darken(basePalette.foreground, COLOR_MIXES.FG_MUTED_DARKEN),
  medium: basePalette.foreground,
  bright: lighten(basePalette.foreground, COLOR_MIXES.FG_BRIGHT_LIGHTEN),
  brighter: lighten(basePalette.foreground, COLOR_MIXES.FG_BRIGHTER_LIGHTEN),
  brightest: lighten(basePalette.foreground, COLOR_MIXES.FG_BRIGHTEST_LIGHTEN),
}

export const palette: Palette = {
  bg,
  fg,

  blue: {
    primary: darken(basePalette.blue, COLOR_MIXES.BLUE_PRIMARY_DARKEN),
    light: darken(basePalette.blue, COLOR_MIXES.BLUE_LIGHT_DARKEN),
    medium: basePalette.blue,
  },

  cyan: {
    dark: darken(basePalette.cyan, COLOR_MIXES.CYAN_DARK_DARKEN),
    medium: darken(basePalette.cyan, COLOR_MIXES.CYAN_MEDIUM_DARKEN),
    light: basePalette.cyan,
    bright: lighten(basePalette.cyan, COLOR_MIXES.CYAN_BRIGHT_LIGHTEN),
  },

  teal: {
    main: basePalette.teal,
    dark: darken(basePalette.teal, COLOR_MIXES.TEAL_DARK_DARKEN),
  },

  green: {
    main: basePalette.green,
    dark: mix(basePalette.green, basePalette.cyan, COLOR_MIXES.GREEN_CYAN_MIX),
  },

  purple: {
    light: basePalette.purple,
    dark: darken(basePalette.purple, COLOR_MIXES.PURPLE_DARK_DARKEN),
    bright: lighten(basePalette.purple, COLOR_MIXES.PURPLE_BRIGHT_LIGHTEN),
  },

  orange: basePalette.orange,

  yellow: {
    main: basePalette.yellow,
    light: lighten(basePalette.yellow, COLOR_MIXES.YELLOW_LIGHT_LIGHTEN),
    muted: darken(basePalette.yellow, COLOR_MIXES.YELLOW_MUTED_DARKEN),
  },

  red: {
    main: basePalette.red,
    dark: darken(basePalette.red, COLOR_MIXES.RED_DARK_DARKEN),
    muted: mix(
      basePalette.red,
      basePalette.background,
      COLOR_MIXES.RED_MUTED_BG_MIX
    ),
  },

  pink: {
    main: darken(basePalette.pink, COLOR_MIXES.PINK_MAIN_DARKEN),
    light: basePalette.pink,
    bright: mix(basePalette.red, basePalette.pink, COLOR_MIXES.RED_PINK_MIX),
  },

  special: {
    regex: lighten(basePalette.cyan, COLOR_MIXES.CYAN_REGEX_LIGHTEN),
    invalid: mix(
      basePalette.red,
      basePalette.orange,
      COLOR_MIXES.RED_ORANGE_MIX
    ),
    selection: lighten(basePalette.blue, COLOR_MIXES.SPECIAL_SELECTION_LIGHTEN),
    indentActive: lighten(
      basePalette.background,
      COLOR_MIXES.SPECIAL_INDENT_ACTIVE_LIGHTEN
    ),
    disabled: mix(
      basePalette.foreground,
      basePalette.background,
      COLOR_MIXES.SPECIAL_DISABLED_MIX
    ),
    badge: basePalette.badge,
    scrollbar: lighten(
      basePalette.foreground,
      COLOR_MIXES.SPECIAL_SCROLLBAR_LIGHTEN
    ),
    ghostText: mix(
      basePalette.foreground,
      basePalette.background,
      COLOR_MIXES.SPECIAL_GHOST_TEXT_MIX
    ),
    inactive: lighten(
      basePalette.background,
      COLOR_MIXES.SPECIAL_INACTIVE_LIGHTEN
    ),
  },

  ui: {
    white: basePalette.white,
    black: basePalette.black,
    brightWhite: lighten(
      basePalette.foreground,
      COLOR_MIXES.UI_BRIGHT_WHITE_LIGHTEN
    ),
    linkActive: lighten(
      basePalette.foreground,
      COLOR_MIXES.UI_LINK_ACTIVE_LIGHTEN
    ),
    codeLens: darken(basePalette.foreground, COLOR_MIXES.UI_CODE_LENS_DARKEN),
    badgeForeground: basePalette.white,
    debugException: mix(
      basePalette.red,
      basePalette.background,
      COLOR_MIXES.UI_DEBUG_EXCEPTION_MIX
    ),
    debugError: darken(basePalette.red, COLOR_MIXES.RED_ERROR_DARKEN),
    debugBreakpointDisabled: lighten(
      basePalette.background,
      COLOR_MIXES.UI_DEBUG_BREAKPOINT_DISABLED_LIGHTEN
    ),
    debugBreakpointUnverified: darken(
      basePalette.red,
      COLOR_MIXES.RED_BREAKPOINT_DARKEN
    ),
    stackFrameHighlight: darken(
      basePalette.yellow,
      COLOR_MIXES.YELLOW_STACK_FRAME_DARKEN
    ),
    scmGraphHover: basePalette.white,
    scmGraphRef: mix(
      basePalette.blue,
      basePalette.purple,
      COLOR_MIXES.PURPLE_BLUE_MIX
    ),
    menubarSelection: darken(
      basePalette.background,
      COLOR_MIXES.UI_MENUBAR_SELECTION_DARKEN
    ),
    notificationError: darken(basePalette.red, COLOR_MIXES.RED_ERROR_DARKEN),
    notificationWarning: mix(
      basePalette.yellow,
      basePalette.orange,
      COLOR_MIXES.YELLOW_ORANGE_MIX
    ),
    inputInfo: lighten(basePalette.blue, COLOR_MIXES.BLUE_INPUT_INFO_LIGHTEN),
    inputWarningBg: darken(
      basePalette.yellow,
      COLOR_MIXES.YELLOW_INPUT_WARNING_DARKEN
    ),
    inputErrorBg: mix(
      basePalette.red,
      basePalette.background,
      COLOR_MIXES.RED_INPUT_ERROR_BG_MIX
    ),
    inputErrorBorder: mix(
      basePalette.red,
      basePalette.background,
      COLOR_MIXES.RED_INPUT_ERROR_BORDER_MIX
    ),
    diffDiagonal: lighten(
      basePalette.background,
      COLOR_MIXES.UI_DIFF_DIAGONAL_LIGHTEN
    ),
    diffUnchanged: lighten(
      basePalette.background,
      COLOR_MIXES.UI_DIFF_UNCHANGED_LIGHTEN
    ),
    scrollbarShadow: basePalette.black,
    parameter: mix(
      basePalette.white,
      basePalette.yellow,
      COLOR_MIXES.YELLOW_WHITE_MIX
    ),
    defaultLibrary: mix(
      basePalette.cyan,
      basePalette.teal,
      COLOR_MIXES.DEFAULT_LIBRARY_MIX
    ),
    commentDoc: mix(
      basePalette.foreground,
      basePalette.background,
      COLOR_MIXES.UI_COMMENT_DOC_MIX
    ),
    plainPunctuation: lighten(
      basePalette.blue,
      COLOR_MIXES.BLUE_PUNCTUATION_LIGHTEN
    ),
    rawInlinePunctuation: mix(
      basePalette.foreground,
      basePalette.background,
      COLOR_MIXES.UI_RAW_INLINE_PUNCTUATION_MIX
    ),
    heading2: lighten(basePalette.cyan, COLOR_MIXES.CYAN_HEADING_LIGHTEN),
    heading4: darken(basePalette.blue, COLOR_MIXES.BLUE_HEADING_DARKEN),
    heading6: mix(
      basePalette.blue,
      basePalette.foreground,
      COLOR_MIXES.UI_HEADING6_MIX
    ),
    table: lighten(basePalette.blue, COLOR_MIXES.BLUE_TABLE_LIGHTEN),
    preformat: lighten(
      basePalette.foreground,
      COLOR_MIXES.SPECIAL_SCROLLBAR_LIGHTEN
    ),
  },

  brackets: {
    blue: lighten(basePalette.blue, COLOR_MIXES.BLUE_BRACKETS_LIGHTEN),
    cyan: lighten(basePalette.cyan, COLOR_MIXES.CYAN_BRACKETS_LIGHTEN),
    purple: lighten(basePalette.purple, COLOR_MIXES.PURPLE_BRACKETS_LIGHTEN),
    teal: lighten(basePalette.teal, COLOR_MIXES.TEAL_BRACKETS_LIGHTEN),
    green: lighten(basePalette.green, COLOR_MIXES.GREEN_BRACKETS_LIGHTEN),
    yellow: lighten(basePalette.yellow, COLOR_MIXES.YELLOW_BRACKETS_LIGHTEN),
  },

  git: {
    modified: mix(
      basePalette.blue,
      basePalette.background,
      COLOR_MIXES.BG_BLUE_GIT_MODIFIED_MIX
    ),
    added: mix(
      basePalette.teal,
      basePalette.background,
      COLOR_MIXES.BG_TEAL_GIT_ADDED_MIX
    ),
    deleted: mix(
      basePalette.red,
      basePalette.background,
      COLOR_MIXES.BG_RED_GIT_DELETED_MIX
    ),
    deletedDark: mix(
      basePalette.red,
      basePalette.background,
      COLOR_MIXES.BG_RED_GIT_DELETED_DARK_MIX
    ),
    modifiedMinimap: mix(
      basePalette.blue,
      basePalette.background,
      COLOR_MIXES.BG_BLUE_GIT_MODIFIED_MINIMAP_MIX
    ),
    addedMinimap: mix(
      basePalette.teal,
      basePalette.background,
      COLOR_MIXES.BG_TEAL_GIT_ADDED_MINIMAP_MIX
    ),
    deletedMinimap: mix(
      basePalette.red,
      basePalette.background,
      COLOR_MIXES.BG_RED_GIT_DELETED_MINIMAP_MIX
    ),
  },

  interactive: {
    hover: mix(
      basePalette.background,
      basePalette.blue,
      COLOR_MIXES.BG_BLUE_HOVER_MIX
    ),
    selected: mix(
      basePalette.background,
      basePalette.blue,
      COLOR_MIXES.BG_BLUE_SELECTED_MIX
    ),
    highlight: lighten(
      basePalette.blue,
      COLOR_MIXES.INTERACTIVE_HIGHLIGHT_LIGHTEN
    ),
    invalid: mix(
      basePalette.orange,
      basePalette.yellow,
      COLOR_MIXES.YELLOW_ORANGE_MIX
    ),
    error: darken(basePalette.red, COLOR_MIXES.RED_ERROR_DARKEN),
    errorOutline: darken(basePalette.red, COLOR_MIXES.RED_ERROR_OUTLINE_DARKEN),
    tabInactiveModified: lighten(
      basePalette.background,
      COLOR_MIXES.INTERACTIVE_TAB_INACTIVE_MODIFIED_LIGHTEN
    ),
    tabUnfocusedActive: lighten(
      basePalette.background,
      COLOR_MIXES.INTERACTIVE_TAB_UNFOCUSED_ACTIVE_LIGHTEN
    ),
    tabLastPinned: lighten(
      basePalette.background,
      COLOR_MIXES.INTERACTIVE_TAB_LAST_PINNED_LIGHTEN
    ),
  },

  elements: {
    indentGuides: lighten(
      basePalette.background,
      COLOR_MIXES.ELEMENTS_INDENT_GUIDES_LIGHTEN
    ),
    indentGuidesBackground: lighten(
      basePalette.background,
      COLOR_MIXES.ELEMENTS_INDENT_GUIDES_BG_LIGHTEN
    ),
    foldBackground: darken(
      basePalette.background,
      COLOR_MIXES.ELEMENTS_FOLD_BG_DARKEN
    ),
    cssPunctuation: lighten(
      basePalette.blue,
      COLOR_MIXES.ELEMENTS_CSS_PUNCTUATION_LIGHTEN
    ),
    info: mix(
      basePalette.teal,
      basePalette.green,
      COLOR_MIXES.ELEMENTS_INFO_MIX
    ),
  },
}
