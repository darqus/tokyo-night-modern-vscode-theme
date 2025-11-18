import type { UniversalPalette } from '../palette/universal-base.js'
import { alpha, darken, lighten, mix } from '../utils/color.js'
import {
  borderColor,
  lightBackground,
  mediumHighlight,
  mixLight,
  OPACITY,
  slightlyDarker,
  subtleHighlight,
} from '../utils/color-helpers.js'
import type { UIColorConfig } from './color-config-dsl.js'

/**
 * CORE UI CONFIGURATIONS
 */

/**
 * Core UI colors - базовые цвета интерфейса
 */
export const coreConfig: UIColorConfig = {
  rules: {
    foreground: (p: UniversalPalette) => p.foreground.primary.light,
    descriptionForeground: (p: UniversalPalette) => p.foreground.primary.main,
    disabledForeground: (p: UniversalPalette) => p.foreground.disabled.dark,
    focusBorder: (p: UniversalPalette) =>
      alpha(p.chromatic.indigo.main, OPACITY.STRONG),
    errorForeground: (p: UniversalPalette) => p.foreground.primary.dark,
    'icon.foreground': (p: UniversalPalette) => p.foreground.primary.light,
  },
  groups: {
    widget: {
      shadow: (p: UniversalPalette) => alpha(p.ui.black, OPACITY.STRONG),
    },
    scrollbar: {
      shadow: (p: UniversalPalette) => alpha(p.ui.black, OPACITY.MEDIUM),
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
      background: (p: UniversalPalette) => darken(p.chromatic.indigo.dark, 0.3),
      hoverBackground: (p: UniversalPalette) =>
        mixLight(darken(p.chromatic.indigo.dark, 0.3), p.chromatic.indigo.main),
      secondaryBackground: (p: UniversalPalette) =>
        darken(
          mixLight(
            darken(p.chromatic.indigo.dark, 0.3),
            p.chromatic.purple.dark
          ),
          0.4
        ),
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
      secondaryForeground: (p: UniversalPalette) => p.foreground.primary.light,
    },
    extensionButton: {
      prominentBackground: (p: UniversalPalette) =>
        darken(p.chromatic.indigo.dark, 0.3),
      prominentHoverBackground: (p: UniversalPalette) =>
        mix(darken(p.chromatic.indigo.dark, 0.3), p.chromatic.indigo.main, 0.3),
      prominentForeground: (p: UniversalPalette) => p.foreground.primary.light,
    },
    extensionBadge: {
      remoteBackground: (p: UniversalPalette) =>
        darken(p.chromatic.indigo.dark, 0.3),
      remoteForeground: (p: UniversalPalette) => p.foreground.primary.light,
    },
    progressBar: {
      background: (p: UniversalPalette) => darken(p.chromatic.indigo.dark, 0.3),
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
        borderColor(p.background.base.main, p.chromatic.indigo.main),
      placeholderForeground: (p: UniversalPalette) =>
        alpha(p.foreground.primary.main, OPACITY.VERY_STRONG),
    },
    inputOption: {
      activeForeground: (p: UniversalPalette) => p.foreground.primary.light,
      activeBackground: (p: UniversalPalette) =>
        darken(p.chromatic.indigo.dark, 0.3),
      activeBorder: (p: UniversalPalette) =>
        darken(p.chromatic.indigo.dark, 0.3),
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
        borderColor(p.background.base.main, p.chromatic.indigo.main),
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
      inactiveForeground: (p: UniversalPalette) => p.foreground.disabled.dark,
      activeBorder: (p: UniversalPalette) => p.chromatic.indigo.main,
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
      inactiveForeground: (p: UniversalPalette) => p.foreground.disabled.dark,
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
        subtleHighlight(p.chromatic.indigo.main),
      activeSelectionForeground: (p: UniversalPalette) =>
        p.foreground.primary.light,
      inactiveSelectionBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.main, OPACITY.LIGHT),
      inactiveSelectionForeground: (p: UniversalPalette) =>
        p.foreground.primary.light,
      focusBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.main, OPACITY.MEDIUM),
      focusForeground: (p: UniversalPalette) => p.foreground.primary.light,
      hoverBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.main, OPACITY.SUBTLE),
      hoverForeground: (p: UniversalPalette) => p.foreground.primary.light,
      highlightForeground: (p: UniversalPalette) => p.foreground.primary.light,
      invalidItemForeground: (p: UniversalPalette) =>
        mix(p.chromatic.orange.main, p.chromatic.yellow.main, 0.3),
      errorForeground: (p: UniversalPalette) => p.chromatic.red.main,
      warningForeground: (p: UniversalPalette) => p.chromatic.yellow.dark,
    },
    listFilterWidget: {
      background: (p: UniversalPalette) => p.background.base.dark,
      outline: (p: UniversalPalette) => p.chromatic.indigo.dark,
      noMatchesOutline: (p: UniversalPalette) => p.chromatic.red.dark,
    },
    pickerGroup: {
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
      border: (p: UniversalPalette) =>
        borderColor(p.background.base.main, p.chromatic.indigo.main),
    },
    scrollbarSlider: {
      background: (p: UniversalPalette) =>
        alpha(p.foreground.primary.main, OPACITY.VERY_SUBTLE),
      hoverBackground: (p: UniversalPalette) =>
        subtleHighlight(p.chromatic.indigo.main),
      activeBackground: (p: UniversalPalette) =>
        mediumHighlight(p.chromatic.indigo.main),
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
      inactiveForeground: (p: UniversalPalette) => p.foreground.disabled.dark,
      border: (p: UniversalPalette) => lightBackground(p.background.base.light),
      unfocusedActiveForeground: (p: UniversalPalette) =>
        p.foreground.primary.main,
      unfocusedInactiveForeground: (p: UniversalPalette) =>
        p.foreground.disabled.dark,
      unfocusedHoverForeground: (p: UniversalPalette) =>
        p.foreground.primary.main,
      activeModifiedBorder: (p: UniversalPalette) => p.chromatic.purple.main,
      inactiveModifiedBorder: (p: UniversalPalette) =>
        lighten(p.background.base.main, 0.04),
      unfocusedActiveModifiedBorder: (p: UniversalPalette) =>
        lighten(p.background.base.main, 0.04),
      unfocusedInactiveModifiedBorder: (p: UniversalPalette) =>
        p.foreground.disabled.dark,
      unfocusedActiveBorder: (p: UniversalPalette) =>
        lighten(p.background.base.main, 0.04),
      lastPinnedBorder: (p: UniversalPalette) => p.chromatic.purple.main,
    },
  },
}

