import type { UniversalPalette } from '../palette/index.js'
import type { SemanticTokenStyle } from '../types/index.js'

/**
 * Иерархия контрастности - определяет уровни контрастности для различных элементов кода
 * в соответствии с WCAG AA/AAA рекомендациями
 */
export interface ContrastLevel {
  contrast: number
  colors: string[]
  description: string
}

export interface ContrastHierarchy {
  critical: ContrastLevel // Контраст 7.0+ (WCAG AAA) - критические элементы
  important: ContrastLevel // Контраст 4.5+ (WCAG AA) - важные элементы
  secondary: ContrastLevel // Контраст 3.0+ (WCAG AA для крупного текста) - второстепенные элементы
}

/**
 * Основная иерархия контрастности для темы Tokyo Modern
 */
export const contrastHierarchy: ContrastHierarchy = {
  critical: {
    contrast: 7.0,
    colors: ['red', 'rose', 'orange'], // Критические цвета из палитры
    description:
      'Критически важные элементы: ключевые слова, this, super, ошибки',
  },
  important: {
    contrast: 4.5,
    colors: ['blue', 'purple', 'cyan'], // Важные цвета из палитры
    description: 'Важные элементы: переменные, функции, типы',
  },
  secondary: {
    contrast: 3.0,
    colors: ['neutral', 'slate', 'stone'], // Второстепенные цвета из палитры
    description: 'Второстепенные элементы: комментарии, пунктуация',
  },
}

/**
 * Типы элементов, сопоставленные с уровнями контрастности
 */
export const elementContrastMapping = {
  'keyword.super': 'critical',
  'keyword.new': 'critical',
  'keyword.delete': 'critical',
  'keyword.void': 'critical',
  'variable.language.this': 'critical',
  'variable.language.super': 'critical',
  'variable.language.self': 'critical',
  // Критические элементы

  'keyword.this': 'critical',
  'keyword.self': 'critical',

  // Важные элементы
  variable: 'important',
  'variable.declaration': 'important',
  parameter: 'important',
  'parameter.declaration': 'important',
  property: 'important',
  'property.declaration': 'important',
  function: 'important',
  'function.declaration': 'important',
  method: 'important',
  'method.declaration': 'important',
  type: 'important',
  interface: 'important',
  class: 'important',

  // Второстепенные элементы
  comment: 'secondary',
  punctuation: 'secondary',
  string: 'secondary',
  number: 'secondary',
  boolean: 'secondary',
} as const

/**
 * Тип для уровней контрастности
 */
export type ContrastLevelType = keyof ContrastHierarchy

/**
 * Сопоставление типов элементов с уровнями контрастности
 */
export type ElementContrastType = keyof typeof elementContrastMapping

/**
 * Функция для получения уровня контрастности для конкретного элемента
 */
export function getContrastLevel(
  elementType: ElementContrastType
): ContrastLevelType {
  return elementContrastMapping[elementType] || 'secondary'
}

/**
 * Вспомогательная функция для получения цвета из палитры по имени
 */
function getColorFromPalette(
  palette: UniversalPalette,
  colorName: string
): string {
  const colorPath = colorName.split('.')

  if (colorPath.length === 1) {
    // Простой цвет из chromatic
    const chromaticColor =
      palette.chromatic[colorPath[0] as keyof typeof palette.chromatic]
    return chromaticColor?.main || palette.chromatic.neutral.main
  }

  if (colorPath.length === 2) {
    // Цвет с модификатором (например, chromatic.red.light или просто red.light)
    const [category, shade] = colorPath

    if (category === 'chromatic') {
      const chromaticColor =
        palette.chromatic[shade as keyof typeof palette.chromatic]
      return chromaticColor?.main || palette.chromatic.neutral.main
    } else {
      // Предполагаем, что первый элемент - это цвет, второй - модификатор
      const chromaticColor =
        palette.chromatic[category as keyof typeof palette.chromatic]
      if (chromaticColor) {
        const modifier = shade as keyof typeof chromaticColor
        return chromaticColor[modifier] || chromaticColor.main
      }
    }
  }

  if (colorPath.length === 3) {
    // Полный путь (например, chromatic.red.light)
    const [category, color, modifier] = colorPath
    if (category === 'chromatic') {
      const chromaticColor =
        palette.chromatic[color as keyof typeof palette.chromatic]
      if (chromaticColor) {
        const mod = modifier as keyof typeof chromaticColor
        return chromaticColor[mod] || chromaticColor.main
      }
    }
  }

  // Fallback
  return palette.chromatic.neutral.main
}

/**
 * Функция для генерации стиля токена на основе уровня контрастности
 */
export function generateContrastToken(
  elementType: ElementContrastType,
  palette: UniversalPalette
): SemanticTokenStyle {
  const level = getContrastLevel(elementType)
  const _levelConfig = contrastHierarchy[level]

  // Выбираем цвет в зависимости от уровня контрастности
  switch (level) {
    case 'critical':
      // Критические элементы получают яркие, легко различимые цвета
      switch (elementType) {
        case 'keyword.super':
        case 'keyword.new':
        case 'keyword.delete':
        case 'keyword.void':
        case 'keyword.this':
        case 'keyword.self':
          return {
            foreground: getColorFromPalette(palette, 'chromatic.red'),
            fontStyle: 'bold',
          }
        case 'variable.language.this':
        case 'variable.language.super':
        case 'variable.language.self':
          return {
            foreground: getColorFromPalette(palette, 'chromatic.rose'),
            fontStyle: 'bold',
          }
        default:
          return { foreground: getColorFromPalette(palette, 'chromatic.red') }
      }
    case 'important':
      // Важные элементы получают хорошо читаемые цвета
      switch (elementType) {
        case 'variable':
        case 'variable.declaration':
          return {
            foreground: getColorFromPalette(palette, 'chromatic.blue.light'),
          }
        case 'parameter':
        case 'parameter.declaration':
          return { foreground: getColorFromPalette(palette, 'chromatic.amber') }
        case 'property':
        case 'property.declaration':
          return { foreground: getColorFromPalette(palette, 'chromatic.cyan') }
        case 'function':
        case 'function.declaration':
        case 'method':
        case 'method.declaration':
          return {
            foreground: getColorFromPalette(palette, 'chromatic.blue'),
            fontStyle: elementType.includes('declaration') ? 'bold' : undefined,
          }
        case 'type':
        case 'interface':
        case 'class':
          return {
            foreground: getColorFromPalette(palette, 'chromatic.teal.dark'),
            fontStyle: 'bold',
          }
        default:
          return { foreground: getColorFromPalette(palette, 'chromatic.blue') }
      }
    case 'secondary':
      // Второстепенные элементы получают более приглушенные цвета
      switch (elementType) {
        case 'comment':
          return {
            foreground: getColorFromPalette(palette, 'chromatic.neutral'),
          }
        case 'punctuation':
          return { foreground: getColorFromPalette(palette, 'chromatic.slate') }
        case 'string':
          return { foreground: getColorFromPalette(palette, 'chromatic.green') }
        case 'number':
          return {
            foreground: getColorFromPalette(palette, 'chromatic.orange'),
          }
        case 'boolean':
          return { foreground: getColorFromPalette(palette, 'chromatic.pink') }
        default:
          return {
            foreground: getColorFromPalette(palette, 'chromatic.neutral'),
          }
      }
  }
}
