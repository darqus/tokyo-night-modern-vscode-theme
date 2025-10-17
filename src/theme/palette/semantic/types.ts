import type { OpacityLevel } from '../foundation/opacity'

/**
 * Базовый интерфейс для семантических цветов с поддержкой прозрачности
 */
export interface SemanticColor {
  base: string
  opacity?: Partial<Record<OpacityLevel, string>>
}

/**
 * Семантические статусы
 */
export type Status = 'info' | 'success' | 'warning' | 'error'

/**
 * Состояния интерактивных элементов
 */
export type InteractiveState =
  | 'default'
  | 'hover'
  | 'active'
  | 'focus'
  | 'disabled'

/**
 * Приоритеты текстового контента
 */
export type TextPriority = 'primary' | 'secondary' | 'tertiary' | 'disabled'

/**
 * Типы поверхностей
 */
export type Surface = 'background' | 'overlay' | 'modal' | 'popover' | 'tooltip'

/**
 * Тип элевации
 */
export type Elevation = 'base' | 'raised' | 'floating'
