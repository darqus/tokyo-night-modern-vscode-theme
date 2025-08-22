import type { Hex } from './types/palette'
import { basePalette } from './palette.base'

/**
 * Основные цвета интерфейса (editor background, foreground, border и т.д.)
 * Все остальные цвета должны быть производными от этих.
 */
export const interfaceColors = {
  editorBg: basePalette.black,
  editorFg: basePalette.white,
  border: '#262733' as Hex, // можно вынести в basePalette, если используется часто
  accent: basePalette.blue,
  error: basePalette.red,
  warning: basePalette.yellow,
  success: basePalette.green,
  info: basePalette.cyan,
} as const
