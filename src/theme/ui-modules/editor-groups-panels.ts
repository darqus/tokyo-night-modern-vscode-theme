import { palette } from '../palette/index'

/**
 * Editor Groups & Panels UI элементы
 * Эти токены отвечают за оформление групп редакторов и панелей в VS Code
 */
export const editorGroupsPanelsColors = {
  'editorGroup.border': palette.borders.subtle + '20',
  'editorGroup.dropBackground': palette.blue + '20',
  'editorGroup.dropIntoPromptBorder': palette.borders.subtle,
  'editorGroupHeader.border': palette.backgrounds.secondary,
  'editorGroupHeader.noTabsBackground': palette.backgrounds.secondary,
  'editorGroupHeader.tabsBackground': palette.backgrounds.secondary,
  'editorGroupHeader.tabsBorder': palette.backgrounds.secondary,
  'editorPane.background': palette.backgrounds.secondary,
  'panel.background': palette.backgrounds.secondary,
  'panel.border': palette.borders.subtle + '40',
  'panel.dropBorder': palette.borders.subtle + '40',
  'panelInput.border': palette.borders.subtle + '40',
  'panelSection.border': palette.border,
  'panelSection.dropBackground': palette.blue + '20',
  'panelTitle.activeBorder': palette.borders.subtle + '40',
  'panelTitle.activeForeground': palette.foreground,
  'panelTitle.inactiveForeground': palette.foreground + 'AA',
}
