import { palette } from '../palette/index'

/**
 * Text UI элементы
 * Эти токены отвечают за оформление текстовых элементов в VS Code
 */
export const textColors = {
  'textBlockQuote.background': palette.backgrounds.elevated, // Замена для textBlockQuoteBg
  'textBlockQuote.border': palette.blue,
  'textCodeBlock.background': palette.backgrounds.elevated, // Замена для textCodeBlockBg
  'textLink.activeForeground': palette.yellow,
  'textLink.foreground': palette.cyan,
  'textPreformat.background': palette.backgrounds.elevated, // Замена для textPreformatBg
  'textPreformat.foreground': palette.blue,
  'textSeparator.foreground': palette.textSecondary, // Замена для foregroundAlt6
}
