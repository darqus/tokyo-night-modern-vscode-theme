import { getToken } from '../design-tokens'

/**
 * Editor UI элементы
 * Эти токены отвечают за оформление редактора кода в VS Code
 */
export const editorColors = {
  'editor.background': getToken('color.background.primary'),
  'editor.findMatchBackground': getToken('accent.primary') + '66',
  'editor.findMatchHighlightBackground': getToken('accent.primary') + '66',
  'editor.findRangeHighlightBackground': getToken('accent.primary') + '33',
  'editor.focusedStackFrameHighlightBackground':
    getToken('accent.primary') + '20',
  'editor.foldBackground': getToken('color.background.secondary') + '4A',
  'editor.foreground': getToken('color.text.primary'),
  'editor.inactiveSelectionBackground': getToken('accent.primary') + '45',
  'editor.lineHighlightBackground': getToken('color.background.secondary'),
  'editor.lineHighlightBorder': getToken('color.legacy.transparent'),
  'editor.rangeHighlightBackground': getToken('accent.primary') + '20',
  'editor.selectionBackground': getToken('accent.primary') + '60',
  'editor.selectionHighlightBackground': getToken('accent.primary') + '44',
  'editor.stackFrameHighlightBackground': getToken('accent.primary') + '20',
  'editor.wordHighlightBackground': getToken('accent.primary') + '44',
  'editor.wordHighlightStrongBackground': getToken('accent.primary') + '55',
  'editorBracketHighlight.foreground1': getToken('accent.primary'),
  'editorBracketHighlight.foreground2': getToken('accent.primary'),
  'editorBracketHighlight.foreground3': getToken('accent.secondary'),
  'editorBracketHighlight.foreground4': getToken('accent.info'),
  'editorBracketHighlight.foreground5': getToken('accent.success'),
  'editorBracketHighlight.foreground6': getToken('accent.warning'),
  'editorBracketHighlight.unexpectedBracket.foreground':
    getToken('accent.error'),
  'editorBracketMatch.background': getToken('color.background.secondary'),
  'editorBracketMatch.border': getToken('color.border.default'),
  'editorBracketPairGuide.activeBackground1': getToken('accent.primary'),
  'editorBracketPairGuide.activeBackground2': getToken('accent.primary'),
  'editorBracketPairGuide.activeBackground3': getToken('accent.secondary'),
  'editorBracketPairGuide.activeBackground4': getToken('accent.info'),
  'editorBracketPairGuide.activeBackground5': getToken('accent.success'),
  'editorBracketPairGuide.activeBackground6': getToken('accent.warning'),
  'editorCodeLens.foreground': getToken('color.text.tertiary'),
  'editorCursor.background': getToken('color.background.secondary'),
  'editorCursor.foreground': getToken('accent.warning'),
  'editorError.foreground': getToken('accent.error'),
  'editorHint.foreground': getToken('accent.info'),
  'editorHoverWidget.background': getToken('color.background.secondary'),
  'editorHoverWidget.border': getToken('color.border.default'),
  'editorIndentGuide.activeBackground1':
    getToken('color.border.default'),
  'editorIndentGuide.activeBackground2':
    getToken('color.border.default'),
  'editorIndentGuide.activeBackground3':
    getToken('color.border.default'),
  'editorIndentGuide.activeBackground4':
    getToken('color.border.default'),
  'editorIndentGuide.activeBackground5':
    getToken('color.border.default'),
  'editorIndentGuide.activeBackground6':
    getToken('color.border.default'),
  'editorIndentGuide.background1':
    getToken('color.border.default'),
  'editorIndentGuide.background2':
    getToken('color.border.default'),
  'editorIndentGuide.background3':
    getToken('color.border.default'),
  'editorIndentGuide.background4':
    getToken('color.border.default'),
  'editorIndentGuide.background5':
    getToken('color.border.default'),
  'editorIndentGuide.background6':
    getToken('color.border.default'),
  'editorInfo.foreground': getToken('accent.info'),
  'editorLightBulb.foreground': getToken('accent.warning'),
  'editorLightBulbAutoFix.foreground': getToken('accent.warning'),
  'editorLineNumber.activeForeground': getToken('color.text.secondary'),
  'editorLineNumber.foreground': getToken('color.text.disabled'),
  'editorLink.activeForeground': getToken('color.text.primary'),
  'editorMarkerNavigation.background': getToken('color.background.secondary'),
  'editorOverviewRuler.border': getToken('color.legacy.transparent'),
  'editorOverviewRuler.bracketMatchForeground': getToken('color.background.secondary'),
  'editorRuler.foreground': getToken('color.border.default'),
  'editorStickyScroll.background': getToken('color.background.secondary'),
  'editorStickyScroll.shadow': getToken('color.legacy.transparent'),
  'editorStickyScrollHover.background': getToken('color.background.tertiary'),
  'editorSuggestWidget.background': getToken('color.background.secondary'),
  'editorSuggestWidget.border': getToken('color.border.default'),
  'editorSuggestWidget.foreground': getToken('color.text.primary'),
  'editorSuggestWidget.highlightForeground': getToken('color.text.secondary'),
  'editorSuggestWidget.selectedBackground': getToken('color.background.tertiary'),
  'editorWarning.foreground': getToken('accent.warning'),
  'editorWhitespace.foreground': getToken('color.text.tertiary'),
  'editorWidget.background': getToken('color.background.secondary'),
  'editorWidget.resizeBorder': getToken('accent.primary') + '33',
}