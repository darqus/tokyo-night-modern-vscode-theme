import { adjustBrightness, darken, lighten, withAlpha } from '../generators'

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
})
