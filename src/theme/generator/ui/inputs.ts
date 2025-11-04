import { palette } from '../../palette/index.js'
import { alpha, lighten, mix } from '../../utils/color.js'

export const generateInputColors = (): Record<string, string> => {
  const { bg, fg, blue, yellow } = palette
  const menuBg = mix(bg.dark, blue.dark, 0.1)

  return {
    'input.background': bg.dark,
    'input.foreground': fg.light,
    'input.border': lighten(bg.dark, 0.02),
    'input.placeholderForeground': alpha(fg.main, 0.54),
    'inputOption.activeForeground': fg.light,
    'inputOption.activeBackground': alpha(blue.dark, 0.27),
    'inputValidation.infoForeground': palette.blue.light,
    'inputValidation.infoBackground': alpha(blue.dark, 0.36),
    'inputValidation.infoBorder': blue.dark,
    'inputValidation.warningForeground': palette.ui.black,
    'inputValidation.warningBackground': palette.yellow.dark,
    'inputValidation.warningBorder': yellow.main,
    'inputValidation.errorForeground': palette.blue.light,
    'inputValidation.errorBackground': palette.red.dark,
    'inputValidation.errorBorder': palette.red.dark,
    'dropdown.foreground': fg.main,
    'dropdown.background': menuBg,
    'dropdown.listBackground': menuBg,
  }
}

export const generateCheckboxColors = (): Record<string, string> => {
  const { bg, fg, neutral } = palette

  return {
    'checkbox.background': bg.main,
    'checkbox.foreground': fg.light,
    'checkbox.border': neutral.main,
  }
}
