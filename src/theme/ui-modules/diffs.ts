import { palette } from '../palette/index'

/**
 * Diffs UI элементы
 * Эти токены отвечают за оформление элементов сравнения (diff) в VS Code
 */
export const diffColors = {
  'diffEditor.insertedTextBackground': palette.success + '20', // Зеленый цвет с 20% прозрачности
  'diffEditor.removedTextBackground': palette.error + '22', // Красный цвет с 22% прозрачности
}
