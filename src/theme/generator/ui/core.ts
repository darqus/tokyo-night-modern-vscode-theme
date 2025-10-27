import { palette } from '../../palette'
import { alpha, lighten } from '../../utils/color'

export function generateCoreColors(): Record<string, string> {
  const { fg, bg, special, blue, ui } = palette

  return {
    foreground: fg.medium,
    descriptionForeground: fg.dim,
    disabledForeground: special.disabled,
    focusBorder: palette.border.ui,
    errorForeground: fg.dim,
    'widget.shadow': alpha(ui.white, 0),
    'scrollbar.shadow': alpha(palette.ui.scrollbarShadow, 0.2),
    'badge.background': special.badge,
    'badge.foreground': ui.badgeForeground,
    'icon.foreground': fg.medium,
    'settings.headerForeground': blue.light,
    'window.activeBorder': bg.darkest,
    'window.inactiveBorder': bg.darkest,
    'sash.hoverBorder': lighten(bg.light, 0.04),
    'toolbar.activeBackground': bg.lightest,
    'toolbar.hoverBackground': bg.lightest,
  }
}
