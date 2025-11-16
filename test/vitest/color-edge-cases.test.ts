import { describe, expect, it } from 'vitest'
import { chromaMain } from '../../src/theme/palette/base-colors'
import {
  alpha,
  ColorError,
  darken,
  isValidHex,
  lighten,
  mix,
} from '../../src/theme/utils/color'

describe('Color Utils Edge Cases', () => {
  describe('ColorError', () => {
    it('should create error with input', () => {
      const error = new ColorError('Invalid color', '#invalid')
      expect(error.message).toBe('Invalid color')
      expect(error.input).toBe('#invalid')
      expect(error.name).toBe('ColorError')
    })

    it('should create error without input', () => {
      const error = new ColorError('Invalid color')
      expect(error.message).toBe('Invalid color')
      expect(error.input).toBeUndefined()
    })
  })

  describe('alpha edge cases', () => {
    it('should throw error for invalid hex', () => {
      expect(() => alpha('invalid', 0.5)).toThrow(ColorError)
      expect(() => alpha('invalid', 0.5)).toThrow('Invalid hex color: invalid')
    })

    it('should throw error for invalid opacity', () => {
      expect(() => alpha(chromaMain.red, Number.NaN)).toThrow(ColorError)
      expect(() => alpha(chromaMain.red, Number.POSITIVE_INFINITY)).toThrow(
        ColorError
      )
      expect(() =>
        alpha(chromaMain.red, 'invalid' as unknown as number)
      ).toThrow(ColorError)
    })

    it('should clamp opacity values', () => {
      expect(alpha(chromaMain.red, -0.5)).toBe('#ff6b6b00')
      expect(alpha(chromaMain.red, 1.5)).toBe('#ff6b6bff')
    })
  })

  describe('lighten edge cases', () => {
    it('should throw error for invalid hex', () => {
      expect(() => lighten('invalid', 0.5)).toThrow(ColorError)
    })

    it('should throw error for invalid amount', () => {
      expect(() => lighten('#ff0000', Number.NaN)).toThrow(ColorError)
      expect(() => lighten('#ff0000', Number.POSITIVE_INFINITY)).toThrow(
        ColorError
      )
    })
  })

  describe('darken edge cases', () => {
    it('should throw error for invalid hex', () => {
      expect(() => darken('invalid', 0.5)).toThrow(ColorError)
    })

    it('should throw error for invalid amount', () => {
      expect(() => darken('#ff0000', Number.NaN)).toThrow(ColorError)
      expect(() => darken('#ff0000', Number.POSITIVE_INFINITY)).toThrow(
        ColorError
      )
    })
  })

  describe('mix edge cases', () => {
    it('should throw error for invalid first hex', () => {
      expect(() => mix('invalid', '#0000ff', 0.5)).toThrow(ColorError)
    })

    it('should throw error for invalid second hex', () => {
      expect(() => mix('#ff0000', 'invalid', 0.5)).toThrow(ColorError)
    })

    it('should throw error for invalid ratio', () => {
      expect(() => mix('#ff0000', '#0000ff', Number.NaN)).toThrow(ColorError)
      expect(() => mix('#ff0000', '#0000ff', Number.POSITIVE_INFINITY)).toThrow(
        ColorError
      )
    })

    it('should clamp ratio values', () => {
      const result1 = mix('#ff0000', '#0000ff', -0.5)
      const result2 = mix('#ff0000', '#0000ff', 0)
      expect(result1).toBe(result2)

      const result3 = mix('#ff0000', '#0000ff', 1.5)
      const result4 = mix('#ff0000', '#0000ff', 1)
      expect(result3).toBe(result4)
    })
  })

  describe('isValidHex edge cases', () => {
    it('should validate various hex formats', () => {
      expect(isValidHex('#fff')).toBe(true)
      expect(isValidHex('#ffffff')).toBe(true)
      expect(isValidHex('#ffffffff')).toBe(true)
      expect(isValidHex('fff')).toBe(true)
      expect(isValidHex('ffffff')).toBe(true)
      expect(isValidHex('ffffffff')).toBe(true)
    })

    it('should reject invalid formats', () => {
      expect(isValidHex('#ff')).toBe(false)
      expect(isValidHex('#ffff')).toBe(false)
      expect(isValidHex('#fffff')).toBe(false)
      expect(isValidHex('#fffffffff')).toBe(false)
      expect(isValidHex('invalid')).toBe(false)
      expect(isValidHex('')).toBe(false)
    })
  })
})
