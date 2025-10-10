import { palette } from '../palette'

/**
 * General UI элементы
 * Эти токены отвечают за общие элементы пользовательского интерфейса в VS Code
 */
export const generalUIColors = {
  // General UI
  foreground: palette.foreground, // Общий цвет текста
  'icon.foreground': palette.foregroundInactive, // Цвет иконок
  descriptionForeground: palette.foregroundAlt, // Цвет описаний
  disabledForeground: palette.foregroundAlt, // Цвет текста для отключенных элементов
  focusBorder: palette.backgroundAlpha00, // Граница фокуса (прозрачная)
  errorForeground: palette.red, // Цвет текста ошибок
  'selection.background': palette.selectionAlpha66, // Фон выделенного текста
}
