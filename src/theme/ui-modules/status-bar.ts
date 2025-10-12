import { palette } from '../palette'

/**
 * Status Bar UI элементы
 * Эти токены отвечают за оформление строки состояния в VS Code
 */
export const statusBarColors = {
  // Status Bar
  'statusBar.background': palette.statusBarBackground, // Фон строки состояния
  'statusBar.foreground': palette.statusBarForeground, // Цвет текста в строке состояния
  'statusBar.border': palette.statusBarBorder, // Граница строки состояния
  'statusBar.noFolderBackground': palette.statusBarNoFolderBackground, // Фон строки состояния без папки
  'statusBar.debuggingBackground': palette.statusBarDebuggingBackground, // Фон строки состояния при отладке
  'statusBar.debuggingForeground': palette.statusBarDebuggingForeground, // Цвет текста строки состояния при отладке
  'statusBarItem.remoteBackground': palette.blueStrong, // Фон удаленного элемента строки состояния
  'statusBarItem.remoteForeground': palette.white, // Цвет текста удаленного элемента строки состояния
  'statusBarItem.remoteHoverBackground': palette.blueHover, // Фон удаленного элемента при наведении
  'statusBarItem.remoteHoverForeground': palette.white, // Цвет текста удаленного элемента при наведении
  'statusBarItem.hoverBackground': palette.statusBarItemHoverBackground, // Фон элемента строки состояния при наведении
  'statusBarItem.hoverForeground': palette.statusBarItemHoverForeground, // Цвет текста элемента строки состояния при наведении
  'statusBarItem.compactHoverBackground': palette.statusBarItemHoverBackground, // Фон компактного элемента при наведении
  'statusBarItem.activeBackground': palette.statusBarItemActiveBackground, // Фон активного элемента строки состояния
  'statusBarItem.focusBorder': palette.blue, // Граница фокуса элемента строки состояния
  'statusBar.focusBorder': palette.blue, // Граница фокуса строки состояния
  'statusBarItem.prominentBackground': palette.statusBarItemProminentBackground, // Фон выделенного элемента строки состояния
  'statusBarItem.prominentForeground': palette.statusBarItemProminentForeground, // Цвет текста выделенного элемента строки состояния
  'statusBarItem.prominentHoverBackground':
    palette.statusBarItemProminentHoverBackground, // Фон выделенного элемента при наведении
  'statusBarItem.prominentHoverForeground':
    palette.statusBarItemProminentHoverForeground, // Цвет текста выделенного элемента при наведении
}
