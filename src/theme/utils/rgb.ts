/**
 * Утилиты для работы с RGB цветами.
 * Централизованные функции для преобразования между HEX и RGB форматами.
 */

/**
 * Нормализует HEX цвет к формату #rrggbb (нижний регистр)
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
 */
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) =>
    Math.max(0, Math.min(255, n)).toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
