/**
 * Palette manager with validation and caching
 */

import type {
  ColorVariant,
  UniversalPalette,
} from '../palette/universal-base.js'
import { universalBasePalette } from '../palette/universal-base.js'
import { memoize } from '../utils/cache.js'

/**
 * Palette validation result
 */
export interface PaletteValidationResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
}

/**
 * Palette manager with validation and caching capabilities
 */
export class PaletteManager {
  private currentPalette: UniversalPalette
  private validationCache = new Map<string, PaletteValidationResult>()

  constructor(initialPalette: UniversalPalette = universalBasePalette) {
    this.currentPalette = initialPalette
  }

  /**
   * Gets current palette
   */
  getPalette(): UniversalPalette {
    return this.currentPalette
  }

  /**
   * Sets new palette with validation
   */
  setPalette(palette: UniversalPalette): PaletteValidationResult {
    const validation = this.validatePalette(palette)

    if (validation.isValid) {
      this.currentPalette = palette
      this.clearValidationCache()
    }

    return validation
  }

  /**
   * Validates palette structure and values
   */
  validatePalette(palette: UniversalPalette): PaletteValidationResult {
    const cacheKey = this.generateCacheKey(palette)

    if (this.validationCache.has(cacheKey)) {
      return this.validationCache.get(cacheKey)!
    }

    const errors: string[] = []
    const warnings: string[] = []

    // Validate background colors
    this.validateColorVariants(
      palette.background as Record<string, unknown>,
      'background',
      errors,
      warnings
    )

    // Validate foreground colors
    this.validateColorVariants(
      palette.foreground as Record<string, unknown>,
      'foreground',
      errors,
      warnings
    )

    // Validate semantic colors
    this.validateColorVariants(
      palette.semantic as Record<string, unknown>,
      'semantic',
      errors,
      warnings
    )

    // Validate chromatic colors
    this.validateChromaticColors(palette.chromatic, errors, warnings)

    // Validate UI colors
    this.validateUIColors(palette.ui, errors, warnings)

    // Validate shadow
    this.validateColorVariant(
      palette.shadow as Record<string, unknown>,
      'shadow',
      errors,
      warnings
    )

    const result: PaletteValidationResult = {
      isValid: errors.length === 0,
      errors,
      warnings,
    }

    this.validationCache.set(cacheKey, result)
    return result
  }

  /**
   * Creates a palette variant with modified colors
   */
  createVariant(modifications: Partial<UniversalPalette>): UniversalPalette {
    const variant = this.deepMerge(
      this.currentPalette as Record<string, unknown>,
      modifications as Record<string, unknown>
    ) as UniversalPalette
    return variant
  }

  /**
   * Resets palette to default
   */
  resetToDefault(): void {
    this.currentPalette = universalBasePalette
    this.clearValidationCache()
  }

  /**
   * Gets palette statistics
   */
  getPaletteStats() {
    return {
      totalColors: this.countColors(this.currentPalette),
      validationCacheSize: this.validationCache.size,
      hasCustomPalette: this.currentPalette !== universalBasePalette,
    }
  }

  /**
   * Validates color variants structure
   */
  private validateColorVariants(
    variants: Record<string, unknown>,
    prefix: string,
    errors: string[],
    warnings: string[]
  ): void {
    for (const [key, variant] of Object.entries(variants)) {
      if (!variant || typeof variant !== 'object') {
        errors.push(`${prefix}.${key} is not a valid color variant`)
        continue
      }

      this.validateColorVariant(
        variant as Record<string, unknown>,
        `${prefix}.${key}`,
        errors,
        warnings
      )
    }
  }

  /**
   * Validates single color variant
   */
  private validateColorVariant(
    variant: Record<string, unknown>,
    path: string,
    errors: string[],
    _warnings: string[]
  ): void {
    const requiredVariants = ['dark', 'main', 'light', 'bright']

    for (const variantName of requiredVariants) {
      const value = variant[variantName]
      if (!(variantName in variant)) {
        errors.push(`${path} is missing ${variantName} variant`)
      } else if (!this.isValidHexColor(value as string)) {
        errors.push(`${path}.${variantName} is not a valid hex color`)
      }
    }
  }

