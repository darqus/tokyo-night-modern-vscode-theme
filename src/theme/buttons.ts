import { palette } from '../palette'
import { withAlpha } from '../utils/color'

export const getButtonColors = () => ({
  // Кнопки / индикатор выполнения - улучшенный контраст
  'button.background': palette.brand.button.primary,
  'button.hoverBackground': palette.brand.button.hover,
  'button.foreground': palette.fg.selectionText,
  'button.border': withAlpha(palette.fg.subtle, '25%'), // Увеличена видимость границы
  'button.separator': withAlpha(palette.fg.subtle, '20%'), // Увеличена видимость разделителя
  'button.secondaryBackground': palette.brand.button.primary,
  'button.secondaryHoverBackground': palette.brand.button.hover,
  'button.secondaryForeground': palette.fg.selectionText,
  'progressBar.background': palette.brand.primary,
})
