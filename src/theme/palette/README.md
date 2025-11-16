# Улучшенная палитра Tokyo Modern

## Обзор

Новая архитектура палитры обеспечивает улучшенную читаемость, переиспользуемость и поддерживаемость через унификацию структур, семантические абстракции и декларативную конфигурацию.

## Быстрое начало

### Базовое использование

```typescript
import { palette, getColor } from '../palette'

// Доступ к цветам через семантические пути
const primaryColor = palette.chromatic.indigo[500]
const backgroundColor = palette.background.base[50]
const textColor = palette.foreground.primary[500]

// Безопасный доступ с автодополнением
const accentColor = getColor('chromatic.purple.500')
const buttonHover = getColor('interactive.button.hover')
```

### Использование фабрик

```typescript
import {
  createButtonColors,
  createInputColors,
  createSemanticColors
} from '../palette'

// Цвета для кнопок
const buttonColors = createButtonColors(palette.chromatic.indigo[500], '#ffffff')

// Цвета для полей ввода
const inputColors = createInputColors(
  palette.background.base[900],
  palette.foreground.primary[500],
  palette.chromatic.indigo[500],
  palette.chromatic.red[500]
)

// Семантические цвета
const semanticColors = createSemanticColors(palette)
```

### Генерация вариантов цветов

```typescript
import {
  generateColorVariants,
  generateVariantsByType,
  getCachedVariants
} from '../palette'

// Стандартная генерация
const variants = generateColorVariants('#4aaaf8')

// Генерация по типу цвета
const darkVariants = generateVariantsByType('#4aaaf8', 'dark')
const lightVariants = generateVariantsByType('#ffc66d', 'light')

// Кэшированная генерация
const cachedVariants = getCachedVariants('#4aaaf8', 'dark')
```

## Структура палитры

### Хроматические цвета

```typescript
palette.chromatic.indigo[500] // Основной индиго
palette.chromatic.purple[500] // Основной фиолетовый
palette.chromatic.emerald[500] // Основной изумрудный
// ... и т.д. для всех 22 цветов
```

### Цвета фона

```typescript
palette.background.base[50]    // Самый светлый фон
palette.background.base[500]   // Основной фон
palette.background.elevated[500] // Фон для elevated элементов
palette.background.inset[500]    // Фон для inset элементов
palette.background.overlay[500]  // Фон для overlay элементов
```

### Цвета текста

```typescript
palette.foreground.primary[500]   // Основной текст
palette.foreground.secondary[500] // Вторичный текст
palette.foreground.muted[500]     // Приглушенный текст
palette.foreground.disabled[500]  // Отключенный текст
```

### Семантические цвета

```typescript
palette.semantic.success[500] // Цвет успеха
palette.semantic.warning[500] // Цвет предупреждения
palette.semantic.error[500]   // Цвет ошибки
palette.semantic.info[500]    // Цвет информации
palette.semantic.accent[500]  // Акцентный цвет
```

### Интерактивные цвета

```typescript
palette.interactive.button.background    // Фон кнопки
palette.interactive.button.hover       // Фон кнопки при наведении
palette.interactive.button.active      // Фон кнопки при нажатии
palette.interactive.button.focus      // Фокус кнопки
palette.interactive.button.disabled    // Отключенная кнопка

palette.interactive.input.background    // Фон поля ввода
palette.interactive.input.border       // Граница поля ввода
palette.interactive.input.focus       // Фокус поля ввода
palette.interactive.input.error       // Ошибка поля ввода
```

## Утилиты

### Работа с цветами

```typescript
import { paletteUtils } from '../palette'

// Проверка, является ли цвет темным
const isDarkBg = paletteUtils.isDark('#18162b')

// Получение контрастного цвета
const textColor = paletteUtils.getContrastColor('#18162b')

// Получение всех цветов типа
const allChromatic = paletteUtils.getColorsByType('chromatic')
const allBackgrounds = paletteUtils.getColorsByType('background')
```

### Валидация путей

```typescript
import { paletteUtils } from '../palette'

// Валидация цветового пути
const isValid = paletteUtils.validatePath('chromatic.indigo.500')
const isInvalid = paletteUtils.validatePath('invalid.path')
```

## Константы

### Состояния UI элементов

```typescript
import { UI_STATES, OPACITY, ADJUST } from '../palette'

// Использование в кастомных компонентах
const hoverStyle = {
  opacity: UI_STATES.hover.opacity,
  backgroundColor: lighten(baseColor, UI_STATES.hover.lighten)
}

const disabledStyle = {
  opacity: UI_STATES.disabled.opacity
}
```

