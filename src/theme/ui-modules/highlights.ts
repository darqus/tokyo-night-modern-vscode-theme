import { palette } from '../palette/index'

/**
 * Highlights UI элементы
 * Эти токены отвечают за оформление подсветки в VS Code
 */
export const highlightColors = {
  'debugView.valueChangedHighlight': palette.primary + 'AA', // Замена для blueDarkAlphaAA
  'editor.findMatchHighlightBackground': palette.selection + '66', // Замена для editorFindMatchBgAlpha66
  'editor.findRangeHighlightBackground': palette.special.highlight + '33', // Замена для editorFindRangeHighlightBgAlpha33
  'editor.focusedStackFrameHighlightBackground':
    palette.special.highlight + '20', // Замена для editorFocusedStackFrameBgAlpha20
  'editor.rangeHighlightBackground': palette.special.highlight + '20', // Замена для editorRangeHighlightBgAlpha20
  'editor.selectionHighlightBackground': palette.special.highlight + '44', // Замена для editorSelectionHighlightBgAlpha44
  'editor.stackFrameHighlightBackground': palette.special.highlight + '20', // Замена для editorStackFrameBgAlpha20
  'editor.wordHighlightBackground': palette.special.highlight + '44', // Замена для editorWordHighlightBgAlpha44
  'editor.wordHighlightStrongBackground': palette.special.highlight + '55', // Замена для editorWordHighlightStrongBgAlpha55
  'editorOverviewRuler.rangeHighlightForeground':
    palette.special.highlight + '44', // Замена для overviewRulerRangeHighlightFgAlpha44
  'editorOverviewRuler.selectionHighlightForeground':
    palette.special.highlight + '30', // Замена для overviewRulerSelectionHighlightFgAlpha30
  'editorOverviewRuler.wordHighlightForeground':
    palette.special.highlight + '55', // Замена для overviewRulerWordHighlightFgAlpha55
  'editorOverviewRuler.wordHighlightStrongForeground':
    palette.special.highlight + '66', // Замена для overviewRulerWordHighlightStrongFgAlpha66
  'peekViewEditor.matchHighlightBackground': palette.primary + '40', // Замена для blueDarkAlpha40
  'peekViewResult.matchHighlightBackground': palette.selection + '66', // Замена для editorFindMatchBgAlpha66
}
