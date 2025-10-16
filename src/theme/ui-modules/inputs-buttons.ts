import { foundationColors } from '../palette/foundation/colors'
import { typographyColors } from '../palette/semantic/typography'

/**
 * Inputs & Buttons UI элементы
 * Эти токены отвечают за оформление полей ввода и кнопок в VS Code
 */
export const inputsButtonsColors = {
  'button.background': foundationColors.blue800,
  'button.foreground': typographyColors.text.onAccent,
  'button.hoverBackground': foundationColors.blue700,
  'button.secondaryBackground': foundationColors.gray800 + '8A',
  'button.secondaryForeground': typographyColors.text.onAccent,
  'button.secondaryHoverBackground': foundationColors.gray800,
  'extensionButton.prominentBackground': foundationColors.blue700,
  'extensionButton.prominentForeground': typographyColors.text.onAccent,
  'extensionButton.prominentHoverBackground': foundationColors.blue800,
  'input.background': foundationColors.gray800,
  'input.border': foundationColors.gray600,
  'input.foreground': typographyColors.text.primary,
  'input.placeholderForeground': foundationColors.gray500 + '8A',
  'inputOption.activeBackground': foundationColors.blue500 + '60',
  'inputOption.activeBorder': foundationColors.gray600,
  'inputOption.activeForeground': typographyColors.text.primary,
  'inputValidation.errorBackground': foundationColors.red500,
  'inputValidation.errorBorder': foundationColors.red500,
  'inputValidation.errorForeground': foundationColors.red500,
  'inputValidation.infoBackground': foundationColors.cyan500,
  'inputValidation.infoBorder': foundationColors.cyan500,
  'inputValidation.infoForeground': typographyColors.text.primary,
  'inputValidation.warningBackground': foundationColors.yellow500,
  'inputValidation.warningBorder': foundationColors.yellow500,
  'inputValidation.warningForeground': typographyColors.text.primary,
}
