import type { ThemeConfig } from '../config/color-config-dsl.js'
import {
  criticalKeywordsConfig,
  frameworksConfig,
  functionsConfig,
  literalsConfig,
  modifiersConfig,
  typesConfig,
  variablesConfig,
} from '../config/semantic-configs.js'
import {
  basicTokens,
  codeTokens,
  commentsTokens,
  cssTokens,
  markdownTokens,
  markupTokens,
  modernTokens,
} from '../config/token-configs.js'
import {
  buttonsConfig,
  checkboxesConfig,
  coreConfig,
  diffConfig,
  editorConfig,
  gitConfig,
  inputsConfig,
  listsConfig,
  miscConfig,
  panelsConfig,
  sidebarConfig,
  tabsConfig,
  terminalConfig,
} from '../config/ui-configs.js'
import { createThemeGenerator } from '../core/index.js'
import type { VSCodeTheme } from '../types/index.js'

/**
 * Генерирует полную тему VS Code Tokyo Modern с использованием улучшенной архитектуры
 *
 * Процесс:
 * 1. Создается генератор с dependency injection
 * 2. Генерируется тема с кэшированием
 * 3. Возвращается финальная тема
 */
export const generateTheme = async (): Promise<VSCodeTheme> => {
  const fullConfig: ThemeConfig = {
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
      criticalKeywords: criticalKeywordsConfig,
    },
  }

  const generator = await createThemeGenerator(fullConfig)
  return generator.generateTheme()
}

/**
 * Генерирует тему с кастомной конфигурацией
 */
export const generateCustomTheme = async (
  customConfig?: Partial<ThemeConfig>
): Promise<VSCodeTheme> => {
  const generator = await createThemeGenerator(customConfig)
  return generator.generateTheme()
}
