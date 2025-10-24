import { palette } from '../../palette'
import { alpha } from '../../utils/color'
import { ensureContrast } from '../../utils/contrast'

export function generateListColors(): Record<string, string> {
  const { bg, fg, blue, yellow, interactive, special, border } = palette

  // Улучшенные цвета для списков с обеспечением контрастности
  const enhancedActiveSelection = ensureContrast(bg.lightest, fg.brighter, 3.0)
  const enhancedInactiveSelection = ensureContrast(bg.light, fg.brighter, 2.5)
  const enhancedFocus = ensureContrast(bg.light, fg.brighter, 2.5)
  const enhancedHover = ensureContrast(interactive.hover, fg.brighter, 2.0)

  return {
    'list.dropBackground': alpha(bg.lighter, 0.3), // Уменьшил непрозрачность для лучшего контраста
    'list.deemphasizedForeground': ensureContrast(fg.medium, bg.main, 3.0),
    'list.activeSelectionBackground': alpha(enhancedActiveSelection, 0.4), // Увеличил непрозрачность
    'list.activeSelectionForeground': ensureContrast(
      fg.brighter,
      enhancedActiveSelection,
      4.5
    ),
    'list.inactiveSelectionBackground': alpha(enhancedInactiveSelection, 0.3), // Увеличил непрозрачность
    'list.inactiveSelectionForeground': ensureContrast(
      fg.brighter,
      enhancedInactiveSelection,
      4.5
    ),
    'list.focusBackground': alpha(enhancedFocus, 0.3), // Увеличил непрозрачность
    'list.focusForeground': ensureContrast(fg.brighter, enhancedFocus, 4.5),
    'list.hoverBackground': alpha(enhancedHover, 0.25), // Увеличил непрозрачность
    'list.hoverForeground': ensureContrast(fg.brighter, enhancedHover, 4.5),
    'list.highlightForeground': ensureContrast(
      interactive.highlight,
      bg.main,
      4.5
    ),
    'list.invalidItemForeground': ensureContrast(
      interactive.invalid,
      bg.main,
      4.5
    ),
    'list.errorForeground': ensureContrast(interactive.error, bg.main, 4.5),
    'list.warningForeground': ensureContrast(yellow.muted, bg.main, 4.5),
    'listFilterWidget.background': bg.darker,
    'listFilterWidget.outline': ensureContrast(blue.primary, bg.darker, 3.0),
    'listFilterWidget.noMatchesOutline': ensureContrast(
      interactive.errorOutline,
      bg.darker,
      3.0
    ),
    'pickerGroup.foreground': ensureContrast(fg.brighter, bg.main, 4.5),
    'pickerGroup.border': ensureContrast(border.ui, bg.main, 2.0),
    'scrollbarSlider.background': alpha(special.scrollbar, 0.15), // Увеличил непрозрачность
    'scrollbarSlider.hoverBackground': alpha(special.scrollbar, 0.2), // Увеличил непрозрачность
    'scrollbarSlider.activeBackground': alpha(special.scrollbar, 0.25), // Увеличил непрозрачность
  }
}
