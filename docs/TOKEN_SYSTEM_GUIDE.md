# Руководство по системе дизайн-токенов Tokyo Night Modern

## Обзор системы

Система дизайн-токенов Tokyo Night Modern предоставляет единый источник правды (Single Source of Truth) для всех визуальных стилей темы. Эта система позволяет централизованно управлять цветами, отступами, типографикой и другими визуальными свойствами.

### Основные принципы

1. **Семантическое именование** - токены именуются по их назначению, а не по значению
2. **Иерархическая структура** - токены организованы в логическую иерархию
3. **Масштабируемость** - система поддерживает несколько тем и различные состояния компонентов
4. **Централизованное управление** - все визуальные решения определяются в одном месте

### Структура токенов

Токены организованы по следующей схеме:

```
[категория].[свойство].[вариант]-[состояние]
```

- **Категория** - тип токена (color, space, typography)
- **Свойство** - конкретное CSS свойство или назначение
- **Вариант** - модификатор, описывающий роль токена
- **Состояние (опционально)** - модификатор для интерактивных состояний

## Использование токенов

### В TypeScript/JavaScript

Для получения значений токенов используется функция `getToken()`:

```typescript
import { getToken } from './theme/design-tokens';

// Получение основного цвета фона для темной темы (по умолчанию)
const primaryBgColor = getToken('color.background.primary'); // -> '#10151d'

// Получение цвета текста для светлой темы
const primaryTextColorLight = getToken('color.text.primary', 'light'); // -> '#1a1a1a'

// Получение размера отступа
const mediumSpace = getToken('space.md', 'dark'); // -> '16px'
```

### В CSS

Система генерирует CSS Custom Properties, которые можно использовать в стилях:

```css
.my-component {
  background-color: var(--tokyo-night-color-background-primary, #10151d);
  color: var(--tokyo-night-color-text-primary, #a9b1d6);
  padding: var(--tokyo-night-space-md, 16px);
}
```

## Категории токенов

### Цветовые токены (color)

#### `color.background`

- `primary` - основной фон приложения
- `secondary` - для боковых панелей, вспомогательных секций
- `tertiary` - для элементов, требующих легкого визуального отделения
- `elevated` - для "приподнятых" поверхностей, таких как модальные окна
- `overlay` - для затемняющих оверлеев

#### `color.text`

- `primary` - основной цвет текста
- `secondary` - для менее важного текста, подписей
- `tertiary` - для метаданных и другой второстепенной информации
- `disabled` - для неактивного текста
- `inverse` - для текста на цветных или темных фонах
- `placeholder` - для текста-заполнителя в полях ввода

#### `color.border`

- `default` - стандартный цвет границ
- `subtle` - более мягкий цвет для разделителей
- `focus` - цвет границы элемента в фокусе
- `error`, `warning`, `success` - цвета границ для соответствующих состояний

#### `color.interactive`

- `primary`, `primary-hover`, `primary-active` - состояния основной кнопки
- `secondary`, `secondary-hover`, `secondary-active` - состояния вторичной кнопки
- `disabled`, `disabled-text` - состояния неактивного элемента
- `link`, `link-hover` - состояния ссылок

#### `color.status`

- `success`, `warning`, `error`, `info` - цвета для сообщений о состоянии

#### `color.special`

- `shadow` - цвет теней
- `focusRing` - цвет кольца фокуса
- `selection` - фон для выделенного текста
- `highlight` - фон для подсветки результатов поиска

### Токены отступов (space)

#### `space`

- `none` - 0px
- `xs` - 4px
- `sm` - 8px
- `md-sm` - 12px
- `md` - 16px
- `md-lg` - 20px
- `lg` - 24px
- `xl` - 32px
- `2xl` - 40px
- `3xl` - 48px
- `4xl` - 64px

### Типографские токены (typography)

#### `typography.font-family`

- `primary` - основное семейство шрифтов
- `code` - семейство шрифтов для кода
- `heading` - семейство шрифтов для заголовков

#### `typography.font-size`

- `xl` - 20px
- `lg` - 16px
- `md` - 13px
- `sm` - 12px
- `xs` - 11px

#### `typography.font-weight`

- `thin` - 100
- `extra-light` - 200
- `light` - 300
- `normal` - 400
- `medium` - 500
- `semi-bold` - 600
- `bold` - 700
- `extra-bold` - 800
- `black` - 900

