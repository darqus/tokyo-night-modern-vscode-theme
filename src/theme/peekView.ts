import { palette } from '../palette'
import { withAlpha } from '../utils/color'

export const getPeekViewColors = () => ({
  // Окно быстрого просмотра (Peek view)
  'peekView.border': palette.line.border,
  'peekViewEditor.background': palette.bg.base,
  'peekViewEditor.matchHighlightBackground': withAlpha(
    palette.brand.primary,
    '40%'
  ),
  'peekViewTitle.background': palette.line.border,
  'peekViewTitleLabel.foreground': palette.fg.primary,
  'peekViewTitleDescription.foreground': palette.fg.muted,
  'peekViewResult.background': palette.bg.base,
  'peekViewResult.selectionForeground': palette.fg.primary,
  'peekViewResult.selectionBackground': withAlpha(palette.brand.primary, '20%'),
  'peekViewResult.lineForeground': palette.fg.primary,
  'peekViewResult.fileForeground': palette.fg.muted,
  'peekViewResult.matchHighlightBackground': withAlpha(
    palette.brand.primary,
    '40%'
  ),
})
