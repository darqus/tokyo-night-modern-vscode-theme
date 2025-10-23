import { palette } from '../../palette'
import { alpha } from '../../utils/color'

export function generateButtonColors(): Record<string, string> {
  const { blue, special, ui } = palette

  return {
    'extensionButton.prominentBackground': alpha(blue.primary, 0.87),
    'extensionButton.prominentHoverBackground': alpha(blue.primary, 0.67),
    'extensionButton.prominentForeground': ui.white,
    'extensionBadge.remoteBackground': blue.primary,
    'extensionBadge.remoteForeground': ui.white,
    'button.background': alpha(blue.primary, 0.87),
    'button.hoverBackground': alpha(blue.primary, 0.67),
    'button.secondaryBackground': special.inactive,
    'button.foreground': ui.white,
    'progressBar.background': blue.primary,
  }
}
