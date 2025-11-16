// Centralized base color definitions
import { fromMain } from '../utils/palette-helpers.js'

// Base chromatic main tones - оптимизированные для лучшей читаемости и контрастности
export const chromaMain = {
  pink: '#e07af5',
  violet: '#c678dd',
  fuchsia: '#d68ffc',
  purple: '#ab82f7',
  visited: '#9333ea',
  indigo: '#786ce0',
  blue: '#4aaaf8',
  sky: '#4fcdff',
  cyan: '#49c7d8',
  teal: '#57dac9',
  emerald: '#45dd91',
  green: '#98c379',
  lime: '#80d151',
  yellow: '#d6c3ac',
  amber: '#ffc66d',
  orange: '#ff9486',
  red: '#ff6b6b',
  rose: '#ff6ba4',
  neutral: '#a8aece',
  slate: '#7c87a4',
  stone: '#9aa5ce',
  zinc: '#a9b1d6',
  gray: '#c0caf5',
} as const

export const baseColors = {
  chromaMain,
  background: {
    base: fromMain('#18162b'),
    elevated: fromMain('#161229'),
    inset: fromMain('#101227'),
    overlay: fromMain('#100e24'),
  },
  foreground: {
    primary: fromMain('#c0caf5'),
    secondary: fromMain('#a9b1d6'),
    muted: fromMain('#9aa5ce'),
    disabled: fromMain('#565f89'),
  },
  shadow: {
    main: '#00000033',
    dark: '#0000004d',
    light: '#0000001a',
    bright: '#00000066',
  },
  ui: {
    white: '#ffffff',
    black: '#000000',
    badge: '#007acc',
    gray: {
      700: '#777777',
      800: '#888888',
      900: '#999999',
      a: '#aaaaaa',
      c: '#cccccc',
    },
  },
}
