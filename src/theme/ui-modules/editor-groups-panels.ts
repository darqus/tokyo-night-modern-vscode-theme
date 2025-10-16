import { foundationColors } from '../palette/foundation/colors'
import { opacityLevels } from '../palette/foundation/opacity'

/**
 * Editor Groups & Panels UI элементы
 * Эти токены отвечают за оформление групп редакторов и панелей в VS Code
 */
export const editorGroupsPanelsColors = {
  'editorGroup.border': foundationColors.gray600 + opacityLevels.light,
  'editorGroup.dropBackground': foundationColors.blue500 + opacityLevels.light,
  'editorGroup.dropIntoPromptBorder': foundationColors.gray600,
  'editorGroupHeader.border': foundationColors.gray800,
  'editorGroupHeader.noTabsBackground': foundationColors.gray800,
  'editorGroupHeader.tabsBackground': foundationColors.gray800,
  'editorGroupHeader.tabsBorder': foundationColors.gray800,
  'editorPane.background': foundationColors.gray800,
  'panel.background': foundationColors.gray800,
  'panel.border': foundationColors.gray600 + opacityLevels.medium,
  'panel.dropBorder': foundationColors.gray600 + opacityLevels.medium,
  'panelInput.border': foundationColors.gray600 + opacityLevels.medium,
  'panelSection.border': foundationColors.gray600,
  'panelSection.dropBackground': foundationColors.blue500 + opacityLevels.light,
  'panelTitle.activeBorder': foundationColors.gray600 + opacityLevels.medium,
  'panelTitle.activeForeground': foundationColors.gray100,
  'panelTitle.inactiveForeground': foundationColors.gray100 + 'AA',
}
