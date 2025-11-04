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

    it('should include expected token types', () => {
      const tokens = generateCommentTokens()
      const tokenNames = tokens.map((token) => token.name)

      expect(tokenNames).toContain(
        'Italics - Comments, Storage, Keyword Flow, Vue attributes, Decorators'
      )
      expect(tokenNames).toContain('Fix YAML block scalar, Python Logical')
      expect(tokenNames).toContain('Comment')
      expect(tokenNames).toContain('Comment Doc')
      expect(tokenNames).toContain('Comment Doc Emphasized')
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

    it('should include expected token types', () => {
      const tokens = generateCssTokens()
      const tokenNames = tokens.map((token) => token.name)

      expect(tokenNames).toContain('CSS Class and Support')
      expect(tokenNames).toContain('CSS Font')
      expect(tokenNames).toContain('CSS Class')
      expect(tokenNames).toContain('CSS ID')
      expect(tokenNames).toContain('CSS Tag')
      expect(tokenNames).toContain(
        'CSS Tag Reference, Pseudo & Class Punctuation'
      )
      expect(tokenNames).toContain('CSS Punctuation')
      expect(tokenNames).toContain('CSS at-rule fix')
      expect(tokenNames).toContain('CSS Parent Selector Entity')
      expect(tokenNames).toContain('CSS Punctuation comma fix')
      expect(tokenNames).toContain('SCSS @')
      expect(tokenNames).toContain('SCSS Mixins, Extends, Include Keyword')
      expect(tokenNames).toContain('SCSS Include Mixin Argument')
      expect(tokenNames).toContain('CSS value')
      expect(tokenNames).toContain('CSS IDs')
      expect(tokenNames).toContain('CSS pseudo selectors')
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

    it('should include expected token types', () => {
      const tokens = generateMarkdownTokens()
      const tokenNames = tokens.map((token) => token.name)

      expect(tokenNames).toContain('JSON Key - Level 0')
      expect(tokenNames).toContain('Plain Punctuation')
      expect(tokenNames).toContain('Block Punctuation')
      expect(tokenNames).toContain('Markdown - Plain')
      expect(tokenNames).toContain('HTML text')
      expect(tokenNames).toContain('Markdown - Markup Raw Inline')
      expect(tokenNames).toContain('Markdown - Markup Raw Inline Punctuation')
      expect(tokenNames).toContain('Markdown - Heading 1')
      expect(tokenNames).toContain('Markdown - Heading 2')
      expect(tokenNames).toContain('Markdown - Heading 3')
      expect(tokenNames).toContain('Markdown - Heading 4')
      expect(tokenNames).toContain('Markdown - Heading 5')
      expect(tokenNames).toContain('Markdown - Heading 6')
      expect(tokenNames).toContain('Markup - Italic')
      expect(tokenNames).toContain('Markup - Bold')
      expect(tokenNames).toContain('Markup - Bold-Italic')
      expect(tokenNames).toContain('Markup - Underline')
      expect(tokenNames).toContain('Markdown - Blockquote')
      expect(tokenNames).toContain('Markup - Quote')
      expect(tokenNames).toContain('Markdown - Link')
      expect(tokenNames).toContain('Markdown - Fenced Code Block')
      expect(tokenNames).toContain('Markdown - Separator')
      expect(tokenNames).toContain('Markup - Table')
      expect(tokenNames).toContain('Token - Info')
      expect(tokenNames).toContain('Token - Warn')
      expect(tokenNames).toContain('Token - Error')
      expect(tokenNames).toContain('Token - Debug')
      expect(tokenNames).toContain('Apache Tag')
      expect(tokenNames).toContain('Preprocessor')
      expect(tokenNames).toContain('ENV value')
      expect(tokenNames).toContain('Sub-methods')
      expect(tokenNames).toContain('Language methods')
      expect(tokenNames).toContain('Variable punctuation')
      expect(tokenNames).toContain(
        'Keyword this with Punctuation, ES7 Bind Operator'
      )
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

    it('should include expected token types', () => {
      const tokens = generateMarkupTokens()
      const tokenNames = tokens.map((token) => token.name)

      expect(tokenNames).toContain('Inserted')
      expect(tokenNames).toContain('Deleted')
      expect(tokenNames).toContain('Changed')
      expect(tokenNames).toContain('Regular Expressions')
      expect(tokenNames).toContain('Regular Expressions - Punctuation')
      expect(tokenNames).toContain('Regular Expressions - Character Class')
      expect(tokenNames).toContain('Regular Expressions - Character Class Set')
      expect(tokenNames).toContain('Regular Expressions - Quantifier')
      expect(tokenNames).toContain('Regular Expressions - Backslash')
      expect(tokenNames).toContain('Escape Characters')
      expect(tokenNames).toContain('Decorators')
      expect(tokenNames).toContain('CSS Units')
      expect(tokenNames).toContain('HTML Attributes')
      expect(tokenNames).toContain('HTML Character Entity')
      expect(tokenNames).toContain(
        'Vue (Vetur / deprecated) Template attributes'
      )
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

    it('should include expected token types', () => {
      const tokens = generateModernTokens()
      const tokenNames = tokens.map((token) => token.name)

      expect(tokenNames).toContain('React/Vue Components')
      expect(tokenNames).toContain('TypeScript Types')
      expect(tokenNames).toContain('GraphQL Schema')
      expect(tokenNames).toContain('Tailwind Classes')
      expect(tokenNames).toContain('Routing Components')
      expect(tokenNames).toContain('State Management')
      expect(tokenNames).toContain('React Hooks')
      expect(tokenNames).toContain('TypeScript Generics')
      expect(tokenNames).toContain('Prisma Schema')
      expect(tokenNames).toContain('Testing Frameworks')
      expect(tokenNames).toContain('CSS-in-JS')
      expect(tokenNames).toContain('Astro/Svelte Components')
      expect(tokenNames).toContain('API Resolvers')
      expect(tokenNames).toContain('Validation Schemas')
      expect(tokenNames).toContain('Data Fetching')
      expect(tokenNames).toContain('Rust Macros')
      expect(tokenNames).toContain('Rust Lifetime')
      expect(tokenNames).toContain('Go Functions')
      expect(tokenNames).toContain('Python Type Hints')
      expect(tokenNames).toContain('Python Decorators')
      expect(tokenNames).toContain('Bun/Deno APIs')
      expect(tokenNames).toContain('Solid.js Signals')
      expect(tokenNames).toContain('Qwik Components')
      expect(tokenNames).toContain('HTMX Attributes')
      expect(tokenNames).toContain('Drizzle ORM')
      expect(tokenNames).toContain('Hono Routes')
      expect(tokenNames).toContain('Biome Config')
      expect(tokenNames).toContain('WebAssembly')
      expect(tokenNames).toContain('Zig Language')
    })
  })
})
