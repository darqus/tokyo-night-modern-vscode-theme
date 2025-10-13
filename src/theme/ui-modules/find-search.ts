import { palette } from '../palette/index'

/**
 * Find & Search UI элементы
 * Эти токены отвечают за оформление элементов поиска в VS Code
 */
export const findSearchColors = {
  'editor.findMatchBackground': palette.selection + '66', // Замена для editorFindMatchBgAlpha66
  'editor.findMatchHighlightBackground': palette.selection + '66', // Замена для editorFindMatchBgAlpha66
  'editorOverviewRuler.findMatchForeground': palette.selection + '44', // Замена для overviewRulerFindMatchFgAlpha44
  'listFilterWidget.background': palette.backgrounds.elevated, // Замена для listFilterWidgetBackground
  'listFilterWidget.noMatchesOutline': palette.error, // Замена для redDark7
  'listFilterWidget.outline': palette.border,
  'terminal.findMatchBorder': palette.border,
  'terminal.findMatchHighlightBorder': palette.border,
}
