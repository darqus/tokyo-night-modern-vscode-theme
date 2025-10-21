import type { Palette } from './types'
import { getContrastRatio, meetsWCAGContrast } from './color-utils'

/**
 * Интерфейс для результата проверки контрастности
 */
export interface ContrastCheckResult {
  element1: string
  color1: string
  element2: string
  color2: string
  contrastRatio: number
  meetsAA: boolean
  meetsAAA: boolean
  required: 'AA' | 'AAA'
  isValid: boolean
}

/**
 * Интерфейс для настройки проверки контрастности
 */
export interface ContrastValidationConfig {
  backgroundColor: string
  requiredLevel: 'AA' | 'AAA'
  checks: Array<{
    element: string
    color: string
    required: 'AA' | 'AAA'
  }>
}

/**
 * Проверяет контрастность между парами элементов
 */
export function validateContrastPairs(
  _palette: Palette,
  pairs: Array<{
    element1: string
    color1: string
    element2: string
    color2: string
    required: 'AA' | 'AAA'
  }>
): ContrastCheckResult[] {
  return pairs.map((pair) => {
    const contrastRatio = getContrastRatio(pair.color1, pair.color2)
    const meetsAA = meetsWCAGContrast(pair.color1, pair.color2, 'AA')
    const meetsAAA = meetsWCAGContrast(pair.color1, pair.color2, 'AAA')
    const isValid = pair.required === 'AA' ? meetsAA : meetsAAA

    return {
      element1: pair.element1,
      color1: pair.color1,
      element2: pair.element2,
      color2: pair.color2,
      contrastRatio: parseFloat(contrastRatio.toFixed(2)),
      meetsAA,
      meetsAAA,
      required: pair.required,
      isValid,
    }
  })
}

/**
 * Проверяет контрастность всех элементов с фоном
 */
export function validateContrastWithBackground(
  _palette: Palette,
  backgroundColor: string,
  elements: Array<{ element: string; color: string; required: 'AA' | 'AAA' }>
): ContrastCheckResult[] {
  return elements.map((element) => {
    const contrastRatio = getContrastRatio(element.color, backgroundColor)
    const meetsAA = meetsWCAGContrast(element.color, backgroundColor, 'AA')
    const meetsAAA = meetsWCAGContrast(element.color, backgroundColor, 'AAA')
    const isValid = element.required === 'AA' ? meetsAA : meetsAAA

    return {
      element1: element.element,
      color1: element.color,
      element2: 'background',
      color2: backgroundColor,
      contrastRatio: parseFloat(contrastRatio.toFixed(2)),
      meetsAA,
      meetsAAA,
      required: element.required,
      isValid,
    }
  })
}

/**
 * Проверяет общую контрастность палитры
 */
export function validatePaletteContrast(
  palette: Palette
): ContrastCheckResult[] {
  const results: ContrastCheckResult[] = []

  // Проверка контраста текста с фоном
  results.push(
    ...validateContrastWithBackground(
      palette,
      palette.workbench.background.base,
      [
        {
          element: 'foreground.base',
          color: palette.workbench.foreground.base,
          required: 'AA',
        },
        {
          element: 'foreground.secondary',
          color: palette.workbench.foreground.secondary,
          required: 'AA',
        },
        { element: 'syntax.text', color: palette.syntax.text, required: 'AA' },
        {
          element: 'syntax.comments',
          color: palette.syntax.comments,
          required: 'AA',
        },
      ]
    )
  )

  // Проверка контраста акцентных элементов
  results.push(
    ...validateContrastWithBackground(
      palette,
      palette.workbench.background.secondary,
      [
        {
          element: 'accent.primary',
          color: palette.workbench.accent.primary,
          required: 'AA',
        },
        {
          element: 'button.primaryForeground',
          color: palette.button.primaryForeground,
          required: 'AA',
        },
      ]
    )
  )

  // Проверка контраста между основными элементами интерфейса
  results.push(
    ...validateContrastPairs(palette, [
      {
        element1: 'foreground.base',
        color1: palette.workbench.foreground.base,
        element2: 'workbench.background.secondary',
        color2: palette.workbench.background.secondary,
        required: 'AA',
      },
      {
        element1: 'accent.primary',
        color1: palette.workbench.accent.primary,
        element2: 'button.primaryBackground',
        color2: palette.button.primaryBackground,
        required: 'AA',
      },
      {
        element1: 'syntax.keywords',
        color1: palette.syntax.keywords,
        element2: 'syntax.variables',
        color2: palette.syntax.variables,
        required: 'AA',
      },
      {
        element1: 'syntax.strings',
        color1: palette.syntax.strings,
        element2: 'syntax.numbers',
        color2: palette.syntax.numbers,
        required: 'AA',
      },
    ])
  )

  return results
}

/**
 * Возвращает отчет о проверке контрастности
 */
export function getContrastValidationReport(palette: Palette): {
  totalChecks: number
  passedChecks: number
  failedChecks: number
  violations: ContrastCheckResult[]
  suggestions: string[]
} {
  const results = validatePaletteContrast(palette)

  const passedChecks = results.filter((r) => r.isValid).length
  const failedChecks = results.filter((r) => !r.isValid).length
  const violations = results.filter((r) => !r.isValid)

  const suggestions: string[] = []

  // Генерация рекомендаций для нарушений
  violations.forEach((violation) => {
    suggestions.push(
      `Низкий контраст: ${violation.element1} (${violation.color1}) vs ${violation.element2} (${violation.color2}). ` +
        `Требуется: ${violation.required} (коэффициент ${violation.required === 'AA' ? '4.5:1' : '7:1'}), ` +
        `фактический: ${violation.contrastRatio}:1`
    )
  })

  return {
    totalChecks: results.length,
    passedChecks,
    failedChecks,
    violations,
    suggestions,
  }
}
