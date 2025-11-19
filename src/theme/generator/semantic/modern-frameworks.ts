/**
 * Compatibility layer for modern framework tokens generation
 * Redirects to unified generator for backward compatibility
 */

import { frameworksConfig } from '../../config/semantic-configs.js'
import { generateSemanticTokens } from '../../config/unified-generator.js'
import { universalPalette } from '../../palette/index.js'

/**
 * Генерирует токены современных фреймворков
 */
export function generateModernFrameworkTokens() {
  return generateSemanticTokens(frameworksConfig, universalPalette)
}
