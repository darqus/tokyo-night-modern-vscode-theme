import { codeTokens } from '../../config/token-configs.js'
import { generateTokenColors } from '../../config/unified-generator.js'
import { universalPalette } from '../../palette/index.js'

/**
 * Генерирует токены для кода (переменные, функции, классы)
 */
export function generateCodeTokens() {
  return generateTokenColors(codeTokens, universalPalette)
}
