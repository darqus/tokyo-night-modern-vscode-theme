/**
 * Semantic layer - семантический слой цветовой системы
 */

import { interfaceColors } from './interface'
import { typographyColors } from './typography'
import { borderColors } from './borders'
import { foundationColors } from '../foundation/colors'
import { getColorWithOpacity } from '../foundation/opacity'

export * from './types'

// Определение семантических цветов с вложенными структурами
export const surfaces = {
  background: {
    base: interfaceColors.background.primary,
    secondary: interfaceColors.background.secondary,
    tertiary: interfaceColors.background.tertiary,
    accent: interfaceColors.background.accent,
  },
  modal: {
    base: interfaceColors.overlay.modal,
  },
  popover: {
    base: interfaceColors.ui.tooltip.background,
  },
  tooltip: {
    base: interfaceColors.ui.tooltip.background,
  },
} as const

export const elevation = {
 base: {
    base: interfaceColors.surface.primary,
  },
  raised: {
    base: interfaceColors.surface.secondary,
  },
  floating: {
    base: interfaceColors.surface.tertiary,
  },
} as const

export const interactive = {
  hover: {
    base: interfaceColors.surface.hover,
  },
  active: {
    base: interfaceColors.surface.active,
  },
 focus: {
    base: interfaceColors.ui.input.focus,
  },
  disabled: {
    base: interfaceColors.background.tertiary,
  },
  button: {
    primary: interfaceColors.ui.button.primary,
    secondary: interfaceColors.ui.button.secondary,
    danger: interfaceColors.ui.button.danger,
    success: interfaceColors.ui.button.success,
  },
} as const

export const effects = {
 shadow: {
    base: borderColors.shadow.default,
  },
  glow: {
    base: getColorWithOpacity(foundationColors.blue500, 'medium'),
  },
} as const

export const text = {
 primary: {
    base: typographyColors.text.primary,
  },
  secondary: {
    base: typographyColors.text.secondary,
  },
  tertiary: {
    base: typographyColors.text.tertiary,
  },
  disabled: {
    base: typographyColors.text.disabled,
  },
  inverse: {
    base: typographyColors.text.inverse,
  },
} as const

export const typography = {
 heading: {
    default: {
      base: typographyColors.heading.h1,
    },
  },
 code: {
    default: {
      base: typographyColors.code.text,
    },
  },
  link: {
    default: {
      base: typographyColors.link.default,
    },
    hover: {
      base: typographyColors.link.hover,
    },
  },
} as const

export const borders = {
 structural: {
    default: {
      base: borderColors.border.default,
    },
  },
  interactive: {
    default: {
      base: borderColors.border.default,
    },
    focus: {
      base: borderColors.border.focus,
    },
  },
  decorative: {
    subtle: {
      base: borderColors.divider.light,
    },
  },
} as const

export const statusBorders = {
  error: {
    base: borderColors.border.error,
  },
  success: {
    base: borderColors.border.success,
  },
  warning: {
    base: borderColors.border.warning,
  },
} as const

// Объединенный экспорт всех семантических цветов
export const semantic = {
  surfaces,
  elevation,
  interactive,
  effects,
  text,
  typography,
  borders,
  statusBorders,
} as const
