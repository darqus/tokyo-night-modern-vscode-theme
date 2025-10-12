import { palette } from '../palette'

/**
 * Editor UI элементы
 * Эти токены отвечают за оформление редактора кода в VS Code
 */
export const editorColors = {
  // Editor
  'editor.background': palette.background, // Фон редактора
  'editor.foreground': palette.foreground, // Цвет текста в редакторе
  'editor.selectionBackground': palette.selection, // Фон выделенного текста
  'editor.inactiveSelectionBackground': palette.backgroundAlpha00, // Фон неактивного выделения
  'editor.lineHighlightBackground': palette.backgroundAlt, // Фон подсветки строки
  'editorLineNumber.foreground': palette.grayDark, // Цвет номеров строк
  'editorLineNumber.activeForeground': palette.foreground, // Цвет активного номера строки
  'editorCursor.foreground': palette.foreground, // Цвет курсора
  'editorIndentGuide.background1': palette.backgroundAlt, // Фон направляющих отступов
  'editorIndentGuide.activeBackground1': palette.border, // Фон активной направляющей отступа
  'editorStickyScroll.background': palette.backgroundAlt, // Фон закрепленной прокрутки
  'editorStickyScrollHover.background': palette.foregroundAlpha1f, // Фон закрепленной прокрутки при наведении
  'editor.placeholder.foreground': palette.foregroundInactive, // Цвет плейсхолдера
  'editor.foldPlaceholderForeground': palette.foregroundAlt, // Цвет плейсхолдера свернутого кода
}
