import type { SemanticTokenStyle } from '../types/index.js'

export interface SemanticTokenConfig {
  foreground?: string
  fontStyle?: 'italic' | 'bold'
  underline?: boolean
  strikethrough?: boolean
}

export function createSemanticToken(
  config: SemanticTokenConfig
): SemanticTokenStyle {
  if (!config || typeof config !== 'object') {
    throw new Error('Invalid semantic token config provided')
  }

  const token: SemanticTokenStyle = {}
  const fontStyles: string[] = []

  if (config.foreground) token.foreground = config.foreground
  if (config.fontStyle) fontStyles.push(config.fontStyle)
  if (config.underline) fontStyles.push('underline')
  if (config.strikethrough) fontStyles.push('strikethrough')

  if (fontStyles.length > 0) {
    token.fontStyle = fontStyles.join(' ')
  }

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

// Helper function for adding transparency
export function alpha(color: string, opacity: number): string {
  // Simplified implementation - a full function is needed in a real project
  return (
    color +
    Math.round(opacity * 255)
      .toString(16)
      .padStart(2, '0')
  )
}
