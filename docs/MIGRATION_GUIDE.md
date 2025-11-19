# Руководство по миграции на Tokyo Modern v2.3.2592+

*Последнее обновление: 2025-11-19*

## Обзор

Версия 2.3.2592 представляет значительное архитектурное улучшение Tokyo Modern темы. Это руководство поможет вам мигрировать на новую архитектуру и использовать все преимущества улучшенной системы.

## 🚀 Основные изменения

### 1. Новая Core архитектура

**Что изменилось:**

- Введен `ThemeGenerator` с dependency injection
- Добавлен `PaletteManager` с валидацией
- Улучшено кэширование с динамическим управлением
- Созданы compatibility layers для обратной совместимости

**Преимущества:**

- Улучшенная производительность за счет кэширования
- Легкое тестирование через dependency injection
- Усиленная типизация и валидация
- Модульная архитектура

### 2. Устранение дублирования кода

**Что изменилось:**

- Удалены дублирующиеся генераторы
- Старые функции сохранены как compatibility layers
- Размер кода сокращен на 33%

**Преимущества:**

- Легче поддерживать и развивать
- Меньше места на диске
- Быстрее загрузка

### 3. Расширенная поддержка токенов

**Что изменилось:**

- +68% покрытие CSS/SCSS токенов
- Поддержка 15+ современных фреймворков
- Новая цветовая иерархия для подсветки

## 📋 Пошаговая миграция

### Шаг 1: Обновление импортов

#### Старый подход

```typescript
// Старые импорты
import { generateBasicTokens } from './generator/tokens/basic.js'
import { generateFunctionTokens } from './generator/semantic/functions.js'
import { universalPalette } from './palette/universal-base.js'
```

#### Новый подход

```typescript
// Новые импорты
import { createThemeGenerator } from './core/index.js'
import { palette } from './palette/index.js'

// Создание генератора
const generator = await createThemeGenerator()
```

### Шаг 2: Использование ThemeGenerator

#### Старый подход

```typescript
// Прямое использование генераторов
const basicTokens = generateBasicTokens(universalPalette)
const functionTokens = generateFunctionTokens(universalPalette)
const theme = { ...basicTokens, ...functionTokens }
```

#### Новый подход

```typescript
// Использование ThemeGenerator
const generator = await createThemeGenerator()
const theme = await generator.generateTheme()

// Кастомная конфигурация
const customConfig = {
  ui: {
    buttons: { /* custom config */ }
  }
}
const customGenerator = await createThemeGenerator(customConfig)
const customTheme = await customGenerator.generateTheme()
```

### Шаг 3: Работа с PaletteManager

#### Старый подход

```typescript
// Прямое использование палитры
import { universalPalette } from './palette/universal-base.js'

const colors = {
  primary: universalPalette.chromatic.blue.main,
  secondary: universalPalette.chromatic.purple.main
}
```

#### Новый подход

```typescript
// Использование PaletteManager
import { createPaletteManager } from './core/index.js'

const manager = createPaletteManager()

// Валидация палитры
const result = manager.validatePalette(customPalette)
if (!result.isValid) {
  console.error('Palette errors:', result.errors)
}

// Создание варианта
const variant = manager.createVariant({
  chromatic: {
    blue: { main: '#007acc' }
  }
})

// Получение статистики
const stats = manager.getPaletteStats()
```

### Шаг 4: Обновление конфигураций

#### Старый подход

```typescript
// Прямая конфигурация
const config = {
  background: universalPalette.background.base.main,
  foreground: universalPalette.foreground.primary.main
}
```

#### Новый подход

```typescript
// Декларативная конфигурация
const config = {
  ui: {
    background: 'base',
    foreground: 'primary'
  },
  tokens: {
    critical: {
      color: 'red.main',
      fontStyle: 'bold'
    }
  }
}
```

## 🔧 Примеры миграции

### Миграция кастомной темы

#### До миграции

```typescript
// custom-theme.ts
import { generateTokenColors } from './config/unified-generator.js'
import { universalPalette } from './palette/universal-base.js'

export function createCustomTheme() {
  const colors = generateTokenColors({}, universalPalette)

  return {
    name: 'Custom Tokyo Modern',
    colors: {
      'editor.background': universalPalette.background.base.main,
      'editor.foreground': universalPalette.foreground.primary.main,
      // ... другие цвета
    },
    tokenColors: colors
  }
}
```

#### После миграции

```typescript
// custom-theme.ts
import { createThemeGenerator, type ThemeConfig } from './core/index.js'

export async function createCustomTheme() {
  const customConfig: Partial<ThemeConfig> = {
    ui: {
      background: 'base',
      foreground: 'primary'
    },
    tokens: {
      critical: {
        color: 'red.main',
        fontStyle: 'bold'
      }
    }
  }

  const generator = await createThemeGenerator(customConfig)
  return await generator.generateTheme()
}
```

### Миграция плагина/расширения

#### До миграции

