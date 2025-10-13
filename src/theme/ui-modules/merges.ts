import { palette } from '../palette/index'

/**
 * Merges UI элементы
 * Эти токены отвечают за оформление элементов слияния (merge) в VS Code
 */
export const mergeColors = {
  'merge.currentContentBackground': palette.blue + '44', // Синий цвет с 44% прозрачности для текущего содержимого
  'merge.currentHeaderBackground': palette.blue + 'AA', // Синий цвет с AA прозрачности для заголовка текущего
  'merge.incomingContentBackground': palette.purple + '44', // Фиолетовый цвет с 44% прозрачности для входящего содержимого
  'merge.incomingHeaderBackground': palette.purple + 'AA', // Фиолетовый цвет с AA прозрачности для заголовка входящего
}
