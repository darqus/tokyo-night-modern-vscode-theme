# 🎨 Руководство по оптимизации палитры Tokyo Night Modern

## 📋 Обзор

В этом руководстве описаны новые возможности по оптимизации и работе с палитрой цветов темы Tokyo Night Modern.

## 🚀 Новые возможности

### 1. **Универсальная фабрика тем**

```typescript
import { generateThemeFromPalette } from '../src/theme/generator/theme-factory'

// Создание темы из кастомной палитры
const customTheme = generateThemeFromPalette(customPalette, 'Custom Tokyo Night')
```

### 2. **Оптимизация доступности**

```typescript
import { optimizePaletteForAccessibility, validatePaletteAccessibility } from '../src/theme/utils/palette-utils'

// Оптимизация палитры для WCAG AA
const optimizedPalette = optimizePaletteForAccessibility(palette)

// Валидация доступности
const validation = validatePaletteAccessibility(palette)
console.log(`Valid: ${validation.isValid}`)
console.log(`Violations: ${validation.violations.length}`)
```

### 3. **Адаптивные палитры**

```typescript
import { createAdaptivePalette } from '../src/theme/utils/palette-utils'

// Создание палитры для разного времени суток
const dayPalette = createAdaptivePalette(palette, 'day')
const nightPalette = createAdaptivePalette(palette, 'night')
const eveningPalette = createAdaptivePalette(palette, 'evening')
```

### 4. **Акцентные палитры**

```typescript
import { createAccentPalette } from '../src/theme/utils/palette-utils'

// Создание палитры с кастомным акцентным цветом
const redAccent = createAccentPalette(palette, '#ff0000', 'red')
const blueAccent = createAccentPalette(palette, '#0066cc', 'blue')
```

### 5. **Оптимизация для цветовой слепоты**

```typescript
import { optimizeForColorBlindness } from '../src/theme/utils/palette-utils'

// Оптимизация для пользователей с цветовой слепотой
const colorBlindOptimized = optimizeForColorBlindness(palette)
```

## 🛠️ Утилиты работы с цветами

### Бовые операции

```typescript
import { lighten, darken, mix } from '../src/theme/utils/color'

// Осветление цвета
const lighter = lighten('#7aa2f7', 0.3)

// Затемнение цвета
const darker = darken('#7aa2f7', 0.3)

// Смешивание цветов
const mixed = mix('#7aa2f7', '#ff0000', 0.5)
```

### HSL операции

```typescript
import { hexToHsl, hslToHex, adjustHue, adjustSaturation } from '../src/theme/utils/color'

// Конвертация в HSL
const hsl = hexToHsl('#7aa2f7')

// Изменение оттенка
const hueAdjusted = adjustHue('#7aa2f7', 90)

// Изменение насыщенности
const saturationAdjusted = adjustSaturation('#7aa2f7', 1.5)
```

### Цветовые гармонии

```typescript
import { getComplementary, getAnalogous, getTriadic } from '../src/theme/utils/color'

// Комплементарный цвет
const complementary = getComplementary('#7aa2f7')

// Аналоговые цвета
const analogous = getAnalogous('#7aa2f7')

// Триадические цвета
const triadic = getTriadic('#7aa2f7')
```

## 📊 Анализ и статистика

### Статистика палитры

```typescript
import { getPaletteStats } from '../src/theme/utils/palette-utils'

const stats = getPaletteStats(palette)
console.log(`Total colors: ${stats.totalColors}`)
console.log(`Unique colors: ${stats.uniqueColors}`)
console.log(`Contrast violations: ${stats.contrastViolations}`)
console.log(`Accessibility score: ${stats.accessibilityScore}%`)
```

### Проверка контрастности

```typescript
import { getContrastRatio, ensureContrast } from '../src/theme/utils/contrast'

// Расчет контрастности
const ratio = getContrastRatio('#ffffff', '#000000') // 21:1

// Обеспечение минимальной контрастности
const adjustedColor = ensureContrast('#666666', '#333333', 4.5)
```

## 🎭 Варианты тем

### Доступные варианты

```typescript
import { generateThemeVariants } from '../src/theme/generator/variants'

const variants = generateThemeVariants()

// Стандартная тема
const standard = variants.standard

// Яркая тема (120% яркость)
const bright = variants.bright

// Тёмная тема (80% яркость)
const dim = variants.dim

// Синий акцент
const blueAccent = variants.blueAccent

// Фиолетовый акцент
const purpleAccent = variants.purpleAccent

// Высококонтрастная
const highContrast = variants.highContrast
```

## ⚡ Оптимизация производительности

### Кэширование

```typescript
import { themeCache, cached } from '../src/theme/utils/cache'

// Ручное кэширование
themeCache.set('my-key', computedValue)
const cached = themeCache.get('my-key')

// Декоратор для автоматического кэширования
class ThemeGenerator {
  @cached()
  expensiveOperation(palette: Palette) {
    // Дорогая операция
    return result
  }
}
```

### Мемоизация

```typescript
import { memoize } from '../src/theme/utils/cache'

const memoizedFunction = memoize((color: string) => {
  return expensiveColorCalculation(color)
})
```

## 🧪 Тестирование

### Запуск тестов

```bash
# Запуск всех тестов
npm test

# Запуск тестов палитры
npm test -- palette.test.ts

# Запуск с покрытием
npm run test:coverage
```

