import { c, colorRules } from '../../utils/color-builder.js'
import { darken, lighten } from '../../utils/index.js'

export function generateTabColors(): Record<string, string> {
  const { bg, fg, purple } = c

  return (
    colorRules()
      .addGroup('breadcrumb', {
        background: bg.main,
        foreground: fg.dark,
        focusForeground: fg.light,
        activeSelectionForeground: purple.main,
      })
      .add('breadcrumbPicker.background', darken(bg.main, 0.02))
      // Active tab states
      .add('tab.activeBackground', bg.main)
      .add('tab.activeForeground', fg.light)
      .add('tab.activeBorderTop', purple.main)
      .add('tab.activeModifiedBorder', purple.main)
      // Inactive tab states
      .add('tab.inactiveBackground', darken(bg.main, 0.03))
      .add('tab.inactiveForeground', fg.dark)
      .add('tab.inactiveModifiedBorder', lighten(bg.main, 0.04))
      // Hover states
      .add('tab.hoverForeground', fg.light)
      // Unfocused states
      .add('tab.unfocusedActiveForeground', fg.main)
      .add('tab.unfocusedInactiveForeground', fg.dark)
      .add('tab.unfocusedHoverForeground', fg.main)
      .add('tab.unfocusedActiveModifiedBorder', lighten(bg.main, 0.04))
      .add('tab.unfocusedInactiveModifiedBorder', lighten(bg.light, 0.02))
      .add('tab.unfocusedActiveBorder', lighten(bg.main, 0.04))
      // Other tab properties
      .add('tab.border', lighten(bg.light, 0.02))
      .add('tab.lastPinnedBorder', purple.main)
      .build()
  )
}
