import { palette } from '../palette'

/**
 * Lists UI элементы
 * Эти токены отвечают за оформление списков в VS Code
 */
export const listColors = {
  // Lists
  'list.activeSelectionBackground': palette.selectionBlueAlpha33, // Фон активного выделения в списке
  'list.activeSelectionForeground': palette.foreground, // Цвет текста активного выделения в списке
  'list.inactiveSelectionBackground': palette.foregroundAlpha1f, // Фон неактивного выделения в списке
  'list.inactiveSelectionForeground': palette.foreground, // Цвет текста неактивного выделения в списке
  'list.hoverBackground': palette.foregroundAlpha1f, // Фон элемента списка при наведении
  'list.hoverForeground': palette.foreground, // Цвет текста элемента списка при наведении
  'list.focusBackground': palette.selectionBlueAlpha33, // Фон элемента списка в фокусе
  'list.focusForeground': palette.foreground, // Цвет текста элемента списка в фокусе
  'list.highlightForeground': palette.blueAlt, // Цвет выделенного текста в списке
}
