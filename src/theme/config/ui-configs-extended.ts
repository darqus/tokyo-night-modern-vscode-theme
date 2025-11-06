import type { UnifiedPalette } from '../palette/index.js'
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
    'selection.background': (p: UnifiedPalette) => subtleHighlight(p.blue.main),
    'editorLink.activeForeground': (p: UnifiedPalette) => p.foreground.light,
  },
  groups: {
    editor: {
      background: (p: UnifiedPalette) => p.background.light,
      foreground: (p: UnifiedPalette) => p.foreground.light,
      foldBackground: (p: UnifiedPalette) => alpha(p.background.dark, 0.2),
      selectionBackground: (p: UnifiedPalette) => subtleHighlight(p.blue.main),
      inactiveSelectionBackground: (p: UnifiedPalette) =>
        alpha(p.blue.main, 0.15),
      findMatchBackground: (p: UnifiedPalette) => alpha(p.blue.dark, 0.2),
      findMatchBorder: (p: UnifiedPalette) => alpha(p.yellow.main, 0.5),
      findMatchHighlightBackground: (p: UnifiedPalette) =>
        alpha(p.blue.dark, 0.2),
      findRangeHighlightBackground: (p: UnifiedPalette) =>
        subtleHighlight(p.blue.main),
      rangeHighlightBackground: (p: UnifiedPalette) =>
        subtleHighlight(p.teal.main),
      wordHighlightBackground: (p: UnifiedPalette) => alpha(p.blue.main, 0.25),
      wordHighlightStrongBackground: (p: UnifiedPalette) =>
        mediumHighlight(p.blue.main),
      selectionHighlightBackground: (p: UnifiedPalette) =>
        alpha(p.blue.main, 0.25),
      lineHighlightBackground: (p: UnifiedPalette) => p.background.light,
      stackFrameHighlightBackground: (p: UnifiedPalette) =>
        alpha(p.yellow.dark, 0.125),
      focusedStackFrameHighlightBackground: (p: UnifiedPalette) =>
        alpha(p.teal.main, 0.125),
    },
    editorCursor: {
      foreground: (p: UnifiedPalette) => p.foreground.light,
    },
    editorStickyScrollHover: {
      background: (p: UnifiedPalette) => alpha(p.blue.main, 0.1),
    },
    editorIndentGuide: {
      background1: (p: UnifiedPalette) => lighten(p.background.main, 0.05),
      activeBackground1: (p: UnifiedPalette) =>
        mix(p.neutral.dark, p.background.main, 0.7),
    },
    editorLineNumber: {
      foreground: (p: UnifiedPalette) => p.neutral.dark,
      activeForeground: (p: UnifiedPalette) => p.neutral.main,
    },
    editorWhitespace: {
      foreground: (p: UnifiedPalette) => lighten(p.ui.badge, 0.08),
    },
    editorMarkerNavigation: {
      background: (p: UnifiedPalette) => p.background.main,
    },
    editorHoverWidget: {
      background: (p: UnifiedPalette) =>
        mix(p.background.light, p.blue.main, 0.1),
      border: (p: UnifiedPalette) => mix(p.background.main, p.blue.main, 0.25),
    },
    editorBracketMatch: {
      background: (p: UnifiedPalette) => p.background.main,
      border: (p: UnifiedPalette) => lightBackground(p.background.main),
    },
    editorBracketHighlight: {
      foreground1: (p: UnifiedPalette) => p.neutral.light,
      foreground2: (p: UnifiedPalette) => p.cyan.light,
      foreground3: (p: UnifiedPalette) => p.purple.light,
      foreground4: (p: UnifiedPalette) => p.yellow.light,
      foreground5: (p: UnifiedPalette) => p.teal.light,
      foreground6: (p: UnifiedPalette) => p.green.main,
      'unexpectedBracket.foreground': (p: UnifiedPalette) => p.red.dark,
    },
    editorBracketPairGuide: {
      activeBackground1: (p: UnifiedPalette) => p.neutral.light,
      activeBackground2: (p: UnifiedPalette) => p.cyan.light,
      activeBackground3: (p: UnifiedPalette) => p.purple.light,
      activeBackground4: (p: UnifiedPalette) => p.yellow.light,
      activeBackground5: (p: UnifiedPalette) => p.teal.light,
      activeBackground6: (p: UnifiedPalette) => p.green.main,
    },
    editorOverviewRuler: {
      border: (p: UnifiedPalette) => lightBackground(p.background.light),
      errorForeground: (p: UnifiedPalette) => p.red.main,
      warningForeground: (p: UnifiedPalette) => p.yellow.main,
      infoForeground: (p: UnifiedPalette) =>
        mix(p.teal.main, p.green.main, 0.3),
      bracketMatchForeground: (p: UnifiedPalette) => p.background.dark,
      findMatchForeground: (p: UnifiedPalette) => alpha(p.neutral.light, 0.4),
      rangeHighlightForeground: (p: UnifiedPalette) => alpha(p.teal.main, 0.3),
      selectionHighlightForeground: (p: UnifiedPalette) =>
        alpha(p.blue.main, 0.25),
      wordHighlightForeground: (p: UnifiedPalette) => alpha(p.blue.main, 0.35),
      wordHighlightStrongForeground: (p: UnifiedPalette) =>
        alpha(p.blue.main, 0.45),
      modifiedForeground: (p: UnifiedPalette) =>
        mix(p.neutral.main, p.background.main, 0.65),
      addedForeground: (p: UnifiedPalette) =>
        mix(p.teal.main, p.background.main, 0.8),
      deletedForeground: (p: UnifiedPalette) =>
        mix(p.red.main, p.background.main, 0.7),
    },
    editorRuler: {
      foreground: (p: UnifiedPalette) => p.background.dark,
    },
    editorError: {
      foreground: (p: UnifiedPalette) => p.red.main,
    },
    editorWarning: {
      foreground: (p: UnifiedPalette) => p.yellow.main,
    },
    editorInfo: {
      foreground: (p: UnifiedPalette) => p.cyan.main,
    },
    editorHint: {
      foreground: (p: UnifiedPalette) => p.cyan.main,
    },
    editorGutter: {
      modifiedBackground: (p: UnifiedPalette) =>
        mix(p.neutral.main, p.background.main, 0.65),
      addedBackground: (p: UnifiedPalette) =>
        mix(p.teal.main, p.background.main, 0.8),
      deletedBackground: (p: UnifiedPalette) =>
        mix(p.red.main, p.background.main, 0.65),
    },
    editorGhostText: {
      foreground: (p: UnifiedPalette) => p.neutral.dark,
    },
    minimapGutter: {
      modifiedBackground: (p: UnifiedPalette) =>
        mix(p.neutral.main, p.background.main, 0.6),
      addedBackground: (p: UnifiedPalette) =>
        mix(p.teal.main, p.background.main, 0.75),
      deletedBackground: (p: UnifiedPalette) =>
        mix(p.red.main, p.background.main, 0.6),
    },
    editorGroup: {
      border: (p: UnifiedPalette) => lightBackground(p.background.light),
      dropBackground: (p: UnifiedPalette) =>
        lightBackground(p.background.light),
    },
    editorGroupHeader: {
      tabsBorder: (p: UnifiedPalette) => p.background.dark,
      tabsBackground: (p: UnifiedPalette) => p.background.main,
      noTabsBackground: (p: UnifiedPalette) => p.background.main,
      border: (p: UnifiedPalette) => lightBackground(p.background.main),
    },
    editorPane: {
      background: (p: UnifiedPalette) => p.background.light,
    },
    editorWidget: {
      foreground: (p: UnifiedPalette) => p.foreground.light,
      background: (p: UnifiedPalette) =>
        mix(p.background.main, p.neutral.dark, 0.15),
      border: (p: UnifiedPalette) => mix(p.background.main, p.blue.main, 0.2),
      resizeBorder: (p: UnifiedPalette) =>
        mix(p.background.main, p.blue.main, 0.2),
    },
    editorSuggestWidget: {
      background: (p: UnifiedPalette) => p.background.main,
      border: (p: UnifiedPalette) => mix(p.background.main, p.blue.main, 0.2),
      selectedBackground: (p: UnifiedPalette) => mediumHighlight(p.blue.main),
      highlightForeground: (p: UnifiedPalette) => p.neutral.light,
    },
    editorCodeLens: {
      foreground: (p: UnifiedPalette) => p.foreground.dark,
    },
    editorLightBulb: {
      foreground: (p: UnifiedPalette) => p.yellow.main,
    },
    editorLightBulbAutoFix: {
      foreground: (p: UnifiedPalette) => p.yellow.main,
    },
    editorInlayHint: {
      foreground: (p: UnifiedPalette) => p.neutral.main,
    },
    peekView: {
      border: (p: UnifiedPalette) => mix(p.background.main, p.blue.main, 0.2),
    },
    peekViewEditor: {
      background: (p: UnifiedPalette) => p.background.main,
      matchHighlightBackground: (p: UnifiedPalette) =>
        alpha(p.neutral.light, 0.4),
    },
    peekViewTitle: {
      background: (p: UnifiedPalette) => p.background.dark,
    },
    peekViewTitleLabel: {
      foreground: (p: UnifiedPalette) => p.foreground.light,
    },
    peekViewTitleDescription: {
      foreground: (p: UnifiedPalette) => p.foreground.main,
    },
    peekViewResult: {
      background: (p: UnifiedPalette) => p.background.main,
      selectionForeground: (p: UnifiedPalette) => p.foreground.light,
      selectionBackground: (p: UnifiedPalette) => mediumHighlight(p.blue.main),
      lineForeground: (p: UnifiedPalette) => p.foreground.light,
      fileForeground: (p: UnifiedPalette) => p.foreground.main,
      matchHighlightBackground: (p: UnifiedPalette) =>
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
      background: (p: UnifiedPalette) => slightlyDarker(p.background.main),
      border: (p: UnifiedPalette) => mix(p.background.main, p.blue.main, 0.2),
    },
    panelTitle: {
      activeForeground: (p: UnifiedPalette) => p.foreground.dark,
      inactiveForeground: (p: UnifiedPalette) => darken(p.foreground.dark, 0.2),
      activeBorder: (p: UnifiedPalette) => p.blue.main,
    },
    panelInput: {
      border: (p: UnifiedPalette) => lightBackground(p.background.main),
    },
    panelStickyScroll: {
      background: (p: UnifiedPalette) => p.background.light,
    },
    statusBar: {
      foreground: (p: UnifiedPalette) => p.foreground.dark,
      background: (p: UnifiedPalette) => p.background.dark,
      border: (p: UnifiedPalette) => lightBackground(p.background.dark),
      focusBorder: (p: UnifiedPalette) => p.blue.main,
      noFolderBackground: (p: UnifiedPalette) => p.background.dark,
      debuggingBackground: (p: UnifiedPalette) =>
        mix(p.purple.dark, p.background.dark, 0.5),
      debuggingForeground: (p: UnifiedPalette) => p.foreground.dark,
    },
    statusBarItem: {
      activeBackground: (p: UnifiedPalette) => alpha(p.blue.main, 0.25),
      hoverBackground: (p: UnifiedPalette) => alpha(p.blue.main, 0.15),
      prominentBackground: (p: UnifiedPalette) => alpha(p.blue.main, 0.25),
      prominentHoverBackground: (p: UnifiedPalette) =>
        mediumHighlight(p.blue.main),
      focusBorder: (p: UnifiedPalette) => p.blue.main,
      remoteBackground: (p: UnifiedPalette) => alpha(p.blue.main, 0.25),
      remoteHoverForeground: (p: UnifiedPalette) => p.foreground.bright,
    },
    titleBar: {
      activeForeground: (p: UnifiedPalette) => p.foreground.dark,
      inactiveForeground: (p: UnifiedPalette) => darken(p.foreground.dark, 0.4),
      activeBackground: (p: UnifiedPalette) => p.background.main,
      inactiveBackground: (p: UnifiedPalette) =>
        darken(p.background.main, 0.03),
      border: (p: UnifiedPalette) => lightBackground(p.background.main),
    },
  },
}

