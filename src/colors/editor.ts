import { palette } from '../palette'
import { withAlpha } from '../utils/color'

/**
 * Code editor colors
 * Includes background, selection, cursor, line numbers, etc.
 */
export function buildEditorColors(): Record<string, string> {
  return {
    // Main background and text
    'editor.background': palette.bg.base,
    'editor.foreground': palette.fg.primary,

    // Selection and cursor
    'editor.selectionBackground': palette.bg.selection.active,
    'editor.inactiveSelectionBackground': palette.bg.selection.inactive,
    'editor.selectionHighlightBackground': withAlpha(
      palette.bg.selection.active,
      '40'
    ),
    'editor.findMatchBackground': withAlpha(palette.accent.yellow, '22'),
    'editor.findMatchHighlightBackground': withAlpha(
      palette.accent.yellow,
      '11'
    ),
    'editor.currentFindMatchBackground': withAlpha(palette.accent.yellow, '44'),

    // Cursor
    'editorCursor.foreground': palette.fg.primary,
    'editorCursor.background': palette.bg.base,

    // Line numbers
    'editorLineNumber.foreground': palette.fg.subtle,
    'editorLineNumber.activeForeground': palette.fg.muted,

    // Line highlight
    'editor.lineHighlightBackground': palette.bg.lineHighlight,
    'editor.lineHighlightBorder': 'transparent',

    // Indentation and guides
    'editorIndentGuide.background': withAlpha(palette.fg.subtle, '20'),
    'editorIndentGuide.activeBackground': withAlpha(palette.fg.subtle, '40'),

    // Brackets
    'editorBracketMatch.background': palette.bg.bracketMatch,
    'editorBracketMatch.border': withAlpha(palette.fg.subtle, '50'),

    // Scrollbar
    'scrollbarSlider.background': withAlpha(palette.fg.subtle, '20'),
    'scrollbarSlider.hoverBackground': withAlpha(palette.fg.subtle, '30'),
    'scrollbarSlider.activeBackground': withAlpha(palette.fg.subtle, '40'),
  }
}
