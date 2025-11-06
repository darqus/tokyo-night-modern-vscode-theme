import type { SemanticTokenStyle } from '../types/index.js'

/**
 * Упрощенная функция для создания семантического токена
 */
export const token = (
  foreground: string,
  fontStyle?: 'bold' | 'italic' | 'bold italic'
): SemanticTokenStyle =>
  fontStyle ? { foreground, fontStyle } : { foreground }

/**
 * Алиасы для часто используемых стилей
 */
export const boldToken = (fg: string) => token(fg, 'bold')
export const italicToken = (fg: string) => token(fg, 'italic')
export const boldItalicToken = (fg: string) => token(fg, 'bold italic')
