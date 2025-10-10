import { palette } from '../palette'

/**
 * Diffs UI элементы
 * Эти токены отвечают за оформление элементов сравнения (diff) в VS Code
 */
export const diffColors = {
  // Diffs
  'diffEditor.insertedTextBackground': palette.greenAlpha1f, // Фон вставленного текста в diff
  'diffEditor.removedTextBackground': palette.redAlpha1f, // Фон удаленного текста в diff
  'diffEditor.insertedLineBackground': palette.greenAlpha14, // Фон вставленной строки в diff
  'diffEditor.removedLineBackground': palette.redAlpha14, // Фон удаленной строки в diff
  'diffEditor.diagonalFill': palette.backgroundPanel, // Диагональная заливка в diff
}
