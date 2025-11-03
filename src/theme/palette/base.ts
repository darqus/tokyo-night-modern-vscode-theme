export interface ColorVariant {
  dark: string
  main: string
  light: string
  bright?: string
}

export interface UnifiedPalette {
  background: ColorVariant
  foreground: ColorVariant
  blue: ColorVariant
  cyan: ColorVariant
  teal: ColorVariant
  green: ColorVariant
  purple: ColorVariant
  orange: ColorVariant
  yellow: ColorVariant
  red: ColorVariant
  pink: ColorVariant
  neutral: ColorVariant
  ui: {
    white: string
    black: string
    badge: string
  }
}

export const basePalette: UnifiedPalette = {
  background: {
    dark: '#16141f',
    main: '#1a1625',
    light: '#221e33',
    bright: '#352f47',
  },
  foreground: {
    dark: '#565f89',
    main: '#a9b1d6',
    light: '#c0caf5',
    bright: '#ffffff',
  },
  blue: {
    dark: '#3d59a1',
    main: '#7aa2f7',
    light: '#7dcfff',
    bright: '#b4f9f8',
  },
  cyan: {
    dark: '#449dab',
    main: '#7dcfff',
    light: '#b4f9f8',
    bright: '#cdf5f6',
  },
  teal: {
    dark: '#4fd6be',
    main: '#73daca',
    light: '#95e6cb',
    bright: '#b7f0d1',
  },
  green: {
    dark: '#73a373',
    main: '#9ece6a',
    light: '#b9f27c',
    bright: '#c3f584',
  },
  purple: {
    dark: '#9d7cd8',
    main: '#bb9af7',
    light: '#c0a7f7',
    bright: '#d0bfff',
  },
  orange: {
    dark: '#f7768e',
    main: '#ff9e64',
    light: '#ffb86c',
    bright: '#ffc777',
  },
  yellow: {
    dark: '#d18616',
    main: '#e0af68',
    light: '#e7c787',
    bright: '#ffc777',
  },
  red: {
    dark: '#db4b4b',
    main: '#f7768e',
    light: '#ff9cac',
    bright: '#ffb3ba',
  },
  pink: {
    dark: '#ad8ee6',
    main: '#bb9af7',
    light: '#c0a7f7',
    bright: '#d0bfff',
  },
  neutral: {
    dark: '#32344a',
    main: '#565f89',
    light: '#9699a3',
    bright: '#c0caf5',
  },
  ui: {
    white: '#ffffff',
    black: '#000000',
    badge: '#007acc',
  },
} as const
