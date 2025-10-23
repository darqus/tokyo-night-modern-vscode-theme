import type { VSCodeTheme } from '../theme/types'

export function optimizeTheme(theme: VSCodeTheme): VSCodeTheme {
  const startTime = performance.now()

  // Удаление дублирующихся цветов
  const optimizedColors = removeDuplicateColors(theme.colors)

  // Оптимизация alpha значений
  const alphaOptimizedColors = optimizeAlphaValues(optimizedColors)

  // Сжатие токенов
  const optimizedTokens = optimizeTokenColors(theme.tokenColors)

  const endTime = performance.now()
  console.log(`Theme optimization took ${endTime - startTime} milliseconds`)

  return {
    ...theme,
    colors: alphaOptimizedColors,
    tokenColors: optimizedTokens,
  }
}

function removeDuplicateColors(
  colors: Record<string, string>
): Record<string, string> {
  const colorMap = new Map<string, string>()
  const result: Record<string, string> = {}

  // Находим дубликаты и сохраняем первое вхождение
  Object.entries(colors).forEach(([key, value]) => {
    if (!colorMap.has(value)) {
      colorMap.set(value, key)
      result[key] = value
    } else {
      // Найден дубликат - можно использовать ссылку на оригинал
      const originalKey = colorMap.get(value)
      console.log(`Duplicate color found: ${key} -> ${originalKey} (${value})`)
    }
  })

  return result
}

function optimizeAlphaValues(
  colors: Record<string, string>
): Record<string, string> {
  const result: Record<string, string> = {}

  Object.entries(colors).forEach(([key, value]) => {
    // Стандартизация alpha значений до предопределённых уровней
    if (value.length === 9) {
      // HEX с alpha
      const alpha = value.slice(7, 9)
      const alphaValue = Number.parseInt(alpha, 16) / 255

      // Округляем до стандартных значений
      let standardAlphaValue = alphaValue
      if (alphaValue <= 0.125)
        standardAlphaValue = 0.125 // 20%
      else if (alphaValue <= 0.25)
        standardAlphaValue = 0.25 // 40%
      else if (alphaValue <= 0.375)
        standardAlphaValue = 0.375 // 60%
      else if (alphaValue <= 0.5)
        standardAlphaValue = 0.5 // 80%
      else standardAlphaValue = 0.875 // 100%

      const alphaHex = Math.round(standardAlphaValue * 255)
        .toString(16)
        .padStart(2, '0')
      result[key] = value.slice(0, 7) + alphaHex
    } else {
      result[key] = value
    }
  })

  return result
}

function optimizeTokenColors(tokenColors: any[]): any[] {
  const scopeMap = new Map<string, any>()
  const result: any[] = []

  tokenColors.forEach((token) => {
    const key = JSON.stringify(token.settings)

    if (scopeMap.has(key)) {
      // Объединяем с существующим токеном
      const existingToken = scopeMap.get(key)
      existingToken.scope = [
        ...(Array.isArray(existingToken.scope)
          ? existingToken.scope
          : [existingToken.scope]),
        ...(Array.isArray(token.scope) ? token.scope : [token.scope]),
      ]
    } else {
      // Создаём новый токен
      const newToken = { ...token }
      scopeMap.set(key, newToken)
      result.push(newToken)
    }
  })

  return result
}

export function generateThemePerformanceMetrics(theme: VSCodeTheme) {
  const startTime = performance.now()

  // Генерируем тему 100 раз для измерения производительности
  for (let i = 0; i < 100; i++) {
    // Симуляция генерации темы
    JSON.stringify(theme)
  }

  const endTime = performance.now()
  const avgTime = (endTime - startTime) / 100

  return {
    averageGenerationTime: avgTime,
    colorCount: Object.keys(theme.colors).length,
    tokenCount: theme.tokenColors.length,
    semanticTokenCount: Object.keys(theme.semanticTokenColors || {}).length,
    estimatedSize: JSON.stringify(theme).length,
  }
}

export function validateThemePerformance(theme: VSCodeTheme) {
  const metrics = generateThemePerformanceMetrics(theme)

  return {
    isFastEnough: metrics.averageGenerationTime < 10, // Менее 10ms
    isOptimalSize: metrics.estimatedSize < 50000, // Менее 50KB
    hasReasonableTokenCount: metrics.tokenCount < 200, // Менее 200 токенов
    metrics,
  }
}
