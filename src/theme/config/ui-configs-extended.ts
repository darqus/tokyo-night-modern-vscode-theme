import type { Palette } from '../palette/index.js'
import { alpha, darken, lighten, mix } from '../utils/color.js'
import {
  lightBackground,
  mediumHighlight,
  slightlyDarker,
  subtleHighlight,
} from '../utils/color-helpers.js'
import type { UIColorConfig } from './color-config-dsl.js'

/**
 * Editor colors - основной редактор кода (самый большой блок)
 */
export const editorConfig: UIColorConfig = {
  rules: {
    'selection.background': (p: Palette) => subtleHighlight(p.blue.main),
    'editorLink.activeForeground': (p: Palette) => p.fg.light,
  },
  groups: {
    editor: {
      background: (p: Palette) => p.bg.light,
      foreground: (p: Palette) => p.fg.light,
      foldBackground: (p: Palette) => alpha(p.bg.dark, 0.2),
      selectionBackground: (p: Palette) => subtleHighlight(p.blue.main),
      inactiveSelectionBackground: (p: Palette) => alpha(p.blue.main, 0.15),
      findMatchBackground: (p: Palette) => alpha(p.blue.dark, 0.2),
      findMatchBorder: (p: Palette) => alpha(p.yellow.main, 0.5),
      findMatchHighlightBackground: (p: Palette) => alpha(p.blue.dark, 0.2),
      findRangeHighlightBackground: (p: Palette) =>
        subtleHighlight(p.blue.main),
      rangeHighlightBackground: (p: Palette) => subtleHighlight(p.teal.main),
      wordHighlightBackground: (p: Palette) => alpha(p.blue.main, 0.25),
      wordHighlightStrongBackground: (p: Palette) =>
        mediumHighlight(p.blue.main),
      selectionHighlightBackground: (p: Palette) => alpha(p.blue.main, 0.25),
      lineHighlightBackground: (p: Palette) => p.bg.light,
      stackFrameHighlightBackground: (p: Palette) =>
        alpha(p.yellow.dark, 0.125),
      focusedStackFrameHighlightBackground: (p: Palette) =>
        alpha(p.teal.main, 0.125),
    },
    editorCursor: {
      foreground: (p: Palette) => p.fg.light,
    },
    editorStickyScrollHover: {
      background: (p: Palette) => alpha(p.blue.main, 0.1),
    },
    editorIndentGuide: {
      background1: (p: Palette) => lighten(p.bg.main, 0.05),
      activeBackground1: (p: Palette) => mix(p.neutral.dark, p.bg.main, 0.7),
    },
    editorLineNumber: {
      foreground: (p: Palette) => p.neutral.dark,
      activeForeground: (p: Palette) => p.neutral.main,
    },
    editorWhitespace: {
      foreground: (p: Palette) => lighten(p.ui.badge, 0.08),
    },
    editorMarkerNavigation: {
      background: (p: Palette) => p.bg.main,
    },
    editorHoverWidget: {
      background: (p: Palette) => mix(p.bg.light, p.blue.main, 0.1),
      border: (p: Palette) => mix(p.bg.main, p.blue.main, 0.25),
    },
    editorBracketMatch: {
      background: (p: Palette) => p.bg.main,
      border: (p: Palette) => lightBackground(p.bg.main),
    },
    editorBracketHighlight: {
      foreground1: (p: Palette) => p.neutral.light,
      foreground2: (p: Palette) => p.cyan.light,
      foreground3: (p: Palette) => p.purple.light,
      foreground4: (p: Palette) => p.yellow.light,
      foreground5: (p: Palette) => p.teal.light,
      foreground6: (p: Palette) => p.green.main,
      'unexpectedBracket.foreground': (p: Palette) => p.red.dark,
    },
    editorBracketPairGuide: {
      activeBackground1: (p: Palette) => p.neutral.light,
      activeBackground2: (p: Palette) => p.cyan.light,
      activeBackground3: (p: Palette) => p.purple.light,
      activeBackground4: (p: Palette) => p.yellow.light,
      activeBackground5: (p: Palette) => p.teal.light,
      activeBackground6: (p: Palette) => p.green.main,
    },
    editorOverviewRuler: {
      border: (p: Palette) => lightBackground(p.bg.light),
      errorForeground: (p: Palette) => p.red.main,
      warningForeground: (p: Palette) => p.yellow.main,
      infoForeground: (p: Palette) => mix(p.teal.main, p.green.main, 0.3),
      bracketMatchForeground: (p: Palette) => p.bg.dark,
      findMatchForeground: (p: Palette) => alpha(p.neutral.light, 0.4),
      rangeHighlightForeground: (p: Palette) => alpha(p.teal.main, 0.3),
      selectionHighlightForeground: (p: Palette) => alpha(p.blue.main, 0.25),
      wordHighlightForeground: (p: Palette) => alpha(p.blue.main, 0.35),
      wordHighlightStrongForeground: (p: Palette) => alpha(p.blue.main, 0.45),
      modifiedForeground: (p: Palette) => mix(p.neutral.main, p.bg.main, 0.65),
      addedForeground: (p: Palette) => mix(p.teal.main, p.bg.main, 0.8),
      deletedForeground: (p: Palette) => mix(p.red.main, p.bg.main, 0.7),
    },
    editorRuler: {
      foreground: (p: Palette) => p.bg.dark,
    },
    editorError: {
      foreground: (p: Palette) => p.red.main,
    },
    editorWarning: {
      foreground: (p: Palette) => p.yellow.main,
    },
    editorInfo: {
      foreground: (p: Palette) => p.cyan.main,
    },
    editorHint: {
      foreground: (p: Palette) => p.cyan.main,
    },
    editorGutter: {
      modifiedBackground: (p: Palette) => mix(p.neutral.main, p.bg.main, 0.65),
      addedBackground: (p: Palette) => mix(p.teal.main, p.bg.main, 0.8),
      deletedBackground: (p: Palette) => mix(p.red.main, p.bg.main, 0.65),
    },
    editorGhostText: {
      foreground: (p: Palette) => p.neutral.dark,
    },
    minimapGutter: {
      modifiedBackground: (p: Palette) => mix(p.neutral.main, p.bg.main, 0.6),
      addedBackground: (p: Palette) => mix(p.teal.main, p.bg.main, 0.75),
      deletedBackground: (p: Palette) => mix(p.red.main, p.bg.main, 0.6),
    },
    editorGroup: {
      border: (p: Palette) => lightBackground(p.bg.light),
      dropBackground: (p: Palette) => lightBackground(p.bg.light),
    },
    editorGroupHeader: {
      tabsBorder: (p: Palette) => p.bg.dark,
      tabsBackground: (p: Palette) => p.bg.main,
      noTabsBackground: (p: Palette) => p.bg.main,
      border: (p: Palette) => lightBackground(p.bg.main),
    },
    editorPane: {
      background: (p: Palette) => p.bg.light,
    },
    editorWidget: {
      foreground: (p: Palette) => p.fg.light,
      background: (p: Palette) => mix(p.bg.main, p.neutral.dark, 0.15),
      border: (p: Palette) => mix(p.bg.main, p.blue.main, 0.2),
      resizeBorder: (p: Palette) => mix(p.bg.main, p.blue.main, 0.2),
    },
    editorSuggestWidget: {
      background: (p: Palette) => p.bg.main,
      border: (p: Palette) => mix(p.bg.main, p.blue.main, 0.2),
      selectedBackground: (p: Palette) => mediumHighlight(p.blue.main),
      highlightForeground: (p: Palette) => p.neutral.light,
    },
    editorCodeLens: {
      foreground: (p: Palette) => p.fg.dark,
    },
    editorLightBulb: {
      foreground: (p: Palette) => p.yellow.main,
    },
    editorLightBulbAutoFix: {
      foreground: (p: Palette) => p.yellow.main,
    },
    editorInlayHint: {
      foreground: (p: Palette) => p.neutral.main,
    },
    peekView: {
      border: (p: Palette) => mix(p.bg.main, p.blue.main, 0.2),
    },
    peekViewEditor: {
      background: (p: Palette) => p.bg.main,
      matchHighlightBackground: (p: Palette) => alpha(p.neutral.light, 0.4),
    },
    peekViewTitle: {
      background: (p: Palette) => p.bg.dark,
    },
    peekViewTitleLabel: {
      foreground: (p: Palette) => p.fg.light,
    },
    peekViewTitleDescription: {
      foreground: (p: Palette) => p.fg.main,
    },
    peekViewResult: {
      background: (p: Palette) => p.bg.main,
      selectionForeground: (p: Palette) => p.fg.light,
      selectionBackground: (p: Palette) => mediumHighlight(p.blue.main),
      lineForeground: (p: Palette) => p.fg.light,
      fileForeground: (p: Palette) => p.fg.main,
      matchHighlightBackground: (p: Palette) => alpha(p.neutral.light, 0.4),
    },
  },
}

