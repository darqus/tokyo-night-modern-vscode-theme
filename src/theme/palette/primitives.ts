/**
 * Основная палитра (primitives): единый источник истинных цветов.
 * Никаких плоских VS Code ключей. Только семантические цветовые примитивы.
 */

import { darken, lighten, withAlpha } from './generators'

export const primitives = {
  background: {
    primary: '#1a1b26',
    secondary: '#16161e',
    tertiary: '#14141b',
    elevated: '#1c1d29',
    border: '#101014',
    borderSecondary: '#2b2b3b',
    overlay: '#0f0f14',
  },
  foreground: {
    primary: '#a9b1d6',
    secondary: '#787c99',
    disabled: '#545c7e',
    hint: '#515670',
    emphasis: '#c0caf5',
  },
  accent: {
    primary: '#3d59a1',
    secondary: '#7aa2f7',
    success: '#41a6b5',
    info: '#0da0ba',
    warning: '#e0af68',
    error: '#db4b4b',
  },
  neutral: {
    gray: '#565f89',
    blueGray: '#515c7e',
    slate: '#3b3e52',
    dark: '#0d0f17',
    light: '#acb0d0',
  },
  syntax: {
    comment: '#51597d',
    string: '#9ece6a',
    number: '#ff9e64',
    keyword: '#bb9af7',
    function: '#7aa2f7',
    variable: '#c0caf5',
    property: '#73daca',
    tag: '#f7768e',
    operator: '#89ddff',
    punctuation: '#9abdf5',
    type: '#0db9d7',
    class: '#0db9d7',
    decorator: '#7aa2f7',
  },
  status: {
    error: '#db4b4b',
    errorSecondary: '#bb616b',
    warning: '#e0af68',
    warningSecondary: '#c49a5a',
    critical: '#f7768e',
    success: '#41a6b5',
    successSecondary: '#73daca',
    info: '#0da0ba',
  },
  terminalAnsi: {
    black: '#363b54',
    red: '#f7768e',
    green: '#73daca',
    yellow: '#e0af68',
    blue: '#7aa2f7',
    magenta: '#bb9af7',
    cyan: '#7dcfff',
    white: '#787c99',
    brightBlack: '#363b54',
    brightRed: '#f7768e',
    brightGreen: '#73daca',
    brightYellow: '#e0af68',
    brightBlue: '#7aa2f7',
    brightMagenta: '#bb9af7',
    brightCyan: '#7dcfff',
    brightWhite: '#acb0d0',
  },
  charts: {
    red: '#f7768e',
    blue: '#7aa2f7',
    yellow: '#e0af68',
    orange: '#ff9e64',
    green: '#41a6b5',
    purple: '#9d7cd8',
    foreground: '#9AA5CE',
    background: '#16161e',
  },
}

export const buildVariants = () => {
  const selection = withAlpha(primitives.accent.primary, 0.3)

  return {
    background: {
      primary: {
        base: primitives.background.primary,
        lighter: lighten(primitives.background.primary, 0.05),
        darker: darken(primitives.background.primary, 0.05),
        translucent: withAlpha(primitives.background.primary, 0.8),
      },
      secondary: {
        base: primitives.background.secondary,
        lighter: lighten(primitives.background.secondary, 0.05),
        darker: darken(primitives.background.secondary, 0.05),
        translucent: withAlpha(primitives.background.secondary, 0.8),
      },
      tertiary: {
        base: primitives.background.tertiary,
        lighter: lighten(primitives.background.tertiary, 0.05),
        darker: darken(primitives.background.tertiary, 0.05),
        translucent: withAlpha(primitives.background.tertiary, 0.8),
      },
    },
    foreground: {
      primary: {
        base: primitives.foreground.primary,
        lighter: lighten(primitives.foreground.primary, 0.1),
        darker: darken(primitives.foreground.primary, 0.1),
        translucent: withAlpha(primitives.foreground.primary, 0.8),
      },
      secondary: {
        base: primitives.foreground.secondary,
        lighter: lighten(primitives.foreground.secondary, 0.1),
        darker: darken(primitives.foreground.secondary, 0.1),
        translucent: withAlpha(primitives.foreground.secondary, 0.8),
      },
    },
    accent: {
      primary: {
        base: primitives.accent.primary,
        lighter: lighten(primitives.accent.primary, 0.1),
        darker: darken(primitives.accent.primary, 0.1),
        translucent: withAlpha(primitives.accent.primary, 0.5),
        selection,
      },
      secondary: {
        base: primitives.accent.secondary,
        lighter: lighten(primitives.accent.secondary, 0.1),
        darker: darken(primitives.accent.secondary, 0.1),
        translucent: withAlpha(primitives.accent.secondary, 0.5),
      },
    },
    syntax: {
      comment: {
        base: primitives.syntax.comment,
        lighter: lighten(primitives.syntax.comment, 0.1),
        darker: darken(primitives.syntax.comment, 0.1),
        translucent: withAlpha(primitives.syntax.comment, 0.7),
      },
      string: {
        base: primitives.syntax.string,
        lighter: lighten(primitives.syntax.string, 0.1),
        darker: darken(primitives.syntax.string, 0.1),
        translucent: withAlpha(primitives.syntax.string, 0.7),
      },
      keyword: {
        base: primitives.syntax.keyword,
        lighter: lighten(primitives.syntax.keyword, 0.1),
        darker: darken(primitives.syntax.keyword, 0.1),
        translucent: withAlpha(primitives.syntax.keyword, 0.7),
      },
    },
    status: {
      error: {
        base: primitives.status.error,
        lighter: lighten(primitives.status.error, 0.1),
        darker: darken(primitives.status.error, 0.1),
        translucent: withAlpha(primitives.status.error, 0.3),
        border: withAlpha(primitives.status.error, 0.6),
      },
      warning: {
        base: primitives.status.warning,
        lighter: lighten(primitives.status.warning, 0.1),
        darker: darken(primitives.status.warning, 0.1),
        translucent: withAlpha(primitives.status.warning, 0.3),
        border: withAlpha(primitives.status.warning, 0.6),
      },
      success: {
        base: primitives.status.success,
        lighter: lighten(primitives.status.success, 0.1),
        darker: darken(primitives.status.success, 0.1),
        translucent: withAlpha(primitives.status.success, 0.3),
        border: withAlpha(primitives.status.success, 0.6),
      },
      info: {
        base: primitives.status.info,
        lighter: lighten(primitives.status.info, 0.1),
        darker: darken(primitives.status.info, 0.1),
        translucent: withAlpha(primitives.status.info, 0.3),
        border: withAlpha(primitives.status.info, 0.6),
      },
    },
  }
}

