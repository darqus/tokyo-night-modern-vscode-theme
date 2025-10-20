import type { BasePalette, PaletteGenerator } from './base'
import {
  createAlphaSystem,
  darken,
  getColorWithAlpha,
  lighten,
} from './generators'

/**
 * Интерфейс для цветов интерфейса (workbench)
 */
export interface WorkbenchColors {
  background: {
    base: string
    secondary: string
    tertiary: string
    sidebar: string
    activityBar: string
    statusbar: string
    titlebar: string
    tabbar: string
  }
  foreground: {
    primary: string
    secondary: string
    badge: string
  }
  border: {
    main: string
  }
  accent: {
    primary: string
    secondary: string
    hover: string
    focus: string
  }
  button: {
    primaryBackground: string
    primaryForeground: string
    primaryHoverBackground: string
    secondaryBackground: string
    secondaryForeground: string
    secondaryHoverBackground: string
    border: string
  }
  neutral: {
    base: string
    surface: string
    highlight: string
    subtle: string
  }
  controls: {
    checkboxBackground: string
    checkboxBorder: string
    inputValidationInfoBorder: string
    inputValidationWarningBorder: string
    inputValidationErrorBorder: string
  }
  minimap: {
    sliderBackground: string
    sliderHoverBackground: string
    sliderActiveBackground: string
    gutterAddedBackground: string
    gutterModifiedBackground: string
    gutterDeletedBackground: string
  }
  overviewRuler: {
    errorForeground: string
    warningForeground: string
    infoForeground: string
  }
  scmGraph: {
    foreground1: string
    foreground2: string
    foreground3: string
    foreground4: string
    foreground5: string
    historyItemHoverLabelForeground: string
    historyItemHoverAdditionsForeground: string
    historyItemHoverDeletionsForeground: string
    historyItemHoverDefaultLabelBackground: string
    historyItemHoverDefaultLabelForeground: string
    historyItemRefColor: string
    historyItemRemoteRefColor: string
    historyItemBaseRefColor: string
  }
  alpha: {
    subtle: string
    hover: string
    active: string
    semiOpaque: string
  }
  shadow: {
    inlineChat: string
    widget: string
    scrollbar: string
    editorStickyScroll: string
    panelStickyScroll: string
    sideBarStickyScroll: string
    listFilterWidget: string
  }
}

/**
 * Генератор цветов интерфейса на основе базовой палитры
 */
