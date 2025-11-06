import { palette } from '../../palette/index.js'
import type { SemanticTokenStyle } from '../../types/index.js'
import { generateFunctionTokens } from './functions.js'
import { generateModernFrameworkTokens } from './modern-frameworks.js'
import { generateVariableTokens } from './variables.js'

function generateTypeTokens(): Record<string, SemanticTokenStyle> {
  return {
    type: { foreground: palette.peach.main },
    class: { foreground: palette.peach.main, fontStyle: 'bold' },
  }
}

function generateModifierTokens(): Record<string, SemanticTokenStyle> {
  return {
    static: { foreground: palette.blue.main, fontStyle: 'italic' },
    readonly: { foreground: palette.cyan.main, fontStyle: 'italic' },
  }
}

function generateLiteralTokens(): Record<string, SemanticTokenStyle> {
  return {
    string: { foreground: palette.green.light },
    number: { foreground: palette.orange.light },
    boolean: { foreground: palette.red.light },
  }
}

export function generateSemanticTokenColors(): Record<
  string,
  SemanticTokenStyle
> {
  return {
    ...generateVariableTokens(),
    ...generateFunctionTokens(),
    ...generateModernFrameworkTokens(),
    ...generateTypeTokens(),
    ...generateModifierTokens(),
    ...generateLiteralTokens(),
  }
}
