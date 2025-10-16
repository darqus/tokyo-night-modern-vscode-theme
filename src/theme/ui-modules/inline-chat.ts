import { foundationColors } from '../palette/foundation/colors'
import { opacityLevels } from '../palette/foundation/opacity'

/**
 * Inline Chat UI элементы
 * Эти токены отвечают за оформление встроенного чата в VS Code
 */
export const inlineChatColors = {
  'inlineChat.background': foundationColors.gray900,
  'inlineChat.border': foundationColors.gray600,
  'inlineChat.shadow': foundationColors.black + opacityLevels.solid,
  'inlineChatDiff.inserted': foundationColors.gray800,
  'inlineChatDiff.removed': foundationColors.gray700,
  'inlineChatInput.border': foundationColors.gray600,
  'inlineChatInput.focusBorder': foundationColors.blue500,
  'inlineChatInput.placeholderForeground': foundationColors.gray500,
}
