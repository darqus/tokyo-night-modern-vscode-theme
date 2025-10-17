import { type BaseSyntaxToken, baseSyntaxColors } from './base'
import {
  type JavaScriptSyntaxToken,
  javascriptSyntaxColors,
} from './languages/javascript'
import { type PythonSyntaxToken, pythonSyntaxColors } from './languages/python'

// Re-export base syntax colors
export { baseSyntaxColors, type BaseSyntaxToken } from './base'

// Re-export language-specific syntax colors
export {
  javascriptSyntaxColors,
  type JavaScriptSyntaxToken,
} from './languages/javascript'
export { pythonSyntaxColors, type PythonSyntaxToken } from './languages/python'

// Common interfaces for language syntax
export interface LanguageSyntaxColors {
  [key: string]: string | Record<string, unknown>
}

export interface SyntaxLanguage {
  name: string
  extension: string[]
  colors: LanguageSyntaxColors
}

// Registry of supported languages
export const supportedLanguages: Record<string, SyntaxLanguage> = {
  javascript: {
    name: 'JavaScript',
    extension: ['.js', '.jsx', '.mjs', '.cjs'],
    colors: javascriptSyntaxColors,
  },
  python: {
    name: 'Python',
    extension: ['.py', '.pyw', '.pyi'],
    colors: pythonSyntaxColors,
  },
}

// Utility functions
export function getLanguageSyntax(
  language: string
): LanguageSyntaxColors | null {
  return supportedLanguages[language]?.colors || null
}

export function getSyntaxColor(language: string, token: string): string | null {
  const langSyntax = getLanguageSyntax(language)
  if (!langSyntax) return null

  // Handle nested objects (like keyword.const, object.key, etc.)
  const keys = token.split('.')
  let value: string | Record<string, unknown> = langSyntax

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key] as string | Record<string, unknown>
    } else {
      return null
    }
  }

  return typeof value === 'string' ? value : null
}

export function getBaseSyntaxColor(token: BaseSyntaxToken): string {
  return baseSyntaxColors[token]
}

// Type for all possible syntax tokens across languages
export type SyntaxToken =
  | BaseSyntaxToken
  | JavaScriptSyntaxToken
  | PythonSyntaxToken
