export function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)

  const l1 = getLuminance(rgb1)
  const l2 = getLuminance(rgb2)

  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
}

export function ensureContrast(
  foreground: string,
  background: string,
  minRatio: number = 4.5
): string {
  if (getContrastRatio(foreground, background) >= minRatio) {
    return foreground
  }

  // Автоматическое осветление или затемнение для обеспечения контраста
  return adjustForContrast(foreground, background, minRatio)
}

export function getLuminance(rgb: { r: number; g: number; b: number }): number {
  const { r, g, b } = rgb
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

function adjustForContrast(
  foreground: string,
  background: string,
  minRatio: number
): string {
  const bgLuminance = getLuminance(hexToRgb(background))
  const fgRgb = hexToRgb(foreground)

  if (bgLuminance > 0.5) {
    // Осветляем для тёмного фона
    return rgbToHex(
      Math.min(255, fgRgb.r + 50),
      Math.min(255, fgRgb.g + 50),
      Math.min(255, fgRgb.b + 50)
    )
  } else {
    // Затемняем для светлого фона
    return rgbToHex(
      Math.max(0, fgRgb.r - 50),
      Math.max(0, fgRgb.g - 50),
      Math.max(0, fgRgb.b - 50)
    )
  }
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const normalized = hex.startsWith('#') ? hex : `#${hex}`
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
