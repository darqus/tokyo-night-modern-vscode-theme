import { palette } from '../../palette'
import { alpha } from '../../utils/color'

export function generateTerminalColors(): Record<string, string> {
  const { bg, fg, special, red, green, yellow, blue, purple, cyan, ui } =
    palette

  return {
    // Main terminal colors
    'terminal.background': bg.main,
    'terminal.foreground': fg.brighter,
    'terminalCursor.foreground': fg.brightest,
    'terminalCursor.background': bg.editor,
    'terminal.selectionBackground': alpha(blue.primary, 0.3),

    // Basic ANSI colors
    'terminal.ansiBlack': bg.darker,
    'terminal.ansiRed': red.main,
    'terminal.ansiGreen': green.main,
    'terminal.ansiYellow': yellow.main,
    'terminal.ansiBlue': blue.medium,
    'terminal.ansiMagenta': purple.light,
    'terminal.ansiCyan': cyan.light,
    'terminal.ansiWhite': fg.medium,

    // Bright ANSI colors with improved contrast
    'terminal.ansiBrightBlack': special.indentActive,
    'terminal.ansiBrightRed': red.dark, // For errors
    'terminal.ansiBrightGreen': green.dark, // For success
    'terminal.ansiBrightYellow': yellow.light, // For warnings
    'terminal.ansiBrightBlue': blue.light, // For information
    'terminal.ansiBrightMagenta': purple.bright,
    'terminal.ansiBrightCyan': cyan.bright,
    'terminal.ansiBrightWhite': ui.brightWhite,
  }
}
