import { palette } from '../../palette'
import { alpha, lighten, mix } from '../../utils/color'

export function generateListColors(): Record<string, string> {
  const { bg, fg, blue, yellow, purple, orange, red } = palette

  return {
    'list.dropBackground': bg.light,
    'list.deemphasizedForeground': fg.main,
    'list.activeSelectionBackground': alpha(purple.dark, 0.35),
    'list.activeSelectionForeground': fg.light,
    'list.inactiveSelectionBackground': alpha(purple.dark, 0.2),
    'list.inactiveSelectionForeground': fg.light,
    'list.focusBackground': alpha(purple.dark, 0.35),
    'list.focusForeground': fg.light,
    'list.hoverBackground': alpha(purple.dark, 0.15),
    'list.hoverForeground': fg.light,
    'list.highlightForeground': fg.light,
    'list.invalidItemForeground': mix(orange.main, yellow.main, 0.3),
    'list.errorForeground': red.dark,
    'list.warningForeground': yellow.dark,
    'listFilterWidget.background': bg.dark,
    'listFilterWidget.outline': blue.dark,
    'listFilterWidget.noMatchesOutline': red.dark,
    'pickerGroup.foreground': fg.light,
    'pickerGroup.border': lighten(bg.light, 0.02),
    'scrollbarSlider.background': alpha(fg.main, 0.04),
    'scrollbarSlider.hoverBackground': alpha(fg.main, 0.06),
    'scrollbarSlider.activeBackground': alpha(fg.main, 0.13),
  }
}
