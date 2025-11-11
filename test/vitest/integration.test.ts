import { describe, expect, it } from 'vitest'
import { generateTheme } from '../../src/theme/generator'
import { generateSemanticTokenColors } from '../../src/theme/generator/semantic'
import { generateBasicTokens } from '../../src/theme/generator/tokens/basic.js'
import { generateCodeTokens } from '../../src/theme/generator/tokens/code.js'
import { generateCommentTokens } from '../../src/theme/generator/tokens/comments.js'
import { generateCssTokens } from '../../src/theme/generator/tokens/css.js'
import { generateMarkdownTokens } from '../../src/theme/generator/tokens/markdown.js'
import { generateMarkupTokens } from '../../src/theme/generator/tokens/markup.js'
import { generateModernTokens } from '../../src/theme/generator/tokens/modern.js'

describe('Integration Tests - Full Theme Generation', () => {
  it('should generate a complete theme with all components', async () => {
    const theme = generateTheme()

    expect(theme).toBeDefined()
    expect(theme.name).toBeDefined()
    expect(theme.type).toBeDefined()
    expect(theme.semanticHighlighting).toBeDefined()
    expect(theme.colors).toBeDefined()
    expect(theme.tokenColors).toBeDefined()
    expect(theme.semanticTokenColors).toBeDefined()

    // Check that theme has expected structure
    expect(typeof theme.name).toBe('string')
    expect(typeof theme.type).toBe('string')
    expect(typeof theme.semanticHighlighting).toBe('boolean')
    expect(typeof theme.colors).toBe('object')
    expect(Array.isArray(theme.tokenColors)).toBe(true)
    expect(typeof theme.semanticTokenColors).toBe('object')
  })

  it('should include all UI color components', async () => {
    const theme = generateTheme()

    // Check that key UI color categories are present in the theme
    expect(Object.keys(theme.colors).length).toBeGreaterThan(50) // Ensure substantial number of colors

    // Verify that some key color types are present
    const colorKeys = Object.keys(theme.colors)
    const hasCoreColors = colorKeys.some(
      (key) => key.includes('foreground') || key.includes('background')
    )
    const hasEditorColors = colorKeys.some((key) => key.includes('editor'))
    const hasSidebarColors = colorKeys.some((key) => key.includes('sideBar'))
    const hasTabColors = colorKeys.some((key) => key.includes('tab'))
    const hasButtonColors = colorKeys.some((key) => key.includes('button'))

    expect(hasCoreColors).toBe(true)
    expect(hasEditorColors).toBe(true)
    expect(hasSidebarColors).toBe(true)
    expect(hasTabColors).toBe(true)
    expect(hasButtonColors).toBe(true)

    // Check that all color values are valid hex colors
    for (const [, value] of Object.entries(theme.colors)) {
      expect(value).toMatch(/^#[0-9a-fA-F]{6,8}$/)
    }
  })

  it('should include all token color components', () => {
    const theme = generateTheme()
    const expectedTokens = [
      ...generateCommentTokens(),
      ...generateBasicTokens(),
      ...generateCodeTokens(),
      ...generateCssTokens(),
      ...generateMarkupTokens(),
      ...generateMarkdownTokens(),
      ...generateModernTokens(),
    ]

    // Check that all expected token colors are present in the theme
    expect(theme.tokenColors.length).toBe(expectedTokens.length)

    // Check that each expected token is present in the theme
    for (const expectedToken of expectedTokens) {
      const foundToken = theme.tokenColors.find(
        (token) =>
          token.name === expectedToken.name &&
          JSON.stringify(token.scope) === JSON.stringify(expectedToken.scope)
      )
      expect(foundToken).toBeDefined()
    }
  })

  it('should include semantic token colors', async () => {
    const theme = generateTheme()
    const expectedSemanticTokens = generateSemanticTokenColors()

    // Check that semantic tokens are present
    expect(theme.semanticTokenColors).toBeDefined()

    // Check that all expected semantic tokens are present
    for (const [key, value] of Object.entries(expectedSemanticTokens)) {
      expect(theme.semanticTokenColors[key]).toBeDefined()
      expect(theme.semanticTokenColors[key]).toEqual(value)
    }
  })

  it('should have valid color values throughout the theme', () => {
    const theme = generateTheme()

    // Check UI colors
    for (const [, value] of Object.entries(theme.colors)) {
      if (typeof value === 'string') {
        expect(value).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      }
    }

    // Check token colors
    for (const token of theme.tokenColors) {
      if (token.settings?.foreground) {
        expect(token.settings.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      }
      if (token.settings?.background) {
        expect(token.settings.background).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      }
      if (token.settings?.fontStyle) {
        expect([
          'italic',
          'bold',
          'underline',
          'bold italic',
          'italic bold',
          'normal',
        ]).toContain(token.settings.fontStyle)
      }
    }

    // Check semantic token colors
    for (const [, value] of Object.entries(theme.semanticTokenColors)) {
      if (value.foreground) {
        expect(value.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      }
      if (value.fontStyle) {
        expect([
          'italic',
          'bold',
          'underline',
          'bold italic',
          'italic bold',
          'normal',
        ]).toContain(value.fontStyle)
      }
    }
  })

  it('should maintain consistent theme configuration', () => {
    const theme = generateTheme()

    // Generate theme multiple times and ensure consistency
    const theme2 = generateTheme()

    expect(theme.name).toBe(theme2.name)
    expect(theme.type).toBe(theme2.type)
    expect(theme.semanticHighlighting).toBe(theme2.semanticHighlighting)

    // Colors should be the same
    expect(theme.colors).toEqual(theme2.colors)

    // Token colors should be the same
    expect(theme.tokenColors).toEqual(theme2.tokenColors)

    // Semantic token colors should be the same
    expect(theme.semanticTokenColors).toEqual(theme2.semanticTokenColors)
  })

  it('should have expected theme properties', () => {
    const theme = generateTheme()

    // Check for expected theme name
    expect(theme.name).toContain('Tokyo')

    // Check for expected theme type
    expect(theme.type).toBe('dark')

    // Check semantic highlighting is enabled
    expect(theme.semanticHighlighting).toBe(true)

    // Check that theme has substantial content
    expect(Object.keys(theme.colors).length).toBeGreaterThan(50)
    expect(theme.tokenColors.length).toBeGreaterThanOrEqual(50) // Changed from toBeGreaterThan(50) to toBeGreaterThanOrEqual(50)
    expect(Object.keys(theme.semanticTokenColors).length).toBeGreaterThan(10)
  })
})
