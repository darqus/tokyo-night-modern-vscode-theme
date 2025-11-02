/**
 * Centralized theme configuration
 *
 * All theme generation parameters are collected here for convenient management
 * and potential functionality expansion (e.g., generating multiple variants)
 */

/**
 * Tokyo Modern theme configuration
 */
export const THEME_CONFIG = {
  /**
   * Theme name
   */
  name: 'Tokyo Modern',

  /**
   * Theme type (dark/light)
   */
  type: 'dark' as const,

  /**
   * Enable semantic syntax highlighting
   */
  semanticHighlighting: true,
} as const

/**
 * Theme configuration type
 */
export type ThemeConfig = typeof THEME_CONFIG
