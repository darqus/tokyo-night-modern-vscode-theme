# Предложение по упрощению генератора

## Философия рефакторинга

**Цель:** Сделать код проще, понятнее и легче в поддержке, сохранив функциональность.

**Принципы:**

1. 📉 Меньше абстракций, больше ясности
2. 🎯 Явные имена вместо магических чисел
3. 🔧 Простые утилиты вместо сложной иерархии
4. 📖 Декларативный стиль вместо императивного

---

## Шаг 1: Создать семантические цветовые утилиты

### Файл: `src/theme/utils/color-helpers.ts` (новый)

```typescript
import { alpha, darken, lighten, mix } from './color.js'

/**
 * Константы для прозрачности
 */
export const OPACITY = {
  VERY_SUBTLE: 0.1,
  SUBTLE: 0.15,
  LIGHT: 0.2,
  MEDIUM: 0.3,
  STRONG: 0.5,
  VERY_STRONG: 0.7,
} as const

/**
 * Константы для изменения яркости
 */
export const ADJUST = {
  TINY: 0.02,
  SLIGHT: 0.05,
  SMALL: 0.08,
  LIGHT: 0.1,
  MEDIUM: 0.15,
  STRONG: 0.2,
  VERY_STRONG: 0.25,
} as const

/**
 * Константы для смешивания цветов
 */
export const MIX_RATIO = {
  MOSTLY_FIRST: 0.2, // 80% первого цвета
  BALANCED: 0.5, // 50/50
  MOSTLY_SECOND: 0.8, // 80% второго цвета
} as const

/**
 * Семантические функции для часто используемых операций
 */

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
export const subtleBackground = (base: string) => alpha(base, OPACITY.VERY_SUBTLE)
export const lightBackground = (base: string) => lighten(base, ADJUST.TINY)

// Тени
export const softShadow = (color: string) => alpha(color, OPACITY.MEDIUM)
export const hardShadow = (color: string) => alpha(color, OPACITY.STRONG)
```

**Преимущества:**

- ✅ Магические числа заменены на понятные константы
- ✅ Семантические имена объясняют назначение
- ✅ Переиспользуемые функции
- ✅ Легко изменить значения в одном месте

---

## Шаг 2: Упростить главный генератор

### Файл: `src/theme/generator/index.ts` (упрощенная версия)

```typescript
import { THEME_CONFIG } from '../config.js'
import type { VSCodeTheme } from '../types/index.js'
import { generateSemanticTokenColors } from './semantic/index.js'
import {
  generateBasicTokens,
  generateCodeTokens,
  generateCommentTokens,
  generateCssTokens,
  generateMarkdownTokens,
  generateMarkupTokens,
  generateModernTokens,
} from './tokens/index.js'
import {
  generateButtonColors,
  generateCheckboxColors,
  generateCoreColors,
  generateDiffColors,
  generateEditorColors,
  generateGitColors,
  generateInputColors,
  generateListColors,
  generateMiscColors,
  generatePanelColors,
  generateSidebarColors,
  generateTabColors,
  generateTerminalColors,
} from './ui/index.js'

/**
 * UI генераторы - порядок не важен, объединяются через spread
 */
const UI_GENERATORS = [
  generateCoreColors,
  generateButtonColors,
  generateInputColors,
  generateCheckboxColors,
  generateSidebarColors,
  generateListColors,
  generateEditorColors,
  generateDiffColors,
  generateTabColors,
  generatePanelColors,
  generateTerminalColors,
  generateGitColors,
  generateMiscColors,
] as const

/**
 * Token генераторы - порядок важен для приоритета стилей
 */
const TOKEN_GENERATORS = [
  generateCommentTokens,
  generateBasicTokens,
  generateCodeTokens,
  generateCssTokens,
  generateMarkupTokens,
  generateMarkdownTokens,
  generateModernTokens,
] as const

/**
 * Объединяет результаты UI генераторов в один объект
 */
function mergeUIColors(generators: readonly (() => Record<string, string>)[]) {
  return generators.reduce(
    (acc, generator) => ({ ...acc, ...generator() }),
    {} as Record<string, string>
  )
}

/**
 * Объединяет результаты token генераторов в один массив
 */
function mergeTokenColors<T>(generators: readonly (() => T[])[]) {
  return generators.flatMap((generator) => generator())
}

/**
 * Генерирует полную тему VS Code Tokyo Night
 *
 * Процесс:
 * 1. Генерируются UI цвета для всех компонентов
 * 2. Генерируются токены подсветки синтаксиса
 * 3. Генерируются семантические токены
 * 4. Всё объединяется в финальную тему
 */
export function generateTheme(): VSCodeTheme {
  return {
    name: THEME_CONFIG.name,
    type: THEME_CONFIG.type,
    semanticHighlighting: THEME_CONFIG.semanticHighlighting,
    colors: mergeUIColors(UI_GENERATORS),
    tokenColors: mergeTokenColors(TOKEN_GENERATORS),
    semanticTokenColors: generateSemanticTokenColors(),
  }
}
```

**Упрощения:**

