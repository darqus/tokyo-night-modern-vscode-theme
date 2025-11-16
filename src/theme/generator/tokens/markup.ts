import { markupTokens } from '../../config/token-configs.js'
import { generateTokenColors } from '../../config/unified-generator.js'
import { universalPalette } from '../../palette/index.js'

/**
 * Генерирует токены для разметки (XML, HTML)
 */
export function generateMarkupTokens() {
  return generateTokenColors(markupTokens, universalPalette)
}
