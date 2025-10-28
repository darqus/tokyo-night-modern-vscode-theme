import { palette } from '../../palette'
import { alpha, lighten } from '../../utils/color'

export function generateListColors(): Record<string, string> {
  const { bg, fg, blue, yellow, interactive, special } = palette

  return {
    'list.dropBackground': bg.lightest,
    'list.deemphasizedForeground': fg.medium,
    'list.activeSelectionBackground': bg.lightest,
    'list.activeSelectionForeground': fg.brighter,
    'list.inactiveSelectionBackground': bg.lightest,
    'list.inactiveSelectionForeground': fg.brighter,
    'list.focusBackground': bg.lightest,
    'list.focusForeground': fg.brighter,
    'list.hoverBackground': interactive.hover,
    'list.hoverForeground': fg.brighter,
    'list.highlightForeground': interactive.highlight,
    'list.invalidItemForeground': interactive.invalid,
    'list.errorForeground': interactive.error,
    'list.warningForeground': yellow.muted,
    'listFilterWidget.background': bg.darker,
    'listFilterWidget.outline': blue.primary,
    'listFilterWidget.noMatchesOutline': interactive.errorOutline,
    'pickerGroup.foreground': fg.brighter,
    'pickerGroup.border': lighten(bg.lightest, 0.04),
    'scrollbarSlider.background': alpha(special.scrollbar, 0.04),
    'scrollbarSlider.hoverBackground': alpha(special.scrollbar, 0.06),
    'scrollbarSlider.activeBackground': alpha(special.scrollbar, 0.13),
  }
}
