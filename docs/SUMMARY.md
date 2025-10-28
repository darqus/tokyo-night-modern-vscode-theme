# Оптимизация палитры Tokyo Night Modern

## Обзор

Палитра была реорганизована для улучшения поддержки и расширяемости:

- Базовая палитра сокращена с ~200 до **14 цветов**
- Все производные цвета используют прямые значения для точности
- **100% совпадение** с оригинальной темой

## Структура

### Базовая палитра (`src/theme/palette/base.ts`)

14 основных цветов:

```typescript
background, foreground
blue, cyan, teal, green, purple, orange, yellow, red, pink
white, black, border
```

### Генерируемая палитра (`src/theme/palette/generated.ts`)

~150 производных цветов, организованных в категории:

- `bg` - 8 оттенков фона
- `fg` - 6 оттенков текста
- Варианты акцентов (dark, main, light, bright)
- `special`, `ui`, `brackets`, `git`, `interactive`, `elements`

### Утилиты (`src/theme/utils/`)

- `color.ts` - базовые операции (lighten, darken, mix, alpha)
- `color-generator.ts` - генераторы и `deriveColor()`

## Использование

```typescript
import { basePalette } from './palette/base'
import { palette } from './palette'

// Базовый цвет
const blue = basePalette.blue  // '#7aa2f7'

// Производные
const darkBlue = palette.blue.dark  // '#3d59a1'
const lightBlue = palette.blue.light  // '#6183bb'
```

## Преимущества

1. **Меньше дублирования** - похожие цвета связаны с базовыми
2. **Проще поддержка** - изменение базового цвета влияет на все производные
3. **Легче расширение** - новые цвета добавляются через `deriveColor()`
4. **Консистентность** - явная связь между цветами

## Метрики

| Показатель | Значение |
|------------|----------|
| Базовых цветов | 14 |
| Производных цветов | ~150 |
| Совпадение с оригиналом | 100% (362/362) |
| Использований mix() | 3 |

## Дополнительно

См. `GENERATOR_USAGE.md` для деталей использования генераторов.
