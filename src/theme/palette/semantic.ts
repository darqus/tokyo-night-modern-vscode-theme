/**
 * Semantic Colors - Colors with semantic meaning
 * Семантические цвета, которые выражают назначение, а не внешний вид
 */

import { foundationColors as primitiveColors } from './foundation'
import { getColorWithOpacity } from './foundation/opacity'

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

  // Terminal colors
 terminal: {
    ansi: {
      black: string
      blue: string
      brightBlack: string
      brightBlue: string
      brightCyan: string
      brightGreen: string
      brightMagenta: string
      brightRed: string
      brightWhite: string
      brightYellow: string
      cyan: string
      green: string
      magenta: string
      red: string
      white: string
      yellow: string
    }
    background: string
    foreground: string
    border: string
    dropBackground: string
    selectionBackground: string
    tabActiveBorder: string
    commandDecoration: {
      default: string
      error: string
      success: string
    }
    cursor: {
      background: string
      foreground: string
    }
    overviewRuler: {
      cursorForeground: string
    }
  }

  // Git decoration colors
  git: {
    modified: string
    ignored: string
    deleted: string
    renamed: string
    added: string
    untracked: string
    conflicting: string
    stageDeleted: string
    stageModified: string
 }

  // Badge colors
  badge: {
    background: string
    foreground: string
  }

  // Syntax colors
 syntax: {
    brackets: {
      '1': string
      '2': string
      '3': string
      '4': string
      '5': string
      '6': string
      unexpected: string
    }
  }
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
  textWhite: primitiveColors.blue100, // #bbdefb - холодный светло-синий текст

  // Background colors - цвета фона
  background: primitiveColors.gray900, // #10151d - основной фон
  backgroundSecondary: primitiveColors.gray800, // #2a2f40 - вторичный фон
  backgroundElevated: primitiveColors.gray700, // #515670 - приподнятый фон
 backgroundOverlay: primitiveColors.black, // #0000 - оверлей

  // Border colors - цвета границ
  border: primitiveColors.blue600, // #4e6ab2 - основная граница
  borderSecondary: primitiveColors.gray700, // #515670 - вторичная граница
 borderFocus: primitiveColors.blue400, // #42a5f5 - граница фокуса

  // Special colors - специальные цвета
  shadow: primitiveColors.black, // #00 - тень
  highlight: primitiveColors.yellow500, // #e0af68 - подсветка
 selection: primitiveColors.blue600, // #4e6ab2 - выделение

  // Terminal colors
  terminal: {
    ansi: {
      black: primitiveColors.gray400,
      blue: primitiveColors.blue500,
      brightBlack: primitiveColors.gray400,
      brightBlue: primitiveColors.blue500,
      brightCyan: primitiveColors.cyan500,
      brightGreen: primitiveColors.green500,
      brightMagenta: primitiveColors.purple500,
      brightRed: primitiveColors.red50,
      brightWhite: primitiveColors.gray100,
      brightYellow: primitiveColors.yellow500,
      cyan: primitiveColors.cyan500,
      green: primitiveColors.green500,
      magenta: primitiveColors.purple500,
      red: primitiveColors.red500,
      white: primitiveColors.gray100,
      yellow: primitiveColors.yellow500,
    },
    background: primitiveColors.gray900,
    foreground: primitiveColors.gray500,
    border: getColorWithOpacity(primitiveColors.gray600, 'medium'), // 40 в hex -> 25%
    dropBackground: getColorWithOpacity(primitiveColors.blue500, 'light'), // 33 в hex -> ~20%
    selectionBackground: getColorWithOpacity(primitiveColors.blue500, 'subtle'), // 30 в hex -> ~19%
    tabActiveBorder: primitiveColors.blue500,
    commandDecoration: {
      default: primitiveColors.yellow500,
      error: primitiveColors.red500,
      success: primitiveColors.cyan500,
    },
    cursor: {
      background: primitiveColors.gray800,
      foreground: primitiveColors.yellow500,
    },
    overviewRuler: {
      cursorForeground: primitiveColors.yellow500,
    }
  },

  // Git decoration colors
  git: {
    modified: primitiveColors.purple500,
    ignored: primitiveColors.gray500,
    deleted: primitiveColors.red500,
    renamed: primitiveColors.blue500,
    added: primitiveColors.blue500,
    untracked: primitiveColors.cyan500,
    conflicting: primitiveColors.yellow500,
    stageDeleted: primitiveColors.red500,
    stageModified: primitiveColors.purple500,
  },

  // Badge colors
  badge: {
    background: primitiveColors.purple800,
    foreground: primitiveColors.gray100, // Замена foundationColors.white
 },

  // Syntax colors
 syntax: {
    brackets: {
      '1': primitiveColors.blue500,
      '2': primitiveColors.blue500,
      '3': primitiveColors.purple500,
      '4': primitiveColors.cyan500,
      '5': primitiveColors.green500,
      '6': primitiveColors.yellow500,
      unexpected: primitiveColors.red500,
    }
  }
}

/**
 * Utility function to get semantic color by name
 */
export function getSemanticColor(colorName: keyof SemanticColors): string {
  if (typeof semanticColors[colorName] === 'string') {
    return semanticColors[colorName] as string;
  }
  throw new Error(`Semantic color ${colorName} is not a string value`);
}

/**
 * Utility function to get semantic color with opacity
 */
export function getSemanticColorWithOpacity(
  colorName: keyof SemanticColors,
  opacity: string
): string {
 return `${semanticColors[colorName] as string}${opacity}`
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