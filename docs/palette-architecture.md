# Архитектура улучшенной палитры

*Последнее обновление: 2025-11-16*

## Обзор

Новая архитектура палитры обеспечивает улучшенную читаемость, переиспользуемость и поддерживаемость через унификацию структур, семантические абстракции и декларативную конфигурацию.

## Основные принципы

### 1. Единая структура вариантов цветов

Все цвета используют стандартизированную 9-уровневую шкалу оттенков:

```typescript
interface ColorVariant {
  50: string;   // Самый светлый (почти белый)
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;  // Основной цвет (main)
  600: string;
  700: string;
  800: string;
  900: string;  // Самый темный (почти черный)
}
```

### 2. Семантические константы

Все часто используемые значения вынесены в именованные константы:

```typescript
// Состояния UI элементов
export const UI_STATES = {
  hover: { opacity: 0.1, lighten: 0.05 },
  active: { opacity: 0.25, lighten: 0.1 },
  focus: { opacity: 0.3, lighten: 0.08 },
  disabled: { opacity: 0.5 }
} as const;

// Семантические цвета компонентов
export const COMPONENTS = {
  primary: 'indigo',
  secondary: 'purple',
  success: 'emerald',
  warning: 'amber',
  error: 'red',
  info: 'blue'
} as const;
```

### 3. Декларативная конфигурация

Генерация палитры описывается декларативно через конфигурацию:

```typescript
const PALETTE_CONFIG = {
  backgrounds: {
    base: { lightness: 0.02, saturate: 0.1 },
    elevated: { lightness: 0.04, saturate: 0.15 },
    inset: { lightness: -0.02, saturate: 0.05 }
  },
  foregrounds: {
    primary: { lightness: 0.1, saturate: 0.2 },
    secondary: { lightness: 0.05, saturate: 0.15 },
    muted: { lightness: 0, saturate: 0.1 },
    disabled: { lightness: -0.1, saturate: -0.2 }
  }
} as const;
```

### 4. Фабрики компонентов

Для типовых паттернов используются фабричные функции:

```typescript
// Создание интерактивных цветов
const createInteractiveColors = (baseColor: string, options?: InteractiveOptions) => ({
  background: baseColor,
  hover: lighten(baseColor, UI_STATES.hover.lighten),
  active: lighten(baseColor, UI_STATES.active.lighten),
  focus: alpha(baseColor, UI_STATES.focus.opacity),
  disabled: alpha(baseColor, UI_STATES.disabled.opacity)
});

// Создание цветов границ
const createBorderColors = (bg: string, accent: string) => ({
  default: borderColor(bg, accent),
  focus: borderColor(bg, lighten(accent, 0.1)),
  error: borderColor(bg, palette.chromatic.red[500])
});
```

## Структура файлов

### Новая иерархия

```
src/theme/palette/
├── core/
│   ├── constants.ts          # Семантические константы
│   ├── variants.ts           # Унифицированные варианты
│   └── factories.ts          # Фабричные функции
├── config/
│   ├── base-colors.ts        # Базовые цвета
│   ├── generation-config.ts  # Конфигурация генерации
│   └── semantic-mappings.ts  # Семантические отображения
├── generated/
│   ├── chromatic.ts          # Сгенерированные хроматические цвета
│   ├── semantic.ts           # Семантические цвета
│   └── ui.ts                 # UI цвета
├── index.ts                  # Главный экспорт
└── types.ts                  # Типы палитры
```

### Устаревшая структура (для миграции)

```
src/theme/palette/
├── base-colors.ts           # → config/base-colors.ts
├── universal-base.ts        # → core/variants.ts
├── universal-generated.ts   # → generated/
└── index.ts                 # → index.ts (новый)
```

## Использование

### Базовое использование

```typescript
import { palette } from '../palette';

// Доступ к цветам через семантические пути
const primaryColor = palette.chromatic.indigo[500];
const hoverColor = palette.interactive.button.hover;
const borderColor = palette.ui.border.default;
```

### Использование фабрик

```typescript
import { createInteractiveColors, createBorderColors } from '../palette/core/factories';

// Создание интерактивных цветов для кнопки
const buttonColors = createInteractiveColors(palette.chromatic.indigo[500]);

// Создание цветов границ для поля ввода
const inputBorders = createBorderColors(
  palette.background.base[50],
  palette.chromatic.indigo[500]
);
```

