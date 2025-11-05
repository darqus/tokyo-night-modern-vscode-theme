import { describe, expect, it, vi } from 'vitest'

describe('Complete Coverage Tests', () => {
  describe('Logger Utils - Full Coverage', () => {
    it('should handle non-string input in sanitizeLogOutput', async () => {
      const { sanitizeLogOutput } = await import('../../src/theme/utils/logger')

      expect(sanitizeLogOutput(null)).toBe('null')
      expect(sanitizeLogOutput(undefined)).toBe('undefined')
      expect(sanitizeLogOutput(123)).toBe('123')
      expect(sanitizeLogOutput({})).toBe('[object Object]')
    })

    it('should test all logger methods', async () => {
      const infoSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      const { logger } = await import('../../src/theme/utils/logger')
      logger.info('info message')
      logger.warn('warn message')
      logger.error('error message')

      expect(infoSpy).toHaveBeenCalled()
      expect(warnSpy).toHaveBeenCalled()
      expect(errorSpy).toHaveBeenCalled()

      infoSpy.mockRestore()
      warnSpy.mockRestore()
      errorSpy.mockRestore()
    })

    it('should test debug logger in development', async () => {
      const originalEnv = process.env.NODE_ENV
      process.env.NODE_ENV = 'development'

      const consoleSpy = vi.spyOn(console, 'debug').mockImplementation(() => {})

      const { logger } = await import('../../src/theme/utils/logger')
      logger.debug('debug message')

      expect(consoleSpy).toHaveBeenCalled()

      process.env.NODE_ENV = originalEnv
      consoleSpy.mockRestore()
    })

    it('should not call debug in production', async () => {
      const originalEnv = process.env.NODE_ENV
      process.env.NODE_ENV = 'production'

      const consoleSpy = vi.spyOn(console, 'debug').mockImplementation(() => {})

      const { logger } = await import('../../src/theme/utils/logger')
      logger.debug('debug message')

      expect(consoleSpy).not.toHaveBeenCalled()

      process.env.NODE_ENV = originalEnv
      consoleSpy.mockRestore()
    })
  })

  describe('Safe Exec Utils - Full Coverage', () => {
    it('should test SafeExecError creation', async () => {
      const { SafeExecError } = await import('../../src/theme/utils/safe-exec')

      const error = new SafeExecError('Test error', 'test command', 1)
      expect(error.message).toBe('Test error')
      expect(error.command).toBe('test command')
      expect(error.code).toBe(1)
      expect(error.name).toBe('SafeExecError')
    })

    it('should test command sanitization', async () => {
      const { safeExec } = await import('../../src/theme/utils/safe-exec')

      // Test empty command
      expect(() => safeExec('')).toThrow()
      expect(() => safeExec('   ')).toThrow()

      // Test disallowed command
      expect(() => safeExec('rm -rf /')).toThrow()
    })

    it('should test successful command execution', async () => {
      const { safeExec } = await import('../../src/theme/utils/safe-exec')

      const result = safeExec('node --version', { silent: true })
      expect(result).toBeTruthy()
    })
  })

  describe('Color Generator - Full Coverage', () => {
    it('should test error handling in generators', async () => {
      const {
        generateBackgroundScale,
        generateForegroundScale,
        generateColorVariants,
      } = await import('../../src/theme/utils/color-generator')

      // Test with invalid colors to trigger error paths
      expect(() => generateBackgroundScale('invalid')).toThrow()
      expect(() => generateForegroundScale('invalid')).toThrow()
      expect(() => generateColorVariants('invalid')).toThrow()
    })

    it('should test successful generation', async () => {
      const {
        generateBackgroundScale,
        generateForegroundScale,
        generateColorVariants,
      } = await import('../../src/theme/utils/color-generator')

      const bgScale = generateBackgroundScale('#1a1a1a')
      expect(bgScale).toHaveProperty('darkest')
      expect(bgScale).toHaveProperty('main')
      expect(bgScale).toHaveProperty('lightest')

      const fgScale = generateForegroundScale('#ffffff')
      expect(fgScale).toHaveProperty('dim')
      expect(fgScale).toHaveProperty('medium')
      expect(fgScale).toHaveProperty('brightest')

      const variants = generateColorVariants('#ff0000')
      expect(variants).toHaveProperty('dark')
      expect(variants).toHaveProperty('main')
      expect(variants).toHaveProperty('bright')
    })
  })

  describe('RGB Utils - Edge Cases', () => {
    it('should test normalizeHex error cases', async () => {
      const { normalizeHex } = await import('../../src/theme/utils/rgb')

      expect(() => normalizeHex('invalid')).toThrow()
      expect(() => normalizeHex('#ff')).toThrow()
      // 4-digit hex with alpha (like #ffff) is now valid and should not throw
      expect(() => normalizeHex('#ffff')).not.toThrow()
    })

    it('should test hexToRgb error cases', async () => {
      const { hexToRgb } = await import('../../src/theme/utils/rgb')

      expect(() => hexToRgb('#gggggg')).toThrow()
      // hexToRgb now accepts 8-digit hex colors (with alpha), so this should not throw
      expect(() => hexToRgb('#ff0000ff')).not.toThrow()
      const result = hexToRgb('#ff0000ff')
      expect(result).toEqual({ r: 255, g: 0, b: 0 })
    })
  })

  describe('Validation Utils - Edge Cases', () => {
    it('should test validation error paths', async () => {
      const { validateTheme } = await import('../../src/theme/utils/validation')

      // Test with malformed theme to trigger error paths
      const malformedTheme = {
        name: 'Test',
        type: 'dark' as const,
        colors: {},
        tokenColors: [
          {
            name: 'Test',
            scope: ['test'],
            settings: { foreground: 'invalid' },
          },
        ],
        semanticTokenColors: {},
      }

      // Should not throw but will log warnings
      expect(() => validateTheme(malformedTheme)).not.toThrow()
    })
  })

  describe('Semantic Tokens - Edge Cases', () => {
    it('should test createSemanticToken edge case', async () => {
      const { createSemanticToken } = await import(
        '../../src/theme/utils/semantic-tokens'
      )

      // Test with invalid style to trigger filtering
      const token = createSemanticToken({
        foreground: '',
        fontStyle: undefined,
      })

      expect(Object.keys(token).length).toBe(0)
    })
  })

  describe('Contrast Utils - Branch Coverage', () => {
    it('should test contrast edge case', async () => {
      const { getLuminance } = await import('../../src/theme/utils/contrast')

      // Test edge case for sRGB conversion
      const darkLuminance = getLuminance('#0a0a0a')
      expect(darkLuminance).toBeGreaterThan(0)
    })
  })
})
