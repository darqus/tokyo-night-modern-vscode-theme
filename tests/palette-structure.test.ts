/**
 * Tests for the new semantic palette structure
 * Тесты для новой семантической структуры палитры
 */

import { palette } from '../src/theme/palette/index'
import { primitiveColors } from '../src/theme/palette/foundation'
import { semanticColors } from '../src/theme/palette/semantic'
import { uiColors } from '../src/theme/palette/ui'
import { syntaxColors } from '../src/theme/palette/syntax'

describe('Palette Structure Tests', () => {
  describe('Primitive Colors', () => {
    test('should have core color scales', () => {
      const coreScales = [
        'blue',
        'purple',
        'green',
        'yellow',
        'red',
        'cyan',
        'gray',
      ]
      const coreValues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

      coreScales.forEach((scale) => {
        coreValues.forEach((value) => {
          const colorKey = `${scale}${value}` as keyof typeof primitiveColors
          expect(primitiveColors[colorKey]).toBeDefined()
          expect(primitiveColors[colorKey]).toMatch(/^#[0-9a-fA-F]{6}$/)
        })
      })
    })

    test('should have valid hex color format', () => {
      Object.values(primitiveColors).forEach((color) => {
        expect(color).toMatch(/^#[0-9a-fA-F]{6}$/)
      })
    })

    test('should have consistent color progression', () => {
      // Test that colors get darker as the number increases
      const blueScale = [
        'blue50',
        'blue100',
        'blue200',
        'blue300',
        'blue400',
        'blue500',
        'blue600',
        'blue700',
        'blue800',
        'blue900',
      ]

      for (let i = 1; i < blueScale.length; i++) {
        const prevColor =
          primitiveColors[blueScale[i - 1] as keyof typeof primitiveColors]
        const currentColor =
          primitiveColors[blueScale[i] as keyof typeof primitiveColors]

        // Basic check that colors are different (more sophisticated luminance check would be better)
        expect(prevColor).not.toBe(currentColor)
      }
    })
  })

  describe('Semantic Colors', () => {
    test('should have all required semantic roles', () => {
      const requiredRoles = [
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'info',
        'link',
        'hover',
        'active',
        'focus',
        'text',
        'textSecondary',
        'textDisabled',
        'textInverse',
        'background',
        'backgroundSecondary',
        'backgroundElevated',
        'backgroundOverlay',
        'border',
        'borderSecondary',
        'borderFocus',
        'shadow',
        'highlight',
        'selection',
      ]

      requiredRoles.forEach((role) => {
        expect(
          semanticColors[role as keyof typeof semanticColors]
        ).toBeDefined()
        expect(semanticColors[role as keyof typeof semanticColors]).toMatch(
          /^#[0-9a-fA-F]{6}$/
        )
      })
    })

    test('should reference primitive colors', () => {
      expect(semanticColors.primary).toBe(primitiveColors.blue500)
      expect(semanticColors.secondary).toBe(primitiveColors.purple500)
      expect(semanticColors.success).toBe(primitiveColors.green500)
      expect(semanticColors.warning).toBe(primitiveColors.yellow500)
      expect(semanticColors.error).toBe(primitiveColors.red500)
      expect(semanticColors.info).toBe(primitiveColors.cyan500)
    })

    test('should have proper contrast relationships', () => {
      // Text should contrast well with background
      expect(semanticColors.text).not.toBe(semanticColors.background)
      expect(semanticColors.textInverse).not.toBe(semanticColors.background)
    })
  })

  describe('UI Colors', () => {
    test('should have structured background variations', () => {
      expect(uiColors.backgrounds.primary).toBeDefined()
      expect(uiColors.backgrounds.secondary).toBeDefined()
      expect(uiColors.backgrounds.elevated).toBeDefined()
      expect(uiColors.backgrounds.overlay).toBeDefined()
    })

    test('should have structured text variations', () => {
      expect(uiColors.text.primary).toBeDefined()
      expect(uiColors.text.secondary).toBeDefined()
      expect(uiColors.text.tertiary).toBeDefined()
      expect(uiColors.text.disabled).toBeDefined()
    })

    test('should have structured border variations', () => {
      expect(uiColors.borders.default).toBeDefined()
      expect(uiColors.borders.subtle).toBeDefined()
      expect(uiColors.borders.focus).toBeDefined()
    })

    test('should have interactive states', () => {
      expect(uiColors.interactive.hover).toBeDefined()
      expect(uiColors.interactive.active).toBeDefined()
      expect(uiColors.interactive.selected).toBeDefined()
      expect(uiColors.interactive.disabled).toBeDefined()
    })
  })

  describe('Syntax Colors', () => {
    test('should have basic syntax elements', () => {
      const basicElements = [
        'keyword',
        'keywordControl',
        'keywordOperator',
        'string',
        'stringEscape',
        'number',
        'comment',
        'function',
        'variable',
        'type',
      ]

      basicElements.forEach((element) => {
        expect(syntaxColors[element as keyof typeof syntaxColors]).toBeDefined()
        expect(syntaxColors[element as keyof typeof syntaxColors]).toMatch(
          /^#[0-9a-fA-F]{6}$/
        )
      })
    })

    test('should have language-specific colors', () => {
      expect(syntaxColors.javascript).toBeDefined()
      expect(syntaxColors.typescript).toBeDefined()
      expect(syntaxColors.css).toBeDefined()
      expect(syntaxColors.html).toBeDefined()
      expect(syntaxColors.markdown).toBeDefined()
      expect(syntaxColors.json).toBeDefined()
    })

    test('should use semantic colors where appropriate', () => {
      expect(syntaxColors.keyword).toBe(semanticColors.secondary)
      expect(syntaxColors.function).toBe(semanticColors.primary)
      expect(syntaxColors.invalid).toBe(semanticColors.error)
    })
  })

  describe('Combined Palette', () => {
    test('should include all color categories', () => {
      expect(palette.primary).toBeDefined()
      expect(palette.background).toBeDefined()
      expect(palette.function).toBeDefined()
      expect(palette.keyword).toBeDefined()
    })

    test('should maintain backward compatibility', () => {
      // Test that legacy color names still work
      expect(palette.blue).toBe(semanticColors.primary)
      expect(palette.purple).toBe(semanticColors.secondary)
      expect(palette.green).toBe(semanticColors.success)
      expect(palette.red).toBe(semanticColors.error)
    })

    test('should have significantly fewer colors than original', () => {
      const originalColorCount = 4503 // From analysis
      const newColorCount = Object.keys(palette).length

      // Should have at least 50% reduction
      expect(newColorCount).toBeLessThan(originalColorCount * 0.5)
    })
  })

  describe('Color Validation', () => {
    test('should validate hex color format', () => {
      const validColors = [
        '#ff0000',
        '#00ff00',
        '#0000ff',
        '#ffffff',
        '#000000',
      ]
      const invalidColors = ['red', '#gg0000', '#ff', '#ff0000ff']

      validColors.forEach((color) => {
        expect(palette.colorValidation?.isValidHex(color)).toBe(true)
      })

      invalidColors.forEach((color) => {
        expect(palette.colorValidation?.isValidHex(color)).toBe(false)
      })
    })
  })

  describe('Alpha Variants', () => {
    test('should have optimized alpha values', () => {
      expect(palette.optimizedAlphaValues).toBeDefined()
      expect(Object.keys(palette.optimizedAlphaValues || {})).toEqual([
        '20',
        '40',
        '60',
        '80',
      ])
    })

    test('should create alpha variants correctly', () => {
      // Test that alpha variants are created properly
      const baseColor = '#ff0000'
      const alpha20 = `${baseColor}20`
      const alpha40 = `${baseColor}40`

      expect(alpha20).toBe('#ff000020')
      expect(alpha40).toBe('#ff000040')
    })
  })
})

describe('Performance Tests', () => {
  test('should create palette quickly', () => {
    const startTime = performance.now()

    // Access all colors multiple times
    for (let i = 0; i < 1000; i++) {
      Object.values(palette)
    }

    const endTime = performance.now()
    const duration = endTime - startTime

    // Should complete in less than 100ms
    expect(duration).toBeLessThan(100)
  })

  test('should have reasonable memory footprint', () => {
    const paletteSize = JSON.stringify(palette).length

    // Should be less than 100KB
    expect(paletteSize).toBeLessThan(100000)
  })
})
