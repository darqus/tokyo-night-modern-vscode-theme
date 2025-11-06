import type { Palette } from '../palette/index.js'
import { alpha, darken, lighten, mix } from '../utils/color.js'
import {
  borderColor,
  lightBackground,
  mediumHighlight,
  mixLight,
  slightlyDarker,
  subtleHighlight,
} from '../utils/color-helpers.js'
import type { UIColorConfig } from './color-config-dsl.js'

/**
 * Core UI colors - базовые цвета интерфейса
 */
export const coreConfig: UIColorConfig = {
  rules: {
    foreground: (p: Palette) => p.fg.light,
    descriptionForeground: (p: Palette) => p.fg.main,
    disabledForeground: (p: Palette) => p.neutral.main,
    focusBorder: (p: Palette) => alpha(p.ui.badge, 0.3),
    errorForeground: (p: Palette) => p.fg.dark,
    'icon.foreground': (p: Palette) => p.fg.light,
  },
  groups: {
    widget: {
      shadow: (p: Palette) => alpha(p.ui.black, 0.3),
    },
    scrollbar: {
      shadow: (p: Palette) => alpha(p.ui.black, 0.2),
    },
    badge: {
      background: (p: Palette) => p.ui.badge,
      foreground: (p: Palette) => p.ui.white,
    },
    settings: {
      headerForeground: (p: Palette) => p.neutral.light,
    },
    window: {
      activeBorder: (p: Palette) => p.bg.dark,
      inactiveBorder: (p: Palette) => p.bg.dark,
    },
    sash: {
      hoverBorder: (p: Palette) => lightBackground(p.bg.light),
    },
    toolbar: {
      activeBackground: (p: Palette) => p.bg.light,
      hoverBackground: (p: Palette) => p.bg.light,
    },
  },
}

/**
 * Button colors - кнопки и прогресс-бары
 */
export const buttonsConfig: UIColorConfig = {
  groups: {
    button: {
      background: (p: Palette) => p.blue.dark,
      hoverBackground: (p: Palette) => mixLight(p.blue.dark, p.blue.main),
      secondaryBackground: (p: Palette) =>
        darken(mixLight(p.blue.dark, p.purple.dark), 0.4),
      foreground: (p: Palette) => p.ui.white,
    },
    extensionButton: {
      prominentBackground: (p: Palette) => p.blue.dark,
      prominentHoverBackground: (p: Palette) =>
        mix(p.blue.dark, p.blue.main, 0.3),
      prominentForeground: (p: Palette) => p.ui.white,
    },
    extensionBadge: {
      remoteBackground: (p: Palette) => p.blue.dark,
      remoteForeground: (p: Palette) => p.ui.white,
    },
    progressBar: {
      background: (p: Palette) => p.blue.dark,
    },
  },
}

/**
 * Input colors - поля ввода и выпадающие списки
 */
export const inputsConfig: UIColorConfig = {
  groups: {
    input: {
      background: (p: Palette) => p.bg.dark,
      foreground: (p: Palette) => p.fg.light,
      border: (p: Palette) => borderColor(p.bg.main, p.blue.main),
      placeholderForeground: (p: Palette) => alpha(p.fg.main, 0.54),
    },
    inputOption: {
      activeForeground: (p: Palette) => p.fg.light,
      activeBackground: (p: Palette) => alpha(p.neutral.dark, 0.27),
    },
    'inputValidation.info': {
      foreground: (p: Palette) => p.blue.light,
      background: (p: Palette) => alpha(p.neutral.dark, 0.36),
      border: (p: Palette) => borderColor(p.bg.main, p.blue.main),
    },
    'inputValidation.warning': {
      foreground: (p: Palette) => p.ui.black,
      background: (p: Palette) => p.yellow.dark,
      border: (p: Palette) => p.yellow.main,
    },
    'inputValidation.error': {
      foreground: (p: Palette) => p.blue.light,
      background: (p: Palette) => p.red.dark,
      border: (p: Palette) => p.red.dark,
    },
    quickInput: {
      background: (p: Palette) => p.bg.main,
    },
    dropdown: {
      foreground: (p: Palette) => p.fg.main,
      background: (p: Palette) => p.bg.main,
      listBackground: (p: Palette) => p.bg.main,
    },
  },
}

/**
 * Checkbox colors
 */
export const checkboxesConfig: UIColorConfig = {
  groups: {
    checkbox: {
      background: (p: Palette) => p.bg.main,
      foreground: (p: Palette) => p.fg.light,
      border: (p: Palette) => borderColor(p.bg.main, p.blue.main),
    },
  },
}

/**
 * Sidebar colors - боковая панель и активити бар
 */
