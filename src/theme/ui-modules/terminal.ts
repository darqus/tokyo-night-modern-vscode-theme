import { getToken } from '../design-tokens'

/**
 * Terminal UI элементы
 * Эти токены отвечают за оформление встроенного терминала в VS Code
 */
export const terminalColors = {
  'terminal.ansiBlack': getToken('color.text.tertiary'),
  'terminal.ansiBlue': getToken('accent.primary'),
  'terminal.ansiBrightBlack': getToken('color.text.tertiary'),
  'terminal.ansiBrightBlue': getToken('accent.primary'),
  'terminal.ansiBrightCyan': getToken('accent.info'),
  'terminal.ansiBrightGreen': getToken('accent.success'),
  'terminal.ansiBrightMagenta': getToken('accent.secondary'),
  'terminal.ansiBrightRed': getToken('color.text.disabled'),
  'terminal.ansiBrightWhite': getToken('color.text.inverse'),
  'terminal.ansiBrightYellow': getToken('accent.warning'),
  'terminal.ansiCyan': getToken('accent.info'),
  'terminal.ansiGreen': getToken('accent.success'),
  'terminal.ansiMagenta': getToken('accent.secondary'),
  'terminal.ansiRed': getToken('accent.error'),
  'terminal.ansiWhite': getToken('color.text.inverse'),
  'terminal.ansiYellow': getToken('accent.warning'),
  'terminal.background': getToken('color.background.primary'),
  'terminal.border': getToken('color.border.subtle') + '40',
  'terminal.dropBackground': getToken('accent.primary') + '33',
  'terminal.foreground': getToken('color.text.secondary'),
  'terminal.selectionBackground': getToken('accent.primary') + '30',
  'terminal.tab.activeBorder': getToken('accent.primary'),
  'terminalCommandDecoration.defaultBackground': getToken('accent.warning'),
  'terminalCommandDecoration.errorBackground': getToken('accent.error'),
  'terminalCommandDecoration.successBackground': getToken('accent.info'),
  'terminalCursor.background': getToken('color.background.secondary'),
  'terminalCursor.foreground': getToken('accent.warning'),
  'terminalOverviewRuler.cursorForeground': getToken('accent.warning'),
}