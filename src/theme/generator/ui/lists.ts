import { alpha, mix } from '../../utils/color.js'
import { c, colorRules } from '../../utils/color-builder.js'
import {
  borderColor,
  mediumHighlight,
  OPACITY,
  subtleBackground,
  subtleHighlight,
} from '../../utils/color-helpers.js'

export function generateListColors(): Record<string, string> {
  return (
    colorRules()
      // Основные элементы списка
      .addGroup('list', {
        dropBackground: c.bg.light,
        deemphasizedForeground: c.fg.main,
        activeSelectionBackground: subtleHighlight(c.blue.main),
        activeSelectionForeground: c.fg.light,
        inactiveSelectionBackground: alpha(c.blue.main, OPACITY.SUBTLE),
        inactiveSelectionForeground: c.fg.light,
        focusBackground: alpha(c.blue.main, 0.25),
        focusForeground: c.fg.light,
        hoverBackground: subtleBackground(c.blue.main),
        hoverForeground: c.fg.light,
        highlightForeground: c.fg.light,
        invalidItemForeground: mix(c.orange.main, c.yellow.main, 0.3),
        errorForeground: c.red.main,
        warningForeground: c.yellow.dark,
      })
      // Виджет фильтрации списка
      .addGroup('listFilterWidget', {
        background: c.bg.dark,
        outline: c.blue.dark,
        noMatchesOutline: c.red.dark,
      })
      // Группа пикера (например, в палитре команд)
      .addGroup('pickerGroup', {
        foreground: c.fg.light,
        border: borderColor(c.bg.main, c.blue.main),
      })
      // Скроллбар в списках
      .addGroup('scrollbarSlider', {
        background: alpha(c.fg.main, 0.04),
        hoverBackground: subtleHighlight(c.blue.main),
        activeBackground: mediumHighlight(c.blue.main),
      })
      .build()
  )
}
