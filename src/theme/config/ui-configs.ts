import type { UnifiedPalette } from '../palette/index.js'
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
    foreground: (p: UnifiedPalette) => p.foreground.light,
    descriptionForeground: (p: UnifiedPalette) => p.foreground.main,
    disabledForeground: (p: UnifiedPalette) => p.neutral.main,
    focusBorder: (p: UnifiedPalette) => alpha(p.ui.badge, 0.3),
    errorForeground: (p: UnifiedPalette) => p.foreground.dark,
    'icon.foreground': (p: UnifiedPalette) => p.foreground.light,
  },
  groups: {
    widget: {
      shadow: (p: UnifiedPalette) => alpha(p.ui.black, 0.3),
    },
    scrollbar: {
      shadow: (p: UnifiedPalette) => alpha(p.ui.black, 0.2),
    },
    badge: {
      background: (p: UnifiedPalette) => p.ui.badge,
      foreground: (p: UnifiedPalette) => p.ui.white,
    },
    settings: {
      headerForeground: (p: UnifiedPalette) => p.neutral.light,
    },
    window: {
      activeBorder: (p: UnifiedPalette) => p.background.dark,
      inactiveBorder: (p: UnifiedPalette) => p.background.dark,
    },
    sash: {
      hoverBorder: (p: UnifiedPalette) => lightBackground(p.background.light),
    },
    toolbar: {
      activeBackground: (p: UnifiedPalette) => p.background.light,
      hoverBackground: (p: UnifiedPalette) => p.background.light,
    },
  },
}

/**
 * Button colors - кнопки и прогресс-бары
 */
export const buttonsConfig: UIColorConfig = {
  groups: {
    button: {
      background: (p: UnifiedPalette) => p.blue.dark,
      hoverBackground: (p: UnifiedPalette) =>
        mixLight(p.blue.dark, p.blue.main),
      secondaryBackground: (p: UnifiedPalette) =>
        darken(mixLight(p.blue.dark, p.purple.dark), 0.4),
      foreground: (p: UnifiedPalette) => p.ui.white,
    },
    extensionButton: {
      prominentBackground: (p: UnifiedPalette) => p.blue.dark,
      prominentHoverBackground: (p: UnifiedPalette) =>
        mix(p.blue.dark, p.blue.main, 0.3),
      prominentForeground: (p: UnifiedPalette) => p.ui.white,
    },
    extensionBadge: {
      remoteBackground: (p: UnifiedPalette) => p.blue.dark,
      remoteForeground: (p: UnifiedPalette) => p.ui.white,
    },
    progressBar: {
      background: (p: UnifiedPalette) => p.blue.dark,
    },
  },
}

/**
 * Input colors - поля ввода и выпадающие списки
 */
export const inputsConfig: UIColorConfig = {
  groups: {
    input: {
      background: (p: UnifiedPalette) => p.background.dark,
      foreground: (p: UnifiedPalette) => p.foreground.light,
      border: (p: UnifiedPalette) =>
        borderColor(p.background.main, p.blue.main),
      placeholderForeground: (p: UnifiedPalette) =>
        alpha(p.foreground.main, 0.54),
    },
    inputOption: {
      activeForeground: (p: UnifiedPalette) => p.foreground.light,
      activeBackground: (p: UnifiedPalette) => alpha(p.neutral.dark, 0.27),
    },
    quickInput: {
      background: (p: UnifiedPalette) => p.background.main,
    },
    dropdown: {
      foreground: (p: UnifiedPalette) => p.foreground.main,
      background: (p: UnifiedPalette) => p.background.main,
      listBackground: (p: UnifiedPalette) => p.background.main,
    },
  },
}

/**
 * Checkbox colors
 */
export const checkboxesConfig: UIColorConfig = {
  groups: {
    checkbox: {
      background: (p: UnifiedPalette) => p.background.main,
      foreground: (p: UnifiedPalette) => p.foreground.light,
      border: (p: UnifiedPalette) =>
        borderColor(p.background.main, p.blue.main),
    },
  },
}

/**
 * Sidebar colors - боковая панель и активити бар
 */
export const sidebarConfig: UIColorConfig = {
  groups: {
    activityBar: {
      background: (p: UnifiedPalette) => p.background.dark,
      foreground: (p: UnifiedPalette) => p.foreground.dark,
      inactiveForeground: (p: UnifiedPalette) =>
        mix(darken(p.foreground.dark, 0.4), p.background.dark, 0.2),
      activeBorder: (p: UnifiedPalette) => p.blue.main,
      activeBackground: (p: UnifiedPalette) => lighten(p.background.dark, 0.03),
      border: (p: UnifiedPalette) => lightBackground(p.background.dark),
    },
    activityBarBadge: {
      background: (p: UnifiedPalette) => p.ui.badge,
      foreground: (p: UnifiedPalette) => p.ui.white,
    },
    activityBarTop: {
      foreground: (p: UnifiedPalette) => p.foreground.main,
      inactiveForeground: (p: UnifiedPalette) => p.foreground.dark,
    },
    tree: {
      indentGuidesStroke: (p: UnifiedPalette) =>
        lighten(p.background.main, 0.08),
    },
    sideBar: {
      foreground: (p: UnifiedPalette) => p.foreground.main,
      background: (p: UnifiedPalette) => lightBackground(p.background.dark),
      border: (p: UnifiedPalette) => lighten(p.background.dark, 0.04),
      dropBackground: (p: UnifiedPalette) => p.background.light,
    },
    sideBarTitle: {
      foreground: (p: UnifiedPalette) => p.foreground.dark,
    },
    sideBarSectionHeader: {
      background: (p: UnifiedPalette) => lighten(p.background.dark, 0.04),
      foreground: (p: UnifiedPalette) => p.foreground.dark,
      border: (p: UnifiedPalette) => lighten(p.background.dark, 0.06),
    },
  },
}

