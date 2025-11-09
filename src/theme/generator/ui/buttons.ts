import { darken, mix } from '../../utils/color.js'
import { c, colorRules } from '../../utils/color-builder.js'
import { activeState, hoverState } from '../../utils/color-helpers.js'
import { ensureReadableForeground } from '../../utils/contrast-helpers.js'

export function generateButtonColors(): Record<string, string> {
  const baseBg = darken(c.blue.dark, 0.3)
  const ensuredBase = ensureReadableForeground(baseBg)
  const hoverCand = hoverState(ensuredBase.bg)
  const ensuredHover = ensureReadableForeground(hoverCand)
  const secondaryCand = darken(mix(ensuredBase.bg, c.purple.dark, 0.2), 0.4)
  const ensuredSecondary = ensureReadableForeground(secondaryCand)

  const extPromBase = darken(c.blue.dark, 0.3)
  const ensuredExtProm = ensureReadableForeground(extPromBase)
  const extPromHoverCand = activeState(ensuredExtProm.bg)
  const ensuredExtPromHover = ensureReadableForeground(extPromHoverCand)

  const extBadgeBase = darken(c.blue.dark, 0.3)
  const ensuredExtBadge = ensureReadableForeground(extBadgeBase)

  // Дополнительные производные с обеспечением контраста
  const ensuredButtonHoverFg = ensureReadableForeground(ensuredHover.bg).fg
  const ensuredToolbarFg = ensureReadableForeground(ensuredBase.bg).fg
  const ensuredActionBtnFg = ensureReadableForeground(ensuredBase.bg).fg
  const ensuredActionBtnHoverFg = ensureReadableForeground(ensuredHover.bg).fg

  return (
    colorRules()
      // Базовые стили кнопок с обеспечением контраста
      .addGroup('button', {
        background: ensuredBase.bg,
        hoverBackground: ensuredHover.bg,
        secondaryBackground: ensuredSecondary.bg,
        foreground: ensuredBase.fg,
        secondaryForeground: ensuredSecondary.fg,
        hoverForeground: ensuredButtonHoverFg,
      })
      // Workbench action buttons (потенциальный источник валидации "Button text")
      .add('workbench.actionButtons.foreground', ensuredActionBtnFg)
      .add('workbench.actionButtons.hoverForeground', ensuredActionBtnHoverFg)
      // Toolbar button
      .add('toolbar.button.foreground', ensuredToolbarFg)
      // Специфические компоненты: кнопки расширений
      .add('extensionButton.prominentBackground', ensuredExtProm.bg)
      .add('extensionButton.prominentHoverBackground', ensuredExtPromHover.bg)
      .add('extensionButton.prominentForeground', ensuredExtProm.fg)
      // Специфические компоненты: бейджи расширений
      .add('extensionBadge.remoteBackground', ensuredExtBadge.bg)
      .add('extensionBadge.remoteForeground', ensuredExtBadge.fg)
      // Специфические компоненты: прогресс бар
      .add('progressBar.background', ensuredBase.bg)
      .build()
  )
}
