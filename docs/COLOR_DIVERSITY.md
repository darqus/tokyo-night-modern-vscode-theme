# Цветовое разнообразие токенов

Дата последнего обновления: 2025-11-03

## Анализ

Проведен анализ цветового разнообразия токенов подсветки синтаксиса для улучшения различимости соседних элементов кода.

## Результаты

### Метрики

- **Всего токенов**: 125
- **Уникальных цветов**: 31
- **Контрастность**: 98% соответствие WCAG AA

### Основные категории

| Категория | Уникальных цветов | Токенов |
|-----------|-------------------|---------|
| Переменные | 4 | 6 |
| Функции | 5 | 6 |
| Ключевые слова | 5 | 6 |
| Типы | 7 | 12 |
| Строки | 1 | 1 |
| Комментарии | 2 | 3 |

## Улучшения

### Переменные

- **Базовые переменные**: `#7dcfff` (cyan) - контраст 10.07:1 ✅ AAA
- **Object properties**: `#a0abe0` (brighter) - различаются от базовых
- **Class names**: `#e0af68` (yellow) - максимальное отличие

### Функции

- **Methods/Functions**: `#7aa2f7` (blue) - контраст 6.86:1 ✅ AA
- Различные оттенки для разных типов функций

### Ключевые слова

- **Keywords**: `#bb9af7` (purple) - контраст 7.47:1 ✅ AAA
- **Operators**: `#89ddff` (cyan bright) - отличается от переменных

## Утилиты

### Расчет цветового расстояния

```typescript
getColorDistance(color1: string, color2: string): number
```

Вычисляет евклидово расстояние между цветами в RGB пространстве.

### Проверка похожести

```typescript
areColorsSimilar(color1: string, color2: string, threshold = 50): boolean
```

Определяет, являются ли цвета слишком похожими (расстояние < порога).

### Генерация цветовых вариантов

Файл [`color-generator.ts`](../src/theme/utils/color-generator.ts:1) содержит утилиты для создания цветовых шкал:

```typescript
generateBackgroundScale(base: string): {
  darkest: string
  darker: string
  dark: string
  main: string
  editor: string
  light: string
  lighter: string
  lightest: string
}

generateForegroundScale(base: string): {
  dim: string
  muted: string
  medium: string
  bright: string
  brighter: string
  brightest: string
}

generateColorVariants(base: string): {
  dark: string
  main: string
  light: string
  bright: string
}
```

### Работа с семантическими токенами

Файл [`semantic-tokens.ts`](../src/theme/utils/semantic-tokens.ts:1) предоставляет утилиты для создания семантических токенов:

```typescript
createSemanticToken(config: SemanticTokenConfig): SemanticTokenStyle

createSemanticTokenGroup(
  baseConfig: SemanticTokenConfig,
  variants: Record<string, Partial<SemanticTokenConfig>>
): Record<string, SemanticTokenStyle>

alpha(color: string, opacity: number): string
```

## Скрипты

- `npm run analyze:colors` - анализ цветового разнообразия
- `npm run check:syntax` - проверка контрастности токенов
- `npm run check:contrast` - проверка контрастности UI

## Рекомендации

1. Соседние токены (переменная-функция, класс-метод) имеют различные цвета
2. Все цвета соответствуют WCAG AA (контраст ≥4.5:1)
3. Ключевые элементы (переменные, функции) имеют AAA уровень контраста
