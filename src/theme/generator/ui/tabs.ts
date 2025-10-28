import { palette } from '../../palette'
import { lighten } from '../../utils'

export function generateTabColors(): Record<string, string> {
  const { bg, fg, blue } = palette

  return {
    'breadcrumb.background': bg.main,
    'breadcrumbPicker.background': bg.main,
    'breadcrumb.foreground': fg.dim,
    'breadcrumb.focusForeground': fg.brighter,
    'breadcrumb.activeSelectionForeground': fg.brighter,
    'tab.activeBackground': bg.main,
    'tab.inactiveBackground': bg.light,
    'tab.activeForeground': fg.brighter,
    'tab.hoverForeground': fg.brighter,
    'tab.activeBorderTop': blue.primary,
    'tab.inactiveForeground': fg.brighter,
    'tab.border': lighten(bg.light, 0.04),
    'tab.unfocusedActiveForeground': fg.brighter,
    'tab.unfocusedInactiveForeground': fg.brighter,
    'tab.unfocusedHoverForeground': fg.brighter,
    'tab.activeModifiedBorder': bg.editor,
    'tab.inactiveModifiedBorder': palette.interactive.tabInactiveModified,
    'tab.unfocusedActiveModifiedBorder': blue.primary,
    'tab.unfocusedInactiveModifiedBorder': lighten(bg.light, 0.04),
    'tab.unfocusedActiveBorder': palette.interactive.tabUnfocusedActive,
    'tab.lastPinnedBorder': palette.interactive.tabLastPinned,
  }
}