export type PrimitivePalette = typeof primitives
export type PrimitiveVariants = ReturnType<typeof buildVariants>

/**
 * Вложенное описание токенов (workbench + semantic + textmate), вычисля��мое из primitives.
 * Пока включает несколько ключевых групп как стартовую точку.
 */
export const buildNestedTokens = () => {
  return {
    workbench: {
      editor: {
        base: {
          background: primitives.background.primary,
          foreground: primitives.foreground.primary,
        },
        selection: {
          background: withAlpha(primitives.neutral.blueGray, 0.3),
          inactiveBackground: withAlpha(primitives.neutral.blueGray, 0.145),
          highlight: withAlpha(primitives.neutral.blueGray, 0.267),
        },
        find: {
          match: {
            background: withAlpha(primitives.accent.primary, 0.4),
            border: primitives.accent.warning,
          },
          highlight: {
            background: withAlpha(primitives.accent.primary, 0.4),
          },
          rangeHighlight: {
            background: withAlpha(primitives.neutral.blueGray, 0.2),
          },
        },
        cursor: { foreground: primitives.foreground.emphasis },
        whitespace: { foreground: '#363b54' },
        lineHighlight: { background: '#1e202e' },
        indentGuide: {
          background1: '#232433',
          activeBackground1: '#363b54',
        },
        lineNumber: {
          foreground: '#363b54',
          activeForeground: primitives.foreground.secondary,
        },
        hoverWidget: {
          background: primitives.background.secondary,
          border: primitives.background.border,
        },
        bracketMatch: {
          background: primitives.background.secondary,
          border: '#42465d',
        },
      },
      terminal: {
        background: primitives.background.secondary,
        foreground: primitives.foreground.secondary,
        selectionBackground: withAlpha(primitives.neutral.blueGray, 0.3),
        ansi: { ...primitives.terminalAnsi },
      },
      peekView: {
        title: {
          background: primitives.background.border,
          label: primitives.foreground.primary,
          description: primitives.foreground.secondary,
        },
        result: {
          background: primitives.background.border,
          selectionForeground: primitives.foreground.primary,
          selectionBackground: withAlpha(primitives.accent.primary, 0.2),
          lineForeground: primitives.foreground.primary,
          fileForeground: primitives.foreground.secondary,
          matchHighlightBackground: withAlpha(primitives.accent.primary, 0.4),
        },
        editor: {
          background: primitives.background.secondary,
          matchHighlightBackground: withAlpha(primitives.accent.primary, 0.4),
        },
        border: primitives.background.border
      },
    },
    semantic: {
      tokens: {
        parameter: { base: '#d9d4cd', declaration: primitives.status.warning },
        property: { base: primitives.syntax.property, declaration: primitives.syntax.property, defaultLibrary: '#2ac3de' },
        variable: { base: primitives.syntax.variable, declaration: primitives.syntax.keyword, defaultLibrary: '#2ac3de' },
      },
    },
    tokens: {
      textmate: {
        comments: { primary: primitives.syntax.comment },
        strings: { primary: primitives.syntax.string },
        keywords: { primary: primitives.syntax.keyword },
        numbers: { primary: primitives.syntax.number },
        functions: { primary: primitives.syntax.function },
        variables: { primary: primitives.syntax.variable },
        punctuation: { primary: primitives.syntax.punctuation },
        operators: { primary: primitives.syntax.operator },
        types: { primary: primitives.syntax.type },
        tags: { primary: primitives.syntax.tag },
      },
    },
  }
}

export type NestedTokens = ReturnType<typeof buildNestedTokens>