### Примеры тестов

```typescript
// Тест контрастности
test('должен обеспечивать WCAG AA контраст', () => {
  const ratio = getContrastRatio(palette.fg.medium, palette.bg.editor)
  expect(ratio).toBeGreaterThanOrEqual(4.5)
})

// Тест оптимизации
test('должен оптимизировать палитру', () => {
  const optimized = optimizePaletteForAccessibility(palette)
  const validation = validatePaletteAccessibility(optimized)
  expect(validation.violations.length).toBeLessThan(
    validatePaletteAccessibility(palette).violations.length
  )
})
```

## 🎯 Практические примеры

### Создание кастомной темы

```typescript
import { generateThemeFromPalette } from '../src/theme/generator/theme-factory'
import { createAccentPalette, optimizePaletteForAccessibility } from '../src/theme/utils/palette-utils'

// 1. Создание акцентной палитры
const accentPalette = createAccentPalette(palette, '#00ff88', 'green')

// 2. Оптимизация доступности
const optimizedAccent = optimizePaletteForAccessibility(accentPalette)

// 3. Генерация темы
const customTheme = generateThemeFromPalette(optimizedAccent, 'Tokyo Night Green')
```

### Адаптивная тема

```typescript
import { createAdaptivePalette } from '../src/theme/utils/palette-utils'

function getAdaptiveTheme() {
  const hour = new Date().getHours()

  if (hour >= 6 && hour < 12) {
    return createAdaptivePalette(palette, 'day')
  } else if (hour >= 18 && hour < 22) {
    return createAdaptivePalette(palette, 'evening')
  } else {
    return createAdaptivePalette(palette, 'night')
  }
}
```

### Валидация палитры

```typescript
import { validatePaletteAccessibility, getPaletteStats } from '../src/theme/utils/palette-utils'

function validateAndReport(customPalette: Palette) {
  const validation = validatePaletteAccessibility(customPalette)
  const stats = getPaletteStats(customPalette)

  console.log(`📊 Palette Statistics:`)
  console.log(`   Colors: ${stats.totalColors}`)
  console.log(`   Unique: ${stats.uniqueColors}`)
  console.log(`   Score: ${stats.accessibilityScore}%`)

  if (!validation.isValid) {
    console.log(`❌ Accessibility Issues:`)
    validation.violations.forEach(violation => {
      console.log(`   ${violation.element}: ${violation.contrastRatio.toFixed(2)} < ${violation.requiredRatio}`)
    })
  } else {
    console.log(`✅ Accessibility: Passed`)
  }

  return validation.isValid
}
```

## 📈 Метрики производительности

### Бенчмарки

```typescript
import { performance } from 'perf_hooks'

function benchmarkThemeGeneration() {
  const iterations = 1000
  const start = performance.now()

  for (let i = 0; i < iterations; i++) {
    generateThemeFromPalette(palette)
  }

  const end = performance.now()
  const avgTime = (end - start) / iterations

  console.log(`Average generation time: ${avgTime.toFixed(2)}ms`)
  console.log(`Generations per second: ${(1000 / avgTime).toFixed(0)}`)
}
```

### Оптимизация размера

```typescript
import { optimizeTheme } from '../src/theme/utils/performance'

// Оптимизация темы (удаление дубликатов, сжатие)
const optimized = optimizeTheme(theme)

console.log(`Original size: ${JSON.stringify(theme).length} bytes`)
console.log(`Optimized size: ${JSON.stringify(optimized).length} bytes`)
console.log(`Compression: ${((1 - JSON.stringify(optimized).length / JSON.stringify(theme).length) * 100).toFixed(1)}%`)
```

## 🔧 Конфигурация

### Настройки оптимизации

```typescript
// src/theme/config/optimization.ts
export const optimizationConfig = {
  accessibility: {
    minContrastRatio: 4.5,
    targetContrastRatio: 7.0,
    enableAutoCorrection: true,
  },
  performance: {
    enableCaching: true,
    cacheSize: 100,
    cacheTTL: 5 * 60 * 1000, // 5 минут
  },
  colorBlindness: {
    enableOptimization: false,
    simulationType: 'deuteranopia',
  },
}
```

## 🚨 Рекомендации

### Для разработчиков

1. **Всегда валидируйте доступность** перед релизом
2. **Используйте кэширование** для дорогих операций
3. **Пишите тесты** для кастомных палитр
4. **Оптимизируйте производительность** для частых операций
5. **Документируйте** кастомные цвета

### Для дизайнеров

1. **Проверяйте контрастность** всех текстовых элементов
2. **Тестируйте на разных устройствах** и условиях освещения
3. **Учитывайте цветовую слепоту** при выборе палитры
4. **Используйте цветовые гармонии** для акцентных цветов
5. **Соблюдайте бренд-гайдлайны** при кастомизации

### Для пользователей

1. **Выбирайте высококонтрастные варианты** для лучшей читаемости
2. **Адаптируйте яркость** под условия освещения
3. **Используйте акцентные цвета** для персонализации
4. **Проверяйте доступность** при создании кастомных тем
5. **Обновляйте тему** регулярно для получения улучшений

## 📚 Дополнительные ресурсы

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)
- [VS Code Theme Documentation](https://code.visualstudio.com/api/extension-guides/color-theme)

---

*Последнее обновление: 24.10.2025*
