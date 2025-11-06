import type { TokenColor } from '../types/index.js'

/**
 * Утилиты для работы с токенами
 */

/**
 * Вспомогательная функция для преобразования правил builder в TokenColor[]
 * Поддерживает формат ключей вида "groupName.scopeName" и определяет
 * соответствующие настройки на основе группы и подгруппы
 */
export function convertRulesToTokens(
  rules: Record<string, unknown>,
  tokenDefinitions: Record<
    string,
    (value: unknown, scopeStr: string) => TokenColor | null
  >
): TokenColor[] {
  const tokens: TokenColor[] = []

  for (const [key, value] of Object.entries(rules)) {
    // Ключ содержит информацию в формате "groupName.scopeName"
    const [groupName, scopeStr] = key.split('.', 2)
    if (!(groupName && scopeStr)) {
      continue
    }

    // Проверяем, есть ли определение для этой группы
    if (tokenDefinitions[groupName]) {
      const token = tokenDefinitions[groupName](value, scopeStr)
      if (token) {
        tokens.push(token)
      }
    }
  }

  return tokens
}

/**
 * Создает скоуп селектор для JSON ключей на основе уровня вложенности
 */
export function buildJsonKeyScopeSelector(level: number): string {
  const base = 'source.json meta.structure.dictionary.json'
  const nestingPattern =
    ' meta.structure.dictionary.value.json meta.structure.dictionary.json'
  return `${base}${nestingPattern.repeat(level)} support.type.property-name.json`
}

/**
 * Стандартные определения токенов для комментариев
 */
export const commentTokenDefinitions = {
  comments: (value: unknown, scopeStr: string): TokenColor | null => {
    switch (scopeStr) {
      case 'italics':
        return {
          name: 'Italics - Comments, Storage, Keyword Flow',
          scope: [
            'comment',
            'keyword.control.flow',
            'keyword.control.return',
            'storage.modifier',
          ],
          settings: { fontStyle: 'italic' },
        }
      case 'default':
        return {
          name: 'Comment',
          scope: ['comment', 'punctuation.definition.comment'],
          settings: { foreground: value as string },
        }
      case 'singleLine':
        return {
          name: 'Single Line Comment',
          scope: [
            'comment.line',
            'comment.line.double-slash',
            'comment.line.double-dash',
            'comment.line.number-sign',
            'comment.line.percentage',
          ],
          settings: { foreground: value as string },
        }
      case 'multiLine':
        return {
          name: 'Multi Line Comment',
          scope: ['comment.block', 'comment.block.documentation'],
          settings: { foreground: value as string },
        }
      case 'documentation':
        return {
          name: 'Documentation Comment',
          scope: ['comment.block.documentation', 'comment.documentation'],
          settings: { foreground: value as string },
        }
      case 'punctuation':
        return {
          name: 'Comment Punctuation',
          scope: ['punctuation.definition.comment'],
          settings: { foreground: value as string },
        }
      default:
        return null
    }
  },
}

/**
 * Стандартные определения токенов для кода
 */
export const codeTokenDefinitions = {
  tag: (value: unknown, scopeStr: string): TokenColor | null => {
    switch (scopeStr) {
      case 'entityNameTag':
        return {
          name: 'Tag',
          scope: 'entity.name.tag',
          settings: { foreground: value as string },
        }
      case 'punctuationDefinitionTag':
        return {
          name: 'Tag Punctuation',
          scope: ['punctuation.definition.tag'],
          settings: { foreground: value as string },
        }
      default:
        return null
    }
  },
  variable: (value: unknown, scopeStr: string): TokenColor | null => {
    switch (scopeStr) {
      case 'variableSupport':
        return {
          name: 'Variables',
          scope: ['variable', 'support.variable'],
          settings: { foreground: value as string },
        }
      case 'variableParameter':
        return {
          name: 'Function Arguments',
          scope: ['variable.parameter'],
          settings: { foreground: value as string },
        }
      default:
        return null
    }
  },
  object: (value: unknown, scopeStr: string): TokenColor | null => {
    switch (scopeStr) {
      case 'metaObjectLiteralKey':
        return {
          name: 'Object Key',
          scope: ['meta.object-literal.key', 'entity.name.type.hcl'],
          settings: { foreground: value as string },
        }
      case 'variableOtherProperty':
        return {
          name: 'Object Property',
          scope: ['variable.other.property', 'support.variable.property'],
          settings: { foreground: value as string },
        }
      default:
        return null
    }
  },
  function: (value: unknown, scopeStr: string): TokenColor | null => {
    switch (scopeStr) {
      case 'entityNameMethod':
        return {
          name: 'Methods',
          scope: ['entity.name.method', 'variable.function.constructor'],
          settings: { foreground: value as string },
        }
      case 'entityNameFunction':
        return {
          name: 'Function Definition',
          scope: ['entity.name.function', 'variable.function'],
          settings: { foreground: value as string },
        }
      default:
        return null
    }
  },
  constant: (value: unknown, scopeStr: string): TokenColor | null => {
    switch (scopeStr) {
      case 'constantCharacter':
        return {
          name: 'Constant, Tag Attribute',
          scope: ['constant.character', 'constant.escape'],
          settings: { foreground: value as string },
        }
      default:
        return null
    }
  },
  class: (value: unknown, scopeStr: string): TokenColor | null => {
    switch (scopeStr) {
      case 'entityOtherInherited':
        return {
          name: 'Inherited Class',
          scope: 'entity.other.inherited-class',
          settings: { foreground: value as string },
        }
      case 'supportClassType':
        return {
          name: 'Class, Support, DOM, etc',
          scope: ['support.class', 'support.type', 'support.function'],
          settings: { foreground: value as string, fontStyle: 'bold' },
        }
      case 'entityName':
        return {
          name: 'Class Name',
          scope: 'entity.name',
          settings: { foreground: value as string },
        }
      default:
        return null
    }
  },
}

