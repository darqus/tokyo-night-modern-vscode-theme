import { palette } from '../palette'

/**
 * Peek View UI элементы
 * Эти токены отвечают за оформление режима просмотра (peek view) в VS Code
 */
export const peekViewColors = {
  'peekView.border': palette.borderAlpha40,
  'peekViewEditor.background': palette.backgroundAlt,
  'peekViewEditor.matchHighlightBackground': palette.blueDarkAlpha40,
  'peekViewResult.background': palette.backgroundAlt,
  'peekViewResult.fileForeground': palette.foreground,
  'peekViewResult.lineForeground': palette.blue,
  'peekViewResult.matchHighlightBackground': palette.editorFindMatchBgAlpha66,
  'peekViewResult.selectionBackground': palette.peekViewResultSelectionBgAlpha40,
  'peekViewResult.selectionForeground': palette.foreground,
  'peekViewTitle.background': palette.backgroundAlt,
  'peekViewTitleDescription.foreground': palette.foreground,
  'peekViewTitleLabel.foreground': palette.blue,
}
