import {
  alpha,
  darken,
  isValidHex,
  lighten,
  mix,
} from '../../src/theme/utils/color'
import { TEST_COLORS } from './test-constants.js'

describe('Color Utils', () => {
  describe('alpha', () => {
    it('should add alpha channel', () => {
      expect(alpha(TEST_COLORS.RED, 0.5)).toBe('#ff000080')
      expect(alpha(TEST_COLORS.RED, 1)).toBe('#ff0000ff')
      expect(alpha(TEST_COLORS.RED, 0)).toBe('#ff000000')
    })

    it('should clamp opacity values', () => {
      expect(alpha(TEST_COLORS.RED, 1.5)).toBe('#ff0000ff')
      expect(alpha(TEST_COLORS.RED, -0.5)).toBe('#ff000000')
    })
  })

  describe('lighten', () => {
    it('should lighten color', () => {
      expect(lighten(TEST_COLORS.BLACK, 0.5)).toBe('#808080')
      expect(lighten(TEST_COLORS.BLACK, 1)).toBe(TEST_COLORS.WHITE)
    })

    it('should not change white', () => {
      expect(lighten(TEST_COLORS.WHITE, 0.5)).toBe(TEST_COLORS.WHITE)
    })
  })

  describe('darken', () => {
    it('should darken color', () => {
      expect(darken(TEST_COLORS.WHITE, 0.5)).toBe('#808080')
      expect(darken(TEST_COLORS.WHITE, 1)).toBe(TEST_COLORS.BLACK)
    })

    it('should not change black', () => {
      expect(darken(TEST_COLORS.BLACK, 0.5)).toBe(TEST_COLORS.BLACK)
    })
  })

  describe('mix', () => {
    it('should mix two colors', () => {
      expect(mix(TEST_COLORS.RED, TEST_COLORS.BLUE, 0.5)).toBe('#800080')
      expect(mix(TEST_COLORS.RED, TEST_COLORS.BLUE, 0)).toBe(TEST_COLORS.RED)
      expect(mix(TEST_COLORS.RED, TEST_COLORS.BLUE, 1)).toBe(TEST_COLORS.BLUE)
    })

    it('should clamp ratio', () => {
      expect(mix(TEST_COLORS.RED, TEST_COLORS.BLUE, 1.5)).toBe(TEST_COLORS.BLUE)
      expect(mix(TEST_COLORS.RED, TEST_COLORS.BLUE, -0.5)).toBe(TEST_COLORS.RED)
    })
  })

  describe('isValidHex', () => {
    it('should validate correct hex colors', () => {
      expect(isValidHex('#ff0000')).toBe(true)
      expect(isValidHex('ff0000')).toBe(true)
      expect(isValidHex('#f00')).toBe(true)
      expect(isValidHex('#ff0000ff')).toBe(true)
    })

    it('should reject invalid hex colors', () => {
      expect(isValidHex('invalid')).toBe(false)
      expect(isValidHex('#gg0000')).toBe(false)
      expect(isValidHex('#ff00')).toBe(false)
    })
  })
})
