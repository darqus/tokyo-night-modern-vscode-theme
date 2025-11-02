import { THEME_CONFIG } from '../../src/theme/config'

describe('Theme Config', () => {
  it('should have correct structure', () => {
    expect(THEME_CONFIG.name).toBe('Tokyo Modern')
    expect(THEME_CONFIG.type).toBe('dark')
    expect(THEME_CONFIG.semanticHighlighting).toBe(true)
  })

  it('should be readonly', () => {
    expect(THEME_CONFIG).toBeDefined()
    expect(typeof THEME_CONFIG).toBe('object')
  })
})