/**
 * Panel colors - нижние панели (статус бар, тайтл бар)
 */
export const panelsConfig: UIColorConfig = {
  groups: {
    panel: {
      background: (p: Palette) => slightlyDarker(p.bg.main),
      border: (p: Palette) => mix(p.bg.main, p.blue.main, 0.2),
    },
    panelTitle: {
      activeForeground: (p: Palette) => p.fg.dark,
      inactiveForeground: (p: Palette) => darken(p.fg.dark, 0.2),
      activeBorder: (p: Palette) => p.blue.main,
    },
    panelInput: {
      border: (p: Palette) => lightBackground(p.bg.main),
    },
    panelStickyScroll: {
      background: (p: Palette) => p.bg.light,
    },
    statusBar: {
      foreground: (p: Palette) => p.fg.dark,
      background: (p: Palette) => p.bg.dark,
      border: (p: Palette) => lightBackground(p.bg.dark),
      focusBorder: (p: Palette) => p.blue.main,
      noFolderBackground: (p: Palette) => p.bg.dark,
      debuggingBackground: (p: Palette) => mix(p.purple.dark, p.bg.dark, 0.5),
      debuggingForeground: (p: Palette) => p.fg.dark,
    },
    statusBarItem: {
      activeBackground: (p: Palette) => alpha(p.blue.main, 0.25),
      hoverBackground: (p: Palette) => alpha(p.blue.main, 0.15),
      prominentBackground: (p: Palette) => alpha(p.blue.main, 0.25),
      prominentHoverBackground: (p: Palette) => mediumHighlight(p.blue.main),
      focusBorder: (p: Palette) => p.blue.main,
      remoteBackground: (p: Palette) => alpha(p.blue.main, 0.25),
      remoteHoverForeground: (p: Palette) => p.fg.bright,
    },
    titleBar: {
      activeForeground: (p: Palette) => p.fg.dark,
      inactiveForeground: (p: Palette) => darken(p.fg.dark, 0.4),
      activeBackground: (p: Palette) => p.bg.main,
      inactiveBackground: (p: Palette) => darken(p.bg.main, 0.03),
      border: (p: Palette) => lightBackground(p.bg.main),
    },
  },
}

