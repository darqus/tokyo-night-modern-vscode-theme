import { baseColors } from '../../src/theme/palette/config/base-colors'
import { isValidHex } from '../../src/theme/utils/color'
import {
  generateBackgroundScale,
  generateColorVariants,
  generateForegroundScale,
} from '../../src/theme/utils/color-generator'

describe('Color Generator', () => {
  describe('generateBackgroundScale', () => {
    it('should generate background scale', () => {
      const scale = generateBackgroundScale(
        baseColors.background.base
      ) as Record<string, string>

      expect(scale.darkest).toBeDefined()
      expect(scale.main).toBe(baseColors.background.base)
      expect(scale.lightest).toBeDefined()
    })

    it('should generate valid hex colors', () => {
      const scale = generateBackgroundScale(
        baseColors.background.base
      ) as Record<string, string>

      for (const value of Object.values(scale)) {
        expect(isValidHex(value)).toBe(true)
      }
    })
  })

  describe('generateForegroundScale', () => {
    it('should generate foreground scale', () => {
      const scale = generateForegroundScale(
        baseColors.foreground.secondary
      ) as Record<string, string>

      expect(scale.dim).toBeDefined()
      expect(scale.medium).toBe(baseColors.foreground.secondary)
      expect(scale.brightest).toBeDefined()
    })

    it('should generate valid hex colors', () => {
      const scale = generateForegroundScale(
        baseColors.foreground.secondary
      ) as Record<string, string>

      for (const value of Object.values(scale)) {
        expect(isValidHex(value)).toBe(true)
      }
    })
  })

  describe('generateColorVariants', () => {
    it('should generate color variants', () => {
      const variants = generateColorVariants(
        baseColors.chromaMain.blue
      ) as Record<string, string>

      expect(variants.dark).toBeDefined()
      expect(variants.main).toBe(baseColors.chromaMain.blue)
      expect(variants.bright).toBeDefined()
    })

    it('should generate valid hex colors', () => {
      const variants = generateColorVariants(
        baseColors.chromaMain.blue
      ) as Record<string, string>

      for (const value of Object.values(variants)) {
        expect(isValidHex(value)).toBe(true)
      }
    })
  })
})
