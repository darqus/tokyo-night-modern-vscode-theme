/**
 * Compatibility layer for code tokens generation
 * Redirects to unified generator for backward compatibility
 */

import { codeTokens } from '../../config/token-configs.js'
import { generateTokenColors } from '../../config/unified-generator.js'
import { universalPalette } from '../../palette/index.js'

/**
 * Генерирует токены кода
 */
export function generateCodeTokens() {
  return generateTokenColors(codeTokens, universalPalette)
}
