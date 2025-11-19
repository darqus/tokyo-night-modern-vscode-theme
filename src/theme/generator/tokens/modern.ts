/**
 * Compatibility layer for modern tokens generation
 * Redirects to unified generator for backward compatibility
 */

import { modernTokens } from '../../config/token-configs.js'
import { generateTokenColors } from '../../config/unified-generator.js'
import { universalPalette } from '../../palette/index.js'

/**
 * Генерирует современные токены
 */
export function generateModernTokens() {
  return generateTokenColors(modernTokens, universalPalette)
}
