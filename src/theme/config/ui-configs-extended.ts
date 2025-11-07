import type { CompatiblePalette } from '../palette/index.js'
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
    'selection.background': (p: CompatiblePalette) =>
      subtleHighlight(p.blue.main),
    'editorLink.activeForeground': (p: CompatiblePalette) => p.fg.light,
  },
  groups: {
    editor: {
      background: (p: CompatiblePalette) => p.bg.light,
      foreground: (p: CompatiblePalette) => p.fg.light,
      foldBackground: (p: CompatiblePalette) => alpha(p.bg.dark, 0.2),
      selectionBackground: (p: CompatiblePalette) =>
        subtleHighlight(p.blue.main),
      inactiveSelectionBackground: (p: CompatiblePalette) =>
        alpha(p.blue.main, 0.15),
      findMatchBackground: (p: CompatiblePalette) => alpha(p.blue.dark, 0.2),
      findMatchBorder: (p: CompatiblePalette) => alpha(p.yellow.main, 0.5),
      findMatchHighlightBackground: (p: CompatiblePalette) =>
        alpha(p.blue.dark, 0.2),
      findRangeHighlightBackground: (p: CompatiblePalette) =>
        subtleHighlight(p.blue.main),
      rangeHighlightBackground: (p: CompatiblePalette) =>
        subtleHighlight(p.teal.main),
      wordHighlightBackground: (p: CompatiblePalette) =>
        alpha(p.blue.main, 0.25),
      wordHighlightStrongBackground: (p: CompatiblePalette) =>
        mediumHighlight(p.blue.main),
      selectionHighlightBackground: (p: CompatiblePalette) =>
        alpha(p.blue.main, 0.25),
      lineHighlightBackground: (p: CompatiblePalette) => p.bg.light,
      stackFrameHighlightBackground: (p: CompatiblePalette) =>
        alpha(p.yellow.dark, 0.125),
      focusedStackFrameHighlightBackground: (p: CompatiblePalette) =>
        alpha(p.teal.main, 0.125),
    },
    editorCursor: {
      foreground: (p: CompatiblePalette) => p.fg.light,
    },
    editorStickyScrollHover: {
      background: (p: CompatiblePalette) => alpha(p.blue.main, 0.1),
    },
    editorIndentGuide: {
      background1: (p: CompatiblePalette) => lighten(p.bg.main, 0.05),
      activeBackground1: (p: CompatiblePalette) =>
        mix(p.neutral.dark, p.bg.main, 0.7),
    },
    editorLineNumber: {
      foreground: (p: CompatiblePalette) =>
        mix(p.neutral.dark, p.bg.main, 0.65),
      activeForeground: (p: CompatiblePalette) =>
        mix(p.neutral.dark, p.bg.main, 0.05),
    },
    editorWhitespace: {
      foreground: (p: CompatiblePalette) => lighten(p.ui.badge, 0.08),
    },
    editorMarkerNavigation: {
      background: (p: CompatiblePalette) => p.bg.main,
    },
    editorHoverWidget: {
      background: (p: CompatiblePalette) => mix(p.bg.light, p.blue.main, 0.1),
      border: (p: CompatiblePalette) => mix(p.bg.main, p.blue.main, 0.25),
    },
    editorBracketMatch: {
      background: (p: CompatiblePalette) => p.bg.main,
      border: (p: CompatiblePalette) => lightBackground(p.bg.main),
    },
    editorBracketHighlight: {
      foreground1: (p: CompatiblePalette) => p.neutral.light,
      foreground2: (p: CompatiblePalette) => p.cyan.light,
      foreground3: (p: CompatiblePalette) => p.purple.light,
      foreground4: (p: CompatiblePalette) => p.yellow.light,
      foreground5: (p: CompatiblePalette) => p.teal.light,
      foreground6: (p: CompatiblePalette) => p.green.main,
      'unexpectedBracket.foreground': (p: CompatiblePalette) => p.red.dark,
    },
    editorBracketPairGuide: {
      activeBackground1: (p: CompatiblePalette) => p.neutral.light,
      activeBackground2: (p: CompatiblePalette) => p.cyan.light,
      activeBackground3: (p: CompatiblePalette) => p.purple.light,
      activeBackground4: (p: CompatiblePalette) => p.yellow.light,
      activeBackground5: (p: CompatiblePalette) => p.teal.light,
      activeBackground6: (p: CompatiblePalette) => p.green.main,
    },
    editorOverviewRuler: {
      border: (p: CompatiblePalette) => lightBackground(p.bg.light),
      errorForeground: (p: CompatiblePalette) => p.red.main,
      warningForeground: (p: CompatiblePalette) => p.yellow.main,
      infoForeground: (p: CompatiblePalette) =>
        mix(p.teal.main, p.green.main, 0.3),
      bracketMatchForeground: (p: CompatiblePalette) => p.bg.dark,
      findMatchForeground: (p: CompatiblePalette) =>
        alpha(p.neutral.light, 0.4),
      rangeHighlightForeground: (p: CompatiblePalette) =>
        alpha(p.teal.main, 0.3),
      selectionHighlightForeground: (p: CompatiblePalette) =>
        alpha(p.blue.main, 0.25),
      wordHighlightForeground: (p: CompatiblePalette) =>
        alpha(p.blue.main, 0.35),
      wordHighlightStrongForeground: (p: CompatiblePalette) =>
        alpha(p.blue.main, 0.45),
      modifiedForeground: (p: CompatiblePalette) =>
        mix(p.neutral.main, p.bg.main, 0.65),
      addedForeground: (p: CompatiblePalette) =>
        mix(p.teal.main, p.bg.main, 0.8),
      deletedForeground: (p: CompatiblePalette) =>
        mix(p.red.main, p.bg.main, 0.7),
    },
    editorRuler: {
      foreground: (p: CompatiblePalette) => p.bg.dark,
    },
    editorError: {
      foreground: (p: CompatiblePalette) => p.red.main,
    },
    editorWarning: {
      foreground: (p: CompatiblePalette) => p.yellow.main,
    },
    editorInfo: {
      foreground: (p: CompatiblePalette) => p.cyan.main,
    },
    editorHint: {
      foreground: (p: CompatiblePalette) => p.cyan.main,
    },
    editorGutter: {
      modifiedBackground: (p: CompatiblePalette) =>
        mix(p.neutral.main, p.bg.main, 0.65),
      addedBackground: (p: CompatiblePalette) =>
        mix(p.teal.main, p.bg.main, 0.8),
      deletedBackground: (p: CompatiblePalette) =>
        mix(p.red.main, p.bg.main, 0.65),
    },
    editorGhostText: {
      foreground: (p: CompatiblePalette) => p.neutral.dark,
    },
    minimapGutter: {
      modifiedBackground: (p: CompatiblePalette) =>
        mix(p.neutral.main, p.bg.main, 0.6),
      addedBackground: (p: CompatiblePalette) =>
        mix(p.teal.main, p.bg.main, 0.75),
      deletedBackground: (p: CompatiblePalette) =>
        mix(p.red.main, p.bg.main, 0.6),
    },
    editorGroup: {
      border: (p: CompatiblePalette) => lightBackground(p.bg.light),
      dropBackground: (p: CompatiblePalette) => lightBackground(p.bg.light),
    },
    editorGroupHeader: {
      tabsBorder: (p: CompatiblePalette) => p.bg.dark,
      tabsBackground: (p: CompatiblePalette) => p.bg.main,
      noTabsBackground: (p: CompatiblePalette) => p.bg.main,
      border: (p: CompatiblePalette) => lightBackground(p.bg.main),
    },
    editorPane: {
      background: (p: CompatiblePalette) => p.bg.light,
    },
    editorWidget: {
      foreground: (p: CompatiblePalette) => p.fg.light,
      background: (p: CompatiblePalette) =>
        mix(p.bg.main, p.neutral.dark, 0.15),
      border: (p: CompatiblePalette) => mix(p.bg.main, p.blue.main, 0.2),
      resizeBorder: (p: CompatiblePalette) => mix(p.bg.main, p.blue.main, 0.2),
    },
    editorSuggestWidget: {
      background: (p: CompatiblePalette) => p.bg.main,
      border: (p: CompatiblePalette) => mix(p.bg.main, p.blue.main, 0.2),
      selectedBackground: (p: CompatiblePalette) =>
        mediumHighlight(p.blue.main),
      highlightForeground: (p: CompatiblePalette) => p.neutral.light,
    },
    editorCodeLens: {
      foreground: (p: CompatiblePalette) => p.fg.dark,
    },
    editorLightBulb: {
      foreground: (p: CompatiblePalette) => p.yellow.main,
    },
    editorLightBulbAutoFix: {
      foreground: (p: CompatiblePalette) => p.yellow.main,
    },
    editorInlayHint: {
      foreground: (p: CompatiblePalette) => p.neutral.main,
    },
    peekView: {
      border: (p: CompatiblePalette) => mix(p.bg.main, p.blue.main, 0.2),
    },
    peekViewEditor: {
      background: (p: CompatiblePalette) => p.bg.main,
      matchHighlightBackground: (p: CompatiblePalette) =>
        alpha(p.neutral.light, 0.4),
    },
    peekViewTitle: {
      background: (p: CompatiblePalette) => p.bg.dark,
    },
    peekViewTitleLabel: {
      foreground: (p: CompatiblePalette) => p.fg.light,
    },
    peekViewTitleDescription: {
      foreground: (p: CompatiblePalette) => p.fg.main,
    },
    peekViewResult: {
      background: (p: CompatiblePalette) => p.bg.main,
      selectionForeground: (p: CompatiblePalette) => p.fg.light,
      selectionBackground: (p: CompatiblePalette) =>
        mediumHighlight(p.blue.main),
      lineForeground: (p: CompatiblePalette) => p.fg.light,
      fileForeground: (p: CompatiblePalette) => p.fg.main,
      matchHighlightBackground: (p: CompatiblePalette) =>
        alpha(p.neutral.light, 0.4),
    },
  },
}

