import { palette } from '../../palette'
import { alpha, lighten } from '../../utils/color'

export const generateInputColors = (): Record<string, string> => {
  const { bg, fg, blue, yellow } = palette

  return {
    'input.background': bg.dark,
    'input.foreground': fg.brighter,
    'input.border': lighten(bg.light, 0.04),
    'input.placeholderForeground': alpha(fg.medium, 0.54),
    'inputOption.activeForeground': fg.brightest,
    'inputOption.activeBackground': alpha(blue.primary, 0.27),
    'inputValidation.infoForeground': palette.ui.inputInfo,
    'inputValidation.infoBackground': alpha(blue.primary, 0.36),
    'inputValidation.infoBorder': blue.primary,
    'inputValidation.warningForeground': palette.ui.black,
    'inputValidation.warningBackground': palette.ui.inputWarningBg,
    'inputValidation.warningBorder': yellow.main,
    'inputValidation.errorForeground': palette.ui.inputInfo,
    'inputValidation.errorBackground': palette.ui.inputErrorBg,
    'inputValidation.errorBorder': palette.ui.inputErrorBorder,
    'dropdown.foreground': fg.medium,
    'dropdown.background': bg.dark,
    'dropdown.listBackground': bg.lighter,
  }
}

export const generateCheckboxColors = (): Record<string, string> => {
  const { bg, fg, blue } = palette

  return {
    'checkbox.background': bg.light,
    'checkbox.foreground': fg.brightest,
    'checkbox.border': blue.light,
  }
}
