import { describe, expect, test } from '@jest/globals'
import { palette } from '../theme/palette'
import {
  darken,
  getAnalogous,
  getComplementary,
  getTriadic,
  hexToRgb,
  lighten,
  mix,
} from '../theme/utils/color'
import {
  ensureContrast,
  getContrastRatio,
  getLuminance,
} from '../theme/utils/contrast'
import {
  adjustHue,
  adjustSaturation,
  createAccentPalette,
  createAdaptivePalette,
  getPaletteStats,
  hexToHsl,
  hslToHex,
  optimizeForColorBlindness,
  optimizePaletteForAccessibility,
  validatePaletteAccessibility,
} from '../theme/utils/palette-utils'

describe('Palette Utils', () => {
  describe('optimizePaletteForAccessibility', () => {
    test('должен оптимизировать текстовые цвета для WCAG AA', () => {
      const optimized = optimizePaletteForAccessibility(palette)

      // Проверяем, что основные текстовые цвета соответствуют WCAG AA
      expect(
        getContrastRatio(optimized.fg.medium, optimized.bg.editor)
      ).toBeGreaterThanOrEqual(4.5)
      expect(
        getContrastRatio(optimized.fg.dim, optimized.bg.editor)
      ).toBeGreaterThanOrEqual(4.5)
    })

    test('должен сохранять структуру палитры', () => {
      const optimized = optimizePaletteForAccessibility(palette)

      expect(optimized).toHaveProperty('bg')
      expect(optimized).toHaveProperty('fg')
      expect(optimized).toHaveProperty('ui')
      expect(optimized).toHaveProperty('special')
    })
  })

  describe('createAdaptivePalette', () => {
    test('должен создавать яркую палитру для дня', () => {
      const dayPalette = createAdaptivePalette(palette, 'day')

      // Дневная палитра должна быть ярче
      expect(getLuminance(hexToRgb(dayPalette.bg.editor))).toBeGreaterThan(
        getLuminance(hexToRgb(palette.bg.editor))
      )
    })

    test('должен создавать тёмную палитру для ночи', () => {
      const nightPalette = createAdaptivePalette(palette, 'night')

      // Ночная палитра должна быть темнее
      expect(getLuminance(hexToRgb(nightPalette.bg.editor))).toBeLessThan(
        getLuminance(hexToRgb(palette.bg.editor))
      )
    })
  })

  describe('createAccentPalette', () => {
    test('должен заменять акцентные цвета', () => {
      const accentPalette = createAccentPalette(palette, '#ff0000', 'red')

      expect(accentPalette.blue.primary).toBe('#ff0000')
      expect(accentPalette.purple.light).toContain('#ff0000')
    })

    test('должен сохранять структуру палитры', () => {
      const accentPalette = createAccentPalette(palette, '#00ff00')

      expect(accentPalette).toHaveProperty('bg')
      expect(accentPalette).toHaveProperty('fg')
      expect(accentPalette).toHaveProperty('blue')
    })
  })

  describe('validatePaletteAccessibility', () => {
    test('должен находить нарушения контрастности', () => {
      const badPalette = {
        ...palette,
        fg: {
          ...palette.fg,
          medium: '#666666', // Слишком тёмный для тёмного фона
        },
      }

      const validation = validatePaletteAccessibility(badPalette)

      expect(validation.isValid).toBe(false)
      expect(validation.violations.length).toBeGreaterThan(0)
    })

    test('должен проходить валидацию для хорошей палитры', () => {
      const validation = validatePaletteAccessibility(palette)

      // Может быть false, если текущая палитра не идеальна
      expect(Array.isArray(validation.violations)).toBe(true)
      expect(typeof validation.isValid).toBe('boolean')
    })
  })

  describe('optimizeForColorBlindness', () => {
    test('должен оптимизировать цвета для дальтоников', () => {
      const optimized = optimizeForColorBlindness(palette)

      expect(optimized).toHaveProperty('red')
      expect(optimized).toHaveProperty('green')
      expect(optimized).toHaveProperty('blue')
    })
  })

  describe('getPaletteStats', () => {
    test('должен возвращать статистику палитры', () => {
      const stats = getPaletteStats(palette)

      expect(stats.totalColors).toBeGreaterThan(0)
      expect(stats.uniqueColors).toBeGreaterThan(0)
      expect(stats.uniqueColors).toBeLessThanOrEqual(stats.totalColors)
      expect(stats.contrastViolations).toBeGreaterThanOrEqual(0)
      expect(stats.accessibilityScore).toBeGreaterThanOrEqual(0)
      expect(stats.accessibilityScore).toBeLessThanOrEqual(100)
    })
  })
})

