import { palette } from '../palette'

/**
 * Title Bar UI элементы
 * Эти токены отвечают за оформление заголовка окна в VS Code
 */
export const titleBarColors = {
  // Title Bar
  'titleBar.activeBackground': palette.backgroundAlt, // Фон активной строки заголовка
  'titleBar.inactiveBackground': palette.backgroundAlt, // Фон неактивной строки заголовка
  'titleBar.activeForeground': palette.foreground, // Цвет текста активной строки заголовка
  'titleBar.inactiveForeground': palette.foregroundAlt, // Цвет текста неактивной строки заголовка
  'titleBar.border': palette.border, // Граница строки заголовка
}
