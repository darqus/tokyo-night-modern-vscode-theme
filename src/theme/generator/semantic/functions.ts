import { functionsConfig } from '../../config/semantic-configs.js'
import { generateSemanticTokens } from '../../config/unified-generator.js'

/**
 * Генерирует токены для функций и методов
 */
export function generateFunctionTokens() {
  return generateSemanticTokens(functionsConfig)
}