export const sidebarConfig: UIColorConfig = {
  groups: {
    activityBar: {
      background: (p: Palette) => p.bg.dark,
      foreground: (p: Palette) => p.fg.dark,
      inactiveForeground: (p: Palette) =>
        mix(darken(p.fg.dark, 0.4), p.bg.dark, 0.2),
      activeBorder: (p: Palette) => p.blue.main,
      activeBackground: (p: Palette) => lighten(p.bg.dark, 0.03),
      border: (p: Palette) => lightBackground(p.bg.dark),
    },
    activityBarBadge: {
      background: (p: Palette) => p.ui.badge,
      foreground: (p: Palette) => p.ui.white,
    },
    activityBarTop: {
      foreground: (p: Palette) => p.fg.main,
      inactiveForeground: (p: Palette) => p.fg.dark,
    },
    tree: {
      indentGuidesStroke: (p: Palette) => lighten(p.bg.main, 0.08),
    },
    sideBar: {
      foreground: (p: Palette) => p.fg.main,
      background: (p: Palette) => lightBackground(p.bg.dark),
      border: (p: Palette) => lighten(p.bg.dark, 0.04),
      dropBackground: (p: Palette) => p.bg.light,
    },
    sideBarTitle: {
      foreground: (p: Palette) => p.fg.dark,
    },
    sideBarSectionHeader: {
      background: (p: Palette) => lighten(p.bg.dark, 0.04),
      foreground: (p: Palette) => p.fg.dark,
      border: (p: Palette) => lighten(p.bg.dark, 0.06),
    },
  },
}

/**
 * List colors - списки и селекторы
 */
export const listsConfig: UIColorConfig = {
  groups: {
    list: {
      dropBackground: (p: Palette) => p.bg.light,
      deemphasizedForeground: (p: Palette) => p.fg.main,
      activeSelectionBackground: (p: Palette) => subtleHighlight(p.blue.main),
      activeSelectionForeground: (p: Palette) => p.fg.light,
      inactiveSelectionBackground: (p: Palette) => alpha(p.blue.main, 0.15),
      inactiveSelectionForeground: (p: Palette) => p.fg.light,
      focusBackground: (p: Palette) => alpha(p.blue.main, 0.25),
      focusForeground: (p: Palette) => p.fg.light,
      hoverBackground: (p: Palette) => alpha(p.blue.main, 0.1),
      hoverForeground: (p: Palette) => p.fg.light,
      highlightForeground: (p: Palette) => p.fg.light,
      invalidItemForeground: (p: Palette) =>
        mix(p.orange.main, p.yellow.main, 0.3),
      errorForeground: (p: Palette) => p.red.main,
      warningForeground: (p: Palette) => p.yellow.dark,
    },
    listFilterWidget: {
      background: (p: Palette) => p.bg.dark,
      outline: (p: Palette) => p.blue.dark,
      noMatchesOutline: (p: Palette) => p.red.dark,
    },
    pickerGroup: {
      foreground: (p: Palette) => p.fg.light,
      border: (p: Palette) => borderColor(p.bg.main, p.blue.main),
    },
    scrollbarSlider: {
      background: (p: Palette) => alpha(p.fg.main, 0.04),
      hoverBackground: (p: Palette) => subtleHighlight(p.blue.main),
      activeBackground: (p: Palette) => mediumHighlight(p.blue.main),
    },
  },
}

/**
 * Tab colors - вкладки и breadcrumbs
 */
export const tabsConfig: UIColorConfig = {
  groups: {
    breadcrumb: {
      background: (p: Palette) => p.bg.main,
      foreground: (p: Palette) => p.fg.dark,
      focusForeground: (p: Palette) => p.fg.light,
      activeSelectionForeground: (p: Palette) => p.purple.main,
    },
    breadcrumbPicker: {
      background: (p: Palette) => slightlyDarker(p.bg.main),
    },
    tab: {
      activeBackground: (p: Palette) => p.bg.main,
      inactiveBackground: (p: Palette) => darken(p.bg.main, 0.03),
      activeForeground: (p: Palette) => p.fg.light,
      hoverForeground: (p: Palette) => p.fg.light,
      activeBorderTop: (p: Palette) => p.purple.main,
      inactiveForeground: (p: Palette) => p.fg.dark,
      border: (p: Palette) => lightBackground(p.bg.light),
      unfocusedActiveForeground: (p: Palette) => p.fg.main,
      unfocusedInactiveForeground: (p: Palette) => p.fg.dark,
      unfocusedHoverForeground: (p: Palette) => p.fg.main,
      activeModifiedBorder: (p: Palette) => p.purple.main,
      inactiveModifiedBorder: (p: Palette) => lighten(p.bg.main, 0.04),
      unfocusedActiveModifiedBorder: (p: Palette) => lighten(p.bg.main, 0.04),
      unfocusedInactiveModifiedBorder: (p: Palette) =>
        lightBackground(p.bg.light),
      unfocusedActiveBorder: (p: Palette) => lighten(p.bg.main, 0.04),
      lastPinnedBorder: (p: Palette) => p.purple.main,
    },
  },
}

// Продолжение следует в следующем файле из-за размера...
