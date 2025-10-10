import { palette } from '../palette'

/**
 * Scrollbar & Minimap UI элементы
 * Эти токены отвечают за оформление полосы прокрутки и миникарты в VS Code
 */
export const scrollbarMinimapColors = {
  // Scrollbar & Minimap
  'scrollbar.shadow': palette.grayScrollbar, // Тень полосы прокрутки
  'scrollbarSlider.background': palette.foregroundAlpha1f, // Фон ползунка полосы прокрутки
  'scrollbarSlider.hoverBackground': palette.selectionAlpha29, // Фон ползунка полосы прокрутки при наведении
  'scrollbarSlider.activeBackground': palette.selectionAlpha33, // Фон активного ползунка полосы прокрутки
  'editor.rangeHighlightBackground': palette.foregroundAlpha1f, // Фон подсветки диапазона в редакторе
  'editorOverviewRuler.findMatchForeground': palette.blueAltAlpha00, // Цвет линейки поиска совпадений в обзорной линейке редактора
  'editorOverviewRuler.selectionHighlightForeground': palette.blueAltAlpha00, // Цвет линейки подсветки выделения в обзорной линейке редактора
  'editorOverviewRuler.rangeHighlightForeground': palette.blueAlphaCC, // Цвет линейки подсветки диапазона в обзорной линейке редактора
  'editorOverviewRuler.wordHighlightForeground': palette.foregroundAlpha1f, // Цвет линейки подсветки слова в обзорной линейке редактора
  'editorOverviewRuler.wordHighlightStrongForeground': palette.selectionAlpha33, // Цвет линейки сильной подсветки слова в обзорной линейке редактора
  'minimap.findMatchHighlight': palette.purpleAlpha80, // Подсветка совпадений поиска в миникарте
  'minimap.selectionHighlight': palette.selectionAlpha33, // Подсветка выделения в миникарте
}
