import { palette } from '../../palette'
import { alpha } from '../../utils/color'

export function generateCoreColors(): Record<string, string> {
  const { fg, bg, special, blue } = palette

  return {
    foreground: fg.medium,
    descriptionForeground: fg.dim,
    disabledForeground: special.disabled,
    focusBorder: alpha(special.disabled, 0.2),
    errorForeground: fg.dim,
    'widget.shadow': alpha('#ffffff', 0),
    'scrollbar.shadow': alpha('#000000', 0.2),
    'badge.background': alpha(special.badge, 0.19),
    'badge.foreground': '#acb0d0',
    'icon.foreground': fg.medium,
    'settings.headerForeground': blue.light,
    'window.activeBorder': bg.darkest,
    'window.inactiveBorder': bg.darkest,
    'sash.hoverBorder': special.border,
    'toolbar.activeBackground': bg.lightest,
    'toolbar.hoverBackground': bg.lightest,
  }
}
