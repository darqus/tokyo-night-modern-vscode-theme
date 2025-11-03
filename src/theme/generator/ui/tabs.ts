import { palette } from '../../palette'
import { lighten } from '../../utils'

export function generateTabColors(): Record<string, string> {
  const { bg, fg, blue } = palette

  return {
    'breadcrumb.background': bg.main,
    'breadcrumbPicker.background': bg.main,
    'breadcrumb.foreground': fg.dark,
    'breadcrumb.focusForeground': fg.light,
    'breadcrumb.activeSelectionForeground': fg.light,
    'tab.activeBackground': bg.main,
    'tab.inactiveBackground': bg.light,
    'tab.activeForeground': fg.light,
    'tab.hoverForeground': fg.light,
    'tab.activeBorderTop': blue.dark,
    'tab.inactiveForeground': fg.main,
    'tab.border': lighten(bg.light, 0.02),
    'tab.unfocusedActiveForeground': fg.light,
    'tab.unfocusedInactiveForeground': fg.dark,
    'tab.unfocusedHoverForeground': fg.light,
    'tab.activeModifiedBorder': bg.light,
    'tab.inactiveModifiedBorder': lighten(bg.main, 0.04),
    'tab.unfocusedActiveModifiedBorder': blue.dark,
    'tab.unfocusedInactiveModifiedBorder': lighten(bg.light, 0.02),
    'tab.unfocusedActiveBorder': lighten(bg.main, 0.04),
    'tab.lastPinnedBorder': lighten(bg.main, 0.05),
  }
}
