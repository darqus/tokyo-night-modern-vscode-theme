import { markdownTokens } from '../../config/token-configs.js'
import { generateTokenColors } from '../../config/unified-generator.js'
import { universalPalette } from '../../palette/index.js'

/**
 * Генерирует токены для Markdown
 */
export function generateMarkdownTokens() {
  return generateTokenColors(markdownTokens, universalPalette)
}
