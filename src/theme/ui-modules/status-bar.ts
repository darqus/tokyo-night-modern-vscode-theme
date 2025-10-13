import { palette } from '../palette/index'

/**
 * Status Bar UI элементы
 * Эти токены отвечают за оформление строки состояния в VS Code
 */
export const statusBarColors = {
  'statusBar.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'statusBar.debuggingBackground': palette.warning, // Замена для orange
  'statusBar.debuggingForeground': palette.backgrounds.secondary, // Замена для backgroundAlt
  'statusBar.foreground': palette.textSecondary, // Замена для foregroundAlt
  'statusBar.noFolderBackground': palette.backgrounds.secondary, // Замена для backgroundAlt
  'statusBarItem.activeBackground': palette.interactive.active, // Замена для backgroundAlt
  'statusBarItem.compactHoverBackground': palette.interactive.hover + '90', // Замена для statusBarItemCompactHoverBgAlpha90
  'statusBarItem.hoverBackground': palette.interactive.hover + 'AA', // Замена для statusBarItemHoverBgAlphaAA
  'statusBarItem.hoverForeground': palette.blue,
  'statusBarItem.prominentBackground': palette.backgrounds.secondary, // Замена для backgroundAlt
  'statusBarItem.prominentHoverBackground': palette.interactive.hover, // Замена для statusBarItemProminentHoverBg
  'statusBarItem.remoteBackground': palette.backgrounds.secondary, // Замена для backgroundAlt
  'statusBarItem.remoteForeground': palette.blue,
  'statusBarItem.remoteHoverBackground': palette.backgrounds.secondary, // Замена для backgroundAlt
  'statusBarItem.remoteHoverForeground': palette.blue, // Замена для blueHover
}
