import { palette } from '../palette/index'

/**
 * Inputs & Buttons UI элементы
 * Эти токены отвечают за оформление полей ввода и кнопок в VS Code
 */
export const inputsButtonsColors = {
  'button.background': palette.blue800,
  'button.foreground': palette.blue100,
  'button.hoverBackground': palette.blue700,
  'button.secondaryBackground': palette.gray800 + '8A',
  'button.secondaryForeground': palette.blue100,
  'button.secondaryHoverBackground': palette.gray800,
  'extensionButton.prominentBackground': palette.blue700,
  'extensionButton.prominentForeground': palette.blue100,
  'extensionButton.prominentHoverBackground': palette.blue800,
  'input.background': palette.backgrounds.elevated,
  'input.border': palette.borders.subtle,
  'input.foreground': palette.foreground,
  'input.placeholderForeground': palette.textPlaceholder + '8A',
  'inputOption.activeBackground': palette.primary + '60',
  'inputOption.activeBorder': palette.border,
  'inputOption.activeForeground': palette.text,
  'inputValidation.errorBackground': palette.error,
  'inputValidation.errorBorder': palette.error,
  'inputValidation.errorForeground': palette.error,
  'inputValidation.infoBackground': palette.info,
  'inputValidation.infoBorder': palette.info,
  'inputValidation.infoForeground': palette.black,
  'inputValidation.warningBackground': palette.warning,
  'inputValidation.warningBorder': palette.yellow,
  'inputValidation.warningForeground': palette.black,
}
