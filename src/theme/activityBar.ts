import { palette } from '../palette'

export const getActivityBarColors = () => ({
  // Панель действий
  'activityBar.background': palette.bg.base,
  'activityBar.foreground': palette.fg.muted, // Улучшенная контрастность: WCAG AA 4.5:1+
  'activityBar.activeBorder': palette.ui.badge.base, // Используем цвет бейджа для активной границы
  'activityBar.activeBackground': palette.bg.hover, // Более яркий фон для активного элемента
  'activityBar.inactiveForeground': palette.fg.muted, // Улучшенная контрастность для неактивных иконок
  'activityBar.border': palette.line.border,
  'activityBarBadge.background': palette.ui.badge.base, // Используем цвет бейджа
  'activityBarBadge.foreground': palette.ui.badge.fg, // Белый текст для максимальной контрастности
  // Добавляем цвета для предупреждений и ошибок в Activity Bar
  'activityWarningBadge.foreground': palette.bg.base,
  'activityWarningBadge.background': palette.accent.yellow,
  'activityErrorBadge.foreground': palette.bg.base,
  'activityErrorBadge.background': palette.accent.red,
  // Вариант Activity Bar сверху (Activity Bar: Top)
  'activityBarTop.background': palette.bg.base,
  'activityBarTop.foreground': palette.fg.muted, // Улучшенная контрастность
  'activityBarTop.activeBackground': palette.bg.hover, // Более яркий фон для активного элемента в верхней панели
})
