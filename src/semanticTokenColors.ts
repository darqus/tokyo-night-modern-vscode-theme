import type { Hex } from './palette'

export type SemanticTokenStyle = {
  foreground?: Hex
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
}

export const semanticTokenColors: Record<string, SemanticTokenStyle> = {
  'parameter.declaration': { foreground: '#e0af68' },
  parameter: { foreground: '#d9d4cd' },
  'property.declaration': { foreground: '#73daca' },
  'property.defaultLibrary': { foreground: '#2ac3de' },
  '*.defaultLibrary': { foreground: '#2ac3de' },
  'variable.defaultLibrary': { foreground: '#2ac3de' },
  'variable.declaration': { foreground: '#bb9af7' },
  variable: { foreground: '#c0caf5' },
}
