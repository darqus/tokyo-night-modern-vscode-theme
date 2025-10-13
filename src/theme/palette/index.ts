/**
 * Tokyo Night Modern - Optimized Color Palette
 * Оптимизированная цветовая палитра с семантической структурой
 */

import {
  primitiveColors,
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
    // Simplified contrast calculation
    // In a real implementation, you'd use proper luminance calculation
    return 1.0 // Placeholder
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
  textInverse: uiColors.text.inverse,
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

/**
 * Migration utilities - утилиты миграции
 */
export const migration = {
  /**
   * Get legacy color mapping
   */
  getLegacyMapping: (): Record<string, string> => {
    return {
      // Map old color names to new semantic names
      background: semanticColors.background,
      foreground: semanticColors.text,
      border: semanticColors.border,
      blue: semanticColors.primary,
      purple: semanticColors.secondary,
      green: semanticColors.success,
      yellow: semanticColors.warning,
      red: semanticColors.error,
      cyan: semanticColors.info,
    }
  },

  /**
   * Migrate old color reference to new semantic color
   */
  migrateColor: (oldColorName: string): string => {
    const mapping = migration.getLegacyMapping()
    return mapping[oldColorName] || oldColorName
  },
}

// Export the main palette as default
export default palette
