export interface ColorVariant {
  dark: string
  main: string
  light: string
  bright: string
}

interface ColorsUI {
  white: string
  black: string
  badge: string
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
  indigo: ColorVariant
  lime: ColorVariant
  magenta: ColorVariant
  violet: ColorVariant
  rose: ColorVariant
  amber: ColorVariant
  emerald: ColorVariant
  ui: ColorsUI
}

export const basePalette: UnifiedPalette = {
  background: {
    dark: '#151127',
    main: '#18162c',
    light: '#1d1931',
    bright: '#1d1a33',
  },
  foreground: {
    dark: '#8fa5cf',
    main: '#a8bee4',
    light: '#bacaf8',
    bright: '#e6eeff',
  },
  pink: {
    dark: '#754da0',
    main: '#d48ae0',
    light: '#e6b4ec',
    bright: '#f0c4f1',
  },
  purple: {
    dark: '#7a4db4',
    main: '#9976db',
    light: '#c2a9ff',
    bright: '#e6ccff',
  },
  magenta: {
    dark: '#a6296a',
    main: '#e666b3',
    light: '#e666b3',
    bright: '#f08ccc',
  },
  blue: {
    dark: '#2a5db4',
    main: '#66a9ff',
    light: '#7fb5ff',
    bright: '#d6e6ff',
  },
  indigo: {
    dark: '#4a4db4',
    main: '#7a7aff',
    light: '#a0a0ff',
    bright: '#d6d6ff',
  },
  cyan: {
    dark: '#208ab0',
    main: '#4dd8f0',
    light: '#80e6ff',
    bright: '#b3f6ff',
  },
  teal: {
    dark: '#20a09d',
    main: '#4de0d8',
    light: '#80f0e6',
    bright: '#b3f8f6',
  },
  green: {
    dark: '#2a9657',
    main: '#79d68c',
    light: '#99e6a9',
    bright: '#ccf8d4',
  },
  lime: {
    dark: '#6aa629',
    main: '#99cc40',
    light: '#b3e666',
    bright: '#ccf08c',
  },
  yellow: {
    dark: '#cccc22',
    main: '#f0d440',
    light: '#ffe766',
    bright: '#ffed8c',
  },
  orange: {
    dark: '#a66a29',
    main: '#e0945a',
    light: '#eea870',
    bright: '#ffd9a3',
  },
  red: {
    dark: '#7a3a4a',
    main: '#ff6b7a',
    light: '#eea6b6',
    bright: '#f8c6d0',
  },
  neutral: {
    dark: '#7284a6',
    main: '#939bc4',
    light: '#aabdc9',
    bright: '#d0d9f3',
  },
  violet: {
    dark: '#7b3eea',
    main: '#8b5cf6',
    light: '#a78bfa',
    bright: '#c4b5fd',
  },
  rose: {
    dark: '#d94665',
    main: '#f43f5e',
    light: '#fb7185',
    bright: '#fda4af',
  },
  amber: {
    dark: '#b45309',
    main: '#f59e0b',
    light: '#fbbf24',
    bright: '#fcd34d',
  },
  emerald: {
    dark: '#047857',
    main: '#10b981',
    light: '#34d399',
    bright: '#6ee7b7',
  },
  ui: {
    white: '#ffffff',
    black: '#000000',
    badge: '#007acc',
  },
} as const
