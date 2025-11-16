import { universalPalette } from '../../src/theme/palette'
import { hexToRgb, normalizeHex, rgbToHex } from '../../src/theme/utils/rgb'

describe('RGB Utils', () => {
  describe('normalizeHex', () => {
    it('should normalize short hex format', () => {
      expect(normalizeHex('f00')).toBe('#ff0000')
      expect(normalizeHex('#f00')).toBe('#ff0000')
    })

    it('should normalize full hex format', () => {
      expect(normalizeHex('ff0000')).toBe('#ff0000')
      expect(normalizeHex('#FF0000')).toBe('#ff0000')
    })

    it('should convert to lowercase', () => {
      expect(normalizeHex('#ABCDEF')).toBe('#abcdef')
    })
  })

  describe('hexToRgb', () => {
    it('should convert hex to rgb', () => {
      expect(hexToRgb(universalPalette.chromatic.red.main)).toEqual({
        r: 255,
        g: 107,
        b: 107,
      })
      expect(hexToRgb(universalPalette.chromatic.green.main)).toEqual({
        r: 152,
        g: 195,
        b: 121,
      })
      expect(hexToRgb(universalPalette.chromatic.blue.main)).toEqual({
        r: 74,
        g: 170,
        b: 248,
      })
    })

    it('should handle short hex format', () => {
      expect(hexToRgb('#f00')).toEqual({ r: 255, g: 0, b: 0 })
    })

    it('should handle hex without hash', () => {
      expect(hexToRgb('ff0000')).toEqual({ r: 255, g: 0, b: 0 })
    })
  })

  describe('rgbToHex', () => {
    it('should convert rgb to hex', () => {
      expect(rgbToHex(255, 107, 107)).toBe(universalPalette.chromatic.red.main)
      expect(rgbToHex(152, 195, 121)).toBe(
        universalPalette.chromatic.green.main
      )
      expect(rgbToHex(74, 170, 248)).toBe(universalPalette.chromatic.blue.main)
    })

    it('should clamp values', () => {
      expect(rgbToHex(300, -10, 128)).toBe('#ff0080')
    })

    it('should pad single digits', () => {
      expect(rgbToHex(1, 2, 3)).toBe('#010203')
    })
  })
})
