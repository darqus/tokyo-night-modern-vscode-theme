import { palette } from '../palette/index'

/**
 * Inputs & Buttons UI элементы
 * Эти токены отвечают за оформление полей ввода и кнопок в VS Code
 */
export const inputsButtonsColors = {
  'button.background': palette.blue800,
  'button.foreground': palette.white,
  'button.hoverBackground': palette.blue700,
  'button.secondaryBackground': palette.cyan900,
  'button.secondaryForeground': palette.white,
  'button.secondaryHoverBackground': palette.cyan800,
  'extensionButton.prominentBackground': palette.blue700,
  'extensionButton.prominentForeground': palette.white,
  'extensionButton.prominentHoverBackground': palette.blue800,
  'input.background': palette.backgrounds.elevated, // Замена для backgroundAlt
  'input.border': palette.borders.subtle, // Замена для borderAlt4
  'input.foreground': palette.foreground,
  'input.placeholderForeground': palette.textPlaceholder + '8A', // Замена для foregroundAlt3Alpha8A
  'inputOption.activeBackground': palette.primary + '44', // Замена для blueDarkAlpha44
  'inputOption.activeBorder': palette.border,
  'inputOption.activeForeground': palette.text, // Замена для foregroundAlt9
  'inputValidation.errorBackground': palette.error, // Замена для redDark8
  'inputValidation.errorBorder': palette.error, // Замена для redDark5
  'inputValidation.errorForeground': palette.error, // Замена для redHover
  'inputValidation.infoBackground': palette.info, // Замена для cyanDark4
  'inputValidation.infoBorder': palette.info, // Замена для cyanDark5
  'inputValidation.infoForeground': palette.black,
  'inputValidation.warningBackground': palette.warning, // Замена для yellowDark
  'inputValidation.warningBorder': palette.yellow,
  'inputValidation.warningForeground': palette.black,
}
