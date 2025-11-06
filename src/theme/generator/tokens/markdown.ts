import type { TokenColor } from '../../types/index.js'
import { c, colorRules } from '../../utils/color-builder.js'
import {
  borderColor,
  mediumHighlight,
  subtleHighlight,
} from '../../utils/color-helpers.js'
import {
  buildJsonKeyScopeSelector,
  convertRulesToTokens,
  markdownTokenDefinitions,
} from '../../utils/token-helpers.js'

export function generateMarkdownTokens(): TokenColor[] {
  const {
    fg,
    blue,
    teal,
    lime,
    purple,
    magenta,
    indigo,
    cyan,
    red,
    yellow,
    peach,
  } = c

  const jsonKeyLevelColors = [
    purple.main,
    magenta.main,
    indigo.main,
    teal.main,
    cyan.main,
    red.main,
    yellow.main,
    peach.main,
    lime.main,
  ]

  // Используем builder для логической группировки токенов
  const builder = colorRules()

  // JSON Key уровни
  jsonKeyLevelColors.forEach((color, level) => {
    builder.add(`json.keyLevel${level}`, color)
  })

  // Заголовки
  builder.add('headings.default', blue.main)

  // Стили разметки
  builder.add('markup.italicBold', fg.light)
  builder.add('markup.quote', 'italic')

  // Ссылки
  builder.add('links.default', teal.main)

  // Код
  builder.add('code.fencedBlock', lime.light)

  // Convert builder rules to TokenColor format
  return convertRulesToTokens(builder.build(), markdownTokenDefinitions)
}
