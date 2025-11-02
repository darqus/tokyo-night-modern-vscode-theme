import {
  areColorsSimilar,
  checkContrast,
  getColorDistance,
  getContrastRatio,
  getLuminance,
  meetsWCAG,
} from '../../src/theme/utils/contrast'

describe('Contrast Utils', () => {
  describe('getLuminance', () => {
    it('should calculate luminance', () => {
      expect(getLuminance('#ffffff')).toBeCloseTo(1, 2)
      expect(getLuminance('#000000')).toBeCloseTo(0, 2)
      expect(getLuminance('#808080')).toBeCloseTo(0.22, 2)
    })
  })

  describe('getContrastRatio', () => {
    it('should calculate contrast ratio', () => {
      expect(getContrastRatio('#ffffff', '#000000')).toBeCloseTo(21, 0)
      expect(getContrastRatio('#ffffff', '#ffffff')).toBeCloseTo(1, 0)
    })
  })

  describe('meetsWCAG', () => {
    it('should check AA compliance', () => {
      expect(meetsWCAG('#ffffff', '#000000', 'AA')).toBe(true)
      expect(meetsWCAG('#ffffff', '#ffffff', 'AA')).toBe(false)
    })

    it('should check AAA compliance', () => {
      expect(meetsWCAG('#ffffff', '#000000', 'AAA')).toBe(true)
      expect(meetsWCAG('#ffffff', '#767676', 'AAA')).toBe(false)
    })
  })

  describe('checkContrast', () => {
    it('should return contrast info', () => {
      const result = checkContrast('#ffffff', '#000000')
      expect(result.ratio).toBeCloseTo(21, 0)
      expect(result.aa).toBe(true)
      expect(result.aaa).toBe(true)
    })
  })

  describe('getColorDistance', () => {
    it('should calculate color distance', () => {
      expect(getColorDistance('#000000', '#000000')).toBe(0)
      expect(getColorDistance('#ff0000', '#00ff00')).toBeCloseTo(360.62, 1)
    })
  })

  describe('areColorsSimilar', () => {
    it('should detect similar colors', () => {
      expect(areColorsSimilar('#ff0000', '#ff0001', 50)).toBe(true)
      expect(areColorsSimilar('#ff0000', '#00ff00', 50)).toBe(false)
    })
  })
})
