import { palette } from '../../palette'
import type { SemanticTokenStyle } from '../../types'
import { lighten, mix } from '../../utils/color'
import { createSemanticToken } from '../../utils/semantic-tokens'

export function generateFunctionTokens(): Record<string, SemanticTokenStyle> {
  return {
    // Функции
    function: createSemanticToken({
      foreground: palette.blue.medium,
    }),

    'function.declaration': createSemanticToken({
      foreground: lighten(palette.blue.medium, 0.1),
      fontStyle: 'bold',
    }),

    'function.defaultLibrary': createSemanticToken({
      foreground: palette.cyan.light,
    }),

    // Методы
    method: createSemanticToken({
      foreground: mix(palette.blue.medium, palette.cyan.light, 0.3),
    }),

    'method.declaration': createSemanticToken({
      foreground: lighten(palette.blue.medium, 0.08),
      fontStyle: 'bold',
    }),

    'method.static': createSemanticToken({
      foreground: mix(palette.blue.light, palette.purple.light, 0.2),
      fontStyle: 'bold',
    }),

    'method.readonly': createSemanticToken({
      foreground: mix(palette.blue.medium, palette.teal.main, 0.25),
      fontStyle: 'italic',
    }),

    // Конструкторы
    constructor: createSemanticToken({
      foreground: mix(palette.cyan.light, palette.yellow.main, 0.15),
      fontStyle: 'bold',
    }),

    // Асинхронные функции
    'function.async': createSemanticToken({
      foreground: mix(palette.cyan.dark, palette.purple.light, 0.2),
      fontStyle: 'italic',
    }),

    'method.async': createSemanticToken({
      foreground: mix(palette.cyan.dark, palette.teal.main, 0.3),
      fontStyle: 'italic',
    }),
  }
}
