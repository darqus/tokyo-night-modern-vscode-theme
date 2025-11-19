import { universalPalette } from '../../src/theme/palette/index.js'
import {
  alpha,
  createSemanticToken,
  createSemanticTokenGroup,
} from '../../src/theme/utils/semantic-tokens'

describe('Semantic Tokens', () => {
  describe('createSemanticToken', () => {
    it('should create token with foreground', () => {
      const token = createSemanticToken({
        foreground: universalPalette.chromatic.red.main,
      })
      expect(token.foreground).toBe('#ff6b6b')
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
        foreground: universalPalette.chromatic.red.main,
        fontStyle: 'bold',
        underline: true,
      })
      expect(token.foreground).toBe('#ff6b6b')
      expect(token.fontStyle).toContain('bold')
      expect(token.fontStyle).toContain('underline')
    })
  })

  describe('createSemanticTokenGroup', () => {
    it('should create token group', () => {
      const group = createSemanticTokenGroup(
        { foreground: universalPalette.chromatic.red.main },
        {
          variant1: { fontStyle: 'italic' },
          variant2: { fontStyle: 'bold' },
        }
      )

      expect(group.variant1.foreground).toBe('#ff6b6b')
      expect(group.variant1.fontStyle).toBe('italic')
      expect(group.variant2.fontStyle).toBe('bold')
    })
  })

  describe('alpha', () => {
    it('should add alpha channel', () => {
      const result = alpha(universalPalette.chromatic.red.main, 0.5)
      expect(result).toMatch(/#ff6b6b[0-9a-f]{2}/)
    })

    it('should handle full opacity', () => {
      const result = alpha(universalPalette.chromatic.red.main, 1)
      expect(result).toBe('#ff6b6bff')
    })

    it('should handle zero opacity', () => {
      const result = alpha(universalPalette.chromatic.red.main, 0)
      expect(result).toBe('#ff6b6b00')
    })
  })
})
