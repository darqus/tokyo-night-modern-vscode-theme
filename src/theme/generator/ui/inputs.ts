import { palette } from '../../palette'
import { alpha } from '../../utils/color'
import { ensureContrast } from '../../utils/contrast'

export const generateInputColors = (): Record<string, string> => {
  const { bg, fg, blue, yellow, border } = palette

  // Улучшенные цвета для полей ввода
  const enhancedInputBorder = ensureContrast(border.ui, bg.dark, 2.5)
  const enhancedActiveBackground = ensureContrast(blue.primary, bg.dark, 3.0)

  return {
    'input.background': bg.dark,
    'input.foreground': ensureContrast(fg.brighter, bg.dark, 4.5),
    'input.border': enhancedInputBorder,
    'input.placeholderForeground': ensureContrast(
      alpha(fg.medium, 0.7),
      bg.dark,
      2.0
    ), // Увеличил непрозрачность
    'inputOption.activeForeground': ensureContrast(
      fg.brightest,
      enhancedActiveBackground,
      4.5
    ),
    'inputOption.activeBackground': alpha(enhancedActiveBackground, 0.4), // Увеличил непрозрачность
    'inputValidation.infoForeground': ensureContrast(
      palette.ui.inputInfo,
      bg.dark,
      4.5
    ),
    'inputValidation.infoBackground': alpha(enhancedActiveBackground, 0.5), // Увеличил непрозрачность
    'inputValidation.infoBorder': ensureContrast(blue.primary, bg.dark, 3.0),
    'inputValidation.warningForeground': ensureContrast(
      palette.ui.black,
      palette.ui.inputWarningBg,
      4.5
    ),
    'inputValidation.warningBackground': ensureContrast(
      palette.ui.inputWarningBg,
      bg.dark,
      2.0
    ),
    'inputValidation.warningBorder': ensureContrast(yellow.main, bg.dark, 3.0),
    'inputValidation.errorForeground': ensureContrast(
      palette.ui.inputInfo,
      palette.ui.inputErrorBg,
      4.5
    ),
    'inputValidation.errorBackground': ensureContrast(
      palette.ui.inputErrorBg,
      bg.dark,
      2.5
    ),
    'inputValidation.errorBorder': ensureContrast(
      palette.ui.inputErrorBorder,
      bg.dark,
      3.0
    ),
    'dropdown.foreground': ensureContrast(fg.medium, bg.dark, 4.5),
    'dropdown.background': bg.dark,
    'dropdown.listBackground': bg.dark,
  }
}

export const generateCheckboxColors = (): Record<string, string> => {
  const { bg, fg, border } = palette

  // Улучшенные цвета для чекбоксов
  const enhancedCheckboxBackground = ensureContrast(bg.light, fg.brightest, 3.0)
  const enhancedCheckboxBorder = ensureContrast(border.primary70, bg.light, 2.5)

  return {
    'checkbox.background': enhancedCheckboxBackground,
    'checkbox.foreground': ensureContrast(
      fg.brightest,
      enhancedCheckboxBackground,
      4.5
    ),
    'checkbox.border': enhancedCheckboxBorder,
  }
}
