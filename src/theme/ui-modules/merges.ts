import { palette } from '../palette'

/**
 * Merges UI элементы
 * Эти токены отвечают за оформление элементов слияния (merge) в VS Code
 */
export const mergeColors = {
  // Merges
  'merge.border': palette.border, // Граница области слияния
  'merge.currentHeaderBackground': palette.greenAlpha1f, // Фон заголовка текущей ветки в merge
  'merge.currentContentBackground': palette.greenAlpha0f, // Фон содержимого текущей ветки в merge
  'merge.incomingHeaderBackground': palette.blueAlpha1f, // Фон заголовка входящей ветки в merge
  'merge.incomingContentBackground': palette.blueAlpha0f, // Фон содержимого входящей ветки в merge
  'merge.commonHeaderBackground': palette.yellowAlpha1a, // Фон заголовка общей ветки в merge
  'merge.commonContentBackground': palette.yellowAlpha0d, // Фон содержимого общей ветки в merge
}
