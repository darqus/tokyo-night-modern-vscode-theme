# 🎨 Система адаптивных палитр Tokyo Night

Полностью переработанная система генерации тем с централизованными палитрами и возможностью программного создания вариантов.

## 🚀 Основные возможности

### ✅ Централизованная система палитр

- **Без hardcoded цветов**: Все цвета вынесены в семантические палитры
- **Модульная архитектура**: Каждый компонент темы использует централизованные ссылки
- **Семантические имена**: `extendedPalette.bg.primary` вместо `#1a1b26`

### ✅ Адаптивные трансформации

- **HSL манипуляции**: Программное изменение оттенка, насыщенности, яркости
- **Контрастность**: Автоматическое усиление контраста для доступности
- **Цветовые сдвиги**: Создание вариантов с разными цветовыми схемами

### ✅ Готовые варианты тем

- **tokyo-night**: Оригинальная тёмная тема
- **tokyo-storm**: Штормовая версия
- **tokyo-moon**: Лунная версия
- **Сезонные**: spring, summer, autumn, winter
- **Доступность**: high-contrast, low-contrast, protanopia, deuteranopia

## 📦 Использование

### Генерация всех тем

```bash
npm run generate:all
```

### Генерация отдельных категорий

```bash
npm run generate:variants      # Основные варианты
npm run generate:seasonal      # Сезонные темы
npm run generate:accessibility # Темы для доступности
npm run generate:demo          # Демонстрационные темы
```

### CLI интерфейс

```bash
# Создать кастомную тему
npm run theme-cli custom --name=my-theme --display="My Theme" --hue=30 --saturation=1.2

# Анализировать палитру
npm run theme-cli analyze

# Экспортировать палитру в CSS
npm run theme-cli export --format=css --prefix=--my-theme
```

## 🛠 Программный интерфейс

### Создание кастомной темы

```typescript
import { AdaptiveThemeGenerator } from './src/generators/adaptive-theme-generator'

const customTheme = AdaptiveThemeGenerator.createCustomTheme(
  'my-theme',
  'My Custom Theme',
  {
    hueShift: 45,           // Сдвиг оттенка на 45°
    saturationMultiplier: 1.3, // Увеличить насыщенность на 30%
    lightnessOffset: 5,     // Увеличить яркость на 5 единиц
    contrastBoost: 1.2      // Усилить контраст на 20%
  },
  'dark'
)
```

### Работа с палитрами

```typescript
import { createAdaptedPalette, paletteVariants } from './src/palette/adapters'

// Создать адаптированную палитру
const adaptedPalette = createAdaptedPalette('tokyo-storm')

// Смешать палитры
const mixedPalette = createAdaptedPalette('custom', {
  mixWith: 'tokyo-storm',
  mixRatio: 0.3
})
```

## 📁 Структура системы

```
src/
├── palette/
│   ├── extended.ts        # Централизованная палитра (80+ цветов)
│   ├── adapters.ts        # Система адаптации палитр
│   └── core.ts           # Базовые цвета
├── generators/
│   ├── adaptive-theme-generator.ts  # Генератор адаптивных тем
│   └── theme-generator.ts          # Интеграционный модуль
├── cli/
│   └── theme-cli.ts      # CLI интерфейс
└── theme/
    ├── base.ts           # Базовые цвета UI
    ├── editor.ts         # Цвета редактора
    ├── lists.ts          # Списки и деревья
    └── ...               # Другие компоненты
```

## 🎯 Миграция завершена

### До миграции

```typescript
// Hardcoded цвета везде
colors: {
  'editor.background': '#1a1b26',
  'editor.foreground': '#a9b1d6',
  // ... 200+ hardcoded значений
}
```

### После миграции

```typescript
// Семантические ссылки
import { extendedPalette } from '../palette/extended'

colors: {
  'editor.background': extendedPalette.bg.primary,
  'editor.foreground': extendedPalette.text.primary,
  // ... все цвета централизованы
}
```

## 🌈 Возможности адаптации

### Цветовые трансформации

- **Оттенок**: -180° до +180°
- **Насыщенность**: 0.1× до 3.0×
- **Яркость**: -50 до +50 единиц
- **Контраст**: 0.1× до 3.0×

### Предустановленные варианты

```typescript
const variants = {
  'tokyo-storm': () => stormVariant(),
  'tokyo-moon': () => moonVariant(),
  'warm': () => warmVariant(),
  'cool': () => coolVariant(),
  'monochrome': () => monochromeVariant()
}
```

### Экспорт в различные форматы

- **JSON**: Стандартный формат палитр
- **CSS**: CSS Custom Properties
- **SCSS**: SASS переменные
- **Figma**: Токены для дизайн-системы

## 🚀 Дальнейшее развитие

### Готовые возможности

- ✅ Программная генерация неограниченного количества тем
- ✅ A/B тестирование цветовых схем
- ✅ Сезонные и тематические варианты
- ✅ Поддержка цветовой слепоты
- ✅ Экспорт в дизайн-системы

### Планы

- 🔄 Интеграция с внешними API для цветов
- 🔄 Машинное обучение для оптимизации палитр
- 🔄 Интерактивный веб-редактор тем
- 🔄 Синхронизация с облачными сервисами

## 💻 Команды разработки

```bash
# Сборка темы
npm run build

# Валидация
npm run validate:all

# Тестирование
npm run test

# Анализ палитры
npm run theme-cli analyze

# Создание кастомной темы
npm run theme-cli custom --name=custom --hue=60 --saturation=1.5
```

---

🎉 **Система полностью готова к использованию!**

Теперь Tokyo Night поддерживает программную генерацию тем с помощью централизованных палитр и мощных утилит адаптации.
