import { describe, it, expect } from '@jest/globals'
import {
  validateContrast,
  getContrastRatio,
  validateAccessibility,
  validateColorUsage,
} from '../src/theme/validation'

describe('Color Validation', () => {
  describe('validateContrast', () => {
    it('should validate AA contrast for normal text', () => {
      const result = validateContrast('#000000', '#FFFFFF', 'AA', 'normal')
      expect(result.isValid).toBe(true)
      expect(result.ratio).toBeGreaterThan(4.5)
    })

    it('should fail AA contrast for low contrast pair', () => {
      const result = validateContrast('#888888', '#999999', 'AA', 'normal')
      expect(result.isValid).toBe(false)
    })
  })

  describe('getContrastRatio', () => {
    it('should calculate correct contrast ratio', () => {
      const ratio = getContrastRatio('#000000', '#FFFFFF')
      expect(ratio).toBeCloseTo(21, 1)
    })
  })

  describe('validateAccessibility', () => {
    it('should validate color palette accessibility', () => {
      const colors = {
        textPrimary: '#000000',
        backgroundPrimary: '#FFFFFF',
        textSecondary: '#666666',
        interactivePrimary: '#0066CC',
      }

      const result = validateAccessibility(colors)
      expect(result).toHaveProperty('isValid')
      expect(result).toHaveProperty('score')
      expect(result).toHaveProperty('issues')
    })
  })

  describe('validateColorUsage', () => {
    it('should validate theme color usage', () => {
      const theme = {
        name: 'Test Theme',
        colors: {
          backgroundPrimary: '#FFFFFF',
          textPrimary: '#000000',
          textSecondary: '#666666',
          interactivePrimary: '#0066CC',
          error: '#CC0000',
          success: '#00CC00',
          warning: '#CCCC00',
        },
      }

      const result = validateColorUsage(theme)
      expect(result).toHaveProperty('isValid')
      expect(result).toHaveProperty('score')
    })
  })
})
