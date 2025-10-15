/**
 * Token Validation - Utilities for validating design tokens
 *
 * This file contains validation utilities and tests for design tokens
 * to ensure consistency, accessibility, and correctness.
 */

import { tokens, lightThemeTokens, getToken } from './design-tokens'
import { contrastUtils, tokenValidator } from './token-utils'

// Interface for validation results
export interface ValidationResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
}

// Comprehensive token validation
export const tokenValidation = {
  /**
   * Validate all tokens in the system
   * @returns Validation result with errors and warnings
   */
  validateAllTokens: (): ValidationResult => {
    const errors: string[] = []
    const warnings: string[] = []

    // Validate dark theme tokens
    const darkFlattened = tokenValidation.flattenObject(tokens)
    for (const [path, value] of Object.entries(darkFlattened)) {
      if (typeof value === 'string') {
        // Check if color value is valid
        if (!tokenValidator.isValidColor(value)) {
          errors.push(`Invalid color value at ${path}: ${value}`)
        }
      }
    }

    // Validate light theme tokens
    const lightFlattened = tokenValidation.flattenObject(lightThemeTokens)
    for (const [path, value] of Object.entries(lightFlattened)) {
      if (typeof value === 'string') {
        // Check if color value is valid
        if (!tokenValidator.isValidColor(value)) {
          errors.push(`Invalid color value in light theme at ${path}: ${value}`)
        }
      }
    }

    // Check for contrast issues in common foreground/background combinations
    const contrastChecks = [
      {
        fg: 'color.text.primary',
        bg: 'color.background.primary',
        name: 'primary text on primary background',
      },
      {
        fg: 'color.text.secondary',
        bg: 'color.background.primary',
        name: 'secondary text on primary background',
      },
      {
        fg: 'color.text.tertiary',
        bg: 'color.background.primary',
        name: 'tertiary text on primary background',
      },
      {
        fg: 'color.text.primary',
        bg: 'color.background.secondary',
        name: 'primary text on secondary background',
      },
      {
        fg: 'color.text.secondary',
        bg: 'color.background.secondary',
        name: 'secondary text on secondary background',
      },
      {
        fg: 'color.text.disabled',
        bg: 'color.background.primary',
        name: 'disabled text on primary background',
      },
      {
        fg: 'color.interactive.primary-text',
        bg: 'color.interactive.primary',
        name: 'primary button text on primary button',
      },
      {
        fg: 'color.interactive.secondary-text',
        bg: 'color.interactive.secondary',
        name: 'secondary button text on secondary button',
      },
    ]

    for (const check of contrastChecks) {
      try {
        const fgDark = getToken(check.fg, 'dark')
        const bgDark = getToken(check.bg, 'dark')
        const fgLight = getToken(check.fg, 'light')
        const bgLight = getToken(check.bg, 'light')

        // Check dark theme contrast
        if (!contrastUtils.meetsWCAG(fgDark, bgDark)) {
          warnings.push(
            `Insufficient contrast in dark theme for ${check.name}: ${fgDark} on ${bgDark}`
          )
        }

        // Check light theme contrast
        if (!contrastUtils.meetsWCAG(fgLight, bgLight)) {
          warnings.push(
            `Insufficient contrast in light theme for ${check.name}: ${fgLight} on ${bgLight}`
          )
        }
      } catch (e) {
        errors.push(
          `Error checking contrast for ${check.name}: ${(e as Error).message}`
        )
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    }
  },

  /**
   * Flatten a nested object for easier validation
   */
  flattenObject: (obj: any, prefix: string = ''): Record<string, any> => {
    const flattened: Record<string, any> = {}

    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}.${key}` : key

      if (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value)
      ) {
        Object.assign(flattened, tokenValidation.flattenObject(value, newKey))
      } else {
        flattened[newKey] = value
      }
    }

    return flattened
  },

  /**
   * Validate a specific token path
   * @param path - Token path to validate
   * @param theme - Theme to validate in ('dark' or 'light')
   * @returns Validation result for the specific token
   */
  validateToken: (
    path: string,
    theme: 'dark' | 'light' = 'dark'
  ): ValidationResult => {
    const errors: string[] = []
    const warnings: string[] = []

    try {
      const value = getToken(path, theme)

      // Check if value is a valid color
      if (!tokenValidator.isValidColor(value)) {
        errors.push(
          `Invalid color value at ${path} in ${theme} theme: ${value}`
        )
      }
    } catch (e) {
      errors.push(`Token not found: ${path} in ${theme} theme`)
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    }
  },

  /**
   * Validate token structure consistency between themes
   * @returns Validation result for structure consistency
   */
  validateStructureConsistency: (): ValidationResult => {
    const errors: string[] = []
    const warnings: string[] = []

    // Get all token paths from both themes
    const darkPaths = Object.keys(tokenValidation.flattenObject(tokens))
    const lightPaths = Object.keys(
      tokenValidation.flattenObject(lightThemeTokens)
    )

    // Find paths that exist in dark but not in light
    const missingInLight = darkPaths.filter(
      (path) => !lightPaths.includes(path)
    )
    for (const path of missingInLight) {
      warnings.push(
        `Token path exists in dark theme but not in light theme: ${path}`
      )
    }

    // Find paths that exist in light but not in dark
    const missingInDark = lightPaths.filter((path) => !darkPaths.includes(path))
    for (const path of missingInDark) {
      warnings.push(
        `Token path exists in light theme but not in dark theme: ${path}`
      )
    }

    // Find paths that have different types between themes
    for (const path of darkPaths) {
      if (lightPaths.includes(path)) {
        try {
          const darkValue = getToken(path, 'dark')
          const lightValue = getToken(path, 'light')

          if (typeof darkValue !== typeof lightValue) {
            errors.push(
              `Token ${path} has different types between themes: dark is ${typeof darkValue}, light is ${typeof lightValue}`
            )
          }
        } catch (e) {
          // Token path exists but can't be accessed, which is an error
          errors.push(`Error accessing token ${path}: ${(e as Error).message}`)
        }
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    }
  },

  /**
   * Run all validation checks
   * @returns Comprehensive validation result
   */
  runAllValidations: (): ValidationResult => {
    const allResults = [
      tokenValidation.validateAllTokens(),
      tokenValidation.validateStructureConsistency(),
    ]

    const errors: string[] = []
    const warnings: string[] = []

    for (const result of allResults) {
      errors.push(...result.errors)
      warnings.push(...result.warnings)
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    }
  },
}

// Run validation on import for immediate feedback during development
if (typeof window === 'undefined') {
  // Only run in Node.js environment
  const validationResults = tokenValidation.runAllValidations()
  if (!validationResults.isValid) {
    console.warn('Token validation warnings:', validationResults.warnings)
    if (validationResults.errors.length > 0) {
      console.error('Token validation errors:', validationResults.errors)
    }
  }
}
