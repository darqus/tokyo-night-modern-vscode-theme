import {
  alpha,
  darken,
  isValidHex,
  lighten,
  mix,
} from '../../src/theme/utils/color'

describe('Color Utils', () => {
  describe('alpha', () => {
    it('should add alpha channel', () => {
      expect(alpha('#ff0000', 0.5)).toBe('#ff000080')
      expect(alpha('#ff0000', 1)).toBe('#ff0000ff')
      expect(alpha('#ff0000', 0)).toBe('#ff000000')
    })

    it('should clamp opacity values', () => {
      expect(alpha('#ff0000', 1.5)).toBe('#ff0000ff')
      expect(alpha('#ff0000', -0.5)).toBe('#ff000000')
    })
  })

  describe('lighten', () => {
    it('should lighten color', () => {
      expect(lighten('#000000', 0.5)).toBe('#808080')
      expect(lighten('#000000', 1)).toBe('#ffffff')
    })

    it('should not change white', () => {
      expect(lighten('#ffffff', 0.5)).toBe('#ffffff')
    })
  })

  describe('darken', () => {
    it('should darken color', () => {
      expect(darken('#ffffff', 0.5)).toBe('#808080')
      expect(darken('#ffffff', 1)).toBe('#000000')
    })

    it('should not change black', () => {
      expect(darken('#000000', 0.5)).toBe('#000000')
    })
  })

  describe('mix', () => {
    it('should mix two colors', () => {
      expect(mix('#ff0000', '#0000ff', 0.5)).toBe('#800080')
      expect(mix('#ff0000', '#0000ff', 0)).toBe('#ff0000')
      expect(mix('#ff0000', '#0000ff', 1)).toBe('#0000ff')
    })

    it('should clamp ratio', () => {
      expect(mix('#ff0000', '#0000ff', 1.5)).toBe('#0000ff')
      expect(mix('#ff0000', '#0000ff', -0.5)).toBe('#ff0000')
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
