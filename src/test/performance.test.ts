import { generateEnhancedTheme, generateTheme } from '../theme/generator'
import { measureThemeGeneration } from '../utils/performance'

describe('Performance Tests', () => {
  test('Theme generation should be fast', () => {
    const { duration } = measureThemeGeneration(() => generateTheme())

    // Генерация темы должна занимать менее 50ms
    expect(duration).toBeLessThan(50)
  })

  test('Enhanced theme generation should be fast', () => {
    const { duration } = measureThemeGeneration(() => generateEnhancedTheme())

    // Генерация улучшенной темы должна занимать менее 100ms
    expect(duration).toBeLessThan(100)
  })

  test('Multiple theme generations should be consistent', () => {
    const iterations = 10
    const durations: number[] = []

    for (let i = 0; i < iterations; i++) {
      const { duration } = measureThemeGeneration(() => generateEnhancedTheme())
      durations.push(duration)
    }

    const avgDuration = durations.reduce((a, b) => a + b, 0) / iterations
    const maxDuration = Math.max(...durations)
    const minDuration = Math.min(...durations)

    // Среднее время должно быть разумным
    expect(avgDuration).toBeLessThan(75)

    // Разброс не должен быть слишком большим
    expect(maxDuration - minDuration).toBeLessThan(avgDuration * 2)
  })

  test('Theme object size should be reasonable', () => {
    const theme = generateEnhancedTheme()
    const themeSize = JSON.stringify(theme).length

    // Тема должна быть разумного размера (менее 100KB)
    expect(themeSize).toBeLessThan(100000)
  })

  test('Color calculations should be optimized', () => {
    const iterations = 1000
    const startTime = performance.now()

    for (let i = 0; i < iterations; i++) {
      generateEnhancedTheme()
    }

    const endTime = performance.now()
    const avgTime = (endTime - startTime) / iterations

    // Среднее время на одну генерацию должно быть минимальным
    expect(avgTime).toBeLessThan(5)
  })
})
