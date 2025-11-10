// Centralized base color definitions
import { fromMain } from '../utils/palette-helpers.js'

// Base chromatic main tones
export const chromaMain = {
  pink: '#e07af5',
  purple: '#6e60ef',
  indigo: '#4d9cf7',
  blue: '#5a9ffa',
  cyan: '#49c7d8',
  teal: '#57dac9',
  emerald: '#45dd91',
  green: '#9ece6a',
  lime: '#80d151',
  yellow: '#d6c3ac',
  amber: '#e0af68',
  orange: '#dba280',
  red: '#f7768e',
  neutral: '#939bc4',
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
  },
}
