import { getToken } from '../design-tokens'

/**
 * General UI элементы
 * Эти токены отвечают за общие элементы пользовательского интерфейса в VS Code
 */
export const generalUIColors = {
  'breadcrumb.activeSelectionForeground': getToken('accent.primary'),
  'breadcrumb.focusForeground': getToken('accent.primary'),
  'breadcrumb.foreground': getToken('color.text.secondary'),
  'breadcrumbPicker.background': getToken('color.background.secondary'),
  descriptionForeground: getToken('color.text.disabled'),
  errorForeground: getToken('color.text.disabled'),
  focusBorder: getToken('color.border.focus'),
  foreground: getToken('color.text.primary'),
  'icon.foreground': getToken('accent.primary'),
  'sash.hoverBorder': getToken('color.interactive.hover'),
  'selection.background': getToken('color.special.selection') + '60',
  'widget.border': getToken('color.border.subtle') + '40',
  'widget.shadow': getToken('color.special.shadow') + '80',
}
