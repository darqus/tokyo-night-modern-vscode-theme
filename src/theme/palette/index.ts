/**
 * Tokyo Night Modern - Optimized Color Palette
 * Оптимизированная цветовая палитра с семантической структурой
 */

import {
  getPrimitiveColor,
  getPrimitiveColorWithOpacity,
  foundationColors as primitiveColors,
} from './foundation'
import {
  colorRoles,
  getSemanticColor,
  getSemanticColorWithOpacity,
  semanticColors,
} from './semantic'
import { flatSyntaxColors, getSyntaxColor, syntaxColors } from './syntax'
import {
  getUIColor,
  optimizedAlphaValues,
  uiColors,
  uiColorsWithAlpha,
} from './ui'

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
      const RsRGB = r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4
      const GsRGB = g <= 0.03928 ? g / 12.92 : ((g + 0.055) / 1.055) ** 2.4
      const BsRGB = b <= 0.03928 ? b / 12.92 : ((b + 0.055) / 1.055) ** 2.4
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
