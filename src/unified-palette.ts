/**
 * Unified palette with consistent structure for all colors
 * All colors follow the same pattern: { dark, main, light, bright? }
 */

export interface ColorVariant {
  dark: string
  main: string
  light: string
  bright?: string
}

export interface UnifiedPalette {
  // Base colors
  background: ColorVariant
  foreground: ColorVariant

  // Accent colors - all follow same structure
  blue: ColorVariant
  cyan: ColorVariant
  teal: ColorVariant
  green: ColorVariant
  purple: ColorVariant
  orange: ColorVariant
  yellow: ColorVariant
  red: ColorVariant
  pink: ColorVariant

  // Neutral colors
  neutral: ColorVariant
}

export const UNIFIED_PALETTE: UnifiedPalette = {
  background: {
    dark: '#16161e', // Darkest background
    main: '#1a1b26', // Main background
    light: '#24283b', // Light background
    bright: '#414868', // Brightest background
  },

  foreground: {
    dark: '#565f89', // Dim text
    main: '#a9b1d6', // Main text
    light: '#c0caf5', // Light text
    bright: '#ffffff', // Brightest text
  },

  blue: {
    dark: '#3d59a1', // Dark blue
    main: '#7aa2f7', // Main blue
    light: '#7dcfff', // Light blue
    bright: '#b4f9f8', // Bright blue
  },

  cyan: {
    dark: '#449dab', // Dark cyan
    main: '#7dcfff', // Main cyan
    light: '#b4f9f8', // Light cyan
    bright: '#cdf5f6', // Bright cyan
  },

  teal: {
    dark: '#4fd6be', // Dark teal
    main: '#73daca', // Main teal
    light: '#95e6cb', // Light teal
    bright: '#b7f0d1', // Bright teal
  },

  green: {
    dark: '#73a373', // Dark green
    main: '#9ece6a', // Main green
    light: '#b9f27c', // Light green
    bright: '#c3f584', // Bright green
  },

  purple: {
    dark: '#9d7cd8', // Dark purple
    main: '#bb9af7', // Main purple
    light: '#c0a7f7', // Light purple
    bright: '#d0bfff', // Bright purple
  },

  orange: {
    dark: '#f7768e', // Dark orange
    main: '#ff9e64', // Main orange
    light: '#ffb86c', // Light orange
    bright: '#ffc777', // Bright orange
  },

  yellow: {
    dark: '#d18616', // Dark yellow
    main: '#e0af68', // Main yellow
    light: '#e7c787', // Light yellow
    bright: '#ffc777', // Bright yellow
  },

  red: {
    dark: '#db4b4b', // Dark red
    main: '#f7768e', // Main red
    light: '#ff9cac', // Light red
    bright: '#ffb3ba', // Bright red
  },

  pink: {
    dark: '#ad8ee6', // Dark pink
    main: '#bb9af7', // Main pink
    light: '#c0a7f7', // Light pink
    bright: '#d0bfff', // Bright pink
  },

  neutral: {
    dark: '#32344a', // Dark neutral
    main: '#565f89', // Main neutral
    light: '#9699a3', // Light neutral
    bright: '#c0caf5', // Bright neutral
  },
}
