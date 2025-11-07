import type { CompatiblePalette } from '../palette/index.js'
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
    foreground: (p: CompatiblePalette) => p.fg.light,
    descriptionForeground: (p: CompatiblePalette) => p.fg.main,
    disabledForeground: (p: CompatiblePalette) => p.neutral.main,
    focusBorder: (p: CompatiblePalette) => alpha(p.ui.badge, 0.3),
    errorForeground: (p: CompatiblePalette) => p.fg.dark,
    'icon.foreground': (p: CompatiblePalette) => p.fg.light,
  },
  groups: {
    widget: {
      shadow: (p: CompatiblePalette) => alpha(p.ui.black, 0.3),
    },
    scrollbar: {
      shadow: (p: CompatiblePalette) => alpha(p.ui.black, 0.2),
    },
    badge: {
      background: (p: CompatiblePalette) => p.ui.badge,
      foreground: (p: CompatiblePalette) => p.ui.white,
    },
    settings: {
      headerForeground: (p: CompatiblePalette) => p.neutral.light,
    },
    window: {
      activeBorder: (p: CompatiblePalette) => p.bg.dark,
      inactiveBorder: (p: CompatiblePalette) => p.bg.dark,
    },
    sash: {
      hoverBorder: (p: CompatiblePalette) => lightBackground(p.bg.light),
    },
    toolbar: {
      activeBackground: (p: CompatiblePalette) => p.bg.light,
      hoverBackground: (p: CompatiblePalette) => p.bg.light,
    },
  },
}

/**
 * Button colors - кнопки и прогресс-бары
 */
export const buttonsConfig: UIColorConfig = {
  groups: {
    button: {
      background: (p: CompatiblePalette) => p.blue.dark,
      hoverBackground: (p: CompatiblePalette) =>
        mixLight(p.blue.dark, p.blue.main),
      secondaryBackground: (p: CompatiblePalette) =>
        darken(mixLight(p.blue.dark, p.purple.dark), 0.4),
      foreground: (p: CompatiblePalette) => p.ui.white,
    },
    extensionButton: {
      prominentBackground: (p: CompatiblePalette) => p.blue.dark,
      prominentHoverBackground: (p: CompatiblePalette) =>
        mix(p.blue.dark, p.blue.main, 0.3),
      prominentForeground: (p: CompatiblePalette) => p.ui.white,
    },
    extensionBadge: {
      remoteBackground: (p: CompatiblePalette) => p.blue.dark,
      remoteForeground: (p: CompatiblePalette) => p.ui.white,
    },
    progressBar: {
      background: (p: CompatiblePalette) => p.blue.dark,
    },
  },
}

/**
 * Input colors - поля ввода и выпадающие списки
 */
export const inputsConfig: UIColorConfig = {
  groups: {
    input: {
      background: (p: CompatiblePalette) => p.bg.dark,
      foreground: (p: CompatiblePalette) => p.fg.light,
      border: (p: CompatiblePalette) => borderColor(p.bg.main, p.blue.main),
      placeholderForeground: (p: CompatiblePalette) => alpha(p.fg.main, 0.54),
    },
    inputOption: {
      activeForeground: (p: CompatiblePalette) => p.fg.light,
      activeBackground: (p: CompatiblePalette) => alpha(p.neutral.dark, 0.27),
    },
    quickInput: {
      background: (p: CompatiblePalette) => p.bg.main,
    },
    dropdown: {
      foreground: (p: CompatiblePalette) => p.fg.main,
      background: (p: CompatiblePalette) => p.bg.main,
      listBackground: (p: CompatiblePalette) => p.bg.main,
    },
  },
}

/**
 * Checkbox colors
 */
export const checkboxesConfig: UIColorConfig = {
  groups: {
    checkbox: {
      background: (p: CompatiblePalette) => p.bg.main,
      foreground: (p: CompatiblePalette) => p.fg.light,
      border: (p: CompatiblePalette) => borderColor(p.bg.main, p.blue.main),
    },
  },
}

/**
 * Sidebar colors - боковая панель и активити бар
 */
export const sidebarConfig: UIColorConfig = {
  groups: {
    activityBar: {
      background: (p: CompatiblePalette) => p.bg.dark,
      foreground: (p: CompatiblePalette) => p.fg.dark,
      inactiveForeground: (p: CompatiblePalette) =>
        mix(darken(p.fg.dark, 0.4), p.bg.dark, 0.2),
      activeBorder: (p: CompatiblePalette) => p.blue.main,
      activeBackground: (p: CompatiblePalette) => lighten(p.bg.dark, 0.03),
      border: (p: CompatiblePalette) => lightBackground(p.bg.dark),
    },
    activityBarBadge: {
      background: (p: CompatiblePalette) => p.ui.badge,
      foreground: (p: CompatiblePalette) => p.ui.white,
    },
    activityBarTop: {
      foreground: (p: CompatiblePalette) => p.fg.main,
      inactiveForeground: (p: CompatiblePalette) => p.fg.dark,
    },
    tree: {
      indentGuidesStroke: (p: CompatiblePalette) => lighten(p.bg.main, 0.08),
    },
    sideBar: {
      foreground: (p: CompatiblePalette) => p.fg.main,
      background: (p: CompatiblePalette) => lightBackground(p.bg.dark),
      border: (p: CompatiblePalette) => lighten(p.bg.dark, 0.04),
      dropBackground: (p: CompatiblePalette) => p.bg.light,
    },
    sideBarTitle: {
      foreground: (p: CompatiblePalette) => p.fg.dark,
    },
    sideBarSectionHeader: {
      background: (p: CompatiblePalette) => lighten(p.bg.dark, 0.04),
      foreground: (p: CompatiblePalette) => p.fg.dark,
      border: (p: CompatiblePalette) => lighten(p.bg.dark, 0.06),
    },
  },
}

