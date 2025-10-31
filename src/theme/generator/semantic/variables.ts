import { palette } from '../../palette'
import type { SemanticTokenStyle } from '../../types'
import { darken, lighten, mix } from '../../utils/color'
import { createSemanticToken } from '../../utils/semantic-tokens'

export function generateVariableTokens(): Record<string, SemanticTokenStyle> {
  return {
    // Базовые переменные
    variable: createSemanticToken({
      foreground: palette.cyan.light,
    }),

    'variable.readonly': createSemanticToken({
      foreground: mix(palette.cyan.light, palette.purple.light, 0.2),
      fontStyle: 'italic',
    }),

    'variable.readonly.default': createSemanticToken({
      foreground: lighten(palette.cyan.light, 0.08),
      fontStyle: 'italic',
    }),

    // Параметры функций
    parameter: createSemanticToken({
      foreground: mix(palette.yellow.main, palette.orange, 0.3),
    }),

    'parameter.readonly': createSemanticToken({
      foreground: darken(palette.yellow.main, 0.1),
      fontStyle: 'italic',
    }),

    'parameter.type': createSemanticToken({
      foreground: mix(palette.cyan.light, palette.blue.medium, 0.4),
    }),

    // Свойства
    property: createSemanticToken({
      foreground: palette.teal.main,
    }),

    'property.readonly': createSemanticToken({
      foreground: mix(palette.teal.dark, palette.cyan.dark, 0.3),
      fontStyle: 'italic',
    }),

    'property.static': createSemanticToken({
      foreground: mix(palette.blue.light, palette.cyan.light, 0.4),
      fontStyle: 'bold',
    }),

    'property.declaration': createSemanticToken({
      foreground: lighten(palette.teal.main, 0.1),
      fontStyle: 'bold',
    }),

    // Стандартная библиотека
    'property.defaultLibrary': createSemanticToken({
      foreground: palette.ui.defaultLibrary,
    }),

    'variable.defaultLibrary': createSemanticToken({
      foreground: palette.ui.defaultLibrary,
    }),

    '*.defaultLibrary': createSemanticToken({
      foreground: palette.ui.defaultLibrary,
    }),
  }
}
