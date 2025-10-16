import { colors } from '../src/theme/ui'
import { tokenColors } from '../src/theme/tokens'
import { semanticTokenColors } from '../src/theme/semantic'

describe('Theme', () => {
  it('should match the snapshot', () => {
    const theme = {
      name: 'Tokyo Night Modern',
      type: 'dark',
      semanticHighlighting: true,
      colors,
      tokenColors,
      semanticTokenColors,
    }
    expect(theme).toMatchSnapshot()
  })
})
