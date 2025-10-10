import { palette } from '../palette'

/**
 * Toolbar & Debug UI элементы
 * Эти токены отвечают за оформление панели инструментов и отладки в VS Code
 */
export const toolbarDebugColors = {
  // Toolbar & Debug
  'toolbar.hoverBackground': palette.foregroundAlpha1f, // Фон панели инструментов при наведении
  'toolbar.activeBackground': palette.blueAlpha33, // Фон активной кнопки на панели инструментов
  'toolbar.hoverOutline': palette.backgroundAlpha00, // Обводка панели инструментов при наведении (прозрачная)
  'debugToolBar.background': palette.backgroundPanel, // Фон панели отладки
  'debugToolBar.border': palette.blueAlpha66, // Граница панели отладки
  'debugExceptionWidget.background': palette.backgroundPanel, // Фон виджета исключений отладки
  'debugExceptionWidget.border': palette.grayWidgetBorder, // Граница виджета исключений отладки
  'editor.stackFrameHighlightBackground': palette.foregroundAlpha1f, // Фон подсветки стека вызовов в редакторе
  'editor.focusedStackFrameHighlightBackground': palette.selectionAlpha33, // Фон подсветки фокусированного стека вызовов в редакторе
  'debugIcon.breakpointForeground': palette.red, // Цвет иконки точки останова
  'debugIcon.breakpointDisabledForeground': palette.redAlpha80, // Цвет отключенной иконки точки останова
  'debugIcon.breakpointUnverifiedForeground': palette.yellow, // Цвет непроверенной иконки точки останова
  'debugIcon.breakpointCurrentStackframeForeground': palette.blue, // Цвет иконки текущего стека вызовов точки останова
  'debugIcon.breakpointStackframeForeground': palette.blueAlphab3, // Цвет иконки стека вызовов точки останова
}
