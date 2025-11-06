import type { TokenColor } from '../../types/index.js'
import { c, colorRules } from '../../utils/color-builder.js'
import { subtleHighlight } from '../../utils/color-helpers.js'
import {
  commentTokenDefinitions,
  convertRulesToTokens,
} from '../../utils/token-helpers.js'

export function generateCommentTokens(): TokenColor[] {
  const { neutral } = c

  // Используем builder для логической группировки токенов
  const builder = colorRules()

  // Стили для курсива в комментариях
  builder.add('comments.italics', 'italic')

  // Стили для различных типов комментариев
  builder.add('comments.default', neutral.dark)
  builder.add('comments.singleLine', neutral.dark)
  builder.add('comments.multiLine', neutral.main)
  builder.add('comments.documentation', subtleHighlight(neutral.bright))
  builder.add('comments.punctuation', neutral.light)

  // Convert builder rules to TokenColor format
  return convertRulesToTokens(builder.build(), commentTokenDefinitions)
}