/**
 * EDITOR CONFIGURATIONS
 */

/**
 * Editor colors - основной редактор кода (самый большой блок)
 */
export const editorConfig: UIColorConfig = {
  rules: {
    'selection.background': (p: UniversalPalette) =>
      subtleHighlight(p.chromatic.indigo.main),
    'editorLink.activeForeground': (p: UniversalPalette) =>
      p.foreground.primary.light,
  },
  groups: {
    editor: {
      background: (p: UniversalPalette) =>
        lighten(p.background.base.main, 0.02),
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
      foldBackground: (p: UniversalPalette) =>
        alpha(p.background.base.dark, OPACITY.MEDIUM),
      selectionBackground: (p: UniversalPalette) =>
        subtleHighlight(p.chromatic.indigo.main),
      inactiveSelectionBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.main, OPACITY.LIGHT),
      findMatchBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.dark, OPACITY.MEDIUM),
      findMatchBorder: (p: UniversalPalette) =>
        alpha(p.chromatic.yellow.main, OPACITY.VERY_STRONG),
      findMatchHighlightBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.dark, OPACITY.MEDIUM),
      findRangeHighlightBackground: (p: UniversalPalette) =>
        subtleHighlight(p.chromatic.indigo.main),
      rangeHighlightBackground: (p: UniversalPalette) =>
        subtleHighlight(p.chromatic.teal.main),
      wordHighlightBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.main, OPACITY.MEDIUM),
      wordHighlightStrongBackground: (p: UniversalPalette) =>
        mediumHighlight(p.chromatic.indigo.main),
      selectionHighlightBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.main, OPACITY.MEDIUM),
      lineHighlightBackground: (p: UniversalPalette) => p.background.base.light,
      stackFrameHighlightBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.yellow.dark, OPACITY.LIGHT),
      focusedStackFrameHighlightBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.teal.main, OPACITY.LIGHT),
    },
    editorCursor: {
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
    },
    editorStickyScrollHover: {
      background: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.main, OPACITY.SUBTLE),
    },
    editorIndentGuide: {
      background1: (p: UniversalPalette) =>
        lighten(p.background.base.main, 0.05),
      activeBackground1: (p: UniversalPalette) =>
        mix(p.chromatic.neutral.dark, p.background.base.main, 0.7),
    },
    editorLineNumber: {
      foreground: (p: UniversalPalette) =>
        mix(p.chromatic.neutral.dark, p.background.base.main, 0.65),
      activeForeground: (p: UniversalPalette) =>
        mix(p.chromatic.neutral.dark, p.background.base.main, 0.05),
    },
    editorWhitespace: {
      foreground: (p: UniversalPalette) => lighten(p.ui.badge, 0.08),
    },
    editorMarkerNavigation: {
      background: (p: UniversalPalette) => p.background.base.main,
    },
    editorHoverWidget: {
      background: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.indigo.main, 0.1),
      border: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.indigo.main, 0.25),
    },
    editorBracketMatch: {
      background: (p: UniversalPalette) => p.background.base.main,
      border: (p: UniversalPalette) => lightBackground(p.background.base.main),
    },
    editorBracketHighlight: {
      foreground1: (p: UniversalPalette) => p.chromatic.orange.light,
      foreground2: (p: UniversalPalette) => p.chromatic.pink.light,
      foreground3: (p: UniversalPalette) => p.chromatic.red.light,
      foreground4: (p: UniversalPalette) => p.chromatic.yellow.light,
      foreground5: (p: UniversalPalette) => p.chromatic.pink.light,
      foreground6: (p: UniversalPalette) => p.chromatic.lime.main,
      'unexpectedBracket.foreground': (p: UniversalPalette) =>
        p.chromatic.red.main,
    },
    editorBracketPairGuide: {
      activeBackground1: (p: UniversalPalette) => p.chromatic.orange.light,
      activeBackground2: (p: UniversalPalette) => p.chromatic.pink.light,
      activeBackground3: (p: UniversalPalette) => p.chromatic.red.light,
      activeBackground4: (p: UniversalPalette) => p.chromatic.yellow.light,
      activeBackground5: (p: UniversalPalette) => p.chromatic.pink.light,
      activeBackground6: (p: UniversalPalette) => p.chromatic.lime.main,
    },
    editorOverviewRuler: {
      border: (p: UniversalPalette) => lightBackground(p.background.base.light),
      errorForeground: (p: UniversalPalette) => p.chromatic.red.main,
      warningForeground: (p: UniversalPalette) => p.chromatic.yellow.main,
      infoForeground: (p: UniversalPalette) =>
        mix(p.chromatic.teal.main, p.chromatic.green.main, 0.3),
      bracketMatchForeground: (p: UniversalPalette) => p.background.base.dark,
      findMatchForeground: (p: UniversalPalette) =>
        alpha(p.chromatic.neutral.light, OPACITY.STRONG),
      rangeHighlightForeground: (p: UniversalPalette) =>
        alpha(p.chromatic.teal.main, OPACITY.STRONG),
      selectionHighlightForeground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.main, OPACITY.MEDIUM),
      wordHighlightForeground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.main, OPACITY.STRONG),
      wordHighlightStrongForeground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.main, OPACITY.VERY_STRONG),
      modifiedForeground: (p: UniversalPalette) =>
        mix(p.chromatic.neutral.main, p.background.base.main, 0.65),
      addedForeground: (p: UniversalPalette) =>
        mix(p.chromatic.teal.main, p.background.base.main, 0.8),
      deletedForeground: (p: UniversalPalette) =>
        mix(p.chromatic.red.main, p.background.base.main, 0.7),
    },
    editorRuler: {
      foreground: (p: UniversalPalette) => p.background.base.dark,
    },
    editorError: {
      foreground: (p: UniversalPalette) => p.chromatic.red.main,
    },
    editorWarning: {
      foreground: (p: UniversalPalette) => p.chromatic.yellow.main,
    },
    editorInfo: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
    editorHint: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
    editorGutter: {
      modifiedBackground: (p: UniversalPalette) =>
        mix(p.chromatic.neutral.main, p.background.base.main, 0.65),
      addedBackground: (p: UniversalPalette) =>
        mix(p.chromatic.teal.main, p.background.base.main, 0.8),
      deletedBackground: (p: UniversalPalette) =>
        mix(p.chromatic.red.main, p.background.base.main, 0.7),
    },
    editorGhostText: {
      foreground: (p: UniversalPalette) => p.chromatic.neutral.dark,
    },
    minimapGutter: {
      modifiedBackground: (p: UniversalPalette) =>
        mix(p.chromatic.neutral.main, p.background.base.main, 0.6),
      addedBackground: (p: UniversalPalette) =>
        mix(p.chromatic.teal.main, p.background.base.main, 0.75),
      deletedBackground: (p: UniversalPalette) =>
        mix(p.chromatic.red.main, p.background.base.main, 0.6),
    },
    editorGroup: {
      border: (p: UniversalPalette) => lightBackground(p.background.base.light),
      dropBackground: (p: UniversalPalette) =>
        lightBackground(p.background.base.light),
    },
    editorGroupHeader: {
      tabsBorder: (p: UniversalPalette) => p.background.base.dark,
      tabsBackground: (p: UniversalPalette) => p.background.base.main,
      noTabsBackground: (p: UniversalPalette) => p.background.base.main,
      border: (p: UniversalPalette) => lightBackground(p.background.base.main),
    },
    editorPane: {
      background: (p: UniversalPalette) => p.background.base.light,
    },
    editorWidget: {
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
      background: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.indigo.dark, 0.2),
      border: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.indigo.dark, 0.2),
      resizeBorder: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.indigo.dark, 0.2),
    },
    editorSuggestWidget: {
      background: (p: UniversalPalette) => p.background.base.dark,
      border: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.indigo.main, 0.2),
      selectedBackground: (p: UniversalPalette) =>
        mediumHighlight(p.chromatic.indigo.main),
      highlightForeground: (p: UniversalPalette) => p.chromatic.neutral.light,
    },
    editorCodeLens: {
      foreground: (p: UniversalPalette) => p.foreground.primary.dark,
    },
    editorLightBulb: {
      foreground: (p: UniversalPalette) => p.chromatic.yellow.main,
    },
    editorLightBulbAutoFix: {
      foreground: (p: UniversalPalette) => p.chromatic.yellow.main,
    },
    editorInlayHint: {
      foreground: (p: UniversalPalette) => p.chromatic.neutral.main,
    },
    peekView: {
      border: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.indigo.main, 0.2),
    },
    peekViewEditor: {
      background: (p: UniversalPalette) => p.background.base.main,
      matchHighlightBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.neutral.light, OPACITY.STRONG),
    },
    peekViewTitle: {
      background: (p: UniversalPalette) => p.background.base.dark,
    },
    peekViewTitleLabel: {
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
    },
    peekViewTitleDescription: {
      foreground: (p: UniversalPalette) => p.foreground.primary.main,
    },
    peekViewResult: {
      background: (p: UniversalPalette) => p.background.base.main,
      selectionForeground: (p: UniversalPalette) => p.foreground.primary.light,
      selectionBackground: (p: UniversalPalette) =>
        mediumHighlight(p.chromatic.indigo.main),
      lineForeground: (p: UniversalPalette) => p.foreground.primary.light,
      fileForeground: (p: UniversalPalette) => p.foreground.primary.main,
      matchHighlightBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.neutral.light, OPACITY.STRONG),
    },
  },
}

