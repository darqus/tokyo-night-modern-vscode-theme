/**
 * Compatibility layer for comments tokens generation
 * Redirects to unified generator for backward compatibility
 */

import { commentsTokens } from '../../config/token-configs.js'
import { generateTokenColors } from '../../config/unified-generator.js'
import { universalPalette } from '../../palette/index.js'

/**
 * Генерирует токены комментариев
 */
export function generateCommentTokens() {
  return generateTokenColors(commentsTokens, universalPalette)
}
