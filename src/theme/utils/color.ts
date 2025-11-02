import { hexToRgb, normalizeHex, rgbToHex } from './rgb'

export function alpha(hex: string, opacity: number): string {
  const normalized = normalizeHex(hex)
  const alphaValue = Math.round(Math.max(0, Math.min(1, opacity)) * 255)
  const alphaHex = alphaValue.toString(16).padStart(2, '0')
  return normalized + alphaHex
}

export function lighten(hex: string, amount: number): string {
  return mix(hex, '#ffffff', amount) // Используем белый для осветления
}

export function darken(hex: string, amount: number): string {
  return mix(hex, '#000000', amount) // Используем черный для затемнения
}

export function mix(hex1: string, hex2: string, ratio: number): string {
  const rgb1 = hexToRgb(hex1)
  const rgb2 = hexToRgb(hex2)
  const clampedRatio = Math.max(0, Math.min(1, ratio))

  const r = Math.round(rgb1.r * (1 - clampedRatio) + rgb2.r * clampedRatio)
  const g = Math.round(rgb1.g * (1 - clampedRatio) + rgb2.g * clampedRatio)
  const b = Math.round(rgb1.b * (1 - clampedRatio) + rgb2.b * clampedRatio)

  return rgbToHex(r, g, b)
}

export function isValidHex(hex: string): boolean {
  return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(hex)
}

// Реэкспортируем для обратной совместимости
export { hexToRgb, normalizeHex, rgbToHex } from './rgb'
