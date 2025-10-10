import { TokenColor } from '../token-utils'
import { palette } from '../palette'

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
]