/**
 * Panel colors - нижние панели (статус бар, тайтл бар)
 */
export const panelsConfig: UIColorConfig = {
  groups: {
    panel: {
      background: (p: CompatiblePalette) => slightlyDarker(p.bg.main),
      border: (p: CompatiblePalette) => mix(p.bg.main, p.blue.main, 0.2),
    },
    panelTitle: {
      activeForeground: (p: CompatiblePalette) => p.fg.dark,
      inactiveForeground: (p: CompatiblePalette) => darken(p.fg.dark, 0.2),
      activeBorder: (p: CompatiblePalette) => p.blue.main,
    },
    panelInput: {
      border: (p: CompatiblePalette) => lightBackground(p.bg.main),
    },
    panelStickyScroll: {
      background: (p: CompatiblePalette) => p.bg.light,
    },
    statusBar: {
      foreground: (p: CompatiblePalette) => p.fg.dark,
      background: (p: CompatiblePalette) => p.bg.dark,
      border: (p: CompatiblePalette) => lightBackground(p.bg.dark),
      focusBorder: (p: CompatiblePalette) => p.blue.main,
      noFolderBackground: (p: CompatiblePalette) => p.bg.dark,
      debuggingBackground: (p: CompatiblePalette) =>
        mix(p.purple.dark, p.bg.dark, 0.5),
      debuggingForeground: (p: CompatiblePalette) => p.fg.dark,
    },
    statusBarItem: {
      activeBackground: (p: CompatiblePalette) => alpha(p.blue.main, 0.25),
      hoverBackground: (p: CompatiblePalette) => alpha(p.blue.main, 0.15),
      prominentBackground: (p: CompatiblePalette) => alpha(p.blue.main, 0.25),
      prominentHoverBackground: (p: CompatiblePalette) =>
        mediumHighlight(p.blue.main),
      focusBorder: (p: CompatiblePalette) => p.blue.main,
      remoteBackground: (p: CompatiblePalette) => alpha(p.blue.main, 0.25),
      remoteHoverForeground: (p: CompatiblePalette) => p.fg.bright,
    },
    titleBar: {
      activeForeground: (p: CompatiblePalette) => p.fg.dark,
      inactiveForeground: (p: CompatiblePalette) => darken(p.fg.dark, 0.4),
      activeBackground: (p: CompatiblePalette) => p.bg.main,
      inactiveBackground: (p: CompatiblePalette) => darken(p.bg.main, 0.03),
      border: (p: CompatiblePalette) => lightBackground(p.bg.main),
    },
  },
}

