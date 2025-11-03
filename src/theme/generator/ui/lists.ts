import { palette } from '../../palette'
import { alpha, lighten } from '../../utils/color'

export function generateListColors(): Record<string, string> {
  const { bg, fg, blue, yellow, interactive, special, purple } = palette

  return {
    'list.dropBackground': bg.lightest,
    'list.deemphasizedForeground': fg.medium,
    'list.activeSelectionBackground': alpha(purple.dark, 0.35),
    'list.activeSelectionForeground': fg.brightest,
    'list.inactiveSelectionBackground': alpha(purple.dark, 0.2),
    'list.inactiveSelectionForeground': fg.bright,
    'list.focusBackground': alpha(purple.dark, 0.35),
    'list.focusForeground': fg.brightest,
    'list.hoverBackground': alpha(purple.dark, 0.15),
    'list.hoverForeground': fg.bright,
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
