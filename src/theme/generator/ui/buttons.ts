import { palette } from '../../palette'
import { mix } from '../../utils/color'

export function generateButtonColors(): Record<string, string> {
  const { blue, special, ui } = palette

  return {
    'extensionButton.prominentBackground': special.badge,
    'extensionButton.prominentHoverBackground': mix(
      special.badge,
      blue.medium,
      0.3
    ),
    'extensionButton.prominentForeground': ui.white,
    'extensionBadge.remoteBackground': special.badge,
    'extensionBadge.remoteForeground': ui.white,
    'button.background': special.badge,
    'button.hoverBackground': mix(special.badge, blue.medium, 0.3),
    'button.secondaryBackground': special.inactive,
    'button.foreground': ui.white,
    'progressBar.background': blue.primary,
  }
}
