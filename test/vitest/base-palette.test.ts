import { universalBasePalette } from '../../src/theme/palette/universal-base'
import { isValidHex } from '../../src/theme/utils/color'

describe('Base Palette', () => {
  it('should have all required colors', () => {
    expect(universalBasePalette.background).toBeDefined()
    expect(universalBasePalette.foreground).toBeDefined()
    expect(universalBasePalette.chromatic.blue).toBeDefined()
    expect(universalBasePalette.chromatic.cyan).toBeDefined()
    expect(universalBasePalette.chromatic.green).toBeDefined()
    expect(universalBasePalette.chromatic.purple).toBeDefined()
    expect(universalBasePalette.chromatic.red).toBeDefined()
    expect(universalBasePalette.chromatic.yellow).toBeDefined()
  })

  it('should have valid hex colors', () => {
    for (const [key, colorVariant] of Object.entries(universalBasePalette)) {
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
