import { foundationColors } from '../foundation/colors'
import { getColorWithOpacity } from '../foundation/opacity'

export const interfaceColors = {
  // Background colors
  background: {
    primary: foundationColors.gray900,
    secondary: foundationColors.gray800,
    tertiary: foundationColors.gray700,
    accent: foundationColors.blue500,
  },

  // Surface colors
  surface: {
    primary: foundationColors.gray800,
    secondary: foundationColors.gray700,
    tertiary: foundationColors.gray600,
    hover: foundationColors.gray600,
    active: foundationColors.gray500,
  },

  // UI element colors
  ui: {
    button: {
      primary: foundationColors.blue500,
      secondary: foundationColors.gray600,
      danger: foundationColors.red500,
      success: foundationColors.green500,
    },
    input: {
      background: foundationColors.gray800,
      border: foundationColors.gray600,
      focus: foundationColors.blue400,
    },
    panel: {
      background: foundationColors.gray800,
      border: foundationColors.gray700,
    },
    tooltip: {
      background: foundationColors.gray700,
      border: foundationColors.gray600,
    },
  },

  // Overlay colors
  overlay: {
    modal: getColorWithOpacity(foundationColors.black, 'strong'),
    dropdown: getColorWithOpacity(foundationColors.black, 'medium'),
    tooltip: getColorWithOpacity(foundationColors.black, 'light'),
  },
} as const
