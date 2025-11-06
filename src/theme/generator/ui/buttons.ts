import { darken, mix } from '../../utils/color.js'
import { c, colorRules } from '../../utils/color-builder.js'
import { activeState, hoverState } from '../../utils/color-helpers.js'

export function generateButtonColors(): Record<string, string> {
  return (
    colorRules()
      // Базовые стили кнопок
      .addGroup('button', {
        background: c.blue.dark,
        hoverBackground: hoverState(c.blue.dark),
        secondaryBackground: darken(mix(c.blue.dark, c.purple.dark, 0.2), 0.4),
        foreground: c.ui.white,
      })
      // Специфические компоненты: кнопки расширений
      .add('extensionButton.prominentBackground', c.blue.dark)
      .add('extensionButton.prominentHoverBackground', activeState(c.blue.dark))
      .add('extensionButton.prominentForeground', c.ui.white)
      // Специфические компоненты: бейджи расширений
      .add('extensionBadge.remoteBackground', c.blue.dark)
      .add('extensionBadge.remoteForeground', c.ui.white)
      // Специфические компоненты: прогресс бар
      .add('progressBar.background', c.blue.dark)
      .build()
  )
}
