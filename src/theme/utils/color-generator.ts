import { memoize } from './cache'
import { ColorError, darken, lighten } from './color'

export const generateBackgroundScale = memoize(((base: string) => {
  try {
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
  } catch {
    throw new ColorError(
      `Failed to generate background scale for ${base}`,
      base
    )
  }
}) as (...args: unknown[]) => unknown) as (base: string) => {
  darkest: string
  darker: string
  dark: string
  main: string
  editor: string
  light: string
  lighter: string
  lightest: string
}

export const generateForegroundScale = memoize(((base: string) => {
  try {
    return {
      dim: darken(base, 0.2),
      muted: darken(base, 0.15),
      medium: base,
      bright: lighten(base, 0.1),
      brighter: lighten(base, 0.15),
      brightest: lighten(base, 0.2),
    }
  } catch {
    throw new ColorError(
      `Failed to generate foreground scale for ${base}`,
      base
    )
  }
}) as (...args: unknown[]) => unknown) as (base: string) => {
  dim: string
  muted: string
  medium: string
  bright: string
  brighter: string
  brightest: string
}

export const generateColorVariants = memoize(((base: string) => {
  try {
    return {
      dark: darken(base, 0.15),
      main: base,
      light: lighten(base, 0.15),
      bright: lighten(base, 0.25),
    }
  } catch {
    throw new ColorError(`Failed to generate color variants for ${base}`, base)
  }
}) as (...args: unknown[]) => unknown) as (base: string) => {
  dark: string
  main: string
  light: string
  bright: string
}
