import { palette } from '../palette'
import { withAlpha } from '../utils/color'

export const getButtonColors = () => ({
  // Кнопки / индикатор выполнения - улучшенный контраст
  'button.background': palette.brand.button.primary,
  'button.hoverBackground': palette.brand.button.hover,
  'button.foreground': palette.fg.selectionText,
  'button.border': withAlpha(palette.fg.subtle, '25%'), // Увеличена видимость границы
  'button.separator': withAlpha(palette.fg.subtle, '31%'), // Увеличена видимость разделителя
  'button.secondaryBackground': withAlpha(palette.bg.elevated, '100%'), // Полностью непрозрачный фон для лучшего контраста
  'button.secondaryHoverBackground': withAlpha(palette.bg.hover, '100%'), // Полностью непрозрачный hover
  'button.secondaryForeground': palette.fg.primary, // Основной цвет текста вместо белого для лучшей читаемости
  'progressBar.background': palette.brand.primary,
})
