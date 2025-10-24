import { palette } from '../../palette'
import { alpha } from '../../utils/color'
import { ensureContrast } from '../../utils/contrast'

export function generateCoreColors(): Record<string, string> {
  const { fg, bg, blue, ui, border } = palette

  return {
    foreground: ensureContrast(fg.medium, bg.main, 4.5),
    descriptionForeground: ensureContrast(fg.medium, bg.main, 4.5),
    disabledForeground: ensureContrast(
      palette.accessibility.contrast.medium,
      bg.main,
      4.5
    ),
    focusBorder: ensureContrast(border.ui, bg.main, 3.0),
    errorForeground: ensureContrast(
      palette.accessibility.semantic.error,
      bg.main,
      4.5
    ),
    'widget.shadow': alpha(ui.white, 0),
    'scrollbar.shadow': alpha(palette.ui.scrollbarShadow, 0.2),
    'badge.background': ensureContrast(palette.special.badge, bg.main, 3.0),
    'badge.foreground': ensureContrast(
      palette.ui.badgeForeground,
      palette.special.badge,
      4.5
    ),
    'icon.foreground': ensureContrast(fg.medium, bg.main, 4.5),
    'settings.headerForeground': ensureContrast(blue.light, bg.main, 4.5),
    'window.activeBorder': ensureContrast(bg.darkest, bg.main, 1.5),
    'window.inactiveBorder': ensureContrast(bg.darkest, bg.main, 1.5),
    'sash.hoverBorder': ensureContrast(border.ui, bg.main, 3.0),
    'toolbar.activeBackground': alpha(bg.lightest, 0.3), // Уменьшил непрозрачность для лучшего контраста
    'toolbar.hoverBackground': alpha(bg.lightest, 0.2), // Уменьшил непрозрачность для лучшего контраста
  }
}
