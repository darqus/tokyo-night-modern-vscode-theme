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
  const rgb1 = hexToRgb(normalizeHex(hex1))
  const rgb2 = hexToRgb(normalizeHex(hex2))
  const clampedRatio = Math.max(0, Math.min(1, ratio))

  const r = Math.round(rgb1.r * (1 - clampedRatio) + rgb2.r * clampedRatio)
  const g = Math.round(rgb1.g * (1 - clampedRatio) + rgb2.g * clampedRatio)
  const b = Math.round(rgb1.b * (1 - clampedRatio) + rgb2.b * clampedRatio)

  return rgbToHex(r, g, b)
}

export function isValidHex(hex: string): boolean {
  return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(hex)
}

export function normalizeHex(hex: string): string {
  let normalized = hex.startsWith('#') ? hex : `#${hex}`
  if (normalized.length === 4) {
    normalized = `#${normalized[1]}${normalized[1]}${normalized[2]}${normalized[2]}${normalized[3]}${normalized[3]}`
  }
  return normalized.toLowerCase()
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const normalized = normalizeHex(hex)
  const r = Number.parseInt(normalized.slice(1, 3), 16)
  const g = Number.parseInt(normalized.slice(3, 5), 16)
  const b = Number.parseInt(normalized.slice(5, 7), 16)
  return { r, g, b }
}

function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) =>
    Math.max(0, Math.min(255, n)).toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
