import { palette } from '../palette'

export const getActivityBarColors = () => ({
  // Панель действий (Activity Bar)
  'activityBar.background': palette.bg.base, // Фон панели действий
  'activityBar.foreground': palette.fg.muted, // Цвет иконок в панели действий
  'activityBar.activeBorder': palette.accent.blue, // Граница активной иконки
  'activityBar.activeBackground': palette.bg.hover, // Фон активной иконки
  'activityBar.inactiveForeground': palette.fg.inactive, // Цвет неактивных иконок
  'activityBar.border': palette.line.border, // Граница панели действий
  'activityBar.hoverBackground': palette.bg.hover, // Фон при наведении на иконку
  'activityBar.hoverForeground': palette.fg.onSelection, // Цвет иконки при наведении

  // Значки уведомлений на иконках
  'activityBarBadge.background': palette.ui.badge.base, // Фон значка уведомления
  'activityBarBadge.foreground': palette.ui.badge.fg, // Текст значка уведомления

  // Специальные значки для предупреждений и ошибок
  'activityWarningBadge.foreground': palette.bg.base, // Текст значка предупреждения
  'activityWarningBadge.background': palette.token.warning, // Фон значка предупреждения
  'activityErrorBadge.foreground': palette.bg.base, // Текст значка ошибки
  'activityErrorBadge.background': palette.token.error, // Фон значка ошибки

  // Панель действий в верхней позиции (Activity Bar: Top)
  'activityBarTop.background': palette.bg.base, // Фон верхней панели действий
  'activityBarTop.foreground': palette.fg.muted, // Цвет иконок в верхней панели
  'activityBarTop.activeBackground': palette.bg.hover, // Фон активной иконки в верхней панели
  'activityBarTop.hoverBackground': palette.bg.hover, // Фон при наведении в верхней панели
  'activityBarTop.hoverForeground': palette.fg.onSelection, // Цвет иконки при наведении в верхней панели
})
