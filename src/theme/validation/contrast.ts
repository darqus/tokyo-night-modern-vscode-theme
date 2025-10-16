export interface ContrastResult {
  ratio: number
  isValid: boolean
  level: 'AA' | 'AAA' | null
  requiredRatio: number
}

export interface ColorPair {
  foreground: string
  background: string
}

/**
 * Calculate the contrast ratio between two colors
 * Based on WCAG guidelines: https://www.w3.org/TR/WCAG21/#contrast-minimum
 */
export function getContrastRatio(color1: string, color2: string): number {
  const lum1 = getLuminance(color1)
  const lum2 = getLuminance(color2)

  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)

  return (brightest + 0.05) / (darkest + 0.05)
}

/**
 * Validate contrast for a specific WCAG level
 */
export function validateContrast(
  foreground: string,
  background: string,
  level: 'AA' | 'AAA' = 'AA',
  size: 'normal' | 'large' = 'normal'
): ContrastResult {
  const ratio = getContrastRatio(foreground, background)

  let requiredRatio: number
  if (level === 'AAA') {
    requiredRatio = size === 'large' ? 4.5 : 7
  } else {
    requiredRatio = size === 'large' ? 3 : 4.5
  }

  const isValid = ratio >= requiredRatio
  const achievedLevel = ratio >= 7 ? 'AAA' : ratio >= 4.5 ? 'AA' : null

  return {
    ratio: Math.round(ratio * 100) / 100,
    isValid,
    level: achievedLevel,
    requiredRatio,
  }
}

/**
 * Validate multiple color pairs
 */
export function validateColorPairs(
  pairs: ColorPair[],
  level: 'AA' | 'AAA' = 'AA',
  size: 'normal' | 'large' = 'normal'
): ContrastResult[] {
  return pairs.map((pair) =>
    validateContrast(pair.foreground, pair.background, level, size)
  )
}

/**
 * Get luminance value for a color (0-1)
 * Based on: https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 */
export function getLuminance(color: string): number {
  const rgb = hexToRgb(color)
  if (!rgb) return 0

  const { r, g, b } = rgb

  // Convert to linear RGB values
  const toLinear = (val: number) => {
    val = val / 255
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
  }

  const rLinear = toLinear(r)
  const gLinear = toLinear(g)
  const bLinear = toLinear(b)

  // Calculate relative luminance
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear
}

/**
 * Convert hex color to RGB values
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

/**
 * Check if a color is valid hex format
 */
export function isValidHexColor(color: string): boolean {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)
}

/**
 * Get WCAG compliance summary for multiple color pairs
 */
export function getContrastSummary(results: ContrastResult[]): {
  total: number
  passing: number
  failing: number
  aaCompliant: number
  aaaCompliant: number
} {
  const passing = results.filter((r) => r.isValid).length
  const aaCompliant = results.filter(
    (r) => r.level === 'AA' || r.level === 'AAA'
  ).length
  const aaaCompliant = results.filter((r) => r.level === 'AAA').length

  return {
    total: results.length,
    passing,
    failing: results.length - passing,
    aaCompliant,
    aaaCompliant,
  }
}
