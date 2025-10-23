import { generateEnhancedTheme, generateTheme } from '../theme/generator'
import { getContrastRatio } from '../theme/utils/contrast'

describe('Accessibility Tests', () => {
  test('All text elements meet WCAG AA contrast ratio', () => {
    const theme = generateEnhancedTheme()
    const violations: string[] = []

    // Проверка основных текстовых элементов
    const textChecks = [
      ['editor.foreground', 'editor.background'],
      ['foreground', 'editor.background'],
      ['button.foreground', 'button.background'],
      ['list.activeSelectionForeground', 'list.activeSelectionBackground'],
      ['statusBar.foreground', 'statusBar.background'],
      ['titleBar.activeForeground', 'titleBar.activeBackground'],
      ['terminal.foreground', 'terminal.background'],
    ]

    textChecks.forEach(([fg, bg]) => {
      const contrast = getContrastRatio(theme.colors[fg], theme.colors[bg])

      if (contrast < 4.5) {
        violations.push(`${fg}: ${contrast.toFixed(2)}:1`)
      }
    })

    expect(violations).toHaveLength(0)
  })

  test('Large text elements meet WCAG AA 3:1 ratio', () => {
    const theme = generateEnhancedTheme()
    const violations: string[] = []

    // Проверка крупных текстовых элементов (кнопки, заголовки)
    const largeTextChecks = [
      ['button.foreground', 'button.background'],
      ['tab.activeForeground', 'tab.activeBackground'],
      ['activityBar.foreground', 'activityBar.background'],
    ]

    largeTextChecks.forEach(([fg, bg]) => {
      const contrast = getContrastRatio(theme.colors[fg], theme.colors[bg])

      if (contrast < 3.0) {
        violations.push(`${fg}: ${contrast.toFixed(2)}:1`)
      }
    })

    expect(violations).toHaveLength(0)
  })

  test('Color blind friendly palette', () => {
    const theme = generateEnhancedTheme()

    // Базовая проверка на различимость для основных типов цветовой слепоты
    const redGreenContrast = getContrastRatio(
      theme.colors['editorError.foreground'],
      theme.colors['editor.background']
    )

    const blueContrast = getContrastRatio(
      theme.colors['editorInfo.foreground'],
      theme.colors['editor.background']
    )

    // Красные и зелёные должны быть хорошо различимы на фоне
    expect(redGreenContrast).toBeGreaterThan(3.0)
    expect(blueContrast).toBeGreaterThan(3.0)
  })

  test('Enhanced theme has better contrast than standard', () => {
    const standardTheme = generateTheme()
    const enhancedTheme = generateEnhancedTheme()

    const standardContrast = getContrastRatio(
      standardTheme.colors['editor.foreground'],
      standardTheme.colors['editor.background']
    )

    const enhancedContrast = getContrastRatio(
      enhancedTheme.colors['editor.foreground'],
      enhancedTheme.colors['editor.background']
    )

    // Улучшенная тема должна иметь лучшую контрастность
    expect(enhancedContrast).toBeGreaterThan(standardContrast)
  })

  test('Terminal colors are accessible', () => {
    const theme = generateEnhancedTheme()
    const violations: string[] = []

    // Проверка ANSI цветов терминала
    const terminalChecks = [
      ['terminal.ansiRed', 'terminal.background'],
      ['terminal.ansiGreen', 'terminal.background'],
      ['terminal.ansiYellow', 'terminal.background'],
      ['terminal.ansiBlue', 'terminal.background'],
      ['terminal.ansiMagenta', 'terminal.background'],
      ['terminal.ansiCyan', 'terminal.background'],
      ['terminal.ansiWhite', 'terminal.background'],
    ]

    terminalChecks.forEach(([color, bg]) => {
      const contrast = getContrastRatio(theme.colors[color], theme.colors[bg])

      if (contrast < 3.0) {
        violations.push(`${color}: ${contrast.toFixed(2)}:1`)
      }
    })

    expect(violations).toHaveLength(0)
  })

  test('Semantic colors have sufficient contrast', () => {
    const theme = generateEnhancedTheme()

    // Проверка семантических цветов
    const errorContrast = getContrastRatio(
      theme.colors['editorError.foreground'],
      theme.colors['editor.background']
    )

    const warningContrast = getContrastRatio(
      theme.colors['editorWarning.foreground'],
      theme.colors['editor.background']
    )

    const infoContrast = getContrastRatio(
      theme.colors['editorInfo.foreground'],
      theme.colors['editor.background']
    )

    expect(errorContrast).toBeGreaterThanOrEqual(4.5)
    expect(warningContrast).toBeGreaterThanOrEqual(4.5)
    expect(infoContrast).toBeGreaterThanOrEqual(4.5)
  })
})