```typescript
// plugin.ts
import { universalPalette } from '../palette/universal-base.js'

export function getPluginColors() {
  return {
    success: universalPalette.semantic.success.main,
    warning: universalPalette.semantic.warning.main,
    error: universalPalette.semantic.error.main
  }
}
```

#### После миграции

```typescript
// plugin.ts
import { palette } from '../palette/index.js'

export function getPluginColors() {
  return {
    success: palette.semantic.success.main,
    warning: palette.semantic.warning.main,
    error: palette.semantic.error.main
  }
}

// Или с использованием PaletteManager
import { createPaletteManager } from '../core/index.js'

export function getPluginColorsWithManager() {
  const manager = createPaletteManager()
  const currentPalette = manager.getPalette()

  return {
    success: currentPalette.semantic.success.main,
    warning: currentPalette.semantic.warning.main,
    error: currentPalette.semantic.error.main
  }
}
```

## ⚠️ Важные изменения

### Удаленные функции

Следующие функции были удалены или заменены:

| Удаленная функция | Замена | Примечание |
|-------------------|---------|------------|
| `generateBasicTokens()` | `ThemeGenerator.generateTheme()` | Используйте ThemeGenerator |
| `generateFunctionTokens()` | `ThemeGenerator.generateTheme()` | Используйте ThemeGenerator |
| `setCacheCapacity()` (сломанная) | `PaletteManager.getPaletteStats()` | Новая реализация |

### Измененные интерфейсы

#### ColorVariant

```typescript
// Старый интерфейс
interface ColorVariant {
  dark: string
  main: string
  light: string
  bright: string
}

// Новый интерфейс (дополнительно)
interface ColorVariant {
  50: string   // Самый светлый
  100: string
  200: string
  300: string
  400: string
  500: string  // Основной цвет (main)
  600: string
  700: string
  800: string
  900: string  // Самый темный
}
```

### Compatibility layers

Старые функции все еще доступны через compatibility layers:

```typescript
// Все еще работает, но deprecated
import { generateBasicTokens } from './generator/tokens/basic.js'
import { universalPalette } from './palette/universal-base.js'

// Показывает предупреждение в консоли
console.warn('This function is deprecated. Please use ThemeGenerator instead.')
```

## 🧪 Тестирование миграции

### Проверка совместимости

```typescript
// test-migration.ts
import { createThemeGenerator } from './core/index.js'

async function testMigration() {
  try {
    const generator = await createThemeGenerator()
    const theme = await generator.generateTheme()

    console.log('✅ ThemeGenerator работает корректно')
    console.log('📊 Статистика темы:', {
      colorsCount: Object.keys(theme.colors).length,
      tokenColorsCount: theme.tokenColors.length,
      hasSemanticTokens: !!theme.semanticTokenColors
    })

    return true
  } catch (error) {
    console.error('❌ Ошибка миграции:', error)
    return false
  }
}
```

### Сравнение результатов

```typescript
// compare-migration.ts
import { generateTokenColors } from './config/unified-generator.js'
import { universalPalette } from './palette/universal-base.js'
import { createThemeGenerator } from './core/index.js'

async function compareResults() {
  // Старый подход
  const oldResult = generateTokenColors({}, universalPalette)

  // Новый подход
  const generator = await createThemeGenerator()
  const newResult = await generator.generateTheme()

  // Сравнение
  console.log('Сравнение результатов:')
  console.log('- Старый подход:', Object.keys(oldResult.colors).length, 'цветов')
  console.log('- Новый подход:', Object.keys(newResult.colors).length, 'цветов')

  return { old: oldResult, new: newResult }
}
```

## 🔮 Будущие изменения

### Планируемые устаревания (v2.4)

- `@deprecated` для всех compatibility layers
- Удаление прямых импортов из `generator/tokens/`
- Удаление прямых импортов из `generator/semantic/`

### Планируемые удаления (v2.5)

- Полное удаление compatibility layers
- Только core архитектура
- Удаление `universal-base.ts` в пользу `palette/index.ts`

## 📞 Поддержка

Если у вас возникли проблемы с миграцией:

1. **Проверьте тесты**: Убедитесь, что все тесты проходят
2. **Изучите примеры**: Посмотрите примеры в этом руководстве
3. **Создайте issue**: [Сообщите о проблеме](https://github.com/darqus/tokyo-modern-vscode-theme/issues)
4. **Проверьте документацию**: Изучите [архитектурную документацию](./ARCHITECTURE_IMPROVEMENTS.md)

## 📚 Дополнительные ресурсы

- **[Архитектурные улучшения](./ARCHITECTURE_IMPROVEMENTS.md)** - Подробности о новой архитектуре
- **[Палитра](./palette-architecture.md)** - Документация по новой палитре
- **[Токены](./TOKEN_IMPROVEMENTS.md)** - Улучшения токенов синтаксической подсветки
- **[Тестирование](../test/vitest/)** - Примеры тестов

---

**Примечание**: Это руководство будет обновляться по мере развития проекта. Последнее обновление: 19 ноября 2025 года.
