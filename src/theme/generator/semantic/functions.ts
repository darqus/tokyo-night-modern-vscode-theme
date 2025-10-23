import { palette } from '../../palette'
import type { SemanticTokenStyle } from '../../types'
import { createSemanticToken } from '../../utils/semantic-tokens'

export function generateFunctionTokens(): Record<string, SemanticTokenStyle> {
  return {
    // Функции
    function: createSemanticToken({
      foreground: palette.purple.light,
    }),

    'function.declaration': createSemanticToken({
      foreground: palette.purple.bright,
      fontStyle: 'bold',
    }),

    'function.defaultLibrary': createSemanticToken({
      foreground: palette.ui.defaultLibrary,
    }),

    // Методы
    method: createSemanticToken({
      foreground: palette.purple.light,
    }),

    'method.declaration': createSemanticToken({
      foreground: palette.purple.bright,
      fontStyle: 'bold',
    }),

    'method.static': createSemanticToken({
      foreground: palette.purple.dark,
      fontStyle: 'bold',
    }),

    'method.readonly': createSemanticToken({
      foreground: palette.purple.light,
      fontStyle: 'italic',
    }),

    // Конструкторы
    constructor: createSemanticToken({
      foreground: palette.purple.bright,
      fontStyle: 'bold',
    }),

    // Асинхронные функции
    'function.async': createSemanticToken({
      foreground: palette.purple.light,
      fontStyle: 'italic',
    }),

    'method.async': createSemanticToken({
      foreground: palette.purple.light,
      fontStyle: 'italic',
    }),
  }
}
