import type { UniversalPalette } from '../palette/index.js'
import { alpha, darken, lighten, mix } from '../utils/color.js'
import {
  borderColor,
  lightBackground,
  mediumHighlight,
  mixLight,
  slightlyDarker,
  subtleHighlight,
} from '../utils/color-helpers.js'
import { ensureReadableForeground } from '../utils/contrast-helpers.js'
import type { UIColorConfig } from './color-config-dsl.js'

/**
 * Core UI colors - базовые цвета интерфейса
 */
export const coreConfig: UIColorConfig = {
  rules: {
    foreground: (p: UniversalPalette) => p.foreground.primary.light,
    descriptionForeground: (p: UniversalPalette) => p.foreground.primary.main,
    disabledForeground: (p: UniversalPalette) => p.chromatic.neutral.main,
    focusBorder: (p: UniversalPalette) => alpha(p.ui.badge, 0.3),
    errorForeground: (p: UniversalPalette) => p.foreground.primary.dark,
    'icon.foreground': (p: UniversalPalette) => p.foreground.primary.light,
  },
  groups: {
    widget: {
      shadow: (p: UniversalPalette) => alpha(p.ui.black, 0.3),
    },
    scrollbar: {
      shadow: (p: UniversalPalette) => alpha(p.ui.black, 0.2),
    },
    badge: {
      background: (p: UniversalPalette) => p.ui.badge,
      foreground: (p: UniversalPalette) => p.ui.white,
    },
    settings: {
      headerForeground: (p: UniversalPalette) => p.chromatic.neutral.light,
    },
    window: {
      activeBorder: (p: UniversalPalette) => p.background.base.dark,
      inactiveBorder: (p: UniversalPalette) => p.background.base.dark,
    },
    sash: {
      hoverBorder: (p: UniversalPalette) =>
        lightBackground(p.background.base.light),
    },
    toolbar: {
      activeBackground: (p: UniversalPalette) => p.background.base.light,
      hoverBackground: (p: UniversalPalette) => p.background.base.light,
    },
  },
}

/**
 * Button colors - кнопки и прогресс-бары
 */
export const buttonsConfig: UIColorConfig = {
  groups: {
    button: {
      background: (p: UniversalPalette) => p.chromatic.blue.dark,
      hoverBackground: (p: UniversalPalette) =>
        mixLight(p.chromatic.blue.dark, p.chromatic.blue.main),
      secondaryBackground: (p: UniversalPalette) =>
        darken(mixLight(p.chromatic.blue.dark, p.chromatic.purple.dark), 0.4),
      foreground: (p: UniversalPalette) => {
        const bg = p.chromatic.blue.dark
        const { fg } = ensureReadableForeground(bg)
        return fg
      },
    },
    extensionButton: {
      prominentBackground: (p: UniversalPalette) => p.chromatic.blue.dark,
      prominentHoverBackground: (p: UniversalPalette) =>
        mix(p.chromatic.blue.dark, p.chromatic.blue.main, 0.3),
      prominentForeground: (p: UniversalPalette) => {
        const bg = p.chromatic.blue.dark
        const { fg } = ensureReadableForeground(bg)
        return fg
      },
    },
    extensionBadge: {
      remoteBackground: (p: UniversalPalette) => p.chromatic.blue.dark,
      remoteForeground: (p: UniversalPalette) => {
        const bg = p.chromatic.blue.dark
        const { fg } = ensureReadableForeground(bg)
        return fg
      },
    },
    progressBar: {
      background: (p: UniversalPalette) => p.chromatic.blue.dark,
    },
  },
}

/**
 * Input colors - поля ввода и выпадающие списки
 */
export const inputsConfig: UIColorConfig = {
  groups: {
    input: {
      background: (p: UniversalPalette) => p.background.base.dark,
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
      border: (p: UniversalPalette) =>
        borderColor(p.background.base.main, p.chromatic.blue.main),
      placeholderForeground: (p: UniversalPalette) =>
        alpha(p.foreground.primary.main, 0.54),
    },
    inputOption: {
      activeForeground: (p: UniversalPalette) => p.foreground.primary.light,
      activeBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.neutral.dark, 0.27),
    },
    quickInput: {
      background: (p: UniversalPalette) => p.background.base.main,
    },
    dropdown: {
      foreground: (p: UniversalPalette) => p.foreground.primary.main,
      background: (p: UniversalPalette) => p.background.base.main,
      listBackground: (p: UniversalPalette) => p.background.base.main,
    },
  },
}

/**
 * Checkbox colors
 */
export const checkboxesConfig: UIColorConfig = {
  groups: {
    checkbox: {
      background: (p: UniversalPalette) => p.background.base.main,
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
      border: (p: UniversalPalette) =>
        borderColor(p.background.base.main, p.chromatic.blue.main),
    },
  },
}

/**
 * Sidebar colors - боковая панель и активити бар
 */
