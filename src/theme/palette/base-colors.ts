// Centralized base color definitions
import { fromMain } from '../utils/palette-helpers.js'

// Base chromatic main tones
export const chromaMain = {
  pink: '#cd66dd',
  purple: '#a686ff',
  indigo: '#8484fc',
  blue: '#4eacf8',
  cyan: '#74eff3',
  teal: '#3ebdbd',
  emerald: '#42ad5d',
  green: '#3bb469',
  lime: '#a8da52',
  yellow: '#cfc9c2',
  amber: '#e0af68',
  orange: '#ff9e64',
  red: '#f7768e',
  neutral: '#939bc4',
} as const

export const baseColors = {
  chromaMain,
  background: {
    base: fromMain('#18162c'),
    elevated: fromMain('#1e1a37'),
    inset: fromMain('#151225'),
    overlay: fromMain('#120f20'),
  },
  foreground: {
    primary: fromMain('#a8bee4'),
    secondary: fromMain('#94a9d0'),
    muted: fromMain('#7f94b8'),
    disabled: fromMain('#697c9a'),
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
