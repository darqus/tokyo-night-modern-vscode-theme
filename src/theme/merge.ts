import { palette } from '../palette'
import { withAlpha } from '../utils/color'

export const getMergeColors = () => ({
  // Слияние (Merge)
  'merge.currentHeaderBackground': withAlpha(palette.accent.teal, 'aa'), // Заголовок текущей ветки
  'merge.currentContentBackground': withAlpha(palette.accent.teal, '44'), // Контент текущей ветки
  'merge.incomingHeaderBackground': withAlpha(palette.brand.primary, 'aa'), // Заголовок входящей ветки
  'merge.incomingContentBackground': withAlpha(palette.brand.primary, '44'), // Контент входящей ветки
})
