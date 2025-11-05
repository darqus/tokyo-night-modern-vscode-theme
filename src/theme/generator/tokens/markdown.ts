import { palette } from '../../palette/index.js'
import type { TokenColor } from '../../types/index.js'

import { darken, lighten, mix } from '../../utils/color.js'

function buildJsonKeyScopeSelector(level: number): string {
  const base = 'source.json meta.structure.dictionary.json'
  const nestingPattern =
    ' meta.structure.dictionary.value.json meta.structure.dictionary.json'
  return `${base}${nestingPattern.repeat(level)} support.type.property-name.json`
}

export function generateMarkdownTokens(): TokenColor[] {
  const { fg, blue, teal, lime } = palette

  const jsonKeyLevelColors = [
    palette.purple.main, // Вместо blue.main - для различия с ENV value (#66a9ff)
    palette.violet.dark, // Вместо lime.dark - для различия
    palette.lime.light,
    palette.magenta.light,
    palette.yellow.main,
    palette.indigo.main, // Вместо orange.main - для различия с Number (#e0945a)
    palette.teal.main,
    palette.red.main,
    palette.cyan.main, // Вместо green.main - для различия со String (#79d68c)
  ]

  return [
    ...jsonKeyLevelColors.map((color, level) => ({
      name: `JSON Key - Level ${level}`,
      scope: [buildJsonKeyScopeSelector(level)],
      settings: { foreground: color },
    })),
    {
      name: 'Plain Punctuation',
      scope: 'punctuation.definition.list_item.markdown',
      settings: { foreground: lighten(blue.main, 0.2) },
    },
    {
      name: 'Block Punctuation',
      scope: [
        'meta.block',
        'meta.brace',
        'punctuation.definition.block',
        'punctuation.definition.use',
        'punctuation.definition.class',
        'punctuation.definition.begin.bracket',
        'punctuation.definition.end.bracket',
        'punctuation.definition.switch-expression.begin.bracket',
        'punctuation.definition.switch-expression.end.bracket',
        'punctuation.definition.section.switch-block.begin.bracket',
        'punctuation.definition.section.switch-block.end.bracket',
        'punctuation.definition.group.shell',
        'punctuation.definition.parameters',
        'punctuation.definition.arguments',
        'punctuation.definition.dictionary',
        'punctuation.definition.array',
        'punctuation.section',
      ],
      settings: { foreground: lighten(blue.main, 0.2) },
    },
    {
      name: 'Markdown - Plain',
      scope: ['meta.embedded.block'],
      settings: { foreground: fg.light },
    },
    {
      name: 'HTML text',
      scope: [
        'meta.tag JSXNested',
        'meta.jsx.children',
        'text.html',
        'text.log',
      ],
      settings: { foreground: fg.light },
    },
    {
      name: 'Markdown - Markup Raw Inline',
      scope: 'text.html.markdown markup.inline.raw.markdown',
      settings: { foreground: palette.purple.light },
    },
    {
      name: 'Markdown - Markup Raw Inline Punctuation',
      scope:
        'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown',
      settings: { foreground: fg.main },
    },
    {
      name: 'Markdown - Heading 1',
      scope: [
        'heading.1.markdown entity.name',
        'heading.1.markdown punctuation.definition.heading.markdown',
      ],
      settings: { fontStyle: 'bold', foreground: lime.light },
    },
    {
      name: 'Markdown - Heading 2',
      scope: [
        'heading.2.markdown entity.name',
        'heading.2.markdown punctuation.definition.heading.markdown',
      ],
      settings: { fontStyle: 'bold', foreground: lighten(lime.main, 0.05) },
    },
    {
      name: 'Markdown - Heading 3',
      scope: [
        'heading.3.markdown entity.name',
        'heading.3.markdown punctuation.definition.heading.markdown',
      ],
      settings: { fontStyle: 'bold', foreground: blue.main },
    },
    {
      name: 'Markdown - Heading 4',
      scope: [
        'heading.4.markdown entity.name',
        'heading.4.markdown punctuation.definition.heading.markdown',
      ],
      settings: { fontStyle: 'bold', foreground: darken(blue.main, 0.08) },
    },
    {
      name: 'Markdown - Heading 5',
      scope: [
        'heading.5.markdown entity.name',
        'heading.5.markdown punctuation.definition.heading.markdown',
      ],
      settings: { fontStyle: 'bold', foreground: fg.light },
    },
    {
      name: 'Markdown - Heading 6',
      scope: [
        'heading.6.markdown entity.name',
        'heading.6.markdown punctuation.definition.heading.markdown',
      ],
      settings: { fontStyle: 'bold', foreground: mix(blue.main, fg.main, 0.4) },
    },
    {
      name: 'Markup - Italic',
      scope: ['markup.italic', 'markup.italic punctuation'],
      settings: { fontStyle: 'italic', foreground: fg.light },
    },
    {
      name: 'Markup - Bold',
      scope: ['markup.bold', 'markup.bold punctuation'],
      settings: { fontStyle: 'bold', foreground: fg.light },
    },
    {
      name: 'Markup - Bold-Italic',
      scope: [
        'markup.bold markup.italic',
        'markup.bold markup.italic punctuation',
      ],
      settings: { fontStyle: 'bold italic', foreground: fg.light },
    },
    {
      name: 'Markup - Underline',
      scope: ['markup.underline', 'markup.underline punctuation'],
      settings: { fontStyle: 'underline' },
    },
    {
      name: 'Markdown - Blockquote',
      scope: 'markup.quote punctuation.definition.blockquote.markdown',
      settings: { foreground: fg.main },
    },
    {
      name: 'Markup - Quote',
      scope: 'markup.quote',
      settings: { fontStyle: 'italic' },
    },
    {
      name: 'Markdown - Link',
      scope: [
        'string.other.link',
        'markup.underline.link',
        'constant.other.reference.link.markdown',
        'string.other.link.description.title.markdown',
      ],
      settings: { foreground: teal.main },
    },
    {
      name: 'Markdown - Fenced Code Block',
      scope: [
        'markup.fenced_code.block.markdown',
        'markup.inline.raw.string.markdown',
        'variable.language.fenced.markdown',
      ],
      settings: { foreground: lime.light },
    },
    {
      name: 'Markdown - Separator',
      scope: 'meta.separator',
      settings: { fontStyle: 'bold', foreground: fg.main },
    },
    {
      name: 'Markup - Table',
      scope: 'markup.table',
      settings: { foreground: lighten(blue.main, 0.25) },
    },
    {
      name: 'Token - Info',
      scope: 'token.info-token',
      settings: { foreground: lime.light },
    },
    {
      name: 'Token - Warn',
      scope: 'token.warn-token',
      settings: { foreground: palette.yellow.light },
    },
    {
      name: 'Token - Error',
      scope: 'token.error-token',
      settings: { foreground: palette.red.light },
    },
    {
      name: 'Token - Debug',
      scope: 'token.debug-token',
      settings: { foreground: palette.purple.light },
    },
    {
      name: 'Apache Tag',
      scope: 'entity.tag.apacheconf',
      settings: { foreground: palette.red.main },
    },
    {
      name: 'Preprocessor',
      scope: ['meta.preprocessor'],
      settings: { foreground: teal.main },
    },
    {
      name: 'ENV value',
      scope: 'source.env',
      settings: { foreground: blue.main },
    },
    {
      name: 'Sub-methods',
      scope: [
        'entity.name.module.js',
        'variable.import.parameter.js',
        'variable.other.class.js',
      ],
      settings: { foreground: fg.light },
    },
    {
      name: 'Language methods',
      scope: 'variable.language',
      settings: { foreground: palette.red.main },
    },
    {
      name: 'Variable punctuation',
      scope: 'variable.other punctuation.definition.variable',
      settings: { foreground: fg.light },
    },
    {
      name: 'Keyword this with Punctuation, ES7 Bind Operator',
      scope: [
        'source.js constant.other.object.key.js string.unquoted.label.js',
        'variable.language.this punctuation.definition.variable',
        'keyword.other.this',
      ],
      settings: { foreground: palette.red.main },
    },
  ]
}
