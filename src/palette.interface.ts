import type { Hex } from './types/palette'
import { basePalette } from './palette.base'
import { lightenToward } from './utils/color'

/**
 * Основные цвета интерфейса (editor background, foreground, border и т.д.)
 * Все остальные цвета должны быть производными от этих.
 */
export const interfaceColors = {
  editorBg: basePalette.black,
  editorFg: basePalette.white,
  border: lightenToward(basePalette.black, basePalette.white, 0.1), // Граница, немного светлее фона
  accent: basePalette.blue,
  error: basePalette.red,
  warning: basePalette.yellow,
  success: basePalette.green,
  info: basePalette.cyan,
} as const
