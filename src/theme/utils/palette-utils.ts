import type { Palette } from '../types'
import { darken, lighten, mix } from './color'
import { ensureContrast, getContrastRatio } from './contrast'

/**
 * Оптимизация палитры для улучшения контрастности и доступности
 */
export function optimizePaletteForAccessibility(palette: Palette): Palette {
  return {
    ...palette,
    // Оптимизация текстовых цветов для соответствия WCAG AA
    fg: {
      dim: ensureContrast(palette.fg.dim, palette.bg.editor, 4.5),
      muted: ensureContrast(palette.fg.muted, palette.bg.editor, 4.5),
      medium: ensureContrast(palette.fg.medium, palette.bg.editor, 7.0),
      bright: ensureContrast(palette.fg.bright, palette.bg.editor, 7.0),
      brighter: ensureContrast(palette.fg.brighter, palette.bg.editor, 7.0),
      brightest: ensureContrast(palette.fg.brightest, palette.bg.editor, 7.0),
    },
    // Оптимизация UI элементов
    ui: {
      ...palette.ui,
      badgeForeground: ensureContrast(
        palette.ui.badgeForeground,
        palette.bg.light,
        4.5
      ),
      linkActive: ensureContrast(palette.ui.linkActive, palette.bg.main, 4.5),
      codeLens: ensureContrast(palette.ui.codeLens, palette.bg.editor, 3.0),
      brightWhite: ensureContrast(palette.ui.brightWhite, palette.bg.dark, 4.5),
    },
    // Оптимизация специальных цветов
    special: {
      ...palette.special,
      disabled: ensureContrast(
        palette.special.disabled,
        palette.bg.editor,
        3.0
      ),
      badge: ensureContrast(palette.special.badge, palette.bg.light, 3.0),
      ghostText: ensureContrast(
        palette.special.ghostText,
        palette.bg.editor,
        3.0
      ),
    },
  }
}

/**
 * Создание адаптивной палитры на основе времени суток
 */
export function createAdaptivePalette(
  basePalette: Palette,
  timeOfDay: 'day' | 'evening' | 'night' = 'night'
): Palette {
  const brightnessFactor =
    timeOfDay === 'day' ? 1.2 : timeOfDay === 'evening' ? 1.0 : 0.8

  return {
    ...basePalette,
    // Адаптация фонов
    bg: {
      darkest: adjustBrightness(basePalette.bg.darkest, brightnessFactor),
      darker: adjustBrightness(basePalette.bg.darker, brightnessFactor),
      dark: adjustBrightness(basePalette.bg.dark, brightnessFactor),
      main: adjustBrightness(basePalette.bg.main, brightnessFactor),
      editor: adjustBrightness(basePalette.bg.editor, brightnessFactor),
      light: adjustBrightness(basePalette.bg.light, brightnessFactor),
      lighter: adjustBrightness(basePalette.bg.lighter, brightnessFactor),
      lightest: adjustBrightness(basePalette.bg.lightest, brightnessFactor),
    },
    // Адаптация текста
    fg: {
      dim: adjustBrightness(basePalette.fg.dim, 1 / brightnessFactor),
      muted: adjustBrightness(basePalette.fg.muted, 1 / brightnessFactor),
      medium: adjustBrightness(basePalette.fg.medium, 1 / brightnessFactor),
      bright: adjustBrightness(basePalette.fg.bright, 1 / brightnessFactor),
      brighter: adjustBrightness(basePalette.fg.brighter, 1 / brightnessFactor),
      brightest: adjustBrightness(
        basePalette.fg.brightest,
        1 / brightnessFactor
      ),
    },
  }
}

/**
 * Создание палитры с кастомным акцентным цветом
 */
export function createAccentPalette(
  basePalette: Palette,
  accentColor: string,
  _accentName: string = 'custom'
): Palette {
  return {
    ...basePalette,
    // Заменяем основные акцентные цвета
    blue: {
      primary: accentColor,
      light: lighten(accentColor, 0.2),
      medium: mix(accentColor, basePalette.blue.medium, 0.7),
    },
    // Адаптируем связанные цвета
    purple: {
      light: mix(accentColor, basePalette.purple.light, 0.6),
      dark: mix(accentColor, basePalette.purple.dark, 0.7),
      bright: lighten(accentColor, 0.15),
    },
    cyan: {
      dark: mix(accentColor, basePalette.cyan.dark, 0.5),
      medium: mix(accentColor, basePalette.cyan.medium, 0.6),
      light: mix(accentColor, basePalette.cyan.light, 0.7),
      bright: lighten(accentColor, 0.25),
    },
  }
}

