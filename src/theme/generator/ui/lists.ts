import { palette } from '../../palette/index.js'
import { alpha, lighten, mix } from '../../utils/color.js'

export function generateListColors(): Record<string, string> {
  const { bg, fg, yellow, orange, red, blue } = palette

  return {
    'list.dropBackground': bg.light,
    'list.deemphasizedForeground': fg.main,
    'list.activeSelectionBackground': alpha(blue.main, 0.2),
    'list.activeSelectionForeground': fg.light,
    'list.inactiveSelectionBackground': alpha(blue.main, 0.15),
    'list.inactiveSelectionForeground': fg.light,
    'list.focusBackground': alpha(blue.main, 0.25),
    'list.focusForeground': fg.light,
    'list.hoverBackground': alpha(blue.main, 0.1),
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
    'scrollbarSlider.hoverBackground': alpha(blue.main, 0.2),
    'scrollbarSlider.activeBackground': alpha(blue.main, 0.3),
  }
}
