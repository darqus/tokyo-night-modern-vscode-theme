import { palette } from '../../palette'
import { lighten } from '../../utils/color'
import { ensureContrast } from '../../utils/contrast'

export function generateTabColors(): Record<string, string> {
  const { bg, fg, blue, border } = palette

  return {
    'breadcrumb.background': bg.main,
    'breadcrumbPicker.background': bg.main,
    'breadcrumb.foreground': ensureContrast(fg.dim, bg.main, 3.0),
    'breadcrumb.focusForeground': ensureContrast(fg.brighter, bg.main, 4.5),
    'breadcrumb.activeSelectionForeground': ensureContrast(
      fg.brighter,
      bg.main,
      4.5
    ),
    'tab.activeBackground': bg.editor,
    'tab.inactiveBackground': lighten(bg.main, 0.04),
    'tab.activeForeground': ensureContrast(fg.brighter, bg.main, 4.5),
    'tab.hoverForeground': ensureContrast(fg.brighter, bg.main, 4.5),
    'tab.activeBorder': ensureContrast(blue.primary, bg.main, 3.0),
    'tab.inactiveForeground': ensureContrast(
      palette.accessibility.contrast.medium,
      bg.main,
      4.5
    ),
    'tab.border': ensureContrast(border.ui, bg.main, 2.0),
    'tab.unfocusedActiveForeground': ensureContrast(fg.brighter, bg.main, 4.0),
    'tab.unfocusedInactiveForeground': ensureContrast(
      palette.accessibility.contrast.medium,
      bg.main,
      4.5
    ),
    'tab.unfocusedHoverForeground': ensureContrast(fg.brighter, bg.main, 4.0),
    'tab.activeModifiedBorder': ensureContrast(bg.editor, bg.main, 2.0),
    'tab.inactiveModifiedBorder': ensureContrast(
      palette.interactive.tabInactiveModified,
      bg.main,
      2.5
    ),
    'tab.unfocusedActiveModifiedBorder': ensureContrast(
      blue.primary,
      bg.main,
      3.0
    ),
    'tab.unfocusedInactiveModifiedBorder': ensureContrast(
      border.ui,
      bg.main,
      2.0
    ),
    'tab.unfocusedActiveBorder': ensureContrast(
      palette.interactive.tabUnfocusedActive,
      bg.main,
      2.5
    ),
    'tab.lastPinnedBorder': ensureContrast(
      palette.interactive.tabLastPinned,
      bg.main,
      2.5
    ),
  }
}
