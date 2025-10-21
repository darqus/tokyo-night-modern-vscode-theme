import { standardBasePalette } from './base'
import { getContrastRatio, meetsWCAGContrast } from './color-utils'
import { generateSyntaxColors } from './syntax'

import { generateWorkbenchColors } from './workbench'



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
