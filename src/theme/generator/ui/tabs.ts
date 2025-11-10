import { universalPalette } from '../../palette/index.js'
import { c, colorRules } from '../../utils/color-builder.js'

export function generateTabColors(): Record<string, string> {
  return colorRules()
    .add('tab.unfocusedActiveForeground', c.fg.main)
    .add(
      'tab.unfocusedInactiveForeground',
      universalPalette.foreground.disabled.dark
    )
    .add('tab.unfocusedHoverForeground', c.fg.bright)
    .add('tab.activeModifiedBorder', c.blue.main)
    .add('tab.inactiveModifiedBorder', c.blue.dark)
    .add('tab.unfocusedActiveModifiedBorder', c.blue.dark)
    .add('tab.unfocusedInactiveModifiedBorder', c.blue.dark)
    .addGroup('tab', {
      activeBackground: c.bg.main,
      inactiveBackground: c.bg.dark,
      activeForeground: c.fg.bright,
      inactiveForeground: universalPalette.foreground.disabled.dark,
      hoverForeground: c.fg.bright,
      unFocusedHoverForeground: c.fg.main,
      hoverBackground: c.bg.light,
      unFocusedHoverBackground: c.bg.dark,
      hoverBorder: c.blue.main,
      unFocusedHoverBorder: c.neutral.main,
      activeBorder: c.bg.main,
      activeBorderTop: c.blue.main,
      inactiveBorder: c.bg.main,
      unFocusedActiveBorder: c.bg.main,
      unFocusedInactiveBorder: c.bg.main,
      unFocusedActiveBorderTop: c.neutral.main,
      unFocusedInactiveBorderTop: c.neutral.main,
      border: c.neutral.main,
      unfocusedActiveBorder: c.neutral.main,
      unfocusedInactiveBorder: c.neutral.main,
      unfocusedHoverBorder: c.neutral.main,
      lastPinnedBorder: c.neutral.dark,
      dragAndDropBorder: c.blue.light,
    })
    .addGroup('editorGroupHeader', {
      tabsBackground: c.bg.dark,
      tabsBorder: c.neutral.main,
      noTabsBackground: c.bg.main,
      border: c.neutral.main,
    })
    .addGroup('editorGroup', {
      border: c.neutral.main,
      dropBackground: `${c.blue.main}40`,
      emptyBackground: c.bg.main,
      focusedEmptyBorder: c.blue.main,
    })
    .addGroup('breadcrumb', {
      background: c.bg.dark,
      foreground: c.fg.main,
      focusForeground: c.fg.bright,
      activeSelectionForeground: c.blue.light,
      pickerBackground: c.bg.main,
      pickerForeground: c.fg.main,
      pickerBorder: c.neutral.main,
      pickerFocusForeground: c.blue.light,
      pickerFocusBackground: c.bg.dark,
    })
    .addGroup('breadcrumbPicker', {
      background: c.bg.dark,
    })
    .build()
}
