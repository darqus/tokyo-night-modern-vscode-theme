import { palette } from '../palette'
import { withAlpha } from '../utils/color'

export const getMergeColors = () => ({
  // Слияние (Merge)
  'merge.currentHeaderBackground': withAlpha(palette.accent.teal, '67%'), // Заголовок текущей ветки
  'merge.currentContentBackground': withAlpha(palette.accent.teal, '27%'), // Контент текущей ветки
  'merge.incomingHeaderBackground': withAlpha(palette.brand.primary, '67%'), // Заголовок входящей ветки
  'merge.incomingContentBackground': withAlpha(palette.brand.primary, '27%'), // Контент входящей ветки
})
