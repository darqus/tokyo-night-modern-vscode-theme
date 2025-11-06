import { palette } from '../../palette/index.js'
import type { SemanticTokenStyle } from '../../types/index.js'
import { darken, mix } from '../../utils/color.js'
import { c, colorRules } from '../../utils/color-builder.js'
import {
  boldItalicToken,
  boldToken,
  italicToken,
  token,
} from '../../utils/semantic-helpers.js'
import { createSemanticToken } from '../../utils/semantic-tokens.js'

// Создаем специальный builder для семантических токенов
class SemanticTokenBuilder {
  private tokens: Record<string, SemanticTokenStyle> = {}

  add(key: string, value: SemanticTokenStyle): this {
    this.tokens[key] = value
    return this
  }

  addGroup(prefix: string, tokens: Record<string, SemanticTokenStyle>): this {
    for (const [key, value] of Object.entries(tokens)) {
      this.tokens[`${prefix}.${key}`] = value
    }
    return this
  }

  build(): Record<string, SemanticTokenStyle> {
    return { ...this.tokens }
  }
}

export function generateVariableTokens(): Record<string, SemanticTokenStyle> {
  const { cyan, purple, teal } = palette

  return (
    new SemanticTokenBuilder()
      // Base variables
      .add('variable', token(cyan.light))
      .add('variable.readonly', italicToken(mix(cyan.light, purple.light, 0.2)))

      // Function parameters
      .add('parameter', token(mix(purple.main, cyan.main, 0.3)))
      .add('parameter.readonly', italicToken(darken(purple.main, 0.1)))

      // Properties
      .add('property', token(teal.dark))
      .add('property.readonly', italicToken(mix(teal.dark, cyan.dark, 0.3)))

      // Standard library
      .add('variable.defaultLibrary', token(mix(cyan.main, teal.main, 0.4)))
      .build()
  )
}
