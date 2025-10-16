import { foundationColors } from '../palette/foundation/colors'
import { opacityLevels } from '../palette/foundation/opacity'

/**
 * Lists UI элементы
 * Эти токены отвечают за оформление списков в VS Code
 */
export const listColors = {
  'list.activeSelectionBackground': foundationColors.gray700 + '90',
  'list.activeSelectionForeground': foundationColors.blue500,
  'list.deemphasizedForeground': foundationColors.gray100,
  'list.dropBackground': foundationColors.blue500 + opacityLevels.light,
  'list.errorForeground': foundationColors.red500,
  'list.focusBackground': foundationColors.gray700,
  'list.focusForeground': foundationColors.gray100,
  'list.highlightForeground': foundationColors.blue500,
  'list.hoverBackground': foundationColors.gray700 + '60',
  'list.hoverForeground': foundationColors.blue500,
  'list.inactiveSelectionBackground': foundationColors.gray700,
  'list.inactiveSelectionForeground': foundationColors.blue500,
  'list.inactiveSelectionIconForeground': foundationColors.blue500,
  'list.invalidItemForeground': foundationColors.red500,
  'list.warningForeground': foundationColors.yellow500,
}
