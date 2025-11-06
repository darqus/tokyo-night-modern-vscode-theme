import { variablesConfig } from '../../config/semantic-configs.js'
import { generateSemanticTokens } from '../../config/unified-generator.js'

/**
 * Генерирует токены для переменных
 */
export function generateVariableTokens() {
  return generateSemanticTokens(variablesConfig)
}
