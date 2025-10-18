/**
 * Calm Clarity Theme - Валидация контрастности
 * Функции для проверки контрастности цветов по стандартам WCAG
 */

import { getContrastRatio, meetsWCAGContrast } from '../palette/calm-clarity'

// Импортируем палитру для проверки контрастности
import { calmClarityPalette } from '../palette/calm-clarity'

/**
 * Тип для отчета о контрастности
 */
interface ContrastReport {
  status: 'pass' | 'fail'
  message: string
  details: Array<{
    element: string
    foreground: string
    background: string
    ratio: number
    required: 'AA' | 'AAA'
    meetsAA: boolean
    meetsAAA: boolean
  }>
}

/**
 * Генерация отчета о контрастности для основных элементов темы
 */
export function getContrastReport(): ContrastReport {
  // Основные проверки контрастности для элементов интерфейса
  const contrastChecks = [
    {
      element: 'Основной текст',
      fg: calmClarityPalette.syntax.text,
      bg: calmClarityPalette.workbench.background,
    },
    {
      element: 'Комментарии',
      fg: calmClarityPalette.syntax.comment,
      bg: calmClarityPalette.workbench.background,
    },
    {
      element: 'Ключевые слова',
      fg: calmClarityPalette.syntax.keyword,
      bg: calmClarityPalette.workbench.background,
    },
    {
      element: 'Строки',
      fg: calmClarityPalette.syntax.string,
      bg: calmClarityPalette.workbench.background,
    },
    {
      element: 'Числа',
      fg: calmClarityPalette.syntax.number,
      bg: calmClarityPalette.workbench.background,
    },
    {
      element: 'Активная панель активности',
      fg: calmClarityPalette.workbench.accentPrimary,
      bg: calmClarityPalette.workbench.activityBar,
    },
    {
      element: 'Активная вкладка',
      fg: calmClarityPalette.workbench.accentPrimary,
      bg: calmClarityPalette.workbench.tabbar,
    },
    {
      element: 'Текст сайдбара',
      fg: calmClarityPalette.syntax.text,
      bg: calmClarityPalette.workbench.sidebar,
    },
  ]

  const details = contrastChecks.map((check) => {
    const ratio = getContrastRatio(check.fg, check.bg)
    return {
      element: check.element,
      foreground: check.fg,
      background: check.bg,
      ratio: parseFloat(ratio.toFixed(2)),
      required: 'AA' as const,
      meetsAA: meetsWCAGContrast(check.fg, check.bg, 'AA'),
      meetsAAA: meetsWCAGContrast(check.fg, check.bg, 'AAA'),
    }
  })

  // Проверяем, все ли элементы соответствуют стандарту AA
  const allPassAA = details.every((detail) => detail.meetsAA)

  return {
    status: allPassAA ? 'pass' : 'fail',
    message: allPassAA
      ? 'Все основные элементы соответствуют стандарту контрастности WCAG AA'
      : 'Некоторые элементы не соответствуют стандарту контрастности WCAG AA',
    details,
  }
}
