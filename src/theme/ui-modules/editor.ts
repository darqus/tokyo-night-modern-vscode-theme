import { foundationColors } from '../palette/foundation/colors'
import { opacityLevels } from '../palette/foundation/opacity'

/**
 * Editor UI элементы
 * Эти токены отвечают за оформление редактора кода в VS Code
 */
export const editorColors = {
  'editor.background': foundationColors.gray900,
  'editor.findMatchBackground': foundationColors.blue500 + '66',
  'editor.findMatchHighlightBackground': foundationColors.blue500 + '66',
  'editor.findRangeHighlightBackground': foundationColors.blue500 + '33',
  'editor.focusedStackFrameHighlightBackground':
    foundationColors.blue500 + '20',
  'editor.foldBackground': foundationColors.gray800 + '4A',
  'editor.foreground': foundationColors.gray100,
  'editor.inactiveSelectionBackground': foundationColors.blue500 + '45',
  'editor.lineHighlightBackground': foundationColors.gray800,
  'editor.lineHighlightBorder': foundationColors.transparent,
  'editor.rangeHighlightBackground': foundationColors.blue500 + '20',
  'editor.selectionBackground': foundationColors.blue500 + '60',
  'editor.selectionHighlightBackground': foundationColors.blue500 + '44',
  'editor.stackFrameHighlightBackground': foundationColors.blue500 + '20',
  'editor.wordHighlightBackground': foundationColors.blue500 + '44',
  'editor.wordHighlightStrongBackground': foundationColors.blue500 + '55',
  'editorBracketHighlight.foreground1': foundationColors.blue500,
  'editorBracketHighlight.foreground2': foundationColors.blue500,
  'editorBracketHighlight.foreground3': foundationColors.purple500,
  'editorBracketHighlight.foreground4': foundationColors.cyan500,
  'editorBracketHighlight.foreground5': foundationColors.green500,
  'editorBracketHighlight.foreground6': foundationColors.yellow500,
  'editorBracketHighlight.unexpectedBracket.foreground':
    foundationColors.red500,
  'editorBracketMatch.background': foundationColors.gray800,
  'editorBracketMatch.border': foundationColors.gray600,
  'editorBracketPairGuide.activeBackground1': foundationColors.blue500,
  'editorBracketPairGuide.activeBackground2': foundationColors.blue500,
  'editorBracketPairGuide.activeBackground3': foundationColors.purple500,
  'editorBracketPairGuide.activeBackground4': foundationColors.cyan500,
  'editorBracketPairGuide.activeBackground5': foundationColors.green500,
  'editorBracketPairGuide.activeBackground6': foundationColors.yellow500,
  'editorCodeLens.foreground': foundationColors.gray400,
  'editorCursor.background': foundationColors.gray800,
  'editorCursor.foreground': foundationColors.yellow500,
  'editorError.foreground': foundationColors.red500,
  'editorHint.foreground': foundationColors.cyan500,
  'editorHoverWidget.background': foundationColors.gray800,
  'editorHoverWidget.border': foundationColors.gray600 + opacityLevels.medium,
  'editorIndentGuide.activeBackground1':
    foundationColors.gray600 + opacityLevels.medium,
  'editorIndentGuide.activeBackground2':
    foundationColors.gray600 + opacityLevels.medium,
  'editorIndentGuide.activeBackground3':
    foundationColors.gray600 + opacityLevels.medium,
  'editorIndentGuide.activeBackground4':
    foundationColors.gray600 + opacityLevels.medium,
  'editorIndentGuide.activeBackground5':
    foundationColors.gray600 + opacityLevels.medium,
  'editorIndentGuide.activeBackground6':
    foundationColors.gray600 + opacityLevels.medium,
  'editorIndentGuide.background1':
    foundationColors.gray600 + opacityLevels.light,
  'editorIndentGuide.background2':
    foundationColors.gray600 + opacityLevels.light,
  'editorIndentGuide.background3':
    foundationColors.gray600 + opacityLevels.light,
  'editorIndentGuide.background4':
    foundationColors.gray600 + opacityLevels.light,
  'editorIndentGuide.background5':
    foundationColors.gray600 + opacityLevels.light,
  'editorIndentGuide.background6':
    foundationColors.gray600 + opacityLevels.light,
  'editorInfo.foreground': foundationColors.cyan500,
  'editorLightBulb.foreground': foundationColors.yellow500,
  'editorLightBulbAutoFix.foreground': foundationColors.yellow500,
  'editorLineNumber.activeForeground': foundationColors.gray600,
  'editorLineNumber.foreground': foundationColors.gray700,
  'editorLink.activeForeground': foundationColors.gray100,
  'editorMarkerNavigation.background': foundationColors.gray800,
  'editorOverviewRuler.border': foundationColors.transparent,
  'editorOverviewRuler.bracketMatchForeground': foundationColors.gray800,
  'editorRuler.foreground': foundationColors.gray600,
  'editorStickyScroll.background': foundationColors.gray800,
  'editorStickyScroll.shadow': foundationColors.black + opacityLevels.solid,
  'editorStickyScrollHover.background': foundationColors.gray700,
  'editorSuggestWidget.background': foundationColors.gray800,
  'editorSuggestWidget.border': foundationColors.gray600 + opacityLevels.medium,
  'editorSuggestWidget.foreground': foundationColors.gray100,
  'editorSuggestWidget.highlightForeground': foundationColors.gray600,
  'editorSuggestWidget.selectedBackground': foundationColors.gray700,
  'editorWarning.foreground': foundationColors.yellow500,
  'editorWhitespace.foreground': foundationColors.gray400,
  'editorWidget.background': foundationColors.gray800,
  'editorWidget.resizeBorder': foundationColors.blue500 + '33',
}
