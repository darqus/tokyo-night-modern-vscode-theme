import type { Hex } from './types/palette'

/**
 * Основная (базовая) палитра — только фундаментальные цвета,
 * из которых строится вся остальная тема.
 */
export const basePalette = {
  black: '#0d1117' as Hex,
  white: '#e8e8e8' as Hex,
  blue: '#7aa2f7' as Hex,
  cyan: '#7dcfff' as Hex,
  teal: '#73daca' as Hex,
  purple: '#9d7cd8' as Hex,
  magenta: '#bb9af7' as Hex,
  red: '#e46876' as Hex,
  green: '#9ece6a' as Hex,
  yellow: '#e0af68' as Hex,
  orange: '#ff9e64' as Hex,
} as const