import type { VSCodeTheme } from '../types'
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
  generateTerminalColors
} from './ui'

export function generateTheme(): VSCodeTheme {
  return {
    name: 'Tokyo Night',
    type: 'dark',
    semanticHighlighting: true,
    colors: {
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
    },
    tokenColors: [
      ...generateCommentTokens(),
      ...generateBasicTokens(),
      ...generateCodeTokens(),
      ...generateCssTokens(),
      ...generateMarkupTokens(),
      ...generateMarkdownTokens(),
      ...generateModernTokens(),
    ],
    semanticTokenColors: generateSemanticTokenColors(),
  }
}
