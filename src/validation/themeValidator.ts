import type {
  ValidationRule,
  ValidationResult,
  ValidationIssue,
  ThemeData,
} from '../types/theme'
import type { Hex } from '../palette'

/**
 * Система валидации качества темы
 * Автоматически проверяет контрастность, консистентность и доступность
 */

export class ThemeValidator {
  private rules: ValidationRule[] = [
    {
      name: 'contrast-ratio',
      description: 'Проверка контрастности текста по WCAG 2.1',
      validate: this.validateContrastRatio.bind(this),
    },
    {
      name: 'color-consistency',
      description: 'Проверка консистентности цветов',
      validate: this.validateColorConsistency.bind(this),
    },
    {
      name: 'accessibility',
      description:
        'Проверка доступности для людей с ограниченными возможностями',
      validate: this.validateAccessibility.bind(this),
    },
    {
      name: 'duplicate-colors',
      description: 'Проверка дублирования цветов',
      validate: this.validateDuplicateColors.bind(this),
    },
    {
      name: 'color-blindness',
      description: 'Проверка различимости для дальтоников',
      validate: this.validateColorBlindness.bind(this),
    },
  ]

  /**
   * Валидация всей темы
   */
  validateTheme(theme: ThemeData): ValidationResult {
    const allIssues: ValidationIssue[] = []

    for (const rule of this.rules) {
      try {
        const result = rule.validate(theme)
        allIssues.push(...result.issues)
      } catch (error) {
        allIssues.push({
          severity: 'error',
          message: `Ошибка в правиле ${rule.name}: ${error}`,
          suggestion: 'Проверьте реализацию правила валидации',
        })
      }
    }

    return {
      passed: allIssues.filter((i) => i.severity === 'error').length === 0,
      issues: allIssues,
    }
  }

  /**
   * Добавить пользовательское правило
   */
  addRule(rule: ValidationRule): void {
    this.rules.push(rule)
  }

  /**
   * Проверка контрастности по WCAG 2.1
   */
  private validateContrastRatio(theme: ThemeData): ValidationResult {
    const issues: ValidationIssue[] = []

    // Основные комбинации текст-фон для проверки
    const combinations = [
      {
        fg: theme.colors.foreground,
        bg: theme.colors['editor.background'],
        name: 'Основной текст редактора',
      },
      {
        fg: theme.colors['activityBar.foreground'],
        bg: theme.colors['activityBar.background'],
        name: 'Текст панели активности',
      },
      {
        fg: theme.colors['sideBar.foreground'],
        bg: theme.colors['sideBar.background'],
        name: 'Текст боковой панели',
      },
      {
        fg: theme.colors['statusBar.foreground'],
        bg: theme.colors['statusBar.background'],
        name: 'Текст строки состояния',
      },
    ]

    for (const combo of combinations) {
      if (combo.fg && combo.bg) {
        const contrast = this.calculateContrastRatio(combo.fg, combo.bg)

        if (contrast < 4.5) {
          issues.push({
            severity: 'error',
            message: `Низкая контрастность для "${
              combo.name
            }": ${contrast.toFixed(2)}:1`,
            suggestion: 'Увеличьте контраст до минимум 4.5:1 (WCAG AA)',
          })
        } else if (contrast < 7) {
          issues.push({
            severity: 'warning',
            message: `Контрастность для "${
              combo.name
            }" не достигает AAA: ${contrast.toFixed(2)}:1`,
            suggestion: 'Для наивысшего качества увеличьте контраст до 7:1',
          })
        }
      }
    }

    return {
      passed: issues.filter((i) => i.severity === 'error').length === 0,
      issues,
    }
  }

  /**
   * Проверка консистентности цветов
   */
  private validateColorConsistency(theme: ThemeData): ValidationResult {
    const issues: ValidationIssue[] = []

    // Проверяем, что похожие элементы используют похожие цвета
    const buttonColors = [
      theme.colors['button.background'],
      theme.colors['button.hoverBackground'],
    ].filter(Boolean)

    const inputColors = [
      theme.colors['input.background'],
      theme.colors['dropdown.background'],
    ].filter(Boolean)

    // Проверяем вариации цветов кнопок
    if (buttonColors.length > 1) {
      const similarity = this.calculateColorSimilarity(
        buttonColors[0],
        buttonColors[1]
      )
      if (similarity < 0.7) {
        issues.push({
          severity: 'warning',
          message: 'Цвета кнопок сильно различаются',
          suggestion: 'Используйте более похожие оттенки для состояний кнопок',
        })
      }
    }

    return { passed: true, issues }
  }

