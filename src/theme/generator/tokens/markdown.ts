import { palette } from '../../palette'
import type { TokenColor } from '../../types'

export function generateMarkdownTokens(): TokenColor[] {
  const { fg, cyan, blue, teal } = palette

  return [
    {
      name: 'JSON Key - Level 0',
      scope: [
        'source.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: { foreground: blue.medium },
    },
    {
      name: 'JSON Key - Level 1',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: { foreground: cyan.dark },
    },
    {
      name: 'JSON Key - Level 2',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: { foreground: cyan.light },
    },
    {
      name: 'JSON Key - Level 3',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: { foreground: palette.purple.light },
    },
    {
      name: 'JSON Key - Level 4',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: { foreground: palette.yellow.main },
    },
    {
      name: 'JSON Key - Level 5',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: { foreground: cyan.dark },
    },
    {
      name: 'JSON Key - Level 6',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: { foreground: teal.main },
    },
    {
      name: 'JSON Key - Level 7',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: { foreground: palette.red.main },
    },
    {
      name: 'JSON Key - Level 8',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: { foreground: palette.green.main },
    },
    {
      name: 'Plain Punctuation',
      scope: 'punctuation.definition.list_item.markdown',
      settings: { foreground: palette.ui.plainPunctuation },
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
      settings: { foreground: palette.ui.plainPunctuation },
    },
    {
      name: 'Markdown - Plain',
      scope: ['meta.embedded.block'],
      settings: { foreground: fg.brightest },
    },
    {
      name: 'HTML text',
      scope: [
        'meta.tag JSXNested',
        'meta.jsx.children',
        'text.html',
        'text.log',
      ],
      settings: { foreground: fg.bright },
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
      settings: { foreground: fg.dim },
    },
    {
      name: 'Markdown - Heading 1',
      scope: [
        'heading.1.markdown entity.name',
        'heading.1.markdown punctuation.definition.heading.markdown',
      ],
      settings: { fontStyle: 'bold', foreground: cyan.bright },
    },
    {
      name: 'Markdown - Heading 2',
      scope: [
        'heading.2.markdown entity.name',
        'heading.2.markdown punctuation.definition.heading.markdown',
      ],
      settings: { fontStyle: 'bold', foreground: palette.ui.heading2 },
    },
    {
      name: 'Markdown - Heading 3',
      scope: [
        'heading.3.markdown entity.name',
        'heading.3.markdown punctuation.definition.heading.markdown',
      ],
      settings: { fontStyle: 'bold', foreground: blue.medium },
    },
    {
      name: 'Markdown - Heading 4',
      scope: [
        'heading.4.markdown entity.name',
        'heading.4.markdown punctuation.definition.heading.markdown',
      ],
      settings: { fontStyle: 'bold', foreground: palette.ui.heading4 },
    },
    {
      name: 'Markdown - Heading 5',
      scope: [
        'heading.5.markdown entity.name',
        'heading.5.markdown punctuation.definition.heading.markdown',
      ],
      settings: { fontStyle: 'bold', foreground: fg.bright },
    },
    {
      name: 'Markdown - Heading 6',
      scope: [
        'heading.6.markdown entity.name',
        'heading.6.markdown punctuation.definition.heading.markdown',
      ],
      settings: { fontStyle: 'bold', foreground: palette.ui.heading6 },
    },
    {
      name: 'Markup - Italic',
      scope: ['markup.italic', 'markup.italic punctuation'],
      settings: { fontStyle: 'italic', foreground: fg.brightest },
    },
    {
      name: 'Markup - Bold',
      scope: ['markup.bold', 'markup.bold punctuation'],
      settings: { fontStyle: 'bold', foreground: fg.brightest },
    },
    {
      name: 'Markup - Bold-Italic',
      scope: [
        'markup.bold markup.italic',
        'markup.bold markup.italic punctuation',
      ],
      settings: { fontStyle: 'bold italic', foreground: fg.brightest },
    },
    {
      name: 'Markup - Underline',
      scope: ['markup.underline', 'markup.underline punctuation'],
      settings: { fontStyle: 'underline' },
    },
    {
      name: 'Markdown - Blockquote',
      scope: 'markup.quote punctuation.definition.blockquote.markdown',
      settings: { foreground: fg.dim },
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
      settings: { foreground: cyan.bright },
    },
    {
      name: 'Markdown - Separator',
      scope: 'meta.separator',
      settings: { fontStyle: 'bold', foreground: fg.medium },
    },
    {
      name: 'Markup - Table',
      scope: 'markup.table',
      settings: { foreground: palette.ui.table },
    },
    {
      name: 'Token - Info',
      scope: 'token.info-token',
      settings: { foreground: cyan.dark },
    },
    {
      name: 'Token - Warn',
      scope: 'token.warn-token',
      settings: { foreground: palette.yellow.light },
    },
    {
      name: 'Token - Error',
      scope: 'token.error-token',
      settings: { foreground: palette.red.dark },
    },
    {
      name: 'Token - Debug',
      scope: 'token.debug-token',
      settings: { foreground: palette.purple.bright },
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
      settings: { foreground: blue.medium },
    },
    {
      name: 'Sub-methods',
      scope: [
        'entity.name.module.js',
        'variable.import.parameter.js',
        'variable.other.class.js',
      ],
      settings: { foreground: fg.brightest },
    },
    {
      name: 'Language methods',
      scope: 'variable.language',
      settings: { foreground: palette.red.main },
    },
    {
      name: 'Variable punctuation',
      scope: 'variable.other punctuation.definition.variable',
      settings: { foreground: fg.brightest },
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