/**
 * List colors - списки и селекторы
 */
export const listsConfig: UIColorConfig = {
  groups: {
    list: {
      dropBackground: (p: UnifiedPalette) => p.background.light,
      deemphasizedForeground: (p: UnifiedPalette) => p.foreground.main,
      activeSelectionBackground: (p: UnifiedPalette) =>
        subtleHighlight(p.blue.main),
      activeSelectionForeground: (p: UnifiedPalette) => p.foreground.light,
      inactiveSelectionBackground: (p: UnifiedPalette) =>
        alpha(p.blue.main, 0.15),
      inactiveSelectionForeground: (p: UnifiedPalette) => p.foreground.light,
      focusBackground: (p: UnifiedPalette) => alpha(p.blue.main, 0.25),
      focusForeground: (p: UnifiedPalette) => p.foreground.light,
      hoverBackground: (p: UnifiedPalette) => alpha(p.blue.main, 0.1),
      hoverForeground: (p: UnifiedPalette) => p.foreground.light,
      highlightForeground: (p: UnifiedPalette) => p.foreground.light,
      invalidItemForeground: (p: UnifiedPalette) =>
        mix(p.orange.main, p.yellow.main, 0.3),
      errorForeground: (p: UnifiedPalette) => p.red.main,
      warningForeground: (p: UnifiedPalette) => p.yellow.dark,
    },
    listFilterWidget: {
      background: (p: UnifiedPalette) => p.background.dark,
      outline: (p: UnifiedPalette) => p.blue.dark,
      noMatchesOutline: (p: UnifiedPalette) => p.red.dark,
    },
    pickerGroup: {
      foreground: (p: UnifiedPalette) => p.foreground.light,
      border: (p: UnifiedPalette) =>
        borderColor(p.background.main, p.blue.main),
    },
    scrollbarSlider: {
      background: (p: UnifiedPalette) => alpha(p.foreground.main, 0.04),
      hoverBackground: (p: UnifiedPalette) => subtleHighlight(p.blue.main),
      activeBackground: (p: UnifiedPalette) => mediumHighlight(p.blue.main),
    },
  },
}

/**
 * Tab colors - вкладки и breadcrumbs
 */
export const tabsConfig: UIColorConfig = {
  groups: {
    breadcrumb: {
      background: (p: UnifiedPalette) => p.background.main,
      foreground: (p: UnifiedPalette) => p.foreground.dark,
      focusForeground: (p: UnifiedPalette) => p.foreground.light,
      activeSelectionForeground: (p: UnifiedPalette) => p.purple.main,
    },
    breadcrumbPicker: {
      background: (p: UnifiedPalette) => slightlyDarker(p.background.main),
    },
    tab: {
      activeBackground: (p: UnifiedPalette) => p.background.main,
      inactiveBackground: (p: UnifiedPalette) =>
        darken(p.background.main, 0.03),
      activeForeground: (p: UnifiedPalette) => p.foreground.light,
      hoverForeground: (p: UnifiedPalette) => p.foreground.light,
      activeBorderTop: (p: UnifiedPalette) => p.purple.main,
      inactiveForeground: (p: UnifiedPalette) => p.foreground.dark,
      border: (p: UnifiedPalette) => lightBackground(p.background.light),
      unfocusedActiveForeground: (p: UnifiedPalette) => p.foreground.main,
      unfocusedInactiveForeground: (p: UnifiedPalette) => p.foreground.dark,
      unfocusedHoverForeground: (p: UnifiedPalette) => p.foreground.main,
      activeModifiedBorder: (p: UnifiedPalette) => p.purple.main,
      inactiveModifiedBorder: (p: UnifiedPalette) =>
        lighten(p.background.main, 0.04),
      unfocusedActiveModifiedBorder: (p: UnifiedPalette) =>
        lighten(p.background.main, 0.04),
      unfocusedInactiveModifiedBorder: (p: UnifiedPalette) =>
        lightBackground(p.background.light),
      unfocusedActiveBorder: (p: UnifiedPalette) =>
        lighten(p.background.main, 0.04),
      lastPinnedBorder: (p: UnifiedPalette) => p.purple.main,
    },
  },
}

// Продолжение следует в следующем файле из-за размера...
