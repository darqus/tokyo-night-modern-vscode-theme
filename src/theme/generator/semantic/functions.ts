/**
 * Compatibility layer for function tokens generation
 * Redirects to unified generator for backward compatibility
 */

import { functionsConfig } from '../../config/semantic-configs.js'
import { generateSemanticTokens } from '../../config/unified-generator.js'
import { universalPalette } from '../../palette/index.js'

/**
 * Генерирует токены функций
 */
export function generateFunctionTokens() {
  return generateSemanticTokens(functionsConfig, universalPalette)
}
