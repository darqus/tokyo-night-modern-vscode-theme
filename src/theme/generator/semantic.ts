import {
  asyncConfig,
  criticalKeywordsConfig,
  frameworksConfig,
  functionsConfig,
  literalsConfig,
  modifiersConfig,
  typesConfig,
  variablesConfig,
} from '../config/semantic-configs.js'
import { mergeSemanticConfigs } from '../config/unified-generator.js'

/**
 * Генерирует все семантические токены
 */
export function generateSemanticTokenColors() {
  return mergeSemanticConfigs({
    variables: variablesConfig,
    functions: functionsConfig,
    types: typesConfig,
    modifiers: modifiersConfig,
    literals: literalsConfig,
    frameworks: frameworksConfig,
    criticalKeywords: criticalKeywordsConfig,
    async: asyncConfig,
  })
}

// Maintain backward compatibility with current implementation
export const generateExpandedSemanticTokenColors = generateSemanticTokenColors
