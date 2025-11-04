import { palette } from '../../palette/index.js'
import { darken, lighten } from '../../utils/index.js'

export function generateTabColors(): Record<string, string> {
  const { bg, fg, purple } = palette

  return {
    'breadcrumb.background': bg.main,
    'breadcrumbPicker.background': darken(bg.main, 0.02),
    'breadcrumb.foreground': fg.dark,
    'breadcrumb.focusForeground': fg.light,
    'breadcrumb.activeSelectionForeground': purple.main,
    'tab.activeBackground': bg.main,
    'tab.inactiveBackground': darken(bg.main, 0.03),
    'tab.activeForeground': fg.light,
    'tab.hoverForeground': fg.light,
    'tab.activeBorderTop': purple.main,
    'tab.inactiveForeground': fg.dark,
    'tab.border': lighten(bg.light, 0.02),
    'tab.unfocusedActiveForeground': fg.main,
    'tab.unfocusedInactiveForeground': fg.dark,
    'tab.unfocusedHoverForeground': fg.main,
    'tab.activeModifiedBorder': purple.main,
    'tab.inactiveModifiedBorder': lighten(bg.main, 0.04),
    'tab.unfocusedActiveModifiedBorder': lighten(bg.main, 0.04),
    'tab.unfocusedInactiveModifiedBorder': lighten(bg.light, 0.02),
    'tab.unfocusedActiveBorder': lighten(bg.main, 0.04),
    'tab.lastPinnedBorder': purple.main,
  }
}
