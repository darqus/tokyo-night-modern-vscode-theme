import { palette } from '../palette'

/**
 * Inputs & Buttons UI элементы
 * Эти токены отвечают за оформление полей ввода и кнопок в VS Code
 */
export const inputsButtonsColors = {
  // Inputs & Buttons
  'input.background': palette.backgroundAlt, // Фон поля ввода
  'input.foreground': palette.foreground, // Цвет текста в поле ввода
  'input.border': palette.border, // Граница поля ввода
  'inputOption.activeBorder': palette.blueAlt, // Граница активной опции ввода
  'input.placeholderForeground': palette.foregroundInactive, // Цвет плейсхолдера в поле ввода
  'button.background': palette.blueStrong, // Фон кнопки
  'button.foreground': palette.white, // Цвет текста на кнопке
  'button.hoverBackground': palette.blueHover, // Фон кнопки при наведении
  'button.border': palette.blueAlt, // Граница кнопки
  'button.separator': palette.blueSeparator, // Разделитель кнопок
  'button.secondaryBackground': palette.backgroundAlt, // Фон второстепенной кнопки
  'button.secondaryForeground': palette.foreground, // Цвет текста на второстепенной кнопке
  'button.secondaryHoverBackground': palette.blueSecondary, // Фон второстепенной кнопки при наведении
}
