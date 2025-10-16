import { semantic } from '../palette/semantic/index'
import { nestedSyntaxColors as syntax } from '../palette/syntax/nested'
import { validateColorUsage } from '../validation'

export interface VSCodeTheme {
  name: string
  type: 'dark' | 'light'
  colors: Record<string, string>
  tokenColors: Array<{
    name?: string
    scope: string | string[]
    settings: {
      foreground?: string
      fontStyle?: string
    }
  }>
}

/**
 * Генерирует тему для VS Code
 */
export function generateTheme(): VSCodeTheme {
  const theme: VSCodeTheme = {
    name: 'Tokyo Night Modern',
    type: 'dark',
    colors: generateWorkbenchColors(),
    tokenColors: generateTokenColors(),
  }

  // Валидируем сгенерированную тему
  const validation = validateColorUsage(theme)
  if (!validation.isValid) {
    console.warn('Theme validation warnings:', validation.summary.warnings)
    // Ошибки не блокируют генерацию, но логируются
    if (validation.summary.errors > 0) {
      console.error('Theme validation errors:', validation.summary.errors)
    }
  }

  return theme
}

/**
 * Генерирует цвета для интерфейса VS Code
 */
function generateWorkbenchColors(): Record<string, string> {
  return {
    // Основные цвета редактора
    'editor.background': semantic.surfaces.background.base,
    'editor.foreground': semantic.text.primary.base,

    // Боковая панель
    'sideBar.background': semantic.surfaces.background.base,
    'sideBar.foreground': semantic.text.secondary.base,
    'sideBar.border': semantic.borders.structural.default.base,

    // Статус бар
    'statusBar.background': semantic.surfaces.background.base,
    'statusBar.foreground': semantic.text.primary.base,
    'statusBar.border': semantic.borders.structural.default.base,

    // Активность
    'activityBar.background': semantic.surfaces.background.base,
    'activityBar.foreground': semantic.text.primary.base,
    'activityBar.border': semantic.borders.structural.default.base,

    // Подсветка и выделение
    'editor.selectionBackground': semantic.interactive.hover.base,
    'editor.selectionHighlightBackground': semantic.interactive.hover.base,
    'editor.wordHighlightBackground': semantic.interactive.hover.base,

    // Курсор и линии
    'editorCursor.foreground': semantic.interactive.active.base,
    'editorLineNumber.foreground': semantic.text.secondary.base,
    'editorLineNumber.activeForeground': semantic.text.primary.base,

    // Поиск и замена
    'editor.findMatchBackground': semantic.interactive.hover.base,
    'editor.findMatchHighlightBackground': semantic.interactive.hover.base,

    // Список и деревья
    'list.activeSelectionBackground': semantic.interactive.active.base,
    'list.hoverBackground': semantic.interactive.hover.base,
    'list.inactiveSelectionBackground': semantic.interactive.hover.base,

    // Вкладки
    'tab.activeBackground': semantic.surfaces.background.base,
    'tab.inactiveBackground': semantic.surfaces.background.base,
    'tab.activeForeground': semantic.text.primary.base,
    'tab.inactiveForeground': semantic.text.secondary.base,

    // Окна и границы
    'window.activeBorder': semantic.borders.structural.default.base,
    'window.inactiveBorder': semantic.borders.structural.default.base,
  }
}

/**
 * Генерирует цвета для подсветки синтаксиса
 */
function generateTokenColors(): VSCodeTheme['tokenColors'] {
  return [
    // Базовые элементы
    {
      name: 'Keywords',
      scope: ['keyword', 'storage', 'modifier'],
      settings: {
        foreground: syntax.base.keyword.base,
      },
    },
    {
      name: 'Operators',
      scope: ['keyword.operator'],
      settings: {
        foreground: syntax.base.keywordOperator.base,
      },
    },
    {
      name: 'Delimiters',
      scope: ['punctuation', 'meta.brace'],
      settings: {
        foreground: syntax.base.delimiter.base,
      },
    },
    {
      name: 'Variables',
      scope: ['variable', 'support.variable'],
      settings: {
        foreground: syntax.base.variable.base,
      },
    },

    // Литералы
    {
      name: 'Strings',
      scope: ['string'],
      settings: {
        foreground: syntax.base.string.base,
      },
    },
    {
      name: 'String Escapes',
      scope: ['constant.character.escape'],
      settings: {
        foreground: syntax.base.stringEscape.base,
      },
    },
    {
      name: 'Numbers',
      scope: ['constant.numeric'],
      settings: {
        foreground: syntax.base.number.base,
      },
    },
    {
      name: 'Constants',
      scope: ['constant', 'support.constant'],
      settings: {
        foreground: syntax.base.constant.base,
      },
    },

    // Комментарии
    {
      name: 'Comments',
      scope: ['comment'],
      settings: {
        foreground: syntax.base.comment.base,
        fontStyle: 'italic',
      },
    },
    {
      name: 'Documentation',
      scope: ['comment.documentation'],
      settings: {
        foreground: syntax.base.docComment.base,
        fontStyle: 'italic',
      },
    },

    // JavaScript/TypeScript
    {
      name: 'JS/TS Classes',
      scope: ['entity.name.type.class'],
      settings: {
        foreground: syntax.base.class.base,
      },
    },
    {
      name: 'JS/TS Functions',
      scope: ['entity.name.function'],
      settings: {
        foreground: syntax.base.function.base,
      },
    },
    {
      name: 'TS Types',
      scope: ['entity.name.type'],
      settings: {
        foreground: syntax.base.type.base,
      },
    },
    {
      name: 'TS Interfaces',
      scope: ['entity.name.type.interface'],
      settings: {
        foreground: syntax.typescript.interface.base,
      },
    },

    // Специальные токены
    {
      name: 'Decorators',
      scope: ['meta.decorator'],
      settings: {
        foreground: syntax.base.decorator.base,
      },
    },
    {
      name: 'Invalid',
      scope: ['invalid'],
      settings: {
        foreground: syntax.base.invalid.base,
      },
    },
    {
      name: 'Deprecated',
      scope: ['invalid.deprecated'],
      settings: {
        foreground: syntax.base.deprecated.base,
        fontStyle: 'italic',
      },
    },
  ]
}
