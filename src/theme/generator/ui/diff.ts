import { palette } from '../../palette/index.js'
import { alpha, lighten } from '../../utils/color.js'

export function generateDiffColors(): Record<string, string> {
  const { green, red, bg } = palette

  return {
    'diffEditor.insertedTextBackground': alpha(green.dark, 0.125),
    'diffEditor.removedTextBackground': alpha(red.dark, 0.13),
    'diffEditor.insertedLineBackground': alpha(green.dark, 0.125),
    'diffEditor.removedLineBackground': alpha(red.dark, 0.13),
    'diffEditorGutter.insertedLineBackground': alpha(green.dark, 0.15),
    'diffEditorGutter.removedLineBackground': alpha(red.dark, 0.13),
    'diffEditorOverview.insertedForeground': alpha(green.dark, 0.15),
    'diffEditorOverview.removedForeground': alpha(red.dark, 0.13),
    'diffEditor.diagonalFill': lighten(bg.main, 0.08),
    'diffEditor.unchangedCodeBackground': alpha(lighten(bg.main, 0.06), 0.4),
    'multiDiffEditor.headerBackground': bg.light,
    'multiDiffEditor.border': bg.light,
  }
}
