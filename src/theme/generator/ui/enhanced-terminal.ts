import { palette } from '../../palette'
import { alpha } from '../../utils/color'

export function generateEnhancedTerminalColors() {
  return {
    // Основные цвета терминала
    'terminal.background': palette.bg.main,
    'terminal.foreground': palette.fg.brighter,
    'terminalCursor.foreground': palette.fg.brightest,
    'terminalCursor.background': palette.bg.editor,
    'terminal.selectionBackground': alpha(palette.blue.primary, 0.3),

    // Базовые ANSI цвета
    'terminal.ansiBlack': palette.bg.darker,
    'terminal.ansiRed': palette.red.main,
    'terminal.ansiGreen': palette.green.main,
    'terminal.ansiYellow': palette.yellow.main,
    'terminal.ansiBlue': palette.blue.medium,
    'terminal.ansiMagenta': palette.purple.light,
    'terminal.ansiCyan': palette.cyan.light,
    'terminal.ansiWhite': palette.fg.medium,

    // Яркие ANSI цвета с улучшенной контрастностью
    'terminal.ansiBrightBlack': palette.special.indentActive,
    'terminal.ansiBrightRed': palette.red.dark, // Для ошибок
    'terminal.ansiBrightGreen': palette.green.dark, // Для успеха
    'terminal.ansiBrightYellow': palette.yellow.light, // Для предупреждений
    'terminal.ansiBrightBlue': palette.blue.light, // Для информации
    'terminal.ansiBrightMagenta': palette.purple.bright,
    'terminal.ansiBrightCyan': palette.cyan.bright,
    'terminal.ansiBrightWhite': palette.ui.brightWhite,
  }
}
