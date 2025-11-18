import { universalPalette } from '../../palette/index.js'
import { c, colorRules } from '../../utils/color-builder.js'
import { borderColor } from '../../utils/color-helpers.js'

export function generateListColors(): Record<string, string> {
  return colorRules()
    .addGroup('list', {
      dropBackground: c.bg.light,
      focusBackground: c.bg.dark,
      focusForeground: c.fg.light,
      activeSelectionBackground: `${c.indigo.main}40`,
      activeSelectionForeground: c.fg.light,
      inactiveSelectionBackground: c.bg.light,
      inactiveSelectionForeground: universalPalette.foreground.disabled.dark,
      hoverBackground: c.bg.dark,
      hoverForeground: c.fg.light,
      highlightForeground: c.indigo.light,
      invalidItemForeground: c.red.main,
      errorForeground: c.red.main,
      warningForeground: c.yellow.main,
      filterMatchBackground: `${c.yellow.main}80`,
      filterMatchBorder: c.yellow.light,
      emphasizedForeground: c.indigo.light,
      deemphasizedForeground: universalPalette.foreground.disabled.dark,
    })
    .addGroup('tree', {
      indentGuidesStroke: c.neutral.dark,
      tableColumnsBorder: c.neutral.main,
      tableOddRowsBackground: `${c.bg.dark}40`,
    })
    .addGroup('pickerGroup', {
      foreground: c.indigo.light,
      border: c.neutral.main,
    })
    .addGroup('quickInput', {
      background: c.bg.dark,
      foreground: c.fg.main,
      titleBackground: c.bg.main,
      listFocusBackground: c.bg.dark,
      listFocusForeground: c.fg.light,
      listFocusIconForeground: c.indigo.light,
      listHoverBackground: c.bg.main,
      listHoverForeground: c.fg.light,
      listInactiveSelectionBackground: c.bg.light,
      listInactiveSelectionForeground:
        universalPalette.foreground.disabled.dark,
      listActiveSelectionBackground: `${c.indigo.main}40`,
      listActiveSelectionForeground: c.fg.light,
    })
    .addGroup('listFilterWidget', {
      background: c.bg.dark,
      outline: borderColor(c.bg.main, c.indigo.main),
      noMatchesOutline: c.red.main,
      shadow: c.shadow.main,
    })
    .addGroup('dropdown', {
      background: c.bg.main,
      foreground: c.fg.main,
      border: borderColor(c.bg.main, c.indigo.main),
      listBackground: c.bg.main,
    })
    .addGroup('settings', {
      headerBorder: c.neutral.main,
      focusedRowBackground: c.bg.dark,
      rowHoverBackground: c.bg.dark,
      focusedRowBorder: c.indigo.main,
      headerForeground: c.indigo.light,
      modifiedItemIndicator: c.orange.main,
      dropdownBackground: c.bg.main,
      dropdownForeground: c.fg.main,
      dropdownBorder: borderColor(c.bg.main, c.indigo.main),
      dropdownListBorder: borderColor(c.bg.main, c.indigo.main),
      checkboxBackground: c.bg.main,
      checkboxBorder: borderColor(c.bg.main, c.indigo.main),
      checkboxForeground: c.fg.main,
      textInputBackground: c.bg.main,
      textInputForeground: c.fg.main,
      textInputBorder: borderColor(c.bg.main, c.indigo.main),
      numberInputBackground: c.bg.main,
      numberInputForeground: c.fg.main,
      numberInputBorder: borderColor(c.bg.main, c.indigo.main),
      extensionButtonProminentBackground: c.indigo.main,
      extensionButtonProminentHoverBackground: c.indigo.light,
      extensionButtonProminentForeground: c.ui.white,
    })
    .addGroup('keybindingLabel', {
      background: c.bg.main,
      foreground: c.fg.main,
      border: borderColor(c.bg.main, c.neutral.main),
      bottomBorder: borderColor(c.bg.main, c.neutral.main),
    })
    .addGroup('sash', {
      hoverBorder: c.indigo.light,
    })
    .addGroup('scrollbar', {
      shadow: c.shadow.main,
      sliderBackground: `${c.neutral.dark}80`,
      sliderHoverBackground: `${c.neutral.main}80`,
      sliderActiveBackground: `${c.neutral.light}80`,
    })
    .addGroup('scrollbarSlider', {
      background: `${c.neutral.dark}80`,
      hoverBackground: `${c.neutral.main}80`,
      activeBackground: `${c.neutral.light}80`,
    })
    .build()
}
