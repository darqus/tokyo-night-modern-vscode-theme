/**
 * Token Utilities - Utilities for working with design tokens
 *
 * This file contains utilities for:
 * - Validating token values
 * - Generating CSS Custom Properties
 * - Converting tokens to different formats
 * - WCAG contrast checking
 */

import { tokens, lightThemeTokens } from './design-tokens'
import { primitiveColors } from './palette/foundation'

// Interface for token colors used in syntax highlighting
export interface TokenColor {
  name?: string
  scope: string | string[]
  settings: {
    foreground?: string
    background?: string
    fontStyle?: string
  }
}

// WCAG contrast checking utilities
export const contrastUtils = {
  /**
   * Calculate the relative luminance of a color
   * @param color - Hex color string
   * @returns Luminance value between 0 and 1
   */
  calculateLuminance: (color: string): number => {
    // Remove # if present
    const hex = color.replace('#', '')

    // Convert hex to RGB
    const r = parseInt(hex.substr(0, 2), 16) / 25
    const g = parseInt(hex.substr(2, 2), 16) / 25
    const b = parseInt(hex.substr(4, 2), 16) / 255

    // Apply gamma correction
    const correctedR =
      r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)
    const correctedG =
      g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4)
    const correctedB =
      b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)

    // Calculate luminance
    return 0.2126 * correctedR + 0.7152 * correctedG + 0.0722 * correctedB
  },

  /**
   * Calculate the contrast ratio between two colors
   * @param color1 - First color in hex format
   * @param color2 - Second color in hex format
   * @returns Contrast ratio (1-21)
   */
  calculateContrastRatio: (color1: string, color2: string): number => {
    const lum1 = contrastUtils.calculateLuminance(color1)
    const lum2 = contrastUtils.calculateLuminance(color2)

    const brightest = Math.max(lum1, lum2)
    const darkest = Math.min(lum1, lum2)

    return (brightest + 0.05) / (darkest + 0.05)
  },

  /**
   * Check if two colors meet WCAG contrast requirements
   * @param foreground - Foreground color
   * @param background - Background color
   * @param level - WCAG level ('AA' or 'AAA')
   * @param size - Text size in pixels ('small' < 18px, 'large' >= 18px)
   * @returns Boolean indicating if contrast is sufficient
   */
  meetsWCAG: (
    foreground: string,
    background: string,
    level: 'AA' | 'AAA' = 'AA',
    size: 'small' | 'large' = 'small'
  ): boolean => {
    const ratio = contrastUtils.calculateContrastRatio(foreground, background)

    if (level === 'AA') {
      return size === 'large' ? ratio >= 3.0 : ratio >= 4.5
    } else {
      // AAA
      return size === 'large' ? ratio >= 4.5 : ratio >= 7.0
    }
  },
}

// Token validation utilities
export const tokenValidator = {
  /**
   * Validate that a token path exists
   * @param path - Token path (e.g., 'color.background.primary')
   * @returns Boolean indicating if token exists
   */
  tokenExists: (path: string): boolean => {
    try {
      // Check in dark theme tokens
      const darkKeys = path.split('.')
      let current: any = tokens
      for (const key of darkKeys) {
        current = current?.[key]
        if (current === undefined) {
          break
        }
      }

      if (typeof current === 'string') {
        return true
      }

      // Check in light theme tokens
      let currentLight: any = lightThemeTokens
      for (const key of darkKeys) {
        currentLight = currentLight?.[key]
        if (currentLight === undefined) {
          return false
        }
      }

      return typeof currentLight === 'string'
    } catch (e) {
      return false
    }
  },

  /**
   * Validate that a color token has proper hex format
   * @param color - Color value to validate
   * @returns Boolean indicating if color is valid hex
   */
  isValidHex: (color: string): boolean => {
    // Handle colors with alpha (like #ffffff80)
    return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(color)
  },

  /**
   * Validate that a token value is a valid color
   * @param value - Token value to validate
   * @returns Boolean indicating if value is valid color
   */
  isValidColor: (value: string): boolean => {
    // Check if it's a valid hex color
    if (tokenValidator.isValidHex(value)) {
      return true
    }

    // Check if it's a valid primitive color
    if (Object.keys(primitiveColors).includes(value)) {
      return true
    }

    return false
  },
}

