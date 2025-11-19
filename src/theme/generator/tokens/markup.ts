/**
 * Compatibility layer for markup tokens generation
 * Redirects to unified generator for backward compatibility
 */

import { markupTokens } from '../../config/token-configs.js'
import { generateTokenColors } from '../../config/unified-generator.js'
import { universalPalette } from '../../palette/index.js'

/**
 * Генерирует markup токены
 */
export function generateMarkupTokens() {
  return generateTokenColors(markupTokens, universalPalette)
}
