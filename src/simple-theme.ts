/**
 * Simplified static theme definition using unified palette
 * Replaces complex TypeScript generation with direct JSON structure
 */

import { UNIFIED_PALETTE } from './unified-palette'

const {
  background,
  foreground,
  blue,
  cyan,
  green,
  purple,
  orange,
  yellow,
  red,
  neutral,
} = UNIFIED_PALETTE

export const TOKYO_MODERN_THEME = {
  name: 'Tokyo Modern',
  type: 'dark',
  semanticHighlighting: true,

  colors: {
    // Editor
    'editor.background': background.main,
    'editor.foreground': foreground.main,
    'editor.lineHighlightBackground': background.light,
    'editor.selectionBackground': blue.dark,

    // UI
    'activityBar.background': background.dark,
    'activityBar.foreground': blue.main,
    'sideBar.background': background.dark,
    'sideBar.foreground': foreground.main,
    'statusBar.background': background.dark,
    'statusBar.foreground': foreground.main,

    // Terminal
    'terminal.ansiBlack': background.bright,
    'terminal.ansiRed': red.main,
    'terminal.ansiGreen': green.main,
    'terminal.ansiYellow': yellow.main,
    'terminal.ansiBlue': blue.main,
    'terminal.ansiMagenta': purple.main,
    'terminal.ansiCyan': cyan.main,
    'terminal.ansiWhite': foreground.light,
  },

  tokenColors: [
    {
      name: 'Comment',
      scope: ['comment'],
      settings: { foreground: neutral.main, fontStyle: 'italic' },
    },
    {
      name: 'Keyword',
      scope: ['keyword'],
      settings: { foreground: purple.main },
    },
    {
      name: 'String',
      scope: ['string'],
      settings: { foreground: green.main },
    },
    {
      name: 'Number',
      scope: ['constant.numeric'],
      settings: { foreground: orange.main },
    },
    {
      name: 'Function',
      scope: ['entity.name.function'],
      settings: { foreground: blue.main },
    },
    {
      name: 'Variable',
      scope: ['variable'],
      settings: { foreground: foreground.light },
    },
    {
      name: 'Type',
      scope: ['entity.name.type', 'support.type'],
      settings: { foreground: cyan.main },
    },
  ],

  semanticTokenColors: {
    variable: { foreground: foreground.light },
    function: { foreground: blue.main },
    class: { foreground: cyan.main },
    type: { foreground: purple.main },
    keyword: { foreground: purple.main },
    string: { foreground: green.main },
    number: { foreground: orange.main },
    comment: { foreground: neutral.main, fontStyle: 'italic' },
  },
}
