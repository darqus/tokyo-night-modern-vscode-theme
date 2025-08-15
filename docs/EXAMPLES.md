# Tokyo Night Dark Theme - Примеры и лучшие практики

## 📚 Примеры использования

### 1. Добавление нового цвета в палитру

#### Проблема

Нужно добавить специальный цвет для выделения активных элементов интерфейса.

#### Решение

```typescript
// src/palette.ts
export interface Palette {
  // ... существующие свойства
  ui: {
    active: Hex      // Активные элементы (кнопки, ссылки)
    hover: Hex       // Элементы при наведении
    focus: Hex       // Элементы в фокусе
    disabled: Hex    // Неактивные элементы
  }
}

export const palette: Palette = {
  // ... существующие свойства
  ui: {
    active: '#3d59a1',
    hover: '#4a6bb8',
    focus: '#5a7bc4',
    disabled: '#363b54'
  }
}
```

#### Использование в build.ts

```typescript
// src/build.ts
'button.activeBackground': palette.ui.active,
'button.hoverBackground': palette.ui.hover,
'button.focusBorder': palette.ui.focus,
'button.disabledBackground': palette.ui.disabled
```

### 2. Создание нового правила синтаксиса

#### Проблема

Нужно выделить специальные маркеры в YAML файлах.

#### Решение

```typescript
// src/tokenColors.ts
{
  name: "YAML Special Markers",
  scope: [
    "meta.structure.yaml keyword.control.flow.yaml",
    "meta.structure.yaml punctuation.definition.marker.yaml"
  ],
  settings: {
    foreground: palette.accent.orange,
    fontStyle: "bold"
  }
}
```

### 3. Добавление семантического токена

#### Проблема

Нужно выделить специальные функции в TypeScript.

#### Решение

```typescript
// src/semanticTokenColors.ts
{
  "type": "function",
  "modifiers": ["readonly"],
  "foreground": palette.accent.purple
}
```

### 4. Создание утилиты для работы с цветами

#### Проблема

Нужно создавать цвета с прозрачностью для разных состояний.

#### Решение

```typescript
// src/utils/color.ts
export function withOpacity(hex: Hex, opacity: string | number): Hex {
  // Реализация функции
}

// Использование
const hoverColor = withOpacity(palette.brand.primary, '80')
const disabledColor = withOpacity(palette.brand.primary, '20')
```

## 🎨 Лучшие практики

### 1. Организация палитры цветов

#### ❌ Плохо

```typescript
// Разрозненные цвета без структуры
const colors = {
  darkBlue: '#1a1a22',
  lightBlue: '#7aa2f7',
  darkGray: '#363b54',
  lightGray: '#a9b1d6'
}
```

#### ✅ Хорошо

```typescript
// Структурированная палитра с иерархией
export interface Palette {
  bg: {
    base: Hex      // Основной фон
    elevated: Hex  // Повышенный уровень
    sunken: Hex    // Углубленные элементы
  }
  fg: {
    primary: Hex   // Основной текст
    muted: Hex     // Второстепенный текст
    subtle: Hex    // Текст подсказок
  }
  accent: {
    blue: Hex      // Синий - для ключевых элементов
    green: Hex     // Зеленый - для успеха
    red: Hex       // Красный - для ошибок
  }
}
```

### 2. Работа с токенами синтаксиса

#### ❌ Плохо

```typescript
// Слишком общие правила
{
  name: "Strings",
  scope: "string",
  settings: {
    foreground: "#9ece6a"
  }
}
```

#### ✅ Хорошо

```typescript
// Конкретные правила с четкой областью применения
{
  name: "String - Double Quoted",
  scope: [
    "string.quoted.double",
    "string.quoted.double punctuation.definition.string"
  ],
  settings: {
    foreground: palette.accent.cyan,
    fontStyle: ""
  }
}
```

### 3. Использование семантических токенов

#### ❌ Плохо

```typescript
// Жесткое связывание с языком
{
  "typescript.variable": "#bb9af7"
}
```

#### ✅ Хорошо

```typescript
// Семантически осмысленные токены
{
  "variable": palette.accent.magenta,
  "variable.readonly": palette.accent.purple,
  "property": palette.accent.teal,
  "method": palette.accent.orange
}
```

### 4. Организация build.ts

#### ❌ Плохо

```typescript
// Все в одной большой функции
export function buildColors(): Record<string, string> {
  return {
    'activityBar.background': '#16161c',
    'activityBar.foreground': '#a9b1d6',
    'sideBar.background': '#16161c',
    'sideBar.foreground': '#a9b1d6',
    // ... сотни строк
  }
}
```

#### ✅ Хорошо

```typescript
// Логическая группировка
export function buildColors(): Record<string, string> {
  return {
    // Activity Bar
    ...getActivityBarColors(),
    // Side Bar
    ...getSideBarColors(),
    // Editor
    ...getEditorColors(),
    // Status Bar
    ...getStatusBarColors()
  }
}

function getActivityBarColors(): Record<string, string> {
  return {
    'activityBar.background': palette.bg.base,
    'activityBar.foreground': palette.fg.primary,
    'activityBar.activeBorder': palette.brand.primary,
  }
}
```

## 🔧 Продвинутые примеры

### 1. Создание цветовой системы для тем

#### Проблема

Нужно поддерживать несколько цветовых вариантов темы.

#### Решение

