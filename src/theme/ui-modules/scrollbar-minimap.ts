import { foundationColors } from '../palette/foundation/colors'
import { opacityLevels } from '../palette/foundation/opacity'

/**
 * Scrollbar & Minimap UI элементы
 * Эти токены отвечают за оформление полосы прокрутки и миникарты в VS Code
 */
export const scrollbarMinimapColors = {
  'editorOverviewRuler.addedForeground': foundationColors.green500,
  'editorOverviewRuler.border': foundationColors.transparent,
  'editorOverviewRuler.bracketMatchForeground': foundationColors.gray800,
  'editorOverviewRuler.deletedForeground': foundationColors.red500,
  'editorOverviewRuler.errorForeground': foundationColors.red500,
  'editorOverviewRuler.findMatchForeground': foundationColors.blue500 + '44',
  'editorOverviewRuler.infoForeground': foundationColors.cyan500,
  'editorOverviewRuler.modifiedForeground': foundationColors.blue500,
  'editorOverviewRuler.rangeHighlightForeground':
    foundationColors.blue500 + '44',
  'editorOverviewRuler.selectionHighlightForeground':
    foundationColors.blue500 + '30',
  'editorOverviewRuler.warningForeground': foundationColors.yellow500,
  'editorOverviewRuler.wordHighlightForeground':
    foundationColors.blue500 + '55',
  'editorOverviewRuler.wordHighlightStrongForeground':
    foundationColors.blue500 + '66',
  'minimap.findMatchHighlight':
    foundationColors.purple500 + opacityLevels.solid,
  'minimap.selectionHighlight': foundationColors.blue500 + '33',
  'minimapGutter.addedBackground': foundationColors.green500,
  'minimapGutter.deletedBackground': foundationColors.red500,
  'minimapGutter.modifiedBackground': foundationColors.blue500,
  'scrollbar.shadow': foundationColors.black + opacityLevels.solid,
  'scrollbarSlider.activeBackground': foundationColors.gray600 + '34',
  'scrollbarSlider.background': foundationColors.gray700 + '34',
  'scrollbarSlider.hoverBackground': foundationColors.gray500 + '34',
}
