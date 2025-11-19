/**
 * Compatibility layer for variable tokens generation
 * Redirects to unified generator for backward compatibility
 */

import { variablesConfig } from '../../config/semantic-configs.js'
import { generateSemanticTokens } from '../../config/unified-generator.js'
import { universalPalette } from '../../palette/index.js'

/**
 * Генерирует токены переменных
 */
export function generateVariableTokens() {
  return generateSemanticTokens(variablesConfig, universalPalette)
}
