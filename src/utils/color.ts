import type { Hex } from '../types/palette'

/** Регулярное выражение для проверки шестнадцатеричных цветов */
const HEX_RE = /^#([0-9a-f]{6})([0-9a-f]{2})?$/i

/**
 * Обеспечивает шестизначный формат hex для цвета
 * @param hex - Шестнадцатеричный цвет для нормализации
 * @returns Нормализованный шестизначный шестнадцатеричный цвет
 * @throws {Error} Если цвет не в допустимом шестнадцатеричном формате
 *
 * @example
 * ensure6('#ff0000') // '#ff0000'
 * ensure6('#FF0000') // '#ff0000' (преобразован в нижний регистр)
 */
const ensure6 = (hex: Hex): string => {
  const m = HEX_RE.exec(hex)
  if (!m) throw new Error(`Недопустимый шестнадцатеричный цвет: ${hex}`)
  return `#${m[1]}`.toLowerCase()
}

/**
 * Добавляет альфа-канал (прозрачность) к шестнадцатеричному цвету
 *
 * @param hex - Базовый шестнадцатеричный цвет
 * @param alpha - Прозрачность (число 0-1 или hex-строка "AA")
 * @returns Шестнадцатеричный цвет с альфа-каналом
 * @throws {Error} Если значение альфа некорректно
 *
 * @example
 * // Использование числового значения (0-1)
 * withAlpha('#ff0000', 0.5) // '#ff000080'
 *
 * // Использование шестнадцатеричной строки
 * withAlpha('#ff0000', '80') // '#ff000080'
 */
export const withAlpha = (hex: Hex, alpha: number | string): Hex => {
  const base = ensure6(hex)
  let a: string

  if (typeof alpha === 'number') {
    if (alpha < 0 || alpha > 1) {
      throw new Error('число альфа должно быть от 0 до 1')
    }
    a = Math.round(alpha * 255)
      .toString(16)
      .padStart(2, '0')
  } else if (/^[0-9a-fA-F]{2}$/.test(alpha)) {
    a = alpha.toLowerCase()
  } else {
    throw new Error(
      'строка альфа должна быть двухсимвольным шестнадцатеричным значением (например, "80")'
    )
  }

  return `${base}${a}` as Hex
}

/**
 * Утилита для преобразования значения в строку (функция идентичности)
 * Используется для совместимости с существующим кодом
 *
 * @param v - Значение для преобразования
 * @returns То же значение без изменений
 */
export const toString = <T>(v: T): T => {
  return v
}

/**
 * Parse 6/8-digit hex to RGB(A)
 */
const parseHex = (
  hex: Hex
): { r: number; g: number; b: number; a?: number } => {
  const m = /^#([0-9a-f]{6})([0-9a-f]{2})?$/i.exec(hex)
  if (!m) throw new Error(`Недопустимый шестнадцатеричный цвет: ${hex}`)
  const int = parseInt(m[1], 16)
  const r = (int >> 16) & 0xff
  const g = (int >> 8) & 0xff
  const b = int & 0xff
  const a = m[2] ? parseInt(m[2], 16) : undefined
  return { r, g, b, a }
}

/**
 * Convert RGB to 6-digit hex
 */
const rgbToHex = (r: number, g: number, b: number): Hex => {
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)))
  return ('#' +
    clamp(r).toString(16).padStart(2, '0') +
    clamp(g).toString(16).padStart(2, '0') +
    clamp(b).toString(16).padStart(2, '0')) as Hex
}

/**
 * Смешивает два цвета (линейная интерполяция в RGB)
 * @param a Цвет A
 * @param b Цвет B
 * @param weight Доля смешивания B [0..1]; 0 -> A, 1 -> B
 */
export const mix = (a: Hex, b: Hex, weight: number): Hex => {
  const w = Math.max(0, Math.min(1, weight))
  const ca = parseHex(ensure6(a) as Hex)
  const cb = parseHex(ensure6(b) as Hex)
  const r = ca.r * (1 - w) + cb.r * w
  const g = ca.g * (1 - w) + cb.g * w
  const bl = ca.b * (1 - w) + cb.b * w
  return rgbToHex(r, g, bl)
}

/**
 * Осветляет цвет, смешивая его с указанным "белым" (по умолчанию — самим цветом; для удобства используйте core.text.selection при вызове)
 */
export const lightenToward = (color: Hex, toward: Hex, amount: number): Hex => {
  return mix(color, toward, amount)
}

/**
 * Затемняет цвет, смешивая его с указанным "чёрным" (передавайте самый тёмный фон палитры)
 */
export const darkenToward = (color: Hex, toward: Hex, amount: number): Hex => {
  return mix(color, toward, amount)
}
