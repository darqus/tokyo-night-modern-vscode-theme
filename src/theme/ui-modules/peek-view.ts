import { foundationColors } from '../palette/foundation/colors'
import { opacityLevels } from '../palette/foundation/opacity'
import { typographyColors } from '../palette/semantic/typography'

/**
 * Peek View UI элементы
 * Эти токены отвечают за оформление режима просмотра (peek view) в VS Code
 */
export const peekViewColors = {
  'peekView.border': foundationColors.gray600 + opacityLevels.medium,
  'peekViewEditor.background': foundationColors.gray800,
  'peekViewEditor.matchHighlightBackground':
    foundationColors.blue500 + opacityLevels.medium,
  'peekViewResult.background': foundationColors.gray800,
  'peekViewResult.fileForeground': typographyColors.text.primary,
  'peekViewResult.lineForeground': foundationColors.blue500,
  'peekViewResult.matchHighlightBackground': foundationColors.blue500 + '66',
  'peekViewResult.selectionBackground': foundationColors.blue500 + '40',
  'peekViewResult.selectionForeground': typographyColors.text.primary,
  'peekViewTitle.background': foundationColors.gray800,
  'peekViewTitleDescription.foreground': typographyColors.text.primary,
  'peekViewTitleLabel.foreground': foundationColors.blue500,
}
