import { palette } from '../../src/theme/palette/generated'
import { isValidHex } from '../../src/theme/utils/color'

describe('Palette Generation', () => {
  it('should generate valid hex colors', () => {
    const checkColors = (obj: Record<string, unknown>, path = ''): void => {
      for (const [key, value] of Object.entries(obj)) {
        const currentPath = path ? `${path}.${key}` : key
        if (typeof value === 'string') {
          expect(
            isValidHex(value),
            `Invalid color at ${currentPath}: ${value}`
          ).toBe(true)
        } else if (typeof value === 'object' && value !== null) {
          checkColors(value as Record<string, unknown>, currentPath)
        }
      }
    }

    checkColors(palette as unknown as Record<string, unknown>)
  })

  it('should have all required color groups', () => {
    expect(palette.bg).toBeDefined()
    expect(palette.fg).toBeDefined()
    expect(palette.blue).toBeDefined()
    expect(palette.cyan).toBeDefined()
    expect(palette.green).toBeDefined()
    expect(palette.purple).toBeDefined()
    expect(palette.red).toBeDefined()
    expect(palette.yellow).toBeDefined()
    expect(palette.special).toBeDefined()
    expect(palette.ui).toBeDefined()
  })

  it('should have background variants', () => {
    expect(palette.bg.darkest).toBeDefined()
    expect(palette.bg.main).toBeDefined()
    expect(palette.bg.lightest).toBeDefined()
  })

  it('should have foreground variants', () => {
    expect(palette.fg.dim).toBeDefined()
    expect(palette.fg.medium).toBeDefined()
    expect(palette.fg.brightest).toBeDefined()
  })
})
