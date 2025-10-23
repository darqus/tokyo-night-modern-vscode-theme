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
  generateCoreColors,
  generateDiffColors,
  generateEditorColors,
  generateEnhancedTerminalColors,
  generateGitColors,
  generateInputColors,
  generateListColors,
  generateMiscColors,
  generatePanelColors,
  generateSidebarColors,
  generateTabColors,
  generateTerminalColors,
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

export function generateEnhancedTheme(): VSCodeTheme {
  return {
    name: 'Tokyo Night Enhanced',
    type: 'dark',
    semanticHighlighting: true,
    colors: {
      ...generateCoreColors(),
      ...generateButtonColors(),
      ...generateInputColors(),
      ...generateSidebarColors(),
      ...generateListColors(),
      ...generateEditorColors(),
      ...generateDiffColors(),
      ...generateTabColors(),
      ...generatePanelColors(),
      ...generateEnhancedTerminalColors(), // Используем улучшенные терминальные цвета
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
      ...generateModernTokens(), // Включаем современные токены
    ],
    semanticTokenColors: generateSemanticTokenColors(),
  }
}
