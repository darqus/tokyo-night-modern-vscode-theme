import { palette } from '../../palette'
import { alpha, lighten } from '../../utils/color'

export function generateCoreColors(): Record<string, string> {
  const { fg, bg, blue, ui, neutral } = palette

  return {
    foreground: fg.light,
    descriptionForeground: fg.main,
    disabledForeground: neutral.main,
    focusBorder: alpha(blue.light, 0.3),
    errorForeground: fg.dark,
    'widget.shadow': alpha(ui.black, 0.3),
    'scrollbar.shadow': alpha(ui.black, 0.2),
    'badge.background': ui.badge,
    'badge.foreground': ui.white,
    'icon.foreground': fg.light,
    'settings.headerForeground': blue.light,
    'window.activeBorder': bg.dark,
    'window.inactiveBorder': bg.dark,
    'sash.hoverBorder': lighten(bg.light, 0.02),
    'toolbar.activeBackground': bg.light,
    'toolbar.hoverBackground': bg.light,
  }
}
