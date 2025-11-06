# Анализ генератора темы Tokyo Modern VS Code Theme

## 1. Общая структура

Генератор состоит из трех основных частей:

- **UI генераторы** (`src/theme/generator/ui/`) - цвета интерфейса VSCode
- **Token генераторы** (`src/theme/generator/tokens/`) - цвета синтаксиса (TextMate)
- **Semantic генераторы** (`src/theme/generator/semantic/`) - семантическая подсветка

## 2. Выявленные паттерны

### 2.1. Повторяющийся паттерн импортов

**Частота:** Встречается во всех файлах генераторов

```typescript
import { palette } from '../../palette/index.js'
import { alpha, lighten, darken, mix } from '../../utils/color.js'
```

**Проблема:** Один и тот же набор импортов в каждом файле

---

### 2.2. Паттерн функции-генератора

**Частота:** 20+ функций следуют этому паттерну

```typescript
export function generateXxxColors(): Record<string, string> {
  const { fg, bg, blue, ... } = palette

  return {
    'vscode.property.name': color.value,
    // ...
  }
}
```

**Характеристики:**

- Деструктуризация palette
- Возврат объекта с ключами-строками
- Использование утилит для модификации цветов

---

### 2.3. Паттерн параллельной генерации

**Файл:** `src/theme/generator/index.ts`

```typescript
const [result1, result2, ...] = await withConcurrencyLimit([
  () => Promise.resolve(generateFunc1()),
  () => Promise.resolve(generateFunc2()),
  // ...
])
```

**Проблема:**

- Оборачивание синхронных функций в Promise
- Повторяющийся код `() => Promise.resolve(...)`
- 13 генераторов UI + 7 генераторов tokens

---

### 2.4. Паттерн слияния результатов

**Частота:** 2 больших блока в `index.ts`

```typescript
colors: {
  ...coreColors,
  ...buttonColors,
  ...inputColors,
  // ... еще 10 раз
}

tokenColors: [
  ...commentTokens,
  ...basicTokens,
  // ... еще 5 раз
]
```

---

### 2.5. Паттерн создания semantic токенов

**Частота:** Все semantic генераторы

```typescript
export function generateXxxTokens(): Record<string, SemanticTokenStyle> {
  const { color1, color2 } = palette

  return {
    'token.name': createSemanticToken({
      foreground: color1.main,
      fontStyle: 'italic'
    }),
    // ...
  }
}
```

---

### 2.6. Паттерн модификации цветов

**Частота:** Сотни раз по всему коду

```typescript
// Осветление/затемнение
lighten(color, 0.1)
darken(color, 0.15)

// Прозрачность
alpha(color, 0.3)

// Смешивание
mix(color1, color2, 0.5)

// Комбинации
mix(lighten(bg.main, 0.02), blue.main, 0.3)
```

**Проблема:** Магические числа без объяснения значений

---

### 2.7. Паттерн группировки токенов

**Файл:** `src/theme/generator/tokens/basic.ts`

```typescript
{
  name: 'Description',
  scope: ['scope1', 'scope2', 'scope3'],
  settings: { foreground: color, fontStyle: 'bold' }
}
```

---

### 2.8. Паттерн деструктуризации palette

**Частота:** Каждая функция-генератор

```typescript
const { fg, bg, ui, neutral, blue, red, cyan, ... } = palette
```

**Проблема:**

- В разных файлах извлекаются разные подмножества
- Нет явной связи между функцией и используемыми цветами

---

## 3. Анализ дублирования

### 3.1. Дублирование структуры

- **20 функций** следуют идентичной структуре
- **2 типа возвращаемых значений:** `Record<string, string>` и `TokenColor[]`
- **Каждая функция** деструктурирует palette

### 3.2. Дублирование логики

- Паттерн parallel execution повторяется 2 раза (UI + tokens)
- Паттерн spread operator повторяется для каждой категории

### 3.3. Дублирование значений

**Часто используемые комбинации:**

```typescript
alpha(blue.main, 0.2)     // повторяется 5+ раз
alpha(blue.main, 0.3)     // повторяется 4+ раз
mix(bg.main, blue.main, 0.2)  // повторяется 6+ раз
```

---

## 4. Возможности для рефакторинга

### 4.1. Создание базовых утилит

```typescript
// Семантические имена для часто используемых комбинаций
const createSubtleHighlight = (color: string) => alpha(color, 0.2)
const createMediumHighlight = (color: string) => alpha(color, 0.3)
const createBorderColor = (bg: string, accent: string) => mix(bg, accent, 0.2)
```

### 4.2. Конфигурационный подход

Вместо функций - объекты конфигурации:

```typescript
const buttonConfig = {
  uses: ['blue.dark', 'purple.dark', 'ui.white'],
  rules: {
    'button.background': 'blue.dark',
    'button.foreground': 'ui.white',
    'button.hoverBackground': (p) => mix(p.blue.dark, p.blue.main, 0.2)
  }
}
```

### 4.3. Упрощение параллельного выполнения

