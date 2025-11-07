import { universalPalette } from '../../src/theme/palette/universal-generated'
import { isValidHex } from '../../src/theme/utils/color'

describe('Palette Generation', () => {
  it('should generate valid hex colors', () => {
    const checkColors = (obj: Record<string, unknown>, path = ''): void => {
      for (const [key, value] of Object.entries(obj)) {
        const currentPath = path ? `${path}.${key}` : key
        if (typeof value === 'string') {
          try {
            expect(
              isValidHex(value),
              `Invalid color at ${currentPath}: ${value}`
            ).toBe(true)
          } catch (error) {
            throw new Error(
              `Failed to validate color at ${currentPath}: ${value} - ${error instanceof Error ? error.message : String(error)}`
            )
          }
        } else if (typeof value === 'object' && value !== null) {
          checkColors(value as Record<string, unknown>, currentPath)
        }
      }
    }

    try {
      checkColors(universalPalette as unknown as Record<string, unknown>)
    } catch (error) {
      throw new Error(
        `Palette validation failed: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  })

  it('should have all required color groups', () => {
    expect(universalPalette.background).toBeDefined()
    expect(universalPalette.foreground).toBeDefined()
    expect(universalPalette.chromatic.blue).toBeDefined()
    expect(universalPalette.chromatic.cyan).toBeDefined()
    expect(universalPalette.chromatic.green).toBeDefined()
    expect(universalPalette.chromatic.purple).toBeDefined()
    expect(universalPalette.chromatic.red).toBeDefined()
    expect(universalPalette.chromatic.yellow).toBeDefined()
    expect(universalPalette.ui).toBeDefined()
  })

  it('should have background variants', () => {
    expect(universalPalette.background.base.dark).toBeDefined()
    expect(universalPalette.background.base.main).toBeDefined()
    expect(universalPalette.background.base.light).toBeDefined()
  })

  it('should have foreground variants', () => {
    expect(universalPalette.foreground.primary.dark).toBeDefined()
    expect(universalPalette.foreground.primary.main).toBeDefined()
    expect(universalPalette.foreground.primary.light).toBeDefined()
  })
})
