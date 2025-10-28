# Использование генераторов цветов

## Функция deriveColor()

```typescript
deriveColor(base: string, target: string): string
```

Связывает производный цвет с базовым для документации и будущей автоматизации.

**Параметры:**

- `base` - базовый цвет из палитры (для документации)
- `target` - целевой цвет (возвращается как есть)

**Назначение:**

1. Документирование связи между цветами
2. Упрощение поиска всех производных от базового
3. Подготовка к автоматической генерации

## Примеры

### Фоновые цвета

```typescript
const bg = {
  main: basePalette.background,
  light: deriveColor(basePalette.background, '#1e1e33'),
  lighter: deriveColor(basePalette.background, '#212138'),
}
```

### Акцентные цвета

```typescript
blue: {
  primary: deriveColor(basePalette.blue, '#3d59a1'),
  medium: basePalette.blue,
  light: deriveColor(basePalette.blue, '#6183bb'),
}
```

### Смешанные цвета

```typescript
ui: {
  scmGraphRef: mix(basePalette.blue, basePalette.purple, 0.3),
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

## Будущие улучшения

Возможна замена `deriveColor()` на автоматическую генерацию после калибровки коэффициентов:

```typescript
// Текущий подход
darkest: deriveColor(basePalette.background, '#0f0f1a')

// Будущий подход
darkest: darken(basePalette.background, 0.15)
```
