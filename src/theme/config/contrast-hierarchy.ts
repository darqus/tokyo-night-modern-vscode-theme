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
    colors: [], // Будет заполнено динамически из палитры
    description:
      'Критически важные элементы: ключевые слова, this, super, ошибки',
  },
  important: {
    contrast: 4.5,
    colors: [], // Будет заполнено динамически из палитры
    description: 'Важные элементы: переменные, функции, типы',
  },
  secondary: {
    contrast: 3.0,
    colors: [], // Будет заполнено динамически из палитры
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
 * Функция для генерации стиля токена на основе уровня контрастности
 */
export function generateContrastToken(
  elementType: ElementContrastType,
  palette: UniversalPalette
): SemanticTokenStyle {
  const level = getContrastLevel(elementType)
  const levelConfig = contrastHierarchy[level]

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
          return { foreground: palette.chromatic.red.main, fontStyle: 'bold' }
        case 'variable.language.this':
        case 'variable.language.super':
        case 'variable.language.self':
          return { foreground: palette.chromatic.red.main, fontStyle: 'bold' }
        default:
          return { foreground: palette.chromatic.red.main }
      }
    case 'important':
      // Важные элементы получают хорошо читаемые цвета
      switch (elementType) {
        case 'variable':
        case 'variable.declaration':
          return { foreground: palette.chromatic.blue.light }
        case 'parameter':
        case 'parameter.declaration':
          return { foreground: palette.chromatic.amber.main }
        case 'property':
        case 'property.declaration':
          return { foreground: palette.chromatic.cyan.main }
        case 'function':
        case 'function.declaration':
        case 'method':
        case 'method.declaration':
          return {
            foreground: palette.chromatic.blue.main,
            fontStyle: elementType.includes('declaration') ? 'bold' : undefined,
          }
        case 'type':
        case 'interface':
        case 'class':
          return { foreground: palette.chromatic.teal.dark, fontStyle: 'bold' }
        default:
          return { foreground: palette.chromatic.blue.main }
      }
    case 'secondary':
      // Второстепенные элементы получают более приглушенные цвета
      switch (elementType) {
        case 'comment':
          return { foreground: palette.chromatic.neutral.main }
        case 'punctuation':
          return { foreground: palette.chromatic.blue.light }
        case 'string':
          return { foreground: palette.chromatic.green.main }
        case 'number':
          return { foreground: palette.chromatic.orange.main }
        case 'boolean':
          return { foreground: palette.chromatic.pink.main }
        default:
          return { foreground: palette.chromatic.neutral.main }
      }
  }
}
