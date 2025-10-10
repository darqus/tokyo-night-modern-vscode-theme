import { palette } from '../palette'

/**
 * Editor UI элементы
 * Эти токены отвечают за оформление редактора кода в VS Code
 */
export const editorColors = {
  // Editor
  'editor.background': palette.background, // Фон редактора
  'editor.foreground': palette.foreground, // Цвет текста в редакторе
  'editor.selectionBackground': palette.selectionBlueAlpha33, // Фон выделенного текста
  'editor.inactiveSelectionBackground': palette.foregroundAlpha1f, // Фон неактивного выделения
  'editor.lineHighlightBackground': palette.foregroundAlpha1f, // Фон подсветки строки
  'editorLineNumber.foreground': palette.grayDark, // Цвет номеров строк
  'editorLineNumber.activeForeground': palette.grayEditorLineNumberActive, // Цвет активного номера строки
  'editorCursor.foreground': palette.foregroundAlt, // Цвет курсора
  'editorIndentGuide.background1': palette.border, // Фон направляющих отступов
  'editorIndentGuide.activeBackground1': palette.blue, // Фон активной направляющей отступа
  'editorStickyScroll.background': palette.backgroundAlt, // Фон закрепленной прокрутки
  'editorStickyScrollHover.background': palette.foregroundAlpha1f, // Фон закрепленной прокрутки при наведении
  'editor.placeholder.foreground': palette.foregroundInactive, // Цвет плейсхолдера
  'editor.foldPlaceholderForeground': palette.foregroundAlt, // Цвет плейсхолдера свернутого кода
}
