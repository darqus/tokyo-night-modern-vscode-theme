/**
 * WCAG Contrast Checker - Utilities for validating color contrast ratios
 *
 * This file contains utilities for:
 * - Calculating relative luminance of colors
 * - Calculating contrast ratios between colors
 * - Validating WCAG 2.1 compliance for color pairs
 * - Providing accessibility feedback
 */

/**
 * Calculate the relative luminance of a color
 * @param color - Hex color string (with or without # prefix)
 * @returns Luminance value between 0 and 1
 */
export function calculateLuminance(color: string): number {
  // Remove # if present
  const hex = color.replace('#', '')

  // Validate hex format
  if (!/^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex)) {
    throw new Error(`Invalid hex color format: ${color}`)
  }

  // Handle 3-digit hex colors by expanding to 6-digit
  let r: number, g: number, b: number
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16)
    g = parseInt(hex[1] + hex[1], 16)
    b = parseInt(hex[2] + hex[2], 16)
  } else {
    r = parseInt(hex.substring(0, 2), 16)
    g = parseInt(hex.substring(2, 4), 16)
    b = parseInt(hex.substring(4, 6), 16)
  }

  // Convert RGB values to sRGB
  const rSRGB = r / 255
  const gSRGB = g / 255
  const bSRGB = b / 255

  // Apply gamma correction to convert to linear RGB
  const correctedR =
    rSRGB <= 0.03928 ? rSRGB / 12.92 : Math.pow((rSRGB + 0.055) / 1.055, 2.4)
  const correctedG =
    gSRGB <= 0.03928 ? gSRGB / 12.92 : Math.pow((gSRGB + 0.055) / 1.05, 2.4)
  const correctedB =
    bSRGB <= 0.03928 ? bSRGB / 12.92 : Math.pow((bSRGB + 0.055) / 1.055, 2.4)

  // Calculate and return luminance
  return 0.2126 * correctedR + 0.7152 * correctedG + 0.0722 * correctedB
}

/**
 * Calculate the contrast ratio between two colors
 * @param color1 - First color in hex format
 * @param color2 - Second color in hex format
 * @returns Contrast ratio between 1 and 21
 */
export function calculateContrastRatio(color1: string, color2: string): number {
  const lum1 = calculateLuminance(color1)
  const lum2 = calculateLuminance(color2)

  // Ensure the brighter color luminance is in the numerator
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)

  // Calculate and return contrast ratio
  return (brightest + 0.05) / (darkest + 0.05)
}

/**
 * Check if two colors meet WCAG contrast requirements
 * @param foreground - Foreground color in hex format
 * @param background - Background color in hex format
 * @param level - WCAG level ('AA' or 'AAA')
 * @param size - Text size ('small' < 18px, 'large' >= 18px)
 * @returns Object with compliance status and details
 */
export function checkWCAGCompliance(
  foreground: string,
  background: string,
  level: 'AA' | 'AAA' = 'AA',
  size: 'small' | 'large' = 'small'
): {
  compliant: boolean
  ratio: number
  requiredRatio: number
  level: string
  message: string
} {
  const ratio = calculateContrastRatio(foreground, background)

  // Define required contrast ratios based on WCAG guidelines
  let requiredRatio: number
  if (level === 'AA') {
    requiredRatio = size === 'large' ? 3.0 : 4.5
  } else {
    // AAA
    requiredRatio = size === 'large' ? 4.5 : 7.0
  }

  const compliant = ratio >= requiredRatio

  // Create a descriptive message
  let levelDescription = `${level} level (${size} text)`
  let message = compliant
    ? `✅ Compliant with ${levelDescription}: Contrast ratio is ${ratio.toFixed(2)}:1 (requires ${requiredRatio}:1)`
    : `❌ Not compliant with ${levelDescription}: Contrast ratio is ${ratio.toFixed(2)}:1 (requires ${requiredRatio}:1)`

  return {
    compliant,
    ratio,
    requiredRatio,
    level: levelDescription,
    message,
  }
}

/**
 * Get WCAG compliance details for common text/background combinations in light theme
 * @param lightThemeTokens - The light theme tokens to validate
 * @returns Array of compliance results
 */
