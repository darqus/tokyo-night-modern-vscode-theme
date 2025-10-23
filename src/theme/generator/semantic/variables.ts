import { palette } from '../../palette'
import type { SemanticTokenStyle } from '../../types'
import { alpha, createSemanticToken } from '../../utils/semantic-tokens'

export function generateVariableTokens(): Record<string, SemanticTokenStyle> {
  return {
    // Базовые переменные
    variable: createSemanticToken({
      foreground: palette.blue.medium,
    }),

    'variable.readonly': createSemanticToken({
      foreground: palette.blue.light,
      fontStyle: 'italic',
    }),

    'variable.readonly.default': createSemanticToken({
      foreground: palette.blue.light,
      fontStyle: 'italic',
      background: alpha(palette.blue.primary, 0.1),
    }),

    // Параметры функций
    parameter: createSemanticToken({
      foreground: palette.ui.parameter,
    }),

    'parameter.readonly': createSemanticToken({
      foreground: palette.ui.parameter,
      fontStyle: 'italic',
    }),

    'parameter.type': createSemanticToken({
      foreground: palette.cyan.light,
    }),

    // Свойства
    property: createSemanticToken({
      foreground: palette.teal.main,
    }),

    'property.readonly': createSemanticToken({
      foreground: palette.teal.dark,
      fontStyle: 'italic',
    }),

    'property.static': createSemanticToken({
      foreground: palette.blue.primary,
      fontStyle: 'bold',
    }),

    'property.declaration': createSemanticToken({
      foreground: palette.teal.main,
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
