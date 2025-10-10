import { palette } from '../palette'

/**
 * Activity Bar UI элементы
 * Эти токены отвечают за оформление панели активности в VS Code
 */
export const activityBarColors = {
  // Activity Bar
  'activityBar.background': palette.backgroundAlt, // Фон панели активности
  'activityBar.foreground': palette.foregroundAlt, // Цвет иконок на панели активности
  'activityBar.inactiveForeground': palette.activityBarInactive, // Цвет неактивных иконок на панели активности
  'activityBar.activeBorder': palette.blue, // Граница активного элемента на панели активности
  'activityBar.activeBackground': palette.background, // Фон активного элемента на панели активности
  'activityBar.activeFocusBorder': palette.blue, // Граница фокуса активного элемента на панели активности
  'activityBar.border': palette.border, // Граница панели активности
  'activityBar.dropBorder': palette.blue, // Граница при перетаскивании на панель активности
}
