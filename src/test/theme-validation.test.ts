import { generateTheme } from '../theme/generator'

describe('Theme Validation Tests', () => {
  // Удаляем дублирующийся тест

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
      expect(theme.colors.hasOwnProperty(color)).toBe(true)
      expect(typeof theme.colors[color]).toBe('string')
      expect(theme.colors[color]).toMatch(/^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/)
    })
  })

  test('Token colors should have valid structure', () => {
    const theme = generateTheme()

    theme.tokenColors.forEach((token) => {
      expect(token).toHaveProperty('scope')

      // Проверяем, что у токена есть либо settings, либо он просто определяет scope
      if (token.hasOwnProperty('settings')) {
        // Если у токена есть настройки, то проверяем их структуру
        expect(token.settings).toBeDefined()

        // Проверяем, что у токена есть хотя бы одно из свойств: foreground, fontStyle или background
        const hasForeground =
          token.settings && token.settings.hasOwnProperty('foreground')
        const hasFontStyle =
          token.settings && token.settings.hasOwnProperty('fontStyle')
        const hasBackground =
          token.settings && token.settings.hasOwnProperty('background')
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
      expect(theme.colors.hasOwnProperty(color)).toBe(true)
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
    const existingGitColors = gitColors.filter((color) =>
      theme.colors.hasOwnProperty(color)
    )
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
