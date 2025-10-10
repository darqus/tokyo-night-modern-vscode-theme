import { palette } from '../palette'

/**
 * Status Bar UI элементы
 * Эти токены отвечают за оформление строки состояния в VS Code
 */
export const statusBarColors = {
  // Status Bar
  'statusBar.background': palette.backgroundAlt, // Фон строки состояния
  'statusBar.foreground': palette.foregroundAlt, // Цвет текста в строке состояния
  'statusBar.border': palette.border, // Граница строки состояния
  'statusBarItem.remoteBackground': palette.blueStrong, // Фон удаленного элемента строки состояния
  'statusBarItem.remoteForeground': palette.white, // Цвет текста удаленного элемента строки состояния
  'statusBarItem.remoteHoverBackground': palette.blueHover, // Фон удаленного элемента при наведении
  'statusBarItem.remoteHoverForeground': palette.white, // Цвет текста удаленного элемента при наведении
  'statusBarItem.hoverBackground': palette.foregroundAlpha1f, // Фон элемента строки состояния при наведении
  'statusBarItem.hoverForeground': palette.foreground, // Цвет текста элемента строки состояния при наведении
  'statusBarItem.compactHoverBackground': palette.foregroundAlpha1f, // Фон компактного элемента при наведении
  'statusBarItem.activeBackground': palette.blueAlpha33, // Фон активного элемента строки состояния
  'statusBarItem.focusBorder': palette.blue, // Граница фокуса элемента строки состояния
  'statusBar.focusBorder': palette.blue, // Граница фокуса строки состояния
  'statusBarItem.prominentBackground': palette.blueStrong, // Фон выделенного элемента строки состояния
  'statusBarItem.prominentForeground': palette.white, // Цвет текста выделенного элемента строки состояния
  'statusBarItem.prominentHoverBackground': palette.blueHover, // Фон выделенного элемента при наведении
  'statusBarItem.prominentHoverForeground': palette.white, // Цвет текста выделенного элемента при наведении
}