  /**
   * Validates chromatic colors
   */
  private validateChromaticColors(
    chromatic: UniversalPalette['chromatic'],
    errors: string[],
    warnings: string[]
  ): void {
    const expectedColors = [
      'pink',
      'violet',
      'fuchsia',
      'purple',
      'indigo',
      'blue',
      'sky',
      'cyan',
      'teal',
      'emerald',
      'green',
      'lime',
      'yellow',
      'amber',
      'orange',
      'red',
      'rose',
      'neutral',
      'slate',
      'stone',
      'zinc',
      'gray',
    ]

    for (const colorName of expectedColors) {
      if (!(colorName in chromatic)) {
        warnings.push(`Missing chromatic color: ${colorName}`)
        continue
      }

      this.validateColorVariant(
        chromatic[colorName as keyof typeof chromatic] as Record<
          string,
          unknown
        >,
        `chromatic.${colorName}`,
        errors,
        warnings
      )
    }
  }

  /**
   * Validates UI colors
   */
  private validateUIColors(
    ui: UniversalPalette['ui'],
    errors: string[],
    warnings: string[]
  ): void {
    if (!(ui.white && this.isValidHexColor(ui.white))) {
      errors.push('ui.white is not a valid hex color')
    }

    if (!(ui.black && this.isValidHexColor(ui.black))) {
      errors.push('ui.black is not a valid hex color')
    }

    this.validateColorVariant(
      ui.border as Record<string, unknown>,
      'ui.border',
      errors,
      warnings
    )
    this.validateColorVariant(
      ui.scrollbar as Record<string, unknown>,
      'ui.scrollbar',
      errors,
      warnings
    )
    this.validateColorVariant(
      ui.selection as Record<string, unknown>,
      'ui.selection',
      errors,
      warnings
    )
  }

  /**
   * Checks if value is valid hex color
   */
  private isValidHexColor(value: string): boolean {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(value)
  }

  /**
   * Generates cache key for palette
   */
  private generateCacheKey(palette: UniversalPalette): string {
    return JSON.stringify(palette).slice(0, 100) // Simple hash for caching
  }

  /**
   * Clears validation cache
   */
  private clearValidationCache(): void {
    this.validationCache.clear()
  }

  /**
   * Deep merges objects
   */
  private deepMerge(
    target: Record<string, unknown>,
    source: Record<string, unknown>
  ): Record<string, unknown> {
    const result = { ...target }

    for (const [key, value] of Object.entries(source)) {
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        const targetValue = (result[key] as Record<string, unknown>) || {}
        const sourceValue = value as Record<string, unknown>
        result[key] = this.deepMerge(targetValue, sourceValue)
      } else {
        result[key] = value
      }
    }

    return result
  }

  /**
   * Counts total colors in palette
   */
  private countColors(palette: UniversalPalette): number {
    let count = 0

    // Count background colors
    count += Object.values(palette.background).reduce(
      (sum, variant) => sum + Object.keys(variant).length,
      0
    )

    // Count foreground colors
    count += Object.values(palette.foreground).reduce(
      (sum, variant) => sum + Object.keys(variant).length,
      0
    )

    // Count semantic colors
    count += Object.values(palette.semantic).reduce(
      (sum, variant) => sum + Object.keys(variant).length,
      0
    )

    // Count chromatic colors
    count += Object.values(palette.chromatic).reduce(
      (sum, variant) => sum + Object.keys(variant).length,
      0
    )

    // Count UI colors
    count += Object.keys(palette.ui).filter(
      (key) => typeof palette.ui[key as keyof typeof palette.ui] === 'string'
    ).length

    // Count UI color variants
    count += Object.values(palette.ui)
      .filter((value) => typeof value === 'object' && value !== null)
      .reduce(
        (sum, variant) => sum + Object.keys(variant as ColorVariant).length,
        0
      )

    // Count shadow colors
    count += Object.keys(palette.shadow).length

    return count
  }
}

/**
 * Memoized palette manager instance
 */
export const paletteManager = memoize(() => new PaletteManager())

/**
 * Factory function to create palette manager
 */
export function createPaletteManager(
  initialPalette?: UniversalPalette
): PaletteManager {
  return new PaletteManager(initialPalette)
}
