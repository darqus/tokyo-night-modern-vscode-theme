// Centralized base color definitions
import { darken, lighten } from '../utils/color.js'
import { ADJUST } from '../utils/color-helpers.js'

// Base chromatic main tones
export const chromaMain = {
  pink: '#cd66dd',
  purple: '#a686ff',
  indigo: '#8484fc',
  blue: '#57aef5',
  cyan: '#74eff3',
  teal: '#60bebe',
  emerald: '#10b981',
  green: '#79d68c',
  lime: '#99cc40',
  orange: '#cc936e',
  amber: '#f0ba74',
  yellow: '#d8cf91',
  red: '#f33f8a',
  neutral: '#939bc4',
} as const

// Helper to build ColorVariant from a main color
const fromMain = (
  main: string,
  opts?: { d?: number; l?: number; b?: number }
) => {
  const d = opts?.d ?? ADJUST.MEDIUM
  const l = opts?.l ?? ADJUST.LIGHT
  const b = opts?.b ?? ADJUST.STRONG
  return {
    dark: darken(main, d),
    main,
    light: lighten(main, l),
    bright: lighten(main, b),
  }
}

export const baseColors = {
  chromaMain,
  background: {
    base: fromMain('#18162c'),
  },
  foreground: {
    primary: fromMain('#a8bee4'),
  },
  ui: {
    white: '#ffffff',
    black: '#000000',
    badge: '#007acc',
  },
}
