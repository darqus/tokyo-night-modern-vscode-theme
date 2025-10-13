# Система цветов для темы Tokyo Night Modern

## Обзор

Этот документ описывает архитектуру и подход к организации цветовой палитры в теме Tokyo Night Modern для VS Code. Цель системы - обеспечить максимальное переиспользование цветов, упростить сопровождение и поддерживать визуальную согласованность темы.

## Архитектура новой системы

### 1. Базовая палитра

Базовая палитра состоит из основных цветов, из которых генерируются все производные цвета. Она является **единственным источником правды** для всех цветов в теме.

```typescript
// src/theme/palette.ts
const baseColors: ColorPalette = {
  // --- Backgrounds ---
  background: '#10151d',
  backgroundAlt: '#0a1018',
  backgroundDim: '#17233d',

  // --- Foreground ---
  foreground: '#c0caf5',

  // --- Accent Colors ---
  blue: '#7aa2f7',
  purple: '#bb9af7',
  green: '#9ece6a',
  yellow: '#e0af68',
  orange: '#ff9e64',
  red: '#db4b4b',
  cyan: '#7dcfff',

  // --- Syntax Colors ---
  comment: '#696F87',
  constant: '#e55381',
  string: '#85d0b7',
  keyword: '#9d7cd8',
  variable: '#c0caf5',

  // --- UI Colors (specific, not derivable) ---
  border: '#4e6ab2',
  borderFocus: '#131e2b',
  white: '#ffffff',
  black: '#000000',
  transparent: '#00000000',
  editorRuler: '#0f141c',
  sashHoverBorder: '#29355a',
}
```

### 2. Система генерации производных цветов

Для каждого базового цвета (кроме `transparent`, `black`, `white`) автоматически генерируются производные оттенки с помощью библиотеки `tinycolor2`:

- `colorLight`: на 20% светлее
- `colorDark`: на 20% темнее
- `colorMuted`: на 20% менее насыщенный
- `colorBright`: на 20% более насыщенный

Это реализовано в функции `generateDerivativeColors` в файле [`src/theme/color-utils.ts`](src/theme/color-utils.ts).

```typescript
// src/theme/color-utils.ts
export function generateDerivativeColors(baseColor: string): DerivativeColors {
  return {
    light: adjustLightness(baseColor, 0.2),
    dark: adjustLightness(baseColor, -0.2),
    muted: adjustSaturation(baseColor, -0.2),
    bright: adjustSaturation(baseColor, 0.2),
  }
}
```

### 3. Система альфа-каналов

Для каждого базового и производного цвета генерируются альфа-варианты с разной прозрачностью (10%, 20%, ..., 90%).

```typescript
// src/theme/palette.ts
const alphaValues: AlphaValues = {
  '10': '1A',
  '20': '33',
  '30': '4D',
  '40': '66',
  '50': '80',
  '60': '99',
  '70': 'B3',
  '80': 'CC',
  '90': 'E6',
}
```

### 4. Иерархия и именование

Цвета организованы в следующие категории:

1. `baseColors`: базовая палитра.
2. `derivedColors`: производные цвета, сгенерированные из `baseColors`.
3. `legacyColors`: старые цвета для обратной совместимости, которые будут постепенно удаляться.

Имена производных цветов строятся по принципу `baseColorName` + `Variant`, например: `blueLight`, `backgroundDark`, `orangeMuted`.

Альфа-варианты именуются как `colorName` + `Alpha` + `percentage`, например: `blueAlpha10`, `foregroundAlpha50`.

## Преимущества новой системы

1. **Уменьшение дублирования**: Производные цвета генерируются автоматически.
2. **Согласованность**: Все цвета основаны на единой базовой палитре.
3. **Легкость модификации**: Изменение базового цвета автоматически обновляет все его производные.
4. **Гибкость**: Легко добавлять новые оттенки и варианты прозрачности.
5. **Поддерживаемость**: Четкая и централизованная структура упрощает сопровождение.

## Миграция

Процесс миграции включал в себя:

1. Определение `baseColors` из существующей палитры.
2. Реализация функций `generateDerivativeColors` и `generateAlphaVariants`.
3. Рефакторинг файла `palette.ts` для использования новой структуры.
4. Обновление всех модулей токенов (`src/theme/tokens/modules/*.ts`) и UI-цветов (`src/theme/ui-modules/*.ts`) для использования новой палитры.
5. Создание `legacyColors` для обеспечения обратной совместимости и постепенного отказа от старых цветов.
