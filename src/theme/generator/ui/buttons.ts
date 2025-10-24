import { palette } from '../../palette'
import { alpha } from '../../utils/color'
import { ensureContrast } from '../../utils/contrast'

export function generateButtonColors(): Record<string, string> {
  const { blue, ui } = palette

  // Улучшенные цвета кнопок с обеспечением контрастности
  const enhancedPrimaryBackground = ensureContrast(blue.primary, ui.white, 4.5)
  // Используем более тёмный фон для вторичной кнопки для лучшей контрастности
  const enhancedSecondaryBackground = '#4a5568' // Более тёмный серый для лучшей контрастности

  return {
    'extensionButton.prominentBackground': alpha(
      enhancedPrimaryBackground,
      0.9
    ), // Увеличил непрозрачность
    'extensionButton.prominentHoverBackground': alpha(
      enhancedPrimaryBackground,
      0.7
    ), // Увеличил непрозрачность
    'extensionButton.prominentForeground': ensureContrast(
      ui.white,
      enhancedPrimaryBackground,
      4.5
    ),
    'extensionBadge.remoteBackground': enhancedPrimaryBackground,
    'extensionBadge.remoteForeground': ensureContrast(
      ui.white,
      enhancedPrimaryBackground,
      4.5
    ),
    'button.background': alpha(enhancedPrimaryBackground, 0.8), // Увеличил непрозрачность
    'button.hoverBackground': alpha(enhancedPrimaryBackground, 0.9), // Увеличил непрозрачность
    'button.secondaryBackground': alpha(enhancedSecondaryBackground, 0.8), // Hover состояние для вторичной кнопки
    'button.secondaryHoverBackground': enhancedSecondaryBackground,
    'button.foreground': ensureContrast(
      ui.white,
      enhancedPrimaryBackground,
      4.5
    ),
    'button.secondaryForeground': ensureContrast(
      ui.white,
      enhancedSecondaryBackground,
      4.5
    ),
    'button.separator': alpha(ui.white, 0.1), // Разделитель для кнопок
    'progressBar.background': enhancedPrimaryBackground,
  }
}
