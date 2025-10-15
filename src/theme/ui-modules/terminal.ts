import { palette } from '../palette/index'

/**
 * Terminal UI элементы
 * Эти токены отвечают за оформление встроенного терминала в VS Code
 */
export const terminalColors = {
  'terminal.ansiBlack': palette.textSecondary,
  'terminal.ansiBlue': palette.blue,
  'terminal.ansiBrightBlack': palette.textSecondary,
  'terminal.ansiBrightBlue': palette.blue,
  'terminal.ansiBrightCyan': palette.cyan,
  'terminal.ansiBrightGreen': palette.success,
  'terminal.ansiBrightMagenta': palette.purple,
  'terminal.ansiBrightRed': palette.red,
  'terminal.ansiBrightWhite': palette.text,
  'terminal.ansiBrightYellow': palette.yellow,
  'terminal.ansiCyan': palette.cyan,
  'terminal.ansiGreen': palette.success,
  'terminal.ansiMagenta': palette.purple,
  'terminal.ansiRed': palette.red,
  'terminal.ansiWhite': palette.text,
  'terminal.ansiYellow': palette.yellow,
  'terminal.background': palette.backgrounds.secondary,
  'terminal.border': palette.borders.subtle + '40',
  'terminal.dropBackground': palette.blue + '20',
  'terminal.foreground': palette.text,
  'terminal.selectionBackground': palette.selection + '30',
  'terminal.tab.activeBorder': palette.blue,
  'terminalCommandDecoration.defaultBackground': palette.yellow,
  'terminalCommandDecoration.errorBackground': palette.red,
  'terminalCommandDecoration.successBackground': palette.cyan,
  'terminalCursor.background': palette.backgrounds.secondary,
  'terminalCursor.foreground': palette.yellow,
  'terminalOverviewRuler.cursorForeground': palette.yellow,
}
