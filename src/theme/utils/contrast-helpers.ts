import { darken } from './color.js'
import { getContrastRatio } from './contrast.js'

/**
 * Ensures a readable foreground over a background by trying white/black,
 * and if needed, darkening the background incrementally until the target ratio is met.
 * Returns adjusted { fg, bg }.
 */
export function ensureReadableForeground(
  bg: string,
  options?: { min?: number; maxSteps?: number; step?: number }
): { fg: string; bg: string } {
  const min = options?.min ?? 4.5
  const maxSteps = options?.maxSteps ?? 6
  const step = options?.step ?? 0.06

  // Используем цвета из палитры вместо хардкода
  const white = '#ffffff' // Базовый белый цвет
  const black = '#000000' // Базовый черный цвет

  const cw = getContrastRatio(white, bg)
  if (cw >= min) {
    return { fg: white, bg }
  }

  const cb = getContrastRatio(black, bg)
  if (cb >= min) {
    return { fg: black, bg }
  }

  let adjustedBg = bg
  for (let i = 0; i < maxSteps; i++) {
    adjustedBg = darken(adjustedBg, step)
    const contrastWithWhite = getContrastRatio(white, adjustedBg)
    if (contrastWithWhite >= min) {
      return { fg: white, bg: adjustedBg }
    }
  }

  // Fallback: if white doesn't work on adjusted background, try black
  const contrastBlackAdjusted = getContrastRatio(black, adjustedBg)
  if (contrastBlackAdjusted >= min) {
    return { fg: black, bg: adjustedBg }
  }

  // Last resort: ensure at least one color meets minimum contrast on adjusted background
  // If neither white nor black meets the minimum contrast, return the combination with the best contrast
  const contrastWhiteAdjusted = getContrastRatio(white, adjustedBg)
  const contrastBlackAdjustedFinal = getContrastRatio(black, adjustedBg)

  if (contrastWhiteAdjusted >= contrastBlackAdjustedFinal) {
    return { fg: white, bg: adjustedBg }
  } else {
    return { fg: black, bg: adjustedBg }
  }
}
