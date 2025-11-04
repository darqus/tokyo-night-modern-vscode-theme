import { palette } from '../../palette/index.js'
import { mix } from '../../utils/color.js'

export function generateButtonColors(): Record<string, string> {
  const { blue, ui, bg } = palette

  return {
    'extensionButton.prominentBackground': ui.badge,
    'extensionButton.prominentHoverBackground': mix(ui.badge, blue.main, 0.3),
    'extensionButton.prominentForeground': ui.white,
    'extensionBadge.remoteBackground': ui.badge,
    'extensionBadge.remoteForeground': ui.white,
    'button.background': ui.badge,
    'button.hoverBackground': mix(ui.badge, blue.main, 0.3),
    'button.secondaryBackground': bg.light,
    'button.foreground': ui.white,
    'progressBar.background': blue.dark,
  }
}