### Безопасный доступ к цветам

```typescript
import { getColor } from '../palette';

// Типобезопасный доступ с автодополнением
const bgColor = getColor('background.base.50');
const textColor = getColor('foreground.primary.500');
const accentColor = getColor('chromatic.purple.500');
```

## Преимущества новой архитектуры

### 1. Улучшенная читаемость

- Семантические имена вместо магических чисел
- Единая структура для всех цветов
- Четкое разделение ответственности

### 2. Повышенная переиспользуемость

- Фабричные функции для типовых паттернов
- Декларативная конфигурация
- Компонуемые семантические константы

### 3. Лучшая поддерживаемость

- Единый источник правды
- Строгая типизация
- Автоматическая генерация документации

### 4. Упрощенное тестирование

- Изолированные компоненты
- Предсказуемое поведение
- Легкое мокирование

## Миграция со старой структуры

### Шаг 1: Обновление импортов

```typescript
// Было
import { baseColors, universalPalette } from '../palette';

// Стало
import { palette } from '../palette';
```

### Шаг 2: Обновление доступа к цветам

```typescript
// Было
const mainColor = universalPalette.chromatic.blue.main;
const bgColor = universalPalette.background.base.main;

// Стало
const mainColor = palette.chromatic.blue[500];
const bgColor = palette.background.base[50];
```

### Шаг 3: Использование фабрик

```typescript
// Было
const buttonConfig = {
  background: darken(palette.chromatic.indigo.dark, 0.3),
  hoverBackground: mixLight(darken(palette.chromatic.indigo.dark, 0.3), palette.chromatic.indigo.main),
  // ...
};

// Стало
const buttonConfig = createInteractiveColors(palette.chromatic.indigo[500]);
```

## Расширение палитры

### Добавление нового цвета

```typescript
// В config/base-colors.ts
export const baseColors = {
  // ... существующие цвета
  coral: '#ff6b6b',
};

// Автоматически сгенерируется полный набор вариантов
// palette.chromatic.coral[50] ... palette.chromatic.coral[900]
```

### Добавление новой семантической константы

```typescript
// В core/constants.ts
export const UI_STATES = {
  // ... существующие состояния
  highlighted: { opacity: 0.15, lighten: 0.12 },
};
```

### Создание новой фабрики

```typescript
// В core/factories.ts
export const createAlertColors = (type: 'success' | 'warning' | 'error' | 'info') => {
  const baseColor = palette.chromatic[COMPONENTS[type]][500];
  return {
    background: alpha(baseColor, 0.1),
    border: alpha(baseColor, 0.3),
    text: baseColor,
    icon: baseColor
  };
};
```

## Тестирование

### Unit тесты для генерации палитры

```typescript
describe('Palette Generation', () => {
  test('should generate consistent color variants', () => {
    expect(palette.chromatic.blue[500]).toBe('#4aaaf8');
    expect(palette.chromatic.blue[600]).toBeLighterThan(palette.chromatic.blue[700]);
  });

  test('should ensure contrast ratios', () => {
    const contrast = getContrastRatio(
      palette.foreground.primary[500],
      palette.background.base[50]
    );
    expect(contrast).toBeGreaterThanOrEqual(4.5);
  });
});
```

### Интеграционные тесты для фабрик

```typescript
describe('Component Factories', () => {
  test('should create consistent interactive colors', () => {
    const colors = createInteractiveColors(palette.chromatic.indigo[500]);

    expect(colors.hover).toBeLighterThan(colors.background);
    expect(colors.active).toBeLighterThan(colors.hover);
  });
});
```

## Производительность

### Кэширование генерации

- Все сгенерированные цвета кэшируются при первом доступе
- Используется LRU кэш для оптимальной производительности

### Ленивая генерация

- Цветовые варианты генерируются только при необходимости
- Минимизация вычислений при загрузке темы

### Tree-shaking

- Только используемые цвета включаются в финальную сборку
- Оптимизация размера пакета

## Будущие улучшения

1. **Автоматическая генерация документации** из TypeScript типов
2. **Визуальный редактор палитры** с предпросмотром в реальном времени
3. **Автоматическая проверка контрастности** при генерации
4. **Поддержка темных/светлых режимов** через единую палитру
5. **Интеграция с design tokens** для кросс-платформенной согласованности
