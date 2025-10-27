export interface VSCodeTheme {
  name: string
  type: 'dark' | 'light'
  semanticHighlighting?: boolean
  colors: Record<string, string>
  tokenColors: TokenColor[]
  semanticTokenColors: Record<string, SemanticTokenStyle>
}

export interface TokenColor {
  name?: string
  scope: string | string[]
  settings?: {
    foreground?: string
    background?: string
    fontStyle?: string
  }
}

export interface SemanticTokenStyle {
  foreground?: string
  fontStyle?: string
}

export interface Palette {
  bg: BackgroundPalette
  fg: ForegroundPalette
  blue: BluePalette
  cyan: CyanPalette
  teal: TealPalette
  green: GreenPalette
  purple: PurplePalette
  orange: string
  yellow: YellowPalette
  red: RedPalette
  pink: PinkPalette
  special: SpecialPalette
  ui: UIPalette
  brackets: BracketsPalette
  git: GitPalette
  interactive: InteractivePalette
  elements: ElementsPalette
  highContrast: HighContrastPalette
  accessibility: AccessibilityPalette
  border: BorderPalette
}

export interface HighContrastPalette {
  fg: ForegroundPalette
  bg: BackgroundPalette
  blue: BluePalette
  red: RedPalette
  green: GreenPalette
}

export interface BackgroundPalette {
  darkest: string
  darker: string
  dark: string
  main: string
  editor: string
  light: string
  lighter: string
  lightest: string
}

export interface ForegroundPalette {
  dim: string
  muted: string
  medium: string
  bright: string
  brighter: string
  brightest: string
}

export interface BluePalette {
  primary: string
  light: string
  medium: string
}

export interface CyanPalette {
  dark: string
  medium: string
  light: string
  bright: string
}

export interface TealPalette {
  main: string
  dark: string
}

export interface GreenPalette {
  main: string
  dark: string
}

export interface PurplePalette {
  light: string
  dark: string
  bright: string
}

export interface YellowPalette {
  main: string
  light: string
  muted: string
}

export interface RedPalette {
  main: string
  dark: string
  muted: string
}

export interface PinkPalette {
  main: string
  light: string
  bright: string
}

export interface SpecialPalette {
  regex: string
  invalid: string
  selection: string
  indentActive: string
  disabled: string
  badge: string
  scrollbar: string
  ghostText: string
  inactive: string
}

export interface UIPalette {
  white: string
  badgeForeground: string
  linkActive: string
  codeLens: string
  brightWhite: string
  preformat: string
  debugException: string
  debugError: string
  debugBreakpointDisabled: string
  debugBreakpointUnverified: string
  stackFrameHighlight: string
  scmGraphHover: string
  scmGraphRef: string
  menubarSelection: string
  notificationError: string
  notificationWarning: string
  inputInfo: string
  inputWarningBg: string
  inputErrorBg: string
  inputErrorBorder: string
  diffDiagonal: string
  diffUnchanged: string
  scrollbarShadow: string
  black: string
  parameter: string
  defaultLibrary: string
  commentDoc: string
  plainPunctuation: string
  rawInlinePunctuation: string
  heading2: string
  heading4: string
  heading6: string
  table: string
}

export interface BracketsPalette {
  blue: string
  cyan: string
  purple: string
  teal: string
  green: string
}

export interface GitPalette {
  modified: string
  added: string
  deleted: string
  deletedDark: string
  modifiedMinimap: string
  addedMinimap: string
  deletedMinimap: string
}

export interface InteractivePalette {
  hover: string
  selected: string
  highlight: string
  invalid: string
  error: string
  errorOutline: string
  tabInactiveModified: string
  tabUnfocusedActive: string
  tabLastPinned: string
}

export interface ElementsPalette {
  indentGuides: string
  indentGuidesBackground: string
  foldBackground: string
  cssPunctuation: string
  info: string
}

export interface AccessibilityPalette {
  contrast: {
    high: string
    medium: string
    low: string
  }
  semantic: {
    success: string
    warning: string
    error: string
    info: string
  }
  enhanced: {
    text: {
      primary: string
      secondary: string
      tertiary: string
      disabled: string
    }
    background: {
      elevated: string
      surface: string
      overlay: string
    }
    interactive: {
      hover: string
      active: string
      selected: string
      focused: string
    }
  }
}

export interface BorderPalette {
  ui: string
}
