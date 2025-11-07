import type { UniversalPalette } from '../palette/index.js'
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
    'selection.background': (p: UniversalPalette) =>
      subtleHighlight(p.chromatic.blue.main),
    'editorLink.activeForeground': (p: UniversalPalette) =>
      p.foreground.primary.light,
  },
  groups: {
    editor: {
      background: (p: UniversalPalette) => p.background.base.light,
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
      foldBackground: (p: UniversalPalette) =>
        alpha(p.background.base.dark, 0.2),
      selectionBackground: (p: UniversalPalette) =>
        subtleHighlight(p.chromatic.blue.main),
      inactiveSelectionBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.main, 0.15),
      findMatchBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.dark, 0.2),
      findMatchBorder: (p: UniversalPalette) =>
        alpha(p.chromatic.yellow.main, 0.5),
      findMatchHighlightBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.dark, 0.2),
      findRangeHighlightBackground: (p: UniversalPalette) =>
        subtleHighlight(p.chromatic.blue.main),
      rangeHighlightBackground: (p: UniversalPalette) =>
        subtleHighlight(p.chromatic.teal.main),
      wordHighlightBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.main, 0.25),
      wordHighlightStrongBackground: (p: UniversalPalette) =>
        mediumHighlight(p.chromatic.blue.main),
      selectionHighlightBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.main, 0.25),
      lineHighlightBackground: (p: UniversalPalette) => p.background.base.light,
      stackFrameHighlightBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.yellow.dark, 0.125),
      focusedStackFrameHighlightBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.teal.main, 0.125),
    },
    editorCursor: {
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
    },
    editorStickyScrollHover: {
      background: (p: UniversalPalette) => alpha(p.chromatic.blue.main, 0.1),
    },
    editorIndentGuide: {
      background1: (p: UniversalPalette) =>
        lighten(p.background.base.main, 0.05),
      activeBackground1: (p: UniversalPalette) =>
        mix(p.chromatic.neutral.dark, p.background.base.main, 0.7),
    },
    editorLineNumber: {
      foreground: (p: UniversalPalette) =>
        mix(p.chromatic.neutral.dark, p.background.base.main, 0.65),
      activeForeground: (p: UniversalPalette) =>
        mix(p.chromatic.neutral.dark, p.background.base.main, 0.05),
    },
    editorWhitespace: {
      foreground: (p: UniversalPalette) => lighten(p.ui.badge, 0.08),
    },
    editorMarkerNavigation: {
      background: (p: UniversalPalette) => p.background.base.main,
    },
    editorHoverWidget: {
      background: (p: UniversalPalette) =>
        mix(p.background.base.light, p.chromatic.blue.main, 0.1),
      border: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.blue.main, 0.25),
    },
    editorBracketMatch: {
      background: (p: UniversalPalette) => p.background.base.main,
      border: (p: UniversalPalette) => lightBackground(p.background.base.main),
    },
    editorBracketHighlight: {
      foreground1: (p: UniversalPalette) => p.chromatic.orange.light,
      foreground2: (p: UniversalPalette) => p.chromatic.rose.light,
      foreground3: (p: UniversalPalette) => p.chromatic.red.light,
      foreground4: (p: UniversalPalette) => p.chromatic.yellow.light,
      foreground5: (p: UniversalPalette) => p.chromatic.magenta.light,
      foreground6: (p: UniversalPalette) => p.chromatic.lime.main,
      'unexpectedBracket.foreground': (p: UniversalPalette) =>
        p.chromatic.red.main,
    },
    editorBracketPairGuide: {
      activeBackground1: (p: UniversalPalette) => p.chromatic.orange.light,
      activeBackground2: (p: UniversalPalette) => p.chromatic.rose.light,
      activeBackground3: (p: UniversalPalette) => p.chromatic.red.light,
      activeBackground4: (p: UniversalPalette) => p.chromatic.yellow.light,
      activeBackground5: (p: UniversalPalette) => p.chromatic.magenta.light,
      activeBackground6: (p: UniversalPalette) => p.chromatic.lime.main,
    },
    editorOverviewRuler: {
      border: (p: UniversalPalette) => lightBackground(p.background.base.light),
      errorForeground: (p: UniversalPalette) => p.chromatic.red.main,
      warningForeground: (p: UniversalPalette) => p.chromatic.yellow.main,
      infoForeground: (p: UniversalPalette) =>
        mix(p.chromatic.teal.main, p.chromatic.green.main, 0.3),
      bracketMatchForeground: (p: UniversalPalette) => p.background.base.dark,
      findMatchForeground: (p: UniversalPalette) =>
        alpha(p.chromatic.neutral.light, 0.4),
      rangeHighlightForeground: (p: UniversalPalette) =>
        alpha(p.chromatic.teal.main, 0.3),
      selectionHighlightForeground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.main, 0.25),
      wordHighlightForeground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.main, 0.35),
      wordHighlightStrongForeground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.main, 0.45),
      modifiedForeground: (p: UniversalPalette) =>
        mix(p.chromatic.neutral.main, p.background.base.main, 0.65),
      addedForeground: (p: UniversalPalette) =>
        mix(p.chromatic.teal.main, p.background.base.main, 0.8),
      deletedForeground: (p: UniversalPalette) =>
        mix(p.chromatic.red.main, p.background.base.main, 0.7),
    },
    editorRuler: {
      foreground: (p: UniversalPalette) => p.background.base.dark,
    },
    editorError: {
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
    },
    editorWarning: {
      foreground: (p: UniversalPalette) => p.chromatic.yellow.main,
    },
    editorInfo: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
    editorHint: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
    editorGutter: {
      modifiedBackground: (p: UniversalPalette) =>
        mix(p.chromatic.neutral.main, p.background.base.main, 0.65),
      addedBackground: (p: UniversalPalette) =>
        mix(p.chromatic.teal.main, p.background.base.main, 0.8),
      deletedBackground: (p: UniversalPalette) =>
        mix(p.chromatic.red.main, p.background.base.main, 0.7),
    },
    editorGhostText: {
      foreground: (p: UniversalPalette) => p.chromatic.neutral.dark,
    },
    minimapGutter: {
      modifiedBackground: (p: UniversalPalette) =>
        mix(p.chromatic.neutral.main, p.background.base.main, 0.6),
      addedBackground: (p: UniversalPalette) =>
        mix(p.chromatic.teal.main, p.background.base.main, 0.75),
      deletedBackground: (p: UniversalPalette) =>
        mix(p.chromatic.red.main, p.background.base.main, 0.6),
    },
    editorGroup: {
      border: (p: UniversalPalette) => lightBackground(p.background.base.light),
      dropBackground: (p: UniversalPalette) =>
        lightBackground(p.background.base.light),
    },
    editorGroupHeader: {
      tabsBorder: (p: UniversalPalette) => p.background.base.dark,
      tabsBackground: (p: UniversalPalette) => p.background.base.main,
      noTabsBackground: (p: UniversalPalette) => p.background.base.main,
      border: (p: UniversalPalette) => lightBackground(p.background.base.main),
    },
    editorPane: {
      background: (p: UniversalPalette) => p.background.base.light,
    },
    editorWidget: {
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
      background: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.neutral.dark, 0.15),
      border: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.blue.main, 0.2),
      resizeBorder: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.blue.main, 0.2),
    },
    editorSuggestWidget: {
      background: (p: UniversalPalette) => p.background.base.main,
      border: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.blue.main, 0.2),
      selectedBackground: (p: UniversalPalette) =>
        mediumHighlight(p.chromatic.blue.main),
      highlightForeground: (p: UniversalPalette) => p.chromatic.neutral.light,
    },
    editorCodeLens: {
      foreground: (p: UniversalPalette) => p.foreground.primary.dark,
    },
    editorLightBulb: {
      foreground: (p: UniversalPalette) => p.chromatic.yellow.main,
    },
    editorLightBulbAutoFix: {
      foreground: (p: UniversalPalette) => p.chromatic.yellow.main,
    },
    editorInlayHint: {
      foreground: (p: UniversalPalette) => p.chromatic.neutral.main,
    },
    peekView: {
      border: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.blue.main, 0.2),
    },
    peekViewEditor: {
      background: (p: UniversalPalette) => p.background.base.main,
      matchHighlightBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.neutral.light, 0.4),
    },
    peekViewTitle: {
      background: (p: UniversalPalette) => p.background.base.dark,
    },
    peekViewTitleLabel: {
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
    },
    peekViewTitleDescription: {
      foreground: (p: UniversalPalette) => p.foreground.primary.main,
    },
    peekViewResult: {
      background: (p: UniversalPalette) => p.background.base.main,
      selectionForeground: (p: UniversalPalette) => p.foreground.primary.light,
      selectionBackground: (p: UniversalPalette) =>
        mediumHighlight(p.chromatic.blue.main),
      lineForeground: (p: UniversalPalette) => p.foreground.primary.light,
      fileForeground: (p: UniversalPalette) => p.foreground.primary.main,
      matchHighlightBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.neutral.light, 0.4),
    },
  },
}

