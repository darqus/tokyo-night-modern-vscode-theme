import { modernTokens } from '../../config/token-configs.js'
import { generateTokenColors } from '../../config/unified-generator.js'

/**
 * Генерирует токены для современных фреймворков
 */
export function generateModernTokens() {
  return generateTokenColors(modernTokens)
}
