import { palette } from '../palette'

/**
 * Tabs UI элементы
 * Эти токены отвечают за оформление вкладок в VS Code
 */
export const tabColors = {
  // Tabs
  'tab.activeBackground': palette.background, // Фон активной вкладки
  'tab.activeForeground': palette.foreground, // Цвет текста активной вкладки
  'tab.activeBorderTop': palette.blue, // Верхняя граница активной вкладки
  'tab.inactiveBackground': palette.backgroundAlt, // Фон неактивной вкладки
  'tab.inactiveForeground': palette.foregroundAlt, // Цвет текста неактивной вкладки
  'tab.hoverBackground': palette.foregroundAlpha1f, // Фон вкладки при наведении
  'tab.hoverForeground': palette.foreground, // Цвет текста вкладки при наведении
  'tab.border': palette.border, // Граница вкладки
  'tab.lastPinnedBorder': palette.borderAlt, // Граница последней закрепленной вкладки
  'tab.unfocusedActiveBackground': palette.backgroundAlphaCC, // Фон неактивной активной вкладки
  'tab.unfocusedActiveForeground': palette.foregroundAlphaCC, // Цвет текста неактивной активной вкладки
  'tab.unfocusedInactiveForeground': palette.foregroundAltAlpha99, // Цвет текста неактивной неактивной вкладки
}
