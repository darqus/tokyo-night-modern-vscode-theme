import { palette } from '../palette/index'

/**
 * Menus & Dropdowns UI элементы
 * Эти токены отвечают за оформление меню и выпадающих списков в VS Code
 */
export const menuDropdownColors = {
  'dropdown.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'dropdown.border': palette.borders.subtle + '40', // Замена для borderAltAlpha40
  'dropdown.foreground': palette.foreground,
  'dropdown.listBackground': palette.backgrounds.elevated, // Замена для backgroundAlt2
  'menu.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'menu.border': palette.borders.subtle + '40', // Замена для borderAltAlpha40
  'menu.foreground': palette.foreground,
  'menu.selectionBackground': palette.interactive.selected, // Замена для backgroundAlt5
  'menu.selectionForeground': palette.blue,
  'menu.separatorBackground': palette.borders.subtle + '40', // Замена для borderAltAlpha40
  'menubar.selectionBackground': palette.interactive.selected, // Замена для backgroundAlt5
  'menubar.selectionForeground': palette.foreground,
}
