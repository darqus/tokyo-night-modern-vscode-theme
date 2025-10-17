import { palette } from '../../palette/index'
import type { TokenColor } from '../../token-utils'

export const markdownTokens: TokenColor[] = [
  {
    name: 'MD list item',
    scope: 'punctuation.definition.list_item.markdown',
    settings: {
      foreground: palette.mdHeading,
    },
  },
  {
    name: 'MD unnumbered list',
    scope: [
      'markup.list.unnumbered',
      'punctuation.definition.list.begin.markdown',
    ],
    settings: {
      foreground: palette.mdHeading,
    },
  },
  {
    name: 'MD numbered list',
    scope: [
      'markup.list.numbered',
      'punctuation.definition.list.begin.markdown',
    ],
    settings: {
      foreground: palette.mdHeading,
    },
  },
  {
    name: 'MD raw',
    scope: 'text.html.markdown markup.inline.raw.markdown',
    settings: {
      foreground: palette.mdCode,
    },
  },
  {
    name: 'MD raw punctuation',
    scope:
      'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown',
    settings: {
      foreground: palette.mdCode,
    },
  },
  {
    name: 'MD heading 1',
    scope: [
      'heading.1.markdown entity.name',
      'heading.1.markdown punctuation.definition.heading.markdown',
    ],
    settings: {
      foreground: palette.mdHeading,
    },
  },
  {
    name: 'MD heading 2',
    scope: [
      'heading.2.markdown entity.name',
      'heading.2.markdown punctuation.definition.heading.markdown',
    ],
    settings: {
      foreground: palette.mdHeading,
    },
  },
  {
    name: 'MD heading 3',
    scope: [
      'heading.3.markdown entity.name',
      'heading.3.markdown punctuation.definition.heading.markdown',
    ],
    settings: {
      foreground: palette.mdHeading,
    },
  },
  {
    name: 'MD heading 4',
    scope: [
      'heading.4.markdown entity.name',
      'heading.4.markdown punctuation.definition.heading.markdown',
    ],
    settings: {
      foreground: palette.mdHeading,
    },
  },
  {
    name: 'MD heading 5',
    scope: [
      'heading.5.markdown entity.name',
      'heading.5.markdown punctuation.definition.heading.markdown',
    ],
    settings: {
      foreground: palette.mdHeading,
    },
  },
  {
    name: 'MD heading 6',
    scope: [
      'heading.6.markdown entity.name',
      'heading.6.markdown punctuation.definition.heading.markdown',
    ],
    settings: {
      foreground: palette.mdHeading,
    },
  },
  {
    name: 'MD italic',
    scope: ['markup.italic', 'markup.italic punctuation'],
    settings: {
      foreground: palette.mdItalic,
    },
  },
  {
    name: 'MD bold',
    scope: ['markup.bold', 'markup.bold punctuation'],
    settings: {
      foreground: palette.mdBold,
      fontStyle: 'bold',
    },
  },
  {
    name: 'MD bold italic',
    scope: [
      'markup.bold markup.italic',
      'markup.bold markup.italic punctuation',
    ],
    settings: {
      foreground: palette.mdBold,
      fontStyle: 'bold italic',
    },
  },
  {
    name: 'MD underline',
    scope: ['markup.underline', 'markup.underline punctuation'],
    settings: {
      fontStyle: 'underline',
    },
  },
  {
    name: 'MD quote punctuation',
    scope: 'markup.quote punctuation.definition.blockquote.markdown',
    settings: {
      foreground: palette.mdQuote,
    },
  },
  {
    name: 'MD quote',
    scope: 'markup.quote',
    settings: {
      fontStyle: '',
    },
  },
  {
    name: 'MD link',
    scope: [
      'markup.underline.link',
      'constant.other.reference.link.markdown',
      'string.other.link.description.title.markdown',
    ],
    settings: {
      foreground: palette.mdLink,
    },
  },
  {
    name: 'MD code',
    scope: [
      'markup.fenced_code.block.markdown',
      'markup.inline.raw.string.markdown',
      'variable.language.fenced.markdown',
    ],
    settings: {
      foreground: palette.mdCode,
    },
  },
  {
    name: 'MD separator',
    scope: 'meta.separator',
    settings: {
      foreground: palette.mdHeading,
      fontStyle: 'bold',
    },
  },
  {
    name: 'MD table',
    scope: 'markup.table',
    settings: {
      foreground: palette.mdCode,
    },
  },
]
