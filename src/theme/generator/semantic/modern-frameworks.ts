import { frameworksConfig } from '../../config/semantic-configs.js'
import { generateSemanticTokens } from '../../config/unified-generator.js'

/**
 * Генерирует токены для современных фреймворков
 */
export function generateModernFrameworkTokens() {
  return generateSemanticTokens(frameworksConfig)
}
