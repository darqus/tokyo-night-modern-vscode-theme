# Использование генераторов цветов

## Функция mix()

```typescript
mix(color1: string, color2: string, ratio: number): string
```

Смешивает два цвета в заданной пропорции.

**Параметры:**
- `color1` - первый цвет
- `color2` - второй цвет
- `ratio` - коэффициент смешивания (0-1)

**Пример:**
```typescript
ui: {
  scmGraphRef: mix(basePalette.blue, basePalette.purple, 0.3),
}

brackets: {
  cyan: mix(basePalette.cyan, basePalette.blue, 0.3),
}
```

## Доступные генераторы

```typescript
// Генерация шкалы фона (8 оттенков)
generateBackgroundScale(base: string)

// Генерация шкалы текста (6 оттенков)
generateForegroundScale(base: string)

// Генерация вариантов цвета (dark, main, light, bright)
generateColorVariants(base: string)
```

## Текущая реализация

Все цвета в `generated.ts` используют прямые значения для гарантии 100% совпадения:

```typescript
const bg = {
  darkest: '#0f0f1a',
  main: basePalette.background,
  light: '#1e1e33',
}
```

Для смешивания цветов используется `mix()`:

```typescript
ui: {
  scmGraphRef: mix(basePalette.blue, basePalette.purple, 0.3),
}
```

## Будущие улучшения

Возможна автоматическая генерация после калибровки:

```typescript
// Вместо прямых значений
const bg = { darkest: '#0f0f1a', ... }

// Можно использовать
const bg = generateBackgroundScale(basePalette.background)
```
