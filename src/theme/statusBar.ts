import { palette } from '../palette'
import { withAlpha } from '../utils/color'

export const getStatusBarColors = () => ({
  // Строка состояния
  'statusBar.foreground': palette.fg.muted,
  'statusBar.background': palette.bg.sunken, // Более темный фон для лучшего контраста
  'statusBar.border': palette.line.border,
  // Состояния без папки/отладки/фокус
  'statusBar.noFolderBackground': palette.bg.sunken,
  'statusBar.noFolderForeground': palette.fg.muted,
  'statusBar.debuggingBackground': palette.bg.sunken,
  'statusBar.debuggingForeground': palette.fg.muted,
  'statusBar.debuggingBorder': palette.line.border,
  'statusBar.noFolderBorder': palette.line.border,
  'statusBar.focusBorder': palette.ui.sash.hover,
  'statusBarItem.activeBackground': palette.bg.active,
  'statusBarItem.hoverForeground': palette.fg.primary,
  'statusBarItem.hoverBackground': palette.ui.statusItem.hover,
  'statusBarItem.prominentBackground': palette.bg.overlay,
  'statusBarItem.prominentForeground': palette.fg.primary,
  'statusBarItem.prominentHoverBackground':
    palette.ui.statusItem.prominentHover,
  'statusBarItem.prominentHoverForeground': palette.fg.onSelection,
  // Remote индикатор
  'statusBarItem.remoteBackground': palette.brand.button.primary,
  'statusBarItem.remoteForeground': palette.fg.selectionText, // Белый текст для максимальной контрастности
  'statusBarItem.remoteHoverBackground': palette.brand.button.hover, // Более светлый при наведении
  'statusBarItem.remoteHoverForeground': palette.fg.selectionText, // Белый текст для максимальной контрастности
  // Ошибки/предупреждения
  'statusBarItem.errorBackground': palette.accent.red,
  'statusBarItem.errorForeground': palette.ui.semantic.white,
  'statusBarItem.errorHoverBackground': withAlpha(palette.accent.red, 'cc'),
  'statusBarItem.errorHoverForeground': palette.ui.semantic.white,
  'statusBarItem.warningBackground': palette.accent.yellow,
  'statusBarItem.warningForeground': palette.bg.base,
  'statusBarItem.warningHoverBackground': withAlpha(
    palette.accent.yellow,
    'cc'
  ),
  'statusBarItem.warningHoverForeground': palette.bg.base,
  // Прочее
  'statusBarItem.compactHoverBackground': palette.ui.statusItem.hover,
  'statusBarItem.focusBorder': palette.ui.sash.hover,
  'statusBarItem.offlineBackground': palette.ui.semantic.offline,
  'statusBarItem.offlineForeground': palette.ui.semantic.white,
  'statusBarItem.offlineHoverBackground': withAlpha(
    palette.ui.semantic.offline,
    'cc'
  ),
  'statusBarItem.offlineHoverForeground': palette.ui.semantic.white,
})