/**
 * Panel colors - нижние панели (статус бар, тайтл бар)
 */
export const panelsConfig: UIColorConfig = {
  groups: {
    panel: {
      background: (p: UniversalPalette) =>
        slightlyDarker(p.background.base.main),
      border: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.blue.main, 0.2),
    },
    panelTitle: {
      activeForeground: (p: UniversalPalette) => p.foreground.primary.dark,
      inactiveForeground: (p: UniversalPalette) =>
        darken(p.foreground.primary.dark, 0.2),
      activeBorder: (p: UniversalPalette) => p.chromatic.blue.main,
    },
    panelInput: {
      border: (p: UniversalPalette) => lightBackground(p.background.base.main),
    },
    panelStickyScroll: {
      background: (p: UniversalPalette) => p.background.base.light,
    },
    statusBar: {
      foreground: (p: UniversalPalette) => p.foreground.primary.dark,
      background: (p: UniversalPalette) => p.background.base.dark,
      border: (p: UniversalPalette) => lightBackground(p.background.base.dark),
      focusBorder: (p: UniversalPalette) => p.chromatic.blue.main,
      noFolderBackground: (p: UniversalPalette) => p.background.base.dark,
      debuggingBackground: (p: UniversalPalette) =>
        mix(p.chromatic.purple.dark, p.background.base.dark, 0.5),
      debuggingForeground: (p: UniversalPalette) => p.foreground.primary.dark,
    },
    statusBarItem: {
      activeBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.main, 0.25),
      hoverBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.main, 0.15),
      prominentBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.main, 0.25),
      prominentHoverBackground: (p: UniversalPalette) =>
        mediumHighlight(p.chromatic.blue.main),
      focusBorder: (p: UniversalPalette) => p.chromatic.blue.main,
      remoteBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.main, 0.25),
      remoteHoverForeground: (p: UniversalPalette) =>
        p.foreground.primary.bright,
    },
    titleBar: {
      activeForeground: (p: UniversalPalette) => p.foreground.primary.dark,
      inactiveForeground: (p: UniversalPalette) =>
        darken(p.foreground.primary.dark, 0.4),
      activeBackground: (p: UniversalPalette) => p.background.base.main,
      inactiveBackground: (p: UniversalPalette) =>
        darken(p.background.base.main, 0.03),
      border: (p: UniversalPalette) => lightBackground(p.background.base.main),
    },
  },
}

