import { getToken } from '../design-tokens'

/**
 * Activity Bar UI элементы
 * Эти токены отвечают за оформление панели активности в VS Code
 */
export const activityBarColors = {
  // Activity Bar
  'activityBar.background': getToken('color.background.primary'),
  'activityBar.foreground': getToken('accent.primary'),
  'activityBar.inactiveForeground': getToken('color.text.secondary'),
  'activityBar.activeBorder': getToken('accent.primary'),
  // 'activityBar.activeBackground': getToken('color.interactive.selected'),
  // 'activityBar.border': getToken('color.background.secondary'),
  'activityBar.dropBorder': getToken('accent.primary'),
}
