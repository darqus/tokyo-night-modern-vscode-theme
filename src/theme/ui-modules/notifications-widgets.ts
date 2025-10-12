import { palette } from '../palette';

/**
 * Notifications & Widgets UI элементы
 * Эти токены отвечают за оформление уведомлений и виджетов в VS Code
 */
export const notificationWidgetColors = {
  'debugExceptionWidget.background': palette.backgroundAlt,
  'debugExceptionWidget.border': palette.redDark3,
  'editorHoverWidget.background': palette.backgroundAlt,
  'editorHoverWidget.border': palette.borderAltAlpha40,
  'editorSuggestWidget.background': palette.backgroundAlt,
  'editorSuggestWidget.border': palette.borderAltAlpha40,
  'editorSuggestWidget.foreground': palette.foreground,
  'editorSuggestWidget.highlightForeground': palette.borderAlt,
  'editorSuggestWidget.selectedBackground': palette.backgroundAlt6,
  'editorWidget.background': palette.backgroundAlt,
  'editorWidget.resizeBorder': palette.editorWordHighlightBgAlpha33,
  'notificationCenterHeader.background': palette.backgroundAlt,
  'notificationCenterHeader.foreground': palette.foreground,
  'notificationLink.foreground': palette.borderAlt,
  'notifications.background': palette.backgroundAlt,
  'notifications.foreground': palette.foreground,
  'notificationsErrorIcon.foreground': palette.redDark2,
  'notificationsInfoIcon.foreground': palette.cyanDark3,
  'notificationsWarningIcon.foreground': palette.purpleHover,
  'widget.border': palette.borderAltAlpha40,
  'widget.shadow': palette.widgetShadowAlpha,
};
