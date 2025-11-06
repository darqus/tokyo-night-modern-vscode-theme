import { describe, expect, it } from 'vitest'
import { generateBasicTokens } from '../../src/theme/generator/tokens/basic'
import { generateCodeTokens } from '../../src/theme/generator/tokens/code'
import { generateCommentTokens } from '../../src/theme/generator/tokens/comments'
import { generateCssTokens } from '../../src/theme/generator/tokens/css'
import { generateMarkdownTokens } from '../../src/theme/generator/tokens/markdown'
import { generateMarkupTokens } from '../../src/theme/generator/tokens/markup'
import { generateModernTokens } from '../../src/theme/generator/tokens/modern'

describe('Token Generator Tests', () => {
  describe('Basic Tokens', () => {
    it('should generate basic tokens', () => {
      const tokens = generateBasicTokens()
      expect(tokens).toBeDefined()
      expect(Array.isArray(tokens)).toBe(true)
      expect(tokens.length).toBeGreaterThan(0)

      // Check that each token has required properties
      for (const token of tokens) {
        expect(token.name).toBeDefined()
        expect(token.scope).toBeDefined()
        expect(token.settings).toBeDefined()
      }
    })

    it('should have valid token structures', () => {
      const tokens = generateBasicTokens()
      for (const token of tokens) {
        expect(typeof token.name).toBe('string')
        expect(token.scope).toBeDefined()
        if (Array.isArray(token.scope)) {
          for (const scope of token.scope) {
            expect(typeof scope).toBe('string')
          }
        } else {
          expect(typeof token.scope).toBe('string')
        }
        if (token.settings) {
          expect(typeof token.settings).toBe('object')
          if (token.settings.foreground) {
            expect(token.settings.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
          }
          if (token.settings.fontStyle) {
            expect([
              'italic',
              'bold',
              'underline',
              'bold italic',
              'italic bold',
              'normal',
            ]).toContain(token.settings.fontStyle)
          }
        }
      }
    })

    it('should have valid color values in tokens', () => {
      const tokens = generateBasicTokens()
      for (const token of tokens) {
        if (token.settings?.foreground) {
          expect(token.settings.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
        if (token.settings?.fontStyle) {
          expect([
            'italic',
            'bold',
            'underline',
            'bold italic',
            'italic bold',
          ]).toContain(token.settings.fontStyle)
        }
      }
    })

    it('should include expected token types', () => {
      const tokens = generateBasicTokens()
      const tokenNames = tokens.map((token) => token.name)

      expect(tokenNames).toContain('Number, Boolean, Undefined, Null')
      expect(tokenNames).toContain('String, Symbols')
      expect(tokenNames).toContain('Colors')
      expect(tokenNames).toContain('Invalid')
      expect(tokenNames).toContain('Storage Type')
      expect(tokenNames).toContain('Operators')
      expect(tokenNames).toContain('Punctuation')
      expect(tokenNames).toContain('Keyword')
    })
  })

  describe('Code Tokens', () => {
    it('should generate code tokens', () => {
      const tokens = generateCodeTokens()
      expect(tokens).toBeDefined()
      expect(Array.isArray(tokens)).toBe(true)
      expect(tokens.length).toBeGreaterThan(0)

      // Check that each token has required properties
      for (const token of tokens) {
        expect(token.name).toBeDefined()
        expect(token.scope).toBeDefined()
        expect(token.settings).toBeDefined()
      }
    })

    it('should have valid token structures', () => {
      const tokens = generateCodeTokens()
      for (const token of tokens) {
        expect(typeof token.name).toBe('string')
        expect(token.scope).toBeDefined()
        if (Array.isArray(token.scope)) {
          for (const scope of token.scope) {
            expect(typeof scope).toBe('string')
          }
        } else {
          expect(typeof token.scope).toBe('string')
        }
        if (token.settings) {
          expect(typeof token.settings).toBe('object')
          if (token.settings.foreground) {
            expect(token.settings.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
          }
          if (token.settings.fontStyle) {
            expect([
              'italic',
              'bold',
              'underline',
              'bold italic',
              'italic bold',
              'normal',
            ]).toContain(token.settings.fontStyle)
          }
        }
      }
    })

    it('should have valid color values in tokens', () => {
      const tokens = generateCodeTokens()
      for (const token of tokens) {
        if (token.settings?.foreground) {
          expect(token.settings.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
        if (token.settings?.fontStyle) {
          expect([
            'italic',
            'bold',
            'underline',
            'bold italic',
            'italic bold',
          ]).toContain(token.settings.fontStyle)
        }
      }
    })

    it('should include expected token types', () => {
      const tokens = generateCodeTokens()
      const tokenNames = tokens.map((token) => token.name)

      expect(tokenNames).toContain('Tag')
      expect(tokenNames).toContain('Variables')
      expect(tokenNames).toContain('Object Key')
      expect(tokenNames).toContain('Methods')
      expect(tokenNames).toContain('Function Definition')
      expect(tokenNames).toContain('Class, Support, DOM, etc')
    })
  })

  describe('Comment Tokens', () => {
    it('should generate comment tokens', () => {
      const tokens = generateCommentTokens()
      expect(tokens).toBeDefined()
      expect(Array.isArray(tokens)).toBe(true)
      expect(tokens.length).toBeGreaterThan(0)

      // Check that each token has required properties
      for (const token of tokens) {
        expect(token.name).toBeDefined()
        expect(token.scope).toBeDefined()
        expect(token.settings).toBeDefined()
      }
    })

    it('should have valid token structures', () => {
      const tokens = generateCommentTokens()
      for (const token of tokens) {
        expect(typeof token.name).toBe('string')
        expect(token.scope).toBeDefined()
        if (Array.isArray(token.scope)) {
          for (const scope of token.scope) {
            expect(typeof scope).toBe('string')
          }
        } else {
          expect(typeof token.scope).toBe('string')
        }
        if (token.settings) {
          expect(typeof token.settings).toBe('object')
          if (token.settings.foreground) {
            expect(token.settings.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
          }
          if (token.settings.fontStyle) {
            expect([
              'italic',
              'bold',
              'underline',
              'bold italic',
              'italic bold',
              'normal',
            ]).toContain(token.settings.fontStyle)
          }
        }
      }
    })

    it('should have valid color values in tokens', () => {
      const tokens = generateCommentTokens()
      for (const token of tokens) {
        if (token.settings?.foreground) {
          expect(token.settings.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
        if (token.settings?.fontStyle) {
          expect([
            'italic',
            'bold',
            'underline',
            'bold italic',
            'italic bold',
            'normal',
            'strikethrough',
          ]).toContain(token.settings.fontStyle)
        }
      }
    })
  })

  describe('CSS Tokens', () => {
    it('should generate CSS tokens', () => {
      const tokens = generateCssTokens()
      expect(tokens).toBeDefined()
      expect(Array.isArray(tokens)).toBe(true)
      expect(tokens.length).toBeGreaterThan(0)

      // Check that each token has required properties
      for (const token of tokens) {
        expect(token.name).toBeDefined()
        expect(token.scope).toBeDefined()
        expect(token.settings).toBeDefined()
      }
    })

    it('should have valid token structures', () => {
      const tokens = generateCssTokens()
      for (const token of tokens) {
        expect(typeof token.name).toBe('string')
        expect(token.scope).toBeDefined()
        if (Array.isArray(token.scope)) {
          for (const scope of token.scope) {
            expect(typeof scope).toBe('string')
          }
        } else {
          expect(typeof token.scope).toBe('string')
        }
        if (token.settings) {
          expect(typeof token.settings).toBe('object')
          if (token.settings.foreground) {
            expect(token.settings.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
          }
          if (token.settings.fontStyle) {
            expect([
              'italic',
              'bold',
              'underline',
              'bold italic',
              'italic bold',
              'normal',
            ]).toContain(token.settings.fontStyle)
          }
        }
      }
    })

    it('should have valid color values in tokens', () => {
      const tokens = generateCssTokens()
      for (const token of tokens) {
        if (token.settings?.foreground) {
          expect(token.settings.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
        if (token.settings?.fontStyle) {
          expect([
            'italic',
            'bold',
            'underline',
            'bold italic',
            'italic bold',
          ]).toContain(token.settings.fontStyle)
        }
      }
    })
  })

  describe('Markdown Tokens', () => {
    it('should generate markdown tokens', () => {
      const tokens = generateMarkdownTokens()
      expect(tokens).toBeDefined()
      expect(Array.isArray(tokens)).toBe(true)
      expect(tokens.length).toBeGreaterThan(0)

      // Check that each token has required properties
      for (const token of tokens) {
        expect(token.name).toBeDefined()
        expect(token.scope).toBeDefined()
        expect(token.settings).toBeDefined()
      }
    })

    it('should have valid token structures', () => {
      const tokens = generateMarkdownTokens()
      for (const token of tokens) {
        expect(typeof token.name).toBe('string')
        expect(token.scope).toBeDefined()
        if (Array.isArray(token.scope)) {
          for (const scope of token.scope) {
            expect(typeof scope).toBe('string')
          }
        } else {
          expect(typeof token.scope).toBe('string')
        }
        if (token.settings) {
          expect(typeof token.settings).toBe('object')
          if (token.settings.foreground) {
            expect(token.settings.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
          }
          if (token.settings.fontStyle) {
            expect([
              'italic',
              'bold',
              'underline',
              'bold italic',
              'italic bold',
              'normal',
            ]).toContain(token.settings.fontStyle)
          }
        }
      }
    })

    it('should have valid color values in tokens', () => {
      const tokens = generateMarkdownTokens()
      for (const token of tokens) {
        if (token.settings?.foreground) {
          expect(token.settings.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
        if (token.settings?.fontStyle) {
          expect([
            'italic',
            'bold',
            'underline',
            'bold italic',
            'italic bold',
          ]).toContain(token.settings.fontStyle)
        }
      }
    })
  })

  describe('Markup Tokens', () => {
    it('should generate markup tokens', () => {
      const tokens = generateMarkupTokens()
      expect(tokens).toBeDefined()
      expect(Array.isArray(tokens)).toBe(true)
      expect(tokens.length).toBeGreaterThan(0)

      // Check that each token has required properties
      for (const token of tokens) {
        expect(token.name).toBeDefined()
        expect(token.scope).toBeDefined()
        expect(token.settings).toBeDefined()
      }
    })

    it('should have valid token structures', () => {
      const tokens = generateMarkupTokens()
      for (const token of tokens) {
        expect(typeof token.name).toBe('string')
        expect(token.scope).toBeDefined()
        if (Array.isArray(token.scope)) {
          for (const scope of token.scope) {
            expect(typeof scope).toBe('string')
          }
        } else {
          expect(typeof token.scope).toBe('string')
        }
        if (token.settings) {
          expect(typeof token.settings).toBe('object')
          if (token.settings.foreground) {
            expect(token.settings.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
          }
          if (token.settings.fontStyle) {
            expect([
              'italic',
              'bold',
              'underline',
              'bold italic',
              'italic bold',
              'normal',
            ]).toContain(token.settings.fontStyle)
          }
        }
      }
    })

    it('should have valid color values in tokens', () => {
      const tokens = generateMarkupTokens()
      for (const token of tokens) {
        if (token.settings?.foreground) {
          expect(token.settings.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
        if (token.settings?.fontStyle) {
          expect([
            'italic',
            'bold',
            'underline',
            'bold italic',
            'italic bold',
          ]).toContain(token.settings.fontStyle)
        }
      }
    })
  })

  describe('Modern Tokens', () => {
    it('should generate modern tokens', () => {
      const tokens = generateModernTokens()
      expect(tokens).toBeDefined()
      expect(Array.isArray(tokens)).toBe(true)
      expect(tokens.length).toBeGreaterThan(0)

      // Check that each token has required properties
      for (const token of tokens) {
        expect(token.name).toBeDefined()
        expect(token.scope).toBeDefined()
        expect(token.settings).toBeDefined()
      }
    })

    it('should have valid token structures', () => {
      const tokens = generateModernTokens()
      for (const token of tokens) {
        expect(typeof token.name).toBe('string')
        expect(token.scope).toBeDefined()
        if (Array.isArray(token.scope)) {
          for (const scope of token.scope) {
            expect(typeof scope).toBe('string')
          }
        } else {
          expect(typeof token.scope).toBe('string')
        }
        if (token.settings) {
          expect(typeof token.settings).toBe('object')
          if (token.settings.foreground) {
            expect(token.settings.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
          }
          if (token.settings.fontStyle) {
            expect([
              'italic',
              'bold',
              'underline',
              'bold italic',
              'italic bold',
              'normal',
            ]).toContain(token.settings.fontStyle)
          }
        }
      }
    })

    it('should have valid color values in tokens', () => {
      const tokens = generateModernTokens()
      for (const token of tokens) {
        if (token.settings?.foreground) {
          expect(token.settings.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
        if (token.settings?.fontStyle) {
          expect([
            'italic',
            'bold',
            'underline',
            'bold italic',
            'italic bold',
          ]).toContain(token.settings.fontStyle)
        }
      }
    })
  })
})
