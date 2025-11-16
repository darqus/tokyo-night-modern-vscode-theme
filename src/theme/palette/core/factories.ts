import { alpha, darken, lighten, mix } from '../../utils/color.js'
import { chromaMain } from '../base-colors.js'
import type { InteractiveOptions, Palette } from '../types.js'
import {
  ADJUST,
  COMPONENTS,
  MIX_RATIO,
  OPACITY,
  UI_STATES,
} from './constants.js'

/**
 * Создает интерактивные цвета для элементов
 */
export const createInteractiveColors = (
  baseColor: string,
  options: InteractiveOptions = {}
) => {
  const {
    hoverOpacity = UI_STATES.hover.opacity,
    activeOpacity = UI_STATES.active.opacity,
    focusOpacity = UI_STATES.focus.opacity,
    disabledOpacity = UI_STATES.disabled.opacity,
    hoverLighten = UI_STATES.hover.lighten,
    activeLighten = UI_STATES.active.lighten,
  } = options

  return {
    background: baseColor,
    hover: alpha(lighten(baseColor, hoverLighten), hoverOpacity),
    active: alpha(lighten(baseColor, activeLighten), activeOpacity),
    focus: alpha(baseColor, focusOpacity),
    disabled: alpha(baseColor, disabledOpacity),
  }
}

/**
 * Создает цвета границ для элементов
 */
export const createBorderColors = (
  backgroundColor: string,
  accentColor: string,
  errorColor?: string
) => {
  const defaultBorder = mix(
    backgroundColor,
    accentColor,
    MIX_RATIO.MOSTLY_FIRST
  )
  const focusBorder = mix(
    backgroundColor,
    lighten(accentColor, 0.1),
    MIX_RATIO.MOSTLY_FIRST
  )
  const errorBorder = errorColor
    ? mix(backgroundColor, errorColor, MIX_RATIO.MOSTLY_FIRST)
    : mix(backgroundColor, chromaMain.red, MIX_RATIO.MOSTLY_FIRST)

  return {
    default: defaultBorder,
    focus: focusBorder,
    error: errorBorder,
    hover: lighten(defaultBorder, ADJUST.TINY),
    disabled: alpha(defaultBorder, OPACITY.STRONG),
  }
}

/**
 * Создает цвета для кнопок
 */
export const createButtonColors = (
  baseColor: string,
  textColor: string,
  options: InteractiveOptions & { variant?: 'solid' | 'outline' | 'ghost' } = {}
) => {
  const { variant = 'solid' } = options

  if (variant === 'solid') {
    return {
      background: baseColor,
      foreground: textColor,
      hover: lighten(baseColor, UI_STATES.hover.lighten),
      active: lighten(baseColor, UI_STATES.active.lighten),
      focus: alpha(baseColor, UI_STATES.focus.opacity),
      disabled: alpha(baseColor, UI_STATES.disabled.opacity),
      border: baseColor,
    }
  }

  if (variant === 'outline') {
    return {
      background: 'transparent',
      foreground: baseColor,
      hover: alpha(baseColor, UI_STATES.hover.opacity),
      active: alpha(baseColor, UI_STATES.active.opacity),
      focus: alpha(baseColor, UI_STATES.focus.opacity),
      disabled: alpha(baseColor, UI_STATES.disabled.opacity),
      border: baseColor,
    }
  }

  // ghost variant
  return {
    background: 'transparent',
    foreground: baseColor,
    hover: alpha(baseColor, UI_STATES.hover.opacity),
    active: alpha(baseColor, UI_STATES.active.opacity),
    focus: alpha(baseColor, UI_STATES.focus.opacity),
    disabled: alpha(baseColor, UI_STATES.disabled.opacity),
    border: 'transparent',
  }
}

/**
 * Создает цвета для полей ввода
 */
export const createInputColors = (
  backgroundColor: string,
  textColor: string,
  accentColor: string,
  errorColor?: string
) => {
  const borders = createBorderColors(backgroundColor, accentColor, errorColor)

  return {
    background: backgroundColor,
    foreground: textColor,
    placeholder: alpha(textColor, OPACITY.MEDIUM),
    border: borders.default,
    hover: {
      background: lighten(backgroundColor, ADJUST.TINY),
      border: borders.hover,
    },
    focus: {
      background: backgroundColor,
      border: borders.focus,
    },
    error: {
      background: alpha(errorColor || chromaMain.red, OPACITY.SUBTLE),
      border: borders.error,
    },
    disabled: {
      background: alpha(backgroundColor, OPACITY.STRONG),
      foreground: alpha(textColor, OPACITY.STRONG),
      border: borders.disabled,
    },
  }
}

/**
 * Создает цвета для ссылок
 */
export const createLinkColors = (baseColor: string, visitedColor?: string) => {
  return {
    default: baseColor,
    hover: lighten(baseColor, UI_STATES.hover.lighten),
    active: darken(baseColor, UI_STATES.active.lighten),
    focus: alpha(baseColor, UI_STATES.focus.opacity),
    visited:
      visitedColor || mix(baseColor, chromaMain.visited, MIX_RATIO.BALANCED),
    disabled: alpha(baseColor, UI_STATES.disabled.opacity),
  }
}

