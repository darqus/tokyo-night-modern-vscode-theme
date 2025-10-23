import { palette } from '../../palette';
import { alpha } from '../../utils/color';

export function generateButtonColors(): Record<string, string> {
  const { blue, special } = palette;

  return {
    'extensionButton.prominentBackground': alpha(blue.primary, 0.87),
    'extensionButton.prominentHoverBackground': alpha(blue.primary, 0.67),
    'extensionButton.prominentForeground': '#ffffff',
    'extensionBadge.remoteBackground': blue.primary,
    'extensionBadge.remoteForeground': '#ffffff',
    'button.background': alpha(blue.primary, 0.87),
    'button.hoverBackground': alpha(blue.primary, 0.67),
    'button.secondaryBackground': special.inactive,
    'button.foreground': '#ffffff',
    'progressBar.background': blue.primary,
  };
}
