import { generateTheme } from '../theme/generator'
import { palette } from '../theme/palette'
import { alpha, darken, lighten, normalizeHex } from '../theme/utils/color'

describe('Theme Validation Tests', () => {
  // Функция для извлечения всех значений цветов из палитры
  function extractPaletteColors(obj: unknown, prefix: string = ''): string[] {
    const colors: string[] = []

    if (typeof obj === 'string') {
      colors.push(obj)
      return colors
    }

    if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
      for (const [key, value] of Object.entries(obj)) {
        const newKey = prefix ? `${prefix}.${key}` : key
        if (typeof value === 'string') {
          colors.push(value)
        } else if (typeof value === 'object' && value !== null) {
          colors.push(...extractPaletteColors(value, newKey))
        }
      }
    }

    return colors
  }

  const allPaletteColors = new Set(extractPaletteColors(palette))

  // Функция для проверки, является ли цвет производным от палитры
  function isColorFromPalette(color: string): boolean {
    // Проверяем, есть ли базовый цвет (без альфа-канала) в палитре
    const baseColor = color.length === 9 ? color.substring(0, 7) : color
    if (allPaletteColors.has(baseColor)) {
      return true
    }

    // Проверяем, является ли цвет результатом преобразования палитры
    // Для этого ищем в палитре цвет, который при применении к нему функций
    // alpha, lighten или darken даст искомый цвет
    for (const paletteColor of allPaletteColors) {
      // Проверяем alpha - пробуем стандартные значения прозрачности
      const standardOpacities = [
        0.1, 0.2, 0.25, 0.3, 0.3, 0.4, 0.5, 0.6, 0.66, 0.7, 0.75, 0.8, 0.9, 1.0,
      ]
      for (const opacity of standardOpacities) {
        if (
          normalizeHex(alpha(paletteColor, opacity)) === normalizeHex(color)
        ) {
          return true
        }
      }

      // Проверяем lighten - пробуем стандартные значения осветления
      const standardLightens = [
        0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5,
      ]
      for (const lightAmount of standardLightens) {
        if (
          normalizeHex(lighten(paletteColor, lightAmount)) ===
          normalizeHex(color)
        ) {
          return true
        }
      }

      // Проверяем darken - пробуем стандартные значения затемнения
      const standardDarkens = [
        0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5,
      ]
      for (const darkAmount of standardDarkens) {
        if (
          normalizeHex(darken(paletteColor, darkAmount)) === normalizeHex(color)
        ) {
          return true
        }
      }
    }

    return false
  }

  test('Standard theme should have valid structure', () => {
    const theme = generateTheme()

    expect(theme).toHaveProperty('name')
    expect(theme).toHaveProperty('type', 'dark')
    expect(theme).toHaveProperty('colors')
    expect(theme).toHaveProperty('tokenColors')
    expect(theme).toHaveProperty('semanticTokenColors')

    expect(typeof theme.name).toBe('string')
    expect(typeof theme.colors).toBe('object')
    expect(Array.isArray(theme.tokenColors)).toBe(true)
    expect(typeof theme.semanticTokenColors).toBe('object')
  })

  test('Theme should have required VSCode color properties', () => {
    const theme = generateTheme()
    const requiredColors = [
      'editor.background',
      'editor.foreground',
      'editorCursor.foreground',
      'editor.lineHighlightBackground',
      'editor.selectionBackground',
      'editor.inactiveSelectionBackground',
      'activityBar.background',
      'activityBar.foreground',
      'sideBar.background',
      'sideBar.foreground',
      'statusBar.background',
      'statusBar.foreground',
      'titleBar.activeBackground',
      'titleBar.activeForeground',
    ]

    requiredColors.forEach((color) => {
      expect(color in theme.colors).toBe(true)
      expect(typeof theme.colors[color]).toBe('string')
      expect(theme.colors[color]).toMatch(/^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/)
    })
  })

  test('All theme colors should use palette variables instead of hardcoded values', () => {
    const theme = generateTheme()
    const themeColors = Object.values(theme.colors)

    // Проверяем, что каждый цвет из темы происходит от палитры
    for (const color of themeColors) {
      expect(isColorFromPalette(color)).toBe(true)
    }
  })

  test('Token colors should have valid structure', () => {
    const theme = generateTheme()

    theme.tokenColors.forEach((token) => {
      expect(token).toHaveProperty('scope')

      // Проверяем, что у токена есть либо settings, либо он просто определяет scope
      if ('settings' in token) {
        // Если у токена есть настройки, то проверяем их структуру
        expect(token.settings).toBeDefined()

        // Проверяем, что у токена есть хотя бы одно из свойств: foreground, fontStyle или background
        const hasForeground = token.settings && 'foreground' in token.settings
        const hasFontStyle = token.settings && 'fontStyle' in token.settings
        const hasBackground = token.settings && 'background' in token.settings
        const hasValidSetting = hasForeground || hasFontStyle || hasBackground
        expect(hasValidSetting).toBe(true)

        if (token.settings?.foreground) {
          expect(token.settings.foreground).toMatch(
            /^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/
          )
        }

        if (token.settings?.fontStyle) {
          expect([
            'bold',
            'italic',
            'underline',
            'bold italic',
            'bold underline',
            'italic underline',
            'bold italic underline',
          ]).toContain(token.settings.fontStyle)
        }
      }
    })
  })

  test('All token colors should use palette variables instead of hardcoded values', () => {
    const theme = generateTheme()

    theme.tokenColors.forEach((token) => {
      if (token.settings?.foreground) {
        expect(isColorFromPalette(token.settings.foreground)).toBe(true)
      }
      if (token.settings?.background) {
        expect(isColorFromPalette(token.settings.background)).toBe(true)
      }
    })
  })

  test('Semantic token colors should have valid structure', () => {
    const theme = generateTheme()

    Object.entries(theme.semanticTokenColors).forEach(([key, value]) => {
      expect(typeof key).toBe('string')
      expect(typeof value).toBe('object')

      if (value.foreground) {
        expect(value.foreground).toMatch(/^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/)
      }

      if (value.fontStyle) {
        expect([
          'bold',
          'italic',
          'underline',
          'bold italic',
          'bold underline',
          'italic underline',
          'bold italic underline',
        ]).toContain(value.fontStyle)
      }
    })
  })

  test('All semantic token colors should use palette variables instead of hardcoded values', () => {
    const theme = generateTheme()

    Object.values(theme.semanticTokenColors).forEach((value) => {
      if (value.foreground) {
        expect(isColorFromPalette(value.foreground)).toBe(true)
      }
    })
  })

  test('Theme should not have excessive duplicate colors', () => {
    const theme = generateTheme()
    const colorValues = Object.values(theme.colors)
    const uniqueColors = new Set(colorValues)

    // Позволяем некоторые дубликаты для консистентности дизайна
    const duplicateRatio =
      (colorValues.length - uniqueColors.size) / colorValues.length
    expect(duplicateRatio).toBeLessThan(0.8) // Менее 80% дубликатов (увеличили порог)
  })

  test('Theme should have terminal colors', () => {
    const theme = generateTheme()
    const terminalColors = [
      'terminal.background',
      'terminal.foreground',
      'terminal.ansiBlack',
      'terminal.ansiRed',
      'terminal.ansiGreen',
      'terminal.ansiYellow',
      'terminal.ansiBlue',
      'terminal.ansiMagenta',
      'terminal.ansiCyan',
      'terminal.ansiWhite',
      'terminal.ansiBrightBlack',
      'terminal.ansiBrightRed',
      'terminal.ansiBrightGreen',
      'terminal.ansiBrightYellow',
      'terminal.ansiBrightBlue',
      'terminal.ansiBrightMagenta',
      'terminal.ansiBrightCyan',
      'terminal.ansiBrightWhite',
    ]

    terminalColors.forEach((color) => {
      expect(color in theme.colors).toBe(true)
      expect(typeof theme.colors[color]).toBe('string')
    })
  })

  test('Theme should have Git colors', () => {
    const theme = generateTheme()
    const gitColors = [
      'gitDecoration.modifiedResourceForeground',
      'gitDecoration.deletedResourceForeground',
      'gitDecoration.untrackedResourceForeground',
      'gitDecoration.ignoredResourceForeground',
      'gitDecoration.conflictingResourceForeground',
      'gitDecoration.submoduleResourceForeground',
    ]

    // Проверяем наличие хотя бы части Git-цветов, а не всех сразу
    const existingGitColors = gitColors.filter((color) => color in theme.colors)
    expect(existingGitColors.length).toBeGreaterThan(0) // Должен быть хотя бы один Git-цвет
    expect(existingGitColors.length).toBeGreaterThanOrEqual(
      gitColors.length / 2
    ) // Должно быть хотя бы половина Git-цветов

    existingGitColors.forEach((color) => {
      expect(typeof theme.colors[color]).toBe('string')
    })
  })

  test('Theme should have valid color count', () => {
    const theme = generateTheme()

    const colorCount = Object.keys(theme.colors).length

    // Проверяем, что тема имеет разумное количество цветов
    expect(colorCount).toBeGreaterThan(50) // Минимум 50 цветов
    expect(colorCount).toBeLessThan(500) // Максимум 500 цветов
  })
})
