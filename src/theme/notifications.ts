import { palette } from '../palette'

export const getNotificationColors = () => ({
  // Уведомления
  'notificationCenterHeader.background': palette.bg.overlay, // Фон заголовка центра уведомлений - осветлен
  'notifications.background': palette.bg.overlay, // Фон уведомлений - осветлен для лучшей читаемости
  'notificationLink.foreground': palette.ui.semantic.notificationLink, // Ссылки в уведомлениях
  'notificationsErrorIcon.foreground': palette.accent.red, // Иконка ошибки
  'notificationsWarningIcon.foreground': palette.accent.yellow, // Иконка предупреждения
  'notificationsInfoIcon.foreground': palette.accent.blue, // Иконка информации
  'notificationToast.border': palette.line.border, // Граница всплывающих уведомлений
  'notifications.border': palette.line.border, // Граница уведомлений
  'notifications.foreground': palette.fg.primary, // Текст уведомлений
  'notificationCenter.border': palette.line.border, // Граница центра уведомлений
  'notificationCenterHeader.foreground': palette.fg.primary, // Текст заголовка центра уведомлений
})
