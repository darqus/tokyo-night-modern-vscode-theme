import { hexToRgb } from './rgb.js'

const WCAG_AA_RATIO = 4.5
const WCAG_AAA_RATIO = 7

export function getLuminance(hex: string): number {
  try {
    const { r, g, b } = hexToRgb(hex)
    const [rs, gs, bs] = [r, g, b].map((c) => {
      const s = c / 255
      return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
    })
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
  } catch (error) {
    throw new Error(
      `Failed to calculate luminance for ${hex}: ${error instanceof Error ? error.message : error}`
    )
  }
}

export function getContrastRatio(color1: string, color2: string): number {
  try {
    const l1 = getLuminance(color1)
    const l2 = getLuminance(color2)
    const lighter = Math.max(l1, l2)
    const darker = Math.min(l1, l2)
    return (lighter + 0.05) / (darker + 0.05)
  } catch {
    return 0
  }
}

export function meetsWCAG(
  fg: string,
  bg: string,
  level: 'AA' | 'AAA' = 'AA'
): boolean {
  const ratio = getContrastRatio(fg, bg)
  return level === 'AAA' ? ratio >= WCAG_AAA_RATIO : ratio >= WCAG_AA_RATIO
}

export function checkContrast(
  fg: string,
  bg: string
): { ratio: number; aa: boolean; aaa: boolean } {
  const ratio = getContrastRatio(fg, bg)
  return {
    ratio: Math.round(ratio * 100) / 100,
    aa: ratio >= WCAG_AA_RATIO,
    aaa: ratio >= WCAG_AAA_RATIO,
  }
}

export function getColorDistance(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)
  const rDiff = rgb1.r - rgb2.r
  const gDiff = rgb1.g - rgb2.g
  const bDiff = rgb1.b - rgb2.b
  return Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff)
}

export function areColorsSimilar(
  color1: string,
  color2: string,
  threshold = 50
): boolean {
  return getColorDistance(color1, color2) < threshold
}
