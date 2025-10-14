import { palette } from '../palette/index'

/**
 * Find & Search UI элементы
 * Эти токены отвечают за оформление элементов поиска в VS Code
 */
export const findSearchColors = {
  'editor.findMatchBackground': palette.selection + '66',
  'editor.findMatchHighlightBackground': palette.selection + '66',
  'editorOverviewRuler.findMatchForeground': palette.selection + '44',
  'listFilterWidget.background': palette.backgrounds.elevated,
  'listFilterWidget.noMatchesOutline': palette.error,
  'listFilterWidget.outline': palette.border,
  'terminal.findMatchBorder': palette.border,
  'terminal.findMatchHighlightBorder': palette.border,
}
