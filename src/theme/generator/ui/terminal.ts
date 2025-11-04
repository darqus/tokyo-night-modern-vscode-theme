import { palette } from '../../palette/index.js'
import { alpha } from '../../utils/color.js'

export function generateTerminalColors(): Record<string, string> {
  const { bg, fg, red, green, yellow, blue, purple, cyan, neutral } = palette

  return {
    // Main terminal colors
    'terminal.background': bg.main,
    'terminal.foreground': fg.light,
    'terminalCursor.foreground': fg.light,
    'terminalCursor.background': bg.light,
    'terminal.selectionBackground': alpha(blue.dark, 0.3),

    // Basic ANSI colors
    'terminal.ansiBlack': bg.dark,
    'terminal.ansiRed': red.main,
    'terminal.ansiGreen': green.main,
    'terminal.ansiYellow': yellow.main,
    'terminal.ansiBlue': blue.main,
    'terminal.ansiMagenta': purple.light,
    'terminal.ansiCyan': cyan.light,
    'terminal.ansiWhite': fg.main,

    // Bright ANSI colors with improved contrast
    'terminal.ansiBrightBlack': neutral.main,
    'terminal.ansiBrightRed': red.dark, // For errors
    'terminal.ansiBrightGreen': green.dark, // For success
    'terminal.ansiBrightYellow': yellow.light, // For warnings
    'terminal.ansiBrightBlue': blue.light, // For information
    'terminal.ansiBrightMagenta': purple.light,
    'terminal.ansiBrightCyan': cyan.light,
    'terminal.ansiBrightWhite': fg.light,
  }
}
