import { palette } from '../../palette/index.js'
import type { TokenColor } from '../../types/index.js'

export function generateCssTokens(): TokenColor[] {
  const { blue, fg, teal, lime, magenta, amber } = palette

  return [
    {
      name: 'CSS Property',
      scope: ['support.type.property-name'],
      settings: { foreground: blue.main },
    },
    {
      name: 'CSS Class',
      scope: ['entity.other.attribute-name.class'],
      settings: { foreground: lime.main },
    },
    {
      name: 'CSS ID',
      scope: 'entity.other.attribute-name.id',
      settings: { foreground: blue.light },
    },
    {
      name: 'CSS Tag',
      scope: 'entity.name.tag.css',
      settings: { foreground: teal.main },
    },
    {
      name: 'CSS Punctuation',
      scope: ['punctuation.definition.entity'],
      settings: { foreground: fg.main },
    },
    {
      name: 'CSS at-rules',
      scope: ['keyword.control.at-rule'],
      settings: { foreground: magenta.main },
    },
    {
      name: 'CSS value',
      scope: 'support.constant.property-value',
      settings: { foreground: amber.main },
    },
    {
      name: 'CSS pseudo selectors',
      scope: [
        'entity.other.attribute-name.pseudo-class',
        'entity.other.attribute-name.pseudo-element',
      ],
      settings: { foreground: magenta.main },
    },
  ]
}
