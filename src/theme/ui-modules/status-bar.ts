import { palette } from '../palette'

/**
 * Status Bar UI элементы
 * Эти токены отвечают за оформление строки состояния в VS Code
 */
export const statusBarColors = {
  'statusBar.background': palette.backgroundAlt,
  'statusBar.debuggingBackground': palette.orange,
  'statusBar.debuggingForeground': palette.backgroundAlt,
  'statusBar.foreground': palette.foregroundAlt,
  'statusBar.noFolderBackground': palette.backgroundAlt,
  'statusBarItem.activeBackground': palette.backgroundAlt,
  'statusBarItem.compactHoverBackground': palette.statusBarItemCompactHoverBgAlpha90,
  'statusBarItem.hoverBackground': palette.statusBarItemHoverBgAlphaAA,
  'statusBarItem.hoverForeground': palette.blue,
  'statusBarItem.prominentBackground': palette.backgroundAlt,
  'statusBarItem.prominentHoverBackground': palette.statusBarItemProminentHoverBg,
  'statusBarItem.remoteBackground': palette.backgroundAlt,
  'statusBarItem.remoteForeground': palette.blue,
  'statusBarItem.remoteHoverBackground': palette.backgroundAlt,
  'statusBarItem.remoteHoverForeground': palette.blueHover,
}
