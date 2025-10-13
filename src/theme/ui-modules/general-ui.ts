import { palette } from '../palette/index'

/**
 * General UI элементы
 * Эти токены отвечают за общие элементы пользовательского интерфейса в VS Code
 */
export const generalUIColors = {
  'breadcrumb.activeSelectionForeground': palette.blue,
  'breadcrumb.focusForeground': palette.blue,
  'breadcrumb.foreground': palette.textSecondary, // Замена для foregroundAlt
  'breadcrumbPicker.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  descriptionForeground: palette.textDisabled, // Замена для foregroundAlt4
  errorForeground: palette.textDisabled, // Замена для foregroundAlt4
  focusBorder: palette.borderFocus,
  foreground: palette.text, // Замена для foregroundAlt3
  'icon.foreground': palette.blue,
  'sash.hoverBorder': palette.interactive.hover, // Замена для sashHoverBorder
  'selection.background': palette.selection + '60', // Замена для selectionBgAlpha60
  'widget.border': palette.borders.subtle + '40', // Замена для borderAltAlpha40
  'widget.shadow': palette.special.shadow + '80', // Замена для widgetShadowAlpha
}
