import { palette } from '../palette/index'

/**
 * Editor UI элементы
 * Эти токены отвечают за оформление редактора кода в VS Code
 */
export const editorColors = {
  'editor.background': palette.background,
  'editor.findMatchBackground': palette.selection + '66', // Замена для editorFindMatchBgAlpha66
  'editor.findMatchHighlightBackground': palette.selection + '66', // Замена для editorFindMatchBgAlpha66
  'editor.findRangeHighlightBackground': palette.special.highlight + '33', // Замена для editorFindRangeHighlightBgAlpha33
  'editor.focusedStackFrameHighlightBackground':
    palette.special.highlight + '20', // Замена для editorFocusedStackFrameBgAlpha20
  'editor.foldBackground': palette.backgrounds.secondary + '4A', // Замена для backgroundAlt3Alpha4A
  'editor.foreground': palette.foreground,
  'editor.inactiveSelectionBackground': palette.selection + '45', // Замена для editorInactiveSelectionBgAlpha45
  'editor.lineHighlightBackground': palette.backgrounds.elevated, // Замена для backgroundAlt2
  'editor.lineHighlightBorder': palette.transparent,
  'editor.rangeHighlightBackground': palette.special.highlight + '20', // Замена для editorRangeHighlightBgAlpha20
  'editor.selectionBackground': palette.selection + '60', // Замена для editorSelectionBgAlpha60
  'editor.selectionHighlightBackground': palette.special.highlight + '44', // Замена для editorSelectionHighlightBgAlpha44
  'editor.stackFrameHighlightBackground': palette.special.highlight + '20', // Замена для editorStackFrameBgAlpha20
  'editor.wordHighlightBackground': palette.special.highlight + '44', // Замена для editorWordHighlightBgAlpha44
  'editor.wordHighlightStrongBackground': palette.special.highlight + '55', // Замена для editorWordHighlightStrongBgAlpha55
  'editorBracketHighlight.foreground1': palette.blue, // Замена для blueMid
  'editorBracketHighlight.foreground2': palette.blue, // Замена для blueLight2
  'editorBracketHighlight.foreground3': palette.purple, // Замена для purpleMid
  'editorBracketHighlight.foreground4': palette.cyan, // Замена для cyanDark2
  'editorBracketHighlight.foreground5': palette.green, // Замена для greenDark3
  'editorBracketHighlight.foreground6': palette.yellow, // Замена для yellowDark
  'editorBracketHighlight.unexpectedBracket.foreground': palette.error, // Замена для redDark
  'editorBracketMatch.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'editorBracketMatch.border': palette.borders.subtle, // Замена для borderAlt2
  'editorBracketPairGuide.activeBackground1': palette.blue, // Замена для blueMid
  'editorBracketPairGuide.activeBackground2': palette.blue, // Замена для blueLight2
  'editorBracketPairGuide.activeBackground3': palette.purple, // Замена для purpleMid
  'editorBracketPairGuide.activeBackground4': palette.cyan, // Замена для cyanDark2
  'editorBracketPairGuide.activeBackground5': palette.green, // Замена для greenDark3
  'editorBracketPairGuide.activeBackground6': palette.yellow, // Замена для yellowDark
  'editorCodeLens.foreground': palette.textSecondary, // Замена для foregroundAlt5
  'editorCursor.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'editorCursor.foreground': palette.yellow,
  'editorError.foreground': palette.error, // Замена для redDark
  'editorHint.foreground': palette.info, // Замена для cyanDark3
  'editorHoverWidget.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'editorHoverWidget.border': palette.borders.subtle + '40', // Замена для borderAltAlpha40
  'editorIndentGuide.activeBackground1': palette.borders.subtle + '40', // Замена для borderAltAlpha40
  'editorIndentGuide.activeBackground2': palette.borders.subtle + '40', // Замена для borderAltAlpha40
  'editorIndentGuide.activeBackground3': palette.borders.subtle + '40', // Замена для borderAltAlpha40
  'editorIndentGuide.activeBackground4': palette.borders.subtle + '40', // Замена для borderAltAlpha40
  'editorIndentGuide.activeBackground5': palette.borders.subtle + '40', // Замена для borderAltAlpha40
  'editorIndentGuide.activeBackground6': palette.borders.subtle + '40', // Замена для borderAltAlpha40
  'editorIndentGuide.background1': palette.borders.subtle + '20', // Замена для borderAltAlpha20
  'editorIndentGuide.background2': palette.borders.subtle + '20', // Замена для borderAltAlpha20
  'editorIndentGuide.background3': palette.borders.subtle + '20', // Замена для borderAltAlpha20
  'editorIndentGuide.background4': palette.borders.subtle + '20', // Замена для borderAltAlpha20
  'editorIndentGuide.background5': palette.borders.subtle + '20', // Замена для borderAltAlpha20
  'editorIndentGuide.background6': palette.borders.subtle + '20', // Замена для borderAltAlpha20
  'editorInfo.foreground': palette.info, // Замена для cyanDark3
  'editorLightBulb.foreground': palette.yellow,
  'editorLightBulbAutoFix.foreground': palette.yellow,
  'editorLineNumber.activeForeground': palette.text, // Замена для foregroundAlt8
  'editorLineNumber.foreground': palette.textSecondary, // Замена для foregroundAlt6
  'editorLink.activeForeground': palette.text, // Замена для foregroundAlt7
  'editorMarkerNavigation.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'editorOverviewRuler.border': palette.transparent,
  'editorOverviewRuler.bracketMatchForeground': palette.backgrounds.secondary, // Замена для backgroundAlt
  'editorRuler.foreground': palette.borders.subtle, // Замена для editorRuler
  'editorStickyScroll.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'editorStickyScroll.shadow': palette.special.shadow + '80', // Замена для scrollbarShadowAlpha
  'editorStickyScrollHover.background': palette.interactive.hover, // Замена для editorStickyScrollHoverBg
  'editorSuggestWidget.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'editorSuggestWidget.border': palette.borders.subtle + '40', // Замена для borderAltAlpha40
  'editorSuggestWidget.foreground': palette.foreground,
  'editorSuggestWidget.highlightForeground': palette.borders.subtle, // Замена для borderAlt
  'editorSuggestWidget.selectedBackground': palette.interactive.selected, // Замена для backgroundAlt6
  'editorWarning.foreground': palette.yellow,
  'editorWhitespace.foreground': palette.textSecondary, // Замена для foregroundAlt6
  'editorWidget.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'editorWidget.resizeBorder': palette.special.highlight + '33', // Замена для editorWordHighlightBgAlpha33
}
