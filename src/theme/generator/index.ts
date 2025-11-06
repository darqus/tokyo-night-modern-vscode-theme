import { THEME_CONFIG } from '../config.js'
import type { VSCodeTheme } from '../types/index.js'
import { generateSemanticTokenColors } from './semantic/index.js'
import {
  generateBasicTokens,
  generateCodeTokens,
  generateCommentTokens,
  generateCssTokens,
  generateMarkdownTokens,
  generateMarkupTokens,
  generateModernTokens,
} from './tokens/index.js'
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
} from './ui/index.js'

/**
 * UI генераторы - порядок не важен, объединяются через spread
 */
const UI_GENERATORS = [
  generateCoreColors,
  generateButtonColors,
  generateInputColors,
  generateCheckboxColors,
  generateSidebarColors,
  generateListColors,
  generateEditorColors,
  generateDiffColors,
  generateTabColors,
  generatePanelColors,
  generateTerminalColors,
  generateGitColors,
  generateMiscColors,
] as const

/**
 * Token генераторы - порядок важен для приоритета стилей
 */
const TOKEN_GENERATORS = [
  generateCommentTokens,
  generateBasicTokens,
  generateCodeTokens,
  generateCssTokens,
  generateMarkupTokens,
  generateMarkdownTokens,
  generateModernTokens,
] as const

/**
 * Объединяет результаты UI генераторов в один объект
 */
function mergeUIColors(generators: readonly (() => Record<string, string>)[]) {
  return generators.reduce(
    (acc, generator) => ({ ...acc, ...generator() }),
    {} as Record<string, string>
  )
}

/**
 * Объединяет результаты token генераторов в один массив
 */
function mergeTokenColors<T>(generators: readonly (() => T[])[]) {
  return generators.flatMap((generator) => generator())
}

/**
 * Генерирует полную тему VS Code Tokyo Night
 *
 * Процесс:
 * 1. Генерируются UI цвета для всех компонентов
 * 2. Генерируются токены подсветки синтаксиса
 * 3. Генерируются семантические токены
 * 4. Всё объединяется в финальную тему
 */
export const generateTheme = (): VSCodeTheme => ({
  name: THEME_CONFIG.name,
  type: THEME_CONFIG.type,
  semanticHighlighting: THEME_CONFIG.semanticHighlighting,
  colors: mergeUIColors(UI_GENERATORS),
  tokenColors: mergeTokenColors(TOKEN_GENERATORS),
  semanticTokenColors: generateSemanticTokenColors(),
})
