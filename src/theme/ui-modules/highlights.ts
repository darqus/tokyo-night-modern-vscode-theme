import { palette } from '../palette'

/**
 * Highlights UI элементы
 * Эти токены отвечают за оформление подсветки в VS Code
 */
export const highlightColors = {
  'debugView.valueChangedHighlight': palette.blueDarkAlphaAA,
  'editor.findMatchHighlightBackground': palette.editorFindMatchBgAlpha66,
  'editor.findRangeHighlightBackground':
    palette.editorFindRangeHighlightBgAlpha33,
  'editor.focusedStackFrameHighlightBackground':
    palette.editorFocusedStackFrameBgAlpha20,
  'editor.rangeHighlightBackground': palette.editorRangeHighlightBgAlpha20,
  'editor.selectionHighlightBackground':
    palette.editorSelectionHighlightBgAlpha44,
  'editor.stackFrameHighlightBackground': palette.editorStackFrameBgAlpha20,
  'editor.wordHighlightBackground': palette.editorWordHighlightBgAlpha44,
  'editor.wordHighlightStrongBackground':
    palette.editorWordHighlightStrongBgAlpha55,
  'editorOverviewRuler.rangeHighlightForeground':
    palette.overviewRulerRangeHighlightFgAlpha44,
  'editorOverviewRuler.selectionHighlightForeground':
    palette.overviewRulerSelectionHighlightFgAlpha30,
  'editorOverviewRuler.wordHighlightForeground':
    palette.overviewRulerWordHighlightFgAlpha55,
  'editorOverviewRuler.wordHighlightStrongForeground':
    palette.overviewRulerWordHighlightStrongFgAlpha66,
  'peekViewEditor.matchHighlightBackground': palette.blueDarkAlpha40,
  'peekViewResult.matchHighlightBackground': palette.editorFindMatchBgAlpha66,
}
