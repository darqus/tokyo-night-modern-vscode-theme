import { palette } from '../palette/index'

/**
 * Side Bar UI элементы
 * Эти токены отвечают за оформление боковой панели в VS Code
 */
export const sideBarColors = {
  'sideBar.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'sideBar.border': palette.backgrounds.secondary, // Замена для backgroundAlt
  'sideBar.dropBackground': palette.blue + '20', // Замена для blueDarkAlpha20
  'sideBar.foreground': palette.textSecondary, // Замена для foregroundAlt
  'sideBarSectionHeader.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'sideBarSectionHeader.border': palette.backgrounds.secondary, // Замена для backgroundAlt
  'sideBarSectionHeader.foreground': palette.foreground,
  'sideBarTitle.foreground': palette.blue,
}
