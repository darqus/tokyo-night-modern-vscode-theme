import { generateSemanticTokenColors as generateExpandedSemanticTokenColors } from './semantic/index'

// Maintain backward compatibility with current implementation
export function generateSemanticTokenColors() {
  return generateExpandedSemanticTokenColors()
}

// Export expanded function for direct usage
export { generateExpandedSemanticTokenColors }