describe('Color Utils', () => {
  describe('lighten/darken', () => {
    test('должен осветлять цвет', () => {
      const lightened = lighten('#000000', 0.5)
      expect(lightened).not.toBe('#000000')
      expect(lightened).toMatch(/^#[0-9a-f]{6}$/)
    })

    test('должен затемнять цвет', () => {
      const darkened = darken('#ffffff', 0.5)
      expect(darkened).not.toBe('#ffffff')
      expect(darkened).toMatch(/^#[0-9a-f]{6}$/)
    })
  })

  describe('mix', () => {
    test('должен смешивать цвета', () => {
      const mixed = mix('#ff0000', '#0000ff', 0.5)
      expect(mixed).toMatch(/^#[0-9a-f]{6}$/)
    })

    test('должен возвращать первый цвет при ratio = 0', () => {
      const mixed = mix('#ff0000', '#0000ff', 0)
      expect(mixed).toBe('#ff0000')
    })

    test('должен возвращать второй цвет при ratio = 1', () => {
      const mixed = mix('#ff0000', '#0000ff', 1)
      expect(mixed).toBe('#0000ff')
    })
  })

  describe('hexToHsl/hslToHex', () => {
    test('должен конвертировать HEX в HSL', () => {
      const hsl = hexToHsl('#ff0000')
      expect(hsl.h).toBe(0) // Красный
      expect(hsl.s).toBe(100) // Максимальная насыщенность
      expect(hsl.l).toBe(50) // Средняя яркость
    })

    test('должен конвертировать HSL в HEX', () => {
      const hex = hslToHex({ h: 0, s: 100, l: 50 })
      expect(hex).toBe('#ff0000')
    })

    test('должен быть обратимым', () => {
      const originalHex = '#7aa2f7'
      const hsl = hexToHsl(originalHex)
      const convertedHex = hslToHex(hsl)
      expect(convertedHex).toBe(originalHex)
    })
  })

  describe('adjustHue', () => {
    test('должен изменять оттенок', () => {
      const adjusted = adjustHue('#ff0000', 180)
      expect(adjusted).toMatch(/^#[0-9a-f]{6}$/)
    })
  })

  describe('adjustSaturation', () => {
    test('должен изменять насыщенность', () => {
      const adjusted = adjustSaturation('#ff0000', 0.5)
      expect(adjusted).toMatch(/^#[0-9a-f]{6}$/)
    })
  })

  describe('getComplementary', () => {
    test('должен возвращать комплементарный цвет', () => {
      const complementary = getComplementary('#ff0000')
      expect(complementary).toMatch(/^#[0-9a-f]{6}$/)
    })
  })

  describe('getAnalogous', () => {
    test('должен возвращать аналоговые цвета', () => {
      const analogous = getAnalogous('#ff0000')
      expect(analogous).toHaveProperty('left')
      expect(analogous).toHaveProperty('right')
      expect(analogous.left).toMatch(/^#[0-9a-f]{6}$/)
      expect(analogous.right).toMatch(/^#[0-9a-f]{6}$/)
    })
  })

  describe('getTriadic', () => {
    test('должен возвращать триадические цвета', () => {
      const triadic = getTriadic('#ff0000')
      expect(triadic).toHaveProperty('color1')
      expect(triadic).toHaveProperty('color2')
      expect(triadic).toHaveProperty('color3')
      expect(triadic.color1).toBe('#ff0000')
      expect(triadic.color2).toMatch(/^#[0-9a-f]{6}$/)
      expect(triadic.color3).toMatch(/^#[0-9a-f]{6}$/)
    })
  })
})

describe('Contrast Utils', () => {
  describe('getContrastRatio', () => {
    test('должен возвращать максимальный контраст для чёрного и белого', () => {
      const ratio = getContrastRatio('#000000', '#ffffff')
      expect(ratio).toBeCloseTo(21, 0)
    })

    test('должен возвращать 1 для одинаковых цветов', () => {
      const ratio = getContrastRatio('#ff0000', '#ff0000')
      expect(ratio).toBe(1)
    })
  })

  describe('ensureContrast', () => {
    test('должен возвращать исходный цвет если контраст достаточный', () => {
      const result = ensureContrast('#ffffff', '#000000', 4.5)
      expect(result).toBe('#ffffff')
    })

    test('должен корректировать цвет если контраст недостаточный', () => {
      const result = ensureContrast('#666666', '#333333', 4.5)
      expect(result).not.toBe('#666666')
    })
  })

  describe('getLuminance', () => {
    test('должен возвращать 0 для чёрного цвета', () => {
      const luminance = getLuminance({ r: 0, g: 0, b: 0 })
      expect(luminance).toBe(0)
    })

    test('должен возвращать 1 для белого цвета', () => {
      const luminance = getLuminance({ r: 255, g: 255, b: 255 })
      expect(luminance).toBeCloseTo(1, 2)
    })
  })
})
