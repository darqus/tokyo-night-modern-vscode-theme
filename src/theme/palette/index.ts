import type { Palette } from '../types'

export const palette: Palette = {
  bg: {
    darkest: '#0d0f17',
    darker: '#101014',
    dark: '#14141b',
    main: '#16161e',
    editor: '#1a1b26',
    light: '#1c1d29',
    lighter: '#1e202e',
    lightest: '#202330',
  },

  fg: {
    dim: '#515670',
    muted: '#51597d',
    medium: '#787c99',
    bright: '#9aa5ce',
    brighter: '#a9b1d6',
    brightest: '#c0caf5',
  },

  blue: {
    primary: '#3d59a1',
    light: '#6183bb',
    medium: '#7aa2f7',
  },

  cyan: {
    dark: '#0db9d7',
    medium: '#0da0ba',
    light: '#7dcfff',
    bright: '#89ddff',
  },

  teal: {
    main: '#73daca',
    dark: '#449dab',
  },

  green: {
    main: '#9ece6a',
    dark: '#41a6b5',
  },

  purple: {
    light: '#bb9af7',
    dark: '#9d7cd8',
    bright: '#b267e6',
  },

  orange: '#ff9e64',

  yellow: {
    main: '#e0af68',
    light: '#ffdb69',
    muted: '#c49a5a',
  },

  red: {
    main: '#f7768e',
    dark: '#db4b4b',
    muted: '#914c54',
  },

  pink: {
    main: '#ba3c97',
    light: '#de5971',
    bright: '#fc7b7b',
  },

  special: {
    regex: '#b4f9f8',
    invalid: '#ff5370',
    selection: '#515c7e',
    indentGuide: '#363b54',
    indentActive: '#42465d',
    border: '#29355a',
    disabled: '#545c7e',
    badge: '#7e83b2',
    scrollbar: '#868bc4',
    ghostText: '#646e9c',
    inactive: '#3b3e52',
  },
}