/**
 * PANEL CONFIGURATIONS
 */

/**
 * Panel colors - нижние панели (статус бар, тайтл бар)
 */
export const panelsConfig: UIColorConfig = {
  groups: {
    panel: {
      background: (p: UniversalPalette) =>
        slightlyDarker(p.background.base.main),
      border: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.indigo.main, 0.2),
    },
    panelTitle: {
      activeForeground: (p: UniversalPalette) => p.foreground.primary.dark,
      inactiveForeground: (p: UniversalPalette) => p.foreground.disabled.dark,
      activeBorder: (p: UniversalPalette) => p.chromatic.indigo.main,
    },
    panelInput: {
      border: (p: UniversalPalette) => lightBackground(p.background.base.main),
    },
    panelStickyScroll: {
      background: (p: UniversalPalette) => p.background.base.light,
    },
    statusBar: {
      foreground: (p: UniversalPalette) => p.foreground.primary.dark,
      background: (p: UniversalPalette) => p.background.base.dark,
      border: (p: UniversalPalette) => lightBackground(p.background.base.dark),
      focusBorder: (p: UniversalPalette) => p.chromatic.indigo.main,
      noFolderBackground: (p: UniversalPalette) => p.background.base.dark,
      debuggingBackground: (p: UniversalPalette) =>
        mix(p.chromatic.purple.dark, p.background.base.dark, 0.5),
      debuggingForeground: (p: UniversalPalette) => p.foreground.primary.dark,
    },
    statusBarItem: {
      activeBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.main, OPACITY.MEDIUM),
      hoverBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.main, OPACITY.LIGHT),
      prominentBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.main, OPACITY.MEDIUM),
      prominentHoverBackground: (p: UniversalPalette) =>
        mediumHighlight(p.chromatic.indigo.main),
      focusBorder: (p: UniversalPalette) => p.chromatic.indigo.main,
      remoteBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.main, OPACITY.MEDIUM),
      remoteHoverForeground: (p: UniversalPalette) =>
        p.foreground.primary.bright,
    },
    titleBar: {
      activeForeground: (p: UniversalPalette) => p.foreground.primary.dark,
      inactiveForeground: (p: UniversalPalette) => p.foreground.disabled.dark,
      activeBackground: (p: UniversalPalette) => p.background.base.main,
      inactiveBackground: (p: UniversalPalette) =>
        darken(p.background.base.main, 0.03),
      border: (p: UniversalPalette) => lightBackground(p.background.base.main),
    },
  },
}