#### `typography.line-height`

- `xs` - 1
- `sm` - 1.25
- `md` - 1.5
- `lg` - 1.75
- `xl` - 2

#### `typography.letter-spacing`

- `tight-xl` -0.04em
- `tight-lg` - -0.03em
- `tight-md` - -0.02em
- `tight-sm` - -0.01em
- `normal` - 0
- `loose-sm` - 0.01em
- `loose-md` - 0.02em
- `loose-lg` - 0.03em
- `loose-xl` - 0.04em

### Токены границ (border)

#### `border.width`

- `none` - 0
- `thin` - 1px
- `md` - 2px
- `thick` - 3px

#### `border.style`

- `solid` - solid
- `dashed` - dashed
- `dotted` - dotted
- `double` - double

### Токены радиуса (radius)

#### `radius`

- `none` - 0px
- `xs` - 2px
- `sm` - 4px
- `md` - 6px
- `lg` - 8px
- `xl` - 12px
- `full` - 999px

### Токены теней (shadow)

#### `shadow`

- `none` - none
- `inner-sm` - inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- `inner` - inset 0 1px 3px 0 rgba(0, 0, 0, 0.1)
- `inner-lg` - inset 0 1px 4px 0 rgba(0, 0, 0, 0.15)
- `sm` - 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- `md` - 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
- `lg` - 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0.06)
- `xl` - 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
- `2xl` - 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
- `3xl` - 0 25px 50px -12px rgba(0, 0, 0, 0.25)

### Токены z-index (z-index)

#### `z-index`

- `auto` - auto
- `0` - 0
- `10` - 10
- `20` - 20
- `30` - 30
- `40` - 40
- `50` - 50
- `dropdown` - 1000
- `sticky` - 1020
- `fixed` - 1030
- `overlay` - 1040
- `modal` - 1050
- `modal-backdrop` - 1040
- `popover` - 1060
- `tooltip` - 1070

## Поддержка тем

Система изначально спроектирована для поддержки нескольких тем. Функция `getToken()` позволяет получить значение токена для конкретной темы:

```typescript
// Для темной темы
const darkColor = getToken('color.background.primary', 'dark');

// Для светлой темы
const lightColor = getToken('color.background.primary', 'light');
```

## Валидация токенов

Система включает в себя инструменты для валидации токенов:

```typescript
import { tokenValidation } from './theme/token-validation';

// Валидация всех токенов
const result = tokenValidation.runAllValidations();
if (!result.isValid) {
  console.error('Ошибки валидации:', result.errors);
  console.warn('Предупреждения валидации:', result.warnings);
}

// Валидация конкретного токена
const tokenResult = tokenValidation.validateToken('color.text.primary', 'dark');
```

Валидация проверяет:

- Корректность формата цветов
- Соответствие WCAG по контрастности
- Согласованность структуры между темами

## Генерация CSS Custom Properties

Система позволяет генерировать CSS Custom Properties для использования в стилях:

```typescript
import { cssGenerator } from './theme/token-utils';

// Генерация CSS для темной темы
const darkCSS = cssGenerator.generateDarkThemeCSS();

// Генерация CSS для светлой темы
const lightCSS = cssGenerator.generateLightThemeCSS();

// Генерация полного CSS
const completeCSS = cssGenerator.generateCompleteCSS();
```

## Расширение системы

Для добавления новых категорий токенов:

1. Добавьте новую категорию в объект `tokens` в [`src/theme/design-tokens.ts`](../src/theme/design-tokens.ts)
2. При необходимости добавьте соответствующие значения для светлой темы в [`src/theme/light-theme-tokens.ts`](../src/theme/light-theme-tokens.ts)
3. Обновите документацию

Для добавления новых токенов в существующую категорию:

1. Добавьте токен в соответствующую секцию в [`src/theme/design-tokens.ts`](../src/theme/design-tokens.ts)
2. При необходимости добавьте значение для светлой темы в [`src/theme/light-theme-tokens.ts`](../src/theme/light-theme-tokens.ts)
3. Убедитесь, что токен проходит валидацию

## Лучшие практики

