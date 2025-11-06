import { alpha } from '../../utils/color.js'
import { c, colorRules } from '../../utils/color-builder.js'
import { OPACITY } from '../../utils/color-helpers.js'

export const generateTerminalColors = (): Record<string, string> => {
  const { bg, fg, red, green, yellow, blue, purple, cyan, neutral } = c
  const builder = colorRules()

  // Группа основных цветов терминала
  builder.addGroup('terminal', {
    background: bg.main,
    foreground: fg.light,
    selectionBackground: alpha(blue.dark, OPACITY.MEDIUM),
  })

  // Группа цветов курсора
  builder.add('terminalCursor.foreground', fg.light)
  builder.add('terminalCursor.background', bg.light)

  // Группа базовых ANSI цветов
  builder.addGroup('terminal', {
    ansiBlack: bg.dark,
    ansiRed: red.main,
    ansiGreen: green.main,
    ansiYellow: yellow.main,
    ansiBlue: blue.main,
    ansiMagenta: purple.light,
    ansiCyan: cyan.light,
    ansiWhite: fg.main,
  })

  // Группа ярких ANSI цветов с улучшенным контрастом
  builder.addGroup('terminal', {
    ansiBrightBlack: neutral.main,
    ansiBrightRed: red.dark, // For errors
    ansiBrightGreen: green.dark, // For success
    ansiBrightYellow: yellow.light, // For warnings
    ansiBrightBlue: blue.light, // For information
    ansiBrightMagenta: purple.light,
    ansiBrightCyan: cyan.light,
    ansiBrightWhite: fg.light,
  })

  return builder.build()
}
