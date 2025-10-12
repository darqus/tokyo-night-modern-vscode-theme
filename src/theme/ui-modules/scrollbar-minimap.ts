import { palette } from '../palette'

/**
 * Scrollbar & Minimap UI элементы
 * Эти токены отвечают за оформление полосы прокрутки и миникарты в VS Code
 */
export const scrollbarMinimapColors = {
  'editorOverviewRuler.addedForeground': palette.overviewRulerAddedFg,
  'editorOverviewRuler.border': palette.transparent,
  'editorOverviewRuler.bracketMatchForeground': palette.backgroundAlt,
  'editorOverviewRuler.deletedForeground': palette.redDark5,
  'editorOverviewRuler.errorForeground': palette.redDark,
  'editorOverviewRuler.findMatchForeground': palette.overviewRulerFindMatchFgAlpha44,
  'editorOverviewRuler.infoForeground': palette.cyanDark4,
  'editorOverviewRuler.modifiedForeground': palette.blueDark3,
  'editorOverviewRuler.rangeHighlightForeground': palette.overviewRulerRangeHighlightFgAlpha44,
  'editorOverviewRuler.selectionHighlightForeground': palette.overviewRulerSelectionHighlightFgAlpha30,
  'editorOverviewRuler.warningForeground': palette.yellow,
  'editorOverviewRuler.wordHighlightForeground': palette.overviewRulerWordHighlightFgAlpha55,
  'editorOverviewRuler.wordHighlightStrongForeground': palette.overviewRulerWordHighlightStrongFgAlpha66,
  'minimap.findMatchHighlight': palette.purpleAlpha80,
  'minimap.selectionHighlight': palette.selectionAlpha33,
  'minimapGutter.addedBackground': palette.greenDark5,
  'minimapGutter.deletedBackground': palette.redDark6,
  'minimapGutter.modifiedBackground': palette.blueDark3,
  'scrollbar.shadow': palette.scrollbarShadowAlpha,
  'scrollbarSlider.activeBackground': palette.scrollbarSliderBgAlpha34,
  'scrollbarSlider.background': palette.scrollbarSliderBgAlpha34,
  'scrollbarSlider.hoverBackground': palette.scrollbarSliderBgAlpha34,
}