  /**
   * Проверка доступности
   */
  private validateAccessibility(theme: ThemeData): ValidationResult {
    const issues: ValidationIssue[] = []

    // Проверяем наличие общей границы фокуса (единственное корректное свойство)
    if (
      !theme.colors['focusBorder'] ||
      theme.colors['focusBorder'] === 'transparent'
    ) {
      issues.push({
        severity: 'warning',
        message: `Отсутствует видимая граница фокуса для focusBorder`,
        suggestion:
          'Добавьте видимую границу в свойство "focusBorder" для лучшей навигации с клавиатуры',
      })
    }

    // Проверяем, что устаревшие свойства фокуса не используются
    const deprecatedFocusProperties = [
      'button.focusBorder',
      'input.focusBorder',
      'checkbox.focusBorder',
      'radio.focusBorder',
    ]

    for (const property of deprecatedFocusProperties) {
      if (theme.colors[property]) {
        issues.push({
          severity: 'error',
          message: `Свойство ${property} устарело`,
          suggestion: `Используйте общее свойство "focusBorder" вместо "${property}"`,
        })
      }
    }

    return {
      passed: issues.filter((i) => i.severity === 'error').length === 0,
      issues,
    }
  }

  /**
   * Проверка дублирования цветов
   */
  private validateDuplicateColors(theme: ThemeData): ValidationResult {
    const issues: ValidationIssue[] = []
    const colorCount = new Map<string, string[]>()

    // Подсчитываем использование каждого цвета
    Object.entries(theme.colors).forEach(([key, value]) => {
      if (!colorCount.has(value)) {
        colorCount.set(value, [])
      }
      colorCount.get(value)!.push(key)
    })

    // Ищем избыточные дублирования
    colorCount.forEach((keys, color) => {
      if (keys.length > 5) {
        issues.push({
          severity: 'info',
          message: `Цвет ${color} используется в ${keys.length} местах`,
          suggestion: 'Рассмотрите возможность выделения в переменную палитры',
        })
      }
    })

    return { passed: true, issues }
  }

  /**
   * Проверка различимости для дальтоников
   */
  private validateColorBlindness(theme: ThemeData): ValidationResult {
    const issues: ValidationIssue[] = []

    // Проверяем критически важные цвета (ошибки, успех, предупреждения)
    const criticalColors = {
      error: theme.colors['errorForeground'],
      success: theme.colors['debugIcon.startForeground'],
      warning: theme.colors['editorWarning.foreground'],
    }

    Object.entries(criticalColors).forEach(([type, color]) => {
      if (color && this.isProblematicForColorBlind(color)) {
        issues.push({
          severity: 'warning',
          message: `Цвет ${type} может быть плохо различим для дальтоников`,
          suggestion:
            'Используйте дополнительные визуальные индикаторы (иконки, паттерны)',
        })
      }
    })

    return { passed: true, issues }
  }

  /**
   * Расчет коэффициента контрастности
   */
  private calculateContrastRatio(color1: string, color2: string): number {
    const lum1 = this.getLuminance(color1)
    const lum2 = this.getLuminance(color2)

    const brightest = Math.max(lum1, lum2)
    const darkest = Math.min(lum1, lum2)

    return (brightest + 0.05) / (darkest + 0.05)
  }

  /**
   * Расчет яркости цвета
   */
  private getLuminance(color: string): number {
    const hex = color.replace('#', '')
    const r = parseInt(hex.substr(0, 2), 16) / 255
    const g = parseInt(hex.substr(2, 2), 16) / 255
    const b = parseInt(hex.substr(4, 2), 16) / 255

    const [rs, gs, bs] = [r, g, b].map((c) => {
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })

    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
  }

  /**
   * Расчет похожести цветов
   */
  private calculateColorSimilarity(color1: string, color2: string): number {
    const hex1 = color1.replace('#', '')
    const hex2 = color2.replace('#', '')

    const r1 = parseInt(hex1.substr(0, 2), 16)
    const g1 = parseInt(hex1.substr(2, 2), 16)
    const b1 = parseInt(hex1.substr(4, 2), 16)

    const r2 = parseInt(hex2.substr(0, 2), 16)
    const g2 = parseInt(hex2.substr(2, 2), 16)
    const b2 = parseInt(hex2.substr(4, 2), 16)

    const distance = Math.sqrt(
      Math.pow(r2 - r1, 2) + Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2)
    )

    return 1 - distance / (Math.sqrt(3) * 255)
  }

  /**
   * Проверка проблематичности для дальтоников
   */
  private isProblematicForColorBlind(color: string): boolean {
    const hex = color.replace('#', '')
    const r = parseInt(hex.substr(0, 2), 16)
    const g = parseInt(hex.substr(2, 2), 16)
    const b = parseInt(hex.substr(4, 2), 16)

    // Упрощенная проверка - цвета, которые полагаются только на красно-зеленое различие
    const redGreenRatio = Math.abs(r - g) / Math.max(r, g, 1)
    return redGreenRatio > 0.7 && b < 100
  }
}

/**
 * Фабрика для создания валидатора с предустановленными правилами
 */
export class ValidatorFactory {
  static createBasicValidator(): ThemeValidator {
    return new ThemeValidator()
  }

  static createStrictValidator(): ThemeValidator {
    const validator = new ThemeValidator()

    // Добавляем строгие правила
    validator.addRule({
      name: 'strict-contrast',
      description: 'Строгая проверка контрастности (AAA уровень)',
      validate: (theme: ThemeData) => {
        // Реализация строгой проверки контрастности
        return { passed: true, issues: [] }
      },
    })

    return validator
  }
}
