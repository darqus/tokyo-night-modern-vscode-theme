/**
 * Основные типы для темы VS Code
 */

/**
 * Полная структура темы VS Code
 */
export interface VSCodeTheme {
  name: string
  type: 'dark' | 'light'
  semanticHighlighting?: boolean
  colors: Record<string, string>
  tokenColors: TokenColor[]
  semanticTokenColors: Record<string, SemanticTokenStyle>
}

/**
 * Правило цветовой подсветки для текстовых меток (TextMate)
 */
export interface TokenColor {
  name?: string
  scope: string | string[]
  settings?: {
    foreground?: string
    background?: string
    fontStyle?: string
  }
}

/**
 * Стиль семантического токена
 */
export interface SemanticTokenStyle {
  foreground?: string
  fontStyle?: string
}