/**
 * TERMINAL CONFIGURATIONS
 */

/**
 * Terminal colors
 */
export const terminalConfig: UIColorConfig = {
  groups: {
    terminal: {
      background: (p: UniversalPalette) => p.background.base.main,
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
      selectionBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.dark, OPACITY.STRONG),
      ansiBlack: (p: UniversalPalette) => p.background.base.dark,
      ansiRed: (p: UniversalPalette) => p.chromatic.red.main,
      ansiGreen: (p: UniversalPalette) => p.chromatic.green.main,
      ansiYellow: (p: UniversalPalette) => p.chromatic.yellow.main,
      ansiBlue: (p: UniversalPalette) => p.chromatic.indigo.main,
      ansiMagenta: (p: UniversalPalette) => p.chromatic.purple.light,
      ansiCyan: (p: UniversalPalette) => p.chromatic.cyan.light,
      ansiWhite: (p: UniversalPalette) => p.foreground.primary.main,
      ansiBrightBlack: (p: UniversalPalette) => p.chromatic.neutral.main,
      ansiBrightRed: (p: UniversalPalette) => p.chromatic.red.dark,
      ansiBrightGreen: (p: UniversalPalette) => p.chromatic.green.dark,
      ansiBrightYellow: (p: UniversalPalette) => p.chromatic.yellow.light,
      ansiBrightBlue: (p: UniversalPalette) => p.chromatic.indigo.light,
      ansiBrightMagenta: (p: UniversalPalette) => p.chromatic.purple.light,
      ansiBrightCyan: (p: UniversalPalette) => p.chromatic.cyan.light,
      ansiBrightWhite: (p: UniversalPalette) => p.foreground.primary.light,
    },
    terminalCursor: {
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
      background: (p: UniversalPalette) => p.background.base.light,
    },
  },
}

