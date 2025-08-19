import { palette } from '../palette'
import { withAlpha } from '../utils/color'

export const getButtonColors = () => ({
  // Кнопки / индикатор выполнения - улучшенный контраст
  'button.background': palette.brand.button.primary,
  'button.hoverBackground': palette.brand.button.hover,
  'button.foreground': palette.fg.selectionText,
  'button.border': withAlpha(palette.fg.subtle, '40'), // Увеличена видимость границы
  'button.separator': withAlpha(palette.fg.subtle, '50'), // Увеличена видимость разделителя
  'button.secondaryBackground': withAlpha(palette.bg.elevated, 'ff'), // Полностью непрозрачный фон для лучшего контраста
  'button.secondaryHoverBackground': withAlpha(palette.bg.hover, 'ff'), // Полностью непрозрачный hover
  'button.secondaryForeground': palette.fg.primary, // Основной цвет текста вместо белого для лучшей читаемости
  'progressBar.background': palette.brand.primary,
})