/**
 * Terminal colors
 */
export const terminalConfig: UIColorConfig = {
  groups: {
    terminal: {
      background: (p: CompatiblePalette) => p.bg.main,
      foreground: (p: CompatiblePalette) => p.fg.light,
      selectionBackground: (p: CompatiblePalette) => alpha(p.blue.dark, 0.3),
      ansiBlack: (p: CompatiblePalette) => p.bg.dark,
      ansiRed: (p: CompatiblePalette) => p.red.main,
      ansiGreen: (p: CompatiblePalette) => p.green.main,
      ansiYellow: (p: CompatiblePalette) => p.yellow.main,
      ansiBlue: (p: CompatiblePalette) => p.blue.main,
      ansiMagenta: (p: CompatiblePalette) => p.purple.light,
      ansiCyan: (p: CompatiblePalette) => p.cyan.light,
      ansiWhite: (p: CompatiblePalette) => p.fg.main,
      ansiBrightBlack: (p: CompatiblePalette) => p.neutral.main,
      ansiBrightRed: (p: CompatiblePalette) => p.red.dark,
      ansiBrightGreen: (p: CompatiblePalette) => p.green.dark,
      ansiBrightYellow: (p: CompatiblePalette) => p.yellow.light,
      ansiBrightBlue: (p: CompatiblePalette) => p.blue.light,
      ansiBrightMagenta: (p: CompatiblePalette) => p.purple.light,
      ansiBrightCyan: (p: CompatiblePalette) => p.cyan.light,
      ansiBrightWhite: (p: CompatiblePalette) => p.fg.light,
    },
    terminalCursor: {
      foreground: (p: CompatiblePalette) => p.fg.light,
      background: (p: CompatiblePalette) => p.bg.light,
    },
  },
}

