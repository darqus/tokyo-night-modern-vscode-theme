import { palette } from '../../palette'
import { alpha } from '../../utils/color'

export function generateTerminalColors(): Record<string, string> {
  const { bg, fg, special, red, yellow, blue, purple, cyan } = palette

  return {
    'terminal.background': bg.main,
    'terminal.foreground': fg.medium,
    'terminal.selectionBackground': alpha(special.selection, 0.3),
    'terminal.ansiBlack': special.indentActive,
    'terminal.ansiRed': red.main,
    'terminal.ansiGreen': palette.teal.main,
    'terminal.ansiYellow': yellow.main,
    'terminal.ansiBlue': blue.medium,
    'terminal.ansiMagenta': purple.light,
    'terminal.ansiCyan': cyan.light,
    'terminal.ansiWhite': fg.medium,
    'terminal.ansiBrightBlack': special.indentActive,
    'terminal.ansiBrightRed': red.main,
    'terminal.ansiBrightGreen': palette.teal.main,
    'terminal.ansiBrightYellow': yellow.main,
    'terminal.ansiBrightBlue': blue.medium,
    'terminal.ansiBrightMagenta': purple.light,
    'terminal.ansiBrightCyan': cyan.light,
    'terminal.ansiBrightWhite': '#acb0d0',
  }
}
