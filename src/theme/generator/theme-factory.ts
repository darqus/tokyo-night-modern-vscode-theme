import type { Palette, VSCodeTheme } from '../types'
import { generateSemanticTokenColors } from './semantic'
import {
  generateBasicTokens,
  generateCodeTokens,
  generateCommentTokens,
  generateCssTokens,
  generateMarkdownTokens,
  generateMarkupTokens,
  generateModernTokens,
} from './tokens'
import {
  generateButtonColors,
  generateCheckboxColors,
  generateCoreColors,
  generateDiffColors,
  generateEditorColors,
  generateGitColors,
  generateInputColors,
  generateListColors,
  generateMiscColors,
  generatePanelColors,
  generateSidebarColors,
  generateTabColors,
  generateTerminalColors,
} from './ui'

/**
 * Фабрика для генерации тем из произвольной палитры
 */
export class ThemeFactory {
  constructor(private palette: Palette) {}

  generateTheme(name = 'Tokyo Night'): VSCodeTheme {
    return {
      name,
      type: 'dark',
      semanticHighlighting: true,
      colors: this.generateColors(),
      tokenColors: this.generateTokenColors(),
      semanticTokenColors: generateSemanticTokenColors(),
    }
  }

  private generateColors(): Record<string, string> {
    return {
      ...generateCoreColors(),
      ...generateButtonColors(),
      ...generateInputColors(),
      ...generateCheckboxColors(),
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
  }

  private generateTokenColors() {
    return [
      ...generateCommentTokens(),
      ...generateBasicTokens(),
      ...generateCodeTokens(),
      ...generateCssTokens(),
      ...generateMarkupTokens(),
      ...generateMarkdownTokens(),
      ...generateModernTokens(),
    ]
  }
}

/**
 * Универсальная функция генерации темы из палитры
 */
export const generateThemeFromPalette = (
  palette: Palette,
  name?: string
): VSCodeTheme => {
  const factory = new ThemeFactory(palette)
  return factory.generateTheme(name)
}
