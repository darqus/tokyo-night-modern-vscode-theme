import { validateContrast } from './contrast'

export interface AccessibilityIssue {
  type: 'contrast' | 'color_blindness' | 'large_text' | 'focus_indicator'
  severity: 'error' | 'warning' | 'info'
  message: string
  element?: string
  colors?: {
    foreground?: string
    background?: string
  }
  suggestion?: string
}

export interface ValidationResult {
  isValid: boolean
  score: number // 0-100
  issues: AccessibilityIssue[]
  summary: {
    errors: number
    warnings: number
    infos: number
  }
}

export interface ColorPalette {
  [key: string]: string
}

/**
 * Validate accessibility of a color palette
 */
export function validateAccessibility(colors: ColorPalette): ValidationResult {
  const issues: AccessibilityIssue[] = []

  // Validate text contrast combinations
  const textContrastPairs = generateTextContrastPairs(colors)
  for (const pair of textContrastPairs) {
    const result = validateContrast(
      pair.foreground,
      pair.background,
      'AA',
      'normal'
    )
    if (!result.isValid) {
      issues.push({
        type: 'contrast',
        severity: 'error',
        message: `Insufficient contrast ratio for ${pair.element}: ${result.ratio}:1 (required: ${result.requiredRatio}:1)`,
        element: pair.element,
        colors: { foreground: pair.foreground, background: pair.background },
        suggestion:
          'Increase contrast by adjusting foreground or background color',
      })
    }
  }

  // Validate large text contrast (more lenient)
  const largeTextPairs = generateLargeTextContrastPairs(colors)
  for (const pair of largeTextPairs) {
    const result = validateContrast(
      pair.foreground,
      pair.background,
      'AA',
      'large'
    )
    if (!result.isValid) {
      issues.push({
        type: 'large_text',
        severity: 'warning',
        message: `Large text contrast could be improved for ${pair.element}: ${result.ratio}:1`,
        element: pair.element,
        colors: { foreground: pair.foreground, background: pair.background },
      })
    }
  }

  // Check for focus indicators
  if (!hasAdequateFocusIndicators(colors)) {
    issues.push({
      type: 'focus_indicator',
      severity: 'warning',
      message: 'Focus indicators may not provide sufficient contrast',
      suggestion:
        'Ensure focus rings have at least 3:1 contrast ratio against adjacent colors',
    })
  }

  // Color blindness considerations
  const colorBlindnessIssues = checkColorBlindnessIssues(colors)
  issues.push(...colorBlindnessIssues)

  // Calculate score
  const score = calculateAccessibilityScore(issues)

  return {
    isValid: issues.filter((i) => i.severity === 'error').length === 0,
    score,
    issues,
    summary: {
      errors: issues.filter((i) => i.severity === 'error').length,
      warnings: issues.filter((i) => i.severity === 'warning').length,
      infos: issues.filter((i) => i.severity === 'info').length,
    },
  }
}

/**
 * Generate text contrast pairs to validate
 */
function generateTextContrastPairs(colors: ColorPalette) {
  const pairs = []

  // Primary text on backgrounds
  if (colors.textPrimary && colors.backgroundPrimary) {
    pairs.push({
      foreground: colors.textPrimary,
      background: colors.backgroundPrimary,
      element: 'primary text',
    })
  }

  if (colors.textSecondary && colors.backgroundPrimary) {
    pairs.push({
      foreground: colors.textSecondary,
      background: colors.backgroundPrimary,
      element: 'secondary text',
    })
  }

  // Interactive elements
  if (colors.interactivePrimary && colors.backgroundPrimary) {
    pairs.push({
      foreground: colors.interactivePrimary,
      background: colors.backgroundPrimary,
      element: 'interactive elements',
    })
  }

  return pairs
}

/**
 * Generate large text contrast pairs (more lenient requirements)
 */
function generateLargeTextContrastPairs(colors: ColorPalette) {
  const pairs = []

  // Headings
  if (colors.heading && colors.backgroundPrimary) {
    pairs.push({
      foreground: colors.heading,
      background: colors.backgroundPrimary,
      element: 'headings',
    })
  }

  return pairs
}

/**
 * Check if palette has adequate focus indicators
 */
function hasAdequateFocusIndicators(colors: ColorPalette): boolean {
  // This is a simplified check - in practice, you'd need more context
  return colors.focusRing !== undefined
}

/**
 * Check for potential color blindness issues
 */
function checkColorBlindnessIssues(colors: ColorPalette): AccessibilityIssue[] {
  const issues: AccessibilityIssue[] = []

  // Check for red-green color reliance
  const redGreenDependent = ['error', 'success', 'status']
  const hasRedGreenIssues = redGreenDependent.some((key) => {
    const colorKey = Object.keys(colors).find((k) => k.includes(key))
    return colorKey && colors[colorKey]
  })

  if (hasRedGreenIssues) {
    issues.push({
      type: 'color_blindness',
      severity: 'info',
      message:
        'Color scheme uses red-green combinations that may affect color-blind users',
      suggestion:
        'Consider adding additional visual cues (icons, patterns) alongside color coding',
    })
  }

  return issues
}

/**
 * Calculate accessibility score (0-100)
 */
function calculateAccessibilityScore(issues: AccessibilityIssue[]): number {
  const errorWeight = 10
  const warningWeight = 3
  const infoWeight = 1

  const penalty = issues.reduce((total, issue) => {
    switch (issue.severity) {
      case 'error':
        return total + errorWeight
      case 'warning':
        return total + warningWeight
      case 'info':
        return total + infoWeight
      default:
        return total
    }
  }, 0)

  return Math.max(0, Math.min(100, 100 - penalty))
}

/**
 * Validate a single color pair for accessibility
 */
export function validateColorPair(
  foreground: string,
  background: string,
  context: string = 'text'
): ValidationResult {
  const result = validateContrast(foreground, background, 'AA', 'normal')
  const issues: AccessibilityIssue[] = []

  if (!result.isValid) {
    issues.push({
      type: 'contrast',
      severity: 'error',
      message: `Insufficient contrast for ${context}: ${result.ratio}:1 (required: ${result.requiredRatio}:1)`,
      colors: { foreground, background },
      suggestion: 'Adjust colors to meet WCAG AA contrast requirements',
    })
  }

  return {
    isValid: result.isValid,
    score: result.isValid ? 100 : 0,
    issues,
    summary: {
      errors: issues.filter((i) => i.severity === 'error').length,
      warnings: issues.filter((i) => i.severity === 'warning').length,
      infos: issues.filter((i) => i.severity === 'info').length,
    },
  }
}
