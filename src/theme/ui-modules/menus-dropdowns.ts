import { foundationColors } from '../palette/foundation/colors'
import { opacityLevels } from '../palette/foundation/opacity'

/**
 * Menus & Dropdowns UI элементы
 * Эти токены отвечают за оформление меню и выпадающих списков в VS Code
 */
export const menuDropdownColors = {
  'dropdown.background': foundationColors.gray800,
  'dropdown.border': foundationColors.gray600 + opacityLevels.medium,
  'dropdown.foreground': foundationColors.gray100,
  'dropdown.listBackground': foundationColors.gray800,
  'menu.background': foundationColors.gray800,
  'menu.border': foundationColors.gray600 + opacityLevels.medium,
  'menu.foreground': foundationColors.gray100,
  'menu.selectionBackground': foundationColors.gray700,
  'menu.selectionForeground': foundationColors.blue500,
  'menu.separatorBackground': foundationColors.gray600 + opacityLevels.medium,
  'menubar.selectionBackground': foundationColors.gray700,
  'menubar.selectionForeground': foundationColors.gray100,
}
