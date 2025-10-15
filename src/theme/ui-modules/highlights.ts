import { palette } from '../palette/index'

/**
 * Highlights UI элементы
 * Эти токены отвечают за оформление подсветки в VS Code
 */
export const highlightColors = {
  'debugView.valueChangedHighlight': palette.primary + 'AA',
  'editor.findMatchHighlightBackground': palette.selection + '66',
  'editor.findRangeHighlightBackground': palette.special.highlight + '33',
  'editor.focusedStackFrameHighlightBackground':
    palette.special.highlight + '20',
  'editor.rangeHighlightBackground': palette.special.highlight + '20',
  'editor.selectionHighlightBackground': palette.special.highlight + '44',
  'editor.stackFrameHighlightBackground': palette.special.highlight + '20',
  'editor.wordHighlightBackground': palette.special.highlight + '44',
  'editor.wordHighlightStrongBackground': palette.special.highlight + '55',
  'editorOverviewRuler.rangeHighlightForeground':
    palette.special.highlight + '44',
  'editorOverviewRuler.selectionHighlightForeground':
    palette.special.highlight + '30',
  'editorOverviewRuler.wordHighlightForeground':
    palette.special.highlight + '55',
  'editorOverviewRuler.wordHighlightStrongForeground':
    palette.special.highlight + '66',
  'peekViewEditor.matchHighlightBackground': palette.primary + '40',
  'peekViewResult.matchHighlightBackground': palette.selection + '66',
}
