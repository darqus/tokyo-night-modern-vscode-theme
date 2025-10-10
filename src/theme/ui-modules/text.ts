import { palette } from '../palette'

/**
 * Text UI элементы
 * Эти токены отвечают за оформление текстовых элементов в VS Code
 */
export const textColors = {
  // Text
  'textBlockQuote.background': palette.backgroundPanel, // Фон цитаты
  'textBlockQuote.border': palette.blueAlpha59, // Граница цитаты
  'textLink.foreground': palette.blueAlt, // Цвет текстовой ссылки
  'textLink.activeForeground': palette.blueAlt, // Цвет активной текстовой ссылки
  'editorLink.activeForeground': palette.blueAlt, // Цвет активной ссылки в редакторе
}
