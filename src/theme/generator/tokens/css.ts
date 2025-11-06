import { cssTokens } from '../../config/token-configs.js'
import { generateTokenColors } from '../../config/unified-generator.js'

/**
 * Генерирует токены для CSS
 */
export function generateCssTokens() {
  return generateTokenColors(cssTokens)
}
