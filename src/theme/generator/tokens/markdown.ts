/**
 * Compatibility layer for markdown tokens generation
 * Redirects to unified generator for backward compatibility
 */

import { markdownTokens } from '../../config/token-configs.js'
import { generateTokenColors } from '../../config/unified-generator.js'
import { universalPalette } from '../../palette/index.js'

/**
 * Генерирует markdown токены
 */
export function generateMarkdownTokens() {
  return generateTokenColors(markdownTokens, universalPalette)
}
