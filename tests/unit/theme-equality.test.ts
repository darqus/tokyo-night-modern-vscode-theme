import { generateTokyoNightTheme } from '../../src/theme/generator/tokyo-night-generators'

/**
 * Тест для проверки темы generateTokyoNightTheme
 */
describe('Theme Test', () => {
  const tokyoNightTheme = generateTokyoNightTheme()

  test('colors property should be properly defined', () => {
    expect(tokyoNightTheme.colors).toBeDefined()
  })

  test('tokenColors property should be properly defined', () => {
    expect(tokyoNightTheme.tokenColors).toBeDefined()
  })

  test('semanticTokenColors property should be properly defined', () => {
    expect(tokyoNightTheme.semanticTokenColors).toBeDefined()
  })

  test('theme should have required properties', () => {
    expect(tokyoNightTheme).toHaveProperty('name')
    expect(tokyoNightTheme).toHaveProperty('colors')
    expect(tokyoNightTheme).toHaveProperty('tokenColors')
  })
})
