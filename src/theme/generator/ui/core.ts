import { colorRules, c } from '../../utils/color-builder.js'
import {
  lightBackground,
  mediumHighlight,
  softShadow,
  subtleHighlight,
} from '../../utils/color-helpers.js'

export function generateCoreColors(): Record<string, string> {
  return colorRules()
    .add('foreground', c.fg.light)
    .add('descriptionForeground', c.fg.main)
    .add('disabledForeground', c.neutral.main)
    .add('focusBorder', mediumHighlight(c.ui.badge))
    .add('errorForeground', c.fg.dark)
    .add('widget.shadow', softShadow(c.ui.black))
    .add('scrollbar.shadow', subtleHighlight(c.ui.black))
    .addGroup('badge', {
      background: c.ui.badge,
      foreground: c.ui.white,
    })
    .add('icon.foreground', c.fg.light)
    .add('settings.headerForeground', c.neutral.light)
    .add('window.activeBorder', c.bg.dark)
    .add('window.inactiveBorder', c.bg.dark)
    .add('sash.hoverBorder', lightBackground(c.bg.light))
    .add('toolbar.activeBackground', c.bg.light)
    .add('toolbar.hoverBackground', c.bg.light)
    .build()
}
