import { palette } from '../../palette/index.js'
import type { TokenColor } from '../../types/index.js'

function buildJsonKeyScopeSelector(level: number): string {
  const base = 'source.json meta.structure.dictionary.json'
  const nestingPattern =
    ' meta.structure.dictionary.value.json meta.structure.dictionary.json'
  return `${base}${nestingPattern.repeat(level)} support.type.property-name.json`
}

export function generateMarkdownTokens(): TokenColor[] {
  const { fg, blue, teal, lime } = palette

  const jsonKeyLevelColors = [
    palette.purple.main,
    palette.magenta.main,
    palette.indigo.main,
    palette.teal.main,
    palette.cyan.main,
    palette.red.main,
    palette.yellow.main,
    palette.peach.main,
    palette.lime.main,
  ]

  return [
    ...jsonKeyLevelColors.map((color, level) => ({
      name: `JSON Key - Level ${level}`,
      scope: [buildJsonKeyScopeSelector(level)],
      settings: { foreground: color },
    })),
    {
      name: 'Markdown - Heading',
      scope: [
        'heading.1.markdown',
        'heading.2.markdown',
        'heading.3.markdown',
        'heading.4.markdown',
        'heading.5.markdown',
        'heading.6.markdown',
      ],
      settings: { fontStyle: 'bold', foreground: blue.main },
    },
    {
      name: 'Markup - Italic, Bold',
      scope: ['markup.italic', 'markup.bold'],
      settings: { fontStyle: 'italic', foreground: fg.light },
    },
    {
      name: 'Markdown - Link',
      scope: [
        'markup.underline.link',
        'constant.other.reference.link.markdown',
      ],
      settings: { foreground: teal.main },
    },
    {
      name: 'Markdown - Fenced Code Block',
      scope: [
        'markup.fenced_code.block.markdown',
        'markup.inline.raw.string.markdown',
      ],
      settings: { foreground: lime.light },
    },
    {
      name: 'Markup - Quote',
      scope: 'markup.quote',
      settings: { fontStyle: 'italic' },
    },
  ]
}
