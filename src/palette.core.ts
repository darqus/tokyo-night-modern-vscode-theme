import { basePalette } from './palette.base'
import { interfaceColors } from './palette.interface'

import { withAlpha, mix, lightenToward, darkenToward } from './utils/color'

/**
 * Ядро темы: только ссылки на базовую палитру и основные интерфейсные цвета.
 * Все остальные цвета должны быть производными через утилиты.
 */
export const core = {
  bg: {
    base: interfaceColors.editorBg,
    elevated: lightenToward(interfaceColors.editorBg, basePalette.black, 0.04),
    overlay: lightenToward(interfaceColors.editorBg, basePalette.black, 0.08),
    sunken: lightenToward(interfaceColors.editorBg, basePalette.black, 0.12),
    input: mix(interfaceColors.editorBg, basePalette.gray, 0.15),
    hover: lightenToward(interfaceColors.editorBg, basePalette.white, 0.1),
    active: lightenToward(interfaceColors.editorBg, basePalette.blue, 0.07),
    drop: darkenToward(interfaceColors.editorBg, basePalette.black, 0.12),
    lineHighlight: lightenToward(
      interfaceColors.editorBg,
      basePalette.blue,
      0.04
    ),
    bracketMatch: lightenToward(
      interfaceColors.editorBg,
      basePalette.cyan,
      0.06
    ),
    tabs: interfaceColors.editorBg,
    selection: {
      active: withAlpha(basePalette.blue, 0.18),
      inactive: withAlpha(basePalette.blue, 0.1),
      focus: withAlpha(basePalette.cyan, 0.18),
      menu: withAlpha(basePalette.cyan, 0.18),
    },
    stateLabel: darkenToward(interfaceColors.editorBg, basePalette.black, 0.06),
  },
  border: lightenToward(basePalette.black, basePalette.white, 0.09),
  // ...другие поля аналогично: только ссылки или производные через утилиты
  text: {
    primary: interfaceColors.editorFg,
    muted: mix(interfaceColors.editorFg, basePalette.gray, 0.3),
    subtle: basePalette.gray,
    inactive: mix(interfaceColors.editorFg, basePalette.gray, 0.5),
    soft: lightenToward(interfaceColors.editorFg, basePalette.white, 0.12),
    selection: basePalette.white,
    subtle2: mix(interfaceColors.editorFg, basePalette.gray, 0.4),
    gray600: darkenToward(basePalette.gray, basePalette.black, 0.2),
    comment: mix(interfaceColors.editorFg, basePalette.gray, 0.85),
    commentDoc: mix(interfaceColors.editorFg, basePalette.gray, 0.75),
    commentDocEmphasized: lightenToward(
      interfaceColors.editorFg,
      basePalette.gray,
      0.75
    ),
    preformat: lightenToward(interfaceColors.editorFg, basePalette.gray, 0.1),
    placeholder: mix(interfaceColors.editorFg, basePalette.gray, 0.5),
    editorLinkActive: lightenToward(
      interfaceColors.editorFg,
      basePalette.blue,
      0.18
    ),
  },
  accent: {
    blue: basePalette.blue,
    cyan: basePalette.cyan,
    teal: basePalette.teal,
    purple: basePalette.purple,
    magenta: basePalette.magenta,
    red: basePalette.red,
    green: basePalette.green,
    yellow: basePalette.yellow,
    orange: basePalette.orange,
  },
  brand: {
    button: {
      primary: mix(interfaceColors.editorBg, basePalette.blue, 0.25),
      hover: mix(interfaceColors.editorBg, basePalette.blue, 0.3),
    },
  },
  ui: {
    shadow: withAlpha(basePalette.blue, 0.2),
    selectionWash: withAlpha(basePalette.cyan, 0.18),
    scrollbarBase: mix(basePalette.blue, basePalette.gray, 0.4),
    tab: {
      activeModified: basePalette.purple,
      inactiveModified: basePalette.cyan,
      unfocusedActive: darkenToward(basePalette.blue, basePalette.black, 0.18),
    },
  },
} as const
