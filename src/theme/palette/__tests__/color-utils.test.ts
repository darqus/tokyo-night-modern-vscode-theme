import {
  getContrastRatio,
  meetsWCAGContrast,
  isLightColor,
  isDarkColor,
  normalizeHexColor,
} from '../color-utils'

describe('Color Utils', () => {
  describe('getContrastRatio', () => {
    test('should calculate correct contrast ratio', () => {
      // Белый и черный должны иметь соотношение 21:1
      expect(getContrastRatio('#ffffff', '#000')).toBe(21)
      expect(getContrastRatio('#000000', '#ffffff')).toBe(21)
    })

    test('should calculate contrast for similar colors', () => {
      // Схожие цвета должны иметь низкое соотношение
      expect(getContrastRatio('#10141a', '#151a24')).toBeCloseTo(1.45, 2)
    })

    test('should calculate contrast for different colors', () => {
      // Разные цвета с хорошим контрастом
      expect(getContrastRatio('#7ab4e6', '#000000')).toBeCloseTo(4.86, 2)
    })
  })

  describe('meetsWCAGContrast', () => {
    test('should return true for sufficient AA contrast', () => {
      expect(meetsWCAGContrast('#ffffff', '#000000', 'AA')).toBe(true)
      expect(meetsWCAGContrast('#7ab4e6', '#000000', 'AA')).toBe(true)
    })

    test('should return false for insufficient AA contrast', () => {
      expect(meetsWCAGContrast('#10141a', '#151a24', 'AA')).toBe(false)
    })

    test('should return true for sufficient AAA contrast', () => {
      expect(meetsWCAGContrast('#ffffff', '#0000', 'AAA')).toBe(true)
    })

    test('should return false for insufficient AAA contrast', () => {
      expect(meetsWCAGContrast('#7ab4e6', '#000000', 'AAA')).toBe(false)
    })
  })

  describe('isLightColor and isDarkColor', () => {
    test('should correctly identify light colors', () => {
      expect(isLightColor('#ffffff')).toBe(true)
      expect(isLightColor('#cccccc')).toBe(true)
      expect(isLightColor('#eeeeee')).toBe(true)
    })

    test('should correctly identify dark colors', () => {
      expect(isDarkColor('#00000')).toBe(true)
      expect(isDarkColor('#10141a')).toBe(true)
      expect(isDarkColor('#333333')).toBe(true)
    })

    test('isLightColor and isDarkColor should be opposites', () => {
      const testColors = ['#000000', '#10141a', '#7ab4e6', '#ffffff', '#999999']
      testColors.forEach((color) => {
        expect(isLightColor(color)).toBe(!isDarkColor(color))
      })
    })
  })

  describe('normalizeHexColor', () => {
    test('should normalize short hex format', () => {
      expect(normalizeHexColor('#fff')).toBe('#ffffff')
      expect(normalizeHexColor('#000')).toBe('#0000')
      expect(normalizeHexColor('#abc')).toBe('#aabbcc')
    })

    test('should handle full hex format', () => {
      expect(normalizeHexColor('#10141a')).toBe('#10141a')
      expect(normalizeHexColor('#7ab4e6')).toBe('#7ab4e6')
    })

    test('should handle hex without # prefix', () => {
      expect(normalizeHexColor('fff')).toBe('#ffffff')
      expect(normalizeHexColor('10141a')).toBe('#10141a')
    })

    test('should handle different cases', () => {
      expect(normalizeHexColor('#FFF')).toBe('#ffffff')
      expect(normalizeHexColor('#AbC123')).toBe('#abc123')
    })

    test('should throw error for invalid hex', () => {
      expect(() => normalizeHexColor('#ggg')).toThrow()
      expect(() => normalizeHexColor('#12345')).toThrow()
      expect(() => normalizeHexColor('#1234567')).toThrow()
      expect(() => normalizeHexColor('')).toThrow()
    })
  })
})
