

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

export const generateSemanticTokenColors = (): SemanticTokenColors => {
  return {
    namespace: { foreground: undefined },
    type: { foreground: undefined },
    class: { foreground: undefined },
    interface: {
      foreground: undefined,
      fontStyle: 'italic',
    },
    'variable.readonly': { foreground: undefined },
  }
}
