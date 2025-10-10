import { palette } from '../palette'

/**
 * Highlights UI элементы
 * Эти токены отвечают за оформление подсветки в VS Code
 */
export const highlightColors = {
  // Highlights
  'editor.wordHighlightBackground': palette.foregroundAlpha1f, // Фон подсветки слова
  'editor.wordHighlightStrongBackground': palette.selectionBlueAlpha33, // Фон сильной подсветки слова
  'editor.hoverHighlightBackground': palette.foregroundAlpha1f, // Фон подсветки при наведении
  'editor.selectionHighlightBackground': palette.purpleAlpha40, // Фон подсветки выделения
  'editor.selectionHighlightBorder': palette.blueAltAlpha00, // Граница подсветки выделения
}