/**
 * Terminal colors
 */
export const terminalConfig: UIColorConfig = {
  groups: {
    terminal: {
      background: (p: UnifiedPalette) => p.background.main,
      foreground: (p: UnifiedPalette) => p.foreground.light,
      selectionBackground: (p: UnifiedPalette) => alpha(p.blue.dark, 0.3),
      ansiBlack: (p: UnifiedPalette) => p.background.dark,
      ansiRed: (p: UnifiedPalette) => p.red.main,
      ansiGreen: (p: UnifiedPalette) => p.green.main,
      ansiYellow: (p: UnifiedPalette) => p.yellow.main,
      ansiBlue: (p: UnifiedPalette) => p.blue.main,
      ansiMagenta: (p: UnifiedPalette) => p.purple.light,
      ansiCyan: (p: UnifiedPalette) => p.cyan.light,
      ansiWhite: (p: UnifiedPalette) => p.foreground.main,
      ansiBrightBlack: (p: UnifiedPalette) => p.neutral.main,
      ansiBrightRed: (p: UnifiedPalette) => p.red.dark,
      ansiBrightGreen: (p: UnifiedPalette) => p.green.dark,
      ansiBrightYellow: (p: UnifiedPalette) => p.yellow.light,
      ansiBrightBlue: (p: UnifiedPalette) => p.blue.light,
      ansiBrightMagenta: (p: UnifiedPalette) => p.purple.light,
      ansiBrightCyan: (p: UnifiedPalette) => p.cyan.light,
      ansiBrightWhite: (p: UnifiedPalette) => p.foreground.light,
    },
    terminalCursor: {
      foreground: (p: UnifiedPalette) => p.foreground.light,
      background: (p: UnifiedPalette) => p.background.light,
    },
  },
}

