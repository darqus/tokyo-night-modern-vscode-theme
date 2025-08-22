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
 * @param alpha - Прозрачность (число 0-1, проценты "0%"-"100%", или hex-строка "AA")
 * @returns Шестнадцатеричный цвет с альфа-каналом
 * @throws {Error} Если значение альфа некорректно
 *
 * @example
 * // Использование числового значения (0-1)
 * withAlpha('#ff0000', 0.5) // '#ff000080'
 *
 * // Использование процентов
 * withAlpha('#ff0000', '75%') // '#ff0000bf'
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
  } else {
    if (alpha.endsWith('%')) {
      const percent = parseInt(alpha.slice(0, -1), 10)
      if (isNaN(percent) || percent < 0 || percent > 100) {
        throw new Error('процент альфа должен быть от "0%" до "100%"')
      }
      a = Math.round((percent / 100) * 255)
        .toString(16)
        .padStart(2, '0')
    } else if (/^[0-9a-fA-F]{2}$/.test(alpha)) {
      a = alpha.toLowerCase()
    } else {
      throw new Error(
        'строка альфа должна быть либо процентом (например, "50%"), либо двухсимвольным шестнадцатеричным значением (например, "80")'
      )
    }
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
