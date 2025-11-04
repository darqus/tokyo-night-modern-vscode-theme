import { describe, expect, it } from 'vitest'

describe('Index Files', () => {
  it('should import theme index', async () => {
    const themeIndex = await import('../../src/theme/index')
    expect(themeIndex).toBeDefined()
  })

  it('should import config index', async () => {
    const configIndex = await import('../../src/theme/config/index')
    expect(configIndex).toBeDefined()
  })

  it('should import tokens index', async () => {
    const tokensIndex = await import('../../src/theme/generator/tokens/index')
    expect(tokensIndex).toBeDefined()
  })

  it('should import ui index', async () => {
    const uiIndex = await import('../../src/theme/generator/ui/index')
    expect(uiIndex).toBeDefined()
  })

  it('should import palette index', async () => {
    const paletteIndex = await import('../../src/theme/palette/index')
    expect(paletteIndex).toBeDefined()
  })

  it('should import types index', async () => {
    const typesIndex = await import('../../src/theme/types/index')
    expect(typesIndex).toBeDefined()
  })

  it('should import utils index', async () => {
    const utilsIndex = await import('../../src/theme/utils/index')
    expect(utilsIndex).toBeDefined()
  })
})
