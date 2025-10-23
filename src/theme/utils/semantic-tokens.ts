import type { SemanticTokenStyle } from '../types'

export interface SemanticTokenConfig {
  foreground?: string
  background?: string
  fontStyle?: 'italic' | 'bold'
  underline?: boolean
  strikethrough?: boolean
}

export function createSemanticToken(
  config: SemanticTokenConfig
): SemanticTokenStyle {
  const token: SemanticTokenStyle = {}

  if (config.foreground) token.foreground = config.foreground
  if (config.background) token.background = config.background
  if (config.fontStyle) token.fontStyle = config.fontStyle
  if (config.underline) token.fontStyle = `${token.fontStyle || ''} underline`
  if (config.strikethrough)
    token.fontStyle = `${token.fontStyle || ''} strikethrough`

  return token
}

export function createSemanticTokenGroup(
  baseConfig: SemanticTokenConfig,
  variants: Record<string, Partial<SemanticTokenConfig>>
): Record<string, SemanticTokenStyle> {
  const result: Record<string, SemanticTokenStyle> = {}

  Object.entries(variants).forEach(([name, variantConfig]) => {
    result[name] = createSemanticToken({ ...baseConfig, ...variantConfig })
  })

  return result
}

// Вспомогательная функция для добавления прозрачности
export function alpha(color: string, opacity: number): string {
  // Упрощённая реализация - в реальном проекте нужна полноценная функция
  return (
    color +
    Math.round(opacity * 255)
      .toString(16)
      .padStart(2, '0')
  )
}
