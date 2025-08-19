import { palette } from '../palette'
import { withAlpha } from '../utils/color'

export const getTabColors = () => ({
  // Вкладки
  'tab.activeBackground': palette.bg.base, // Фон активной вкладки
  'tab.inactiveBackground': palette.bg.elevated, // Фон неактивной вкладки
  'tab.activeForeground': palette.fg.primary, // Текст активной вкладки - более яркий
  'tab.hoverForeground': palette.fg.selectionText, // Текст при наведении - максимальная контрастность
  'tab.activeBorder': palette.ui.badge.base, // Граница активной вкладки - синхронизация с бейджами
  'tab.inactiveForeground': palette.fg.muted, // Текст неактивной вкладки - более контрастный
  'tab.border': palette.line.border,
  'tab.unfocusedActiveForeground': palette.fg.primary, // Текст активной вкладки в неактивном окне
  'tab.unfocusedInactiveForeground': palette.fg.muted, // Текст неактивной вкладки в неактивном окне
  'tab.unfocusedHoverForeground': palette.fg.primary, // Текст при наведении в неактивном окне
  'tab.activeModifiedBorder': palette.ui.tab.activeModifiedBorder,
  'tab.inactiveModifiedBorder': palette.ui.tab.inactiveModifiedBorder,
  'tab.unfocusedActiveBorder': palette.ui.badge.base, // Синхронизация с бейджами
  'tab.lastPinnedBorder': withAlpha(palette.fg.subtle, '80%'), // Более заметная граница
  'tab.selectedBackground': palette.bg.base, // Фон выбранной вкладки
  'tab.selectedForeground': withAlpha(palette.fg.selectionText, '63%'), // Текст выбранной вкладки
})
