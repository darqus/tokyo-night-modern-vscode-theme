import { colors } from '../src/theme/ui'
import { tokenColors } from '../src/theme/tokens'

describe('Theme', () => {
  it('should match the snapshot', () => {
    const theme = {
      name: 'Tokyo Night Modern',
      type: 'dark',
      colors,
      tokenColors,
    }
    expect(theme).toMatchSnapshot()
  })
})
