import { generateTheme } from '../src/theme/generator'
import { validateColorUsage } from '../src/theme/validation'
import { semantic } from '../src/theme/palette/semantic/index'
import { nestedSyntaxColors as syntax } from '../src/theme/palette/syntax/nested'

describe('Theme Generator', () => {
  describe('generateTheme', () => {
    const theme = generateTheme()

    it('should generate theme with correct structure', () => {
      expect(theme).toHaveProperty('name', 'Tokyo Night Modern')
      expect(theme).toHaveProperty('type', 'dark')
      expect(theme).toHaveProperty('colors')
      expect(theme).toHaveProperty('tokenColors')
    })

    it('should generate workbench colors with correct values', () => {
      const { colors } = theme

      // Проверяем основные цвета
      expect(colors['editor.background']).toBe(
        semantic.surfaces.background.base
      )
      expect(colors['editor.foreground']).toBe(semantic.text.primary.base)

      // Проверяем цвета боковой панели
      expect(colors['sideBar.background']).toBe(
        semantic.surfaces.background.base
      )
      expect(colors['sideBar.foreground']).toBe(semantic.text.secondary.base)
      expect(colors['sideBar.border']).toBe(
        semantic.borders.structural.default.base
      )

      // Проверяем цвета статус бара
      expect(colors['statusBar.background']).toBe(
        semantic.surfaces.background.base
      )
      expect(colors['statusBar.foreground']).toBe(semantic.text.primary.base)
    })

    it('should generate token colors with correct values', () => {
      const { tokenColors } = theme

      // Проверяем базовые токены
      const keywordToken = tokenColors.find((t) => t.name === 'Keywords')
      expect(keywordToken?.settings.foreground).toBe(syntax.base.keyword.base)

      const stringToken = tokenColors.find((t) => t.name === 'Strings')
      expect(stringToken?.settings.foreground).toBe(syntax.base.string.base)

      const commentToken = tokenColors.find((t) => t.name === 'Comments')
      expect(commentToken?.settings.foreground).toBe(syntax.base.comment.base)
      expect(commentToken?.settings.fontStyle).toBe('italic')
    })

    it('should generate theme that passes validation', () => {
      const validation = validateColorUsage(theme)

      // Проверяем только критические ошибки
      expect(validation.summary.errors).toBe(0)

      // Предупреждения допустимы
      if (validation.summary.warnings > 0) {
        console.warn('Theme validation warnings:', validation.summary.warnings)
      }
    })
  })

  describe('theme consistency', () => {
    const theme = generateTheme()

    it('should use semantic colors consistently', () => {
      const { colors } = theme
      const backgroundValues = new Set()
      const foregroundValues = new Set()

      // Собираем все значения фонов и текста
      Object.entries(colors).forEach(([key, value]) => {
        if (key.includes('background')) {
          backgroundValues.add(value)
        }
        if (key.includes('foreground')) {
          foregroundValues.add(value)
        }
      })

      // Проверяем, что используется ограниченный набор цветов
      expect(backgroundValues.size).toBeLessThanOrEqual(5)
      expect(foregroundValues.size).toBeLessThanOrEqual(5)
    })

    it('should use syntax colors consistently', () => {
      const { tokenColors } = theme
      const syntaxValues = new Set()

      // Собираем все значения синтаксических цветов
      tokenColors.forEach((token) => {
        if (token.settings.foreground) {
          syntaxValues.add(token.settings.foreground)
        }
      })

      // Проверяем, что используется разумное количество цветов
      expect(syntaxValues.size).toBeGreaterThan(5) // Минимум для базовых элементов
      expect(syntaxValues.size).toBeLessThan(20) // Максимум для всех элементов
    })

    it('should have all required token scopes', () => {
      const { tokenColors } = theme
      const requiredScopes = [
        'keyword',
        'string',
        'comment',
        'variable',
        'constant',
        'entity.name.function',
        'entity.name.type',
      ]

      requiredScopes.forEach((scope) => {
        const hasScope = tokenColors.some((token) => {
          const scopes = Array.isArray(token.scope)
            ? token.scope
            : [token.scope]
          return scopes.some((s) => s.includes(scope))
        })
        expect(hasScope).toBe(true)
      })
    })
  })
})
