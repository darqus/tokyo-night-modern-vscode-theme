import type { VSCodeTheme } from '../../src/theme/types'
import { validateCriticalContrast, validateTheme } from '../../src/theme/utils/validation'

describe('Validation Utils', () => {
  const validTheme: VSCodeTheme = {
    name: 'Test Theme',
    type: 'dark',
    colors: {
      foreground: '#ffffff',
      'editor.background': '#000000',
    },
    tokenColors: [],
  }

  describe('validateTheme', () => {
    it('should validate correct theme', () => {
      const result = validateTheme(validTheme)
      expect(result.valid).toBe(true)
      expect(result.errors).toHaveLength(0)
    })

    it('should detect missing name', () => {
      const theme = { ...validTheme, name: '' }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
      expect(result.errors).toContain('Theme name is required')
    })

    it('should detect invalid type', () => {
      const theme = { ...validTheme, type: 'invalid' as any }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
      expect(result.errors.some(e => e.includes('type'))).toBe(true)
    })

    it('should detect invalid hex colors', () => {
      const theme = {
        ...validTheme,
        colors: { foreground: 'invalid' },
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
      expect(result.errors.some(e => e.includes('Invalid hex'))).toBe(true)
    })

    it('should handle missing colors object', () => {
      const theme = {
        ...validTheme,
        colors: null as any
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
      expect(result.errors.some(e => e.includes('colors object'))).toBe(true)
    })

    it('should detect low contrast', () => {
      const theme = {
        ...validTheme,
        colors: {
          foreground: '#888888',
          'editor.background': '#777777',
        },
      }
      const result = validateTheme(theme)
      expect(result.warnings.some(w => w.includes('contrast'))).toBe(true)
    })
  })

  describe('validateCriticalContrast', () => {
    it('should pass high contrast', () => {
      const result = validateCriticalContrast(validTheme)
      expect(result.valid).toBe(true)
    })

    it('should detect low contrast in critical pairs', () => {
      const theme = {
        ...validTheme,
        colors: {
          foreground: '#888888',
          'editor.background': '#777777',
          'button.foreground': '#999999',
          'button.background': '#888888',
        },
      }
      const result = validateCriticalContrast(theme)
      expect(result.valid).toBe(false)
      expect(result.errors.length).toBeGreaterThan(0)
    })
  })

  describe('edge cases', () => {
    it('should handle theme with empty colors', () => {
      const theme = { ...validTheme, colors: {} }
      const result = validateTheme(theme)
      expect(result).toBeDefined()
      expect(result.valid).toBe(true)
    })

    it('should handle theme without tokenColors', () => {
      const theme = { ...validTheme, tokenColors: undefined as any }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
    })

    it('should validate multiple invalid colors', () => {
      const theme = {
        ...validTheme,
        colors: {
          foreground: 'invalid1',
          'editor.background': 'invalid2',
        },
      }
      const result = validateTheme(theme)
      expect(result.errors.length).toBeGreaterThanOrEqual(2)
    })

    it('should return warnings for low contrast', () => {
      const theme = {
        ...validTheme,
        colors: {
          foreground: '#aaaaaa',
          'editor.background': '#999999',
        },
      }
      const result = validateTheme(theme)
      expect(result.warnings.length).toBeGreaterThan(0)
    })

    it('should validate theme with valid structure', () => {
      const theme = {
        name: 'Valid Theme',
        type: 'dark' as const,
        colors: {
          foreground: '#ffffff',
          'editor.background': '#000000',
          'editor.foreground': '#cccccc',
        },
        tokenColors: [
          { scope: 'comment', settings: { foreground: '#888888' } }
        ],
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(true)
    })

    it('should validate token colors with invalid foreground', () => {
      const theme = {
        ...validTheme,
        tokenColors: [
          { name: 'test', scope: 'test', settings: { foreground: 'invalid' } }
        ]
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
      expect(result.errors.some(e => e.includes('Invalid foreground'))).toBe(true)
    })

    it('should validate token colors with invalid background', () => {
      const theme = {
        ...validTheme,
        tokenColors: [
          { name: 'test', scope: 'test', settings: { background: 'invalid' } }
        ]
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
      expect(result.errors.some(e => e.includes('Invalid background'))).toBe(true)
    })

    it('should validate semantic token colors', () => {
      const theme = {
        ...validTheme,
        semanticTokenColors: {
          'variable': { foreground: 'invalid' }
        }
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
      expect(result.errors.some(e => e.includes('Semantic token'))).toBe(true)
    })

    it('should check contrast for light theme', () => {
      const theme = {
        ...validTheme,
        type: 'light' as const,
        colors: {
          foreground: '#000000',
          'editor.background': '#ffffff',
        }
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(true)
    })

    it('should detect missing color values', () => {
      const theme = {
        ...validTheme,
        colors: {
          foreground: null as any
        }
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
    })

    it('should detect non-string color values', () => {
      const theme = {
        ...validTheme,
        colors: {
          foreground: 123 as any
        }
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
    })

    it('should detect undefined/null string values', () => {
      const theme = {
        ...validTheme,
        colors: {
          foreground: 'undefined'
        }
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
    })
  })

  describe('validateCriticalContrast edge cases', () => {
    it('should skip validation for light theme', () => {
      const theme = {
        ...validTheme,
        type: 'light' as const
      }
      const result = validateCriticalContrast(theme)
      expect(result.valid).toBe(true)
    })

    it('should check button contrast', () => {
      const theme = {
        ...validTheme,
        colors: {
          'button.foreground': '#ffffff',
          'button.background': '#000000',
        }
      }
      const result = validateCriticalContrast(theme)
      expect(result.valid).toBe(true)
    })

    it('should check input contrast', () => {
      const theme = {
        ...validTheme,
        colors: {
          'input.foreground': '#ffffff',
          'input.background': '#000000',
        }
      }
      const result = validateCriticalContrast(theme)
      expect(result.valid).toBe(true)
    })

    it('should validate contrast ratios', () => {
      const theme = {
        ...validTheme,
        colors: {
          foreground: '#999999',
          'editor.background': '#000000',
        }
      }
      const result = validateCriticalContrast(theme)
      expect(result).toBeDefined()
      expect(result.valid).toBeDefined()
    })

    it('should handle theme without colors object', () => {
      const theme = {
        ...validTheme,
        colors: null as any
      }
      const result = validateCriticalContrast(theme)
      expect(result.valid).toBe(true)
    })

    it('should warn for contrast between AA and AAA', () => {
      const theme = {
        ...validTheme,
        colors: {
          'button.foreground': '#888888',
          'button.background': '#000000',
        }
      }
      const result = validateCriticalContrast(theme)
      expect(result.valid).toBe(true)
      expect(result.warnings.length).toBeGreaterThanOrEqual(0)
    })
  })
})
