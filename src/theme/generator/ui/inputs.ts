import { universalPalette } from '../../palette/index.js'
import { c, colorRules } from '../../utils/color-builder.js'
import {
  activeState,
  borderColor,
  disabledState,
  hoverState,
  softShadow,
  subtleHighlight,
} from '../../utils/color-helpers.js'

export function generateInputColors(): Record<string, string> {
  return (
    colorRules()
      // Базовые стили input
      .addGroup('input', {
        background: c.bg.dark,
        foreground: c.fg.light,
        border: borderColor(c.bg.main, c.indigo.main),
        placeholderForeground: softShadow(c.fg.main),
      })
      // Состояния input: hover, active, focus
      .addGroup('input', {
        hoverBackground: hoverState(c.bg.dark),
        activeBackground: activeState(c.bg.dark),
        focusBorder: borderColor(c.bg.main, c.indigo.light), // используем более светлый оттенок для фокуса
      })
      // Стили для опций input
      .addGroup('inputOption', {
        activeForeground: c.fg.light,
        activeBackground: subtleHighlight(c.neutral.dark),
        hoverBackground: hoverState(subtleHighlight(c.neutral.dark)),
        focusBorder: borderColor(c.bg.main, c.indigo.light),
      })
      // Quick input & dropdown
      .add('quickInput.background', c.bg.main)
      .add('quickInput.foreground', c.fg.main)
      .add('quickInput.border', borderColor(c.bg.main, c.indigo.main))
      .addGroup('dropdown', {
        background: c.bg.main,
        foreground: c.fg.main,
        listBackground: c.bg.main,
        border: borderColor(c.bg.main, c.indigo.main),
        hoverBackground: hoverState(c.bg.main),
        focusBorder: borderColor(c.bg.main, c.indigo.light),
      })
      .build()
  )
}

export function generateCheckboxColors(): Record<string, string> {
  return colorRules()
    .addGroup('checkbox', {
      background: c.bg.main,
      foreground: c.fg.light,
      border: borderColor(c.bg.main, c.indigo.main),
      hoverBackground: hoverState(c.bg.main),
      activeBackground: activeState(c.bg.main),
      focusBorder: borderColor(c.bg.main, c.indigo.light),
      disabledBackground: disabledState(c.bg.main),
      disabledForeground: universalPalette.foreground.disabled.dark,
      disabledBorder: disabledState(c.indigo.main),
    })
    .build()
}
