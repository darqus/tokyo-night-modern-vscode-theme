// Semantic token generation is now handled through the unified generator
// This file serves as a compatibility layer for existing imports

export type { SemanticTokenConfig } from '../../config/color-config-dsl.js'
export {
  generateSemanticTokens,
  mergeSemanticConfigs,
} from '../../config/unified-generator.js'
export type { SemanticTokenStyle } from '../../types/index.js'