/**
 * Создает цвета для карточек
 */
export const createCardColors = (
  backgroundColor: string,
  borderColor: string,
  shadowColor: string = '#000000'
) => {
  return {
    background: backgroundColor,
    hover: lighten(backgroundColor, UI_STATES.hover.lighten),
    border: borderColor,
    shadow: alpha(shadowColor, OPACITY.LIGHT),
    hoverShadow: alpha(shadowColor, OPACITY.MEDIUM),
  }
}

/**
 * Создает семантические цвета (успех, ошибка, предупреждение, информация)
 */
export const createSemanticColors = (palette: Palette) => {
  return {
    success: {
      background: alpha(palette.chromatic.emerald[500], OPACITY.SUBTLE),
      border: palette.chromatic.emerald[500],
      text: palette.chromatic.emerald[700],
      hover: alpha(palette.chromatic.emerald[500], OPACITY.LIGHT),
    },
    warning: {
      background: alpha(palette.chromatic.amber[500], OPACITY.SUBTLE),
      border: palette.chromatic.amber[500],
      text: palette.chromatic.amber[700],
      hover: alpha(palette.chromatic.amber[500], OPACITY.LIGHT),
    },
    error: {
      background: alpha(palette.chromatic.red[500], OPACITY.SUBTLE),
      border: palette.chromatic.red[500],
      text: palette.chromatic.red[700],
      hover: alpha(palette.chromatic.red[500], OPACITY.LIGHT),
    },
    info: {
      background: alpha(palette.chromatic.blue[500], OPACITY.SUBTLE),
      border: palette.chromatic.blue[500],
      text: palette.chromatic.blue[700],
      hover: alpha(palette.chromatic.blue[500], OPACITY.LIGHT),
    },
  }
}

/**
 * Создает цвета для уведомлений (alerts/toast)
 */
export const createAlertColors = (
  type: keyof typeof COMPONENTS,
  palette: Palette
) => {
  const colorName = COMPONENTS[type]
  const baseColor = palette.chromatic[colorName][500]

  return {
    background: alpha(baseColor, OPACITY.SUBTLE),
    border: baseColor,
    text: palette.chromatic[colorName][700],
    icon: baseColor,
    hover: alpha(baseColor, OPACITY.LIGHT),
  }
}

/**
 * Создает цвета для выделения текста
 */
export const createSelectionColors = (
  backgroundColor: string,
  accentColor: string
) => {
  return {
    background: alpha(accentColor, OPACITY.SUBTLE),
    text: backgroundColor,
    focus: alpha(accentColor, OPACITY.LIGHT),
  }
}

/**
 * Создает цвета для прогресс-баров
 */
export const createProgressColors = (
  backgroundColor: string,
  accentColor: string
) => {
  return {
    background: alpha(backgroundColor, OPACITY.STRONG),
    fill: accentColor,
    hover: lighten(accentColor, UI_STATES.hover.lighten),
  }
}

/**
 * Создает цвета для тегов и бейджей
 */
export const createTagColors = (baseColor: string, textColor?: string) => {
  return {
    background: alpha(baseColor, OPACITY.SUBTLE),
    text: textColor || baseColor,
    border: baseColor,
    hover: alpha(baseColor, OPACITY.LIGHT),
  }
}

/**
 * Создает цвета для таблиц
 */
export const createTableColors = (
  backgroundColor: string,
  borderColor: string,
  headerColor: string
) => {
  return {
    background: backgroundColor,
    header: {
      background: lighten(backgroundColor, ADJUST.TINY),
      text: headerColor,
      border: borderColor,
    },
    row: {
      hover: lighten(backgroundColor, UI_STATES.hover.lighten),
      selected: alpha(borderColor, OPACITY.SUBTLE),
      border: borderColor,
    },
  }
}

/**
 * Создает цвета для модальных окон
 */
export const createModalColors = (
  backgroundColor: string,
  overlayColor: string = '#000000'
) => {
  return {
    background: backgroundColor,
    overlay: alpha(overlayColor, OPACITY.MEDIUM),
    border: lighten(backgroundColor, ADJUST.LIGHT),
    shadow: alpha(overlayColor, OPACITY.STRONG),
  }
}

/**
 * Создает цвета для tooltips
 */
export const createTooltipColors = (
  backgroundColor: string,
  textColor: string
) => {
  return {
    background: backgroundColor,
    text: textColor,
    arrow: backgroundColor,
  }
}

/**
 * Создает адаптивные цвета для разных режимов (светлый/темный)
 */
export const createAdaptiveColors = (
  lightColors: Record<string, string>,
  darkColors: Record<string, string>,
  mode: 'light' | 'dark' = 'dark'
) => {
  return mode === 'light' ? lightColors : darkColors
}

/**
 * Создает градиентные цвета
 */
export const createGradientColors = (
  startColor: string,
  endColor: string,
  angle: number = 45
) => {
  return {
    linear: `linear-gradient(${angle}deg, ${startColor}, ${endColor})`,
    radial: `radial-gradient(circle, ${startColor}, ${endColor})`,
    start: startColor,
    end: endColor,
    angle,
  }
}
