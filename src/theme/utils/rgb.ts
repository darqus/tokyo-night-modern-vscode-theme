/**
 * Utilities for working with RGB colors.
 * Centralized functions for conversion between HEX and RGB formats.
 */

export class RgbError extends Error {
  constructor(
    message: string,
    public readonly input?: string
  ) {
    super(message)
    this.name = 'RgbError'
  }
}

/**
 * Normalizes HEX color to #rrggbb or #rrggbbaa format (lowercase)
 *
 * @param hex - HEX color in any format (#RGB, #RRGGBB, #RGBA, RRGGBB, RRGGBBAA)
 * @returns Normalized HEX color (#rrggbb or #rrggbbaa)
 *
 * @example
 * ```ts
 * normalizeHex('f00') // '#ff0000'
 * normalizeHex('#F00') // '#ff0000'
 * normalizeHex('ff0000') // '#ff000'
 * normalizeHex('a4bce68a') // '#a4bce68a'
 * ```
 */
export function normalizeHex(hex: string): string {
  if (!hex || typeof hex !== 'string') {
    throw new RgbError(`Invalid hex input: ${hex}`, hex)
  }

  let normalized = hex.startsWith('#') ? hex : `#${hex}`

  // Handle 4-character format (#RGB -> #RRGBB)
  if (normalized.length === 4) {
    normalized = `#${normalized[1]}${normalized[1]}${normalized[2]}${normalized[2]}${normalized[3]}${normalized[3]}`
  }
  // Handle 5-character format (#RGBA -> #RRGGBBAA) - expand short format with alpha
  else if (normalized.length === 5) {
    normalized = `#${normalized[1]}${normalized[1]}${normalized[2]}${normalized[2]}${normalized[3]}${normalized[3]}${normalized[4]}${normalized[4]}`
  }
  // Check for valid lengths (7 for #RRGGBB, 9 for #RRGGBBAA)
  else if (normalized.length !== 7 && normalized.length !== 9) {
    throw new RgbError(`Invalid hex length: ${hex}`, hex)
  }

  if (
    !(
      /^#[0-9A-Fa-f]{6}$/.test(normalized) ||
      /^#[0-9A-Fa-f]{8}$/.test(normalized)
    )
  ) {
    throw new RgbError(`Invalid hex format: ${hex}`, hex)
  }

  return normalized.toLowerCase()
}

/**
 * Converts HEX color to RGB
 *
 * @param hex - HEX color in any format (#RGB, #RRGGBB, #RRGGBBAA, RRGGBB, RRGGBBAA)
 * @returns Object with RGB components (r, g, b from 0 to 255)
 *
 * @example
 * ```ts
 * hexToRgb('#ff0000') // { r: 255, g: 0, b: 0 }
 * hexToRgb('00ff00') // { r: 0, g: 255, b: 0 }
 * hexToRgb('#a4bce68a') // { r: 164, g: 188, b: 230 }
 * ```
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  try {
    const normalized = normalizeHex(hex)

    // Extract RGB part (first 6 characters after #)
    const rgbPart =
      normalized.length === 9 ? normalized.substring(0, 7) : normalized
    const r = Number.parseInt(rgbPart.slice(1, 3), 16)
    const g = Number.parseInt(rgbPart.slice(3, 5), 16)
    const b = Number.parseInt(rgbPart.slice(5, 7), 16)

    if (!(Number.isFinite(r) && Number.isFinite(g) && Number.isFinite(b))) {
      throw new RgbError(`Invalid RGB values from hex: ${hex}`, hex)
    }

    return { r, g, b }
  } catch (error) {
    if (error instanceof RgbError) {
      throw error
    }
    throw new RgbError(`Failed to convert hex to RGB: ${hex}`, hex)
  }
}

/**
 * Converts RGB to HEX color
 *
 * @param r - Red component (0-255)
 * @param g - Green component (0-255)
 * @param b - Blue component (0-255)
 * @returns HEX color in #rrggbb format
 *
 * @example
 * ```ts
 * rgbToHex(255, 0, 0) // '#ff0000'
 * ```
 */
export function rgbToHex(r: number, g: number, b: number): string {
  if (!(Number.isFinite(r) && Number.isFinite(g) && Number.isFinite(b))) {
    throw new RgbError(`Invalid RGB values: r=${r}, g=${g}, b=${b}`)
  }

  const toHex = (n: number) =>
    Math.max(0, Math.min(255, n)).toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
