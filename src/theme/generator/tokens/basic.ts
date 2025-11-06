import { basicTokens } from '../../config/token-configs.js'
import { generateTokenColors } from '../../config/unified-generator.js'

/**
 * Генерирует базовые токены (числа, строки, ключевые слова)
 */
export function generateBasicTokens() {
  return generateTokenColors(basicTokens)
}
