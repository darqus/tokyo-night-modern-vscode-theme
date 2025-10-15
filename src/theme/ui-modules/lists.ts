import { palette } from '../palette/index'

/**
 * Lists UI элементы
 * Эти токены отвечают за оформление списков в VS Code
 */
export const listColors = {
  'list.activeSelectionBackground': palette.interactive.selected + '90',
  'list.activeSelectionForeground': palette.blue,
  'list.deemphasizedForeground': palette.text,
  'list.dropBackground': palette.blue + '20',
  'list.errorForeground': palette.error,
  'list.focusBackground': palette.interactive.hover,
  'list.focusForeground': palette.foreground,
  'list.highlightForeground': palette.blue,
  'list.hoverBackground': palette.interactive.hover + '60',
  'list.hoverForeground': palette.blue,
  'list.inactiveSelectionBackground': palette.interactive.selected,
  'list.inactiveSelectionForeground': palette.blue,
  'list.inactiveSelectionIconForeground': palette.blue,
  'list.invalidItemForeground': palette.error,
  'list.warningForeground': palette.warning,
}