/**
 * Terminal colors
 */
export const terminalConfig: UIColorConfig = {
  groups: {
    terminal: {
      background: (p: Palette) => p.bg.main,
      foreground: (p: Palette) => p.fg.light,
      selectionBackground: (p: Palette) => alpha(p.blue.dark, 0.3),
      ansiBlack: (p: Palette) => p.bg.dark,
      ansiRed: (p: Palette) => p.red.main,
      ansiGreen: (p: Palette) => p.green.main,
      ansiYellow: (p: Palette) => p.yellow.main,
      ansiBlue: (p: Palette) => p.blue.main,
      ansiMagenta: (p: Palette) => p.purple.light,
      ansiCyan: (p: Palette) => p.cyan.light,
      ansiWhite: (p: Palette) => p.fg.main,
      ansiBrightBlack: (p: Palette) => p.neutral.main,
      ansiBrightRed: (p: Palette) => p.red.dark,
      ansiBrightGreen: (p: Palette) => p.green.dark,
      ansiBrightYellow: (p: Palette) => p.yellow.light,
      ansiBrightBlue: (p: Palette) => p.blue.light,
      ansiBrightMagenta: (p: Palette) => p.purple.light,
      ansiBrightCyan: (p: Palette) => p.cyan.light,
      ansiBrightWhite: (p: Palette) => p.fg.light,
    },
    terminalCursor: {
      foreground: (p: Palette) => p.fg.light,
      background: (p: Palette) => p.bg.light,
    },
  },
}

/**
 * Git colors - git декорации
 */
export const gitConfig: UIColorConfig = {
  groups: {
    gitDecoration: {
      modifiedResourceForeground: (p: Palette) => p.blue.light,
      ignoredResourceForeground: (p: Palette) => p.fg.dark,
      deletedResourceForeground: (p: Palette) => p.red.dark,
      renamedResourceForeground: (p: Palette) => p.teal.dark,
      addedResourceForeground: (p: Palette) => p.teal.dark,
      untrackedResourceForeground: (p: Palette) => p.teal.dark,
      conflictingResourceForeground: (p: Palette) => alpha(p.yellow.main, 0.8),
      stageDeletedResourceForeground: (p: Palette) => p.red.dark,
      stageModifiedResourceForeground: (p: Palette) => p.blue.light,
    },
  },
}

