import { foundationColors } from '../palette/foundation/colors'
import { opacityLevels } from '../palette/foundation/opacity'

/**
 * Diffs UI элементы
 * Эти токены отвечают за оформление элементов сравнения (diff) в VS Code
 */
export const diffColors = {
  'diffEditor.insertedTextBackground':
    foundationColors.green500 + opacityLevels.light, // Зеленый цвет с 20% прозрачности
  'diffEditor.removedTextBackground': `${foundationColors.red500}22`, // Красный цвет с 22% прозрачности
}
