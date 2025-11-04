import type { VSCodeTheme } from '../types/index.js'
import { isValidHex } from './color.js'
import { getContrastRatio } from './contrast.js'

/**
 * Theme validation result
 */
export interface ValidationResult {
  valid: boolean
  errors: string[]
  warnings: string[]
}

/**
 * VS Code theme validation
 */
export function validateTheme(theme: VSCodeTheme): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  // Check required fields
  if (!theme.name) {
    errors.push('Theme name is required')
  }

  if (!theme.type || !['dark', 'light'].includes(theme.type)) {
    errors.push('Theme type must be "dark" or "light"')
  }

  if (!theme.colors || typeof theme.colors !== 'object') {
    errors.push('Theme colors object is required')
  }

  if (!Array.isArray(theme.tokenColors)) {
    errors.push('Theme tokenColors must be an array')
  }

  // Validate UI colors
  if (theme.colors) {
    validateColors(theme.colors, errors, 'UI colors')
  }

  // Validate tokens
  if (Array.isArray(theme.tokenColors)) {
    theme.tokenColors.forEach((token, index) => {
      if (token.settings) {
        if (
          token.settings.foreground &&
          !isValidHex(token.settings.foreground)
        ) {
          errors.push(
            `Token ${index} (${token.name || 'unnamed'}): Invalid foreground color: ${token.settings.foreground}`
          )
        }
        if (
          token.settings.background &&
          !isValidHex(token.settings.background)
        ) {
          errors.push(
            `Token ${index} (${token.name || 'unnamed'}): Invalid background color: ${token.settings.background}`
          )
        }
      }
    })
  }

  // Validate semantic tokens
  if (theme.semanticTokenColors) {
    Object.entries(theme.semanticTokenColors).forEach(([key, style]) => {
      if (style.foreground && !isValidHex(style.foreground)) {
        errors.push(
          `Semantic token "${key}": Invalid foreground color: ${style.foreground}`
        )
      }
    })
  }

  // Check critical contrast combinations
  if (theme.colors && theme.type === 'dark') {
    const foreground = theme.colors.foreground
    const background =
      theme.colors['editor.background'] || theme.colors['editor.foreground']

    if (foreground && background) {
      try {
        const contrast = getContrastRatio(foreground, background)
        if (contrast < 4.5) {
          warnings.push(
            `Low contrast ratio between foreground and background: ${contrast.toFixed(2)}:1 (minimum 4.5:1 for WCAG AA)`
          )
        }
      } catch (error) {
        errors.push(
          `Failed to calculate contrast ratio: ${error instanceof Error ? error.message : String(error)}`
        )
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  }
}

/**
 * Validate colors object
 */
function validateColors(
  colors: Record<string, string>,
  errors: string[],
  context: string
): void {
  Object.entries(colors).forEach(([key, value]) => {
    if (!value) {
      errors.push(`${context}: Missing value for "${key}"`)
      return
    }

    if (typeof value !== 'string') {
      errors.push(`${context}: "${key}" must be a string, got ${typeof value}`)
      return
    }

    if (!isValidHex(value)) {
      errors.push(`${context}: Invalid hex color for "${key}": ${value}`)
    }

    // Check for undefined/null strings
    if (value === 'undefined' || value === 'null') {
      errors.push(`${context}: "${key}" has invalid value: ${value}`)
    }
  })
}

/**
 * Check critical colors for contrast
 */
export function validateCriticalContrast(theme: VSCodeTheme): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  if (!theme.colors || theme.type !== 'dark') {
    return { valid: true, errors, warnings }
  }

  const criticalPairs: Array<[string, string, string]> = [
    ['foreground', 'editor.background', 'Editor foreground/background'],
    ['button.foreground', 'button.background', 'Button text'],
    ['input.foreground', 'input.background', 'Input text'],
  ]

  criticalPairs.forEach(([fgKey, bgKey, name]) => {
    const fg = theme.colors[fgKey]
    const bg = theme.colors[bgKey]

    if (fg && bg) {
      try {
        const ratio = getContrastRatio(fg, bg)
        if (ratio < 4.5) {
          errors.push(
            `${name}: Contrast ratio ${ratio.toFixed(2)}:1 is below WCAG AA minimum (4.5:1)`
          )
        } else if (ratio < 7) {
          warnings.push(
            `${name}: Contrast ratio ${ratio.toFixed(2)}:1 meets AA but not AAA (7:1)`
          )
        }
      } catch (error) {
        errors.push(
          `${name}: Failed to calculate contrast ratio: ${error instanceof Error ? error.message : String(error)}`
        )
      }
    }
  })

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  }
}
