import type { ColorPalette } from './accessibility'

export interface UsageIssue {
  type: 'usage' | 'naming' | 'format' | 'consistency' | 'duplicate'
  severity: 'error' | 'warning' | 'info'
  message: string
  suggestion?: string
}

export interface UsageValidationResult {
  isValid: boolean
  score: number // 0-100
  issues: UsageIssue[]
  summary: {
    errors: number
    warnings: number
    infos: number
  }
}

export interface ColorUsageRule {
  name: string
  description: string
  validate: (colors: ColorPalette) => UsageIssue[]
}

export interface ThemeDefinition {
  name: string
  colors: ColorPalette
  semanticColors?: Record<string, string>
}

/**
 * Validate color usage in a theme definition
 */
export function validateColorUsage(
  theme: ThemeDefinition
): UsageValidationResult {
  const issues: UsageIssue[] = []

  // Apply all usage rules
  for (const rule of colorUsageRules) {
    const ruleIssues = rule.validate(theme.colors)
    issues.push(...ruleIssues)
  }

  // Validate semantic color consistency
  if (theme.semanticColors) {
    const semanticIssues = validateSemanticConsistency(
      theme.colors,
      theme.semanticColors
    )
    issues.push(...semanticIssues)
  }

  // Calculate score
  const score = calculateUsageScore(issues)

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
 * Validate semantic color consistency
 */
function validateSemanticConsistency(
  colors: ColorPalette,
  semanticColors: Record<string, string>
): UsageIssue[] {
  const issues: UsageIssue[] = []

  // Check if semantic colors reference existing colors
  for (const [semanticKey, colorValue] of Object.entries(semanticColors)) {
    if (!Object.values(colors).includes(colorValue)) {
      issues.push({
        type: 'consistency',
        severity: 'warning',
        message: `Semantic color '${semanticKey}' references undefined color '${colorValue}'`,
        suggestion:
          'Ensure semantic colors reference colors defined in the palette',
      })
    }
  }

  return issues
}

/**
 * Calculate usage validation score
 */
function calculateUsageScore(issues: UsageIssue[]): number {
  const errorWeight = 15
  const warningWeight = 5
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
 * Color usage rules
 */
const colorUsageRules: ColorUsageRule[] = [
  {
    name: 'required-colors',
    description: 'Ensure all required colors are defined',
    validate: (colors: ColorPalette) => {
      const issues: UsageIssue[] = []
      const requiredColors = [
        'backgroundPrimary',
        'textPrimary',
        'textSecondary',
        'interactivePrimary',
        'error',
        'success',
        'warning',
      ]

      for (const required of requiredColors) {
        if (!colors[required]) {
          issues.push({
            type: 'usage',
            severity: 'error',
            message: `Required color '${required}' is not defined`,
            suggestion: 'Define all required colors in the palette',
          })
        }
      }

      return issues
    },
  },
  {
    name: 'color-naming',
    description: 'Validate color naming conventions',
    validate: (colors: ColorPalette) => {
      const issues: UsageIssue[] = []
      const validPrefixes = [
        'background',
        'text',
        'border',
        'interactive',
        'syntax',
        'status',
      ]

      for (const [key] of Object.entries(colors)) {
        const hasValidPrefix = validPrefixes.some((prefix) =>
          key.startsWith(prefix)
        )
        if (!hasValidPrefix) {
          issues.push({
            type: 'naming',
            severity: 'info',
            message: `Color '${key}' does not follow naming conventions`,
            suggestion:
              'Use prefixes like background, text, border, interactive, syntax, status',
          })
        }
      }

      return issues
    },
  },
  {
    name: 'duplicate-colors',
    description: 'Check for duplicate color values',
    validate: (colors: ColorPalette) => {
      const issues: UsageIssue[] = []
      const colorValues = Object.values(colors)
      const duplicates = colorValues.filter(
        (value, index) => colorValues.indexOf(value) !== index
      )

      if (duplicates.length > 0) {
        issues.push({
          type: 'duplicate',
          severity: 'warning',
          message: `Found ${duplicates.length} duplicate color values`,
          suggestion:
            'Avoid duplicate color values; use semantic references instead',
        })
      }

      return issues
    },
  },
  {
    name: 'color-format',
    description: 'Validate color format consistency',
    validate: (colors: ColorPalette) => {
      const issues: UsageIssue[] = []
      const hexRegex = /^#[0-9A-Fa-f]{6}$/

      for (const [key, value] of Object.entries(colors)) {
        if (!hexRegex.test(value)) {
          issues.push({
            type: 'format',
            severity: 'warning',
            message: `Color '${key}' is not in valid hex format: ${value}`,
            suggestion: 'Use 6-digit hex colors (e.g., #RRGGBB)',
          })
        }
      }

      return issues
    },
  },
]

/**
 * Validate a single color usage rule
 */
export function validateColorUsageRule(
  colors: ColorPalette,
  ruleName: string
): UsageValidationResult {
  const rule = colorUsageRules.find((r) => r.name === ruleName)
  if (!rule) {
    return {
      isValid: false,
      score: 0,
      issues: [
        {
          type: 'usage',
          severity: 'error',
          message: `Unknown usage rule: ${ruleName}`,
        },
      ],
      summary: { errors: 1, warnings: 0, infos: 0 },
    }
  }

  const issues = rule.validate(colors)
  const score = calculateUsageScore(issues)

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
