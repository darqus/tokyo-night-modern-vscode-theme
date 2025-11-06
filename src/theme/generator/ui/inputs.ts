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
        border: borderColor(c.bg.main, c.blue.main),
        placeholderForeground: softShadow(c.fg.main),
      })
      // Состояния input: hover, active, focus
      .addGroup('input', {
        hoverBackground: hoverState(c.bg.dark),
        activeBackground: activeState(c.bg.dark),
        focusBorder: borderColor(c.bg.main, c.blue.light), // используем более светлый оттенок для фокуса
      })
      // Стили для опций input
      .addGroup('inputOption', {
        activeForeground: c.fg.light,
        activeBackground: subtleHighlight(c.neutral.dark),
        hoverBackground: hoverState(subtleHighlight(c.neutral.dark)),
        focusBorder: borderColor(c.bg.main, c.blue.light),
      })
      // Стили валидации: info
      .add('inputValidation.infoForeground', c.blue.light)
      .add('inputValidation.infoBackground', subtleHighlight(c.neutral.dark))
      .add('inputValidation.infoBorder', borderColor(c.bg.main, c.blue.main))
      // Стили валидации: warning
      .add('inputValidation.warningForeground', c.ui.black)
      .add('inputValidation.warningBackground', c.yellow.dark)
      .add('inputValidation.warningBorder', c.yellow.main)
      // Стили валидации: error
      .add('inputValidation.errorForeground', c.blue.light)
      .add('inputValidation.errorBackground', c.red.dark)
      .add('inputValidation.errorBorder', c.red.dark)
      // Quick input & dropdown
      .add('quickInput.background', c.bg.main)
      .add('quickInput.foreground', c.fg.main)
      .add('quickInput.border', borderColor(c.bg.main, c.blue.main))
      .addGroup('dropdown', {
        background: c.bg.main,
        foreground: c.fg.main,
        listBackground: c.bg.main,
        border: borderColor(c.bg.main, c.blue.main),
        hoverBackground: hoverState(c.bg.main),
        focusBorder: borderColor(c.bg.main, c.blue.light),
      })
      .build()
  )
}

export function generateCheckboxColors(): Record<string, string> {
  return colorRules()
    .addGroup('checkbox', {
      background: c.bg.main,
      foreground: c.fg.light,
      border: borderColor(c.bg.main, c.blue.main),
      hoverBackground: hoverState(c.bg.main),
      activeBackground: activeState(c.bg.main),
      focusBorder: borderColor(c.bg.main, c.blue.light),
      disabledBackground: disabledState(c.bg.main),
      disabledForeground: disabledState(c.fg.light),
      disabledBorder: disabledState(c.blue.main),
    })
    .build()
}
