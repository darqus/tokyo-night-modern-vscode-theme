import { palette } from '../palette'

/**
 * Terminal UI элементы
 * Эти токены отвечают за оформление встроенного терминала в VS Code
 */
export const terminalColors = {
  'terminal.ansiBlack': palette.foregroundAlt6,
  'terminal.ansiBlue': palette.blue,
  'terminal.ansiBrightBlack': palette.foregroundAlt6,
  'terminal.ansiBrightBlue': palette.blue,
  'terminal.ansiBrightCyan': palette.cyan,
  'terminal.ansiBrightGreen': palette.greenDark,
  'terminal.ansiBrightMagenta': palette.pink,
  'terminal.ansiBrightRed': palette.red,
  'terminal.ansiBrightWhite': palette.foregroundAlt7,
  'terminal.ansiBrightYellow': palette.yellow,
  'terminal.ansiCyan': palette.cyan,
  'terminal.ansiGreen': palette.greenDark,
  'terminal.ansiMagenta': palette.pink,
  'terminal.ansiRed': palette.red,
  'terminal.ansiWhite': palette.foregroundAlt3,
  'terminal.ansiYellow': palette.yellow,
  'terminal.background': palette.backgroundAlt,
  'terminal.border': palette.borderAlpha40,
  'terminal.dropBackground': palette.blueDarkAlpha20,
  'terminal.foreground': palette.foregroundAlt3,
  'terminal.selectionBackground': palette.terminalSelectionBgAlpha30,
  'terminal.tab.activeBorder': palette.blue,
  'terminalCommandDecoration.defaultBackground': palette.yellow,
  'terminalCommandDecoration.errorBackground': palette.red,
  'terminalCommandDecoration.successBackground': palette.cyan,
  'terminalCursor.background': palette.backgroundAlt,
  'terminalCursor.foreground': palette.yellow,
  'terminalOverviewRuler.cursorForeground': palette.yellow,
}
