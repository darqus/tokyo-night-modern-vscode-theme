import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

export const markdownTokens: TokenColor[] = [
  {
    name: 'Markdown: Heading',
    scope: ['markup.heading', 'entity.name.section.markdown'],
    settings: { foreground: palette.mdHeading, fontStyle: 'bold' },
  },
  {
    name: 'Markdown: Emphasis',
    scope: ['markup.italic', 'markup.bold'],
    settings: { foreground: palette.yellow },
  },
  {
    name: 'Markdown: Link',
    scope: ['markup.underline.link', 'string.other.link'],
    settings: { foreground: palette.blue },
  },
  {
    name: 'Markdown: Code',
    scope: ['markup.inline.raw', 'markup.fenced_code'],
    settings: { foreground: palette.mdCode },
  },
  {
    name: 'Markdown: Quote',
    scope: 'markup.quote',
    settings: { foreground: palette.commentDoc, fontStyle: 'italic' },
  },
  {
    name: 'Markdown: List',
    scope: 'markup.list',
    settings: { foreground: palette.foreground },
  },
  {
    name: 'Markdown: Heading Punctuation',
    scope: 'punctuation.definition.heading.markdown',
    settings: { foreground: palette.red },
  },
  {
    name: 'Markdown: List Punctuation',
    scope: 'punctuation.definition.list.begin.markdown',
    settings: { foreground: palette.red },
  },
  {
    name: 'Markdown: Heading Setext',
    scope: 'markup.heading.setext',
    settings: { foreground: palette.variable },
  },
  {
    name: 'Markdown: Bold Punctuation',
    scope: 'punctuation.definition.bold.markdown',
    settings: { foreground: palette.orange },
  },
  {
    name: 'Markdown: Inline Raw',
    scope: ['markup.inline.raw.markdown', 'markup.inline.raw.string.markdown'],
    settings: { foreground: palette.green },
  },
  {
    name: 'Markdown: List Punctuation Definition',
    scope: 'punctuation.definition.list.markdown',
    settings: { foreground: palette.red },
  },
  {
    name: 'Markdown: String Punctuation',
    scope: [
      'punctuation.definition.string.begin.markdown',
      'punctuation.definition.string.end.markdown',
      'punctuation.definition.metadata.markdown',
    ],
    settings: { foreground: palette.red },
  },
  {
    name: 'Markdown: Beginning List Punctuation',
    scope: 'beginning.punctuation.definition.list.markdown',
    settings: { foreground: palette.red },
  },
  {
    name: 'Markdown: Link',
    scope: [
      'markup.underline.link.markdown',
      'markup.underline.link.image.markdown',
    ],
    settings: { foreground: palette.purple },
  },
  {
    name: 'Markdown: Link Title',
    scope: [
      'string.other.link.title.markdown',
      'string.other.link.description.markdown',
    ],
    settings: { foreground: palette.keywordAsync },
  },
]