// CSS Custom Properties generation utilities
export const cssGenerator = {
  /**
   * Convert a token object to CSS Custom Properties
   * @param obj - Token object to convert
   * @param prefix - CSS variable prefix
   * @param parentKey - Parent key for nested properties
   * @returns Array of CSS custom property strings
   */
  tokensToCSSVars: (
    obj: any,
    prefix: string = '--theme',
    parentKey: string = ''
  ): string[] => {
    const vars: string[] = []

    for (const [key, value] of Object.entries(obj)) {
      const newKey = parentKey ? `${parentKey}-${key}` : key

      if (typeof value === 'string') {
        // It's a token value, create CSS variable
        vars.push(`  ${prefix}-${newKey}: ${value};`)
      } else if (typeof value === 'object') {
        // It's a nested object, recurse
        vars.push(...cssGenerator.tokensToCSSVars(value, prefix, newKey))
      }
    }

    return vars
  },

  /**
   * Generate CSS Custom Properties for dark theme
   * @returns CSS string with dark theme variables
   */
  generateDarkThemeCSS: (): string => {
    const cssVars = cssGenerator.tokensToCSSVars(tokens, '--tokyo-night')
    return `:root, .vscode-dark {\n${cssVars.join('\n')}\n}`
  },

  /**
   * Generate CSS Custom Properties for light theme
   * @returns CSS string with light theme variables
   */
  generateLightThemeCSS: (): string => {
    const cssVars = cssGenerator.tokensToCSSVars(
      lightThemeTokens,
      '--tokyo-night'
    )
    return `.vscode-light {\n${cssVars.join('\n')}\n}`
  },

  /**
   * Generate complete CSS with both themes
   * @returns CSS string with both dark and light theme variables
   */
  generateCompleteCSS: (): string => {
    return `${cssGenerator.generateDarkThemeCSS()}\n\n${cssGenerator.generateLightThemeCSS()}`
  },
}

// Token format conversion utilities
export const tokenConverter = {
  /**
   * Convert tokens to flat object format
   * @param obj - Token object to flatten
   * @param parentKey - Parent key for nested properties
   * @param result - Accumulator for flattened tokens
   * @returns Flattened token object
   */
  flattenTokens: (
    obj: any,
    parentKey: string = '',
    result: Record<string, string> = {}
  ): Record<string, string> => {
    for (const [key, value] of Object.entries(obj)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key

      if (typeof value === 'string') {
        result[newKey] = value
      } else if (typeof value === 'object') {
        tokenConverter.flattenTokens(value, newKey, result)
      }
    }

    return result
  },

  /**
   * Convert tokens to JSON format
   * @param theme - Theme to convert ('dark' or 'light')
   * @returns JSON string of tokens
   */
  tokensToJSON: (theme: 'dark' | 'light' = 'dark'): string => {
    const themeTokens = theme === 'dark' ? tokens : lightThemeTokens
    return JSON.stringify(tokenConverter.flattenTokens(themeTokens), null, 2)
  },

  /**
   * Convert tokens to Figma-compatible format
   * @param theme - Theme to convert ('dark' or 'light')
   * @returns Object with Figma-compatible token structure
   */
  tokensToFigma: (theme: 'dark' | 'light' = 'dark'): any => {
    const themeTokens = theme === 'dark' ? tokens : lightThemeTokens
    const flatTokens = tokenConverter.flattenTokens(themeTokens)

    const figmaTokens: any = {}
    for (const [key, value] of Object.entries(flatTokens)) {
      const path = key.split('.')
      let current = figmaTokens

      for (let i = 0; i < path.length - 1; i++) {
        if (!current[path[i]]) {
          current[path[i]] = {}
        }
        current = current[path[i]]
      }

      const lastKey = path[path.length - 1]
      current[lastKey] = {
        value: value,
        type: 'color', // Assuming all tokens in our system are colors
      }
    }

    return figmaTokens
  },
}
