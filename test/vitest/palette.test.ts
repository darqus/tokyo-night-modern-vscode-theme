import { compatiblePalette } from '../../src/theme/palette/universal-generated'
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
      checkColors(compatiblePalette as unknown as Record<string, unknown>)
    } catch (error) {
      throw new Error(
        `Palette validation failed: ${error instanceof Error ? error.message : String(error)}`
      )
    }
  })

  it('should have all required color groups', () => {
    expect(compatiblePalette.bg).toBeDefined()
    expect(compatiblePalette.fg).toBeDefined()
    expect(compatiblePalette.blue).toBeDefined()
    expect(compatiblePalette.cyan).toBeDefined()
    expect(compatiblePalette.green).toBeDefined()
    expect(compatiblePalette.purple).toBeDefined()
    expect(compatiblePalette.red).toBeDefined()
    expect(compatiblePalette.yellow).toBeDefined()
    expect(compatiblePalette.ui).toBeDefined()
  })

  it('should have background variants', () => {
    expect(compatiblePalette.bg.dark).toBeDefined()
    expect(compatiblePalette.bg.main).toBeDefined()
    expect(compatiblePalette.bg.light).toBeDefined()
  })

  it('should have foreground variants', () => {
    expect(compatiblePalette.fg.dark).toBeDefined()
    expect(compatiblePalette.fg.main).toBeDefined()
    expect(compatiblePalette.fg.light).toBeDefined()
  })
})
