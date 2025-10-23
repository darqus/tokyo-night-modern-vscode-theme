import { generateEnhancedTheme, generateTheme } from '../theme/generator'

describe('Theme Validation Tests', () => {
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

  test('Enhanced theme should have valid structure', () => {
    const theme = generateEnhancedTheme()

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
    const theme = generateEnhancedTheme()
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
      expect(theme.colors).toHaveProperty(color)
      expect(typeof theme.colors[color]).toBe('string')
      expect(theme.colors[color]).toMatch(/^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/)
    })
  })

  test('Token colors should have valid structure', () => {
    const theme = generateEnhancedTheme()

    theme.tokenColors.forEach((token) => {
      expect(token).toHaveProperty('scope')
      expect(token).toHaveProperty('settings')
      expect(token.settings).toHaveProperty('foreground')

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

      expect(token.settings?.foreground).toMatch(
        /^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/
      )
    })
  })

  test('Semantic token colors should have valid structure', () => {
    const theme = generateEnhancedTheme()

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

  test('Theme should not have duplicate colors', () => {
    const theme = generateEnhancedTheme()
    const colorValues = Object.values(theme.colors)
    const uniqueColors = new Set(colorValues)

    // Позволяем некоторые дубликаты для консистентности дизайна
    const duplicateRatio =
      (colorValues.length - uniqueColors.size) / colorValues.length
    expect(duplicateRatio).toBeLessThan(0.3) // Менее 30% дубликатов
  })

  test('Theme should have terminal colors', () => {
    const theme = generateEnhancedTheme()
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
      expect(theme.colors).toHaveProperty(color)
      expect(typeof theme.colors[color]).toBe('string')
    })
  })

  test('Theme should have Git colors', () => {
    const theme = generateEnhancedTheme()
    const gitColors = [
      'gitDecoration.modifiedResourceForeground',
      'gitDecoration.deletedResourceForeground',
      'gitDecoration.untrackedResourceForeground',
      'gitDecoration.ignoredResourceForeground',
      'gitDecoration.conflictingResourceForeground',
      'gitDecoration.submoduleResourceForeground',
    ]

    gitColors.forEach((color) => {
      expect(theme.colors).toHaveProperty(color)
      expect(typeof theme.colors[color]).toBe('string')
    })
  })

  test('Enhanced theme should have more features than standard', () => {
    const standardTheme = generateTheme()
    const enhancedTheme = generateEnhancedTheme()

    const standardColorCount = Object.keys(standardTheme.colors).length
    const enhancedColorCount = Object.keys(enhancedTheme.colors).length

    // Улучшенная тема должна иметь больше цветов
    expect(enhancedColorCount).toBeGreaterThan(standardColorCount)
  })
})