1. **Используйте семантические названия** - токены должны описывать назначение, а не внешний вид
2. **Следуйте иерархии** - используйте существующую структуру токенов
3. **Проверяйте контрастность** - убедитесь, что цветовые комбинации соответствуют WCAG
4. **Тестируйте обе темы** - изменения должны работать в обеих темах
5. **Используйте валидацию** - запускайте систему валидации перед коммитом

## Автоматизация систем дизайн-токенов

Tokyo Night Modern включает набор скриптов для автоматизации работы с дизайн-токенами, что упрощает поддержку и экспорт токенов в различные форматы.

### Скрипты автоматизации

#### 1. Генерация CSS Custom Properties

Скрипт `scripts/generate-css-variables.ts` преобразует дизайн-токены в CSS Custom Properties:

```bash
npm run generate-css
```

Или запустите напрямую:

```bash
npx tsx scripts/generate-css-variables.ts
```

Скрипт генерирует:
- `dist/theme-variables.css` - полный CSS с обеими темами
- `dist/theme-variables-dark.css` - только темная тема
- `dist/theme-variables-light.css` - только светлая тема

#### 2. Экспорт токенов в JSON

Скрипт `scripts/export-tokens-json.ts` экспортирует токены в формате JSON для использования в других системах:

```bash
npm run export-tokens
```

Или запустите напрямую:

```bash
npx tsx scripts/export-tokens-json.ts
```

Скрипт создает:
- `dist/tokens-dark.json` - токены для темной темы в плоском формате
- `dist/tokens-light.json` - токены для светлой темы в плоском формате
- `dist/tokens-combined.json` - токены для обеих тем
- `dist/tokens-figma-dark.json` - токены для темной темы в формате, совместимом с Figma
- `dist/tokens-figma-light.json` - токены для светлой темы в формате, совместимом с Figma

#### 3. Синхронизация токенов

Скрипт `scripts/sync-tokens.ts` проверяет синхронизацию между исходными токенами и экспортированными файлами:

```bash
npm run sync-tokens
```

Или запустите напрямую:

```bash
npx tsx scripts/sync-tokens.ts
```

Скрипт проверяет:
- Соответствие исходных токенов экспортированным файлам
- Структурную согласованность между темами
- Наличие всех токенов в экспортированных форматах

#### 4. Валидация токенов при генерации

Скрипт `scripts/validate-tokens-generation.ts` запускает полную валидацию токенов перед генерацией:

```bash
npm run validate-tokens
```

Или запустите напрямую:

```bash
npx tsx scripts/validate-tokens-generation.ts
```

Скрипт:
- Проверяет корректность всех значений токенов
- Проверяет соответствие WCAG по контрастности
- Проверяет структурную согласованность между темами
- Создает отчет о валидации в `dist/validation-report.json`
- Прерывает генерацию при наличии ошибок

### Использование в CI/CD

Для интеграции автоматизации в процесс CI/CD добавьте в ваш конфигурационный файл:

```yaml
# Пример для GitHub Actions
- name: Validate tokens
  run: npx tsx scripts/validate-tokens-generation.ts

- name: Generate CSS variables
  run: npx tsx scripts/generate-css-variables.ts

- name: Export tokens
  run: npx tsx scripts/export-tokens-json.ts

- name: Sync tokens
  run: npx tsx scripts/sync-tokens.ts
```

### Настройка npm-скриптов

Добавьте в `package.json` следующие скрипты для удобства:

```json
{
  "scripts": {
    "tokens:generate-css": "tsx scripts/generate-css-variables.ts",
    "tokens:export": "tsx scripts/export-tokens-json.ts",
    "tokens:sync": "tsx scripts/sync-tokens.ts",
    "tokens:validate": "tsx scripts/validate-tokens-generation.ts",
    "tokens:all": "tsx scripts/validate-tokens-generation.ts && tsx scripts/generate-css-variables.ts && tsx scripts/export-tokens-json.ts && tsx scripts/sync-tokens.ts"
  }
}
```

### Форматы экспорта

Система поддерживает экспорт токенов в нескольких форматах:

1. **JSON (плоский)** - для использования в JavaScript/TypeScript приложениях
2. **CSS Custom Properties** - для использования в веб-приложениях
3. **Figma Tokens** - для импорта в Figma через плагины
4. **Комбинированный JSON** - для использования в системах, требующих обе темы

Каждый формат включает в себя как темную, так и светлую тему, где это применимо.
