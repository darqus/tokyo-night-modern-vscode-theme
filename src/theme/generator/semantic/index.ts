import { palette } from '../../palette/index.js'
import type { SemanticTokenStyle } from '../../types/index.js'
import { generateFunctionTokens } from './functions.js'
import { generateModernFrameworkTokens } from './modern-frameworks.js'
import { generateVariableTokens } from './variables.js'

function generateTypeTokens(): Record<string, SemanticTokenStyle> {
  return {
    type: { foreground: palette.peach.main },
    interface: { foreground: palette.peach.main, fontStyle: 'italic' },
    class: { foreground: palette.peach.main, fontStyle: 'bold' },
    enum: { foreground: palette.peach.main },
    typeParameter: { foreground: palette.peach.main },
    struct: { foreground: palette.peach.main },
  }
}

function generateModifierTokens(): Record<string, SemanticTokenStyle> {
  return {
    public: { foreground: palette.green.main },
    private: { foreground: palette.red.main },
    protected: { foreground: palette.yellow.main },
    static: { foreground: palette.blue.main, fontStyle: 'italic' },
    readonly: { foreground: palette.cyan.main, fontStyle: 'italic' },
    abstract: { foreground: palette.purple.main, fontStyle: 'italic' },
    async: { foreground: palette.teal.main, fontStyle: 'italic' },
  }
}

function generateLiteralTokens(): Record<string, SemanticTokenStyle> {
  return {
    string: { foreground: palette.green.light },
    number: { foreground: palette.orange.light },
    boolean: { foreground: palette.red.light },
    regexp: { foreground: palette.cyan.light },
    null: { foreground: palette.red.light },
    undefined: { foreground: palette.red.light },
  }
}

function generateCommentTokens(): Record<string, SemanticTokenStyle> {
  return {
    comment: { foreground: palette.fg.main, fontStyle: 'italic' },
    'comment.documentation': { foreground: palette.fg.main },
    'comment.line': { foreground: palette.fg.main, fontStyle: 'italic' },
    'comment.block': { foreground: palette.fg.main, fontStyle: 'italic' },
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
