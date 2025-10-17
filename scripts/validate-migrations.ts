import * as fs from 'node:fs'
import * as path from 'node:path'
import type { TokenColor } from '../src/theme/token-utils'
import { validateColorUsage } from '../src/theme/validation'

interface ValidationResult {
  success: boolean
  missingColors: string[]
  invalidColors: string[]
  accessibilityIssues: string[]
  warnings: string[]
}

/**
 * Проверяет результат миграции
 */
export async function validateMigration(): Promise<ValidationResult> {
  const result: ValidationResult = {
    success: true,
    missingColors: [],
    invalidColors: [],
    accessibilityIssues: [],
    warnings: [],
  }

  try {
    // Читаем текущий файл темы
    const themePath = path.join(
      __dirname,
      '../themes/tokyo-night-modern-color-theme.json'
    )
    const theme = JSON.parse(fs.readFileSync(themePath, 'utf8'))

    // Проверяем обязательные поля темы
    if (!theme.colors) {
      result.success = false
      result.missingColors.push('colors section is missing')
    }
    if (!theme.tokenColors) {
      result.success = false
      result.missingColors.push('tokenColors section is missing')
    }

    // Проверяем формат цветов
    Object.entries(theme.colors || {}).forEach(([key, value]) => {
      if (
        typeof value !== 'string' ||
        !/^#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/.test(value)
      ) {
        result.invalidColors.push(`${key}: ${value}`)
      }
    })

    // Проверяем токены цветов
    theme.tokenColors?.forEach((token: TokenColor) => {
      if (token.settings?.foreground) {
        if (
          !/^#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/.test(token.settings.foreground)
        ) {
          result.invalidColors.push(
            `Token ${token.scope}: ${token.settings.foreground}`
          )
        }
      }
    })

    // Проверяем использование цветов
    const usageValidation = validateColorUsage(theme)
    if (!usageValidation.isValid) {
      result.success = false
      usageValidation.issues.forEach((issue) => {
        if (issue.severity === 'error') {
          if (
            issue.message.includes('contrast') ||
            issue.message.includes('accessibility')
          ) {
            result.accessibilityIssues.push(issue.message)
          } else {
            result.invalidColors.push(issue.message)
          }
        } else if (issue.severity === 'warning') {
          result.warnings.push(issue.message)
        }
      })
    }

    // Если есть любые проблемы, считаем валидацию неуспешной
    if (
      result.missingColors.length > 0 ||
      result.invalidColors.length > 0 ||
      result.accessibilityIssues.length > 0
    ) {
      result.success = false
    }
  } catch (error: unknown) {
    result.success = false
    result.warnings.push(`Validation failed: ${(error as Error).message}`)
  }

  return result
}

/**
 * Генерирует отчет по валидации
 */
export function generateValidationReport(result: ValidationResult): string {
  const report: string[] = ['# Validation Report\n']

  if (result.success) {
    report.push('✅ Migration validation successful\n')
  } else {
    report.push('❌ Migration validation failed\n')
  }

  if (result.missingColors.length > 0) {
    report.push('\n## Missing Required Colors')
    result.missingColors.forEach((color) => {
      report.push(`- ${color}`)
    })
  }

  if (result.invalidColors.length > 0) {
    report.push('\n## Invalid Color Formats')
    result.invalidColors.forEach((color) => {
      report.push(`- ${color}`)
    })
  }

  if (result.accessibilityIssues.length > 0) {
    report.push('\n## Accessibility Issues')
    result.accessibilityIssues.forEach((issue) => {
      report.push(`- ${issue}`)
    })
  }

  if (result.warnings.length > 0) {
    report.push('\n## Warnings')
    result.warnings.forEach((warning) => {
      report.push(`- ${warning}`)
    })
  }

  return report.join('\n')
}

// Запускаем валидацию если скрипт вызван напрямую
if (require.main === module) {
  validateMigration()
    .then((result) => {
      const report = generateValidationReport(result)
      console.log(report)

      if (!result.success) {
        process.exit(1)
      }
    })
    .catch((error) => {
      console.error('Validation failed:', error)
      process.exit(1)
    })
}
