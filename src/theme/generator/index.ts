import {
  frameworksConfig,
  functionsConfig,
  literalsConfig,
  modifiersConfig,
  typesConfig,
  // Semantic configs
  variablesConfig,
} from '../config/semantic-configs.js'
import {
  basicTokens,
  codeTokens,
  // Token configs
  commentsTokens,
  cssTokens,
  markdownTokens,
  markupTokens,
  modernTokens,
} from '../config/token-configs.js'
import {
  buttonsConfig,
  checkboxesConfig,
  // Core UI configurations
  coreConfig,
  // Diff configurations
  diffConfig,
  // Editor configurations
  editorConfig,
  // Git configurations
  gitConfig,
  inputsConfig,
  listsConfig,
  // Miscellaneous configurations
  miscConfig,
  // Panel configurations
  panelsConfig,
  sidebarConfig,
  tabsConfig,
  // Terminal configurations
  terminalConfig,
} from '../config/ui-configs.js'
import { generateFromConfig } from '../config/unified-generator.js'
import { THEME_CONFIG } from '../config.js'
import type { VSCodeTheme } from '../types/index.js'

/**
 * Генерирует полную тему VS Code Tokyo Modern
 *
 * Процесс:
 * 1. Генерируются UI цвета для всех компонентов
 * 2. Генерируются токены подсветки синтаксиса
 * 3. Генерируются семантические токены
 * 4. Всё объединяется в финальную тему
 */
export const generateTheme = (): VSCodeTheme => {
  const fullConfig = {
    ui: {
      core: coreConfig,
      buttons: buttonsConfig,
      inputs: inputsConfig,
      checkboxes: checkboxesConfig,
      sidebar: sidebarConfig,
      lists: listsConfig,
      editor: editorConfig,
      diff: diffConfig,
      tabs: tabsConfig,
      panels: panelsConfig,
      terminal: terminalConfig,
      git: gitConfig,
      misc: miscConfig,
    },
    tokens: {
      comments: commentsTokens,
      basic: basicTokens,
      code: codeTokens,
      css: cssTokens,
      markup: markupTokens,
      markdown: markdownTokens,
      modern: modernTokens,
    },
    semantic: {
      variables: variablesConfig,
      functions: functionsConfig,
      types: typesConfig,
      modifiers: modifiersConfig,
      literals: literalsConfig,
      frameworks: frameworksConfig,
    },
  }

  const generated = generateFromConfig(fullConfig)

  return {
    name: THEME_CONFIG.name,
    type: THEME_CONFIG.type,
    semanticHighlighting: THEME_CONFIG.semanticHighlighting,
    colors: generated.colors,
    tokenColors: generated.tokenColors,
    semanticTokenColors: generated.semanticTokenColors,
  }
}