/**
 * Валидация палитры на соответствие стандартам доступности
 */
export function validatePaletteAccessibility(palette: Palette): {
  isValid: boolean
  violations: Array<{
    element: string
    foreground: string
    background: string
    contrastRatio: number
    requiredRatio: number
  }>
} {
  const violations: Array<{
    element: string
    foreground: string
    background: string
    contrastRatio: number
    requiredRatio: number
  }> = []

  // Проверка основных текстовых элементов
  const textChecks = [
    {
      element: 'editor.foreground',
      fg: palette.fg.medium,
      bg: palette.bg.editor,
      ratio: 4.5,
    },
    {
      element: 'editor.dim',
      fg: palette.fg.dim,
      bg: palette.bg.editor,
      ratio: 4.5,
    },
    {
      element: 'sidebar.foreground',
      fg: palette.fg.medium,
      bg: palette.bg.main,
      ratio: 4.5,
    },
    {
      element: 'badge.foreground',
      fg: palette.ui.badgeForeground,
      bg: palette.special.badge,
      ratio: 4.5,
    },
  ]

  textChecks.forEach(({ element, fg, bg, ratio }) => {
    const contrastRatio = getContrastRatio(fg, bg)
    if (contrastRatio < ratio) {
      violations.push({
        element,
        foreground: fg,
        background: bg,
        contrastRatio,
        requiredRatio: ratio,
      })
    }
  })

  return {
    isValid: violations.length === 0,
    violations,
  }
}

/**
 * Оптимизация палитры для цветовой слепоты
 */
export function optimizeForColorBlindness(palette: Palette): Palette {
  return {
    ...palette,
    // Усиление различий между красным и зеленым
    red: {
      main: adjustHue(palette.red.main, 10), // Сдвиг в сторону оранжевого
      dark: darken(palette.red.dark, 0.1),
      muted: mix(palette.red.main, palette.pink.main, 0.3),
    },
    green: {
      main: adjustHue(palette.green.main, -10), // Сдвиг в сторону сине-зеленого
      dark: adjustHue(palette.green.dark, -10),
    },
    // Усиление синих тонов для лучшей различимости
    blue: {
      primary: adjustSaturation(palette.blue.primary, 1.2),
      light: adjustSaturation(palette.blue.light, 1.1),
      medium: palette.blue.medium,
    },
  }
}

/**
 * Генерация статистики палитры
 */
export function getPaletteStats(palette: Palette): {
  totalColors: number
  uniqueColors: number
  contrastViolations: number
  accessibilityScore: number
} {
  const allColors = Object.values(palette).flatMap((section) => {
    if (typeof section === 'string') return [section]
    if (typeof section === 'object' && section !== null) {
      return Object.values(section as Record<string, string>)
    }
    return []
  })

  const uniqueColors = new Set(allColors)
  const accessibility = validatePaletteAccessibility(palette)

  return {
    totalColors: allColors.length,
    uniqueColors: uniqueColors.size,
    contrastViolations: accessibility.violations.length,
    accessibilityScore: Math.max(0, 100 - accessibility.violations.length * 10),
  }
}

// Вспомогательные функции

export function adjustBrightness(color: string, factor: number): string {
  return factor > 1 ? lighten(color, factor - 1) : darken(color, 1 - factor)
}

export function adjustHue(color: string, degrees: number): string {
  // Конвертируем hex в HSL, изменяем hue, конвертируем обратно
  const hsl = hexToHsl(color)
  hsl.h = (hsl.h + degrees) % 360
  if (hsl.h < 0) hsl.h += 360
  return hslToHex(hsl)
}

export function adjustSaturation(color: string, factor: number): string {
  // Конвертируем hex в HSL, изменяем saturation, конвертируем обратно
  const hsl = hexToHsl(color)
  hsl.s = Math.min(100, Math.max(0, hsl.s * factor))
  return hslToHex(hsl)
}

// Вспомогательные функции для конвертации цветов

export function hexToHsl(hex: string): { h: number; s: number; l: number } {
  // Убираем # если есть
  hex = hex.replace('#', '')

  // Конвертируем в RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255
  const g = parseInt(hex.substring(2, 4), 16) / 255
  const b = parseInt(hex.substring(4, 6), 16) / 255

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

export function hslToHex(hsl: { h: number; s: number; l: number }): string {
  const h = hsl.h / 360
  const s = hsl.s / 100
  const l = hsl.l / 100

  let r: number, g: number, b: number

  if (s === 0) {
    r = g = b = l // achromatic
  } else {
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
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  const toHex = (x: number) => {
    const hex = Math.round(x * 255).toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
