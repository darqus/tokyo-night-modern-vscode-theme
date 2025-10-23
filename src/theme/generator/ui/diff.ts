import { palette } from '../../palette'
import { alpha } from '../../utils/color'

export function generateDiffColors(): Record<string, string> {
  const { green, red } = palette

  return {
    'diffEditor.insertedTextBackground': alpha(green.dark, 0.125),
    'diffEditor.removedTextBackground': alpha(red.dark, 0.13),
    'diffEditor.insertedLineBackground': alpha(green.dark, 0.125),
    'diffEditor.removedLineBackground': alpha(red.dark, 0.13),
    'diffEditorGutter.insertedLineBackground': alpha(green.dark, 0.15),
    'diffEditorGutter.removedLineBackground': alpha(red.dark, 0.13),
    'diffEditorOverview.insertedForeground': alpha(green.dark, 0.15),
    'diffEditorOverview.removedForeground': alpha(red.dark, 0.13),
    'diffEditor.diagonalFill': '#292e42',
    'diffEditor.unchangedCodeBackground': alpha('#282a3b', 0.4),
    'multiDiffEditor.headerBackground': palette.bg.editor,
    'multiDiffEditor.border': palette.bg.editor,
  }
}
