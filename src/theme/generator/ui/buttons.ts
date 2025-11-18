import { darken, mix } from '../../utils/color.js'
import { c, colorRules } from '../../utils/color-builder.js'
import { activeState, hoverState } from '../../utils/color-helpers.js'

export function generateButtonColors(): Record<string, string> {
  const baseBg = c.blue.dark
  const hoverBg = hoverState(baseBg)
  const secondaryBg = darken(mix(baseBg, c.purple.dark, 0.2), 0.4)

  const extPromBg = c.blue.dark
  const extPromHoverBg = activeState(extPromBg)

  const extBadgeBg = c.blue.dark

  const fg = c.fg.light

  return (
    colorRules()
      // Базовые стили кнопок
      .addGroup('button', {
        background: baseBg,
        hoverBackground: hoverBg,
        secondaryBackground: secondaryBg,
        foreground: fg,
        secondaryForeground: fg,
        hoverForeground: fg,
      })
      // Workbench action buttons
      .add('workbench.actionButtons.foreground', fg)
      .add('workbench.actionButtons.hoverForeground', fg)
      // Toolbar button
      .add('toolbar.button.foreground', fg)
      // Специфические компоненты: кнопки расширений
      .add('extensionButton.prominentBackground', extPromBg)
      .add('extensionButton.prominentHoverBackground', extPromHoverBg)
      .add('extensionButton.prominentForeground', fg)
      // Специфические компоненты: бейджи расширений
      .add('extensionBadge.remoteBackground', extBadgeBg)
      .add('extensionBadge.remoteForeground', fg)
      // Специфические компоненты: прогресс бар
      .add('progressBar.background', baseBg)
      .build()
  )
}
