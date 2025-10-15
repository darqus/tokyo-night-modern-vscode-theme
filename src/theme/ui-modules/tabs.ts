import { palette } from '../palette/index'

/**
 * Tabs UI элементы
 * Эти токены отвечают за оформление вкладок в VS Code
 */
export const tabColors = {
  'tab.activeBackground': palette.backgrounds.secondary,
  'tab.activeBorder': palette.blue,
  'tab.activeForeground': palette.blue,
  'tab.border': palette.backgrounds.secondary,
  'tab.inactiveBackground': palette.backgrounds.secondary,
  'tab.inactiveForeground': palette.textSecondary,
  'tab.inactiveModifiedBorder': palette.backgrounds.secondary,
  'tab.lastPinnedBorder': palette.backgrounds.secondary,
  'tab.unfocusedActiveBorder': palette.backgrounds.secondary,
  'tab.unfocusedActiveForeground': palette.foreground,
  'tab.unfocusedHoverForeground': palette.foreground,
  'tab.unfocusedInactiveForeground': palette.textSecondary,
}
