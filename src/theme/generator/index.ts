import { THEME_CONFIG } from '../config'
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
  generateTerminalColors,
} from './ui'

/**
 * Generates complete VS Code Tokyo Night theme
 *
 * Combines all theme components:
 * - UI colors (buttons, panels, editor, etc.)
 * - Syntax highlighting tokens (TextMate)
 * - Semantic tokens for semantic highlighting
 *
 * @returns Complete VS Code theme structure
 *
 * @example
 * ```ts
 * const theme = generateTheme()
 * // theme contains all colors and highlighting rules
 * ```
 */
export function generateTheme(): VSCodeTheme {
  return {
    name: THEME_CONFIG.name,
    type: THEME_CONFIG.type,
    semanticHighlighting: THEME_CONFIG.semanticHighlighting,
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
