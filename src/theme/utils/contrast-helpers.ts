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

  const white = '#ffffff'
  const black = '#000000'

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
    if (getContrastRatio(white, adjustedBg) >= min) {
      return { fg: white, bg: adjustedBg }
    }
  }

  // Fallback: return the better of white/black on original bg
  return cb > cw ? { fg: black, bg } : { fg: white, bg }
}
