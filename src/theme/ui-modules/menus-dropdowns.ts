import { palette } from '../palette/index'

/**
 * Menus & Dropdowns UI элементы
 * Эти токены отвечают за оформление меню и выпадающих списков в VS Code
 */
export const menuDropdownColors = {
  'dropdown.background': palette.backgrounds.secondary,
  'dropdown.border': palette.borders.subtle + '40',
  'dropdown.foreground': palette.foreground,
  'dropdown.listBackground': palette.backgrounds.elevated,
  'menu.background': palette.backgrounds.secondary,
  'menu.border': palette.borders.subtle + '40',
  'menu.foreground': palette.foreground,
  'menu.selectionBackground': palette.interactive.selected,
  'menu.selectionForeground': palette.blue,
  'menu.separatorBackground': palette.borders.subtle + '40',
  'menubar.selectionBackground': palette.interactive.selected,
  'menubar.selectionForeground': palette.foreground,
}
