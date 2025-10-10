import { palette } from '../palette'

/**
 * Inline Chat UI элементы
 * Эти токены отвечают за оформление встроенного чата в VS Code
 */
export const inlineChatColors = {
  // Inline Chat
  'inlineChat.background': '#182031', // Фон встроенного чата (жестко заданное значение)
  'inlineChat.foreground': palette.white, // Цвет текста встроенного чата
  'inlineChat.border': palette.border, // Граница встроенного чата
  'inlineChatInput.placeholderForeground': palette.foregroundInactive, // Цвет плейсхолдера ввода встроенного чата
}
