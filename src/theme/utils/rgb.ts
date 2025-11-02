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
 * Normalizes HEX color to #rrggbb format (lowercase)
 *
 * @param hex - HEX color in any format (#RGB, #RRGGBB, RRGGBB)
 * @returns Normalized HEX color (#rrggbb)
 *
 * @example
 * ```ts
 * normalizeHex('f00') // '#ff0000'
 * normalizeHex('#F00') // '#ff0000'
 * normalizeHex('ff0000') // '#ff0000'
 * ```
 */
export function normalizeHex(hex: string): string {
  if (!hex || typeof hex !== 'string') {
    throw new RgbError(`Invalid hex input: ${hex}`, hex)
  }

  let normalized = hex.startsWith('#') ? hex : `#${hex}`
  if (normalized.length === 4) {
    normalized = `#${normalized[1]}${normalized[1]}${normalized[2]}${normalized[2]}${normalized[3]}${normalized[3]}`
  } else if (normalized.length !== 7) {
    throw new RgbError(`Invalid hex length: ${hex}`, hex)
  }

  if (!/^#[0-9A-Fa-f]{6}$/.test(normalized)) {
    throw new RgbError(`Invalid hex format: ${hex}`, hex)
  }

  return normalized.toLowerCase()
}

/**
 * Converts HEX color to RGB
 *
 * @param hex - HEX color in any format (#RGB, #RRGGBB, RRGGBB)
 * @returns Object with RGB components (r, g, b from 0 to 255)
 *
 * @example
 * ```ts
 * hexToRgb('#ff0000') // { r: 255, g: 0, b: 0 }
 * hexToRgb('00ff00') // { r: 0, g: 255, b: 0 }
 * ```
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  try {
    const normalized = normalizeHex(hex)
    const r = Number.parseInt(normalized.slice(1, 3), 16)
    const g = Number.parseInt(normalized.slice(3, 5), 16)
    const b = Number.parseInt(normalized.slice(5, 7), 16)

    if (!Number.isFinite(r) || !Number.isFinite(g) || !Number.isFinite(b)) {
      throw new RgbError(`Invalid RGB values from hex: ${hex}`, hex)
    }

    return { r, g, b }
  } catch (error) {
    if (error instanceof RgbError) throw error
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
  if (!Number.isFinite(r) || !Number.isFinite(g) || !Number.isFinite(b)) {
    throw new RgbError(`Invalid RGB values: r=${r}, g=${g}, b=${b}`)
  }

  const toHex = (n: number) =>
    Math.max(0, Math.min(255, n)).toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