/**
 * Git colors - git декорации
 */
export const gitConfig: UIColorConfig = {
  groups: {
    gitDecoration: {
      modifiedResourceForeground: (p: UnifiedPalette) => p.blue.light,
      ignoredResourceForeground: (p: UnifiedPalette) => p.foreground.dark,
      deletedResourceForeground: (p: UnifiedPalette) => p.red.dark,
      renamedResourceForeground: (p: UnifiedPalette) => p.teal.dark,
      addedResourceForeground: (p: UnifiedPalette) => p.teal.dark,
      untrackedResourceForeground: (p: UnifiedPalette) => p.teal.dark,
      conflictingResourceForeground: (p: UnifiedPalette) =>
        alpha(p.yellow.main, 0.8),
      stageDeletedResourceForeground: (p: UnifiedPalette) => p.red.dark,
      stageModifiedResourceForeground: (p: UnifiedPalette) => p.blue.light,
    },
  },
}

/**
 * Diff colors - различия в файлах
 */
export const diffConfig: UIColorConfig = {
  groups: {
    diffEditor: {
      insertedTextBackground: (p: UnifiedPalette) => alpha(p.green.dark, 0.125),
      removedTextBackground: (p: UnifiedPalette) => alpha(p.red.dark, 0.13),
      insertedLineBackground: (p: UnifiedPalette) => alpha(p.green.dark, 0.125),
      removedLineBackground: (p: UnifiedPalette) => alpha(p.red.dark, 0.13),
      diagonalFill: (p: UnifiedPalette) => lighten(p.background.main, 0.08),
      unchangedCodeBackground: (p: UnifiedPalette) =>
        alpha(lighten(p.background.main, 0.06), 0.4),
    },
    diffEditorGutter: {
      insertedLineBackground: (p: UnifiedPalette) => alpha(p.green.dark, 0.15),
      removedLineBackground: (p: UnifiedPalette) => alpha(p.red.dark, 0.13),
    },
    diffEditorOverview: {
      insertedForeground: (p: UnifiedPalette) => alpha(p.green.dark, 0.15),
      removedForeground: (p: UnifiedPalette) => alpha(p.red.dark, 0.13),
    },
    multiDiffEditor: {
      headerBackground: (p: UnifiedPalette) => p.background.light,
      border: (p: UnifiedPalette) => p.background.light,
    },
  },
}

