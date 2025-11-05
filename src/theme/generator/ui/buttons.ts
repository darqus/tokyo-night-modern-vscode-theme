import { palette } from '../../palette/index.js'
import { mix } from '../../utils/color.js'

export function generateButtonColors(): Record<string, string> {
  const { blue, ui, bg } = palette

  return {
    'extensionButton.prominentBackground': blue.dark,
    'extensionButton.prominentHoverBackground': mix(blue.dark, blue.main, 0.3),
    'extensionButton.prominentForeground': ui.white,
    'extensionBadge.remoteBackground': blue.dark,
    'extensionBadge.remoteForeground': ui.white,
    'button.background': blue.dark,
    'button.hoverBackground': mix(blue.dark, blue.main, 0.2),
    'button.secondaryBackground': bg.light,
    'button.foreground': ui.white,
    'progressBar.background': blue.dark,
  }
}
