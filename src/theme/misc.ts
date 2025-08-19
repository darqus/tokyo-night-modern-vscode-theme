import { palette } from '../palette'
import { withAlpha } from '../utils/color'

export const getMiscColors = () => ({
  // Панели
  'panel.background': palette.bg.base,
  'panel.border': palette.line.border,
  'panelTitle.activeForeground': palette.fg.activeTitle,
  'panelTitle.inactiveForeground': palette.fg.inactive,
  'panelTitle.activeBorder': palette.bg.sunken,
  'panelInput.border': palette.bg.sunken,
  'panelSection.border': palette.line.border,
  'panelSectionHeader.foreground': palette.fg.primary,
  'panelSectionHeader.background': palette.bg.elevated,
  'panelSectionHeader.border': palette.line.border,
  'panelStickyScroll.background': palette.bg.elevated,
  'panelStickyScroll.border': palette.line.border,

  // Кнопки в контролах (поиск, замена и т.д.)
  'toolbar.hoverBackground': withAlpha(palette.bg.base, '13%'), // Фон при наведении на кнопки тулбара
  'toolbar.activeBackground': withAlpha(palette.bg.base, '13%'), // Фон активной кнопки тулбара

  // GitLens
  'gitlens.trailingLineForegroundColor': palette.ui.gitlens.foreground, // Текст в конце строки
  'gitlens.gutterUncommittedForegroundColor': palette.ui.gitlens.foreground, // Незакоммиченные изменения
  'gitlens.gutterForegroundColor': palette.ui.gitlens.foreground, // Общий текст GitLens

  // Хлебные крошки
  'breadcrumb.background': palette.bg.base,
  'breadcrumbPicker.background': palette.bg.elevated, // Немного отличается от основного фона
  'breadcrumb.foreground': palette.ui.breadcrumb, // Контрастный серый
  'breadcrumb.focusForeground': palette.fg.selectionText, // Белый для фокуса
  'breadcrumb.activeSelectionForeground': palette.fg.selectionText, // Белый для активного выбора
})
