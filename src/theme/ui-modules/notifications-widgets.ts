import { palette } from '../palette/index'

/**
 * Notifications & Widgets UI элементы
 * Эти токены отвечают за оформление уведомлений и виджетов в VS Code
 */
export const notificationWidgetColors = {
  'debugExceptionWidget.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'debugExceptionWidget.border': palette.error, // Замена для redDark3
  'notificationCenterHeader.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'notificationCenterHeader.foreground': palette.foreground,
  'notificationLink.foreground': palette.borders.subtle, // Замена для borderAlt
  'notifications.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'notifications.foreground': palette.foreground,
  'notificationsErrorIcon.foreground': palette.error, // Замена для redDark2
  'notificationsInfoIcon.foreground': palette.info, // Замена для cyanDark3
  'notificationsWarningIcon.foreground': palette.warning, // Замена для purpleHover
  'widget.border': palette.borders.subtle + '40', // Замена для borderAltAlpha40
  'widget.shadow': palette.special.shadow + '80', // Замена для widgetShadowAlpha
}
