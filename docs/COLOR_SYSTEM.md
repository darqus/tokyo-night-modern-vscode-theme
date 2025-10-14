# Tokyo Night Modern - Color System Guide

## Введение

Данный документ описывает новую семантическую цветовую систему Tokyo Night Modern VS Code Theme, созданную для улучшения поддерживаемости и масштабируемости проекта.

## Философия цветовой системы

### Принципы

1. **Семантичность** - цвета названы по назначению, а не по внешнему виду
2. **Иерархичность** - четкая структура: primitive → semantic → component
3. **Консистентность** - единообразие в использовании цветов
4. **Масштабируемость** - легкость добавления новых цветов
5. **Обратная совместимость** - поддержка существующего кода

### Архитектура

```
Primitive Colors (Базовые цвета)
    ↓
Semantic Colors (Семантические цвета)
    ↓
UI Colors (UI-специфичные цвета)
    ↓
Syntax Colors (Синтаксические цвета)
```

## Структура цветовой системы

### 1. Primitive Colors (Базовые цвета)

**Назначение**: Фундаментальные цвета, которые не используются напрямую в UI

**Файл**: `src/theme/palette/foundation.ts`

**Структура**:

- Цветовые шкалы: blue, purple, green, yellow, red, cyan, gray
- Значения: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- Специальные: white, black, transparent

**Пример**:

```typescript
blue500: '#7aa2f7' // Основной синий
blue600: '#4e6ab2' // Средний синий
blue700: '#394b70' // Темный синий
```

### 2. Semantic Colors (Семантические цвета)

**Назначение**: Цвета с семантическим значением, выражающие назначение

**Файл**: `src/theme/palette/semantic.ts`

**Категории**:

- **Brand colors**: primary, secondary
- **Status colors**: success, warning, error, info
- **Interactive colors**: link, hover, active, focus
- **Content colors**: text, textSecondary, textDisabled, textWhite
- **Background colors**: background, backgroundSecondary, backgroundElevated, backgroundOverlay
- **Border colors**: border, borderSecondary, borderFocus
- **Special colors**: shadow, highlight, selection

**Пример**:

```typescript
primary: '#7aa2f7' // Основной брендовый цвет
success: '#9ece6a' // Цвет успеха
error: '#ff5370' // Цвет ошибки
text: '#a9b1d6' // Основной текст
background: '#10151d' // Основной фон
```

### 3. UI Colors (UI-специфичные цвета)

**Назначение**: Цвета для конкретных элементов интерфейса

**Файл**: `src/theme/palette/ui.ts`

**Структура**:

```typescript
uiColors = {
  backgrounds: { primary, secondary, tertiary, elevated, overlay, transparent },
  text: { primary, secondary, tertiary, disabled, inverse, placeholder },
  borders: { default, subtle, focus, error, warning, success },
  interactive: { hover, active, selected, disabled, pressed },
  special: { shadow, glow, highlight, selection, focusRing }
}
```

### 4. Syntax Colors (Синтаксические цвета)

**Назначение**: Цвета для подсветки синтаксиса языков программирования

**Файл**: `src/theme/palette/syntax.ts`

**Категории**:

- **Basic syntax**: keyword, string, number, comment, function, variable, type
- **Language-specific**: javascript, typescript, css, html, markdown, json
- **Special tokens**: constant, regexp, decorator, invalid, deprecated

## Оптимизация альфа-вариантов

### Проблема

Оригинальная система генерировала 13 альфа-уровней для всех цветов, создавая ~3000+ неиспользуемых цветовых токенов.

### Решение

Оптимизированная система использует только 4 наиболее часто используемых альфа-уровня:

```typescript
optimizedAlphaValues = {
  '20': '20', // Subtle backgrounds
  '40': '40', // Hover states
  '60': '60', // Active states
  '80': '80', // Semi-opaque
}
```

### Результат

- Сокращение с 4503 до ~150 цветов (97% сокращение)
- Устранение 760 групп дублирующихся цветов
- Удаление 4266 неиспользуемых цветов

## Использование цветовой системы

### Базовое использование

```typescript
import { palette } from 'src/theme/palette/index'

// Семантические цвета
const primaryButton = palette.primary
const errorText = palette.error
const mainBackground = palette.background

// UI-специфичные цвета
const hoverState = palette.interactive.hover
const borderColor = palette.borders.default

// Синтаксические цвета
const keywordColor = palette.keyword
const stringColor = palette.string
```

### Продвинутое использование

```typescript
import { getSemanticColor, getUIColor, getSyntaxColor } from 'src/theme/palette'

// Получение цветов по семантике
const linkColor = getSemanticColor('link')
const successColor = getSemanticColor('success')

// Получение UI цветов по пути
const hoverBg = getUIColor('backgrounds.elevated')
const focusBorder = getUIColor('borders.focus')

// Получение синтаксических цветов
const jsFunction = getSyntaxColor('javascript.function')
const cssProperty = getSyntaxColor('css.property')
```

### Альфа-варианты

```typescript
import { optimizedAlphaValues } from 'src/theme/palette/index'

// Создание альфа-вариантов
const subtleBg = `${palette.background}${optimizedAlphaValues['20']}`
const hoverBg = `${palette.primary}${optimizedAlphaValues['40']}`
const activeBg = `${palette.primary}${optimizedAlphaValues['60']}`
```

