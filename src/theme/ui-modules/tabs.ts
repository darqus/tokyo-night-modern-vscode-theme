import { palette } from '../palette/index'

/**
 * Tabs UI элементы
 * Эти токены отвечают за оформление вкладок в VS Code
 */
export const tabColors = {
  'tab.activeBackground': palette.backgrounds.secondary, // Замена для backgroundAlt
  'tab.activeBorder': palette.blue,
  'tab.activeForeground': palette.blue,
  'tab.border': palette.backgrounds.secondary, // Замена для backgroundAlt
  'tab.inactiveBackground': palette.backgrounds.secondary, // Замена для backgroundAlt
  'tab.inactiveForeground': palette.textSecondary, // Замена для foregroundAlt
  'tab.inactiveModifiedBorder': palette.backgrounds.secondary, // Замена для backgroundAlt
  'tab.lastPinnedBorder': palette.backgrounds.secondary, // Замена для backgroundAlt
  'tab.unfocusedActiveBorder': palette.backgrounds.secondary, // Замена для backgroundAlt
  'tab.unfocusedActiveForeground': palette.foreground,
  'tab.unfocusedHoverForeground': palette.foreground,
  'tab.unfocusedInactiveForeground': palette.textSecondary, // Замена для foregroundAlt
}