export function validateLightThemeContrast(lightThemeTokens: any): Array<{
  name: string
  foreground: string
  background: string
  size: 'small' | 'large'
  aaCompliant: boolean
  aaaCompliant: boolean
  ratio: number
  message: string
}> {
  const results: Array<{
    name: string
    foreground: string
    background: string
    size: 'small' | 'large'
    aaCompliant: boolean
    aaaCompliant: boolean
    ratio: number
    message: string
  }> = []

  // Define common text/background combinations to check
  const checks = [
    {
      name: 'Primary text on primary background',
      fg: lightThemeTokens.color.text.primary,
      bg: lightThemeTokens.color.background.primary,
      size: 'small' as const,
    },
    {
      name: 'Secondary text on primary background',
      fg: lightThemeTokens.color.text.secondary,
      bg: lightThemeTokens.color.background.primary,
      size: 'small' as const,
    },
    {
      name: 'Tertiary text on primary background',
      fg: lightThemeTokens.color.text.tertiary,
      bg: lightThemeTokens.color.background.primary,
      size: 'small' as const,
    },
    {
      name: 'Primary text on secondary background',
      fg: lightThemeTokens.color.text.primary,
      bg: lightThemeTokens.color.background.secondary,
      size: 'small' as const,
    },
    {
      name: 'Secondary text on secondary background',
      fg: lightThemeTokens.color.text.secondary,
      bg: lightThemeTokens.color.background.secondary,
      size: 'small' as const,
    },
    {
      name: 'Placeholder text on primary background',
      fg: lightThemeTokens.color.text.placeholder,
      bg: lightThemeTokens.color.background.primary,
      size: 'small' as const,
    },
    {
      name: 'Primary button text on primary button',
      fg: lightThemeTokens.color.interactive['primary-text'],
      bg: lightThemeTokens.color.interactive.primary,
      size: 'small' as const,
    },
    {
      name: 'Secondary button text on secondary button',
      fg: lightThemeTokens.color.interactive['secondary-text'],
      bg: lightThemeTokens.color.interactive.secondary,
      size: 'small' as const,
    },
    {
      name: 'Link text on primary background',
      fg: lightThemeTokens.color.interactive.link,
      bg: lightThemeTokens.color.background.primary,
      size: 'small' as const,
    },
    {
      name: 'Success text on primary background',
      fg: lightThemeTokens.color.status.success,
      bg: lightThemeTokens.color.background.primary,
      size: 'small' as const,
    },
    {
      name: 'Warning text on primary background',
      fg: lightThemeTokens.color.status.warning,
      bg: lightThemeTokens.color.background.primary,
      size: 'small' as const,
    },
    {
      name: 'Error text on primary background',
      fg: lightThemeTokens.color.status.error,
      bg: lightThemeTokens.color.background.primary,
      size: 'small' as const,
    },
    {
      name: 'Info text on primary background',
      fg: lightThemeTokens.color.status.info,
      bg: lightThemeTokens.color.background.primary,
      size: 'small' as const,
    },
    {
      name: 'Large text (heading) on primary background',
      fg: lightThemeTokens.color.text.primary,
      bg: lightThemeTokens.color.background.primary,
      size: 'large' as const,
    },
  ]

  // Validate each combination
  for (const check of checks) {
    const aaResult = checkWCAGCompliance(check.fg, check.bg, 'AA', check.size)
    const aaaResult = checkWCAGCompliance(check.fg, check.bg, 'AAA', check.size)

    results.push({
      name: check.name,
      foreground: check.fg,
      background: check.bg,
      size: check.size,
      aaCompliant: aaResult.compliant,
      aaaCompliant: aaaResult.compliant,
      ratio: aaResult.ratio,
      message: `AA: ${aaResult.compliant ? 'PASS' : 'FAIL'}, AAA: ${aaaResult.compliant ? 'PASS' : 'FAIL'}, Ratio: ${aaResult.ratio.toFixed(2)}:1`,
    })
  }

  return results
}

/**
 * Generate a detailed report of contrast compliance for a light theme
 * @param lightThemeTokens - The light theme tokens to validate
 * @returns Detailed compliance report
 */
export function generateContrastReport(lightThemeTokens: any): {
  totalChecks: number
  compliantAA: number
  compliantAAA: number
  nonCompliant: number
  details: Array<{
    name: string
    foreground: string
    background: string
    size: 'small' | 'large'
    aaCompliant: boolean
    aaaCompliant: boolean
    ratio: number
    message: string
  }>
  summary: string
} {
  const details = validateLightThemeContrast(lightThemeTokens)
  // Example usage:
  // Only run in development when on localhost
  console.log('WCAG Contrast Checker utilities loaded')

  // Example of how to use the functions
  // Uncomment the following lines to test:
  /*
const exampleResult = checkWCAGCompliance('#1e293b', '#ffffff');
console.log('Example WCAG check:', exampleResult);

// To validate an entire theme:
// import { lightThemeTokens } from './light-theme-tokens';
// const report = generateContrastReport(lightThemeTokens);
// console.log(report.summary);
// console.log(report.details);
*/

  const totalChecks = details.length
  const compliantAA = details.filter((d) => d.aaCompliant).length
  const compliantAAA = details.filter((d) => d.aaaCompliant).length
  const nonCompliant = details.filter((d) => !d.aaCompliant).length

  const summary = `WCAG Contrast Compliance Report:
  - Total checks: ${totalChecks}
  - AA compliant: ${compliantAA}/${totalChecks}
  - AAA compliant: ${compliantAAA}/${totalChecks}
  - Non-compliant: ${nonCompliant}/${totalChecks}
  - AA compliance rate: ${((compliantAA / totalChecks) * 100).toFixed(1)}%
  - AAA compliance rate: ${((compliantAAA / totalChecks) * 100).toFixed(1)}%`

  return {
    totalChecks,
    compliantAA,
    compliantAAA,
    nonCompliant,
    details,
    summary,
  }
}
