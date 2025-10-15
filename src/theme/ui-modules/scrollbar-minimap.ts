import { palette } from '../palette/index'

/**
 * Scrollbar & Minimap UI элементы
 * Эти токены отвечают за оформление полосы прокрутки и миникарты в VS Code
 */
export const scrollbarMinimapColors = {
  'editorOverviewRuler.addedForeground': palette.success,
  'editorOverviewRuler.border': palette.transparent,
  'editorOverviewRuler.bracketMatchForeground': palette.backgrounds.secondary,
  'editorOverviewRuler.deletedForeground': palette.error,
  'editorOverviewRuler.errorForeground': palette.error,
  'editorOverviewRuler.findMatchForeground': palette.selection + '44',
  'editorOverviewRuler.infoForeground': palette.info,
  'editorOverviewRuler.modifiedForeground': palette.primary,
  'editorOverviewRuler.rangeHighlightForeground':
    palette.special.highlight + '44',
  'editorOverviewRuler.selectionHighlightForeground': palette.selection + '30',
  'editorOverviewRuler.warningForeground': palette.yellow,
  'editorOverviewRuler.wordHighlightForeground':
    palette.special.highlight + '55',
  'editorOverviewRuler.wordHighlightStrongForeground':
    palette.special.highlight + '66',
  'minimap.findMatchHighlight': palette.purple + '80',
  'minimap.selectionHighlight': palette.selection + '33',
  'minimapGutter.addedBackground': palette.success,
  'minimapGutter.deletedBackground': palette.error,
  'minimapGutter.modifiedBackground': palette.primary,
  'scrollbar.shadow': palette.special.shadow + '80',
  'scrollbarSlider.activeBackground': palette.interactive.active + '34',
  'scrollbarSlider.background': palette.interactive.hover + '34',
  'scrollbarSlider.hoverBackground': palette.interactive.pressed + '34',
}
