import { hexToRgb, normalizeHex, rgbToHex } from './rgb'

/**
 * Добавляет альфа-канал к HEX цвету
 *
 * @param hex - HEX цвет (например, '#ff0000')
 * @param opacity - Прозрачность от 0 до 1
 * @returns HEX цвет с альфа-каналом (например, '#ff0000ff')
 *
 * @example
 * ```ts
 * alpha('#ff0000', 0.5) // '#ff000080'
 * ```
 */
export function alpha(hex: string, opacity: number): string {
  const normalized = normalizeHex(hex)
  const alphaValue = Math.round(Math.max(0, Math.min(1, opacity)) * 255)
  const alphaHex = alphaValue.toString(16).padStart(2, '0')
  return normalized + alphaHex
}

/**
 * Осветляет HEX цвет на указанное количество
 *
 * @param hex - HEX цвет для осветления
 * @param amount - Коэффициент осветления от 0 до 1 (0 - без изменений, 1 - белый)
 * @returns Осветленный HEX цвет
 *
 * @example
 * ```ts
 * lighten('#000000', 0.5) // '#808080'
 * ```
 */
export function lighten(hex: string, amount: number): string {
  return mix(hex, '#ffffff', amount) // Используем белый для осветления
}

/**
 * Затемняет HEX цвет на указанное количество
 *
 * @param hex - HEX цвет для затемнения
 * @param amount - Коэффициент затемнения от 0 до 1 (0 - без изменений, 1 - черный)
 * @returns Затемненный HEX цвет
 *
 * @example
 * ```ts
 * darken('#ffffff', 0.5) // '#808080'
 * ```
 */
export function darken(hex: string, amount: number): string {
  return mix(hex, '#000000', amount) // Используем черный для затемнения
}

/**
 * Смешивает два HEX цвета в заданной пропорции
 *
 * @param hex1 - Первый HEX цвет
 * @param hex2 - Второй HEX цвет
 * @param ratio - Пропорция смешивания от 0 до 1 (0 - первый цвет, 1 - второй цвет)
 * @returns Смешанный HEX цвет
 *
 * @example
 * ```ts
 * mix('#ff0000', '#0000ff', 0.5) // '#800080' (фиолетовый)
 * ```
 */
export function mix(hex1: string, hex2: string, ratio: number): string {
  const rgb1 = hexToRgb(hex1)
  const rgb2 = hexToRgb(hex2)
  const clampedRatio = Math.max(0, Math.min(1, ratio))

  const r = Math.round(rgb1.r * (1 - clampedRatio) + rgb2.r * clampedRatio)
  const g = Math.round(rgb1.g * (1 - clampedRatio) + rgb2.g * clampedRatio)
  const b = Math.round(rgb1.b * (1 - clampedRatio) + rgb2.b * clampedRatio)

  return rgbToHex(r, g, b)
}

/**
 * Проверяет, является ли строка валидным HEX цветом
 *
 * @param hex - Строка для проверки
 * @returns true, если строка является валидным HEX цветом
 *
 * @example
 * ```ts
 * isValidHex('#ff0000') // true
 * isValidHex('ff0000') // true
 * isValidHex('#f00') // true
 * isValidHex('invalid') // false
 * ```
 */
export function isValidHex(hex: string): boolean {
  return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(hex)
}

// Реэкспортируем для обратной совместимости
export { hexToRgb, normalizeHex, rgbToHex } from './rgb'
