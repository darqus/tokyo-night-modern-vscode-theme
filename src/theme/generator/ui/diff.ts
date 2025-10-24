import { palette } from '../../palette'
import { alpha } from '../../utils/color'
import { ensureContrast } from '../../utils/contrast'

export function generateDiffColors(): Record<string, string> {
  const { green, red, bg } = palette

  // Улучшенные цвета для diff с обеспечением контрастности
  const enhancedGreen = ensureContrast(green.dark, bg.editor, 3.0)
  const enhancedRed = ensureContrast(red.dark, bg.editor, 3.0)

  return {
    'diffEditor.insertedTextBackground': alpha(enhancedGreen, 0.2), // Увеличил непрозрачность
    'diffEditor.removedTextBackground': alpha(enhancedRed, 0.2), // Увеличил непрозрачность
    'diffEditor.insertedLineBackground': alpha(enhancedGreen, 0.15), // Увеличил непрозрачность
    'diffEditor.removedLineBackground': alpha(enhancedRed, 0.15), // Увеличил непрозрачность
    'diffEditorGutter.insertedLineBackground': alpha(enhancedGreen, 0.25), // Увеличил непрозрачность
    'diffEditorGutter.removedLineBackground': alpha(enhancedRed, 0.2), // Увеличил непрозрачность
    'diffEditorOverview.insertedForeground': alpha(enhancedGreen, 0.3), // Увеличил непрозрачность
    'diffEditorOverview.removedForeground': alpha(enhancedRed, 0.25), // Увеличил непрозрачность
    'diffEditor.diagonalFill': ensureContrast(
      palette.ui.diffDiagonal,
      bg.editor,
      1.5
    ),
    'diffEditor.unchangedCodeBackground': alpha(palette.ui.diffUnchanged, 0.5), // Увеличил непрозрачность
    'multiDiffEditor.headerBackground': bg.editor,
    'multiDiffEditor.border': ensureContrast(bg.editor, bg.main, 1.5),
  }
}