/**
 * List colors - списки и селекторы
 */
export const listsConfig: UIColorConfig = {
  groups: {
    list: {
      dropBackground: (p: CompatiblePalette) => p.bg.light,
      deemphasizedForeground: (p: CompatiblePalette) => p.fg.main,
      activeSelectionBackground: (p: CompatiblePalette) =>
        subtleHighlight(p.blue.main),
      activeSelectionForeground: (p: CompatiblePalette) => p.fg.light,
      inactiveSelectionBackground: (p: CompatiblePalette) =>
        alpha(p.blue.main, 0.15),
      inactiveSelectionForeground: (p: CompatiblePalette) => p.fg.light,
      focusBackground: (p: CompatiblePalette) => alpha(p.blue.main, 0.25),
      focusForeground: (p: CompatiblePalette) => p.fg.light,
      hoverBackground: (p: CompatiblePalette) => alpha(p.blue.main, 0.1),
      hoverForeground: (p: CompatiblePalette) => p.fg.light,
      highlightForeground: (p: CompatiblePalette) => p.fg.light,
      invalidItemForeground: (p: CompatiblePalette) =>
        mix(p.orange.main, p.yellow.main, 0.3),
      errorForeground: (p: CompatiblePalette) => p.red.main,
      warningForeground: (p: CompatiblePalette) => p.yellow.dark,
    },
    listFilterWidget: {
      background: (p: CompatiblePalette) => p.bg.dark,
      outline: (p: CompatiblePalette) => p.blue.dark,
      noMatchesOutline: (p: CompatiblePalette) => p.red.dark,
    },
    pickerGroup: {
      foreground: (p: CompatiblePalette) => p.fg.light,
      border: (p: CompatiblePalette) => borderColor(p.bg.main, p.blue.main),
    },
    scrollbarSlider: {
      background: (p: CompatiblePalette) => alpha(p.fg.main, 0.04),
      hoverBackground: (p: CompatiblePalette) => subtleHighlight(p.blue.main),
      activeBackground: (p: CompatiblePalette) => mediumHighlight(p.blue.main),
    },
  },
}

/**
 * Tab colors - вкладки и breadcrumbs
 */
export const tabsConfig: UIColorConfig = {
  groups: {
    breadcrumb: {
      background: (p: CompatiblePalette) => p.bg.main,
      foreground: (p: CompatiblePalette) => p.fg.dark,
      focusForeground: (p: CompatiblePalette) => p.fg.light,
      activeSelectionForeground: (p: CompatiblePalette) => p.purple.main,
    },
    breadcrumbPicker: {
      background: (p: CompatiblePalette) => slightlyDarker(p.bg.main),
    },
    tab: {
      activeBackground: (p: CompatiblePalette) => p.bg.main,
      inactiveBackground: (p: CompatiblePalette) => darken(p.bg.main, 0.03),
      activeForeground: (p: CompatiblePalette) => p.fg.light,
      hoverForeground: (p: CompatiblePalette) => p.fg.light,
      activeBorderTop: (p: CompatiblePalette) => p.purple.main,
      inactiveForeground: (p: CompatiblePalette) => p.fg.dark,
      border: (p: CompatiblePalette) => lightBackground(p.bg.light),
      unfocusedActiveForeground: (p: CompatiblePalette) => p.fg.main,
      unfocusedInactiveForeground: (p: CompatiblePalette) => p.fg.dark,
      unfocusedHoverForeground: (p: CompatiblePalette) => p.fg.main,
      activeModifiedBorder: (p: CompatiblePalette) => p.purple.main,
      inactiveModifiedBorder: (p: CompatiblePalette) =>
        lighten(p.bg.main, 0.04),
      unfocusedActiveModifiedBorder: (p: CompatiblePalette) =>
        lighten(p.bg.main, 0.04),
      unfocusedInactiveModifiedBorder: (p: CompatiblePalette) =>
        lightBackground(p.bg.light),
      unfocusedActiveBorder: (p: CompatiblePalette) => lighten(p.bg.main, 0.04),
      lastPinnedBorder: (p: CompatiblePalette) => p.purple.main,
    },
  },
}

// Продолжение следует в следующем файле из-за размера...
