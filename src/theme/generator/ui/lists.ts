import { palette } from '../../palette'
import { alpha, lighten } from '../../utils/color'

export function generateListColors(): Record<string, string> {
  const { bg, fg, blue, yellow, interactive, special } = palette

  return {
    'list.dropBackground': bg.lightest,
    'list.deemphasizedForeground': fg.medium,
    'list.activeSelectionBackground': alpha(blue.light, 0.3),
    'list.activeSelectionForeground': fg.brightest,
    'list.inactiveSelectionBackground': interactive.hover,
    'list.inactiveSelectionForeground': fg.bright,
    'list.focusBackground': alpha(blue.light, 0.3),
    'list.focusForeground': fg.brightest,
    'list.hoverBackground': lighten(bg.main, 0.03),
    'list.hoverForeground': fg.brightest,
    'list.highlightForeground': fg.brightest,
    'list.invalidItemForeground': interactive.invalid,
    'list.errorForeground': interactive.error,
    'list.warningForeground': yellow.muted,
    'listFilterWidget.background': bg.darker,
    'listFilterWidget.outline': blue.primary,
    'listFilterWidget.noMatchesOutline': interactive.errorOutline,
    'pickerGroup.foreground': fg.brighter,
    'pickerGroup.border': lighten(bg.lightest, 0.02),
    'scrollbarSlider.background': alpha(special.scrollbar, 0.04),
    'scrollbarSlider.hoverBackground': alpha(special.scrollbar, 0.06),
    'scrollbarSlider.activeBackground': alpha(special.scrollbar, 0.13),
  }
}
