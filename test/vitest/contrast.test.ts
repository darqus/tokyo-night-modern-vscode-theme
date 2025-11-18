import { chromaMain, ui } from '../../src/theme/palette/config/base-colors'
import {
  areColorsSimilar,
  checkContrast,
  getColorDistance,
  getContrastRatio,
  getLuminance,
  meetsWCAG,
} from '../../src/theme/utils/contrast'

describe('Contrast Utils', () => {
  describe('getLuminance', () => {
    it('should calculate luminance', () => {
      expect(getLuminance(ui.white)).toBeCloseTo(1, 2)
      expect(getLuminance(ui.black)).toBeCloseTo(0, 2)
      expect(getLuminance(chromaMain.slate)).toBeCloseTo(0.24, 2)
    })
  })

  describe('getContrastRatio', () => {
    it('should calculate contrast ratio', () => {
      expect(getContrastRatio(ui.white, ui.black)).toBeCloseTo(21, 0)
      expect(getContrastRatio(ui.white, ui.white)).toBeCloseTo(1, 0)
    })
  })

  describe('meetsWCAG', () => {
    it('should check AA compliance', () => {
      expect(meetsWCAG(ui.white, ui.black, 'AA')).toBe(true)
      expect(meetsWCAG(ui.white, ui.white, 'AA')).toBe(false)
    })

    it('should check AAA compliance', () => {
      expect(meetsWCAG(ui.white, ui.black, 'AAA')).toBe(true)
      expect(meetsWCAG(ui.white, chromaMain.slate, 'AAA')).toBe(false)
    })
  })

  describe('checkContrast', () => {
    it('should return contrast info', () => {
      const result = checkContrast(ui.white, ui.black)
      expect(result.ratio).toBeCloseTo(21, 0)
      expect(result.aa).toBe(true)
      expect(result.aaa).toBe(true)
    })
  })

  describe('getColorDistance', () => {
    it('should calculate color distance', () => {
      expect(getColorDistance(ui.black, ui.black)).toBe(0)
      expect(getColorDistance(chromaMain.red, chromaMain.green)).toBeCloseTo(
        152.96,
        1
      )
    })
  })

  describe('areColorsSimilar', () => {
    it('should detect similar colors', () => {
      expect(areColorsSimilar(chromaMain.red, '#ff6b6c', 50)).toBe(true)
      expect(areColorsSimilar(chromaMain.red, chromaMain.green, 50)).toBe(false)
    })
  })
})
