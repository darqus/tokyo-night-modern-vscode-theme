import { getToken } from '../design-tokens'

/**
 * Merges UI элементы
 * Эти токены отвечают за оформление элементов слияния (merge) в VS Code
 */
export const mergeColors = {
  'merge.currentContentBackground': `${getToken('accent.primary')}44`, // Синий цвет с 44% прозрачности для текущего содержимого
  'merge.currentHeaderBackground': `${getToken('accent.primary')}AA`, // Синий цвет с AA прозрачности для заголовка текущего
  'merge.incomingContentBackground': `${getToken('accent.secondary')}44`, // Фиолетовый цвет с 44% прозрачности для входящего содержимого
  'merge.incomingHeaderBackground': `${getToken('accent.secondary')}AA`, // Фиолетовый цвет с AA прозрачности для заголовка входящего
}
