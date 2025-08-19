import { palette } from '../palette'
import { withAlpha } from '../utils/color'

export const getTerminalColors = () => ({
  // Терминал
  'terminal.background': palette.bg.base, // Фон терминала
  'terminal.foreground': palette.fg.primary, // Основной текст терминала
  'terminal.selectionBackground': withAlpha(palette.fg.subtle, '19%'), // Фон выделения текста
  'terminal.inactiveSelectionBackground': withAlpha(palette.fg.subtle, '19%'), // Фон неактивного выделения
  'terminalCursor.background': palette.bg.base, // Фон курсора
  'terminalCursor.foreground': palette.fg.primary, // Цвет курсора
  'terminal.findMatchBackground': withAlpha(palette.ui.badge.base, '40%'), // Фон найденного совпадения
  'terminal.findMatchBorder': palette.accent.yellow, // Граница найденного совпадения
  'terminal.findMatchHighlightBackground': withAlpha(
    palette.ui.badge.base,
    '40%'
  ),
  // Фон других совпадений
  'terminal.findMatchHighlightBorder': withAlpha(palette.ui.badge.base, '60%'), // Граница других совпадений
  'terminal.hoverHighlightBackground': withAlpha(palette.brand.primary, '20%'), // Фон при наведении
  'terminal.dropBackground': palette.bg.drop, // Фон при перетаскивании
  'terminalOverviewRuler.findMatchForeground': withAlpha(
    palette.fg.primary,
    '27%'
  ), // Индикатор совпадений в обзорной линейке
  'terminalOverviewRuler.cursorForeground': palette.fg.primary, // Индикатор курсора в обзорной линейке
  // ANSI цвета терминала
  'terminal.ansiBlack': palette.ansi.black, // Черный
  'terminal.ansiRed': palette.ansi.red, // Красный
  'terminal.ansiGreen': palette.ansi.green, // Зеленый
  'terminal.ansiYellow': palette.ansi.yellow, // Желтый
  'terminal.ansiBlue': palette.ansi.blue, // Синий
  'terminal.ansiMagenta': palette.ansi.magenta, // Пурпурный
  'terminal.ansiCyan': palette.ansi.cyan, // Голубой
  'terminal.ansiWhite': palette.ansi.white, // Белый
  // Яркие ANSI цвета терминала
  'terminal.ansiBrightBlack': palette.ansi.brightBlack, // Яркий черный
  'terminal.ansiBrightRed': palette.ansi.brightRed, // Яркий красный
  'terminal.ansiBrightGreen': palette.ansi.brightGreen, // Яркий зеленый
  'terminal.ansiBrightYellow': palette.ansi.brightYellow, // Яркий желтый
  'terminal.ansiBrightBlue': palette.ansi.brightBlue, // Яркий синий
  'terminal.ansiBrightMagenta': palette.ansi.brightMagenta, // Яркий пурпурный
  'terminal.ansiBrightCyan': palette.ansi.brightCyan, // Яркий голубой
  'terminal.ansiBrightWhite': palette.ansi.brightWhite, // Яркий белый
})
