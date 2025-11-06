import type { SemanticTokenStyle } from '../../types/index.js'
import { lighten, mix } from '../../utils/color.js'
import { c } from '../../utils/color-builder.js'
import { boldToken, token } from '../../utils/semantic-helpers.js'

/**
 * Builder для создания семантических токенов
 */
class SemanticTokenBuilder {
  private rules: Record<string, SemanticTokenStyle> = {}

  add = (key: string, value: SemanticTokenStyle): this => {
    this.rules[key] = value
    return this
  }

  addGroup = (
    prefix: string,
    rules: Record<string, SemanticTokenStyle>
  ): this => {
    for (const [key, value] of Object.entries(rules)) {
      this.rules[`${prefix}.${key}`] = value
    }
    return this
  }

  build = (): Record<string, SemanticTokenStyle> => ({ ...this.rules })
}

const semanticTokens = (): SemanticTokenBuilder => new SemanticTokenBuilder()

export function generateFunctionTokens(): Record<string, SemanticTokenStyle> {
  const { blue, cyan, purple } = c

  return (
    semanticTokens()
      // Function-related tokens
      .addGroup('function', {
        '': token(blue.main), // Base function
        declaration: boldToken(lighten(blue.main, 0.1)), // Function declarations
        defaultLibrary: token(cyan.light), // Built-in functions
      })
      // Method-related tokens
      .addGroup('method', {
        '': token(mix(blue.main, cyan.light, 0.3)), // Base method
        declaration: boldToken(lighten(blue.main, 0.08)), // Method declarations
      })
      // Constructor tokens
      .add('constructor', boldToken(mix(cyan.light, purple.light, 0.15)))
      .build()
  )
}
