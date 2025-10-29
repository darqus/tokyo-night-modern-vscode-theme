import { palette } from '../../palette'
import { alpha, lighten } from '../../utils/color'

export function generateCoreColors(): Record<string, string> {
  const { fg, bg, special, blue, ui } = palette

  return {
    foreground: fg.bright,
    descriptionForeground: fg.medium,
    disabledForeground: special.disabled,
    focusBorder: alpha(blue.light, 0.3),
    errorForeground: fg.dim,
    'widget.shadow': alpha(ui.white, 0),
    'scrollbar.shadow': alpha(palette.ui.scrollbarShadow, 0.2),
    'badge.background': special.badge,
    'badge.foreground': ui.badgeForeground,
    'icon.foreground': fg.bright,
    'settings.headerForeground': blue.light,
    'window.activeBorder': bg.darkest,
    'window.inactiveBorder': bg.darkest,
    'sash.hoverBorder': lighten(bg.light, 0.02),
    'toolbar.activeBackground': bg.lightest,
    'toolbar.hoverBackground': bg.lightest,
  }
}