/**
 * Diff colors - различия в файлах
 */
export const diffConfig: UIColorConfig = {
  groups: {
    diffEditor: {
      insertedTextBackground: (p: Palette) => alpha(p.green.dark, 0.125),
      removedTextBackground: (p: Palette) => alpha(p.red.dark, 0.13),
      insertedLineBackground: (p: Palette) => alpha(p.green.dark, 0.125),
      removedLineBackground: (p: Palette) => alpha(p.red.dark, 0.13),
      diagonalFill: (p: Palette) => lighten(p.bg.main, 0.08),
      unchangedCodeBackground: (p: Palette) =>
        alpha(lighten(p.bg.main, 0.06), 0.4),
    },
    diffEditorGutter: {
      insertedLineBackground: (p: Palette) => alpha(p.green.dark, 0.15),
      removedLineBackground: (p: Palette) => alpha(p.red.dark, 0.13),
    },
    diffEditorOverview: {
      insertedForeground: (p: Palette) => alpha(p.green.dark, 0.15),
      removedForeground: (p: Palette) => alpha(p.red.dark, 0.13),
    },
    multiDiffEditor: {
      headerBackground: (p: Palette) => p.bg.light,
      border: (p: Palette) => p.bg.light,
    },
  },
}

/**
 * Misc colors - разные UI компоненты (debug, notebook, charts, merge, menu, chat, etc.)
 */
