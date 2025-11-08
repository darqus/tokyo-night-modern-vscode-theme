import { darken, lighten } from './color.js'
import { ADJUST } from './color-helpers.js'

export const fromMain = (
  main: string,
  opts?: { d?: number; l?: number; b?: number }
) => {
  const d = opts?.d ?? ADJUST.MEDIUM
  const l = opts?.l ?? ADJUST.LIGHT
  const b = opts?.b ?? ADJUST.STRONG
  return {
    dark: darken(main, d),
    main,
    light: lighten(main, l),
    bright: lighten(main, b),
  }
}
