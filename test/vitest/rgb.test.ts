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
      expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 })
      expect(hexToRgb('#00ff00')).toEqual({ r: 0, g: 255, b: 0 })
      expect(hexToRgb('#0000ff')).toEqual({ r: 0, g: 0, b: 255 })
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
      expect(rgbToHex(255, 0, 0)).toBe('#ff0000')
      expect(rgbToHex(0, 255, 0)).toBe('#00ff00')
      expect(rgbToHex(0, 0, 255)).toBe('#0000ff')
    })

    it('should clamp values', () => {
      expect(rgbToHex(300, -10, 128)).toBe('#ff0080')
    })

    it('should pad single digits', () => {
      expect(rgbToHex(1, 2, 3)).toBe('#010203')
    })
  })
})
