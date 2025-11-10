/**
 * Типы для цветовой палитры темы
 */

/**
 * Универсальная палитра цветов темы
 */
export interface Palette {
  bg: BackgroundPalette
  fg: ForegroundPalette
  semantic: SemanticPalette
  chromatic: ChromaticPalette
  ui: UIPalette
  brackets: BracketsPalette
  git: GitPalette
  interactive: InteractivePalette
  elements: ElementsPalette
}

/**
 * Палитра цветов фона
 */
export interface BackgroundPalette {
  base: BackgroundVariant
  elevated: BackgroundVariant
  inset: BackgroundVariant
  overlay: BackgroundVariant
}

/**
 * Варианты оттенков фона
 */
export interface BackgroundVariant {
  darkest: string
  darker: string
  dark: string
  main: string
  editor: string
  light: string
  lighter: string
  lightest: string
}

/**
 * Палитра цветов текста
 */
export interface ForegroundPalette {
  primary: ForegroundVariant
  secondary: ForegroundVariant
  muted: ForegroundVariant
  disabled: ForegroundVariant
}

/**
 * Варианты оттенков текста
 */
export interface ForegroundVariant {
  dim: string
  muted: string
  medium: string
  bright: string
  brighter: string
  brightest: string
}

/**
 * Семантическая палитра цветов
 */
export interface SemanticPalette {
  success: SemanticVariant
  warning: SemanticVariant
  error: SemanticVariant
  info: SemanticVariant
  accent: SemanticVariant
}

/**
 * Варианты семантических цветов
 */
export interface SemanticVariant {
  primary: string
  light: string
  dark: string
  contrast: string
}

/**
 * Хроматическая палитра цветов
 */
export interface ChromaticPalette {
  blue: ChromaticVariant
  cyan: ChromaticVariant
  teal: ChromaticVariant
  green: ChromaticVariant
  purple: ChromaticVariant
  orange: ChromaticVariant
  yellow: ChromaticVariant
  red: ChromaticVariant
  pink: ChromaticVariant
  neutral: ChromaticVariant
  indigo: ChromaticVariant
  lime: ChromaticVariant
  amber: ChromaticVariant
  emerald: ChromaticVariant
  // Новые цвета для расширенной палитры
  rose: ChromaticVariant
  violet: ChromaticVariant
  fuchsia: ChromaticVariant
  sky: ChromaticVariant
  slate: ChromaticVariant
  stone: ChromaticVariant
  zinc: ChromaticVariant
  gray: ChromaticVariant
}

/**
 * Варианты хроматических цветов
 */
export interface ChromaticVariant {
  darkest: string
  darker: string
  dark: string
  main: string
  light: string
  lighter: string
  lightest: string
  bright: string
}

/**
 * Палитра UI цветов
 */
export interface UIPalette {
  white: string
  black: string
  badge: string
  border: UIVariant
  scrollbar: UIVariant
  selection: UIVariant
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
  parameter: string
  defaultLibrary: string
  commentDoc: string
  plainPunctuation: string
  rawInlinePunctuation: string
  heading2: string
  heading4: string
  heading6: string
  table: string
  badgeForeground: string
  linkActive: string
  ghostText: string
  inactive: string
  regex: string
  invalid: string
  indentActive: string
  disabled: string
}

/**
 * Варианты UI-цветов
 */
export interface UIVariant {
  darkest: string
  darker: string
  dark: string
  main: string
  light: string
  lighter: string
  lightest: string
}

/**
 * Палитра цветов для скобок
 */
export interface BracketsPalette {
  blue: string
  cyan: string
  purple: string
  teal: string
  green: string
  yellow: string
}

/**
 * Палитра цветов для Git
 */
export interface GitPalette {
  modified: string
  added: string
  deleted: string
  deletedDark: string
  modifiedMinimap: string
  addedMinimap: string
  deletedMinimap: string
}

/**
 * Палитра интерактивных цветов
 */
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

/**
 * Палитра цветов элементов
 */
export interface ElementsPalette {
  indentGuides: string
  indentGuidesBackground: string
  foldBackground: string
  cssPunctuation: string
  info: string
}
