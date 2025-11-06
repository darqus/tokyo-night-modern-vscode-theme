import { commentsTokens } from '../../config/token-configs.js'
import { generateTokenColors } from '../../config/unified-generator.js'

/**
 * Генерирует токены для комментариев
 */
export function generateCommentTokens() {
  return generateTokenColors(commentsTokens)
}
