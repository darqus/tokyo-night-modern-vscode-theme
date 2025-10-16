/**
 * Tokyo Night Modern - Optimized Color Palette
 * Оптимизированная цветовая палитра с семантической структурой
 */

import {
  foundationColors as primitiveColors,
  getPrimitiveColor,
  getPrimitiveColorWithOpacity,
} from './foundation'
import {
  semanticColors,
  getSemanticColor,
  getSemanticColorWithOpacity,
  colorRoles,
} from './semantic'
import {
  uiColors,
  getUIColor,
  uiColorsWithAlpha,
  optimizedAlphaValues,
} from './ui'
import { syntaxColors, getSyntaxColor, flatSyntaxColors } from './syntax'

// Re-export all utilities
export {
  primitiveColors,
  semanticColors,
  uiColors,
  syntaxColors,
  colorRoles,
  optimizedAlphaValues,
  getPrimitiveColor,
  getPrimitiveColorWithOpacity,
  getSemanticColor,
  getSemanticColorWithOpacity,
  getUIColor,
  getSyntaxColor,
}

/**
 * Color validation utilities - утилиты валидации цветов
 */
export const colorValidation = {
  /**
   * Validate hex color format
   */
  isValidHex: (color: string): boolean => {
    return /^#[0-9a-fA-F]{6}$/.test(color)
  },

  /**
   * Get contrast ratio between two colors
   */
  getContrastRatio: (color1: string, color2: string): number => {
    // Convert hex to RGB
    const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
      const cleanHex = hex.replace('#', '')
      const r = parseInt(cleanHex.substring(0, 2), 16) / 255
      const g = parseInt(cleanHex.substring(2, 4), 16) / 255
      const b = parseInt(cleanHex.substring(4, 6), 16) / 255
      return { r, g, b }
    }

    // Calculate relative luminance
    const getLuminance = (r: number, g: number, b: number): number => {
      const RsRGB =
        r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)
      const GsRGB =
        g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4)
      const BsRGB =
        b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)
      return 0.2126 * RsRGB + 0.7152 * GsRGB + 0.0722 * BsRGB
    }

    const color1Rgb = hexToRgb(color1)
    const color2Rgb = hexToRgb(color2)

    const lum1 = getLuminance(color1Rgb.r, color1Rgb.g, color1Rgb.b)
    const lum2 = getLuminance(color2Rgb.r, color2Rgb.g, color2Rgb.b)

    const brightest = Math.max(lum1, lum2)
    const darkest = Math.min(lum1, lum2)

    return (brightest + 0.05) / (darkest + 0.05)
  },

  /**
   * Check if color meets WCAG contrast requirements
   */
  meetsWCAG: (
    foreground: string,
    background: string,
    level: 'AA' | 'AAA' = 'AA'
  ): boolean => {
    const ratio = colorValidation.getContrastRatio(foreground, background)
    return level === 'AA' ? ratio >= 4.5 : ratio >= 7.0
  },
}

/**
 * Combined color palette - объединенная цветовая палитра
 * Содержит все цвета в одном объекте для обратной совместимости
 */
export const palette = {
  // Primitive colors - базовые цвета
  ...primitiveColors,

  // Semantic colors - семантические цвета
  ...semanticColors,

  // UI colors - UI цвета
  ...uiColorsWithAlpha,

  // Syntax colors - синтаксические цвета
  ...flatSyntaxColors,

  // Legacy colors - цвета для обратной совместимости
  // Эти цвета будут постепенно заменены на семантические
  background: semanticColors.background,
  foreground: semanticColors.text,
  border: semanticColors.border,

  // Legacy accent colors
  blue: semanticColors.primary,
  purple: semanticColors.secondary,
  green: semanticColors.success,
  yellow: semanticColors.warning,
  red: semanticColors.error,
  cyan: semanticColors.info,

  // Legacy syntax colors
  function: syntaxColors.function,
  keyword: syntaxColors.keyword,
  string: syntaxColors.string,
  comment: syntaxColors.comment,
  variable: syntaxColors.variable,
  type: syntaxColors.type,
  class: syntaxColors.class,

  // Legacy UI colors
  editorBackground: uiColors.backgrounds.primary,
  editorForeground: uiColors.text.primary,
  editorForegroundPrimary: uiColors.text.primary,
  editorForegroundSecondary: uiColors.text.secondary,
  editorForegroundTertiary: uiColors.text.tertiary,
  editorForegroundDisabled: uiColors.text.disabled,
  editorForegroundInverse: uiColors.text.inverse,
  editorForegroundPlaceholder: uiColors.text.placeholder,
  sideBarBackground: uiColors.backgrounds.secondary,
  statusBarBackground: uiColors.backgrounds.secondary,
  activityBarBackground: uiColors.backgrounds.secondary,
  textPrimary: uiColors.text.primary,
  textSecondary: uiColors.text.secondary,
  textTertiary: uiColors.text.tertiary,
  textDisabled: uiColors.text.disabled,
  textWhite: uiColors.text.inverse,
  textPlaceholder: uiColors.text.placeholder,
  backgroundsPrimary: uiColors.backgrounds.primary,
  backgroundsSecondary: uiColors.backgrounds.secondary,
  backgroundsTertiary: uiColors.backgrounds.tertiary,
  backgroundsElevated: uiColors.backgrounds.elevated,
  backgroundsOverlay: uiColors.backgrounds.overlay,
  bordersDefault: uiColors.borders.default,
  bordersSubtle: uiColors.borders.subtle,
  bordersFocus: uiColors.borders.focus,
  bordersError: uiColors.borders.error,
  bordersWarning: uiColors.borders.warning,
  bordersSuccess: uiColors.borders.success,
  interactiveHover: uiColors.interactive.hover,
  interactiveActive: uiColors.interactive.active,
  interactiveSelected: uiColors.interactive.selected,
  interactiveDisabled: uiColors.interactive.disabled,
  interactivePressed: uiColors.interactive.pressed,
  specialShadow: uiColors.special.shadow,
  specialGlow: uiColors.special.glow,
  specialHighlight: uiColors.special.highlight,
  specialSelection: uiColors.special.selection,
  specialFocusRing: uiColors.special.focusRing,

  // Button colors - added to ensure consistent button theming
  buttonBackground: semanticColors.secondary,
  buttonForeground: uiColors.text.inverse,
  buttonHoverBackground: uiColors.interactive.hover,
  buttonActiveBackground: uiColors.interactive.active,
  buttonDisabledBackground: uiColors.interactive.disabled,
  buttonDisabledForeground: uiColors.text.disabled,

  // Utilities - утилиты
  colorValidation,
  optimizedAlphaValues,
}

/**
 * Palette statistics - статистика палитры
 */
export const paletteStats = {
  primitiveColors: Object.keys(primitiveColors).length,
  semanticColors: Object.keys(semanticColors).length,
  uiColors: Object.keys(uiColorsWithAlpha).length,
  syntaxColors: Object.keys(flatSyntaxColors).length,
  totalColors: Object.keys(palette).length,
  alphaVariants: Object.keys(optimizedAlphaValues).length,
  redundancyRate: 0, // Will be calculated
}

// Export the main palette as default
export default palette
