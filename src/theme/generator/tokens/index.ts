// Token generation is now handled through the unified generator
// This file serves as a compatibility layer for existing imports

export type { TokenColorConfig } from '../../config/color-config-dsl.js'
export { generateTokenColors } from '../../config/unified-generator.js'
