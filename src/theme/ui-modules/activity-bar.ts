import { palette } from '../palette/index'

/**
 * Activity Bar UI элементы
 * Эти токены отвечают за оформление панели активности в VS Code
 */
export const activityBarColors = {
  // Activity Bar
  'activityBar.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'activityBar.foreground': palette.blue,
  'activityBar.inactiveForeground': palette.textSecondary, // Замена для foregroundAlt
  'activityBar.activeBorder': palette.blue,
  'activityBar.activeBackground': palette.interactive.selected, // Замена для backgroundAlt7
  'activityBar.border': palette.backgrounds.secondary, // Замена для backgroundAlt
  'activityBar.dropBorder': palette.blue,
}
