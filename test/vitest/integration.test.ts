import { describe, expect, it } from 'vitest'
import { generateTheme } from '../../src/theme/generator'
import { generateSemanticTokenColors } from '../../src/theme/generator/semantic'
import { generateBasicTokens } from '../../src/theme/generator/tokens/basic'
import { generateCodeTokens } from '../../src/theme/generator/tokens/code'
import { generateCommentTokens } from '../../src/theme/generator/tokens/comments'
import { generateCssTokens } from '../../src/theme/generator/tokens/css'
import { generateMarkdownTokens } from '../../src/theme/generator/tokens/markdown'
import { generateMarkupTokens } from '../../src/theme/generator/tokens/markup'
import { generateModernTokens } from '../../src/theme/generator/tokens/modern'
import { generateButtonColors } from '../../src/theme/generator/ui/buttons'
import { generateCoreColors } from '../../src/theme/generator/ui/core'
import { generateDiffColors } from '../../src/theme/generator/ui/diff'
import { generateEditorColors } from '../../src/theme/generator/ui/editor'
import { generateGitColors } from '../../src/theme/generator/ui/git'
import { generateInputColors } from '../../src/theme/generator/ui/inputs'
import { generateListColors } from '../../src/theme/generator/ui/lists'
import { generateMiscColors } from '../../src/theme/generator/ui/misc'
import { generatePanelColors } from '../../src/theme/generator/ui/panels'
import { generateSidebarColors } from '../../src/theme/generator/ui/sidebar'
import { generateTabColors } from '../../src/theme/generator/ui/tabs'
import { generateTerminalColors } from '../../src/theme/generator/ui/terminal'

describe('Integration Tests - Full Theme Generation', () => {
  it('should generate a complete theme with all components', async () => {
    const theme = await generateTheme()

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
    const theme = await generateTheme()
    const expectedColors = {
      ...generateCoreColors(),
      ...generateButtonColors(),
      ...generateInputColors(),
      ...generateSidebarColors(),
      ...generateListColors(),
      ...generateEditorColors(),
      ...generateDiffColors(),
      ...generateTabColors(),
      ...generatePanelColors(),
      ...generateTerminalColors(),
      ...generateGitColors(),
      ...generateMiscColors(),
    }

    // Check that all expected UI colors are present in the theme
    for (const [key, value] of Object.entries(expectedColors)) {
      expect(theme.colors[key]).toBeDefined()
      expect(theme.colors[key]).toBe(value)
    }
  })

  it('should include all token color components', async () => {
    const theme = await generateTheme()
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
    const theme = await generateTheme()
    const expectedSemanticTokens = generateSemanticTokenColors()

    // Check that semantic tokens are present
    expect(theme.semanticTokenColors).toBeDefined()

    // Check that all expected semantic tokens are present
    for (const [key, value] of Object.entries(expectedSemanticTokens)) {
      expect(theme.semanticTokenColors[key]).toBeDefined()
      expect(theme.semanticTokenColors[key]).toEqual(value)
    }
  })

  it('should have valid color values throughout the theme', async () => {
    const theme = await generateTheme()

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

  it('should maintain consistent theme configuration', async () => {
    const theme = await generateTheme()

    // Generate theme multiple times and ensure consistency
    const theme2 = await generateTheme()

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

  it('should have expected theme properties', async () => {
    const theme = await generateTheme()

    // Check for expected theme name
    expect(theme.name).toContain('Tokyo')

    // Check for expected theme type
    expect(theme.type).toBe('dark')

    // Check semantic highlighting is enabled
    expect(theme.semanticHighlighting).toBe(true)

    // Check that theme has substantial content
    expect(Object.keys(theme.colors).length).toBeGreaterThan(50)
    expect(theme.tokenColors.length).toBeGreaterThan(50)
    expect(Object.keys(theme.semanticTokenColors).length).toBeGreaterThan(10)
  })
})
