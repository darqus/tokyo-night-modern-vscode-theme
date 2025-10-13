import { palette } from '../palette/index'

/**
 * Lists UI элементы
 * Эти токены отвечают за оформление списков в VS Code
 */
export const listColors = {
  'list.activeSelectionBackground': palette.interactive.selected + '90', // Замена для listActiveSelectionBgAlpha90
  'list.activeSelectionForeground': palette.blue,
  'list.deemphasizedForeground': palette.text, // Замена для foregroundAlt3
  'list.dropBackground': palette.blue + '20', // Замена для blueDarkAlpha20
  'list.errorForeground': palette.error, // Замена для redDark2
  'list.focusBackground': palette.interactive.hover, // Замена для listFocusBg
  'list.focusForeground': palette.foreground,
  'list.highlightForeground': palette.blue, // Замена для blueDark4
  'list.hoverBackground': palette.interactive.hover + '60', // Замена для listHoverBgAlpha60
  'list.hoverForeground': palette.blue,
  'list.inactiveSelectionBackground': palette.interactive.selected, // Замена для listInactiveSelectionBg
  'list.inactiveSelectionForeground': palette.blue,
  'list.inactiveSelectionIconForeground': palette.blue,
  'list.invalidItemForeground': palette.error, // Замена для orangeDark3
  'list.warningForeground': palette.warning, // Замена для yellowDark
}
