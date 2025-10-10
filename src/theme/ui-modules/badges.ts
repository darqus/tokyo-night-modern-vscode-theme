import { palette } from '../palette'

/**
 * Badges UI элементы
 * Эти токены отвечают за оформление значков (badges) в VS Code
 */
export const badgeColors = {
  // Badges
  'badge.background': palette.badgeBlue, // Фон значка
  'badge.foreground': palette.white, // Цвет текста значка
  'activityBarBadge.background': palette.badgeBlue, // Фон значка на панели активности
  'activityBarBadge.foreground': palette.white, // Цвет текста значка на панели активности
  'activityWarningBadge.background': palette.badgeYellow, // Фон предупреждающего значка на панели активности
  'activityWarningBadge.foreground': palette.background, // Цвет текста предупреждающего значка на панели активности
  'activityErrorBadge.background': palette.badgeRed, // Фон значка ошибки на панели активности
  'activityErrorBadge.foreground': palette.background, // Цвет текста значка ошибки на панели активности
  'extensionBadge.remoteBackground': palette.badgeBlue, // Фон значка удаленного расширения
  'extensionBadge.remoteForeground': palette.white, // Цвет текста значка удаленного расширения
}
