import type { VSCodeTheme } from '../types';
import {
  generateCoreColors,
  generateButtonColors,
  generateInputColors,
  generateSidebarColors,
  generateListColors,
  generateEditorColors,
  generateDiffColors,
  generateTabColors,
  generatePanelColors,
  generateTerminalColors,
  generateGitColors,
  generateMiscColors,
} from './ui';
import {
  generateCommentTokens,
  generateBasicTokens,
  generateCodeTokens,
  generateCssTokens,
  generateMarkupTokens,
  generateMarkdownTokens,
} from './tokens';
import { generateSemanticTokenColors } from './semantic';

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
    ],
    semanticTokenColors: generateSemanticTokenColors(),
  };
}
