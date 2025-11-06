import { alpha, lighten, mix } from '../../src/theme/utils/color'
import {
  ADJUST,
  activeState,
  borderColor,
  disabledState,
  hardShadow,
  hoverState,
  lightBackground,
  MIX_RATIO,
  mediumHighlight,
  OPACITY,
  softShadow,
  strongHighlight,
  subtleBackground,
  subtleHighlight,
} from '../../src/theme/utils/color-helpers'

describe('Color Helpers', () => {
  describe('Constants', () => {
    it('OPACITY should have correct values', () => {
      expect(OPACITY.VERY_SUBTLE).toBe(0.1)
      expect(OPACITY.SUBTLE).toBe(0.15)
      expect(OPACITY.LIGHT).toBe(0.2)
      expect(OPACITY.MEDIUM).toBe(0.3)
      expect(OPACITY.STRONG).toBe(0.5)
      expect(OPACITY.VERY_STRONG).toBe(0.7)
    })

    it('ADJUST should have correct values', () => {
      expect(ADJUST.TINY).toBe(0.02)
      expect(ADJUST.SLIGHT).toBe(0.05)
      expect(ADJUST.SMALL).toBe(0.08)
      expect(ADJUST.LIGHT).toBe(0.1)
      expect(ADJUST.MEDIUM).toBe(0.15)
      expect(ADJUST.STRONG).toBe(0.2)
      expect(ADJUST.VERY_STRONG).toBe(0.25)
    })

    it('MIX_RATIO should have correct values', () => {
      expect(MIX_RATIO.MOSTLY_FIRST).toBe(0.2)
      expect(MIX_RATIO.BALANCED).toBe(0.5)
      expect(MIX_RATIO.MOSTLY_SECOND).toBe(0.8)
    })
  })

  describe('Semantic Functions', () => {
    const baseColor = '#ff0000'
    const accentColor = '#0000ff'

    it('subtleHighlight should apply light opacity', () => {
      expect(subtleHighlight(baseColor)).toBe(alpha(baseColor, OPACITY.LIGHT))
    })

    it('mediumHighlight should apply medium opacity', () => {
      expect(mediumHighlight(baseColor)).toBe(alpha(baseColor, OPACITY.MEDIUM))
    })

    it('strongHighlight should apply strong opacity', () => {
      expect(strongHighlight(baseColor)).toBe(alpha(baseColor, OPACITY.STRONG))
    })

    it('borderColor should mix background and accent', () => {
      expect(borderColor(baseColor, accentColor)).toBe(
        mix(baseColor, accentColor, MIX_RATIO.MOSTLY_FIRST)
      )
    })

    it('hoverState should lighten base color', () => {
      expect(hoverState(baseColor)).toBe(lighten(baseColor, ADJUST.LIGHT))
    })

    it('activeState should lighten base color more', () => {
      expect(activeState(baseColor)).toBe(lighten(baseColor, ADJUST.MEDIUM))
    })

    it('disabledState should apply strong opacity', () => {
      expect(disabledState(baseColor)).toBe(alpha(baseColor, OPACITY.STRONG))
    })

    it('subtleBackground should apply very subtle opacity', () => {
      expect(subtleBackground(baseColor)).toBe(
        alpha(baseColor, OPACITY.VERY_SUBTLE)
      )
    })

    it('lightBackground should lighten base color slightly', () => {
      expect(lightBackground(baseColor)).toBe(lighten(baseColor, ADJUST.TINY))
    })

    it('softShadow should apply medium opacity', () => {
      expect(softShadow(baseColor)).toBe(alpha(baseColor, OPACITY.MEDIUM))
    })

    it('hardShadow should apply strong opacity', () => {
      expect(hardShadow(baseColor)).toBe(alpha(baseColor, OPACITY.STRONG))
    })
  })
})