/**
 * Terminal colors
 */
export const terminalConfig: UIColorConfig = {
  groups: {
    terminal: {
      background: (p: UniversalPalette) => p.background.base.main,
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
      selectionBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.dark, 0.3),
      ansiBlack: (p: UniversalPalette) => p.background.base.dark,
      ansiRed: (p: UniversalPalette) => p.chromatic.red.main,
      ansiGreen: (p: UniversalPalette) => p.chromatic.green.main,
      ansiYellow: (p: UniversalPalette) => p.chromatic.yellow.main,
      ansiBlue: (p: UniversalPalette) => p.chromatic.blue.main,
      ansiMagenta: (p: UniversalPalette) => p.chromatic.purple.light,
      ansiCyan: (p: UniversalPalette) => p.chromatic.cyan.light,
      ansiWhite: (p: UniversalPalette) => p.foreground.primary.main,
      ansiBrightBlack: (p: UniversalPalette) => p.chromatic.neutral.main,
      ansiBrightRed: (p: UniversalPalette) => p.chromatic.red.dark,
      ansiBrightGreen: (p: UniversalPalette) => p.chromatic.green.dark,
      ansiBrightYellow: (p: UniversalPalette) => p.chromatic.yellow.light,
      ansiBrightBlue: (p: UniversalPalette) => p.chromatic.blue.light,
      ansiBrightMagenta: (p: UniversalPalette) => p.chromatic.purple.light,
      ansiBrightCyan: (p: UniversalPalette) => p.chromatic.cyan.light,
      ansiBrightWhite: (p: UniversalPalette) => p.foreground.primary.light,
    },
    terminalCursor: {
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
      background: (p: UniversalPalette) => p.background.base.light,
    },
  },
}