/**
 * Misc colors - разные UI компоненты (debug, notebook, charts, merge, menu, chat, etc.)
 */
export const miscConfig: UIColorConfig = {
  rules: {
    'textLink.foreground': (p: UnifiedPalette) => p.blue.light,
    'textLink.activeForeground': (p: UnifiedPalette) =>
      lighten(p.blue.light, 0.2),
    'textPreformat.foreground': (p: UnifiedPalette) => p.foreground.main,
    'textSeparator.foreground': (p: UnifiedPalette) =>
      lighten(p.background.main, 0.15),
  },
  groups: {
    walkThrough: {
      embeddedEditorBackground: (p: UnifiedPalette) => p.background.main,
    },
    textBlockQuote: {
      background: (p: UnifiedPalette) => p.background.main,
    },
    textCodeBlock: {
      background: (p: UnifiedPalette) => p.background.main,
    },
    debugExceptionWidget: {
      border: (p: UnifiedPalette) => p.red.dark,
      background: (p: UnifiedPalette) => p.background.dark,
    },
    debugToolBar: {
      background: (p: UnifiedPalette) => p.background.dark,
    },
    debugConsole: {
      infoForeground: (p: UnifiedPalette) => p.foreground.main,
      errorForeground: (p: UnifiedPalette) => p.red.dark,
      sourceForeground: (p: UnifiedPalette) => p.foreground.main,
      warningForeground: (p: UnifiedPalette) => p.yellow.dark,
    },
    debugConsoleInputIcon: {
      foreground: (p: UnifiedPalette) => p.teal.main,
    },
    debugView: {
      stateLabelForeground: (p: UnifiedPalette) => p.foreground.main,
      stateLabelBackground: (p: UnifiedPalette) => p.background.dark,
      valueChangedHighlight: (p: UnifiedPalette) => alpha(p.blue.dark, 0.67),
    },
    debugTokenExpression: {
      name: (p: UnifiedPalette) => p.cyan.light,
      value: (p: UnifiedPalette) => p.foreground.light,
      string: (p: UnifiedPalette) => p.green.main,
      boolean: (p: UnifiedPalette) => p.orange.main,
      number: (p: UnifiedPalette) => p.orange.main,
      error: (p: UnifiedPalette) => p.red.dark,
    },
    debugIcon: {
      breakpointForeground: (p: UnifiedPalette) => p.red.dark,
      breakpointDisabledForeground: (p: UnifiedPalette) => p.background.light,
      breakpointUnverifiedForeground: (p: UnifiedPalette) => p.red.dark,
    },
    notebook: {
      editorBackground: (p: UnifiedPalette) => p.background.light,
      cellEditorBackground: (p: UnifiedPalette) => p.background.main,
      cellBorderColor: (p: UnifiedPalette) => p.background.dark,
      focusedCellBorder: (p: UnifiedPalette) =>
        mix(p.background.main, p.blue.main, 0.2),
      cellStatusBarItemHoverBackground: (p: UnifiedPalette) =>
        alpha(p.blue.main, 0.15),
    },
    charts: {
      red: (p: UnifiedPalette) => p.red.main,
      blue: (p: UnifiedPalette) => p.blue.main,
      yellow: (p: UnifiedPalette) => p.yellow.main,
      orange: (p: UnifiedPalette) => p.orange.main,
      green: (p: UnifiedPalette) => p.blue.main,
      purple: (p: UnifiedPalette) => p.purple.dark,
      foreground: (p: UnifiedPalette) => p.foreground.light,
      lines: (p: UnifiedPalette) => p.background.main,
    },
    scmGraph: {
      historyItemHoverLabelForeground: (p: UnifiedPalette) => p.background.dark,
      foreground1: (p: UnifiedPalette) => p.blue.main,
      foreground2: (p: UnifiedPalette) => p.purple.main,
      foreground3: (p: UnifiedPalette) => p.cyan.main,
      foreground4: (p: UnifiedPalette) => p.pink.main,
      foreground5: (p: UnifiedPalette) => p.magenta.main,
      historyItemHoverAdditionsForeground: (p: UnifiedPalette) => p.green.dark,
      historyItemHoverDeletionsForeground: (p: UnifiedPalette) => p.red.main,
      historyItemRefColor: (p: UnifiedPalette) => p.blue.main,
      historyItemRemoteRefColor: (p: UnifiedPalette) => p.purple.main,
      historyItemBaseRefColor: (p: UnifiedPalette) => p.cyan.main,
      historyItemHoverDefaultLabelForeground: (p: UnifiedPalette) =>
        p.foreground.light,
    },
    merge: {
      currentHeaderBackground: (p: UnifiedPalette) => alpha(p.green.dark, 0.15),
      currentContentBackground: (p: UnifiedPalette) => alpha(p.teal.dark, 0.27),
      incomingHeaderBackground: (p: UnifiedPalette) => alpha(p.blue.dark, 0.67),
      incomingContentBackground: (p: UnifiedPalette) =>
        alpha(p.blue.dark, 0.27),
    },
    mergeEditor: {
      'change.background': (p: UnifiedPalette) => alpha(p.green.dark, 0.15),
      'change.word.background': (p: UnifiedPalette) =>
        alpha(p.green.dark, 0.25),
      'conflict.unhandledUnfocused.border': (p: UnifiedPalette) =>
        alpha(p.yellow.main, 0.53),
      'conflict.unhandledFocused.border': (p: UnifiedPalette) =>
        alpha(p.yellow.main, 0.69),
      'conflict.handledUnfocused.border': (p: UnifiedPalette) =>
        alpha(p.green.dark, 0.15),
      'conflict.handledFocused.border': (p: UnifiedPalette) =>
        alpha(p.green.dark, 0.4),
      'conflict.handled.minimapOverViewRuler': (p: UnifiedPalette) =>
        p.teal.dark,
      'conflict.unhandled.minimapOverViewRuler': (p: UnifiedPalette) =>
        p.yellow.main,
    },
    gitlens: {
      trailingLineForegroundColor: (p: UnifiedPalette) => p.neutral.dark,
      gutterUncommittedForegroundColor: (p: UnifiedPalette) => p.blue.main,
      gutterForegroundColor: (p: UnifiedPalette) => p.foreground.main,
      gutterBackgroundColor: (p: UnifiedPalette) => p.background.main,
    },
    notificationCenterHeader: {
      background: (p: UnifiedPalette) => p.background.main,
    },
    notifications: {
      background: (p: UnifiedPalette) => p.background.main,
    },
    notificationLink: {
      foreground: (p: UnifiedPalette) => p.blue.light,
    },
    notificationsErrorIcon: {
      foreground: (p: UnifiedPalette) => p.red.dark,
    },
    notificationsWarningIcon: {
      foreground: (p: UnifiedPalette) => p.yellow.main,
    },
    notificationsInfoIcon: {
      foreground: (p: UnifiedPalette) => p.cyan.main,
    },
    menubar: {
      selectionForeground: (p: UnifiedPalette) => p.foreground.light,
      selectionBackground: (p: UnifiedPalette) => subtleHighlight(p.blue.main),
      selectionBorder: (p: UnifiedPalette) => lighten(p.background.main, 0.04),
    },
    menu: {
      foreground: (p: UnifiedPalette) => p.foreground.main,
      background: (p: UnifiedPalette) => p.background.main,
      selectionForeground: (p: UnifiedPalette) =>
        lighten(p.foreground.light, 0.4),
      selectionBackground: (p: UnifiedPalette) => alpha(p.blue.main, 0.25),
      separatorBackground: (p: UnifiedPalette) =>
        lighten(p.background.main, 0.06),
      border: (p: UnifiedPalette) => mix(p.background.main, p.blue.main, 0.2),
    },
    chat: {
      requestBorder: (p: UnifiedPalette) => p.background.light,
      avatarBackground: (p: UnifiedPalette) => p.blue.dark,
      avatarForeground: (p: UnifiedPalette) => p.foreground.light,
      slashCommandBackground: (p: UnifiedPalette) => p.background.dark,
      slashCommandForeground: (p: UnifiedPalette) => p.blue.main,
    },
    inlineChat: {
      foreground: (p: UnifiedPalette) => p.foreground.light,
    },
    inlineChatInput: {
      background: (p: UnifiedPalette) => p.background.light,
    },
    inlineChatDiff: {
      inserted: (p: UnifiedPalette) => alpha(p.green.dark, 0.25),
      removed: (p: UnifiedPalette) => alpha(p.red.dark, 0.26),
    },
  },
}
