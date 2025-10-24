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

/**
 * Конвертация HEX в HSL
 */
export function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const rgb = hexToRgb(hex)
  const r = rgb.r / 255
  const g = rgb.g / 255
  const b = rgb.b / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

/**
 * Конвертация HSL в HEX
 */
export function hslToHex(h: number, s: number, l: number): string {
  h = h / 360
  s = s / 100
  l = l / 100

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q

  const r = Math.round(hue2rgb(p, q, h + 1 / 3) * 255)
  const g = Math.round(hue2rgb(p, q, h) * 255)
  const b = Math.round(hue2rgb(p, q, h - 1 / 3) * 255)

  return rgbToHex(r, g, b)
}

/**
 * Изменение оттенка цвета
 */
export function adjustHue(hex: string, degrees: number): string {
  const hsl = hexToHsl(hex)
  const newHue = (hsl.h + degrees + 360) % 360
  return hslToHex(newHue, hsl.s, hsl.l)
}

/**
 * Изменение насыщенности цвета
 */
export function adjustSaturation(hex: string, factor: number): string {
  const hsl = hexToHsl(hex)
  const newSaturation = Math.max(0, Math.min(100, hsl.s * factor))
  return hslToHex(hsl.h, newSaturation, hsl.l)
}

/**
 * Изменение яркости цвета
 */
export function adjustLightness(hex: string, factor: number): string {
  const hsl = hexToHsl(hex)
  const newLightness = Math.max(0, Math.min(100, hsl.l * factor))
  return hslToHex(hsl.h, hsl.s, newLightness)
}

/**
 * Получение комплементарного цвета
 */
export function getComplementary(hex: string): string {
  return adjustHue(hex, 180)
}

/**
 * Получение аналоговых цветов
 */
export function getAnalogous(hex: string): { left: string; right: string } {
  return {
    left: adjustHue(hex, -30),
    right: adjustHue(hex, 30),
  }
}

/**
 * Получение триадических цветов
 */
export function getTriadic(hex: string): {
  color1: string
  color2: string
  color3: string
} {
  return {
    color1: hex,
    color2: adjustHue(hex, 120),
    color3: adjustHue(hex, 240),
  }
}

/**
 * Получение оттенков цвета
 */
export function getShades(hex: string, count: number = 5): string[] {
  const shades: string[] = []
  const hsl = hexToHsl(hex)

  for (let i = 0; i < count; i++) {
    const lightness = (i / (count - 1)) * 100
    shades.push(hslToHex(hsl.h, hsl.s, lightness))
  }

  return shades
}

/**
 * Получение тонов цвета (с сохранением яркости)
 */
export function getTints(hex: string, count: number = 3): string[] {
  const tints: string[] = []
  const hsl = hexToHsl(hex)

  for (let i = 1; i <= count; i++) {
    const lightness = Math.min(100, hsl.l + i * 15)
    tints.push(hslToHex(hsl.h, hsl.s, lightness))
  }

  return tints
}

/**
 * Получение теней цвета (с сохранением яркости)
 */
export function getTones(hex: string, count: number = 3): string[] {
  const tones: string[] = []
  const hsl = hexToHsl(hex)

  for (let i = 1; i <= count; i++) {
    const lightness = Math.max(0, hsl.l - i * 15)
    tones.push(hslToHex(hsl.h, hsl.s, lightness))
  }

  return tones
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } {
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
