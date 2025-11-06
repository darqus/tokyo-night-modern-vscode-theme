import { c, colorRules } from '../../utils/color-builder.js'

export function generateDiffColors(): Record<string, string> {
  return colorRules()
    .addGroup('diffEditor', {
      insertedTextBackground: c.green.dark,
      insertedLineBackground: c.green.dark + '20',
      removedTextBackground: c.red.dark,
      removedLineBackground: c.red.dark + '20',
      diagonalFill: c.neutral.main + '40',
      unchangedCodeBackground: c.bg.light + '80',
    })
    .addGroup('multiDiffEditor', {
      headerBackground: c.bg.dark,
      border: c.neutral.main,
    })
    .build()
}