/**
 * Стандартные определения токенов для markdown
 */
export const markdownTokenDefinitions = {
  json: (value: unknown, scopeStr: string): TokenColor | null => {
    if (scopeStr.startsWith('keyLevel')) {
      const level = scopeStr.replace('keyLevel', '')
      return {
        name: `JSON Key - Level ${level}`,
        scope: [buildJsonKeyScopeSelector(Number.parseInt(level, 10))],
        settings: { foreground: value as string },
      }
    }
    return null
  },
  headings: (value: unknown, scopeStr: string): TokenColor | null => {
    if (scopeStr === 'default') {
      return {
        name: 'Markdown - Heading',
        scope: [
          'heading.1.markdown',
          'heading.2.markdown',
          'heading.3.markdown',
          'heading.4.markdown',
          'heading.5.markdown',
          'heading.6.markdown',
        ],
        settings: { fontStyle: 'bold', foreground: value as string },
      }
    }
    return null
  },
  markup: (value: unknown, scopeStr: string): TokenColor | null => {
    switch (scopeStr) {
      case 'italicBold':
        return {
          name: 'Markup - Italic, Bold',
          scope: ['markup.italic', 'markup.bold'],
          settings: { fontStyle: 'italic', foreground: value as string },
        }
      case 'quote':
        return {
          name: 'Markup - Quote',
          scope: 'markup.quote',
          settings: { fontStyle: 'italic' },
        }
      default:
        return null
    }
  },
  links: (value: unknown, scopeStr: string): TokenColor | null => {
    if (scopeStr === 'default') {
      return {
        name: 'Markdown - Link',
        scope: [
          'markup.underline.link',
          'constant.other.reference.link.markdown',
        ],
        settings: { foreground: value as string },
      }
    }
    return null
  },
  code: (value: unknown, scopeStr: string): TokenColor | null => {
    if (scopeStr === 'fencedBlock') {
      return {
        name: 'Markdown - Fenced Code Block',
        scope: [
          'markup.fenced_code.block.markdown',
          'markup.inline.raw.string.markdown',
        ],
        settings: { foreground: value as string },
      }
    }
    return null
  },
}

/**
 * Стандартные определения токенов для modern фреймворков
 */
export const modernTokenDefinitions = {
  reactVue: (value: unknown, scopeStr: string): TokenColor | null => {
    if (scopeStr === 'components') {
      return {
        name: 'React/Vue Components',
        scope: ['entity.name.component', 'support.class.component'],
        settings: { foreground: value as string, fontStyle: 'bold' },
      }
    }
    return null
  },
  typescript: (value: unknown, scopeStr: string): TokenColor | null => {
    if (scopeStr === 'types') {
      return {
        name: 'TypeScript Types',
        scope: ['entity.name.type', 'type.alias', 'type.parameter'],
        settings: { foreground: value as string },
      }
    }
    return null
  },
  graphql: (value: unknown, scopeStr: string): TokenColor | null => {
    if (scopeStr === 'schema') {
      return {
        name: 'GraphQL Schema',
        scope: ['type.name.graphql', 'field.name.graphql'],
        settings: { foreground: value as string },
      }
    }
    return null
  },
  tailwind: (value: unknown, scopeStr: string): TokenColor | null => {
    if (scopeStr === 'classes') {
      return {
        name: 'Tailwind Classes',
        scope: ['entity.other.attribute-name.class.tailwind'],
        settings: { foreground: value as string },
      }
    }
    return null
  },
  reactHooks: (value: unknown, scopeStr: string): TokenColor | null => {
    if (scopeStr === 'hooks') {
      return {
        name: 'React Hooks',
        scope: ['support.function.react-hooks', 'entity.name.function.hook'],
        settings: { foreground: value as string, fontStyle: 'bold' },
      }
    }
    return null
  },
  testing: (value: unknown, scopeStr: string): TokenColor | null => {
    if (scopeStr === 'frameworks') {
      return {
        name: 'Testing Frameworks',
        scope: ['support.function.test', 'entity.name.function.test'],
        settings: { foreground: value as string, fontStyle: 'bold' },
      }
    }
    return null
  },
  modernFrameworks: (value: unknown, scopeStr: string): TokenColor | null => {
    if (scopeStr === 'general') {
      return {
        name: 'Modern Frameworks',
        scope: [
          'support.function.solid',
          'support.function.drizzle',
          'support.function.hono',
          'support.function.validation',
          'support.function.query',
          'entity.name.function.resolver',
          'support.function.macro.rust',
          'entity.name.function.go',
          'support.function.styled',
        ],
        settings: { foreground: value as string },
      }
    }
    return null
  },
}
