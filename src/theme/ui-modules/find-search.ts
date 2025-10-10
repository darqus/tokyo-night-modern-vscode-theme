import { palette } from '../palette'

/**
 * Find & Search UI элементы
 * Эти токены отвечают за оформление элементов поиска в VS Code
 */
export const findSearchColors = {
  // Find & Search
  'list.filterMatchBackground': palette.purpleAlpha40, // Фон совпадения фильтра в списке
  'list.filterMatchBorder': palette.blueAltAlpha0, // Граница совпадения фильтра в списке
  'searchEditor.findMatchBackground': palette.purpleAlpha40, // Фон совпадения поиска в редакторе поиска
  'searchEditor.findMatchBorder': palette.blueAltAlpha00, // Граница совпадения поиска в редакторе поиска
  'editor.findMatchBackground': palette.purpleAlpha33, // Фон совпадения поиска в редакторе
  'editor.findMatchBorder': palette.blueAltAlpha00, // Граница совпадения поиска в редакторе
  'editor.findMatchHighlightBackground': palette.purpleAlpha40, // Фон подсветки совпадения поиска в редакторе
  'editor.findMatchForeground': palette.foreground, // Цвет текста совпадения поиска в редакторе
  'terminal.findMatchBackground': palette.purpleAlpha33, // Фон совпадения поиска в терминале
  'terminal.findMatchBorder': palette.blueAltAlpha00, // Граница совпадения поиска в терминале
  'terminal.findMatchHighlightBackground': palette.purpleAlpha40, // Фон подсветки совпадения поиска в терминале
}
