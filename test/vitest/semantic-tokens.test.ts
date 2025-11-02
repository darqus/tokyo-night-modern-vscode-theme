import {
  alpha,
  createSemanticToken,
  createSemanticTokenGroup,
} from '../../src/theme/utils/semantic-tokens'

describe('Semantic Tokens', () => {
  describe('createSemanticToken', () => {
    it('should create token with foreground', () => {
      const token = createSemanticToken({ foreground: '#ff0000' })
      expect(token.foreground).toBe('#ff0000')
    })

    it('should create token with fontStyle', () => {
      const token = createSemanticToken({ fontStyle: 'italic' })
      expect(token.fontStyle).toBe('italic')
    })

    it('should create token with underline', () => {
      const token = createSemanticToken({ underline: true })
      expect(token.fontStyle).toContain('underline')
    })

    it('should create token with strikethrough', () => {
      const token = createSemanticToken({ strikethrough: true })
      expect(token.fontStyle).toContain('strikethrough')
    })

    it('should combine multiple styles', () => {
      const token = createSemanticToken({
        foreground: '#ff0000',
        fontStyle: 'bold',
        underline: true,
      })
      expect(token.foreground).toBe('#ff0000')
      expect(token.fontStyle).toContain('bold')
      expect(token.fontStyle).toContain('underline')
    })
  })

  describe('createSemanticTokenGroup', () => {
    it('should create token group', () => {
      const group = createSemanticTokenGroup(
        { foreground: '#ff0000' },
        {
          variant1: { fontStyle: 'italic' },
          variant2: { fontStyle: 'bold' },
        }
      )

      expect(group.variant1.foreground).toBe('#ff0000')
      expect(group.variant1.fontStyle).toBe('italic')
      expect(group.variant2.fontStyle).toBe('bold')
    })
  })

  describe('alpha', () => {
    it('should add alpha channel', () => {
      const result = alpha('#ff0000', 0.5)
      expect(result).toMatch(/#ff0000[0-9a-f]{2}/)
    })

    it('should handle full opacity', () => {
      const result = alpha('#ff0000', 1)
      expect(result).toBe('#ff0000ff')
    })

    it('should handle zero opacity', () => {
      const result = alpha('#ff0000', 0)
      expect(result).toBe('#ff000000')
    })
  })
})
