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
 * Генерирует полную тему VS Code Tokyo Night
 *
 * Объединяет все компоненты темы:
 * - UI цвета (кнопки, панели, редактор и т.д.)
 * - Токены для подсветки синтаксиса (TextMate)
 * - Семантические токены для семантической подсветки
 *
 * @returns Полная структура темы VS Code
 *
 * @example
 * ```ts
 * const theme = generateTheme()
 * // theme содержит все цвета и правила подсветки
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
