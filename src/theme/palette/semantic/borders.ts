import { foundationColors } from '../foundation/colors'
import { getColorWithOpacity } from '../foundation/opacity'

export const borderColors = {
  // Border colors
  border: {
    default: foundationColors.gray600,
    light: foundationColors.gray700,
    dark: foundationColors.gray500,
    focus: foundationColors.blue400,
    error: foundationColors.red400,
    success: foundationColors.green400,
    warning: foundationColors.yellow400,
  },

  // Divider colors
  divider: {
    default: foundationColors.gray700,
    light: foundationColors.gray800,
    dark: foundationColors.gray600,
  },

  // Focus ring colors
  focusRing: {
    default: getColorWithOpacity(foundationColors.blue400, 'medium'),
    error: getColorWithOpacity(foundationColors.red400, 'medium'),
    success: getColorWithOpacity(foundationColors.green400, 'medium'),
    warning: getColorWithOpacity(foundationColors.yellow400, 'medium'),
  },

  // Shadow colors
  shadow: {
    default: getColorWithOpacity(foundationColors.black, 'strong'),
    light: getColorWithOpacity(foundationColors.black, 'medium'),
    inner: getColorWithOpacity(foundationColors.black, 'light'),
  },
} as const
