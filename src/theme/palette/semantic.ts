/**
 * Semantic Colors - Colors with semantic meaning
 * Семантические цвета, которые выражают назначение, а не внешний вид
 */

import { primitiveColors } from './foundation'

export interface SemanticColors {
  // Primary brand colors
  primary: string
  secondary: string

  // Status colors
  success: string
  warning: string
  error: string
  info: string

  // Interactive colors
  link: string
  hover: string
  active: string
  focus: string

  // Content colors
  text: string
  textSecondary: string
  textDisabled: string
  textWhite: string

  // Background colors
  background: string
  backgroundSecondary: string
  backgroundElevated: string
  backgroundOverlay: string

  // Border colors
  border: string
  borderSecondary: string
  borderFocus: string

  // Special colors
  shadow: string
  highlight: string
  selection: string
}

/**
 * Semantic color palette based on Tokyo Night Modern theme
 * Семантические цвета, основанные на анализе использования в оригинальной палитре
 */
export const semanticColors: SemanticColors = {
  // Primary brand colors - основные брендовые цвета
  primary: primitiveColors.blue500, // #7aa2f7 - основной синий
  secondary: primitiveColors.purple500, // #bb9af7 - дополнительный фиолетовый

  // Status colors - цвета состояний
  success: primitiveColors.green500, // #9ece6a - успех
  warning: primitiveColors.yellow500, // #e0af68 - предупреждение
  error: primitiveColors.red500, // #ff5370 - ошибка
  info: primitiveColors.cyan500, // #7dcfff - информация

  // Interactive colors - интерактивные цвета
  link: primitiveColors.cyan500, // #7dcfff - ссылки
  hover: primitiveColors.blue600, // #4e6ab2 - наведение
  active: primitiveColors.blue700, // #394b70 - активное состояние
  focus: primitiveColors.blue400, // #42a5f5 - фокус (новый цвет)

  // Content colors - цвета контента
  text: primitiveColors.gray500, // #a9b1d6 - основной текст
  textSecondary: primitiveColors.gray600, // #82859e - вторичный текст
  textDisabled: primitiveColors.gray700, // #515670 - отключенный текст
  textWhite: primitiveColors.white, // #ffffff - белый текст

  // Background colors - цвета фона
  background: primitiveColors.gray900, // #10151d - основной фон
  backgroundSecondary: primitiveColors.gray800, // #2a2f40 - вторичный фон
  backgroundElevated: primitiveColors.gray700, // #515670 - приподнятый фон
  backgroundOverlay: primitiveColors.black, // #000000 - оверлей

  // Border colors - цвета границ
  border: primitiveColors.blue600, // #4e6ab2 - основная граница
  borderSecondary: primitiveColors.gray700, // #515670 - вторичная граница
  borderFocus: primitiveColors.blue400, // #42a5f5 - граница фокуса

  // Special colors - специальные цвета
  shadow: primitiveColors.black, // #000000 - тень
  highlight: primitiveColors.yellow500, // #e0af68 - подсветка
  selection: primitiveColors.blue600, // #4e6ab2 - выделение
}

/**
 * Utility function to get semantic color by name
 */
export function getSemanticColor(colorName: keyof SemanticColors): string {
  return semanticColors[colorName]
}

/**
 * Utility function to get semantic color with opacity
 */
export function getSemanticColorWithOpacity(
  colorName: keyof SemanticColors,
  opacity: string
): string {
  return `${semanticColors[colorName]}${opacity}`
}

/**
 * Color roles mapping - маппинг ролей цветов
 * Показывает, какие семантические цвета используются для каких целей
 */
export const colorRoles = {
  // UI Background roles
  'editor.background': semanticColors.background,
  'sideBar.background': semanticColors.backgroundSecondary,
  'panel.background': semanticColors.backgroundSecondary,
  'statusBar.background': semanticColors.backgroundSecondary,
  'activityBar.background': semanticColors.backgroundSecondary,

  // UI Text roles
  'editor.foreground': semanticColors.text,
  'sideBar.foreground': semanticColors.textSecondary,
  'statusBar.foreground': semanticColors.textSecondary,

  // UI Border roles
  'panel.border': semanticColors.border,
  'sideBar.border': semanticColors.borderSecondary,

  // Interactive roles
  'button.background': semanticColors.primary,
  'input.background': semanticColors.backgroundElevated,
  'input.border': semanticColors.border,

  // Selection roles
  'editor.selectionBackground': semanticColors.selection,
  'editor.selectionHighlightBackground': semanticColors.highlight,

  // Status roles
  'editorError.foreground': semanticColors.error,
  'editorWarning.foreground': semanticColors.warning,
  'editorInfo.foreground': semanticColors.info,
} as const

export type ColorRole = keyof typeof colorRoles
