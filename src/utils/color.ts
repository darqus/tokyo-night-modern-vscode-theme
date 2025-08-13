import type { Hex } from '../palette'

const HEX_RE = /^#([0-9a-f]{6})([0-9a-f]{2})?$/i

function ensure6(hex: Hex): string {
  const m = HEX_RE.exec(hex)
  if (!m) throw new Error(`Invalid hex color: ${hex}`)
  return `#${m[1]}`.toLowerCase()
}

export function withAlpha(hex: Hex, alpha: number | string): Hex {
  const base = ensure6(hex)
  let a: string
  if (typeof alpha === 'number') {
    if (alpha < 0 || alpha > 1) throw new Error('alpha number must be 0..1')
    a = Math.round(alpha * 255)
      .toString(16)
      .padStart(2, '0')
  } else {
    // assume 'AA' style
    if (!/^[0-9a-fA-F]{2}$/.test(alpha))
      throw new Error('alpha hex must be two hex chars')
    a = alpha.toLowerCase()
  }
  return `${base}${a}` as Hex
}

export function toString<T>(v: T): T {
  return v
}