/**
 * Git colors - git декорации
 */
export const gitConfig: UIColorConfig = {
  groups: {
    gitDecoration: {
      modifiedResourceForeground: (p: UniversalPalette) =>
        p.chromatic.blue.light,
      ignoredResourceForeground: (p: UniversalPalette) =>
        p.foreground.primary.dark,
      deletedResourceForeground: (p: UniversalPalette) => p.chromatic.red.dark,
      renamedResourceForeground: (p: UniversalPalette) => p.chromatic.teal.dark,
      addedResourceForeground: (p: UniversalPalette) => p.chromatic.teal.dark,
      untrackedResourceForeground: (p: UniversalPalette) =>
        p.chromatic.teal.dark,
      conflictingResourceForeground: (p: UniversalPalette) =>
        alpha(p.chromatic.yellow.main, 0.8),
      stageDeletedResourceForeground: (p: UniversalPalette) =>
        p.chromatic.red.dark,
      stageModifiedResourceForeground: (p: UniversalPalette) =>
        p.chromatic.blue.light,
    },
  },
}

/**
 * Diff colors - различия в файлах
 */
export const diffConfig: UIColorConfig = {
  groups: {
    diffEditor: {
      insertedTextBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, 0.125),
      removedTextBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.red.dark, 0.13),
      insertedLineBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, 0.125),
      removedLineBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.red.dark, 0.13),
      diagonalFill: (p: UniversalPalette) =>
        lighten(p.background.base.main, 0.08),
      unchangedCodeBackground: (p: UniversalPalette) =>
        alpha(lighten(p.background.base.main, 0.06), 0.4),
    },
    diffEditorGutter: {
      insertedLineBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, 0.15),
      removedLineBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.red.dark, 0.13),
    },
    diffEditorOverview: {
      insertedForeground: (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, 0.15),
      removedForeground: (p: UniversalPalette) =>
        alpha(p.chromatic.red.dark, 0.13),
    },
    multiDiffEditor: {
      headerBackground: (p: UniversalPalette) => p.background.base.light,
      border: (p: UniversalPalette) => p.background.base.light,
    },
  },
}

/**
 * Misc colors - разные UI компоненты (debug, notebook, charts, merge, menu, chat, etc.)
 */
