import { describe, expect, it } from 'vitest'
import { generateSemanticTokenColors } from '../../src/theme/generator/semantic'
import { generateFunctionTokens } from '../../src/theme/generator/semantic/functions'
import { generateModernFrameworkTokens } from '../../src/theme/generator/semantic/modern-frameworks'
import { generateVariableTokens } from '../../src/theme/generator/semantic/variables'

describe('Semantic Generator Tests', () => {
  describe('Function Tokens', () => {
    it('should generate function tokens', () => {
      const tokens = generateFunctionTokens()
      expect(tokens).toBeDefined()
      expect(typeof tokens).toBe('object')
      expect(Object.keys(tokens).length).toBeGreaterThan(0)

      // Check that each token has required properties
      for (const [key, token] of Object.entries(tokens)) {
        expect(key).toBeDefined()
        expect(token).toBeDefined()
        if (token.foreground) {
          expect(token.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
        if (token.fontStyle) {
          expect([
            'italic',
            'bold',
            'underline',
            'bold italic',
            'italic bold',
            'normal',
          ]).toContain(token.fontStyle)
        }
      }
    })
  })

  describe('Variable Tokens', () => {
    it('should generate variable tokens', () => {
      const tokens = generateVariableTokens()
      expect(tokens).toBeDefined()
      expect(typeof tokens).toBe('object')
      expect(Object.keys(tokens).length).toBeGreaterThan(0)

      // Check that each token has required properties
      for (const [key, token] of Object.entries(tokens)) {
        expect(key).toBeDefined()
        expect(token).toBeDefined()
        if (token.foreground) {
          expect(token.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
        if (token.fontStyle) {
          expect([
            'italic',
            'bold',
            'underline',
            'bold italic',
            'italic bold',
            'normal',
          ]).toContain(token.fontStyle)
        }
      }
    })
  })

  describe('Modern Framework Tokens', () => {
    it('should generate modern framework tokens', () => {
      const tokens = generateModernFrameworkTokens()
      expect(tokens).toBeDefined()
      expect(typeof tokens).toBe('object')
      expect(Object.keys(tokens).length).toBeGreaterThan(0)

      // Check that each token has required properties
      for (const [key, token] of Object.entries(tokens)) {
        expect(key).toBeDefined()
        expect(token).toBeDefined()
        if (token.foreground) {
          expect(token.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
        if (token.fontStyle) {
          expect([
            'italic',
            'bold',
            'underline',
            'bold italic',
            'italic bold',
            'normal',
          ]).toContain(token.fontStyle)
        }
      }
    })
  })

  describe('Full Semantic Token Colors', () => {
    it('should generate all semantic token colors', () => {
      const tokens = generateSemanticTokenColors()
      expect(tokens).toBeDefined()
      expect(typeof tokens).toBe('object')
      expect(Object.keys(tokens).length).toBeGreaterThan(0)

      // Check that each token has required properties
      for (const [key, token] of Object.entries(tokens)) {
        expect(key).toBeDefined()
        expect(token).toBeDefined()
        if (token.foreground) {
          expect(token.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
        if (token.fontStyle) {
          expect([
            'italic',
            'bold',
            'underline',
            'bold italic',
            'italic bold',
            'normal',
          ]).toContain(token.fontStyle)
        }
      }
    })
  })
})