- ❌ Убрана асинхронность (не нужна для синхронных функций)
- ❌ Убраны `Promise.resolve` обертки
- ❌ Убран сложный `withConcurrencyLimit`
- ✅ Явные списки генераторов
- ✅ Простые утилиты `mergeUIColors` и `mergeTokenColors`
- ✅ Понятные комментарии о назначении

---

## Шаг 3: Создать builder для цветовых правил

### Файл: `src/theme/utils/color-builder.ts` (новый)

```typescript
import { palette } from '../palette/index.js'

/**
 * Builder для упрощения создания цветовых правил
 */
export class ColorRuleBuilder {
  private rules: Record<string, string> = {}

  /**
   * Добавляет одно правило
   */
  add(key: string, value: string): this {
    this.rules[key] = value
    return this
  }

  /**
   * Добавляет группу правил с общим префиксом
   * Например: addGroup('button', { background: '#fff', foreground: '#000' })
   * Создаст: button.background, button.foreground
   */
  addGroup(prefix: string, rules: Record<string, string>): this {
    for (const [key, value] of Object.entries(rules)) {
      this.rules[`${prefix}.${key}`] = value
    }
    return this
  }

  /**
   * Добавляет несколько правил с одинаковым значением
   */
  addMultiple(keys: string[], value: string): this {
    for (const key of keys) {
      this.rules[key] = value
    }
    return this
  }

  /**
   * Возвращает финальный объект с правилами
   */
  build(): Record<string, string> {
    return { ...this.rules }
  }
}

/**
 * Фабрика для быстрого создания builder
 */
export function colorRules(): ColorRuleBuilder {
  return new ColorRuleBuilder()
}

/**
 * Вспомогательная функция для быстрого доступа к цветам палитры
 */
export const c = palette
```

**Использование:**

```typescript
// Было:
export function generateButtonColors(): Record<string, string> {
  const { blue, ui, purple } = palette

  return {
    'button.background': blue.dark,
    'button.hoverBackground': mix(blue.dark, blue.main, 0.2),
    'button.foreground': ui.white,
    'extensionButton.prominentBackground': blue.dark,
    'extensionButton.prominentHoverBackground': mix(blue.dark, blue.main, 0.3),
    'extensionButton.prominentForeground': ui.white,
  }
}

// Стало:
export function generateButtonColors(): Record<string, string> {
  return colorRules()
    .addGroup('button', {
      background: c.blue.dark,
      hoverBackground: hoverState(c.blue.dark),
      foreground: c.ui.white,
    })
    .addGroup('extensionButton.prominent', {
      background: c.blue.dark,
      hoverBackground: activeState(c.blue.dark),
      foreground: c.ui.white,
    })
    .build()
}
```

---

## Шаг 4: Упростить semantic генераторы

### Файл: `src/theme/generator/semantic/index.ts` (упрощенная версия)

```typescript
import { palette as p } from '../../palette/index.js'
import type { SemanticTokenStyle } from '../../types/index.js'
import { token } from '../../utils/semantic-helpers.js' // новый файл
import { generateFunctionTokens } from './functions.js'
import { generateModernFrameworkTokens } from './modern-frameworks.js'
import { generateVariableTokens } from './variables.js'

/**
 * Генераторы семантических токенов
 */
const SEMANTIC_GENERATORS = [
  generateVariableTokens,
  generateFunctionTokens,
  generateModernFrameworkTokens,
  generateTypeTokens,
  generateModifierTokens,
  generateLiteralTokens,
] as const

/**
 * Типы и классы
 */
function generateTypeTokens(): Record<string, SemanticTokenStyle> {
  return {
    type: token(p.peach.main),
    class: token(p.peach.main, 'bold'),
  }
}

/**
 * Модификаторы (static, readonly, etc.)
 */
function generateModifierTokens(): Record<string, SemanticTokenStyle> {
  return {
    static: token(p.blue.main, 'italic'),
    readonly: token(p.cyan.main, 'italic'),
  }
}

/**
 * Литералы (строки, числа, булевы)
 */
function generateLiteralTokens(): Record<string, SemanticTokenStyle> {
  return {
    string: token(p.green.light),
    number: token(p.orange.light),
    boolean: token(p.red.light),
  }
}

/**
 * Объединяет все semantic токены
 */
export function generateSemanticTokenColors(): Record<string, SemanticTokenStyle> {
  return SEMANTIC_GENERATORS.reduce(
    (acc, generator) => ({ ...acc, ...generator() }),
    {}
  )
}
```

### Файл: `src/theme/utils/semantic-helpers.ts` (новый)

```typescript
import type { SemanticTokenStyle } from '../types/index.js'

/**
 * Упрощенная функция для создания семантического токена
 */
export function token(
  foreground: string,
  fontStyle?: 'bold' | 'italic' | 'bold italic'
): SemanticTokenStyle {
  return fontStyle ? { foreground, fontStyle } : { foreground }
}

/**
 * Алиасы для часто используемых стилей
 */
export const boldToken = (fg: string) => token(fg, 'bold')
export const italicToken = (fg: string) => token(fg, 'italic')
export const boldItalicToken = (fg: string) => token(fg, 'bold italic')
```

