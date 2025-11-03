# Рефакторинг палитры цветов

## Текущие проблемы

1. **Дублирование концепций**
   - `interactive`, `special`, `ui`, `elements` - пересекающиеся области
   - Сложно понять, где какой цвет использовать

2. **Несогласованная структура**
   - `blue`: {primary, light, medium}
   - `purple`: {light, dark, bright}
   - `yellow`: {main, light, muted}
   - Нет единого подхода

3. **Недоиспользование UNIFIED_PALETTE**
   - Есть `basePalette` с единой структурой {dark, main, light, bright}
   - Но генерируется сложная `palette` с разными структурами

4. **Избыточность**
   - 7 вспомогательных палитр (special, ui, brackets, git, interactive, elements)
   - Многие цвета можно получить напрямую из UNIFIED_PALETTE

## Предложение: Упрощенная структура

```typescript
export interface SimplifiedPalette {
  // Базовые цвета из UNIFIED_PALETTE
  bg: ColorVariant      // {dark, main, light, bright}
  fg: ColorVariant

  // Акцентные цвета из UNIFIED_PALETTE
  blue: ColorVariant
  cyan: ColorVariant
  teal: ColorVariant
  green: ColorVariant
  purple: ColorVariant
  orange: ColorVariant
  yellow: ColorVariant
  red: ColorVariant
  pink: ColorVariant
  neutral: ColorVariant

  // Только специфичные UI цвета
  ui: {
    white: string
    black: string
    badge: string
  }
}
```

## Преимущества

1. ✅ **Единая структура** - все цвета имеют {dark, main, light, bright}
2. ✅ **Простота** - меньше концепций для запоминания
3. ✅ **Гибкость** - можно использовать `alpha()`, `lighten()`, `darken()` на месте
4. ✅ **Согласованность** - все цвета из одного источника (UNIFIED_PALETTE)

## План миграции

### Этап 1: Упростить generated.ts

- Убрать вспомогательные палитры (special, interactive, elements)
- Использовать напрямую basePalette с ColorVariant

### Этап 2: Обновить UI генераторы

- Заменить `special.badge` → `ui.badge`
- Заменить `interactive.hover` → `alpha(purple.dark, 0.2)`
- Заменить `elements.indentGuides` → `lighten(bg.main, 0.08)`

### Этап 3: Удалить устаревшие типы

- Убрать SpecialPalette, InteractivePalette, ElementsPalette
- Оставить только ColorVariant и минимальный UIPalette

## Примеры использования

**Было:**

```typescript
'list.hoverBackground': interactive.hover,
'editor.selectionBackground': special.selection,
```

**Стало:**

```typescript
'list.hoverBackground': alpha(purple.dark, 0.15),
'editor.selectionBackground': alpha(blue.light, 0.2),
```

**Преимущества:**

- Видно, какой цвет и с какой прозрачностью
- Легко настроить
- Не нужно искать в generated.ts