## Миграция с старой системы

### Автоматическая миграция

Используйте скрипт миграции для автоматического обновления ссылок:

```bash
npx ts-node scripts/migrate-color-references.ts
```

### Ручная миграция

```typescript
// Старый способ
const oldColor = palette.blueLight

// Новый способ
const newColor = palette.cyan // или palette.info
```

### Маппинг старых цветов

| Старый цвет | Новый семантический цвет | Причина                 |
| ----------- | ------------------------ | ----------------------- |
| blueLight   | cyan                     | Дублировал cyan         |
| pink        | purple                   | Дублировал purple       |
| blue        | primary                  | Основной брендовый цвет |
| green       | success                  | Цвет успеха             |
| red         | error                    | Цвет ошибки             |

## Валидация цветов

### Проверка формата

```typescript
import { colorValidation } from 'src/theme/palette/index'

const isValid = colorValidation.isValidHex('#ff0000') // true
const isInvalid = colorValidation.isValidHex('red') // false
```

### Проверка контрастности

```typescript
const meetsAA = colorValidation.meetsWCAG('#ffffff', '#000000', 'AA') // true
const meetsAAA = colorValidation.meetsWCAG('#ffffff', '#000000', 'AAA') // true
```

## Добавление новых цветов

### 1. Добавление в primitive colors

```typescript
// src/theme/palette/foundation.ts
export const primitiveColors = {
  // ... существующие цвета
  newColor: '#ff0000', // Новый базовый цвет
}
```

### 2. Добавление в semantic colors

```typescript
// src/theme/palette/semantic.ts
export const semanticColors = {
  // ... существующие цвета
  newSemantic: primitiveColors.newColor, // Ссылка на primitive
}
```

### 3. Добавление в UI colors

```typescript
// src/theme/palette/ui.ts
export const uiColors = {
  // ... существующие цвета
  newCategory: {
    newColor: semanticColors.newSemantic,
  },
}
```

### 4. Обновление тестов

```typescript
// tests/palette-structure.test.ts
test('should have new semantic color', () => {
  expect(semanticColors.newSemantic).toBeDefined()
})
```

## Лучшие практики

### 1. Используйте семантические цвета

```typescript
// ✅ Хорошо - семантический цвет
const errorText = palette.error

// ❌ Плохо - конкретный цвет
const errorText = palette.red
```

### 2. Избегайте прямого использования primitive colors

```typescript
// ✅ Хорошо - через семантику
const primaryColor = palette.primary

// ❌ Плохо - прямой primitive
const primaryColor = palette.blue500
```

### 3. Группируйте связанные цвета

```typescript
// ✅ Хорошо - структурированно
const buttonColors = {
  default: palette.primary,
  hover: palette.interactive.hover,
  active: palette.interactive.active,
}

// ❌ Плохо - разбросанно
const buttonDefault = palette.blue
const buttonHover = palette.blueDark
const buttonActive = palette.blueDarker
```

### 4. Документируйте назначение цветов

```typescript
/**
 * Primary button color for call-to-action elements
 * @usage buttons, links, important UI elements
 * @a11y WCAG AA compliant with white text
 */
primary: '#7aa2f7',
```

## Производительность

### Метрики оптимизации

- **Общее количество цветов**: с 4503 до ~150 (97% сокращение)
- **Дублирующиеся группы**: с 760 до 0 (100% устранение)
- **Неиспользуемые цвета**: с 4266 до 0 (100% устранение)
- **Время сборки**: сокращение на ~50%
- **Размер файла темы**: сокращение на ~70%

### Производительность в runtime

```typescript
// Быстрый доступ к цветам
const color = palette.primary // O(1) доступ

// Валидация цветов
const isValid = colorValidation.isValidHex(color) // O(1) валидация
```

## Troubleshooting

### Частые проблемы

1. **Цвет не найден**

   ```typescript
   // Ошибка: Color not found: backgrounds.primary
   // Решение: Используйте getUIColor('backgrounds.primary')
   ```

2. **Неправильный формат цвета**

   ```typescript
   // Ошибка: Invalid hex color format
   // Решение: Используйте формат #rrggbb
   ```

3. **Проблемы с миграцией**

   ```typescript
   // Ошибка: Old color reference not found
   // Решение: Проверьте маппинг в migration.getLegacyMapping()
   ```

### Отладка

```typescript
import { paletteStats } from 'src/theme/palette/index'

// Проверка статистики палитры
console.log(paletteStats)
// {
//   primitiveColors: 70,
//   semanticColors: 24,
//   uiColors: 45,
//   syntaxColors: 35,
//   totalColors: 174,
//   redundancyRate: 0
// }
```

## Заключение

Новая семантическая цветовая система Tokyo Night Modern обеспечивает:

- **Лучшую поддерживаемость** - явная семантика каждого цвета
- **Высокую масштабируемость** - легкость добавления новых цветов
- **Улучшенную производительность** - 97% сокращение избыточности
- **Обратную совместимость** - поддержка существующего кода
- **Профессиональный подход** - соответствие industry best practices

Эта система закладывает прочный фундамент для дальнейшего развития темы и обеспечивает высокое качество кода.
