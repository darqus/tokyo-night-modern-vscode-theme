import { c, colorRules } from '../../utils/color-builder.js'

export function generateTerminalColors(): Record<string, string> {
  return colorRules()
    .add('terminal.ansiBlack', c.neutral.dark)
    .add('terminal.ansiRed', c.red.main)
    .add('terminal.ansiGreen', c.green.main)
    .add('terminal.ansiYellow', c.yellow.main)
    .add('terminal.ansiBlue', c.blue.main)
    .add('terminal.ansiMagenta', c.purple.main)
    .add('terminal.ansiCyan', c.cyan.main)
    .add('terminal.ansiWhite', c.ui.white)
    .add('terminal.ansiBrightBlack', c.neutral.main)
    .add('terminal.ansiBrightRed', c.red.light)
    .add('terminal.ansiBrightGreen', c.green.light)
    .add('terminal.ansiBrightYellow', c.yellow.light)
    .add('terminal.ansiBrightBlue', c.blue.light)
    .add('terminal.ansiBrightMagenta', c.purple.light)
    .add('terminal.ansiBrightCyan', c.cyan.light)
    .add('terminal.ansiBrightWhite', c.ui.white)
    .addGroup('terminal', {
      background: c.bg.main,
      foreground: c.fg.main,
      cursorBackground: c.blue.main,
      cursorForeground: c.ui.white,
      cursorInactiveBackground: c.blue.dark,
      selectionBackground: `${c.blue.main}40`,
      selectionForeground: c.fg.bright,
      border: c.neutral.main,
      dropBackground: `${c.blue.main}40`,
      tabInactiveBackground: c.bg.dark,
      tabActiveBorder: c.blue.main,
      overviewRulerCursorForeground: c.blue.main,
      overviewRulerFindMatchForeground: `${c.yellow.main}80`,
    })
    .addGroup('terminal.ansi', {
      black: c.neutral.dark,
      red: c.red.main,
      green: c.green.main,
      yellow: c.yellow.main,
      blue: c.blue.main,
      magenta: c.purple.main,
      cyan: c.cyan.main,
      white: c.ui.white,
      brightBlack: c.neutral.main,
      brightRed: c.red.light,
      brightGreen: c.green.light,
      brightYellow: c.yellow.light,
      brightBlue: c.blue.light,
      brightMagenta: c.purple.light,
      brightCyan: c.cyan.light,
      brightWhite: c.ui.white,
    })
    .addGroup('terminalCursor', {
      background: c.blue.main,
      foreground: c.ui.white,
    })
    .addGroup('terminalOverviewRuler', {
      border: c.neutral.main,
    })
    .addGroup('debugConsole', {
      inputBackground: c.bg.dark,
      inputForeground: c.fg.main,
      inputBorder: c.neutral.main,
      outputBackground: c.bg.main,
      outputForeground: c.fg.main,
      outputBorder: c.neutral.main,
      background: c.bg.main,
      foreground: c.fg.main,
    })
    .addGroup('debugTerminal', {
      background: c.bg.main,
      foreground: c.fg.main,
      selectionBackground: `${c.blue.main}40`,
      selectionForeground: c.fg.bright,
      cursorBackground: c.blue.main,
      cursorForeground: c.ui.white,
    })
    .build()
}
