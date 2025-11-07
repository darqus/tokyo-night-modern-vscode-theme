import type { ColorVariant } from './base.js'

/**
 * Интерфейс для семантических цветов
 */
export interface SemanticColors {
  success: ColorVariant
  warning: ColorVariant
  error: ColorVariant
  info: ColorVariant
  accent: ColorVariant
}

/**
 * Интерфейс для цветов фона
 */
export interface BackgroundColors {
  base: ColorVariant
  elevated: ColorVariant
  inset: ColorVariant
  overlay: ColorVariant
}

/**
 * Интерфейс для цветов текста
 */
export interface ForegroundColors {
  primary: ColorVariant
  secondary: ColorVariant
  muted: ColorVariant
  disabled: ColorVariant
}

/**
 * Интерфейс для UI-цветов
 */
export interface UIColors {
  white: string
  black: string
  badge: string
  border: ColorVariant
  scrollbar: ColorVariant
  selection: ColorVariant
}

/**
 * Универсальная палитра с расширенной структурой
 */
export interface UniversalPalette {
  background: BackgroundColors
  foreground: ForegroundColors
  semantic: SemanticColors
  chromatic: {
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
    rose: ColorVariant
    amber: ColorVariant
    emerald: ColorVariant
  }
  ui: UIColors
  shadow: ColorVariant
}

/**
 * Расширенная базовая палитра с улучшенной структурой
 */
export const universalBasePalette: UniversalPalette = {
  background: {
    base: {
      dark: '#151127',
      main: '#18162c',
      light: '#1d1931',
      bright: '#1d1a33',
    },
    elevated: {
      dark: '#1a1632',
      main: '#1e1a37',
      light: '#231f3c',
      bright: '#282442',
    },
    inset: {
      dark: '#120f1f',
      main: '#151225',
      light: '#19162a',
      bright: '#1c192e',
    },
    overlay: {
      dark: '#0f0c1a',
      main: '#120f20',
      light: '#161325',
      bright: '#1a172a',
    },
  },
  foreground: {
    primary: {
      dark: '#8fa5cf',
      main: '#a8bee4',
      light: '#bacaf8',
      bright: '#e6eeff',
    },
    secondary: {
      dark: '#7a8fb0',
      main: '#94a9d0',
      light: '#aecaef',
      bright: '#d0e0ff',
    },
    muted: {
      dark: '#657a9c',
      main: '#7f94b8',
      light: '#99adce',
      bright: '#b3c6e4',
    },
    disabled: {
      dark: '#4f6280',
      main: '#697c9a',
      light: '#8396b2',
      bright: '#9db0ca',
    },
  },
  semantic: {
    success: {
      dark: '#2a9657',
      main: '#79d68c',
      light: '#99e6a9',
      bright: '#ccf8d4',
    },
    warning: {
      dark: '#b45309',
      main: '#f59e0b',
      light: '#fbbf24',
      bright: '#fcd34d',
    },
    error: {
      dark: '#7a3a4a',
      main: '#ff6b7a',
      light: '#eea6b6',
      bright: '#f8c6d0',
    },
    info: {
      dark: '#2a5db4',
      main: '#66a9ff',
      light: '#7fb5ff',
      bright: '#d6e6ff',
    },
    accent: {
      dark: '#754da0',
      main: '#d48ae0',
      light: '#e6b4ec',
      bright: '#f0c4f1',
    },
  },
  chromatic: {
    blue: {
      dark: '#2a5db4',
      main: '#66a9ff',
      light: '#7fb5ff',
      bright: '#d6e6ff',
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
    purple: {
      dark: '#7a4db4',
      main: '#9976db',
      light: '#c2a9ff',
      bright: '#e6ccff',
    },
    orange: {
      dark: '#a66a29',
      main: '#e0945a',
      light: '#eea870',
      bright: '#ffd9a3',
    },
    yellow: {
      dark: '#cccc22',
      main: '#f0d440',
      light: '#ffe766',
      bright: '#ffed8c',
    },
    red: {
      dark: '#7a3a4a',
      main: '#ff6b7a',
      light: '#eea6b6',
      bright: '#f8c6d0',
    },
    pink: {
      dark: '#754da0',
      main: '#d48ae0',
      light: '#e6b4ec',
      bright: '#f0c4f1',
    },
    neutral: {
      dark: '#7284a6',
      main: '#939bc4',
      light: '#aabdc9',
      bright: '#d0d9f3',
    },
    indigo: {
      dark: '#4a4db4',
      main: '#7a7aff',
      light: '#a0a0ff',
      bright: '#d6d6ff',
    },
    lime: {
      dark: '#6aa629',
      main: '#99cc40',
      light: '#b3e666',
      bright: '#ccf08c',
    },
    magenta: {
      dark: '#a6296a',
      main: '#e666b3',
      light: '#e666b3',
      bright: '#f08ccc',
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
  },
  ui: {
    white: '#ffffff',
    black: '#000000',
    badge: '#007acc',
    border: {
      dark: '#2d2942',
      main: '#3a364f',
      light: '#47435c',
      bright: '#545069',
    },
    scrollbar: {
      dark: '#3a364f',
      main: '#47435c',
      light: '#545069',
      bright: '#615d76',
    },
    selection: {
      dark: '#2d2942',
      main: '#3a364f',
      light: '#47435c',
      bright: '#545069',
    },
  },
  shadow: {
    main: '#00000033',
    dark: '#0000004d',
    light: '#0000001a',
    bright: '#00000066',
  },
}
