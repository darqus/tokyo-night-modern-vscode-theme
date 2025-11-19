/**
 * Compatibility layer for basic tokens generation
 * Redirects to unified generator for backward compatibility
 */

import { basicTokens } from '../../config/token-configs.js'
import { generateTokenColors } from '../../config/unified-generator.js'
import { universalPalette } from '../../palette/index.js'

/**
 * Генерирует базовые токены (числа, строки, ключевые слова)
 */
export function generateBasicTokens() {
  return generateTokenColors(basicTokens, universalPalette)
}
