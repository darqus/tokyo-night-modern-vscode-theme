/**
 * Constants for test files to avoid hardcoded values
 */

export const TEST_COLORS = {
  RED: '#ff0000',
  GREEN: '#00ff00',
  BLUE: '#0000ff',
  WHITE: '#ffffff',
  BLACK: '#000000',
  GRAY: '#808080',
  CYAN: '#00ffff',
  MAGENTA: '#ff00ff',
  YELLOW: '#ffff00',
  PURPLE: '#800080',
  ORANGE: '#ffa500',
  PINK: '#ffc0cb',
  LIME: '#00ff00',
  TEAL: '#008080',
  NAVY: '#000080',
  MAROON: '#800000',
  OLIVE: '#808000',
  SILVER: '#c0c0c0',
  AQUA: '#00ffff',
  FUCHSIA: '#ff00ff',
} as const

export const TEST_FONT_STYLES = {
  BOLD: 'bold',
  ITALIC: 'italic',
  BOLD_ITALIC: 'bold italic',
  UNDERLINE: 'underline',
} as const

export const TEST_OPACITY = {
  FULL: 1,
  HALF: 0.5,
  QUARTER: 0.25,
  ZERO: 0,
} as const
