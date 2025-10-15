import { palette } from '../palette/index'

/**
 * Peek View UI элементы
 * Эти токены отвечают за оформление режима просмотра (peek view) в VS Code
 */
export const peekViewColors = {
  'peekView.border': palette.borders.subtle + '40',
  'peekViewEditor.background': palette.backgrounds.secondary,
  'peekViewEditor.matchHighlightBackground': palette.primary + '40',
  'peekViewResult.background': palette.backgrounds.secondary,
  'peekViewResult.fileForeground': palette.foreground,
  'peekViewResult.lineForeground': palette.blue,
  'peekViewResult.matchHighlightBackground': palette.selection + '66',
  'peekViewResult.selectionBackground': palette.selection + '40',
  'peekViewResult.selectionForeground': palette.foreground,
  'peekViewTitle.background': palette.backgrounds.secondary,
  'peekViewTitleDescription.foreground': palette.foreground,
  'peekViewTitleLabel.foreground': palette.blue,
}
