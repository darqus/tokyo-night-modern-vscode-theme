import { palette } from '../../palette'
import { alpha } from '../../utils/color'

export function generateTerminalColors(): Record<string, string> {
  const { bg, fg, special, red, green, yellow, blue, purple, cyan, ui } =
    palette

  return {
    // Основные цвета терминала
    'terminal.background': bg.main,
    'terminal.foreground': fg.brighter,
    'terminalCursor.foreground': fg.brightest,
    'terminalCursor.background': bg.editor,
    'terminal.selectionBackground': alpha(blue.primary, 0.3),

    // Базовые ANSI цвета
    'terminal.ansiBlack': bg.darker,
    'terminal.ansiRed': red.main,
    'terminal.ansiGreen': green.main,
    'terminal.ansiYellow': yellow.main,
    'terminal.ansiBlue': blue.medium,
    'terminal.ansiMagenta': purple.light,
    'terminal.ansiCyan': cyan.light,
    'terminal.ansiWhite': fg.medium,

    // Яркие ANSI цвета с улучшенной контрастностью
    'terminal.ansiBrightBlack': special.indentActive,
    'terminal.ansiBrightRed': red.dark, // Для ошибок
    'terminal.ansiBrightGreen': green.dark, // Для успеха
    'terminal.ansiBrightYellow': yellow.light, // Для предупреждений
    'terminal.ansiBrightBlue': blue.light, // Для информации
    'terminal.ansiBrightMagenta': purple.bright,
    'terminal.ansiBrightCyan': cyan.bright,
    'terminal.ansiBrightWhite': ui.brightWhite,
  }
}
