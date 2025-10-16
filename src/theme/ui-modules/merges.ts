import { foundationColors } from '../palette/foundation/colors'

/**
 * Merges UI элементы
 * Эти токены отвечают за оформление элементов слияния (merge) в VS Code
 */
export const mergeColors = {
  'merge.currentContentBackground': foundationColors.blue500 + '44', // Синий цвет с 44% прозрачности для текущего содержимого
  'merge.currentHeaderBackground': foundationColors.blue500 + 'AA', // Синий цвет с AA прозрачности для заголовка текущего
  'merge.incomingContentBackground': foundationColors.purple500 + '44', // Фиолетовый цвет с 44% прозрачности для входящего содержимого
  'merge.incomingHeaderBackground': foundationColors.purple500 + 'AA', // Фиолетовый цвет с AA прозрачности для заголовка входящего
}
