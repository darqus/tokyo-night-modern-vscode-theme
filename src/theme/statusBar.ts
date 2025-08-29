import { palette, core } from '../palette'

export const getStatusBarColors = () => ({
  // Строка состояния
  'statusBar.foreground': palette.fg.muted,
  'statusBar.background': palette.bg.hover, // Основной фон
  'statusBar.border': palette.line.border,
  // Состояния без папки/отладки/фокус
  'statusBar.noFolderBackground': palette.bg.overlay,
  'statusBar.noFolderForeground': palette.fg.muted,
  'statusBar.debuggingBackground': palette.bg.overlay,
  'statusBar.debuggingForeground': palette.fg.muted,
  'statusBar.debuggingBorder': palette.line.border,
  'statusBar.noFolderBorder': palette.line.border,
  'statusBar.focusBorder': palette.ui.sash.hover,
  'statusBarItem.activeBackground': palette.bg.active,
  'statusBarItem.hoverForeground': palette.fg.primary,
  'statusBarItem.hoverBackground': core.tokens.statusBarItemHoverBackground,
  'statusBarItem.prominentBackground': palette.bg.overlay,
  'statusBarItem.prominentForeground': palette.fg.primary,
  'statusBarItem.prominentHoverBackground':
    core.tokens.statusBarItemProminentHoverBackground,
  'statusBarItem.prominentHoverForeground': palette.fg.onSelection,
  // Remote индикатор
  'statusBarItem.remoteBackground': palette.brand.button.primary,
  'statusBarItem.remoteForeground': palette.fg.selectionText, // Белый текст для максимальной контрастности
  'statusBarItem.remoteHoverBackground': palette.brand.button.hover, // Более светлый при наведении
  'statusBarItem.remoteHoverForeground': palette.fg.selectionText, // Белый текст для максимальной контрастности
  // Ошибки/предупреждения
  'statusBarItem.errorBackground': palette.accent.red,
  'statusBarItem.errorForeground': palette.ui.semantic.white,
  'statusBarItem.errorHoverBackground':
    core.tokens.statusBarItemErrorHoverBackground,
  'statusBarItem.errorHoverForeground': palette.ui.semantic.white,
  'statusBarItem.warningBackground': palette.accent.yellow,
  'statusBarItem.warningForeground': palette.bg.base,
  'statusBarItem.warningHoverBackground':
    core.tokens.statusBarItemWarningHoverBackground,
  'statusBarItem.warningHoverForeground': palette.bg.base,
  // Прочее
  'statusBarItem.compactHoverBackground':
    core.tokens.statusBarItemCompactHoverBackground,
  'statusBarItem.focusBorder': palette.ui.sash.hover,
  'statusBarItem.offlineBackground': palette.ui.semantic.offline,
  'statusBarItem.offlineForeground': palette.ui.semantic.white,
  'statusBarItem.offlineHoverBackground':
    core.tokens.statusBarItemOfflineHoverBackground,
  'statusBarItem.offlineHoverForeground': palette.ui.semantic.white,
})
