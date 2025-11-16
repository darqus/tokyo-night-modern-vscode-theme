import { variablesConfig } from '../../config/semantic-configs.js'
import { generateSemanticTokens } from '../../config/unified-generator.js'
import { universalPalette } from '../../palette/index.js'

/**
 * Генерирует токены для переменных
 */
export function generateVariableTokens() {
  return generateSemanticTokens(variablesConfig, universalPalette)
}