/**
 * Git colors - git декорации
 */
export const gitConfig: UIColorConfig = {
  groups: {
    gitDecoration: {
      modifiedResourceForeground: (p: CompatiblePalette) => p.blue.light,
      ignoredResourceForeground: (p: CompatiblePalette) => p.fg.dark,
      deletedResourceForeground: (p: CompatiblePalette) => p.red.dark,
      renamedResourceForeground: (p: CompatiblePalette) => p.teal.dark,
      addedResourceForeground: (p: CompatiblePalette) => p.teal.dark,
      untrackedResourceForeground: (p: CompatiblePalette) => p.teal.dark,
      conflictingResourceForeground: (p: CompatiblePalette) =>
        alpha(p.yellow.main, 0.8),
      stageDeletedResourceForeground: (p: CompatiblePalette) => p.red.dark,
      stageModifiedResourceForeground: (p: CompatiblePalette) => p.blue.light,
    },
  },
}

/**
 * Diff colors - различия в файлах
 */
export const diffConfig: UIColorConfig = {
  groups: {
    diffEditor: {
      insertedTextBackground: (p: CompatiblePalette) =>
        alpha(p.green.dark, 0.125),
      removedTextBackground: (p: CompatiblePalette) => alpha(p.red.dark, 0.13),
      insertedLineBackground: (p: CompatiblePalette) =>
        alpha(p.green.dark, 0.125),
      removedLineBackground: (p: CompatiblePalette) => alpha(p.red.dark, 0.13),
      diagonalFill: (p: CompatiblePalette) => lighten(p.bg.main, 0.08),
      unchangedCodeBackground: (p: CompatiblePalette) =>
        alpha(lighten(p.bg.main, 0.06), 0.4),
    },
    diffEditorGutter: {
      insertedLineBackground: (p: CompatiblePalette) =>
        alpha(p.green.dark, 0.15),
      removedLineBackground: (p: CompatiblePalette) => alpha(p.red.dark, 0.13),
    },
    diffEditorOverview: {
      insertedForeground: (p: CompatiblePalette) => alpha(p.green.dark, 0.15),
      removedForeground: (p: CompatiblePalette) => alpha(p.red.dark, 0.13),
    },
    multiDiffEditor: {
      headerBackground: (p: CompatiblePalette) => p.bg.light,
      border: (p: CompatiblePalette) => p.bg.light,
    },
  },
}

/**
 * Misc colors - разные UI компоненты (debug, notebook, charts, merge, menu, chat, etc.)
 */
