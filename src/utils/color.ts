import type { Hex } from '../palette'

/** Regular expression for checking hex colors */
const HEX_RE = /^#([0-9a-f]{6})([0-9a-f]{2})?$/i

/**
 * Ensures a 6-character hex format for a color
 * @param hex - The hex color to normalize
 * @returns A normalized 6-character hex color
 * @throws {Error} If the color is not in a valid hex format
 *
 * @example
 * ensure6('#ff0000') // '#ff0000'
 * ensure6('#FF0000') // '#ff0000' (converted to lowercase)
 */
function ensure6(hex: Hex): string {
  const m = HEX_RE.exec(hex)
  if (!m) throw new Error(`Invalid hex color: ${hex}`)
  return `#${m[1]}`.toLowerCase()
}

/**
 * Adds an alpha channel (transparency) to a hex color
 *
 * @param hex - The base hex color
 * @param alpha - Transparency (0-1 as a number or 'AA' as a hex string)
 * @returns A hex color with an alpha channel
 * @throws {Error} If the alpha value is incorrect
 *
 * @example
 * // Using a numeric value (0-1)
 * withAlpha('#ff0000', 0.5) // '#ff000080'
 * withAlpha('#ff0000', 0.25) // '#ff000040'
 *
 * // Using a hex string
 * withAlpha('#ff0000', '80') // '#ff000080'
 * withAlpha('#ff0000', 'FF') // '#ff0000ff'
 */
export function withAlpha(hex: Hex, alpha: number | string): Hex {
  const base = ensure6(hex)
  let a: string

  if (typeof alpha === 'number') {
    if (alpha < 0 || alpha > 1) {
      throw new Error('alpha number must be 0..1')
    }
    a = Math.round(alpha * 255)
      .toString(16)
      .padStart(2, '0')
  } else {
    // Assuming a hex format like 'AA'
    if (!/^[0-9a-fA-F]{2}$/.test(alpha)) {
      throw new Error('alpha hex must be two hex chars')
    }
    a = alpha.toLowerCase()
  }

  return `${base}${a}` as Hex
}

/**
 * Utility for converting a value to a string (identity function)
 * Used for compatibility with existing code
 *
 * @param v - The value to convert
 * @returns The same value without changes
 */
export function toString<T>(v: T): T {
  return v
}
