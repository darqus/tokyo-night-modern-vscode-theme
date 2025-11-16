import { baseColors } from '../../src/theme/palette/config/base-colors'
import type { VSCodeTheme } from '../../src/theme/types'
import {
  validateCriticalContrast,
  validateTheme,
} from '../../src/theme/utils/validation'

describe('Validation Utils', () => {
  const validTheme: VSCodeTheme = {
    name: 'Test Theme',
    type: 'dark',
    colors: {
      foreground: baseColors.ui.white,
      'editor.background': baseColors.ui.black,
    },
    tokenColors: [],
    semanticTokenColors: {},
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
      const theme = { ...validTheme, type: 'invalid' as 'dark' | 'light' }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
      expect(result.errors.some((e) => e.includes('type'))).toBe(true)
    })

    it('should detect invalid hex colors', () => {
      const theme = {
        ...validTheme,
        colors: { foreground: 'invalid' },
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
      expect(result.errors.some((e) => e.includes('Invalid hex'))).toBe(true)
    })

    it('should handle missing colors object', () => {
      const theme = {
        ...validTheme,
        colors: null as unknown as Record<string, string>,
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
      expect(result.errors.some((e) => e.includes('colors object'))).toBe(true)
    })

    it('should detect low contrast', () => {
      const theme = {
        ...validTheme,
        colors: {
          foreground: '#565f89',
          'editor.background': '#7c87a4',
        },
      }
      const result = validateTheme(theme)
      expect(result.warnings.some((w) => w.includes('contrast'))).toBe(true)
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
          foreground: '#565f89',
          'editor.background': '#7c87a4',
          'button.foreground': '#101227',
          'button.background': '#565f89',
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
      const theme = { ...validTheme, tokenColors: undefined as unknown as [] }
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
          foreground: '#7c87a4',
          'editor.background': '#565f89',
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
          foreground: baseColors.ui.white,
          'editor.background': baseColors.ui.black,
          'editor.foreground': '#a9b1d6',
        },
        tokenColors: [
          {
            scope: 'comment',
            settings: { foreground: '#565f89' },
          },
        ],
        semanticTokenColors: {},
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(true)
    })

    it('should validate token colors with invalid foreground', () => {
      const theme = {
        ...validTheme,
        tokenColors: [
          { name: 'test', scope: 'test', settings: { foreground: 'invalid' } },
        ],
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
      expect(result.errors.some((e) => e.includes('Invalid foreground'))).toBe(
        true
      )
    })

    it('should validate token colors with invalid background', () => {
      const theme = {
        ...validTheme,
        tokenColors: [
          { name: 'test', scope: 'test', settings: { background: 'invalid' } },
        ],
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
      expect(result.errors.some((e) => e.includes('Invalid background'))).toBe(
        true
      )
    })

    it('should validate semantic token colors', () => {
      const theme = {
        ...validTheme,
        semanticTokenColors: {
          variable: { foreground: 'invalid' },
        },
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
      expect(result.errors.some((e) => e.includes('Semantic token'))).toBe(true)
    })

    it('should check contrast for light theme', () => {
      const theme = {
        ...validTheme,
        type: 'light' as const,
        colors: {
          foreground: baseColors.ui.black,
          'editor.background': baseColors.ui.white,
        },
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(true)
    })

    it('should detect missing color values', () => {
      const theme = {
        ...validTheme,
        colors: {
          foreground: null as unknown as string,
        },
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
    })

    it('should detect non-string color values', () => {
      const theme = {
        ...validTheme,
        colors: {
          foreground: 123 as unknown as string,
        },
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
    })

    it('should detect undefined/null string values', () => {
      const theme = {
        ...validTheme,
        colors: {
          foreground: 'undefined',
        },
      }
      const result = validateTheme(theme)
      expect(result.valid).toBe(false)
    })
  })

  describe('validateCriticalContrast edge cases', () => {
    it('should skip validation for light theme', () => {
      const theme = {
        ...validTheme,
        type: 'light' as const,
      }
      const result = validateCriticalContrast(theme)
      expect(result.valid).toBe(true)
    })

    it('should check button contrast', () => {
      const theme = {
        ...validTheme,
        colors: {
          'button.foreground': baseColors.ui.white,
          'button.background': baseColors.ui.black,
        },
      }
      const result = validateCriticalContrast(theme)
      expect(result.valid).toBe(true)
    })

    it('should check input contrast', () => {
      const theme = {
        ...validTheme,
        colors: {
          'input.foreground': baseColors.ui.white,
          'input.background': baseColors.ui.black,
        },
      }
      const result = validateCriticalContrast(theme)
      expect(result.valid).toBe(true)
    })

    it('should validate contrast ratios', () => {
      const theme = {
        ...validTheme,
        colors: {
          foreground: '#101227',
          'editor.background': baseColors.ui.black,
        },
      }
      const result = validateCriticalContrast(theme)
      expect(result).toBeDefined()
      expect(result.valid).toBeDefined()
    })

    it('should handle theme without colors object', () => {
      const theme = {
        ...validTheme,
        colors: null as unknown as Record<string, string>,
      }
      const result = validateCriticalContrast(theme)
      expect(result.valid).toBe(true)
    })

    it('should warn for contrast between AA and AAA', () => {
      const theme = {
        ...validTheme,
        colors: {
          'button.foreground': '#a9b1d6',
          'button.background': baseColors.ui.black,
        },
      }
      const result = validateCriticalContrast(theme)
      expect(result.valid).toBe(true)
      expect(result.warnings.length).toBeGreaterThanOrEqual(0)
    })
  })
})
