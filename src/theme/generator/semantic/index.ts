import { palette } from '../../palette/index.js'
import type { SemanticTokenStyle } from '../../types/index.js'
import { generateFunctionTokens } from './functions.js'
import { generateModernFrameworkTokens } from './modern-frameworks.js'
import { generateVariableTokens } from './variables.js'

function generateTypeTokens(): Record<string, SemanticTokenStyle> {
  return {
    type: { foreground: palette.purple.light },
    interface: { foreground: palette.purple.light, fontStyle: 'italic' },
    class: { foreground: palette.cyan.light, fontStyle: 'bold' },
    enum: { foreground: palette.purple.dark },
    typeParameter: { foreground: palette.purple.light },
    struct: { foreground: palette.cyan.light },
  }
}

function generateModifierTokens(): Record<string, SemanticTokenStyle> {
  return {
    public: { foreground: palette.green.main },
    private: { foreground: palette.red.main },
    protected: { foreground: palette.yellow.main },
    static: { foreground: palette.blue.main, fontStyle: 'italic' },
    readonly: { foreground: palette.cyan.dark, fontStyle: 'italic' },
    abstract: { foreground: palette.purple.dark, fontStyle: 'italic' },
    async: { foreground: palette.teal.main, fontStyle: 'italic' },
  }
}

function generateLiteralTokens(): Record<string, SemanticTokenStyle> {
  return {
    string: { foreground: palette.green.main },
    number: { foreground: palette.orange.main },
    boolean: { foreground: palette.red.main },
    regexp: { foreground: palette.cyan.light },
    null: { foreground: palette.red.dark },
    undefined: { foreground: palette.red.dark },
  }
}

function generateCommentTokens(): Record<string, SemanticTokenStyle> {
  return {
    comment: { foreground: palette.neutral.main, fontStyle: 'italic' },
    'comment.documentation': { foreground: palette.neutral.main },
    'comment.line': { foreground: palette.fg.dark, fontStyle: 'italic' },
    'comment.block': { foreground: palette.fg.dark, fontStyle: 'italic' },
  }
}

function generateErrorHandlingTokens(): Record<string, SemanticTokenStyle> {
  return {
    'keyword.try': { foreground: palette.yellow.main, fontStyle: 'bold' },
    'keyword.catch': { foreground: palette.red.main, fontStyle: 'bold' },
    'keyword.throw': { foreground: palette.red.main, fontStyle: 'bold' },
    'keyword.finally': { foreground: palette.blue.main, fontStyle: 'bold' },
    exception: { foreground: palette.red.main },
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
    ...generateCommentTokens(),
    ...generateErrorHandlingTokens(),
  }
}
