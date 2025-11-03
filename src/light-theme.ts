/**
 * Tokyo Modern Light Theme using unified palette
 * Light variant with consistent color structure
 */

import { UNIFIED_PALETTE } from './unified-palette'

// Light theme palette - inverted structure
const LIGHT_PALETTE = {
  background: {
    dark: '#ffffff', // Lightest background
    main: '#f7f7f7', // Main background
    light: '#f0f0f0', // Darker background
    bright: '#e8e8e8', // Darkest background
  },

  foreground: {
    dark: '#6172b0', // Lightest text
    main: '#3760bf', // Main text
    light: '#424242', // Darker text
    bright: '#1a1a1a', // Darkest text
  },

  // Use same accent colors but adjusted for light theme
  blue: {
    dark: '#1e3a8a',
    main: '#2e7de9',
    light: '#3b82f6',
    bright: '#60a5fa',
  },
  cyan: {
    dark: '#0e7490',
    main: '#007197',
    light: '#0891b2',
    bright: '#22d3ee',
  },
  teal: {
    dark: '#0f766e',
    main: '#0d9488',
    light: '#14b8a6',
    bright: '#5eead4',
  },
  green: {
    dark: '#365314',
    main: '#587539',
    light: '#65a30d',
    bright: '#84cc16',
  },
  purple: {
    dark: '#7c3aed',
    main: '#9854f1',
    light: '#a855f7',
    bright: '#c084fc',
  },
  orange: {
    dark: '#c2410c',
    main: '#b15c00',
    light: '#ea580c',
    bright: '#fb923c',
  },
  yellow: {
    dark: '#a16207',
    main: '#8c6c3e',
    light: '#ca8a04',
    bright: '#eab308',
  },
  red: {
    dark: '#dc2626',
    main: '#f52a65',
    light: '#ef4444',
    bright: '#f87171',
  },
  pink: {
    dark: '#be185d',
    main: '#ec4899',
    light: '#f472b6',
    bright: '#f9a8d4',
  },
  neutral: {
    dark: '#6b7280',
    main: '#9699a3',
    light: '#d1d5db',
    bright: '#f3f4f6',
  },
}

export const TOKYO_MODERN_LIGHT_THEME = {
  name: 'Tokyo Modern Light',
  type: 'light',
  semanticHighlighting: true,

  colors: {
    // Editor
    'editor.background': LIGHT_PALETTE.background.main,
    'editor.foreground': LIGHT_PALETTE.foreground.main,
    'editor.lineHighlightBackground': LIGHT_PALETTE.background.light,
    'editor.selectionBackground': LIGHT_PALETTE.blue.light,

    // UI
    'activityBar.background': LIGHT_PALETTE.background.dark,
    'activityBar.foreground': LIGHT_PALETTE.blue.main,
    'sideBar.background': LIGHT_PALETTE.background.light,
    'sideBar.foreground': LIGHT_PALETTE.foreground.light,
    'statusBar.background': LIGHT_PALETTE.background.dark,
    'statusBar.foreground': LIGHT_PALETTE.foreground.light,

    // Terminal
    'terminal.ansiBlack': LIGHT_PALETTE.foreground.bright,
    'terminal.ansiRed': LIGHT_PALETTE.red.main,
    'terminal.ansiGreen': LIGHT_PALETTE.green.main,
    'terminal.ansiYellow': LIGHT_PALETTE.yellow.main,
    'terminal.ansiBlue': LIGHT_PALETTE.blue.main,
    'terminal.ansiMagenta': LIGHT_PALETTE.purple.main,
    'terminal.ansiCyan': LIGHT_PALETTE.cyan.main,
    'terminal.ansiWhite': LIGHT_PALETTE.foreground.dark,
  },

  tokenColors: [
    {
      name: 'Comment',
      scope: ['comment'],
      settings: { foreground: LIGHT_PALETTE.neutral.main, fontStyle: 'italic' },
    },
    {
      name: 'Keyword',
      scope: ['keyword'],
      settings: { foreground: LIGHT_PALETTE.purple.main },
    },
    {
      name: 'String',
      scope: ['string'],
      settings: { foreground: LIGHT_PALETTE.green.main },
    },
    {
      name: 'Number',
      scope: ['constant.numeric'],
      settings: { foreground: LIGHT_PALETTE.orange.main },
    },
    {
      name: 'Function',
      scope: ['entity.name.function'],
      settings: { foreground: LIGHT_PALETTE.blue.main },
    },
    {
      name: 'Variable',
      scope: ['variable'],
      settings: { foreground: LIGHT_PALETTE.foreground.main },
    },
    {
      name: 'Type',
      scope: ['entity.name.type', 'support.type'],
      settings: { foreground: LIGHT_PALETTE.cyan.main },
    },
  ],

  semanticTokenColors: {
    variable: { foreground: LIGHT_PALETTE.foreground.main },
    function: { foreground: LIGHT_PALETTE.blue.main },
    class: { foreground: LIGHT_PALETTE.cyan.main },
    type: { foreground: LIGHT_PALETTE.purple.main },
    keyword: { foreground: LIGHT_PALETTE.purple.main },
    string: { foreground: LIGHT_PALETTE.green.main },
    number: { foreground: LIGHT_PALETTE.orange.main },
    comment: { foreground: LIGHT_PALETTE.neutral.main, fontStyle: 'italic' },
  },
}
