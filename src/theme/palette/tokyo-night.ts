import type { Palette } from './types'

/**
 * Палитра цветов Tokyo Night
 *
 * Основные цвета темы Tokyo Night, извлеченные из оригинальной темы
 */
export const tokyoNightPalette: Palette = {
  workbench: {
    background: {
      base: '#1a1b26',
      activityBar: '#16161e',
      sidebar: '#16161e',
      titlebar: '#16161e',
      tabbar: '#16161e',
      secondary: '#16161e',
      tertiary: '#1e202e',
      statusbar: '#16161e',
    },
    foreground: {
      base: '#a9b1d6',
      secondary: '#787c99',
      badge: '#ffffff',
    },
    accent: {
      primary: '#3d59a1',
      secondary: '#3b3e52',
      focus: '#545c7e33',
      hover: '#20222c',
    },
    border: {
      main: '#101014',
    },
  },
  button: {
    primaryBackground: '#3d59a1dd',
    primaryForeground: '#ffffff',
    primaryHoverBackground: '#3d59a1AA',
    secondaryBackground: '#3b3e52',
    secondaryForeground: '#ffffff',
    secondaryHoverBackground: '#3d59a1AA',
    border: '#0f0f14ff',
  },
  syntax: {
    text: '#a9b1d6',
    comments: '#51597d',
    strings: '#9ece6a',
    keywords: '#bb9af7',
    types: '#0db9d7',
    numbers: '#ff9e64',
    booleans: '#ff9e64',
    functions: '#7aa2f7',
    methods: '#7aa2f7',
    properties: '#7dcfff',
    variables: '#c0caf5',
    constants: '#ff9e64',
    parameters: '#e0af68',
    classes: '#0db9d7',
    interfaces: '#0db9d7',
    enums: '#0db9d7',
    operators: '#89ddff',
    punctuation: '#9abdf5',
    tags: '#f7768e',
    attributes: '#bb9af7',
    error: '#db4b4b',
    warning: '#e0af68',
    info: '#0da0ba',
    success: '#41a6b5',
    object: '#c0caf5ff',
    storage: '#9d7cd8',
    decorator: '#7aa2f7',
    annotation: '#7aa2f7',
    module: '#0db9d7',
    namespace: '#0db9d7',
  },
  neutral: {
    base: '#a9b1d6',
    subtle: '#787c99',
    highlight: '#545c7e',
    surface: '#1e202e',
  },
  controls: {
    inputValidationInfoBorder: '#3d59a1',
    inputValidationWarningBorder: '#e0af68',
    inputValidationErrorBorder: '#963c47',
    checkboxBackground: '#14141b',
    checkboxBorder: '#0f0f14',
  },
  minimap: {
    sliderBackground: '#868bc415',
    sliderHoverBackground: '#868bc410',
    sliderActiveBackground: '#868bc422',
    gutterAddedBackground: '#164846',
    gutterModifiedBackground: '#394b70',
    gutterDeletedBackground: '#823c41',
  },
  overviewRuler: {
    errorForeground: '#db4b4b',
    warningForeground: '#e0af68',
    infoForeground: '#1abc9c',
  },
  scmGraph: {
    historyItemHoverLabelForeground: '#1b1e2e',
    foreground1: '#ff9e64',
    foreground2: '#e0af68',
    foreground3: '#41a6b5',
    foreground4: '#7aa2f7',
    foreground5: '#bb9af7',
    historyItemHoverAdditionsForeground: '#41a6b5',
    historyItemHoverDeletionsForeground: '#f7768e',
    historyItemRefColor: '#506FCA',
    historyItemRemoteRefColor: '#41a6b5',
    historyItemBaseRefColor: '#9d7cd8',
    historyItemHoverDefaultLabelBackground: '#1a1b26',
    historyItemHoverDefaultLabelForeground: '#a9b1d6',
  },
  alpha: {
    subtle: '#000033', // 20% прозрачность - для тонких фонов
    hover: '#00000066', // 40% прозрачность - для состояний наведения
    active: '#00000099', // 60% прозрачность - для активных состояний
    semiOpaque: '#000000cc', // 80% прозрачность
  },
  shadow: {
    scrollbar: '#00000033',
    editorStickyScroll: '#ffffff00',
    panelStickyScroll: '#ffffff00',
    sideBarStickyScroll: '#ffffff00',
    listFilterWidget: '#ffffff00',
    widget: '#ffffff00',
    inlineChat: '#ffffff00',
  },
}
