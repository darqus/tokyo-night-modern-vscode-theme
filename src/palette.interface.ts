import { basePalette } from './palette.base'

/**
 * Основные цвета интерфейса (editor background, foreground, border и т.д.)
 * Все остальные цвета должны быть производными от этих.
 */
export const interfaceColors = {
  // Цвет фона редактора - темный фон (#18181d)
  editorBg: basePalette.black,

  // Цвет текста в редакторе - белый текст (#ffffff)
  editorFg: basePalette.white,

  // Цвет границ - темные границы (#18181d)
  border: basePalette.black,

  // Акцентный цвет - синий для выделений и акцентов (#7aa2f7)
  accent: basePalette.blue,

  // Цвет ошибок - красный для сообщений об ошибках (#e46876)
  error: basePalette.red,

  // Цвет предупреждений - желтый для предупреждений и уведомлений (#e0af68)
  warning: basePalette.yellow,

  // Цвет успеха - зеленый для успешных операций (#9ece6a)
  success: basePalette.green,

  // Информационный цвет - голубой для информационных сообщений (#7dcfff)
  info: basePalette.cyan,
} as const
