import { palette } from '../../palette/index.js'
import type { TokenColor } from '../../types/index.js'

export function generateCommentTokens(): TokenColor[] {
  const { neutral } = palette

  return [
    {
      name: 'Italics - Comments, Storage, Keyword Flow',
      scope: [
        'comment',
        'keyword.control.flow',
        'keyword.control.return',
        'storage.modifier',
      ],
      settings: { fontStyle: 'italic' },
    },
    {
      name: 'Comment',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: neutral.dark },
    },
  ]
}
