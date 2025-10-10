import { palette } from '../palette'

/**
 * Peek View UI элементы
 * Эти токены отвечают за оформление режима просмотра (peek view) в VS Code
 */
export const peekViewColors = {
  // Peek View
  'peekViewEditor.background': palette.backgroundAlt, // Фон редактора в режиме просмотра
  'peekViewResult.background': palette.backgroundAlt, // Фон результата в режиме просмотра
  'peekViewTitle.background': palette.backgroundPanel, // Фон заголовка в режиме просмотра
  'peekViewEditor.matchHighlightBackground': palette.blueAlpha2e, // Фон подсветки совпадений в редакторе просмотра
  'peekViewResult.matchHighlightBackground': palette.blueAlpha2e, // Фон подсветки совпадений в результате просмотра
  'peekViewResult.selectionBackground': palette.blueAlpha33, // Фон выделения в результате просмотра
}
