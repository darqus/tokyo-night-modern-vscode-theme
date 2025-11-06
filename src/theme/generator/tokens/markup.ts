import { palette } from '../../palette/index.js'
import type { TokenColor } from '../../types/index.js'

export function generateMarkupTokens(): TokenColor[] {
  const { blue, teal, lime, magenta } = palette

  return [
    {
      name: 'Inserted, Deleted, Changed',
      scope: ['markup.inserted', 'markup.deleted', 'markup.changed'],
      settings: { foreground: teal.light },
    },
    {
      name: 'Regular Expressions',
      scope: ['string.regexp', 'constant.character.escape'],
      settings: { foreground: lime.light },
    },
    {
      name: 'Decorators',
      scope: ['tag.decorator.js'],
      settings: { foreground: blue.main },
    },
    {
      name: 'HTML Attributes',
      scope: ['entity.other.attribute-name'],
      settings: { foreground: magenta.light },
    },
  ]
}
