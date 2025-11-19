/**
 * Compatibility layer for CSS tokens generation
 * Redirects to unified generator for backward compatibility
 */

import { cssTokens } from '../../config/token-configs.js'
import { generateTokenColors } from '../../config/unified-generator.js'
import { universalPalette } from '../../palette/index.js'

/**
 * Генерирует CSS токены
 */
export function generateCssTokens() {
  return generateTokenColors(cssTokens, universalPalette)
}
