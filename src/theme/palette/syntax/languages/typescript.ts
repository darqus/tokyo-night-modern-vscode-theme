import { getColor } from '../../foundation/colors'
import { baseSyntaxColors } from '../base'
import { javascriptColors } from './javascript'
import type { SemanticColor } from '../../semantic/types'

/**
 * TypeScript-специфичные элементы
 */
export interface TypeScriptSyntaxColors
  extends Omit<typeof javascriptColors, 'prototype'> {
  // Типы
  interface: SemanticColor
  type: SemanticColor
  enum: SemanticColor
  namespace: SemanticColor
  typeParameter: SemanticColor

  // Модификаторы
  public: SemanticColor
  private: SemanticColor
  protected: SemanticColor
  readonly: SemanticColor
  abstract: SemanticColor

  // Утилиты типов
  keyof: SemanticColor
  typeof: SemanticColor
  infer: SemanticColor
  extends: SemanticColor
  implements: SemanticColor

  // Декораторы
  decorator: SemanticColor
  decoratorParameter: SemanticColor
}

/**
 * Цвета синтаксиса TypeScript
 */
export const typescriptColors: TypeScriptSyntaxColors = {
  // Наследуем цвета JavaScript
  ...javascriptColors,

  // Типы
  interface: {
    base: getColor('cyan', '700'),
  },
  type: {
    base: getColor('cyan', '700'),
  },
  enum: {
    base: getColor('purple', '500'),
  },
  namespace: {
    base: getColor('blue', '500'),
  },
  typeParameter: {
    base: getColor('yellow', '500'),
  },

  // Модификаторы
  public: {
    base: baseSyntaxColors.keyword.base,
  },
  private: {
    base: baseSyntaxColors.keyword.base,
  },
  protected: {
    base: baseSyntaxColors.keyword.base,
  },
  readonly: {
    base: baseSyntaxColors.keyword.base,
  },
  abstract: {
    base: baseSyntaxColors.keyword.base,
  },

  // Утилиты типов
  keyof: {
    base: getColor('purple', '500'),
  },
  typeof: {
    base: getColor('purple', '500'),
  },
  infer: {
    base: getColor('purple', '500'),
  },
  extends: {
    base: baseSyntaxColors.keyword.base,
  },
  implements: {
    base: baseSyntaxColors.keyword.base,
  },

  // Декораторы
  decorator: {
    base: getColor('yellow', '500'),
  },
  decoratorParameter: {
    base: getColor('cyan', '700'),
  },
}
