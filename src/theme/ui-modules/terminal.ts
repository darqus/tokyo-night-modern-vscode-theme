import { palette } from '../palette'

/**
 * Terminal UI элементы
 * Эти токены отвечают за оформление встроенного терминала в VS Code
 */
export const terminalColors = {
  // Terminal
  'terminal.background': palette.background, // Фон терминала
  'terminal.foreground': palette.foreground, // Цвет текста в терминале
  'terminal.selectionBackground': palette.selectionBlueAlpha33, // Фон выделенного текста в терминале
  'terminal.inactiveSelectionBackground': palette.foregroundAlpha1f, // Фон неактивного выделения в терминале
  'terminal.border': palette.border, // Граница терминала
  'terminal.hoverHighlightBackground': palette.grayScrollbarSliderHover, // Фон подсветки при наведении в терминале
  'terminal.ansiBlack': palette.background, // Черный ANSI цвет
  'terminal.ansiRed': palette.red, // Красный ANSI цвет
  'terminal.ansiGreen': palette.green, // Зеленый ANSI цвет
  'terminal.ansiYellow': palette.yellow, // Желтый ANSI цвет
  'terminal.ansiBlue': palette.blueAlt, // Синий ANSI цвет
  'terminal.ansiMagenta': palette.purple, // Пурпурный ANSI цвет
  'terminal.ansiCyan': palette.blueAlt, // Голубой ANSI цвет
  'terminal.ansiWhite': palette.grayLight, // Белый ANSI цвет
  'terminal.ansiBrightBlack': palette.grayDark, // Ярко-черный ANSI цвет
  'terminal.ansiBrightRed': palette.terminalBrightRed, // Ярко-красный ANSI цвет
  'terminal.ansiBrightGreen': palette.terminalBrightGreen, // Ярко-зеленый ANSI цвет
  'terminal.ansiBrightYellow': palette.terminalBrightYellow, // Ярко-желтый ANSI цвет
  'terminal.ansiBrightBlue': palette.blueAlt, // Ярко-синий ANSI цвет
  'terminal.ansiBrightMagenta': palette.terminalBrightMagenta, // Ярко-пурпурный ANSI цвет
  'terminal.ansiBrightCyan': palette.blueAlt, // Ярко-голубой ANSI цвет
  'terminal.ansiBrightWhite': palette.white, // Ярко-белый ANSI цвет
  'terminalCommandDecoration.defaultBackground': palette.selectionBlueAlpha33, // Фон декорации команды по умолчанию
  'terminalCommandDecoration.successBackground': palette.greenAlpha33, // Фон успешной декорации команды
  'terminalCommandDecoration.errorBackground': palette.redAlpha33, // Фон ошибки декорации команды
}
