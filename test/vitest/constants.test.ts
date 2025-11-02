import { COLOR_MIXES } from '../../src/theme/palette/constants'

describe('Palette Constants', () => {
  it('should have all COLOR_MIXES defined', () => {
    expect(COLOR_MIXES).toBeDefined()
    expect(Object.keys(COLOR_MIXES).length).toBeGreaterThan(0)
  })

  it('should have values between 0 and 1', () => {
    for (const [key, value] of Object.entries(COLOR_MIXES)) {
      expect(value, `${key} should be between 0 and 1`).toBeGreaterThanOrEqual(
        0
      )
      expect(value, `${key} should be between 0 and 1`).toBeLessThanOrEqual(1)
    }
  })
})
