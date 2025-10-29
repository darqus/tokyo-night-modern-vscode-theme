import { palette } from '../../palette'
import { darken } from '../../utils/color'

export function generateButtonColors(): Record<string, string> {
  const { blue, special, ui } = palette

  return {
    'extensionButton.prominentBackground': darken(blue.medium, 0.6),
    'extensionButton.prominentHoverBackground': darken(blue.medium, 0.5),
    'extensionButton.prominentForeground': ui.white,
    'extensionBadge.remoteBackground': special.badge,
    'extensionBadge.remoteForeground': ui.white,
    'button.background': darken(blue.medium, 0.6),
    'button.hoverBackground': darken(blue.medium, 0.5),
    'button.secondaryBackground': special.inactive,
    'button.foreground': ui.white,
    'progressBar.background': blue.primary,
  }
}
