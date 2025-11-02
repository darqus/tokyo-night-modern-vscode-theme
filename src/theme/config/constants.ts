/**
 * Centralized constants for theme configuration
 */

export const THEME_CONSTANTS = {
  // Color generation parameters
  COLOR_GENERATION: {
    LIGHTEN_AMOUNTS: {
      SUBTLE: 0.03,
      LIGHT: 0.08,
      LIGHTER: 0.12,
      LIGHTEST: 0.18,
      BRIGHT: 0.25,
    },
    DARKEN_AMOUNTS: {
      SUBTLE: 0.08,
      DARK: 0.12,
      DARKER: 0.15,
      DARKEST: 0.2,
    },
  },

  // Contrast requirements
  CONTRAST: {
    MIN_AA: 4.5,
    MIN_AAA: 7.0,
    CRITICAL_PAIRS: [
      ['editor.foreground', 'editor.background'],
      ['foreground', 'background'],
    ],
  },

  // Performance settings
  PERFORMANCE: {
    CACHE_SIZE_LIMIT: 1000,
    MEMOIZATION_ENABLED: true,
  },

  // Validation settings
  VALIDATION: {
    STRICT_MODE: false,
    REQUIRED_COLORS: [
      'editor.background',
      'editor.foreground',
      'activityBar.background',
      'sideBar.background',
    ],
  },
} as const

export type ThemeConstants = typeof THEME_CONSTANTS