export const miscConfig: UIColorConfig = {
  rules: {
    'textLink.foreground': (p: CompatiblePalette) => p.blue.light,
    'textLink.activeForeground': (p: CompatiblePalette) =>
      lighten(p.blue.light, 0.2),
    'textPreformat.foreground': (p: CompatiblePalette) => p.fg.main,
    'textSeparator.foreground': (p: CompatiblePalette) =>
      lighten(p.bg.main, 0.15),
  },
  groups: {
    walkThrough: {
      embeddedEditorBackground: (p: CompatiblePalette) => p.bg.main,
    },
    textBlockQuote: {
      background: (p: CompatiblePalette) => p.bg.main,
    },
    textCodeBlock: {
      background: (p: CompatiblePalette) => p.bg.main,
    },
    debugExceptionWidget: {
      border: (p: CompatiblePalette) => p.red.dark,
      background: (p: CompatiblePalette) => p.bg.dark,
    },
    debugToolBar: {
      background: (p: CompatiblePalette) => p.bg.dark,
    },
    debugConsole: {
      infoForeground: (p: CompatiblePalette) => p.fg.main,
      errorForeground: (p: CompatiblePalette) => p.red.dark,
      sourceForeground: (p: CompatiblePalette) => p.fg.main,
      warningForeground: (p: CompatiblePalette) => p.yellow.dark,
    },
    debugConsoleInputIcon: {
      foreground: (p: CompatiblePalette) => p.teal.main,
    },
    debugView: {
      stateLabelForeground: (p: CompatiblePalette) => p.fg.main,
      stateLabelBackground: (p: CompatiblePalette) => p.bg.dark,
      valueChangedHighlight: (p: CompatiblePalette) => alpha(p.blue.dark, 0.67),
    },
    debugTokenExpression: {
      name: (p: CompatiblePalette) => p.cyan.light,
      value: (p: CompatiblePalette) => p.fg.light,
      string: (p: CompatiblePalette) => p.green.main,
      boolean: (p: CompatiblePalette) => p.orange.main,
      number: (p: CompatiblePalette) => p.orange.main,
      error: (p: CompatiblePalette) => p.red.dark,
    },
    debugIcon: {
      breakpointForeground: (p: CompatiblePalette) => p.red.dark,
      breakpointDisabledForeground: (p: CompatiblePalette) => p.bg.light,
      breakpointUnverifiedForeground: (p: CompatiblePalette) => p.red.dark,
    },
    notebook: {
      editorBackground: (p: CompatiblePalette) => p.bg.light,
      cellEditorBackground: (p: CompatiblePalette) => p.bg.main,
      cellBorderColor: (p: CompatiblePalette) => p.bg.dark,
      focusedCellBorder: (p: CompatiblePalette) =>
        mix(p.bg.main, p.blue.main, 0.2),
      cellStatusBarItemHoverBackground: (p: CompatiblePalette) =>
        alpha(p.blue.main, 0.15),
    },
    charts: {
      red: (p: CompatiblePalette) => p.red.main,
      blue: (p: CompatiblePalette) => p.blue.main,
      yellow: (p: CompatiblePalette) => p.yellow.main,
      orange: (p: CompatiblePalette) => p.orange.main,
      green: (p: CompatiblePalette) => p.blue.main,
      purple: (p: CompatiblePalette) => p.purple.dark,
      foreground: (p: CompatiblePalette) => p.fg.light,
      lines: (p: CompatiblePalette) => p.bg.main,
    },
    scmGraph: {
      historyItemHoverLabelForeground: (p: CompatiblePalette) => p.bg.dark,
      foreground1: (p: CompatiblePalette) => p.blue.main,
      foreground2: (p: CompatiblePalette) => p.purple.main,
      foreground3: (p: CompatiblePalette) => p.cyan.main,
      foreground4: (p: CompatiblePalette) => p.pink.main,
      foreground5: (p: CompatiblePalette) => p.magenta.main,
      historyItemHoverAdditionsForeground: (p: CompatiblePalette) =>
        p.green.dark,
      historyItemHoverDeletionsForeground: (p: CompatiblePalette) => p.red.main,
      historyItemRefColor: (p: CompatiblePalette) => p.blue.main,
      historyItemRemoteRefColor: (p: CompatiblePalette) => p.purple.main,
      historyItemBaseRefColor: (p: CompatiblePalette) => p.cyan.main,
      historyItemHoverDefaultLabelForeground: (p: CompatiblePalette) =>
        p.fg.light,
    },
    merge: {
      currentHeaderBackground: (p: CompatiblePalette) =>
        alpha(p.green.dark, 0.15),
      currentContentBackground: (p: CompatiblePalette) =>
        alpha(p.teal.dark, 0.27),
      incomingHeaderBackground: (p: CompatiblePalette) =>
        alpha(p.blue.dark, 0.67),
      incomingContentBackground: (p: CompatiblePalette) =>
        alpha(p.blue.dark, 0.27),
    },
    mergeEditor: {
      'change.background': (p: CompatiblePalette) => alpha(p.green.dark, 0.15),
      'change.word.background': (p: CompatiblePalette) =>
        alpha(p.green.dark, 0.25),
      'conflict.unhandledUnfocused.border': (p: CompatiblePalette) =>
        alpha(p.yellow.main, 0.53),
      'conflict.unhandledFocused.border': (p: CompatiblePalette) =>
        alpha(p.yellow.main, 0.69),
      'conflict.handledUnfocused.border': (p: CompatiblePalette) =>
        alpha(p.green.dark, 0.15),
      'conflict.handledFocused.border': (p: CompatiblePalette) =>
        alpha(p.green.dark, 0.4),
      'conflict.handled.minimapOverViewRuler': (p: CompatiblePalette) =>
        p.teal.dark,
      'conflict.unhandled.minimapOverViewRuler': (p: CompatiblePalette) =>
        p.yellow.main,
    },
    gitlens: {
      trailingLineForegroundColor: (p: CompatiblePalette) => p.neutral.dark,
      gutterUncommittedForegroundColor: (p: CompatiblePalette) => p.blue.main,
      gutterForegroundColor: (p: CompatiblePalette) => p.fg.main,
      gutterBackgroundColor: (p: CompatiblePalette) => p.bg.main,
    },
    notificationCenterHeader: {
      background: (p: CompatiblePalette) => p.bg.main,
    },
    notifications: {
      background: (p: CompatiblePalette) => p.bg.main,
    },
    notificationLink: {
      foreground: (p: CompatiblePalette) => p.blue.light,
    },
    notificationsErrorIcon: {
      foreground: (p: CompatiblePalette) => p.red.dark,
    },
    notificationsWarningIcon: {
      foreground: (p: CompatiblePalette) => p.yellow.main,
    },
    notificationsInfoIcon: {
      foreground: (p: CompatiblePalette) => p.cyan.main,
    },
    menubar: {
      selectionForeground: (p: CompatiblePalette) => p.fg.light,
      selectionBackground: (p: CompatiblePalette) =>
        subtleHighlight(p.blue.main),
      selectionBorder: (p: CompatiblePalette) => lighten(p.bg.main, 0.04),
    },
    menu: {
      foreground: (p: CompatiblePalette) => p.fg.main,
      background: (p: CompatiblePalette) => p.bg.main,
      selectionForeground: (p: CompatiblePalette) => lighten(p.fg.light, 0.4),
      selectionBackground: (p: CompatiblePalette) => alpha(p.blue.main, 0.25),
      separatorBackground: (p: CompatiblePalette) => lighten(p.bg.main, 0.06),
      border: (p: CompatiblePalette) => mix(p.bg.main, p.blue.main, 0.2),
    },
    chat: {
      requestBorder: (p: CompatiblePalette) => p.bg.light,
      avatarBackground: (p: CompatiblePalette) => p.blue.dark,
      avatarForeground: (p: CompatiblePalette) => p.fg.light,
      slashCommandBackground: (p: CompatiblePalette) => p.bg.dark,
      slashCommandForeground: (p: CompatiblePalette) => p.blue.main,
    },
    inlineChat: {
      foreground: (p: CompatiblePalette) => p.fg.light,
    },
    inlineChatInput: {
      background: (p: CompatiblePalette) => p.bg.light,
    },
    inlineChatDiff: {
      inserted: (p: CompatiblePalette) => alpha(p.green.dark, 0.25),
      removed: (p: CompatiblePalette) => alpha(p.red.dark, 0.26),
    },
  },
}
