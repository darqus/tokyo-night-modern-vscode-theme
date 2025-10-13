import { palette } from '../palette/index'

/**
 * Scrollbar & Minimap UI элементы
 * Эти токены отвечают за оформление полосы прокрутки и миникарты в VS Code
 */
export const scrollbarMinimapColors = {
  'editorOverviewRuler.addedForeground': palette.success, // Замена для overviewRulerAddedFg
  'editorOverviewRuler.border': palette.transparent,
  'editorOverviewRuler.bracketMatchForeground': palette.backgrounds.secondary, // Замена для backgroundAlt
  'editorOverviewRuler.deletedForeground': palette.error, // Замена для redDark5
  'editorOverviewRuler.errorForeground': palette.error, // Замена для redDark
  'editorOverviewRuler.findMatchForeground': palette.selection + '44', // Замена для overviewRulerFindMatchFgAlpha44
  'editorOverviewRuler.infoForeground': palette.info, // Замена для cyanDark4
  'editorOverviewRuler.modifiedForeground': palette.primary, // Замена для blueDark3
  'editorOverviewRuler.rangeHighlightForeground':
    palette.special.highlight + '44', // Замена для overviewRulerRangeHighlightFgAlpha44
  'editorOverviewRuler.selectionHighlightForeground': palette.selection + '30', // Замена для overviewRulerSelectionHighlightFgAlpha30
  'editorOverviewRuler.warningForeground': palette.yellow,
  'editorOverviewRuler.wordHighlightForeground':
    palette.special.highlight + '55', // Замена для overviewRulerWordHighlightFgAlpha55
  'editorOverviewRuler.wordHighlightStrongForeground':
    palette.special.highlight + '66', // Замена для overviewRulerWordHighlightStrongFgAlpha66
  'minimap.findMatchHighlight': palette.purple + '80', // Замена для purpleAlpha80
  'minimap.selectionHighlight': palette.selection + '33', // Замена для selectionAlpha33
  'minimapGutter.addedBackground': palette.success, // Замена для greenDark5
  'minimapGutter.deletedBackground': palette.error, // Замена для redDark6
  'minimapGutter.modifiedBackground': palette.primary, // Замена для blueDark3
  'scrollbar.shadow': palette.special.shadow + '80', // Замена для scrollbarShadowAlpha
  'scrollbarSlider.activeBackground': palette.interactive.active + '34', // Замена для scrollbarSliderBgAlpha34
  'scrollbarSlider.background': palette.interactive.hover + '34', // Замена для scrollbarSliderBgAlpha34
  'scrollbarSlider.hoverBackground': palette.interactive.pressed + '34', // Замена для scrollbarSliderBgAlpha34
}
