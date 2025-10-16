import { foundationColors } from '../foundation/colors'
import { getColorWithOpacity } from '../foundation/opacity'

export const typographyColors = {
  // Text colors
  text: {
    primary: foundationColors.gray500,
    secondary: foundationColors.gray600,
    tertiary: foundationColors.gray600,
    disabled: foundationColors.gray700,
    inverse: foundationColors.gray900,
 },

  // Heading colors
  heading: {
    h1: foundationColors.gray500,
    h2: foundationColors.gray500,
    h3: foundationColors.gray500,
    h4: foundationColors.gray600,
    h5: foundationColors.gray600,
    h6: foundationColors.gray600,
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
