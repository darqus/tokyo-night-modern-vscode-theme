import { palette } from '../../palette/index.js'
import { darken, mix } from '../../utils/color.js'

export function generateButtonColors(): Record<string, string> {
  const { blue, ui, purple } = palette

  return {
    'extensionButton.prominentBackground': blue.dark,
    'extensionButton.prominentHoverBackground': mix(blue.dark, blue.main, 0.3),
    'extensionButton.prominentForeground': ui.white,
    'extensionBadge.remoteBackground': blue.dark,
    'extensionBadge.remoteForeground': ui.white,
    'button.background': blue.dark,
    'button.hoverBackground': mix(blue.dark, blue.main, 0.2),
    'button.secondaryBackground': darken(mix(blue.dark, purple.dark, 0.2), 0.4),
    'button.foreground': ui.white,
    'progressBar.background': blue.dark,
  }
}
