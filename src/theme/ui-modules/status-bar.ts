import { getToken } from '../design-tokens'

/**
 * Status Bar UI элементы
 * Эти токены отвечают за оформление строки состояния в VS Code
 */
export const statusBarColors = {
  'statusBar.background': getToken('color.background.primary'),
  'statusBar.debuggingBackground': getToken('accent.warning'),
  'statusBar.debuggingForeground': getToken('color.background.secondary'),
  'statusBar.foreground': getToken('color.text.secondary'),
  'statusBar.noFolderBackground': getToken('color.background.secondary'),
  'statusBarItem.activeBackground': getToken('color.interactive.active'),
  'statusBarItem.compactHoverBackground': `${getToken('color.background.elevated')}90`,
  'statusBarItem.hoverBackground': `${getToken('color.background.elevated')}AA`,
  'statusBarItem.hoverForeground': getToken('accent.primary'),
  'statusBarItem.prominentBackground': getToken('color.background.secondary'),
  'statusBarItem.prominentHoverBackground': getToken('color.interactive.hover'),
  'statusBarItem.remoteBackground': getToken('color.background.secondary'),
  'statusBarItem.remoteForeground': getToken('accent.primary'),
  'statusBarItem.remoteHoverBackground': getToken('color.background.secondary'),
  'statusBarItem.remoteHoverForeground': getToken('accent.primary'),
}
