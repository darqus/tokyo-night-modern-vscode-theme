import { palette } from '../../palette/index.js'
import { alpha, mix } from '../../utils/color.js'

export const generateInputColors = (): Record<string, string> => {
  const { bg, fg, blue, yellow, neutral } = palette

  return {
    'input.background': bg.dark,
    'input.foreground': fg.light,
    'input.border': mix(bg.main, blue.main, 0.2),
    'input.placeholderForeground': alpha(fg.main, 0.54),
    'inputOption.activeForeground': fg.light,
    'inputOption.activeBackground': alpha(neutral.dark, 0.27),
    'inputValidation.infoForeground': palette.blue.light,
    'inputValidation.infoBackground': alpha(neutral.dark, 0.36),
    'inputValidation.infoBorder': mix(bg.main, blue.main, 0.2),
    'inputValidation.warningForeground': palette.ui.black,
    'inputValidation.warningBackground': palette.yellow.dark,
    'inputValidation.warningBorder': yellow.main,
    'inputValidation.errorForeground': palette.blue.light,
    'inputValidation.errorBackground': palette.red.dark,
    'inputValidation.errorBorder': palette.red.dark,
    'dropdown.foreground': fg.main,
    'dropdown.background': bg.main,
    'dropdown.listBackground': bg.main,
  }
}

export const generateCheckboxColors = (): Record<string, string> => {
  const { bg, fg, blue } = palette

  return {
    'checkbox.background': bg.main,
    'checkbox.foreground': fg.light,
    'checkbox.border': mix(bg.main, blue.main, 0.2),
  }
}
