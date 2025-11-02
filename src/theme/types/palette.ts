/**
 * Типы для цветовой палитры темы
 */

/**
 * Основная палитра цветов темы
 */
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
}

/**
 * Палитра цветов фона
 */
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

/**
 * Палитра цветов текста
 */
export interface ForegroundPalette {
  dim: string
  muted: string
  medium: string
  bright: string
  brighter: string
  brightest: string
}

/**
 * Палитра синих цветов
 */
export interface BluePalette {
  primary: string
  light: string
  medium: string
}

/**
 * Палитра циановых цветов
 */
export interface CyanPalette {
  dark: string
  medium: string
  light: string
  bright: string
}

/**
 * Палитра бирюзовых цветов
 */
export interface TealPalette {
  main: string
  dark: string
}

/**
 * Палитра зеленых цветов
 */
export interface GreenPalette {
  main: string
  dark: string
}

/**
 * Палитра фиолетовых цветов
 */
export interface PurplePalette {
  light: string
  dark: string
  bright: string
}

/**
 * Палитра желтых цветов
 */
export interface YellowPalette {
  main: string
  light: string
  muted: string
}

/**
 * Палитра красных цветов
 */
export interface RedPalette {
  main: string
  dark: string
  muted: string
}

/**
 * Палитра розовых цветов
 */
export interface PinkPalette {
  main: string
  light: string
  bright: string
}

/**
 * Специальные цвета
 */
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

/**
 * Палитра UI цветов
 */
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
