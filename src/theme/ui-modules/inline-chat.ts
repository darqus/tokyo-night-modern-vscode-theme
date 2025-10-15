import { palette } from '../palette/index'

/**
 * Inline Chat UI элементы
 * Эти токены отвечают за оформление встроенного чата в VS Code
 */
export const inlineChatColors = {
  'inlineChat.background': palette.backgroundsPrimary,
  'inlineChat.border': palette.bordersSubtle,
  'inlineChat.shadow': palette.specialShadow,
  'inlineChatDiff.inserted': palette.backgroundsElevated,
  'inlineChatDiff.removed': palette.backgroundsTertiary,
  'inlineChatInput.border': palette.bordersDefault,
  'inlineChatInput.focusBorder': palette.bordersFocus,
  'inlineChatInput.placeholderForeground': palette.textPlaceholder,
}
