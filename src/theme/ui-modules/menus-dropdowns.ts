import { palette } from '../palette'

/**
 * Menus & Dropdowns UI элементы
 * Эти токены отвечают за оформление меню и выпадающих списков в VS Code
 */
export const menuDropdownColors = {
  // Menus & Dropdowns
  'menu.background': palette.background, // Фон меню
  'menu.foreground': palette.foreground, // Цвет текста в меню
  'menu.selectionBackground': palette.backgroundAlpha00, // Фон выделенного элемента в меню (прозрачный)
  'menu.selectionForeground': palette.foreground, // Цвет текста выделенного элемента в меню
  'menu.selectionBorder': palette.blueAlt, // Граница выделенного элемента в меню
  'menubar.selectionBorder': palette.blueAlt, // Граница выделенного элемента в меню строки меню
  'menubar.selectionBackground': palette.backgroundAlpha00, // Фон выделенного элемента в строке меню
  'menubar.selectionForeground': palette.foreground, // Цвет текста выделенного элемента в строке меню
  'menu.border': palette.border, // Граница меню
  'menu.separatorBackground': palette.grayMenu, // Фон разделителя в меню
  'dropdown.background': palette.background, // Фон выпадающего списка
  'dropdown.foreground': palette.foreground, // Цвет текста в выпадающем списке
  'dropdown.border': palette.border, // Граница выпадающего списка
  'dropdown.listBackground': palette.background, // Фон списка в выпадающем списке
}