### Компонентные цвета

```typescript
import { COMPONENTS } from '../palette'

// Получение акцентных цветов
const primaryColor = palette.chromatic[COMPONENTS.primary][500] // indigo
const successColor = palette.chromatic[COMPONENTS.success][500] // emerald
const errorColor = palette.chromatic[COMPONENTS.error][500]   // red
```

## Миграция со старой структуры

### Обновление импортов

```typescript
// Было
import { baseColors, universalPalette } from '../palette'

// Стало
import { palette, baseColors } from '../palette'
```

### Обновление доступа к цветам

```typescript
// Было
const mainColor = universalPalette.chromatic.blue.main
const bgColor = universalPalette.background.base.main

// Стало
const mainColor = palette.chromatic.blue[500]
const bgColor = palette.background.base[50]
```

### Использование фабрик вместо ручного создания

```typescript
// Было
const buttonConfig = {
  background: darken(palette.chromatic.indigo.dark, 0.3),
  hoverBackground: mixLight(darken(palette.chromatic.indigo.dark, 0.3), palette.chromatic.indigo.main),
  // ...
}

// Стало
const buttonConfig = createButtonColors(palette.chromatic.indigo[500], '#ffffff')
```

## Расширение палитры

### Добавление нового цвета

```typescript
// В config/base-colors.ts
export const chromaMain = {
  // ... существующие цвета
  coral: '#ff6b6b', // Новый цвет
}
```

### Создание новой фабрики

```typescript
// В core/factories.ts
export const createCustomColors = (baseColor: string, options?: CustomOptions) => {
  return {
    primary: baseColor,
    hover: lighten(baseColor, options?.hoverLighten ?? 0.1),
    // ...
  }
}
```

### Адаптивные цвета

```typescript
import { createAdaptiveColors } from '../palette'

// Создание адаптивных цветов для светлого/темного режима
const lightColors = createAdaptiveColors(lightPalette, darkPalette, 'light')
const darkColors = createAdaptiveColors(lightPalette, darkPalette, 'dark')
```

## Производительность

### Кэширование

Все сгенерированные варианты цветов кэшируются для оптимальной производительности:

```typescript
import { clearVariantsCache, getVariantsCacheSize } from '../palette'

// Очистка кэша
clearVariantsCache()

// Проверка размера кэша
const cacheSize = getVariantsCacheSize()
```

### Ленивая генерация

Цветовые варианты генерируются только при необходимости, минимизируя вычисления при загрузке темы.

## Тестирование

### Unit тесты

```typescript
import { palette, validateVariants } from '../palette'

describe('Palette', () => {
  test('should generate consistent color variants', () => {
    expect(palette.chromatic.blue[500]).toBe('#4aaaf8')
    expect(validateVariants(palette.chromatic.blue)).toBe(true)
  })

  test('should ensure contrast ratios', () => {
    const contrast = getContrastRatio(
      palette.foreground.primary[500],
      palette.background.base[50]
    )
    expect(contrast).toBeGreaterThanOrEqual(4.5)
  })
})
```

## Рекомендации

### Использование семантических цветов

Всегда используйте семантические цвета вместо жестко закодированных:

```typescript
// Хорошо
const errorColor = palette.semantic.error[500]
const warningColor = palette.semantic.warning[500]

// Плохо
const errorColor = '#ff6b6b'
const warningColor = '#ffc66d'
```

### Использование фабрик

Используйте фабрики для создания консистентных цветовых схем:

```typescript
// Хорошо
const buttonColors = createButtonColors(primaryColor, textColor)
const inputColors = createInputColors(bgColor, textColor, accentColor)

// Плохо
const buttonColors = {
  background: primaryColor,
  hover: lighten(primaryColor, 0.1),
  active: lighten(primaryColor, 0.15),
  // ...
}
```

### Безопасный доступ к цветам

Используйте функцию `getColor` для безопасного доступа к цветам с автодополнением:

```typescript
// Хорошо
const color = getColor('chromatic.indigo.500')

// Плохо
const color = palette.chromatic.indigo[500] // Нет автодополнения для пути
```

## Интеграция с VS Code темой

Новая палитра полностью совместима с существующей системой тем VS Code:

```typescript
import { generateTheme } from '../generator'
import { palette } from '../palette'

// Генерация темы с использованием новой палитры
const theme = generateTheme(palette)
```

Эта архитектура обеспечивает значительное улучшение читаемости, переиспользуемости и поддерживаемости цветовой палитры темы.
