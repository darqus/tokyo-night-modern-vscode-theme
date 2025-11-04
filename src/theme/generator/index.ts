import { THEME_CONFIG } from '../config'
import type { VSCodeTheme } from '../types'
import { withConcurrencyLimit } from '../utils/parallel-utils'
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
export async function generateTheme(): Promise<VSCodeTheme> {
  // Generate UI colors in parallel
  const [
    coreColors,
    buttonColors,
    inputColors,
    checkboxColors,
    sidebarColors,
    listColors,
    editorColors,
    diffColors,
    tabColors,
    panelColors,
    terminalColors,
    gitColors,
    miscColors,
  ] = await withConcurrencyLimit([
    () => Promise.resolve(generateCoreColors()),
    () => Promise.resolve(generateButtonColors()),
    () => Promise.resolve(generateInputColors()),
    () => Promise.resolve(generateCheckboxColors()),
    () => Promise.resolve(generateSidebarColors()),
    () => Promise.resolve(generateListColors()),
    () => Promise.resolve(generateEditorColors()),
    () => Promise.resolve(generateDiffColors()),
    () => Promise.resolve(generateTabColors()),
    () => Promise.resolve(generatePanelColors()),
    () => Promise.resolve(generateTerminalColors()),
    () => Promise.resolve(generateGitColors()),
    () => Promise.resolve(generateMiscColors()),
  ])

  // Generate token colors in parallel
  const [
    commentTokens,
    basicTokens,
    codeTokens,
    cssTokens,
    markupTokens,
    markdownTokens,
    modernTokens,
  ] = await withConcurrencyLimit([
    () => Promise.resolve(generateCommentTokens()),
    () => Promise.resolve(generateBasicTokens()),
    () => Promise.resolve(generateCodeTokens()),
    () => Promise.resolve(generateCssTokens()),
    () => Promise.resolve(generateMarkupTokens()),
    () => Promise.resolve(generateMarkdownTokens()),
    () => Promise.resolve(generateModernTokens()),
  ])

  return {
    name: THEME_CONFIG.name,
    type: THEME_CONFIG.type,
    semanticHighlighting: THEME_CONFIG.semanticHighlighting,
    colors: {
      ...coreColors,
      ...buttonColors,
      ...inputColors,
      ...checkboxColors,
      ...sidebarColors,
      ...listColors,
      ...editorColors,
      ...diffColors,
      ...tabColors,
      ...panelColors,
      ...terminalColors,
      ...gitColors,
      ...miscColors,
    },
    tokenColors: [
      ...commentTokens,
      ...basicTokens,
      ...codeTokens,
      ...cssTokens,
      ...markupTokens,
      ...markdownTokens,
      ...modernTokens,
    ],
    semanticTokenColors: await Promise.resolve(generateSemanticTokenColors()),
  }
}
