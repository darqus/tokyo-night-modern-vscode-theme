import { palette } from '../../palette'
import { alpha } from '../../utils/color'
import { ensureContrast } from '../../utils/contrast'

export function generateTerminalColors(): Record<string, string> {
  const { bg, fg, special, red, green, yellow, blue, purple, cyan, ui } =
    palette

  return {
    // Основные цвета терминала
    'terminal.background': bg.main,
    'terminal.foreground': ensureContrast(fg.brighter, bg.main, 4.5),
    'terminalCursor.foreground': ensureContrast(fg.brightest, bg.main, 4.5),
    'terminalCursor.background': bg.editor,
    'terminal.selectionBackground': alpha(
      ensureContrast(blue.primary, bg.main, 3.0),
      0.4
    ), // Увеличил непрозрачность

    // Базовые ANSI цвета с улучшенной контрастностью
    'terminal.ansiBlack': ensureContrast(bg.darker, bg.main, 2.0),
    'terminal.ansiRed': ensureContrast(red.main, bg.main, 4.5),
    'terminal.ansiGreen': ensureContrast(green.main, bg.main, 4.5),
    'terminal.ansiYellow': ensureContrast(yellow.main, bg.main, 4.5),
    'terminal.ansiBlue': ensureContrast(blue.medium, bg.main, 4.5),
    'terminal.ansiMagenta': ensureContrast(purple.light, bg.main, 4.5),
    'terminal.ansiCyan': ensureContrast(cyan.light, bg.main, 4.5),
    'terminal.ansiWhite': ensureContrast(fg.medium, bg.main, 3.5),

    // Яркие ANSI цвета с улучшенной контрастностью
    'terminal.ansiBrightBlack': ensureContrast(
      special.indentActive,
      bg.main,
      3.0
    ),
    'terminal.ansiBrightRed': ensureContrast(red.dark, bg.main, 4.5), // Для ошибок
    'terminal.ansiBrightGreen': ensureContrast(green.dark, bg.main, 4.5), // Для успеха
    'terminal.ansiBrightYellow': ensureContrast(yellow.light, bg.main, 4.5), // Для предупреждений
    'terminal.ansiBrightBlue': ensureContrast(blue.light, bg.main, 4.5), // Для информации
    'terminal.ansiBrightMagenta': ensureContrast(purple.bright, bg.main, 4.5),
    'terminal.ansiBrightCyan': ensureContrast(cyan.bright, bg.main, 4.5),
    'terminal.ansiBrightWhite': ensureContrast(ui.brightWhite, bg.main, 4.5),
  }
}
