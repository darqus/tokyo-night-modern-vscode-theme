/**
 * Утилиты для работы с RGB цветами.
 * Централизованные функции для преобразования между HEX и RGB форматами.
 */

/**
 * Нормализует HEX цвет к формату #rrggbb (нижний регистр)
 *
 * @param hex - HEX цвет в любом формате (#RGB, #RRGGBB, RRGGBB)
 * @returns Нормализованный HEX цвет (#rrggbb)
 *
 * @example
 * ```ts
 * normalizeHex('f00') // '#ff0000'
 * normalizeHex('#F00') // '#ff0000'
 * normalizeHex('ff0000') // '#ff0000'
 * ```
 */
export function normalizeHex(hex: string): string {
  let normalized = hex.startsWith('#') ? hex : `#${hex}`
  if (normalized.length === 4) {
    // Конвертируем #RGB в #RRGGBB
    normalized = `#${normalized[1]}${normalized[1]}${normalized[2]}${normalized[2]}${normalized[3]}${normalized[3]}`
  }
  return normalized.toLowerCase()
}

/**
 * Преобразует HEX цвет в RGB
 *
 * @param hex - HEX цвет в любом формате (#RGB, #RRGGBB, RRGGBB)
 * @returns Объект с компонентами RGB (r, g, b от 0 до 255)
 *
 * @example
 * ```ts
 * hexToRgb('#ff0000') // { r: 255, g: 0, b: 0 }
 * hexToRgb('00ff00') // { r: 0, g: 255, b: 0 }
 * ```
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const normalized = normalizeHex(hex)
  const r = Number.parseInt(normalized.slice(1, 3), 16)
  const g = Number.parseInt(normalized.slice(3, 5), 16)
  const b = Number.parseInt(normalized.slice(5, 7), 16)
  return { r, g, b }
}

/**
 * Преобразует RGB в HEX цвет
 *
 * @param r - Красный компонент (0-255)
 * @param g - Зеленый компонент (0-255)
 * @param b - Синий компонент (0-255)
 * @returns HEX цвет в формате #rrggbb
 *
 * @example
 * ```ts
 * rgbToHex(255, 0, 0) // '#ff0000'
 * ```
 */
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) =>
    Math.max(0, Math.min(255, n)).toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
