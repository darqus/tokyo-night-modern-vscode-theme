import { foundationColors } from '../foundation/colors'
import { getColorWithOpacity } from '../foundation/opacity'

export const typographyColors = {
  // Text colors
  text: {
    primary: foundationColors.gray100,
    secondary: foundationColors.gray200,
    tertiary: foundationColors.gray300,
    disabled: foundationColors.gray500,
    inverse: foundationColors.gray900,
  },

  // Heading colors
  heading: {
    h1: foundationColors.gray100,
    h2: foundationColors.gray100,
    h3: foundationColors.gray100,
    h4: foundationColors.gray200,
    h5: foundationColors.gray200,
    h6: foundationColors.gray300,
  },

  // Link colors
  link: {
    default: foundationColors.blue400,
    hover: foundationColors.blue300,
    active: foundationColors.blue500,
    visited: foundationColors.purple400,
    disabled: foundationColors.gray500,
  },

  // Code colors
  code: {
    background: foundationColors.gray800,
    text: foundationColors.gray100,
    border: foundationColors.gray600,
  },

  // Selection colors
  selection: {
    background: getColorWithOpacity(foundationColors.blue500, 'medium'),
    text: foundationColors.gray100,
  },
} as const
