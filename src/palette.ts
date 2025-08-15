export type Hex = `#${string}`

/**
 * The main color palette for the Tokyo Night Dark theme.
 *
 * Organized by functional groups for easy understanding and maintenance.
 * All colors use hex format with type safety.
 */
export interface Palette {
  /** Background colors - from darkest to lightest */
  bg: {
    /** Main background of the editor and side panels */
    base: Hex
    /** Elevated elements (panels, dialogs) */
    elevated: Hex
    /** Sunken areas (statusbar, some panels) */
    sunken: Hex
    /** Overlays and modal windows */
    overlay: Hex
    /** Input fields and forms */
    input: Hex
    /** Hover state for interactive elements */
    hover: Hex
    /** Active/pressed elements */
    active: Hex
    /** Drop zones for drag&drop */
    drop: Hex
    /** Current line highlight */
    lineHighlight: Hex
    /** Matching bracket highlight */
    bracketMatch: Hex
    /** Tab background */
    tabs: Hex
    /** Different types of selection */
    selection: {
      /** Active selection */
      active: Hex
      /** Inactive selection */
      inactive: Hex
      /** Selection in focus */
      focus: Hex
      /** Selection in a menu */
      menu: Hex
    }
  }
  /** Lines and borders */
  line: {
    /** Main element borders */
    border: Hex
    /** Borders in menus */
    menu: Hex
  }
  /** Text colors - from primary to auxiliary */
  fg: {
    /** Primary text */
    primary: Hex
    /** Muted text (secondary information) */
    muted: Hex
    /** Subtle text (hints, labels) */
    subtle: Hex
    /** Inactive/disabled text */
    inactive: Hex
    /** Soft text (intermediate brightness) */
    soft: Hex
    /** Soft titles */
    softTitle: Hex
    /** Text on selection */
    selectionText: Hex
    /** Text on top of a selection */
    onSelection: Hex
    /** Active titles */
    activeTitle: Hex
  }
  /** Brand colors */
  brand: {
    /** Primary brand color (buttons, links) */
    primary: Hex
  }
  /** Accent colors for syntax highlighting */
  accent: {
    /** Blue - keywords, types */
    blue: Hex
    /** Cyan - strings, imports */
    cyan: Hex
    /** Teal - properties, attributes */
    teal: Hex
    /** Magenta - variables, constants */
    magenta: Hex
    /** Yellow - numbers, parameters */
    yellow: Hex
    /** Orange - functions, methods */
    orange: Hex
    /** Red - errors, warnings */
    red: Hex
    /** Purple - operators, special characters */
    purple: Hex
  }
  /** ANSI colors for the terminal */
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
    input: '#141419',
    hover: '#0f0f18',
    active: '#1f1f24',
    drop: '#1a1c28',
    lineHighlight: '#282a38',
    bracketMatch: '#16161e',
    tabs: '#121214',
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
    // Cooler blue-gray for inactive/disabled text (used widely across inactive UI)
    inactive: '#6f7fb3',
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