```typescript
// Текущий код (сложный)
await withConcurrencyLimit([
  () => Promise.resolve(generateCoreColors()),
  // ...
])

// Предложение (простой)
const generators = [generateCoreColors, generateButtonColors, ...]
const results = generators.map(fn => fn())
```

### 4.4. Унификация генераторов

Создать базовый класс или фабрику:

```typescript
class ColorGenerator {
  constructor(private config: ColorConfig) {}

  generate(): Record<string, string> {
    const colors = this.extractColors()
    return this.applyRules(colors)
  }
}
```

### 4.5. Именованные константы

```typescript
// Вместо магических чисел
const OPACITY = {
  SUBTLE: 0.15,
  LIGHT: 0.2,
  MEDIUM: 0.3,
  STRONG: 0.5
}

const ADJUST = {
  SLIGHT: 0.05,
  LIGHT: 0.1,
  MEDIUM: 0.15,
  STRONG: 0.2
}
```

---

## 5. Метрики сложности

### Текущее состояние

- **Строк кода:** ~1500+ в генераторах
- **Функций-генераторов:** 23
- **Повторяющихся паттернов:** 8 основных
- **Импортов palette:** 23 раза
- **Использований утилит цвета:** 300+

### Потенциал упрощения

- Сокращение кода: **30-40%**
- Унификация генераторов: **от 23 функций до 1 универсальной**
- Устранение дублирования: **~200 строк**

---

## 6. Приоритеты рефакторинга

### Высокий приоритет

1. ✅ Упростить параллельное выполнение
2. ✅ Создать семантические утилиты для цветов
3. ✅ Ввести константы вместо магических чисел

### Средний приоритет

4. ✅ Унифицировать структуру генераторов
5. ✅ Создать конфигурационный DSL

### Низкий приоритет

6. Полная переработка на класс-based подход

## 7. Примеры использования новых builder-ов

### ColorRuleBuilder

Новый builder для упрощения создания цветовых правил:

```typescript
import { colorRules, c } from '../utils/color-builder.js'

export function generateCoreColors(): Record<string, string> {
  return colorRules()
    .add('foreground', c.fg.light)
    .add('descriptionForeground', c.fg.main)
    .add('disabledForeground', c.neutral.main)
    .add('focusBorder', mediumHighlight(c.ui.badge))
    .add('errorForeground', c.fg.dark)
    .add('widget.shadow', softShadow(c.ui.black))
    .add('scrollbar.shadow', subtleHighlight(c.ui.black))
    .addGroup('badge', {
      background: c.ui.badge,
      foreground: c.ui.white,
    })
    .add('icon.foreground', c.fg.light)
    .add('settings.headerForeground', c.neutral.light)
    .add('window.activeBorder', c.bg.dark)
    .add('window.inactiveBorder', c.bg.dark)
    .add('sash.hoverBorder', lightBackground(c.bg.light))
    .add('toolbar.activeBackground', c.bg.light)
    .add('toolbar.hoverBackground', c.bg.light)
    .build()
}
```

### Семантические утилиты цвета

Новые утилиты с понятными именами для часто используемых операций:

```typescript
// Подсветка
export const subtleHighlight = (color: string) => alpha(color, OPACITY.LIGHT)
export const mediumHighlight = (color: string) => alpha(color, OPACITY.MEDIUM)
export const strongHighlight = (color: string) => alpha(color, OPACITY.STRONG)

// Границы
export const borderColor = (bg: string, accent: string) =>
  mix(bg, accent, MIX_RATIO.MOSTLY_FIRST)

// Состояния элементов
export const hoverState = (base: string) => lighten(base, ADJUST.LIGHT)
export const activeState = (base: string) => lighten(base, ADJUST.MEDIUM)
export const disabledState = (base: string) => alpha(base, OPACITY.STRONG)

// Фоновые цвета
export const subtleBackground = (base: string) =>
  alpha(base, OPACITY.VERY_SUBTLE)
export const lightBackground = (base: string) => lighten(base, ADJUST.TINY)

// Тени
export const softShadow = (color: string) => alpha(color, OPACITY.MEDIUM)
export const hardShadow = (color: string) => alpha(color, OPACITY.STRONG)
```

### DSL для конфигурации цветов

Новый DSL для описания конфигурации цветов с типобезопасностью:

```typescript
export interface UIColorConfig {
  rules?: Record<string, ColorValue>
  groups?: Record<string, Record<string, ColorValue>>
  multiple?: Array<[string[], ColorValue]>
}

export class UIConfigBuilder {
  private config: UIColorConfig = {}

  rule(key: string, value: ColorValue): this {
    if (!this.config.rules) this.config.rules = {}
    this.config.rules[key] = value
    return this
  }

  group(prefix: string, rules: Record<string, ColorValue>): this {
    if (!this.config.groups) this.config.groups = {}
    this.config.groups[prefix] = rules
    return this
  }

  multiple(keys: string[], value: ColorValue): this {
    if (!this.config.multiple) this.config.multiple = []
    this.config.multiple.push([keys, value])
    return this
  }

  build(): UIColorConfig {
    return this.config
  }
}
```
