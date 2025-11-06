import type { TokenColor } from '../../types/index.js'
import { c, colorRules } from '../../utils/color-builder.js'

// Упрощенная функция для генерации токенов разметки
export function generateMarkupTokens(): TokenColor[] {
  const builder = colorRules()

  // Content changes (inserted, deleted, changed)
  builder
    .addGroup('markup.inserted', {
      foreground: c.teal.light,
    })
    .addGroup('markup.deleted', {
      foreground: c.teal.light,
    })
    .addGroup('markup.changed', {
      foreground: c.teal.light,
    })

  // Regular expressions
  builder
    .addGroup('string.regexp', {
      foreground: c.lime.light,
    })
    .addGroup('constant.character.escape', {
      foreground: c.lime.light,
    })

  // Decorators
  builder.addGroup('tag.decorator.js', {
    foreground: c.blue.main,
  })

  // HTML attributes
  builder.addGroup('entity.other.attribute-name', {
    foreground: c.magenta.light,
  })

  // Convert builder rules to TokenColor format
  const rules = builder.build()
  return Object.entries(rules).map(([scope, color]) => ({
    name: getScopeName(scope),
    scope: [scope],
    settings: { foreground: color },
  }))
}

/**
 * Возвращает понятное имя для scope
 */
function getScopeName(scope: string): string {
  switch (scope) {
    case 'markup.inserted':
      return 'Inserted text'
    case 'markup.deleted':
      return 'Deleted text'
    case 'markup.changed':
      return 'Changed text'
    case 'string.regexp':
      return 'Regular expression'
    case 'constant.character.escape':
      return 'Escape character'
    case 'tag.decorator.js':
      return 'Decorator'
    case 'entity.other.attribute-name':
      return 'HTML Attribute'
    default:
      return scope
  }
}
