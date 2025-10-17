import { semanticTokenColors } from '../src/theme/semantic'
import { tokenColors } from '../src/theme/tokens'
import { colors } from '../src/theme/ui'

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