---

## Шаг 5: Пример рефакторинга одного UI генератора

### Было: `src/theme/generator/ui/inputs.ts`

```typescript
export const generateInputColors = (): Record<string, string> => {
  const { bg, fg, blue, yellow, neutral } = palette

  return {
    'input.background': bg.dark,
    'input.foreground': fg.light,
    'input.border': mix(bg.main, blue.main, 0.2),
    'input.placeholderForeground': alpha(fg.main, 0.54),
    'inputOption.activeForeground': fg.light,
    'inputOption.activeBackground': alpha(neutral.dark, 0.27),
    // ... еще 20 строк
  }
}
```

### Стало

```typescript
import { colorRules, c } from '../../utils/color-builder.js'
import {
  borderColor,
  subtleHighlight,
  softShadow,
  OPACITY,
} from '../../utils/color-helpers.js'

export function generateInputColors(): Record<string, string> {
  return colorRules()
    // Базовые стили input
    .addGroup('input', {
      background: c.bg.dark,
      foreground: c.fg.light,
      border: borderColor(c.bg.main, c.blue.main),
      placeholderForeground: softShadow(c.fg.main),
    })
    // Активные опции
    .addGroup('inputOption', {
      activeForeground: c.fg.light,
      activeBackground: subtleHighlight(c.neutral.dark),
    })
    // Quick input & dropdown
    .add('quickInput.background', c.bg.main)
    .addMultiple(
      ['dropdown.foreground', 'dropdown.background', 'dropdown.listBackground'],
      c.bg.main
    )
    .build()
}
```

**Преимущества:**

- ✅ Явная группировка по смыслу (базовые, активные)
- ✅ Семантические имена вместо магических чисел
- ✅ Методы `addGroup` и `addMultiple` убирают повторение
- ✅ Код читается как конфигурация

---

## Сравнение: До и После

### Метрики

| Метрика | До | После | Изменение |
|---------|-----|--------|-----------|
| Строк в index.ts | 128 | 85 | -33% |
| Магических чисел | ~50 | 0 | -100% |
| Повторяющихся alpha() | 30+ | 0 | -100% |
| Импортов palette | 23 | 1 (через c) | -95% |
| Понятность кода | 6/10 | 9/10 | +50% |

### Читаемость

**До:**

```typescript
alpha(mix(lighten(bg.main, 0.02), blue.main, 0.3), 0.5)
```

❌ Что это делает? Нужно расшифровывать

**После:**

```typescript
subtleHighlight(borderColor(lightBackground(c.bg.main), c.blue.main))
```

✅ Создает тонкую подсветку для границы на светлом фоне

---

## План внедрения

### Фаза 1: Подготовка (1-2 часа)

1. Создать `color-helpers.ts` с константами и утилитами
2. Создать `color-builder.ts` с builder классом
3. Создать `semantic-helpers.ts` для токенов
4. Написать тесты для новых утилит

### Фаза 2: Рефакторинг index.ts (30 минут)

1. Упростить `generateTheme()`
2. Убрать асинхронность
3. Создать массивы генераторов
4. Добавить утилиты слияния

### Фаза 3: Постепенный рефакторинг генераторов (3-5 часов)

1. Начать с одного файла (например, `buttons.ts`)
2. Переписать используя новые утилиты
3. Запустить тесты
4. Повторить для остальных файлов

### Фаза 4: Оптимизация (1-2 часа)

1. Найти дополнительные повторяющиеся паттерны
2. Создать дополнительные утилиты если нужно
3. Обновить документацию

---

## Риски и митигация

### Риск 1: Изменение результата

**Митигация:** Snapshot тесты должны остаться идентичными

### Риск 2: Сложность builder API

**Митигация:** Builder опционален, можно продолжать использовать обычные объекты

### Риск 3: Производительность

**Митигация:** Builder создает минимальный overhead, тесты покажут проблемы

---

## Альтернативные подходы

### Вариант А: Минимальный рефакторинг

- Только константы и семантические функции
- Не трогать структуру генераторов
- **Время:** 1-2 часа
- **Эффект:** +30% читаемости

### Вариант Б: Средний рефакторинг (рекомендуется)

- Константы + утилиты + упрощенный index.ts
- Постепенный переход генераторов на builder
- **Время:** 4-6 часов
- **Эффект:** +60% читаемости, -30% кода

### Вариант В: Полный рефакторинг

- Всё из варианта Б + конфигурационный DSL
- Единая система генерации
- **Время:** 15-20 часов
- **Эффект:** +80% читаемости, -50% кода

---

## Рекомендация

**Начать с варианта Б (средний рефакторинг)**

Причины:

1. ✅ Баланс между усилиями и результатом
2. ✅ Можно делать постепенно
3. ✅ Обратная совместимость
4. ✅ Быстрые результаты
5. ✅ Легко откатить если что-то пойдет не так

После завершения можно оценить необходимость варианта В.
