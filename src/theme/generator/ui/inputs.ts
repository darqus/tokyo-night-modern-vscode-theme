import { palette } from '../../palette'
import { alpha } from '../../utils/color'

export function generateInputColors(): Record<string, string> {
  const { bg, fg, blue, yellow } = palette

  return {
    'input.background': bg.dark,
    'input.foreground': fg.brighter,
    'input.border': bg.darker,
    'input.placeholderForeground': alpha(fg.medium, 0.54),
    'inputOption.activeForeground': fg.brightest,
    'inputOption.activeBackground': alpha(blue.primary, 0.27),
    'inputValidation.infoForeground': '#bbc2e0',
    'inputValidation.infoBackground': alpha(blue.primary, 0.36),
    'inputValidation.infoBorder': blue.primary,
    'inputValidation.warningForeground': '#000000',
    'inputValidation.warningBackground': '#c2985b',
    'inputValidation.warningBorder': yellow.main,
    'inputValidation.errorForeground': '#bbc2e0',
    'inputValidation.errorBackground': '#85353e',
    'inputValidation.errorBorder': '#963c47',
    'dropdown.foreground': fg.medium,
    'dropdown.background': bg.dark,
    'dropdown.listBackground': bg.dark,
  }
}
