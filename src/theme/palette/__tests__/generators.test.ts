import {
  adjustBrightness,
  lighten,
  darken,
  withAlpha,
  getColorWithAlpha,
  createAlphaSystem,
} from '../generators'

describe('Generators', () => {
  describe('adjustBrightness', () => {
    test('should increase brightness when amount is positive', () => {
      const result = adjustBrightness('#10141a', 0.1)
      expect(result).toBe('#1a1f28') // Приблизительно светлее на 10%
    })

    test('should decrease brightness when amount is negative', () => {
      const result = adjustBrightness('#10141a', -0.1)
      expect(result).toBe('#060b10') // Приблизительно темнее на 10%
    })

    test('should not exceed brightness limits', () => {
      const veryBright = adjustBrightness('#ffffff', 0.5)
      expect(veryBright).toBe('#ffffff')

      const veryDark = adjustBrightness('#00000', -0.5)
      expect(veryDark).toBe('#000000')
    })
  })

  describe('lighten', () => {
    test('should make color lighter', () => {
      const result = lighten('#10141a', 0.1)
      expect(result).toBe('#1a1f28') // Приблизительно светлее на 10%
    })

    test('should handle zero amount', () => {
      const result = lighten('#10141a', 0)
      expect(result).toBe('#10141a')
    })
  })

  describe('darken', () => {
    test('should make color darker', () => {
      const result = darken('#10141a', 0.1)
      expect(result).toBe('#060b10') // Приблизительно темнее на 10%
    })

    test('should handle zero amount', () => {
      const result = darken('#10141a', 0)
      expect(result).toBe('#10141a')
    })
  })

  describe('withAlpha', () => {
    test('should add alpha channel to color', () => {
      const result = withAlpha('#10141a', 0.5)
      expect(result).toBe('#10141acc') // 50% прозрачности = 0xCC
    })

    test('should handle full opacity', () => {
      const result = withAlpha('#10141a', 1.0)
      expect(result).toBe('#10141aff')
    })

    test('should handle zero opacity', () => {
      const result = withAlpha('#10141a', 0)
      expect(result).toBe('#10141a00')
    })
  })

  describe('getColorWithAlpha', () => {
    test('should apply alpha value from alpha system', () => {
      const alphaSystem = createAlphaSystem()
      const result = getColorWithAlpha('#10141a', 'hover', alphaSystem)
      expect(result).toBe('#10141a66') // hover = '66'
    })

    test('should work with default alpha system', () => {
      const result = getColorWithAlpha('#10141a', 'subtle')
      expect(result).toBe('#10141a33') // subtle = '33'
    })
  })

  describe('createAlphaSystem', () => {
    test('should return correct alpha values', () => {
      const alphaSystem = createAlphaSystem()
      expect(alphaSystem.subtle).toBe('33') // 20%
      expect(alphaSystem.hover).toBe('66') // 40%
      expect(alphaSystem.active).toBe('99') // 60%
      expect(alphaSystem.semiOpaque).toBe('cc') // 80%
    })
  })
})