export const miscConfig: UIColorConfig = {
  rules: {
    'textLink.foreground': (p: Palette) => p.blue.light,
    'textLink.activeForeground': (p: Palette) => lighten(p.blue.light, 0.2),
    'textPreformat.foreground': (p: Palette) => p.fg.main,
    'textSeparator.foreground': (p: Palette) => lighten(p.bg.main, 0.15),
  },
  groups: {
    walkThrough: {
      embeddedEditorBackground: (p: Palette) => p.bg.main,
    },
    textBlockQuote: {
      background: (p: Palette) => p.bg.main,
    },
    textCodeBlock: {
      background: (p: Palette) => p.bg.main,
    },
    debugExceptionWidget: {
      border: (p: Palette) => p.red.dark,
      background: (p: Palette) => p.bg.dark,
    },
    debugToolBar: {
      background: (p: Palette) => p.bg.dark,
    },
    debugConsole: {
      infoForeground: (p: Palette) => p.fg.main,
      errorForeground: (p: Palette) => p.red.dark,
      sourceForeground: (p: Palette) => p.fg.main,
      warningForeground: (p: Palette) => p.yellow.dark,
    },
    debugConsoleInputIcon: {
      foreground: (p: Palette) => p.teal.main,
    },
    debugView: {
      stateLabelForeground: (p: Palette) => p.fg.main,
      stateLabelBackground: (p: Palette) => p.bg.dark,
      valueChangedHighlight: (p: Palette) => alpha(p.blue.dark, 0.67),
    },
    debugTokenExpression: {
      name: (p: Palette) => p.cyan.light,
      value: (p: Palette) => p.fg.light,
      string: (p: Palette) => p.green.main,
      boolean: (p: Palette) => p.orange.main,
      number: (p: Palette) => p.orange.main,
      error: (p: Palette) => p.red.dark,
    },
    debugIcon: {
      breakpointForeground: (p: Palette) => p.red.dark,
      breakpointDisabledForeground: (p: Palette) => p.bg.light,
      breakpointUnverifiedForeground: (p: Palette) => p.red.dark,
    },
    notebook: {
      editorBackground: (p: Palette) => p.bg.light,
      cellEditorBackground: (p: Palette) => p.bg.main,
      cellBorderColor: (p: Palette) => p.bg.dark,
      focusedCellBorder: (p: Palette) => mix(p.bg.main, p.blue.main, 0.2),
      cellStatusBarItemHoverBackground: (p: Palette) =>
        alpha(p.blue.main, 0.15),
    },
    charts: {
      red: (p: Palette) => p.red.main,
      blue: (p: Palette) => p.blue.main,
      yellow: (p: Palette) => p.yellow.main,
      orange: (p: Palette) => p.orange.main,
      green: (p: Palette) => p.blue.main,
      purple: (p: Palette) => p.purple.dark,
      foreground: (p: Palette) => p.fg.light,
      lines: (p: Palette) => p.bg.main,
    },
    scmGraph: {
      historyItemHoverLabelForeground: (p: Palette) => p.bg.dark,
      foreground1: (p: Palette) => p.blue.main,
      foreground2: (p: Palette) => p.purple.main,
      foreground3: (p: Palette) => p.cyan.main,
      foreground4: (p: Palette) => p.pink.main,
      foreground5: (p: Palette) => p.magenta.main,
      historyItemHoverAdditionsForeground: (p: Palette) => p.green.dark,
      historyItemHoverDeletionsForeground: (p: Palette) => p.red.main,
      historyItemRefColor: (p: Palette) => p.blue.main,
      historyItemRemoteRefColor: (p: Palette) => p.purple.main,
      historyItemBaseRefColor: (p: Palette) => p.cyan.main,
      historyItemHoverDefaultLabelForeground: (p: Palette) => p.fg.light,
    },
    merge: {
      currentHeaderBackground: (p: Palette) => alpha(p.green.dark, 0.15),
      currentContentBackground: (p: Palette) => alpha(p.teal.dark, 0.27),
      incomingHeaderBackground: (p: Palette) => alpha(p.blue.dark, 0.67),
      incomingContentBackground: (p: Palette) => alpha(p.blue.dark, 0.27),
    },
    mergeEditor: {
      'change.background': (p: Palette) => alpha(p.green.dark, 0.15),
      'change.word.background': (p: Palette) => alpha(p.green.dark, 0.25),
      'conflict.unhandledUnfocused.border': (p: Palette) =>
        alpha(p.yellow.main, 0.53),
      'conflict.unhandledFocused.border': (p: Palette) =>
        alpha(p.yellow.main, 0.69),
      'conflict.handledUnfocused.border': (p: Palette) =>
        alpha(p.green.dark, 0.15),
      'conflict.handledFocused.border': (p: Palette) =>
        alpha(p.green.dark, 0.4),
      'conflict.handled.minimapOverViewRuler': (p: Palette) => p.teal.dark,
      'conflict.unhandled.minimapOverViewRuler': (p: Palette) => p.yellow.main,
    },
    gitlens: {
      trailingLineForegroundColor: (p: Palette) => p.neutral.dark,
      gutterUncommittedForegroundColor: (p: Palette) => p.blue.main,
      gutterForegroundColor: (p: Palette) => p.fg.main,
      gutterBackgroundColor: (p: Palette) => p.bg.main,
    },
    notificationCenterHeader: {
      background: (p: Palette) => p.bg.main,
    },
    notifications: {
      background: (p: Palette) => p.bg.main,
    },
    notificationLink: {
      foreground: (p: Palette) => p.blue.light,
    },
    notificationsErrorIcon: {
      foreground: (p: Palette) => p.red.dark,
    },
    notificationsWarningIcon: {
      foreground: (p: Palette) => p.yellow.main,
    },
    notificationsInfoIcon: {
      foreground: (p: Palette) => p.cyan.main,
    },
    menubar: {
      selectionForeground: (p: Palette) => p.fg.light,
      selectionBackground: (p: Palette) => subtleHighlight(p.blue.main),
      selectionBorder: (p: Palette) => lighten(p.bg.main, 0.04),
    },
    menu: {
      foreground: (p: Palette) => p.fg.main,
      background: (p: Palette) => p.bg.main,
      selectionForeground: (p: Palette) => lighten(p.fg.light, 0.4),
      selectionBackground: (p: Palette) => alpha(p.blue.main, 0.25),
      separatorBackground: (p: Palette) => lighten(p.bg.main, 0.06),
      border: (p: Palette) => mix(p.bg.main, p.blue.main, 0.2),
    },
    chat: {
      requestBorder: (p: Palette) => p.bg.light,
      avatarBackground: (p: Palette) => p.blue.dark,
      avatarForeground: (p: Palette) => p.fg.light,
      slashCommandBackground: (p: Palette) => p.bg.dark,
      slashCommandForeground: (p: Palette) => p.blue.main,
    },
    inlineChat: {
      foreground: (p: Palette) => p.fg.light,
    },
    inlineChatInput: {
      background: (p: Palette) => p.bg.light,
    },
    inlineChatDiff: {
      inserted: (p: Palette) => alpha(p.green.dark, 0.25),
      removed: (p: Palette) => alpha(p.red.dark, 0.26),
    },
  },
}
