import { foundationColors } from '../../foundation/colors'
import { baseSyntaxColors } from '../base'
import { javascriptSyntaxColors } from './javascript'

export const typescriptSyntaxColors = {
  // Наследуем цвета JavaScript
  ...javascriptSyntaxColors,

  // Типы
  interface: foundationColors.teal400,
  type: foundationColors.teal500,
  enum: foundationColors.orange500,
  namespace: foundationColors.teal300,
  typeParameter: foundationColors.yellow600,

  // Модификаторы
  public: baseSyntaxColors.keyword,
  private: baseSyntaxColors.keyword,
  protected: baseSyntaxColors.keyword,
  readonly: baseSyntaxColors.keyword,
  abstract: baseSyntaxColors.keyword,

  // Утилиты типов
  keyof: foundationColors.purple500,
  typeof: foundationColors.purple500,
  infer: foundationColors.purple500,
  extends: baseSyntaxColors.keyword,
  implements: baseSyntaxColors.keyword,

  // Декораторы
  decorator: foundationColors.magenta500,
  decoratorParameter: foundationColors.cyan700,
} as const

export type TypeScriptSyntaxToken = keyof typeof typescriptSyntaxColors
