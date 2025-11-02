import { isValidHex } from '../../src/theme/utils/color'
import {
  generateBackgroundScale,
  generateColorVariants,
  generateForegroundScale,
} from '../../src/theme/utils/color-generator'

describe('Color Generator', () => {
  describe('generateBackgroundScale', () => {
    it('should generate background scale', () => {
      const scale = generateBackgroundScale('#1a1b26')

      expect(scale.darkest).toBeDefined()
      expect(scale.main).toBe('#1a1b26')
      expect(scale.lightest).toBeDefined()
    })

    it('should generate valid hex colors', () => {
      const scale = generateBackgroundScale('#1a1b26')

      for (const value of Object.values(scale)) {
        expect(isValidHex(value)).toBe(true)
      }
    })
  })

  describe('generateForegroundScale', () => {
    it('should generate foreground scale', () => {
      const scale = generateForegroundScale('#a9b1d6')

      expect(scale.dim).toBeDefined()
      expect(scale.medium).toBe('#a9b1d6')
      expect(scale.brightest).toBeDefined()
    })

    it('should generate valid hex colors', () => {
      const scale = generateForegroundScale('#a9b1d6')

      for (const value of Object.values(scale)) {
        expect(isValidHex(value)).toBe(true)
      }
    })
  })

  describe('generateColorVariants', () => {
    it('should generate color variants', () => {
      const variants = generateColorVariants('#7aa2f7')

      expect(variants.dark).toBeDefined()
      expect(variants.main).toBe('#7aa2f7')
      expect(variants.bright).toBeDefined()
    })

    it('should generate valid hex colors', () => {
      const variants = generateColorVariants('#7aa2f7')

      for (const value of Object.values(variants)) {
        expect(isValidHex(value)).toBe(true)
      }
    })
  })
})
