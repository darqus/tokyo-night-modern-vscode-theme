import { universalPalette } from '../../palette/index.js'
import { c, colorRules } from '../../utils/color-builder.js'
import { borderColor } from '../../utils/color-helpers.js'

export function generateCoreColors(): Record<string, string> {
  return colorRules()
    .add('foreground', c.fg.light)
    .add('descriptionForeground', c.fg.main)
    .add('disabledForeground', universalPalette.foreground.disabled.dark)
    .add('focusBorder', borderColor(c.bg.main, c.indigo.main))
    .add('errorForeground', c.red.main)
    .add('widget.shadow', c.shadow.main) // Using a standard shadow value
    .add('scrollbar.shadow', c.shadow.main) // Using a standard shadow value
    .addGroup('badge', {
      background: c.ui.badge,
      foreground: c.ui.white,
    })
    .addGroup('icon', {
      foreground: c.fg.main,
    })
    .addGroup('settings', {
      headerForeground: c.indigo.light,
    })
    .addGroup('window', {
      activeBorder: borderColor(c.bg.main, c.indigo.main),
      inactiveBorder: borderColor(c.bg.main, c.neutral.dark),
    })
    .addGroup('sash', {
      hoverBorder: c.indigo.light,
    })
    .addGroup('toolbar', {
      activeBackground: c.bg.dark,
      hoverBackground: c.bg.main,
    })
    .build()
}
