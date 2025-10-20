import type { CalmClarityPalette } from './types'

/**
 * Создает и возвращает объект палитры "Спокойная Четкость".
 * Это позволяет инкапсулировать сложную логику создания палитры
 * и отделить данные от их определения.
 */
export const createCalmClarityPalette = (): CalmClarityPalette => {
  const palette: CalmClarityPalette = {
    workbench: {
      background: {
        base: '#10141a',
        secondary: '#0f1319',
        tertiary: '#151a24',
        sidebar: '#0e1218',
        activityBar: '#121720',
        statusbar: '#0f131b',
        titlebar: '#0d1117',
        tabbar: '#10151f',
      },
      foreground: {
        primary: '#d0e0ff',
        secondary: '#b0c4e0',
        badge: '#e0efff',
      },
      border: {
        main: '#1a1f2a',
      },
      accent: {
        primary: '#7ab4e6',
        secondary: '#6a7d9a',
        hover: '#75b0e2',
        focus: '#7ca0c2',
      },
    },
    button: {
      primaryBackground: '#1a2a4a',
      primaryForeground: '#d0e0ff',
      primaryHoverBackground: '#1f355a',
      secondaryBackground: '#182a45',
      secondaryForeground: '#b0c4e0',
      secondaryHoverBackground: '#1c3252',
      border: '#253a5a',
    },
    syntax: {
      text: '#7a8ca0',
      comment: '#4a5a70',
      purple: '#bb9af7',
      green: '#9ece6a',
      yellow: '#e0af68',
      magenta: '#f776f1',
      cyan: '#7dcfff',
      keyword: '#bb9af7',
      operator: '#f14565',
      control: '#bb9af7',
      type: '#e0af68',
      class: '#e0af68',
      interface: '#e0af68',
      enum: '#7d9fb0',
      variable: '#d369bc',
      parameter: '#9accda',
      constant: '#e6ae89',
      function: '#7dcfff',
      method: '#7dcfff',
      string: '#9ece6a',
      number: '#fa7c5d',
      boolean: '#e04965',
      property: '#ba8cc0',
      object: '#7aabc8',
      tag: '#7dcfff',
      attribute: '#e0af68',
      error: '#df215a',
      warning: '#b35abe',
      info: '#7a9ad8',
      success: '#638dc4',
    },
    alpha: {
      subtle: '33',
      hover: '66',
      active: '99',
      semiOpaque: 'cc',
    },
    shadow: {
      inlineChat: '#171c2585',
      widget: '#171c2585',
      scrollbar: '#171c2585',
      editorStickyScroll: '#171c2585',
      panelStickyScroll: '#171c2585',
      sideBarStickyScroll: '#171c2585',
      listFilterWidget: '#171c2585',
    },
    neutral: {
      base: '#3a4a60',
      surface: '#151a25',
      highlight: '#2f3f5a',
      subtle: '#455570',
    },
    controls: {
      checkboxBackground: '#10141a',
      checkboxBorder: '#1a1f2a',
      inputValidationInfoBorder: '#7a9ad8',
      inputValidationWarningBorder: '#b35abe',
      inputValidationErrorBorder: '#df215a',
    },
    minimap: {
      sliderBackground: '#151a2480',
      sliderHoverBackground: '#151a24A0',
      sliderActiveBackground: '#151a24C0',
      gutterAddedBackground: '#638dc4',
      gutterModifiedBackground: '#7a9ad8',
      gutterDeletedBackground: '#df215a',
    },
    overviewRuler: {
      errorForeground: '#df215a',
      warningForeground: '#b35abe',
      infoForeground: '#7a9ad8',
    },
    scmGraph: {
      foreground1: '#27729e',
      foreground2: '#9a58a3',
      foreground3: '#6caa29',
      foreground4: '#d6912a',
      foreground5: '#bd27b5',
      historyItemHoverLabelForeground: '#ffffff',
      historyItemHoverAdditionsForeground: '#9ece6a',
      historyItemHoverDeletionsForeground: '#df215a',
      historyItemHoverDefaultLabelBackground: '#40506a',
      historyItemHoverDefaultLabelForeground: '#ffffff',
      historyItemRefColor: '#27729e',
      historyItemRemoteRefColor: '#9a58a3',
      historyItemBaseRefColor: '#1f3f7a',
    },
    getColorWithAlpha: (
      color: string,
      alpha: keyof CalmClarityPalette['alpha']
    ): string => {
      const hex = color.replace('#', '')
      return `#${hex}${palette.alpha[alpha]}`
    },
  }
  return palette
}

/**
 * Проверка контрастности цветов по WCAG
 */
export const getContrastRatio = (color1: string, color2: string): number => {
  // Удаление символа # и преобразование в RGB
  const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    const cleanHex = hex.replace('#', '')
    const r = parseInt(cleanHex.substring(0, 2), 16) / 255
    const g = parseInt(cleanHex.substring(2, 4), 16) / 255
    const b = parseInt(cleanHex.substring(4, 6), 16) / 255
    return { r, g, b }
  }

  // Вычисление относительной яркости
  const getLuminance = (r: number, g: number, b: number): number => {
    const RsRGB = r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4
    const GsRGB = g <= 0.03928 ? g / 12.92 : ((g + 0.055) / 1.055) ** 2.4
    const BsRGB = b <= 0.03928 ? b / 12.92 : ((b + 0.055) / 1.055) ** 2.4
    return 0.2126 * RsRGB + 0.7152 * GsRGB + 0.0722 * BsRGB
  }

  const color1Rgb = hexToRgb(color1)
  const color2Rgb = hexToRgb(color2)

  const lum1 = getLuminance(color1Rgb.r, color1Rgb.g, color1Rgb.b)
  const lum2 = getLuminance(color2Rgb.r, color2Rgb.g, color2Rgb.b)

  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)

  return (brightest + 0.05) / (darkest + 0.05)
}

/**
 * Проверка соответствия цветов требованиям WCAG
 */
export const meetsWCAGContrast = (
  foreground: string,
  background: string,
  level: 'AA' | 'AAA' = 'AA'
): boolean => {
  const ratio = getContrastRatio(foreground, background)
  return level === 'AA' ? ratio >= 4.5 : ratio >= 7.0
}