import { palette } from '../palette/index'

/**
 * Terminal UI элементы
 * Эти токены отвечают за оформление встроенного терминала в VS Code
 */
export const terminalColors = {
  'terminal.ansiBlack': palette.textSecondary, // Замена для foregroundAlt6
  'terminal.ansiBlue': palette.blue,
  'terminal.ansiBrightBlack': palette.textSecondary, // Замена для foregroundAlt6
  'terminal.ansiBrightBlue': palette.blue,
  'terminal.ansiBrightCyan': palette.cyan,
  'terminal.ansiBrightGreen': palette.success, // Замена для greenDark
  'terminal.ansiBrightMagenta': palette.purple, // Замена для pink
  'terminal.ansiBrightRed': palette.red,
  'terminal.ansiBrightWhite': palette.text, // Замена для foregroundAlt7
  'terminal.ansiBrightYellow': palette.yellow,
  'terminal.ansiCyan': palette.cyan,
  'terminal.ansiGreen': palette.success, // Замена для greenDark
  'terminal.ansiMagenta': palette.purple, // Замена для pink
  'terminal.ansiRed': palette.red,
  'terminal.ansiWhite': palette.text, // Замена для foregroundAlt3
  'terminal.ansiYellow': palette.yellow,
  'terminal.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'terminal.border': palette.borders.subtle + '40', // Замена для borderAlpha40
  'terminal.dropBackground': palette.blue + '20', // Замена для blueDarkAlpha20
  'terminal.foreground': palette.text, // Замена для foregroundAlt3
  'terminal.selectionBackground': palette.selection + '30', // Замена для terminalSelectionBgAlpha30
  'terminal.tab.activeBorder': palette.blue,
  'terminalCommandDecoration.defaultBackground': palette.yellow,
  'terminalCommandDecoration.errorBackground': palette.red,
  'terminalCommandDecoration.successBackground': palette.cyan,
  'terminalCursor.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'terminalCursor.foreground': palette.yellow,
  'terminalOverviewRuler.cursorForeground': palette.yellow,
}
