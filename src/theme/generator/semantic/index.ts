import {
  frameworksConfig,
  functionsConfig,
  literalsConfig,
  modifiersConfig,
  typesConfig,
  variablesConfig,
} from '../../config/semantic-configs.js'
import { mergeSemanticConfigs } from '../../config/unified-generator.js'
import type { SemanticTokenStyle } from '../../types/index.js'

export function generateSemanticTokenColors(): Record<
  string,
  SemanticTokenStyle
> {
  return mergeSemanticConfigs({
    variables: variablesConfig,
    functions: functionsConfig,
    types: typesConfig,
    modifiers: modifiersConfig,
    literals: literalsConfig,
    frameworks: frameworksConfig,
 })
}
