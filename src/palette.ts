export type Hex = `#${string}`

export interface Palette {
  bg: {
    base: Hex
    elevated: Hex
    sunken: Hex
    overlay: Hex
    selection: {
      active: Hex
      inactive: Hex
      focus: Hex
      menu: Hex
    }
  }
  line: {
    border: Hex
    menu: Hex
  }
  fg: {
    primary: Hex
    muted: Hex
    subtle: Hex
    inactive: Hex
    soft: Hex
    softTitle: Hex
    selectionText: Hex
    onSelection: Hex
    activeTitle: Hex
  }
  brand: {
    primary: Hex
  }
  accent: {
    blue: Hex
    cyan: Hex
    teal: Hex
    magenta: Hex
    yellow: Hex
    orange: Hex
    red: Hex
    purple: Hex
  }
  ansi: {
    black: Hex
    brightBlack: Hex
    red: Hex
    brightRed: Hex
    green: Hex
    brightGreen: Hex
    yellow: Hex
    brightYellow: Hex
    blue: Hex
    brightBlue: Hex
    magenta: Hex
    brightMagenta: Hex
    cyan: Hex
    brightCyan: Hex
    white: Hex
    brightWhite: Hex
  }
}

export const palette: Palette = {
  bg: {
    base: '#16161c',
    elevated: '#1a1a22',
    sunken: '#121215',
    overlay: '#1a1a1e',
    selection: {
      active: '#1a2030',
      inactive: '#181c28',
      focus: '#161c28',
      menu: '#2a2d3a',
    },
  },
  line: {
    border: '#1a1a1c',
    menu: '#1b1e2e',
  },
  fg: {
    primary: '#a9b1d6',
    muted: '#8a8ea8',
    subtle: '#545c7e',
    inactive: '#787c99',
    soft: '#a8b2d0',
    softTitle: '#b8c2e8',
    selectionText: '#c8d2f0',
    onSelection: '#d8e2f8',
    activeTitle: '#9ca6c8',
  },
  brand: {
    primary: '#3d59a1',
  },
  accent: {
    blue: '#7aa2f7',
    cyan: '#7dcfff',
    teal: '#73daca',
    magenta: '#bb9af7',
    yellow: '#e0af68',
    orange: '#ff9e64',
    red: '#f7768e',
    purple: '#9d7cd8',
  },
  ansi: {
    black: '#363b54',
    brightBlack: '#363b54',
    red: '#f7768e',
    brightRed: '#f7768e',
    green: '#73daca',
    brightGreen: '#73daca',
    yellow: '#e0af68',
    brightYellow: '#e0af68',
    blue: '#7aa2f7',
    brightBlue: '#7aa2f7',
    magenta: '#bb9af7',
    brightMagenta: '#bb9af7',
    cyan: '#7dcfff',
    brightCyan: '#7dcfff',
    white: '#a9b1d6',
    brightWhite: '#c0caf5',
  },
}
