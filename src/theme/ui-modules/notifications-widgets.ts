import { palette } from '../palette/index'

/**
 * Notifications & Widgets UI элементы
 * Эти токены отвечают за оформление уведомлений и виджетов в VS Code
 */
export const notificationWidgetColors = {
  'debugExceptionWidget.background': palette.backgrounds.secondary,
  'debugExceptionWidget.border': palette.error,
  'notificationCenterHeader.background': palette.backgrounds.secondary,
  'notificationCenterHeader.foreground': palette.foreground,
  'notificationLink.foreground': palette.borders.subtle,
  'notifications.background': palette.backgrounds.secondary,
  'notifications.foreground': palette.foreground,
  'notificationsErrorIcon.foreground': palette.error,
  'notificationsInfoIcon.foreground': palette.info,
  'notificationsWarningIcon.foreground': palette.warning,
}
