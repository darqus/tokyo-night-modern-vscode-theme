import type { Hex } from './palette'
import { palette } from './palette'

export type SemanticTokenStyle = {
  foreground?: Hex
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
}

export const semanticTokenColors: Record<string, SemanticTokenStyle> = {
  'parameter.declaration': { foreground: palette.accent.yellow },
  parameter: { foreground: palette.fg.muted },
  'property.declaration': { foreground: palette.accent.teal },
  'property.defaultLibrary': { foreground: palette.accent.cyan },
  '*.defaultLibrary': { foreground: palette.accent.cyan },
  'variable.defaultLibrary': { foreground: palette.accent.cyan },
  'variable.declaration': { foreground: palette.accent.magenta },
  variable: { foreground: palette.fg.primary },
}
