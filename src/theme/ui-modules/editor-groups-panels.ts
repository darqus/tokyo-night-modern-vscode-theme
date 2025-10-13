import { palette } from '../palette/index'

/**
 * Editor Groups & Panels UI элементы
 * Эти токены отвечают за оформление групп редакторов и панелей в VS Code
 */
export const editorGroupsPanelsColors = {
  'editorGroup.border': palette.borders.subtle + '20', // Замена для borderAlt2Alpha20
  'editorGroup.dropBackground': palette.blue + '20', // Замена для blueDarkAlpha20
  'editorGroup.dropIntoPromptBorder': palette.borders.subtle, // Замена для borderAlt3
  'editorGroupHeader.border': palette.backgrounds.secondary, // Замена для backgroundAlt
  'editorGroupHeader.noTabsBackground': palette.backgrounds.secondary, // Замена для backgroundAlt
  'editorGroupHeader.tabsBackground': palette.backgrounds.secondary, // Замена для backgroundAlt
  'editorGroupHeader.tabsBorder': palette.backgrounds.secondary, // Замена для backgroundAlt
  'editorPane.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'panel.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'panel.border': palette.borders.subtle + '40', // Замена для borderAlpha40
  'panel.dropBorder': palette.borders.subtle + '40', // Замена для borderAltAlpha40
  'panelInput.border': palette.borders.subtle + '40', // Замена для borderAltAlpha40
  'panelSection.border': palette.border,
  'panelSection.dropBackground': palette.blue + '20', // Замена для blueDarkAlpha20
  'panelTitle.activeBorder': palette.borders.subtle + '40', // Замена для borderAlpha40
  'panelTitle.activeForeground': palette.foreground,
  'panelTitle.inactiveForeground': palette.foreground + 'AA', // Замена для foregroundAlphaAA
}
