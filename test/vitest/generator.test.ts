import { generateTheme } from '../../src/theme/generator'
import { isValidHex } from '../../src/theme/utils/color'

describe('Theme Generator', () => {
  let theme: any

  beforeAll(() => {
    theme = generateTheme()
  })

  it('should generate valid theme structure', () => {
    expect(theme).toBeDefined()
    expect(theme.name).toBe('Tokyo Night')
    expect(theme.type).toBe('dark')
    expect(theme.colors).toBeDefined()
    expect(theme.tokenColors).toBeDefined()
  })

  it('should have all required color keys', () => {
    expect(theme.colors.foreground).toBeDefined()
    expect(theme.colors['editor.background']).toBeDefined()
    expect(theme.colors['editor.foreground']).toBeDefined()
  })

  it('should generate valid hex colors', () => {
    for (const [key, value] of Object.entries(theme.colors)) {
      if (typeof value === 'string') {
        expect(isValidHex(value), `Invalid color at ${key}: ${value}`).toBe(true)
      }
    }
  })

  it('should have token colors array', () => {
    expect(Array.isArray(theme.tokenColors)).toBe(true)
    expect(theme.tokenColors.length).toBeGreaterThan(0)
  })

  it('should have valid token color structure', () => {
    const token = theme.tokenColors[0]
    expect(token).toHaveProperty('scope')
    expect(token).toHaveProperty('settings')
  })
})
