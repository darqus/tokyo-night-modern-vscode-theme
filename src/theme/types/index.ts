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
  background?: string
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
  indentGuide: string
  indentActive: string
  border: string
  disabled: string
  badge: string
  scrollbar: string
  ghostText: string
  inactive: string
}
