import fs from 'fs'
import path from 'path'

describe('Theme generator output', () => {
  it('should generate a file identical to the original', () => {
    const generated = fs.readFileSync(
      path.join(__dirname, '../themes/tokyo-night-modern-color-theme.json'),
      'utf8'
    )
    const original = fs.readFileSync(
      path.join(__dirname, '../themes/tokyo-night-modern-color-theme.json'),
      'utf8'
    )
    expect(generated).toBe(original)
  })
})
