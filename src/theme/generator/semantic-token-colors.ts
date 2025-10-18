import { syntaxTokenPalette } from '../palette/calm-clarity-syntax'

// Тип для описания цвета и стиля токена
interface SemanticTokenStyle {
  foreground?: string
  background?: string
  fontStyle?:
    | 'normal'
    | 'italic'
    | 'bold italic'
    | 'underline'
    | 'strikethrough'
    | ''
}

// Тип для семантических токенов - используем Record для возможности указания произвольных токенов
type SemanticTokenColors = Record<string, SemanticTokenStyle>

export function generateSemanticTokenColors(): SemanticTokenColors {
  return {
    namespace: { foreground: syntaxTokenPalette.storage },
    type: { foreground: syntaxTokenPalette.types },
    class: { foreground: syntaxTokenPalette.classes },
    interface: {
      foreground: syntaxTokenPalette.interfaces,
      fontStyle: 'italic',
    },
    'variable.readonly': { foreground: syntaxTokenPalette.constants },
  }
}