export const generateWorkbenchColors: PaletteGenerator<WorkbenchColors> = (
  base: BasePalette
): WorkbenchColors => {
  const alphaSystem = createAlphaSystem()

  // Вычисляем акцентный цвет на основе syntaxCyan, если он не определен
  const accentColor = base.syntaxCyan || '#7dcfff'

  return {
    background: {
      base: base.background,
      secondary: lighten(base.background, 0.05), // #0f1319 -> светлее на 5%
      tertiary: lighten(base.background, 0.1), // #151a24 -> светлее на 10%
      sidebar: lighten(base.background, 0.02), // #0e1218 -> светлее на 2%
      activityBar: lighten(base.background, 0.07), // #121720 -> светлее на 7%
      statusbar: lighten(base.background, 0.04), // #0f131b -> светлее на 4%
      titlebar: darken(base.background, 0.03), // #0d117 -> темнее на 3%
      tabbar: lighten(base.background, 0.05), // #10151f -> светлее на 5%
    },
    foreground: {
      primary: lighten(base.neutral, 0.6), // #d0e0ff - светлый оттенок нейтрального
      secondary: lighten(base.neutral, 0.4), // #b0c4e0 - средний оттенок
      badge: lighten(base.neutral, 0.7), // #e0efff - самый светлый оттенок
    },
    border: {
      main: lighten(base.background, 0.08), // #1a1f2a - светлее фона на 8%
    },
    accent: {
      primary: accentColor,
      secondary: darken(accentColor, 0.2), // #6a7d9a - темнее акцента
      hover: lighten(accentColor, 0.05), // #75b0e2 - светлее акцента
      focus: lighten(accentColor, 0.15), // #7ca0c2 - еще светлее акцента
    },
    button: {
      primaryBackground: darken(accentColor, 0.4), // #1a2a4a - темный акцент
      primaryForeground: lighten(base.neutral, 0.6), // #d0e0ff - светлый нейтральный
      primaryHoverBackground: darken(accentColor, 0.35), // #1f355a - чуть светлее
      secondaryBackground: lighten(darken(accentColor, 0.4), 0.05), // #182a45 - темный акцент с коррекцией
      secondaryForeground: lighten(base.neutral, 0.4), // #b0c4e0 - средний нейтральный
      secondaryHoverBackground: lighten(darken(accentColor, 0.4), 0.1), // #1c3252 - чуть светлее
      border: darken(accentColor, 0.25), // #253a5a - средний акцент
    },
    neutral: {
      base: base.neutral, // #3a4a60 - базовый нейтральный
      surface: darken(base.background, 0.02), // #151a25 - темнее фона на 2%
      highlight: lighten(base.neutral, 0.15), // #2f3f5a - светлее нейтрального
      subtle: lighten(base.neutral, 0.1), // #455570 - средний нейтральный
    },
    controls: {
      checkboxBackground: base.background,
      checkboxBorder: lighten(base.background, 0.08), // #1a1f2a - как border.main
      inputValidationInfoBorder: lighten(base.neutral, 0.3), // #7a9ad8 - светлый нейтральный
      inputValidationWarningBorder: lighten(
        darken(base.syntaxPurple, 0.2),
        0.3
      ), // #b35abe - фиолетовый с коррекцией
      inputValidationErrorBorder: darken(base.syntaxGreen, 0.4), // #df215a - зеленый с инверсией
    },
    minimap: {
      sliderBackground: getColorWithAlpha(
        lighten(base.background, 0.08),
        'subtle',
        alphaSystem
      ), // #151a2480
      sliderHoverBackground: getColorWithAlpha(
        lighten(base.background, 0.08),
        'hover',
        alphaSystem
      ), // #151a24A0
      sliderActiveBackground: getColorWithAlpha(
        lighten(base.background, 0.08),
        'active',
        alphaSystem
      ), // #151a24C0
      gutterAddedBackground: lighten(base.neutral, 0.25), // #638dc4 - светлый нейтральный
      gutterModifiedBackground: lighten(base.neutral, 0.3), // #7a9ad8 - более светлый нейтральный
      gutterDeletedBackground: darken(base.syntaxGreen, 0.4), // #df215a - зеленый с инверсией
    },
    overviewRuler: {
      errorForeground: darken(base.syntaxGreen, 0.4), // #df215a - зеленый с инверсией
      warningForeground: lighten(darken(base.syntaxPurple, 0.2), 0.3), // #b35abe - фиолетовый с коррекцией
      infoForeground: lighten(base.neutral, 0.3), // #7a9ad8 - светлый нейтральный
    },
    scmGraph: {
      foreground1: darken(accentColor, 0.35), // #27729e - темный акцент
      foreground2: lighten(darken(base.syntaxPurple, 0.2), 0.1), // #9a58a3 - фиолетовый с коррекцией
      foreground3: lighten(darken(base.syntaxGreen, 0.1), 0.2), // #6caa29 - зеленый с коррекцией
      foreground4: lighten(darken(base.syntaxYellow || '#e0af68', 0.1), 0.15), // #d6912a - желтый с коррекцией
      foreground5: lighten(darken(base.syntaxPurple, 0.1), 0.1), // #bd27b5 - фиолетовый с коррекцией
      historyItemHoverLabelForeground: lighten(base.neutral, 0.7), // #ffffff - белый
      historyItemHoverAdditionsForeground: base.syntaxGreen, // #9ece6a - оригинальный зеленый
      historyItemHoverDeletionsForeground: darken(base.syntaxGreen, 0.4), // #df215a - зеленый с инверсией
      historyItemHoverDefaultLabelBackground: lighten(base.neutral, 0.15), // #40506a - нейтральный с коррекцией
      historyItemHoverDefaultLabelForeground: lighten(base.neutral, 0.7), // #ffffff - белый
      historyItemRefColor: darken(accentColor, 0.35), // #27729e - как foreground1
      historyItemRemoteRefColor: lighten(darken(base.syntaxPurple, 0.2), 0.1), // #9a58a3 - как foreground2
      historyItemBaseRefColor: darken(base.neutral, 0.2), // #1f3f7a - темный нейтральный
    },
    alpha: {
      subtle: alphaSystem.subtle,
      hover: alphaSystem.hover,
      active: alphaSystem.active,
      semiOpaque: alphaSystem.semiOpaque,
    },
    shadow: {
      inlineChat: getColorWithAlpha(
        lighten(base.background, 0.08),
        'subtle',
        alphaSystem
      ), // #171c2585 - с коррекцией
      widget: getColorWithAlpha(
        lighten(base.background, 0.08),
        'subtle',
        alphaSystem
      ), // #171c2585 - как inlineChat
      scrollbar: getColorWithAlpha(
        lighten(base.background, 0.08),
        'subtle',
        alphaSystem
      ), // #171c2585 - как inlineChat
      editorStickyScroll: getColorWithAlpha(
        lighten(base.background, 0.08),
        'subtle',
        alphaSystem
      ), // #171c2585 - как inlineChat
      panelStickyScroll: getColorWithAlpha(
        lighten(base.background, 0.08),
        'subtle',
        alphaSystem
      ), // #171c2585 - как inlineChat
      sideBarStickyScroll: getColorWithAlpha(
        lighten(base.background, 0.08),
        'subtle',
        alphaSystem
      ), // #171c2585 - как inlineChat
      listFilterWidget: getColorWithAlpha(
        lighten(base.background, 0.08),
        'subtle',
        alphaSystem
      ), // #171c2585 - как inlineChat
    },
  }
}
