import { palette } from '../../palette'
import { alpha } from '../../utils'

export function generateTabColors(): Record<string, string> {
  const { bg, fg, blue, special } = palette

  return {
    'breadcrumb.background': bg.main,
    'breadcrumbPicker.background': bg.main,
    'breadcrumb.foreground': fg.dim,
    'breadcrumb.focusForeground': fg.brighter,
    'breadcrumb.activeSelectionForeground': fg.brighter,
    'tab.activeBackground': bg.main,
    'tab.inactiveBackground': bg.main,
    'tab.activeForeground': fg.brighter,
    'tab.hoverForeground': fg.brighter,
    'tab.activeBorder': blue.primary,
    'tab.inactiveForeground': fg.medium,
    'tab.border': alpha(special.border, 0.5),
    'tab.unfocusedActiveForeground': fg.brighter,
    'tab.unfocusedInactiveForeground': fg.medium,
    'tab.unfocusedHoverForeground': fg.brighter,
    'tab.activeModifiedBorder': bg.editor,
    'tab.inactiveModifiedBorder': palette.interactive.tabInactiveModified,
    'tab.unfocusedActiveBorder': palette.interactive.tabUnfocusedActive,
    'tab.lastPinnedBorder': palette.interactive.tabLastPinned,
  }
}
