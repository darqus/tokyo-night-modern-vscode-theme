import { c, colorRules } from '../../utils/color-builder.js'
import { borderColor } from '../../utils/color-helpers.js'

export function generateListColors(): Record<string, string> {
  return colorRules()
    .addGroup('list', {
      dropBackground: c.bg.light,
      focusBackground: c.bg.dark,
      focusForeground: c.fg.bright,
      activeSelectionBackground: c.blue.main + '40',
      activeSelectionForeground: c.fg.bright,
      inactiveSelectionBackground: c.bg.light,
      inactiveSelectionForeground: c.fg.light,
      hoverBackground: c.bg.dark,
      hoverForeground: c.fg.bright,
      highlightForeground: c.blue.light,
      invalidItemForeground: c.red.main,
      errorForeground: c.red.main,
      warningForeground: c.yellow.main,
      filterMatchBackground: c.yellow.main + '80',
      filterMatchBorder: c.yellow.light,
      emphasizedForeground: c.blue.light,
      deemphasizedForeground: c.fg.dark,
    })
    .addGroup('tree', {
      indentGuidesStroke: c.neutral.dark,
      tableColumnsBorder: c.neutral.main,
      tableOddRowsBackground: c.bg.dark + '40',
    })
    .addGroup('pickerGroup', {
      foreground: c.blue.light,
      border: c.neutral.main,
    })
    .addGroup('quickInput', {
      background: c.bg.dark,
      foreground: c.fg.main,
      titleBackground: c.bg.main,
      listFocusBackground: c.bg.dark,
      listFocusForeground: c.fg.bright,
      listFocusIconForeground: c.blue.light,
      listHoverBackground: c.bg.main,
      listHoverForeground: c.fg.bright,
      listInactiveSelectionBackground: c.bg.light,
      listInactiveSelectionForeground: c.fg.main,
      listActiveSelectionBackground: c.blue.main + '40',
      listActiveSelectionForeground: c.fg.bright,
    })
    .addGroup('listFilterWidget', {
      background: c.bg.dark,
      outline: borderColor(c.bg.main, c.blue.main),
      noMatchesOutline: c.red.main,
      shadow: '#00000033',
    })
    .addGroup('dropdown', {
      background: c.bg.main,
      foreground: c.fg.main,
      border: borderColor(c.bg.main, c.blue.main),
      listBackground: c.bg.main,
    })
    .addGroup('settings', {
      headerBorder: c.neutral.main,
      focusedRowBackground: c.bg.dark,
      rowHoverBackground: c.bg.dark,
      focusedRowBorder: c.blue.main,
      headerForeground: c.blue.light,
      modifiedItemIndicator: c.orange.main,
      dropdownBackground: c.bg.main,
      dropdownForeground: c.fg.main,
      dropdownBorder: borderColor(c.bg.main, c.blue.main),
      dropdownListBorder: borderColor(c.bg.main, c.blue.main),
      checkboxBackground: c.bg.main,
      checkboxBorder: borderColor(c.bg.main, c.blue.main),
      checkboxForeground: c.fg.main,
      textInputBackground: c.bg.main,
      textInputForeground: c.fg.main,
      textInputBorder: borderColor(c.bg.main, c.blue.main),
      numberInputBackground: c.bg.main,
      numberInputForeground: c.fg.main,
      numberInputBorder: borderColor(c.bg.main, c.blue.main),
      extensionButtonProminentBackground: c.blue.main,
      extensionButtonProminentHoverBackground: c.blue.light,
      extensionButtonProminentForeground: c.ui.white,
    })
    .addGroup('keybindingLabel', {
      background: c.bg.main,
      foreground: c.fg.main,
      border: borderColor(c.bg.main, c.neutral.main),
      bottomBorder: borderColor(c.bg.main, c.neutral.main),
    })
    .addGroup('sash', {
      hoverBorder: c.blue.light,
    })
    .addGroup('scrollbar', {
      shadow: '#00000033',
      sliderBackground: c.neutral.dark + '80',
      sliderHoverBackground: c.neutral.main + '80',
      sliderActiveBackground: c.neutral.light + '80',
    })
    .addGroup('scrollbarSlider', {
      background: c.neutral.dark + '80',
      hoverBackground: c.neutral.main + '80',
      activeBackground: c.neutral.light + '80',
    })
    .build()
}
