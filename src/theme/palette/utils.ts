import { standardBasePalette } from './base'
import { getContrastRatio, meetsWCAGContrast } from './color-utils'
import { createAlphaSystem, getColorWithAlpha } from './generators'
import { generateSyntaxColors } from './syntax'
import type { CalmClarityPalette } from './types'
import { generateWorkbenchColors } from './workbench'

/**
 * Создает и возвращает объект палитры "Спокойная Четкость".
 * Теперь использует модульную архитектуру с генерацией цветов на основе базовой палитры.
 */
export const createCalmClarityPalette = (): CalmClarityPalette => {
  // Генерация всех цветов на основе базовой палитры
  const workbenchColors = generateWorkbenchColors(standardBasePalette)
  const syntaxColors = generateSyntaxColors(standardBasePalette)
  const alphaSystem = createAlphaSystem()

  const palette: CalmClarityPalette = {
    workbench: {
      background: workbenchColors.background,
      foreground: workbenchColors.foreground,
      border: workbenchColors.border,
      accent: workbenchColors.accent,
    },
    button: workbenchColors.button,
    syntax: syntaxColors,
    alpha: workbenchColors.alpha,
    shadow: workbenchColors.shadow,
    neutral: workbenchColors.neutral,
    controls: workbenchColors.controls,
    minimap: workbenchColors.minimap,
    overviewRuler: workbenchColors.overviewRuler,
    scmGraph: workbenchColors.scmGraph,
    getColorWithAlpha: (
      color: string,
      alpha: keyof CalmClarityPalette['alpha']
    ): string => {
      return getColorWithAlpha(color, alpha, alphaSystem)
    },
  }
  return palette
}

/**
 * Проверка контрастности цветов по WCAG
 * @deprecated Используйте getContrastRatio из color-utils напрямую
 */
export { getContrastRatio }

/**
 * Проверка соответствия цветов требованиям WCAG
 * @deprecated Используйте meetsWCAGContrast из color-utils напрямую
 */
export { meetsWCAGContrast }