export const miscConfig: UIColorConfig = {
  rules: {
    'textLink.foreground': (p: UniversalPalette) => p.chromatic.blue.light,
    'textLink.activeForeground': (p: UniversalPalette) =>
      lighten(p.chromatic.blue.light, 0.2),
    'textPreformat.foreground': (p: UniversalPalette) =>
      p.foreground.primary.main,
    'textSeparator.foreground': (p: UniversalPalette) =>
      lighten(p.background.base.main, 0.15),
  },
  groups: {
    walkThrough: {
      embeddedEditorBackground: (p: UniversalPalette) => p.background.base.main,
    },
    textBlockQuote: {
      background: (p: UniversalPalette) => p.background.base.main,
    },
    textCodeBlock: {
      background: (p: UniversalPalette) => p.background.base.main,
    },
    debugExceptionWidget: {
      border: (p: UniversalPalette) => p.chromatic.red.dark,
      background: (p: UniversalPalette) => p.background.base.dark,
    },
    debugToolBar: {
      background: (p: UniversalPalette) => p.background.base.dark,
    },
    debugConsole: {
      infoForeground: (p: UniversalPalette) => p.foreground.primary.main,
      errorForeground: (p: UniversalPalette) => p.chromatic.red.dark,
      sourceForeground: (p: UniversalPalette) => p.foreground.primary.main,
      warningForeground: (p: UniversalPalette) => p.chromatic.yellow.dark,
    },
    debugConsoleInputIcon: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
    debugView: {
      stateLabelForeground: (p: UniversalPalette) => p.foreground.primary.main,
      stateLabelBackground: (p: UniversalPalette) => p.background.base.dark,
      valueChangedHighlight: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.dark, 0.67),
    },
    debugTokenExpression: {
      name: (p: UniversalPalette) => p.chromatic.cyan.light,
      value: (p: UniversalPalette) => p.foreground.primary.light,
      string: (p: UniversalPalette) => p.chromatic.green.main,
      boolean: (p: UniversalPalette) => p.chromatic.orange.main,
      number: (p: UniversalPalette) => p.chromatic.orange.main,
      error: (p: UniversalPalette) => p.chromatic.red.dark,
    },
    debugIcon: {
      breakpointForeground: (p: UniversalPalette) => p.chromatic.red.dark,
      breakpointDisabledForeground: (p: UniversalPalette) =>
        p.background.base.light,
      breakpointUnverifiedForeground: (p: UniversalPalette) =>
        p.chromatic.red.dark,
    },
    notebook: {
      editorBackground: (p: UniversalPalette) => p.background.base.light,
      cellEditorBackground: (p: UniversalPalette) => p.background.base.main,
      cellBorderColor: (p: UniversalPalette) => p.background.base.dark,
      focusedCellBorder: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.blue.main, 0.2),
      cellStatusBarItemHoverBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.main, 0.15),
    },
    charts: {
      red: (p: UniversalPalette) => p.chromatic.red.main,
      blue: (p: UniversalPalette) => p.chromatic.blue.main,
      yellow: (p: UniversalPalette) => p.chromatic.yellow.main,
      orange: (p: UniversalPalette) => p.chromatic.orange.main,
      green: (p: UniversalPalette) => p.chromatic.blue.main,
      purple: (p: UniversalPalette) => p.chromatic.purple.dark,
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
      lines: (p: UniversalPalette) => p.background.base.main,
    },
    scmGraph: {
      historyItemHoverLabelForeground: (p: UniversalPalette) =>
        p.background.base.dark,
      foreground1: (p: UniversalPalette) => p.chromatic.blue.main,
      foreground2: (p: UniversalPalette) => p.chromatic.purple.main,
      foreground3: (p: UniversalPalette) => p.chromatic.cyan.main,
      foreground4: (p: UniversalPalette) => p.chromatic.pink.main,
      foreground5: (p: UniversalPalette) => p.chromatic.magenta.main,
      historyItemHoverAdditionsForeground: (p: UniversalPalette) =>
        p.chromatic.green.dark,
      historyItemHoverDeletionsForeground: (p: UniversalPalette) =>
        p.chromatic.red.main,
      historyItemRefColor: (p: UniversalPalette) => p.chromatic.blue.main,
      historyItemRemoteRefColor: (p: UniversalPalette) =>
        p.chromatic.purple.main,
      historyItemBaseRefColor: (p: UniversalPalette) => p.chromatic.cyan.main,
      historyItemHoverDefaultLabelForeground: (p: UniversalPalette) =>
        p.foreground.primary.light,
    },
    merge: {
      currentHeaderBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, 0.15),
      currentContentBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.teal.dark, 0.27),
      incomingHeaderBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.dark, 0.67),
      incomingContentBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.dark, 0.27),
    },
    mergeEditor: {
      'change.background': (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, 0.15),
      'change.word.background': (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, 0.25),
      'conflict.unhandledUnfocused.border': (p: UniversalPalette) =>
        alpha(p.chromatic.yellow.main, 0.53),
      'conflict.unhandledFocused.border': (p: UniversalPalette) =>
        alpha(p.chromatic.yellow.main, 0.69),
      'conflict.handledUnfocused.border': (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, 0.15),
      'conflict.handledFocused.border': (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, 0.4),
      'conflict.handled.minimapOverViewRuler': (p: UniversalPalette) =>
        p.chromatic.teal.dark,
      'conflict.unhandled.minimapOverViewRuler': (p: UniversalPalette) =>
        p.chromatic.yellow.main,
    },
    gitlens: {
      trailingLineForegroundColor: (p: UniversalPalette) =>
        p.chromatic.neutral.dark,
      gutterUncommittedForegroundColor: (p: UniversalPalette) =>
        p.chromatic.blue.main,
      gutterForegroundColor: (p: UniversalPalette) => p.foreground.primary.main,
      gutterBackgroundColor: (p: UniversalPalette) => p.background.base.main,
    },
    notificationCenterHeader: {
      background: (p: UniversalPalette) => p.background.base.main,
    },
    notifications: {
      background: (p: UniversalPalette) => p.background.base.main,
    },
    notificationLink: {
      foreground: (p: UniversalPalette) => p.chromatic.blue.light,
    },
    notificationsErrorIcon: {
      foreground: (p: UniversalPalette) => p.chromatic.red.dark,
    },
    notificationsWarningIcon: {
      foreground: (p: UniversalPalette) => p.chromatic.yellow.main,
    },
    notificationsInfoIcon: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
    menubar: {
      selectionForeground: (p: UniversalPalette) => p.foreground.primary.light,
      selectionBackground: (p: UniversalPalette) =>
        subtleHighlight(p.chromatic.blue.main),
      selectionBorder: (p: UniversalPalette) =>
        lighten(p.background.base.main, 0.04),
    },
    menu: {
      foreground: (p: UniversalPalette) => p.foreground.primary.main,
      background: (p: UniversalPalette) => p.background.base.main,
      selectionForeground: (p: UniversalPalette) =>
        lighten(p.foreground.primary.light, 0.4),
      selectionBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.main, 0.25),
      separatorBackground: (p: UniversalPalette) =>
        lighten(p.background.base.main, 0.06),
      border: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.blue.main, 0.2),
    },
    chat: {
      requestBorder: (p: UniversalPalette) => p.background.base.light,
      avatarBackground: (p: UniversalPalette) => p.chromatic.blue.dark,
      avatarForeground: (p: UniversalPalette) => p.foreground.primary.light,
      slashCommandBackground: (p: UniversalPalette) => p.background.base.dark,
      slashCommandForeground: (p: UniversalPalette) => p.chromatic.blue.main,
    },
    inlineChat: {
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
    },
    inlineChatInput: {
      background: (p: UniversalPalette) => p.background.base.light,
    },
    inlineChatDiff: {
      inserted: (p: UniversalPalette) => alpha(p.chromatic.green.dark, 0.25),
      removed: (p: UniversalPalette) => alpha(p.chromatic.red.dark, 0.26),
    },
  },
}
