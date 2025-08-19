import { palette } from '../palette'
import { withAlpha } from '../utils/color'

export const getDiffEditorColors = () => ({
  // Редактор сравнения (Diff)
  'diffEditor.insertedTextBackground': withAlpha(palette.accent.cyan, 0.15),
  'diffEditor.removedTextBackground': withAlpha(palette.accent.red, 0.15),
  'diffEditor.insertedTextBorder': withAlpha(palette.accent.cyan, 0),
  'diffEditor.removedTextBorder': withAlpha(palette.accent.red, 0),
  'diffEditor.insertedLineBackground': withAlpha(palette.accent.cyan, 0.1),
  'diffEditor.removedLineBackground': withAlpha(palette.accent.red, 0.1),
  'diffEditor.diagonalFill': withAlpha(palette.fg.subtle, 0.2),
})