```typescript
// src/themes/types.ts
export interface ThemeColors {
  light: Palette
  dark: Palette
  darkPlus: Palette
}

// src/themes/index.ts
export const themes: ThemeColors = {
  light: { /* светлая палитра */ },
  dark: { /* темная палитра */ },
  darkPlus: { /* усиленная темная палитра */ }
}
```

### 2. Динамическое генерирование цветов

#### Проблема

Нужно создавать производные цвета на основе базовых.

#### Решение

```typescript
// src/utils/color-generator.ts
export function generateColorVariations(baseColor: Hex): {
  primary: Hex
  hover: Hex
  active: Hex
  disabled: Hex
} {
  return {
    primary: baseColor,
    hover: lightenColor(baseColor, 0.1),
    active: darkenColor(baseColor, 0.1),
    disabled: withOpacity(baseColor, 0.3)
  }
}
```

### 3. Интернационализация

#### Проблема

Нужно поддерживать разные языки в документации.

#### Решение

```typescript
// src/i18n/strings.ts
export const strings = {
  ru: {
    palette: {
      bg: 'Фоновые цвета',
      fg: 'Цвета текста'
    }
  },
  en: {
    palette: {
      bg: 'Background colors',
      fg: 'Text colors'
    }
  }
}
```

## 🧪 Примеры тестирования

### 1. Тестирование палитры

```typescript
// tests/palette.test.ts
import { palette } from '../src/palette'

describe('Palette', () => {
  test('should have all required color categories', () => {
    expect(palette).toHaveProperty('bg')
    expect(palette).toHaveProperty('fg')
    expect(palette).toHaveProperty('accent')
    expect(palette).toHaveProperty('ansi')
  })

  test('should have valid hex colors', () => {
    Object.values(palette.bg).forEach(color => {
      expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/)
    })
  })
})
```

### 2. Тестирование сборки темы

```typescript
// tests/build.test.ts
import { buildColors } from '../src/build'
import { palette } from '../src/palette'

describe('Theme Build', () => {
  test('should use colors from palette', () => {
    const colors = buildColors()
    expect(colors['editor.background']).toBe(palette.bg.base)
    expect(colors['editor.foreground']).toBe(palette.fg.primary)
  })

  test('should generate complete theme', () => {
    const colors = buildColors()
    expect(colors).toBeDefined()
    expect(Object.keys(colors).length).toBeGreaterThan(100)
  })
})
```

### 3. Тестирование токенов синтаксиса

```typescript
// tests/tokenColors.test.ts
import { tokenColors } from '../src/tokenColors'

describe('Token Colors', () => {
  test('should have unique names', () => {
    const names = tokenColors.map(tc => tc.name)
    const uniqueNames = new Set(names)
    expect(names.length).toBe(uniqueNames.size)
  })

  test('should have valid scopes', () => {
    tokenColors.forEach(tc => {
      expect(tc.scope).toBeDefined()
      if (typeof tc.scope === 'string') {
        expect(tc.scope.length).toBeGreaterThan(0)
      } else {
        expect(Array.isArray(tc.scope)).toBe(true)
        expect(tc.scope.length).toBeGreaterThan(0)
      }
    })
  })
})
```

## 🚀 Оптимизация производительности

### 1. Кеширование результатов

```typescript
// src/utils/cache.ts
const colorCache = new Map<string, string>()

export function getCachedColor(key: string, generator: () => string): string {
  if (colorCache.has(key)) {
    return colorCache.get(key)!
  }
  const color = generator()
  colorCache.set(key, color)
  return color
}
```

### 2. Ленивая загрузка

```typescript
// src/palette.ts
let _palette: Palette | null = null

export function getPalette(): Palette {
  if (!_palette) {
    _palette = generatePalette()
  }
  return _palette
}
```

### 3. Оптимизация правил синтаксиса

```typescript
// src/tokenColors.ts
// Группируем похожие правила для улучшения производительности
const commonSettings = {
  foreground: palette.fg.primary,
  fontStyle: ""
}

export const tokenColors: TokenColor[] = [
  {
    name: "Common Text",
    scope: [
      "text",
      "meta.embedded",
      "source"
    ],
    settings: commonSettings
  }
]
```

## 📊 Мониторинг качества

### 1. Проверка контрастности

```typescript
// src/utils/contrast.ts
export function checkContrast(color1: Hex, color2: Hex): number {
  // Расчет контрастности по WCAG
}

export function validateContrast(): void {
  const bg = palette.bg.base
  const fg = palette.fg.primary

  const contrast = checkContrast(bg, fg)
  if (contrast < 4.5) {
    console.warn('Low contrast detected!')
  }
}
```

### 2. Анализ размера темы

```typescript
// src/utils/size.ts
export function analyzeThemeSize(): {
  totalColors: number
  uniqueColors: number
  averageColorLength: number
} {
  const colors = buildColors()
  const colorValues = Object.values(colors)

  return {
    totalColors: colorValues.length,
    uniqueColors: new Set(colorValues).size,
    averageColorLength: colorValues.reduce((acc, color) => acc + color.length, 0) / colorValues.length
  }
}
```

## 🎯 Заключение

Эти примеры и лучшие практики помогут вам создавать качественный, поддерживаемый и производительный код для темы Tokyo Night Dark. Следуйте этим рекомендациям, и ваша тема будет радовать пользователей своей стабильностью и красотой.

Помните, что хороший код - это не только работающий код, но и код, который легко понимать, поддерживать и расширять.
