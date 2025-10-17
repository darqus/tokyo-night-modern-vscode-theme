import { getToken } from '../design-tokens'

/**
 * Notifications & Widgets UI элементы
 * Эти токены отвечают за оформление уведомлений и виджетов в VS Code
 */
export const notificationWidgetColors = {
  'debugExceptionWidget.background': getToken('color.background.primary'),
  'debugExceptionWidget.border': getToken('color.status.error'),
  'notificationCenterHeader.background': getToken('color.background.primary'),
  'notificationCenterHeader.foreground': getToken('color.text.primary'),
  'notificationLink.foreground': getToken('color.text.secondary'),
  'notifications.background': getToken('color.background.primary'),
  'notifications.foreground': getToken('color.text.primary'),
  'notificationsErrorIcon.foreground': getToken('color.status.error'),
  'notificationsInfoIcon.foreground': getToken('color.status.info'),
  'notificationsWarningIcon.foreground': getToken('color.status.warning'),
}
