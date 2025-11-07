import { describe, expect, it } from 'vitest'
import { universalBasePalette } from '../../src/theme/palette/universal-base.js'
import {
  compatiblePalette,
  universalPalette,
} from '../../src/theme/palette/universal-generated.js'
import { getLuminance } from '../../src/theme/utils/contrast.js'

/**
 * Тестирование универсальной палитры
 */
describe('Universal Palette', () => {
  /**
   * Проверка структуры универсальной базовой палитры
   */
  it('should have correct structure for universalBasePalette', () => {
    expect(universalBasePalette).toHaveProperty('background')
    expect(universalBasePalette).toHaveProperty('foreground')
    expect(universalBasePalette).toHaveProperty('semantic')
    expect(universalBasePalette).toHaveProperty('chromatic')
    expect(universalBasePalette).toHaveProperty('ui')
    expect(universalBasePalette).toHaveProperty('shadow')

    // Проверка вложенных структур
    expect(universalBasePalette.background).toHaveProperty('base')
    expect(universalBasePalette.background).toHaveProperty('elevated')
    expect(universalBasePalette.background).toHaveProperty('inset')
    expect(universalBasePalette.background).toHaveProperty('overlay')

    expect(universalBasePalette.foreground).toHaveProperty('primary')
    expect(universalBasePalette.foreground).toHaveProperty('secondary')
    expect(universalBasePalette.foreground).toHaveProperty('muted')
    expect(universalBasePalette.foreground).toHaveProperty('disabled')

    expect(universalBasePalette.semantic).toHaveProperty('success')
    expect(universalBasePalette.semantic).toHaveProperty('warning')
    expect(universalBasePalette.semantic).toHaveProperty('error')
    expect(universalBasePalette.semantic).toHaveProperty('info')
    expect(universalBasePalette.semantic).toHaveProperty('accent')

    expect(universalBasePalette.chromatic).toHaveProperty('blue')
    expect(universalBasePalette.chromatic).toHaveProperty('cyan')
    expect(universalBasePalette.chromatic).toHaveProperty('teal')
    expect(universalBasePalette.chromatic).toHaveProperty('green')
    expect(universalBasePalette.chromatic).toHaveProperty('purple')
    expect(universalBasePalette.chromatic).toHaveProperty('orange')
    expect(universalBasePalette.chromatic).toHaveProperty('yellow')
    expect(universalBasePalette.chromatic).toHaveProperty('red')
    expect(universalBasePalette.chromatic).toHaveProperty('pink')
    expect(universalBasePalette.chromatic).toHaveProperty('neutral')
    expect(universalBasePalette.chromatic).toHaveProperty('indigo')
    expect(universalBasePalette.chromatic).toHaveProperty('lime')
    expect(universalBasePalette.chromatic).toHaveProperty('magenta')
    expect(universalBasePalette.chromatic).toHaveProperty('rose')
    expect(universalBasePalette.chromatic).toHaveProperty('amber')
    expect(universalBasePalette.chromatic).toHaveProperty('emerald')
  })

  /**
   * Проверка логической прогрессии яркости для всех цветов
   */
  it('should maintain logical luminance progression for all color variants', () => {
    // Проверка background
    for (const variant of Object.values(universalBasePalette.background)) {
      const { dark, main, light, bright } = variant
      expect(getLuminance(dark)).toBeLessThanOrEqual(getLuminance(main))
      expect(getLuminance(main)).toBeLessThanOrEqual(getLuminance(light))
      expect(getLuminance(light)).toBeLessThanOrEqual(getLuminance(bright))
    }

    // Проверка foreground
    for (const variant of Object.values(universalBasePalette.foreground)) {
      const { dark, main, light, bright } = variant
      expect(getLuminance(dark)).toBeLessThanOrEqual(getLuminance(main))
      expect(getLuminance(main)).toBeLessThanOrEqual(getLuminance(light))
      expect(getLuminance(light)).toBeLessThanOrEqual(getLuminance(bright))
    }

    // Проверка semantic
    for (const variant of Object.values(universalBasePalette.semantic)) {
      const { dark, main, light, bright } = variant
      expect(getLuminance(dark)).toBeLessThanOrEqual(getLuminance(main))
      expect(getLuminance(main)).toBeLessThanOrEqual(getLuminance(light))
      expect(getLuminance(light)).toBeLessThanOrEqual(getLuminance(bright))
    }

    // Проверка chromatic
    for (const variant of Object.values(universalBasePalette.chromatic)) {
      const { dark, main, light, bright } = variant
      expect(getLuminance(dark)).toBeLessThanOrEqual(getLuminance(main))
      expect(getLuminance(main)).toBeLessThanOrEqual(getLuminance(light))
      expect(getLuminance(light)).toBeLessThanOrEqual(getLuminance(bright))
    }

    // Проверка ui
    for (const key in universalBasePalette.ui) {
      const variant =
        universalBasePalette.ui[key as keyof typeof universalBasePalette.ui]
      if (
        typeof variant === 'object' &&
        variant !== null &&
        'dark' in variant
      ) {
        expect(getLuminance(variant.dark)).toBeLessThanOrEqual(
          getLuminance(variant.main)
        )
        expect(getLuminance(variant.main)).toBeLessThanOrEqual(
          getLuminance(variant.light)
        )
        expect(getLuminance(variant.light)).toBeLessThanOrEqual(
          getLuminance(variant.bright)
        )
      }
    }
  })

  /**
   * Проверка совместимой палитры
   */
  it('should have correct structure for compatiblePalette', () => {
    expect(compatiblePalette).toHaveProperty('bg')
    expect(compatiblePalette).toHaveProperty('fg')
    expect(compatiblePalette).toHaveProperty('blue')
    expect(compatiblePalette).toHaveProperty('cyan')
    expect(compatiblePalette).toHaveProperty('teal')
    expect(compatiblePalette).toHaveProperty('green')
    expect(compatiblePalette).toHaveProperty('purple')
    expect(compatiblePalette).toHaveProperty('orange')
    expect(compatiblePalette).toHaveProperty('yellow')
    expect(compatiblePalette).toHaveProperty('red')
    expect(compatiblePalette).toHaveProperty('pink')
    expect(compatiblePalette).toHaveProperty('neutral')
    expect(compatiblePalette).toHaveProperty('indigo')
    expect(compatiblePalette).toHaveProperty('lime')
    expect(compatiblePalette).toHaveProperty('magenta')
    expect(compatiblePalette).toHaveProperty('peach')
    expect(compatiblePalette).toHaveProperty('rose')
    expect(compatiblePalette).toHaveProperty('amber')
    expect(compatiblePalette).toHaveProperty('emerald')
    expect(compatiblePalette).toHaveProperty('ui')
    expect(compatiblePalette).toHaveProperty('shadow')
  })

  /**
   * Проверка значений совместимой палитры
   */
  it('should have valid color values in compatiblePalette', () => {
    // Проверка, что все значения являются строками с правильным форматом HEX
    const validateColor = (color: string) => {
      expect(color).toMatch(/^#[0-9A-Fa-f]{6,8}$/)
    }

    for (const [, value] of Object.entries(compatiblePalette)) {
      if (typeof value === 'object' && value !== null) {
        for (const colorValue of Object.values(value)) {
          if (typeof colorValue === 'string') {
            validateColor(colorValue)
          }
        }
      } else if (typeof value === 'string') {
        validateColor(value)
      }
    }
  })

  /**
   * Проверка, что универсальная палитра и базовая палитра эквивалентны
   */
  it('should have universalPalette equivalent to universalBasePalette', () => {
    expect(universalPalette).toEqual(universalBasePalette)
  })
})
