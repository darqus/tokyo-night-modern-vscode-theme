import { darken, lighten } from './color'

export function generateBackgroundScale(base: string) {
  return {
    darkest: darken(base, 0.15),
    darker: darken(base, 0.12),
    dark: darken(base, 0.08),
    main: base,
    editor: lighten(base, 0.03),
    light: lighten(base, 0.08),
    lighter: lighten(base, 0.12),
    lightest: lighten(base, 0.18),
  }
}

export function generateForegroundScale(base: string) {
  return {
    dim: darken(base, 0.2),
    muted: darken(base, 0.15),
    medium: base,
    bright: lighten(base, 0.1),
    brighter: lighten(base, 0.15),
    brightest: lighten(base, 0.2),
  }
}

export function generateColorVariants(base: string) {
  return {
    dark: darken(base, 0.15),
    main: base,
    light: lighten(base, 0.15),
    bright: lighten(base, 0.25),
  }
}
