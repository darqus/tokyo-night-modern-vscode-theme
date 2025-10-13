import { palette } from '../palette/index'

/**
 * Notifications & Widgets UI элементы
 * Эти токены отвечают за оформление уведомлений и виджетов в VS Code
 */
export const notificationWidgetColors = {
  'debugExceptionWidget.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'debugExceptionWidget.border': palette.error, // Замена для redDark3
  'editorHoverWidget.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'editorHoverWidget.border': palette.borders.subtle + '40', // Замена для borderAltAlpha40
  'editorSuggestWidget.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'editorSuggestWidget.border': palette.borders.subtle + '40', // Замена для borderAltAlpha40
  'editorSuggestWidget.foreground': palette.foreground,
  'editorSuggestWidget.highlightForeground': palette.borders.subtle, // Замена для borderAlt
  'editorSuggestWidget.selectedBackground': palette.interactive.selected, // Замена для backgroundAlt6
  'editorWidget.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'editorWidget.resizeBorder': palette.special.highlight + '33', // Замена для editorWordHighlightBgAlpha33
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
