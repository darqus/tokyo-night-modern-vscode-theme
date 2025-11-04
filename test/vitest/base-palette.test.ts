import { basePalette } from '../../src/theme/palette/base'
import { isValidHex } from '../../src/theme/utils/color'

describe('Base Palette', () => {
  it('should have all required colors', () => {
    expect(basePalette.background).toBeDefined()
    expect(basePalette.foreground).toBeDefined()
    expect(basePalette.blue).toBeDefined()
    expect(basePalette.cyan).toBeDefined()
    expect(basePalette.green).toBeDefined()
    expect(basePalette.purple).toBeDefined()
    expect(basePalette.red).toBeDefined()
    expect(basePalette.yellow).toBeDefined()
  })

  it('should have valid hex colors', () => {
    for (const [key, colorVariant] of Object.entries(basePalette)) {
      if (typeof colorVariant === 'object' && colorVariant !== null) {
        for (const [variantKey, value] of Object.entries(colorVariant)) {
          if (value && typeof value === 'string') {
            expect(
              isValidHex(value),
              `Invalid color at ${key}.${variantKey}: ${value}`
            ).toBe(true)
          }
        }
      }
    }
  })
})