/**
 * GIT CONFIGURATIONS
 */

/**
 * Git colors - git декорации
 */
export const gitConfig: UIColorConfig = {
  groups: {
    gitDecoration: {
      modifiedResourceForeground: (p: UniversalPalette) =>
        p.chromatic.indigo.light,
      ignoredResourceForeground: (p: UniversalPalette) =>
        p.foreground.primary.dark,
      deletedResourceForeground: (p: UniversalPalette) => p.chromatic.red.dark,
      renamedResourceForeground: (p: UniversalPalette) => p.chromatic.teal.dark,
      addedResourceForeground: (p: UniversalPalette) => p.chromatic.teal.dark,
      untrackedResourceForeground: (p: UniversalPalette) =>
        p.chromatic.teal.dark,
      conflictingResourceForeground: (p: UniversalPalette) =>
        alpha(p.chromatic.yellow.main, OPACITY.MAXIMUM),
      stageDeletedResourceForeground: (p: UniversalPalette) =>
        p.chromatic.red.dark,
      stageModifiedResourceForeground: (p: UniversalPalette) =>
        p.chromatic.indigo.light,
    },
  },
}

/**
 * DIFF CONFIGURATIONS
 */

/**
 * Diff colors - различия в файлах
 */
export const diffConfig: UIColorConfig = {
  groups: {
    diffEditor: {
      insertedTextBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, OPACITY.LIGHT),
      removedTextBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.red.dark, OPACITY.LIGHT),
      insertedLineBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, OPACITY.LIGHT),
      removedLineBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.red.dark, OPACITY.LIGHT),
      diagonalFill: (p: UniversalPalette) =>
        lighten(p.background.base.main, 0.08),
      unchangedCodeBackground: (p: UniversalPalette) =>
        alpha(lighten(p.background.base.main, 0.06), OPACITY.STRONG),
    },
    diffEditorGutter: {
      insertedLineBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, OPACITY.LIGHT),
      removedLineBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.red.dark, OPACITY.LIGHT),
    },
    diffEditorOverview: {
      insertedForeground: (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, OPACITY.LIGHT),
      removedForeground: (p: UniversalPalette) =>
        alpha(p.chromatic.red.dark, OPACITY.LIGHT),
    },
    multiDiffEditor: {
      headerBackground: (p: UniversalPalette) => p.background.base.light,
      border: (p: UniversalPalette) => p.background.base.light,
    },
  },
}

