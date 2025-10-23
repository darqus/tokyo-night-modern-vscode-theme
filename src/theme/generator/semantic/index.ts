import type { SemanticTokenStyle } from '../../types'
import { generateFunctionTokens } from './functions'
import { generateModernFrameworkTokens } from './modern-frameworks'
import { generateVariableTokens } from './variables'

// Временные заглушки для остальных модулей
function generateTypeTokens(): Record<string, SemanticTokenStyle> {
  return {}
}

function generateModifierTokens(): Record<string, SemanticTokenStyle> {
  return {}
}

function generateLiteralTokens(): Record<string, SemanticTokenStyle> {
  return {}
}

function generateCommentTokens(): Record<string, SemanticTokenStyle> {
  return {}
}

function generateErrorHandlingTokens(): Record<string, SemanticTokenStyle> {
  return {}
}

export function generateSemanticTokenColors(): Record<
  string,
  SemanticTokenStyle
> {
  return {
    ...generateVariableTokens(),
    ...generateFunctionTokens(),
    ...generateTypeTokens(),
    ...generateModifierTokens(),
    ...generateLiteralTokens(),
    ...generateCommentTokens(),
    ...generateModernFrameworkTokens(),
    ...generateErrorHandlingTokens(),
  }
}
