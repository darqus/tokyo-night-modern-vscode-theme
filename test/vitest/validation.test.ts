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
})
