import { palette } from '../../palette';
import { alpha } from '../../utils/color';

export function generateListColors(): Record<string, string> {
  const { bg, fg, blue, red, yellow } = palette;

  return {
    'list.dropBackground': bg.lighter,
    'list.deemphasizedForeground': fg.medium,
    'list.activeSelectionBackground': bg.lightest,
    'list.activeSelectionForeground': fg.brighter,
    'list.inactiveSelectionBackground': bg.light,
    'list.inactiveSelectionForeground': fg.brighter,
    'list.focusBackground': bg.light,
    'list.focusForeground': fg.brighter,
    'list.hoverBackground': '#13131a',
    'list.hoverForeground': fg.brighter,
    'list.highlightForeground': '#668ac4',
    'list.invalidItemForeground': '#c97018',
    'list.errorForeground': '#bb616b',
    'list.warningForeground': yellow.muted,
    'listFilterWidget.background': bg.darker,
    'listFilterWidget.outline': blue.primary,
    'listFilterWidget.noMatchesOutline': '#a6333f',
    'pickerGroup.foreground': fg.brighter,
    'pickerGroup.border': bg.darker,
    'scrollbarSlider.background': alpha(palette.special.scrollbar, 0.08),
    'scrollbarSlider.hoverBackground': alpha(palette.special.scrollbar, 0.06),
    'scrollbarSlider.activeBackground': alpha(palette.special.scrollbar, 0.13),
  };
}