/**
 * MISCELLANEOUS CONFIGURATIONS
 */

/**
 * Misc colors - разные UI компоненты (debug, notebook, charts, merge, menu, chat, etc.)
 */
export const miscConfig: UIColorConfig = {
  rules: {
    'textLink.foreground': (p: UniversalPalette) => p.chromatic.indigo.light,
    'textLink.activeForeground': (p: UniversalPalette) =>
      lighten(p.chromatic.indigo.light, 0.2),
    'textPreformat.foreground': (p: UniversalPalette) =>
      p.foreground.primary.main,
    'textSeparator.foreground': (p: UniversalPalette) =>
      lighten(p.background.base.main, 0.15),
  },
  groups: {
    walkThrough: {
      embeddedEditorBackground: (p: UniversalPalette) => p.background.base.main,
    },
    textBlockQuote: {
      background: (p: UniversalPalette) => p.background.base.main,
    },
    textCodeBlock: {
      background: (p: UniversalPalette) => p.background.base.main,
    },
    debugExceptionWidget: {
      border: (p: UniversalPalette) => p.chromatic.red.dark,
      background: (p: UniversalPalette) => p.background.base.dark,
    },
    debugToolBar: {
      background: (p: UniversalPalette) => p.background.base.dark,
    },
    debugConsole: {
      infoForeground: (p: UniversalPalette) => p.foreground.primary.main,
      errorForeground: (p: UniversalPalette) => p.chromatic.red.dark,
      sourceForeground: (p: UniversalPalette) => p.foreground.primary.main,
      warningForeground: (p: UniversalPalette) => p.chromatic.yellow.dark,
    },
    debugConsoleInputIcon: {
      foreground: (p: UniversalPalette) => p.chromatic.teal.main,
    },
    debugView: {
      stateLabelForeground: (p: UniversalPalette) => p.foreground.primary.main,
      stateLabelBackground: (p: UniversalPalette) => p.background.base.dark,
      valueChangedHighlight: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.dark, OPACITY.MAXIMUM),
    },
    debugTokenExpression: {
      name: (p: UniversalPalette) => p.chromatic.cyan.light,
      value: (p: UniversalPalette) => p.foreground.primary.light,
      string: (p: UniversalPalette) => p.chromatic.green.main,
      boolean: (p: UniversalPalette) => p.chromatic.orange.main,
      number: (p: UniversalPalette) => p.chromatic.orange.main,
      error: (p: UniversalPalette) => p.chromatic.red.dark,
    },
    debugIcon: {
      breakpointForeground: (p: UniversalPalette) => p.chromatic.red.dark,
      breakpointDisabledForeground: (p: UniversalPalette) =>
        p.background.base.light,
      breakpointUnverifiedForeground: (p: UniversalPalette) =>
        p.chromatic.red.dark,
    },
    notebook: {
      editorBackground: (p: UniversalPalette) => p.background.base.light,
      cellEditorBackground: (p: UniversalPalette) => p.background.base.main,
      cellBorderColor: (p: UniversalPalette) => p.background.base.dark,
      focusedCellBorder: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.indigo.main, 0.2),
      cellStatusBarItemHoverBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.main, OPACITY.LIGHT),
    },
    charts: {
      red: (p: UniversalPalette) => p.chromatic.red.main,
      blue: (p: UniversalPalette) => p.chromatic.blue.main,
      green: (p: UniversalPalette) => p.chromatic.green.main,
      orange: (p: UniversalPalette) => p.chromatic.orange.main,
      purple: (p: UniversalPalette) => p.chromatic.purple.main,
      yellow: (p: UniversalPalette) => p.chromatic.yellow.main,
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
      lines: (p: UniversalPalette) => p.background.base.main,
    },
    scmGraph: {
      historyItemHoverLabelForeground: (p: UniversalPalette) =>
        p.background.base.dark,
      foreground1: (p: UniversalPalette) => p.chromatic.indigo.main,
      foreground2: (p: UniversalPalette) => p.chromatic.purple.main,
      foreground3: (p: UniversalPalette) => p.chromatic.cyan.main,
      foreground4: (p: UniversalPalette) => p.chromatic.pink.main,
      foreground5: (p: UniversalPalette) => p.chromatic.pink.main,
      historyItemHoverAdditionsForeground: (p: UniversalPalette) =>
        p.chromatic.green.dark,
      historyItemHoverDeletionsForeground: (p: UniversalPalette) =>
        p.chromatic.red.main,
      historyItemRefColor: (p: UniversalPalette) => p.chromatic.indigo.main,
      historyItemRemoteRefColor: (p: UniversalPalette) =>
        p.chromatic.purple.main,
      historyItemBaseRefColor: (p: UniversalPalette) => p.chromatic.cyan.main,
      historyItemHoverDefaultLabelForeground: (p: UniversalPalette) =>
        p.foreground.primary.light,
    },
    merge: {
      currentHeaderBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, OPACITY.LIGHT),
      currentContentBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.teal.dark, OPACITY.MEDIUM),
      incomingHeaderBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.dark, OPACITY.MAXIMUM),
      incomingContentBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.dark, OPACITY.MEDIUM),
    },
    mergeEditor: {
      'change.background': (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, OPACITY.LIGHT),
      'change.word.background': (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, OPACITY.MEDIUM),
      'conflict.unhandledUnfocused.border': (p: UniversalPalette) =>
        alpha(p.chromatic.yellow.main, OPACITY.VERY_STRONG),
      'conflict.unhandledFocused.border': (p: UniversalPalette) =>
        alpha(p.chromatic.yellow.main, OPACITY.MAXIMUM),
      'conflict.handledUnfocused.border': (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, OPACITY.SUBTLE),
      'conflict.handledFocused.border': (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, OPACITY.STRONG),
      'conflict.handled.minimapOverViewRuler': (p: UniversalPalette) =>
        p.chromatic.teal.dark,
      'conflict.unhandled.minimapOverViewRuler': (p: UniversalPalette) =>
        p.chromatic.yellow.main,
    },
    gitlens: {
      trailingLineForegroundColor: (p: UniversalPalette) =>
        p.chromatic.neutral.dark,
      gutterUncommittedForegroundColor: (p: UniversalPalette) =>
        p.chromatic.indigo.main,
      gutterForegroundColor: (p: UniversalPalette) => p.foreground.primary.main,
      gutterBackgroundColor: (p: UniversalPalette) => p.background.base.main,
    },
    notificationCenterHeader: {
      background: (p: UniversalPalette) => p.background.base.main,
    },
    notifications: {
      background: (p: UniversalPalette) => p.background.base.main,
    },
    notificationLink: {
      foreground: (p: UniversalPalette) => p.chromatic.indigo.light,
    },
    notificationsErrorIcon: {
      foreground: (p: UniversalPalette) => p.chromatic.red.dark,
    },
    notificationsWarningIcon: {
      foreground: (p: UniversalPalette) => p.chromatic.yellow.main,
    },
    notificationsInfoIcon: {
      foreground: (p: UniversalPalette) => p.chromatic.cyan.main,
    },
    menubar: {
      selectionForeground: (p: UniversalPalette) => p.foreground.primary.light,
      selectionBackground: (p: UniversalPalette) =>
        subtleHighlight(p.chromatic.indigo.main),
      selectionBorder: (p: UniversalPalette) =>
        lighten(p.background.base.main, 0.04),
    },
    menu: {
      foreground: (p: UniversalPalette) => p.foreground.primary.main,
      background: (p: UniversalPalette) => p.background.base.main,
      selectionForeground: (p: UniversalPalette) =>
        lighten(p.foreground.primary.light, 0.4),
      selectionBackground: (p: UniversalPalette) =>
        alpha(p.chromatic.indigo.main, OPACITY.MEDIUM),
      separatorBackground: (p: UniversalPalette) =>
        lighten(p.background.base.main, 0.06),
      border: (p: UniversalPalette) =>
        mix(p.background.base.main, p.chromatic.indigo.main, 0.2),
    },
    chat: {
      requestBorder: (p: UniversalPalette) => p.background.base.light,
      avatarBackground: (p: UniversalPalette) =>
        darken(p.chromatic.indigo.dark, 0.3),
      avatarForeground: (p: UniversalPalette) => p.foreground.primary.light,
      slashCommandBackground: (p: UniversalPalette) => p.background.base.dark,
      slashCommandForeground: (p: UniversalPalette) => p.chromatic.indigo.main,
    },
    inlineChat: {
      foreground: (p: UniversalPalette) => p.foreground.primary.light,
    },
    inlineChatInput: {
      background: (p: UniversalPalette) => p.background.base.light,
    },
    inlineChatDiff: {
      inserted: (p: UniversalPalette) =>
        alpha(p.chromatic.green.dark, OPACITY.MEDIUM),
      removed: (p: UniversalPalette) =>
        alpha(p.chromatic.red.dark, OPACITY.MEDIUM),
    },
  },
}