export const sidebarConfig: UIColorConfig = {
  groups: {
    activityBar: {
      background: (p: UniversalPalette) => p.background.base.dark,
      foreground: (p: UniversalPalette) => p.foreground.primary.dark,
      inactiveForeground: (p: UniversalPalette) =>
        mix(
          darken(p.foreground.primary.dark, 0.4),
          p.background.base.dark,
          0.2
        ),
      activeBorder: (p: UniversalPalette) => p.chromatic.blue.main,
      activeBackground: (p: UniversalPalette) =>
        lighten(p.background.base.dark, 0.03),
      border: (p: UniversalPalette) => lightBackground(p.background.base.dark),
    },
    activityBarBadge: {
      background: (p: UniversalPalette) => p.ui.badge,
      foreground: (p: UniversalPalette) => p.ui.white,
    },
    activityBarTop: {
      foreground: (p: UniversalPalette) => p.foreground.primary.main,
      inactiveForeground: (p: UniversalPalette) => p.foreground.primary.dark,
    },
    tree: {
      indentGuidesStroke: (p: UniversalPalette) =>
        lighten(p.background.base.main, 0.08),
    },
    sideBar: {
      foreground: (p: UniversalPalette) => p.foreground.primary.main,
      background: (p: UniversalPalette) =>
        lightBackground(p.background.base.dark),
      border: (p: UniversalPalette) => lighten(p.background.base.dark, 0.04),
      dropBackground: (p: UniversalPalette) => p.background.base.light,
    },
    sideBarTitle: {
      foreground: (p: UniversalPalette) => p.foreground.primary.dark,
    },
    sideBarSectionHeader: {
      background: (p: UniversalPalette) =>
        lighten(p.background.base.dark, 0.04),
      foreground: (p: UniversalPalette) => p.foreground.primary.dark,
      border: (p: UniversalPalette) => lighten(p.background.base.dark, 0.06),
    },
  },
}

/**
 * List colors - списки и селекторы
 */
export const listsConfig: UIColorConfig = {
  groups: {
    list: {
      dropBackground: (p: UniversalPalette) => p.background.base.light,
      deemphasizedForeground: (p: UniversalPalette) =>
        p.foreground.primary.main,
      activeSelectionBackground: (p: UniversalPalette) =>
        subtleHighlight(p.chromatic.blue.main),
      activeSelectionForeground: (p: UniversalPalette) =>
        p.foreground.primary.light,
      inactiveSelectionBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.main, 0.15),
      inactiveSelectionForeground: (p: UniversalPalette) =>
        p.foreground.primary.light,
      focusBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.main, 0.25),
      focusForeground: (p: UniversalPalette) => p.foreground.primary.light,
      hoverBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.blue.main, 0.1),
      hoverForeground: (p: UniversalPalette) => p.foreground.primary.light,
      highlightForeground: (p: UniversalPalette) => p.foreground.primary.light,
      invalidItemForeground: (p: UniversalPalette) =>
        mix(p.chromatic.orange.main, p.chromatic.yellow.main, 0.3),
      errorForeground: (p: UniversalPalette) => p.chromatic.red.main,
      warningForeground: (p: UniversalPalette) => p.chromatic.yellow.dark,
    },
    listFilterWidget: {
      background: (p: UniversalPalette) => p.background.base.dark,
      outline: (p: UniversalPalette) => p.chromatic.blue.dark,
      noMatchesOutline: (p: UniversalPalette) => p.chromatic.red.dark,
    },
    pickerGroup: {
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
      border: (p: UniversalPalette) =>
        borderColor(p.background.base.main, p.chromatic.blue.main),
    },
    scrollbarSlider: {
      background: (p: UniversalPalette) =>
        alpha(p.foreground.primary.main, 0.04),
      hoverBackground: (p: UniversalPalette) =>
        subtleHighlight(p.chromatic.blue.main),
      activeBackground: (p: UniversalPalette) =>
        mediumHighlight(p.chromatic.blue.main),
    },
  },
}

/**
 * Tab colors - вкладки и breadcrumbs
 */
export const tabsConfig: UIColorConfig = {
  groups: {
    breadcrumb: {
      background: (p: UniversalPalette) => p.background.base.main,
      foreground: (p: UniversalPalette) => p.foreground.primary.dark,
      focusForeground: (p: UniversalPalette) => p.foreground.primary.light,
      activeSelectionForeground: (p: UniversalPalette) =>
        p.chromatic.purple.main,
    },
    breadcrumbPicker: {
      background: (p: UniversalPalette) =>
        slightlyDarker(p.background.base.main),
    },
    tab: {
      activeBackground: (p: UniversalPalette) => p.background.base.main,
      inactiveBackground: (p: UniversalPalette) =>
        darken(p.background.base.main, 0.03),
      activeForeground: (p: UniversalPalette) => p.foreground.primary.light,
      hoverForeground: (p: UniversalPalette) => p.foreground.primary.light,
      activeBorderTop: (p: UniversalPalette) => p.chromatic.purple.main,
      inactiveForeground: (p: UniversalPalette) => p.foreground.primary.dark,
      border: (p: UniversalPalette) => lightBackground(p.background.base.light),
      unfocusedActiveForeground: (p: UniversalPalette) =>
        p.foreground.primary.main,
      unfocusedInactiveForeground: (p: UniversalPalette) =>
        p.foreground.primary.dark,
      unfocusedHoverForeground: (p: UniversalPalette) =>
        p.foreground.primary.main,
      activeModifiedBorder: (p: UniversalPalette) => p.chromatic.purple.main,
      inactiveModifiedBorder: (p: UniversalPalette) =>
        lighten(p.background.base.main, 0.04),
      unfocusedActiveModifiedBorder: (p: UniversalPalette) =>
        lighten(p.background.base.main, 0.04),
      unfocusedInactiveModifiedBorder: (p: UniversalPalette) =>
        lightBackground(p.background.base.light),
      unfocusedActiveBorder: (p: UniversalPalette) =>
        lighten(p.background.base.main, 0.04),
      lastPinnedBorder: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
}

// Продолжение следует в следующем файле из-за размера...
