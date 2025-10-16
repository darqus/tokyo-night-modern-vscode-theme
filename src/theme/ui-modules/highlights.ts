import { foundationColors } from '../palette/foundation/colors'
import { opacityLevels } from '../palette/foundation/opacity'

/**
 * Highlights UI элементы
 * Эти токены отвечают за оформление подсветки в VS Code
 */
export const highlightColors = {
  'debugView.valueChangedHighlight': foundationColors.blue500 + 'AA',
  'editor.findMatchHighlightBackground': foundationColors.blue500 + '66',
  'editor.findRangeHighlightBackground': foundationColors.blue500 + '33',
  'editor.focusedStackFrameHighlightBackground':
    foundationColors.blue500 + '20',
  'editor.rangeHighlightBackground': foundationColors.blue500 + '20',
  'editor.selectionHighlightBackground': foundationColors.blue500 + '44',
  'editor.stackFrameHighlightBackground': foundationColors.blue500 + '20',
  'editor.wordHighlightBackground': foundationColors.blue500 + '44',
  'editor.wordHighlightStrongBackground': foundationColors.blue500 + '55',
  'editorOverviewRuler.rangeHighlightForeground':
    foundationColors.blue500 + '44',
  'editorOverviewRuler.selectionHighlightForeground':
    foundationColors.blue500 + '30',
  'editorOverviewRuler.wordHighlightForeground':
    foundationColors.blue500 + '55',
  'editorOverviewRuler.wordHighlightStrongForeground':
    foundationColors.blue500 + '66',
  'peekViewEditor.matchHighlightBackground':
    foundationColors.blue500 + opacityLevels.medium,
  'peekViewResult.matchHighlightBackground': foundationColors.blue500 + '66',
}
