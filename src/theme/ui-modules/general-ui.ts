import { palette } from '../palette/index'

/**
 * General UI элементы
 * Эти токены отвечают за общие элементы пользовательского интерфейса в VS Code
 */
export const generalUIColors = {
  'breadcrumb.activeSelectionForeground': palette.blue,
  'breadcrumb.focusForeground': palette.blue,
  'breadcrumb.foreground': palette.textSecondary,
  'breadcrumbPicker.background': palette.backgrounds.secondary,
  descriptionForeground: palette.textDisabled,
  errorForeground: palette.textDisabled,
  focusBorder: palette.borderFocus,
  foreground: palette.text,
  'icon.foreground': palette.blue,
  'sash.hoverBorder': palette.interactive.hover,
  'selection.background': palette.selection + '60',
  'widget.border': palette.borders.subtle + '40',
  'widget.shadow': palette.special.shadow + '80',
}
