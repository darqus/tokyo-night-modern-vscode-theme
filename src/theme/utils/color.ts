import { hexToRgb, normalizeHex, rgbToHex } from './rgb.js'

export class ColorError extends Error {
  constructor(
    message: string,
    public readonly input?: string
  ) {
    super(message)
    this.name = 'ColorError'
  }
}

/**
 * Adds alpha channel to HEX color
 *
 * @param hex - HEX color (e.g., '#ff0000')
 * @param opacity - Opacity from 0 to 1
 * @returns HEX color with alpha channel (e.g., '#ff0000ff')
 *
 * @example
 * ```ts
 * alpha('#ff0000', 0.5) // '#ff000080'
 * ```
 */
export function alpha(hex: string, opacity: number): string {
  if (!isValidHex(hex)) {
    throw new ColorError(`Invalid hex color: ${hex}`, hex)
  }
  if (typeof opacity !== 'number' || !Number.isFinite(opacity)) {
    throw new ColorError(`Invalid opacity: ${opacity}`)
  }

  const normalized = normalizeHex(hex)
  const alphaValue = Math.round(Math.max(0, Math.min(1, opacity)) * 255)
  const alphaHex = alphaValue.toString(16).padStart(2, '0')
  return normalized + alphaHex
}

/**
 * Lightens HEX color by specified amount
 *
 * @param hex - HEX color to lighten
 * @param amount - Lightening coefficient from 0 to 1 (0 - no change, 1 - white)
 * @returns Lightened HEX color
 *
 * @example
 * ```ts
 * lighten('#000000', 0.5) // '#808080'
 * ```
 */
export function lighten(hex: string, amount: number): string {
  if (!isValidHex(hex)) {
    throw new ColorError(`Invalid hex color: ${hex}`, hex)
  }
  if (typeof amount !== 'number' || !Number.isFinite(amount)) {
    throw new ColorError(`Invalid amount: ${amount}`)
  }

  // Direct calculation instead of using mix for better performance
  const rgb = hexToRgb(hex)
  const clampedAmount = Math.max(0, Math.min(1, amount))
  const factor = 1 - clampedAmount

  const r = Math.round(rgb.r * factor + 255 * clampedAmount)
  const g = Math.round(rgb.g * factor + 255 * clampedAmount)
  const b = Math.round(rgb.b * factor + 255 * clampedAmount)

  return rgbToHex(r, g, b)
}

/**
 * Darkens HEX color by specified amount
 *
 * @param hex - HEX color to darken
 * @param amount - Darkening coefficient from 0 to 1 (0 - no change, 1 - black)
 * @returns Darkened HEX color
 *
 * @example
 * ```ts
 * darken('#ffffff', 0.5) // '#808080'
 * ```
 */
export function darken(hex: string, amount: number): string {
  if (!isValidHex(hex)) {
    throw new ColorError(`Invalid hex color: ${hex}`, hex)
  }
  if (typeof amount !== 'number' || !Number.isFinite(amount)) {
    throw new ColorError(`Invalid amount: ${amount}`)
  }

  // Direct calculation instead of using mix for better performance
  const rgb = hexToRgb(hex)
  const clampedAmount = Math.max(0, Math.min(1, amount))
  const factor = 1 - clampedAmount

  const r = Math.round(rgb.r * factor)
  const g = Math.round(rgb.g * factor)
  const b = Math.round(rgb.b * factor)

  return rgbToHex(r, g, b)
}

/**
 * Mixes two HEX colors in specified proportion
 *
 * @param hex1 - First HEX color
 * @param hex2 - Second HEX color
 * @param ratio - Mixing ratio from 0 to 1 (0 - first color, 1 - second color)
 * @returns Mixed HEX color
 *
 * @example
 * ```ts
 * mix('#ff0000', '#0000ff', 0.5) // '#800080' (purple)
 * ```
 */
export function mix(hex1: string, hex2: string, ratio: number): string {
  if (!isValidHex(hex1)) {
    throw new ColorError(`Invalid hex color: ${hex1}`, hex1)
  }
  if (!isValidHex(hex2)) {
    throw new ColorError(`Invalid hex color: ${hex2}`, hex2)
  }
  if (typeof ratio !== 'number' || !Number.isFinite(ratio)) {
    throw new ColorError(`Invalid ratio: ${ratio}`)
  }

  const rgb1 = hexToRgb(hex1)
  const rgb2 = hexToRgb(hex2)
  const clampedRatio = Math.max(0, Math.min(1, ratio))

  // Pre-calculate the inverse ratio to avoid repeated calculation
  const invRatio = 1 - clampedRatio

  const r = Math.round(rgb1.r * invRatio + rgb2.r * clampedRatio)
  const g = Math.round(rgb1.g * invRatio + rgb2.g * clampedRatio)
  const b = Math.round(rgb1.b * invRatio + rgb2.b * clampedRatio)

  return rgbToHex(r, g, b)
}

/**
 * Checks if string is a valid HEX color
 *
 * @param hex - String to check
 * @returns true if string is a valid HEX color
 *
 * @example
 * ```ts
 * isValidHex('#ff0000') // true
 * isValidHex('ff0000') // true
 * isValidHex('#f00') // true
 * isValidHex('invalid') // false
 * ```
 */
export function isValidHex(hex: string): boolean {
  return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(hex)
}

// Re-export for backward compatibility
export { hexToRgb, normalizeHex, rgbToHex } from './rgb.js'
